// Merkezi içerik kaynağı — tüm Türkçe metinler burada toplanır.
// TODO işaretli alanlar, gerçek kurumsal veriler sağlandığında güncellenmelidir.

export const COMPANY = {
  name: "Zirve Yemek",
  legalName: "Zirve Yemek Catering", // TODO: gerçek ticari unvan ile değiştirilmeli
  shortName: "Zirve",
  tagline: "Catering", // logodaki alt başlık
  city: "Bursa",
  district: "Nilüfer",
  addressLine: "Ertuğrul, İzmir Yolu Cd. 10.Km No:306/D, 16000 Nilüfer/Bursa",
  phoneDisplay: "+90 530 231 99 16",
  phoneHref: "+905302319916",
  email: "info@zirveyemek.com", // TODO: gerçek e-posta ile teyit edilmeli
  // "10.Km" ve posta kodu birlikte geçince Google'ın adres embed'i konumu
  // çözemiyor; bu yüzden harita sorgusu görünen addressLine'dan farklı,
  // aynı adresin geocoder-dostu bir biçimi.
  mapsQuery: "Ertuğrul Mahallesi, İzmir Yolu Caddesi No:306/D, Nilüfer, Bursa",
  social: {
    instagram: "https://instagram.com/", // TODO
    facebook: "https://facebook.com/", // TODO
    x: "https://x.com/", // TODO
    youtube: "https://youtube.com/", // TODO
    linkedin: "https://linkedin.com/", // TODO
  },
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Anasayfa" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/hizmetlerimiz", label: "Hizmetlerimiz" },
  { href: "/surdurulebilirlik", label: "Sürdürülebilirlik" },
  { href: "/iletisim", label: "İletişim" },
] as const;

export const FOOTER_LINKS = [
  ...NAV_LINKS,
  { href: "/kariyer", label: "Kariyer" },
] as const;

// TODO: illüstratif örnek rakamlardır — gerçek kapasite/personel verileriyle değiştirilmeli
export const STATS = [
  { value: 4000, suffix: "³", unit: "m", label: "Kapalı Alan" },
  { value: 250, suffix: "+", unit: "", label: "Personel" },
  { value: 25000, suffix: "", unit: "öğün / gün", label: "Üretim Kapasitesi" },
  { value: 25, suffix: "+", unit: "", label: "Soğutmalı Nakliye Aracı" },
] as const;

export const SERVICES = [
  {
    slug: "tasima-yemek-servisi",
    title: "Taşıma Yemek Servisi",
    summary:
      "Merkezi mutfağımızda hazırlanan yemekleri, soğuk zincir korunarak kurum ve kuruluşlara zamanında ve hijyenik koşullarda ulaştırıyoruz.",
    detail:
      "Filomuzdaki soğutmalı araçlarla, üretimden servise kadar geçen her aşamada sıcaklık takibi yapılır. Menü planlaması diyetisyen gözetiminde, kurumun ihtiyacına göre haftalık ve aylık olarak hazırlanır.",
  },
  {
    slug: "kurumsal-catering",
    title: "Kurumsal Catering",
    summary:
      "Fabrika ve şantiye yemekhaneleri için vardiya düzenine uygun, dengeli ve doyurucu menüler kurguluyoruz.",
    detail:
      "Vardiya saatlerine göre esnek servis planlaması, yemekhane işletmeciliği ve personel yönetimi hizmetlerini tek çatı altında sunuyoruz.",
  },
  {
    slug: "ozel-organizasyon",
    title: "Özel Organizasyon Yemek Hizmeti",
    summary:
      "Kurumsal etkinlik, tören ve özel günler için, ölçeği ne olursa olsun aynı üretim disipliniyle hazırlanan menüler sunuyoruz.",
    detail:
      "Açılış, toplu davet ve kurumsal organizasyonlarınızda; kurulum, servis ve sunumu içeren uçtan uca bir hizmet planlıyoruz.",
  },
] as const;

export const CERTIFICATIONS = [
  "ISO 9001", // TODO: mevcut sertifikalarla teyit edilmeli
  "ISO 22000",
  "HACCP",
  "TSE Hizmet Yeterlilik Belgesi",
] as const;

export const RECIPE_CARD = {
  title: "Etli Sultan Kebabı",
  duration: "45 dk",
  calorie: "612 kcal", // TODO: gerçek değer ile teyit edilmeli
  category: "Yemek Tarifleri",
} as const;

// TODO: örnek/placeholder isimlerdir — gerçek iştirak adları ve logolarıyla değiştirilmeli
export const PARTNERS = [
  { name: "Zirve Lojistik" },
  { name: "Zirve Tarım" },
  { name: "Zirve Gıda" },
  { name: "Zirve Eğitim Vakfı" },
] as const;

export const SUSTAINABILITY_PILLARS = [
  {
    title: "İnsan",
    description: "Çalışanlarımızın sağlığı, güvenliği ve gelişimi için sürdürülebilir bir çalışma ortamı.",
  },
  {
    title: "Toplum",
    description: "Hizmet verdiğimiz kurumlarda dengeli beslenme bilincini ve gıda güvenliğini önceliklendiriyoruz.",
  },
  {
    title: "Çevre",
    description: "Kaynak verimliliği, atık yönetimi ve düşük karbonlu lojistikle çevresel etkimizi azaltıyoruz.",
  },
] as const;
