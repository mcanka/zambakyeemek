# Görsel Kaynakları

Bu klasördeki fotoğraflar, ticari kullanıma açık, telif ücreti gerektirmeyen
(CC0 / Public Domain) kaynaklardan alınmıştır. Atıf zorunlu değildir, ancak
kaynak takibi için burada listelenmiştir. Gerçek tesis/ürün/personel
fotoğrafları teslim edildiğinde bu dosyaların yerine geçmelidir (bkz. README
"Eksik girdiler" bölümü).

| Dosya | Kaynak | Lisans |
|---|---|---|
| mutfak-ekip.jpg | StockSnap.io | CC0 |
| ekipman-detay.jpg | rawpixel.com | CC0 |
| tarim-arazisi.jpg | StockSnap.io | CC0 |
| tesis-bina.jpg | StockSnap.io | CC0 |
| kamu-kurumlari.jpg | rawpixel.com | CC0 |
| egitim-kurumlari.jpg | USDA (ABD Tarım Bakanlığı) via Flickr | Public Domain |

## Zambak Yemek logo dosyaları (güncel marka — dairesel amblem, v2)

`dark` varyantı, marka sahibinin Canva'da hazırladığı nihai logo dosyasından
("ZAMBAK YEMEK LOGO SON VERS. - 3", koyu yeşil `#0e2a20` zeminli, 2000×2000px)
üretildi: `sharp` ile piksel bazlı chroma-key işlemiyle arka plan
şeffaflaştırıldı, kenar boşlukları kırpıldı. Bu dosya, ikonu (dairesel
çerçeveli "Z" harfi + altın zambak çiçeği) ve "ZAMBAK YEMEK" yazısını yatay
olarak yan yana konumlandırıyor (önceki v1 logosundaki dikey ikon-üstte
düzeninden farklı):

| Dosya | Kaynak | İçerik | Boyut |
|---|---|---|---|
| `zambak-logo-dark-transparent.png` | ZAMBAK YEMEK LOGO SON VERS. - 3 | İkon + "ZAMBAK YEMEK" + slogan, şeffaf zemin | 1924×886 |
| `zambak-logo-dark-compact.png` | ZAMBAK YEMEK LOGO SON VERS. - 3 | İkon + "ZAMBAK YEMEK" (slogan kırpılıp ikon+yazı yeniden ortalandı), şeffaf zemin | 1867×886 |

`compact` versiyonu, `transparent` versiyonundan slogan satırı
("LEZZETİN ZİRVESİ HİZMETİN GÜVENCESİ") çıkarılıp ikon ile yazı bloğu
yeniden dikey ortalanarak oluşturuldu — slogan, küçük yükseklikte (header/
footer boyutunda) okunaksız kaldığı için. `compact` site genelinde
varsayılan olarak kullanılır (bkz. `src/components/ui/Logo.tsx`,
`src/components/layout/MobileMenu.tsx`); `transparent` sloganın görünmesi
gereken daha büyük bağlamlar için saklanmaktadır. `<Image>` bileşenlerinde
`width`/`height` bu yeni en-boy oranına (~2.11:1) göre güncellenmiştir —
eski dosyalarla (1436×1200, ~1.2:1) karıştırılmamalıdır.

**Önemli — `light` varyantı güncellenmedi:** `zambak-logo-light-compact.png`
ve `zambak-logo-light-transparent.png` hâlâ ESKİ logo tasarımından (dikey
"Z" harfli, dairesel çerçevesiz) kalma dosyalardır; marka sahibi yalnızca
koyu zeminli yeni logoyu sağladı. Bu iki dosya şu an kodda hiçbir yerde
kullanılmıyor (`tone="light"` hiçbir bileşende çağrılmıyor), o yüzden görünür
bir tutarsızlık yok — ama `tone="light"` ileride kullanılacaksa önce açık
zeminli yeni bir logo varyantı talep edilmelidir.

### Eski logo dosyaları — ARTIK KULLANILMIYOR (eski "Zirve Yemek" markası)

`Kırmızı Arkaplan.png`, `Lacivert Arkaplan.png` ve bunlardan türetilen
`logo-navy-transparent.png`, `logo-navy-compact.png`, `logo-red-transparent.png`
dosyaları, görselin içine gömülü "ZİRVE YEMEK" yazısı ve dağ amblemi
nedeniyle artık yanlış markayı gösteriyor ve kodda hiçbir yerde
kullanılmıyor. Referans/arşiv amacıyla klasörde bırakıldı; silinmeleri
güvenlidir.
