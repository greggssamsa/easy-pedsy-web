# easy-PEDsy 3.1 – APK'den çıkarılan web/PWA sürümü

Bu paket, tarafınızdan sağlanan `easy-PEDsy-3.1.apk` içindeki **orijinal** `assets/index.html` dosyasından ve fontlarından hazırlanmıştır. 15 hesaplayıcının HTML/CSS/JavaScript kodu aynı şekilde korunmuştur. Android'e özel derlenmiş `classes.dex` web'e aktarılmamıştır.

## Açılış / test

1. ZIP arşivindeki **tüm dosya ve klasörleri** aynı dizine çıkarın.
2. Bu klasörde yerel bir HTTP sunucusu başlatın:

   ```bash
   python -m http.server 8000
   ```

3. Tarayıcınızda `http://localhost:8000/` adresini ziyaret edin.
4. Ana menüdeki 15 hesaplayıcıya tıklayarak kontrol edin. Her sayfa adresi `index.html?arac=<hesaplayıcı-kodu>` şeklindedir.
5. Chrome/Edge'de tarayıcının uygulama yükleme menüsünü kullanarak PWA olarak yükleyebilirsiniz (tarayıcı desteğine göre değişir).
6. Site yüklendikten ve service worker etkinleştikten sonra interneti kapatarak **aynı kökendeki hesaplayıcıları** test edebilirsiniz.

**Önemli:** `file://` ile çift tıklayarak açmak tarayıcı kısıtlamaları nedeniyle PWA, önbellek ve `localStorage` açısından güvenilir bir test değildir; yerel HTTP sunucusu kullanın.

## Ücretsiz yayınlama

- **GitHub Pages:** Bu klasörün içeriğini bir GitHub deposunun köküne yükleyin → Settings → Pages → Deploy from a branch → main / (root). Birkaç dakika içinde GitHub Pages URL'nizden erişilebilir hale gelir.
- **Cloudflare Pages:** Depoyu bağlayın; statik site ayarıyla derleme komutu kullanmadan yayınlayın. Veya klasörü statik dosya olarak yükleyin.

Site HTTPS altında servis edildiğinde PWA kurulumu ve önbelleği kullanılabilir. Bu paket ücretli API, sunucu veya kullanıcı hesabı gerektirmez.

## İçerik

- `index.html`: Ana ekran, arama ve içine JSON metni olarak gömülmüş 15 hesaplayıcı.
- `start.html`: APK'nin yardımcı hızlı bağlantılar sayfasının web'e uyarlanmış sürümü.
- `fonts/`: Orijinal açık lisanslı Atkinson Hyperlegible fontları ve OFL lisansı.
- `icons/`: APK logosundan üretilmiş PWA ikonları.
- `manifest.webmanifest`: Kurulabilir web uygulaması bilgileri.
- `service-worker.js`: Çevrimdışı açılışı destekleyen statik dosya önbelleği.

## Sınırlar ve sorumluluk

- Android'e özel uygulama kabuğu, dahili sekmeler, Android hesap/uygulama entegrasyonları ve native özellikler tarayıcıya taşınmış değildir.
- Dış sitelere veya kaynaklara verilen bağlantıların çalışması için internet gerekebilir.
- Offline kullanımda sayfa kodu yerel önbellekten sağlanır; tarayıcının depolama politikaları önbelleği temizleyebilir.
- **Tıbbi güvenlik:** Hesaplayıcıların tanı ve tedavi kararlarında kullanılmasından önce bağımsız hesap doğrulaması, klinik referans ve sınır-değer testleri yapılmalıdır. Bu işlem algoritmaların klinik doğruluğunu kanıtlamaz.
- Uygulamayı yayımlama ve kaynakların kullanım haklarından kullanıcı sorumludur; font lisansı `fonts/OFL.txt` içinde korunmuştur.
