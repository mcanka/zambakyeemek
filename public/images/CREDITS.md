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

## Zambak Yemek logo dosyaları (güncel marka)

Marka sahibinin sağladığı iki kaynak logo görseli — `Beyaz_Zambak_Logo.png`
(beyaz zeminli, zemin rengi tam `#ffffff`) ve `Yeşil_Zambak_Logo.png` (koyu
yeşil zeminli, zemin rengi tam `#0e2a20`) — `sharp` ile piksel bazlı chroma-key
işleminden geçirilerek arka planları şeffaflaştırıldı, ardından kenarlardaki
şeffaf boşluk kırpıldı. Bu işlemden şu dört dosya üretildi:

| Dosya | Kaynak | İçerik |
|---|---|---|
| `zambak-logo-dark-transparent.png` | Yeşil_Zambak_Logo.png | İkon + "ZAMBAK YEMEK" + slogan, şeffaf zemin |
| `zambak-logo-dark-compact.png` | Yeşil_Zambak_Logo.png | İkon + "ZAMBAK YEMEK" (slogan kırpılmış), şeffaf zemin |
| `zambak-logo-light-transparent.png` | Beyaz_Zambak_Logo.png | İkon + "ZAMBAK YEMEK" + slogan, şeffaf zemin |
| `zambak-logo-light-compact.png` | Beyaz_Zambak_Logo.png | İkon + "ZAMBAK YEMEK" (slogan kırpılmış), şeffaf zemin |

`dark` varyantı koyu yeşil zemin üzerinde (Header, mobil menü, Footer),
`light` varyantı açık/beyaz zemin üzerinde kullanılmak üzere tasarlanmıştır
— bkz. `src/components/ui/Logo.tsx`. `compact` versiyonlar, slogan
("LEZZETİN ZİRVESİ HİZMETİN GÜVENCESİ") satırı kırpılmış halidir ve site
genelinde varsayılan olarak bunlar kullanılır; `transparent` versiyonlar
sloganın görünmesi gereken yerler için saklanmaktadır.

### Eski logo dosyaları — ARTIK KULLANILMIYOR (eski "Zirve Yemek" markası)

`Kırmızı Arkaplan.png`, `Lacivert Arkaplan.png` ve bunlardan türetilen
`logo-navy-transparent.png`, `logo-navy-compact.png`, `logo-red-transparent.png`
dosyaları, görselin içine gömülü "ZİRVE YEMEK" yazısı ve dağ amblemi
nedeniyle artık yanlış markayı gösteriyor ve kodda hiçbir yerde
kullanılmıyor. Referans/arşiv amacıyla klasörde bırakıldı; silinmeleri
güvenlidir.
