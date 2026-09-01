"use client";

import { FormEvent, useState } from "react";
import { SERVICES } from "@/lib/data";

type Status = "idle" | "submitting" | "success" | "error";

const FIELD_CLASS =
  "w-full bg-un rounded-md border border-un-line px-4 py-3 text-sm text-komur placeholder:text-komur/40 focus:border-koyu focus:outline-none transition-colors";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // Honeypot: gerçek kullanıcılar bu alanı görmez/doldurmaz.
    if (data.get("website")) {
      setStatus("success");
      return;
    }

    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !phone || !email || !message) {
      setStatus("error");
      setErrorMessage("Lütfen ad soyad, telefon, e-posta ve mesaj alanlarını doldurun.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setErrorMessage("Lütfen geçerli bir e-posta adresi girin.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          email,
          serviceType: String(data.get("serviceType") ?? ""),
          guestCount: String(data.get("guestCount") ?? ""),
          address: String(data.get("address") ?? ""),
          message,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.ok) {
        setStatus("error");
        setErrorMessage(result.message ?? "Mesajınız gönderilemedi, lütfen daha sonra tekrar deneyin.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Bir bağlantı sorunu oluştu, lütfen daha sonra tekrar deneyin.");
    }
  }

  if (status === "success") {
    return (
      <div className="border rule-light rounded-md p-8 md:p-10 bg-un">
        <p className="font-mono text-xs tracking-[0.14em] uppercase text-koyu">Alındı</p>
        <p className="mt-4 font-display text-2xl text-komur leading-snug">
          Mesajınız için teşekkürler.
        </p>
        <p className="mt-2 text-komur/65 leading-relaxed">
          Danışmanlarımız en kısa sürede sizinle irtibata geçecektir.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <input
        name="name"
        type="text"
        required
        autoComplete="name"
        placeholder="Ad Soyad"
        className={FIELD_CLASS}
      />

      <input
        name="phone"
        type="tel"
        required
        autoComplete="tel"
        placeholder="Telefon No"
        className={FIELD_CLASS}
      />

      <select name="serviceType" defaultValue="" className={`${FIELD_CLASS} text-komur/70`}>
        <option value="">Hizmet Türü</option>
        {SERVICES.map((service) => (
          <option key={service.slug} value={service.title}>
            {service.title}
          </option>
        ))}
        <option value="Diğer">Diğer</option>
      </select>

      <input
        name="guestCount"
        type="number"
        min={1}
        inputMode="numeric"
        placeholder="Kişi Sayısı"
        className={FIELD_CLASS}
      />

      <input
        name="address"
        type="text"
        autoComplete="street-address"
        placeholder="Teslimat Adresi"
        className={FIELD_CLASS}
      />

      <input
        name="email"
        type="email"
        required
        autoComplete="email"
        placeholder="E-mail"
        className={FIELD_CLASS}
      />

      <textarea
        name="message"
        required
        rows={5}
        placeholder="Mesajınız"
        className={`${FIELD_CLASS} resize-none`}
      />

      {status === "error" ? (
        <p role="alert" className="text-sm text-koyu font-medium">
          {errorMessage}
        </p>
      ) : null}

      <p className="text-xs text-komur/50 leading-relaxed">
        *Kişisel bilgileriniz üçüncü taraf yazılım ve şahıslarla paylaşılmayacaktır.
      </p>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center gap-2.5 bg-koyu text-un-soft px-7 py-3.5 text-sm font-medium tracking-wide rounded-md hover:bg-koyu-2 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Gönderiliyor…" : "Gönder"}
      </button>
    </form>
  );
}
