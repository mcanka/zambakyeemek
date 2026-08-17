// Merkezi içerik kaynağı — tüm Türkçe metinler burada toplanır.
// TODO işaretli alanlar, gerçek kurumsal veriler sağlandığında güncellenmelidir.

export const COMPANY = {
  name: "Mekaş Yemek Sanayi",
  legalName: "Mekaş Yemek Sanayi ve Ticaret A.Ş.", // TODO: gerçek unvan ile teyit edilmeli
  shortName: "Mekaş",
  city: "Bursa",
  district: "Hilaller Organize Sanayi Bölgesi", // Kaynak: referans site
  addressLine: "Hilaller OSB, Bursa / Türkiye", // TODO: açık adres ile değiştirilmeli
  phoneDisplay: "0224 000 00 00", // TODO: gerçek telefon numarası
  phoneHref: "+902240000000",
  email: "info@mekasyemek.com", // TODO: gerçek e-posta ile teyit edilmeli
  mapsQuery: "Hilaller Organize Sanayi Bölgesi, Bursa",
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
  { href: "/sektorler", label: "Sektörler" },
  { href: "/uretim", label: "Üretim" },
  { href: "/medya-merkezi", label: "Medya Merkezi" },
  { href: "/surdurulebilirlik", label: "Sürdürülebilirlik" },
  { href: "/iletisim", label: "İletişim" },
] as const;

export const FOOTER_LINKS = [
  ...NAV_LINKS,
  { href: "/kariyer", label: "Kariyer" },
] as const;

// Kaynak: referans site istatistik şeridi (ekran görüntüsünden okunmuştur)
export const STATS = [
  { value: 5000, suffix: "³", unit: "m", label: "Kapalı Alan" },
  { value: 300, suffix: "+", unit: "", label: "Personel" },
  { value: 30000, suffix: "", unit: "öğün / gün", label: "Üretim Kapasitesi" },
  { value: 30, suffix: "+", unit: "", label: "Soğutmalı Nakliye Aracı" },
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

export const SECTORS = [
  {
    slug: "egitim-kurumlari",
    title: "Eğitim Kurumları",
    description:
      "Okul öncesinden yükseköğretime, öğrenci gelişimini destekleyen dengeli ve kontrollü porsiyonlu menüler.",
  },
  {
    slug: "kamu-kurumlari",
    title: "Kamu Kurumları",
    description:
      "Kamu kurum ve kuruluşlarının yemekhanelerinde, mevzuata uygun şeffaf ve denetlenebilir üretim süreci.",
  },
  {
    slug: "sanayi-kuruluslari",
    title: "Sanayi Kuruluşları",
    description:
      "Vardiya düzeninde çalışan fabrika ve tesislerde, yüksek kapasiteli ve zamanında teslimat garantili servis.",
  },
] as const;

export const PRODUCTION_STEPS = [
  {
    step: "01",
    title: "Tedarik ve Kabul",
    description: "Girdi kontrolü ve numune analizleriyle onaylı tedarikçilerden gelen ham maddenin kabulü.",
  },
  {
    step: "02",
    title: "Hazırlık",
    description: "Hijyen standartlarına uygun alanlarda yıkama, ayıklama ve porsiyonlama öncesi hazırlık.",
  },
  {
    step: "03",
    title: "Üretim",
    description: "Endüstriyel mutfak ekipmanlarında, kritik kontrol noktaları izlenerek pişirme süreci.",
  },
  {
    step: "04",
    title: "Soğuk Zincir",
    description: "Sıcaklık kaydı sürekli tutularak, soğutmalı araç filosuyla güvenli taşıma ve teslimat.",
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

export const NEWS = [
  {
    slug: "soguk-zincir-yatirimi",
    title: "Soğuk zincir filomuzu yeniliyoruz",
    excerpt:
      "Taşıma sürecinde sıcaklık güvenliğini daha da artırmak için filoya yeni soğutmalı araçlar katıyoruz.",
    date: "2026-06-12",
  },
  {
    slug: "hijyen-semineri",
    title: "Eğitim kurumlarına hijyen ve beslenme semineri",
    excerpt:
      "Hizmet verdiğimiz okullarda gıda güvenliği ve dengeli beslenme konulu bilgilendirme seminerleri düzenledik.",
    date: "2026-05-03",
  },
  {
    slug: "haccp-denetimi",
    title: "Üretim tesisimizde HACCP yenileme denetimi tamamlandı",
    excerpt:
      "Gıda güvenliği yönetim sistemimiz, bağımsız denetim kuruluşu tarafından yeniden belgelendirildi.",
    date: "2026-03-21",
  },
] as const;

export const PARTNERS = [
  { name: "Mekyem" }, // TODO: gerçek iştirak adları/logoları ile değiştirilmeli
  { name: "Mekdöner" },
  { name: "Mekpiliç" },
  { name: "Mek Gıda" },
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
