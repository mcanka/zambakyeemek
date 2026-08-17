import { NextResponse } from "next/server";
import { COMPANY } from "@/lib/data";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  message?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Geçersiz istek." }, { status: 400 });
  }

  const name = (payload.name ?? "").trim();
  const email = (payload.email ?? "").trim();
  const phone = (payload.phone ?? "").trim();
  const company = (payload.company ?? "").trim();
  const message = (payload.message ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, message: "Ad soyad, e-posta ve mesaj alanları zorunludur." },
      { status: 400 }
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, message: "Geçerli bir e-posta adresi girin." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || COMPANY.email;

  if (!apiKey) {
    console.warn(
      "[iletisim] RESEND_API_KEY tanımlı değil — form isteği yalnızca kaydedildi, e-posta gönderilmedi.",
      { name, email, phone, company }
    );
    return NextResponse.json(
      {
        ok: false,
        message:
          "İletişim formu şu anda yapılandırılıyor. Lütfen doğrudan telefon veya e-posta ile ulaşın.",
      },
      { status: 503 }
    );
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL || "Zirve Yemek Web Sitesi <onboarding@resend.dev>",
        to: [toEmail],
        reply_to: email,
        subject: `Web sitesi iletişim formu — ${name}`,
        html: `
          <p><strong>Ad Soyad:</strong> ${escapeHtml(name)}</p>
          <p><strong>Kurum:</strong> ${escapeHtml(company || "-")}</p>
          <p><strong>E-posta:</strong> ${escapeHtml(email)}</p>
          <p><strong>Telefon:</strong> ${escapeHtml(phone || "-")}</p>
          <p><strong>Mesaj:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
        `,
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error("[iletisim] Resend gönderim hatası:", errorBody);
      return NextResponse.json(
        { ok: false, message: "Mesajınız gönderilemedi, lütfen daha sonra tekrar deneyin." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[iletisim] Beklenmeyen hata:", error);
    return NextResponse.json(
      { ok: false, message: "Mesajınız gönderilemedi, lütfen daha sonra tekrar deneyin." },
      { status: 500 }
    );
  }
}
