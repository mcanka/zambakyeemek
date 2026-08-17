# Mekaş Yemek Sanayi — Kurumsal Web Sitesi

Referans alınan mekasyemek.com'un içerik mimarisini koruyan, "Buhar & Çelik"
adını verdiğim özgün bir görsel kimlikle yeniden tasarlanmış kurumsal site.
Next.js (App Router) + Tailwind CSS v4 ile geliştirildi, Vercel'e sıfır ek
yapılandırmayla deploy edilecek şekilde kuruldu.

## Tasarım sistemi

- **Renkler:** Un (un beyazı), Çelik (paslanmaz çelik lacivert-antrasit),
  Safran, Biber (paprika/CTA), Zeytin (sürdürülebilirlik) — bkz.
  `src/app/globals.css` içindeki `@theme` bloğu.
- **Tipografi:** Fraunces (başlıklar, serif) + IBM Plex Sans (gövde metni) +
  IBM Plex Mono (istatistik/etiket verileri).
- **İmza öğesi:** Hero bölümündeki "üretim sayacı" — günlük 30.000 öğün
  kapasitesini vurgulayan, scroll ile animasyonlu sayan bir panel.

## Başlarken

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000) adresini açın.

```bash
npm run build   # production build
npm run lint    # ESLint
```

## Proje yapısı

```
src/
  app/                 # Sayfalar (App Router) — her sayfa kendi metadata'sını export eder
  components/
    layout/            # Header, Footer, MobileMenu
    sections/          # Anasayfa ve alt sayfa bölümleri
    ui/                 # Container, Button, Placeholder, Counter, Reveal, ...
    contact/            # İletişim formu (client component)
  lib/data.ts          # Tüm Türkçe içerik ve şirket bilgileri tek yerde
```

## Görselleri değiştirme

Gerçek fotoğraflar teslim edildiğinde, şu an `<Placeholder label="..." tone="..." />`
olarak kullanılan yer tutucuları `<Placeholder src="/tesis.jpg" alt="..." ... />`
şeklinde `src` prop'u ekleyerek değiştirin — bileşen otomatik olarak optimize
edilmiş bir `next/image` çıktısına döner, başka bir değişiklik gerekmez.

## Ortam değişkenleri

`.env.example` dosyasına bakın. Özet:

| Değişken | Açıklama |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | SEO/OG/sitemap için sitenin canlı adresi |
| `RESEND_API_KEY` | İletişim formu e-posta gönderimi (resend.com) — tanımlı değilse form kullanıcıya bilgilendirme mesajı gösterir |
| `CONTACT_TO_EMAIL` | Form mesajlarının iletileceği adres |
| `CONTACT_FROM_EMAIL` | Resend'de doğrulanmış gönderen adresi |

Google Maps (İletişim sayfası), API anahtarı gerektirmeyen ücretsiz iframe
embed yöntemiyle çalışır; ek yapılandırma gerekmez.

## Vercel'e deploy

1. Bu repoyu GitHub'a push edin.
2. [vercel.com/new](https://vercel.com/new) üzerinden repoyu import edin —
   Next.js framework preset otomatik algılanır.
3. Proje ayarlarından `.env.example`'daki değişkenleri girin.
4. Deploy edin; sonraki her `main` push'unda otomatik yeniden deploy edilir.
5. Özel alan adı için proje ayarlarından **Domains** sekmesini kullanın.

## Eksik girdiler (canlıya almadan önce tamamlanmalı)

`src/lib/data.ts` içinde `TODO` yorumuyla işaretlenmiştir:

- Gerçek logo (SVG) — şu an `Mekaş` tipografik wordmark kullanılıyor
- Gerçek tesis/üretim/personel/ürün fotoğrafları (yer tutucular next/image ile değiştirilmeli)
- Açık adres, telefon, e-posta, sosyal medya hesap linkleri
- Kuruluş yılı ve güncel kapasite/personel rakamlarının teyidi
- Gerçek sertifika görselleri (ISO, HACCP vb.)
- Gerçek iştirak/grup şirketi adları ve logoları
- Medya Merkezi için gerçek haber başlıkları (şu an örnek/placeholder içerik)
- Resend hesabı ve doğrulanmış gönderen alan adı (iletişim formu için)
