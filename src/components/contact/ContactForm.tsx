"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const FIELD_CLASS =
  "w-full bg-transparent border-b rule-light py-3 text-komur placeholder:text-komur/35 focus:border-kirmizi transition-colors outline-none";

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
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setStatus("error");
      setErrorMessage("Lütfen ad soyad, e-posta ve mesaj alanlarını doldurun.");
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
          email,
          phone: String(data.get("phone") ?? ""),
          company: String(data.get("company") ?? ""),
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
      <div className="border rule-light p-8 md:p-10">
        <p className="font-mono text-xs tracking-[0.14em] uppercase text-kirmizi">Alındı</p>
        <p className="mt-4 font-display text-2xl text-komur leading-snug">
          Mesajınız için teşekkürler.
        </p>
        <p className="mt-2 text-komur/65 leading-relaxed">
          Ekibimiz en kısa sürede size dönüş yapacaktır.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-7">
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
        <div>
          <label htmlFor="name" className="block text-xs font-mono tracking-wide uppercase text-komur/50 mb-2">
            Ad Soyad *
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" className={FIELD_CLASS} />
        </div>
        <div>
          <label htmlFor="company" className="block text-xs font-mono tracking-wide uppercase text-komur/50 mb-2">
            Kurum
          </label>
          <input id="company" name="company" type="text" autoComplete="organization" className={FIELD_CLASS} />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-mono tracking-wide uppercase text-komur/50 mb-2">
            E-posta *
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className={FIELD_CLASS} />
        </div>
        <div>
          <label htmlFor="phone" className="block text-xs font-mono tracking-wide uppercase text-komur/50 mb-2">
            Telefon
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={FIELD_CLASS} />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-mono tracking-wide uppercase text-komur/50 mb-2">
          Mesajınız *
        </label>
        <textarea id="message" name="message" required rows={5} className={`${FIELD_CLASS} resize-none`} />
      </div>

      {status === "error" ? (
        <p role="alert" className="text-sm text-kirmizi">
          {errorMessage}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center gap-2.5 bg-kirmizi text-un-soft px-7 py-3.5 text-sm font-medium tracking-wide hover:bg-kirmizi-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Gönderiliyor…" : "Mesajı Gönder"}
      </button>
    </form>
  );
}
