# Programlamaya Giriş · BGT-1009

**ÇANAKKALE ONSEKİZ MART ÜNİVERSİTESİ**  
Çanakkale Uygulamalı Bilimler Fakültesi  
Bilgi Güvenliği Teknolojisi Bölümü · 2026–2027 Güz

Algoritmik düşünmeden Python'a, web teknolojilerinden yapay zekâ destekli programlamaya.

## Dersin amacı

Hiç programlama bilgisi varsaymadan, bir problemi parçalamayı, algoritmaya dönüştürmeyi ve kodla ifade ederek test etmeyi öğretmek. Python ana dil, HTML/CSS/JavaScript ise aynı düşüncenin webdeki karşılığını gösteren yardımcı teknolojilerdir.

**Problem → analiz → girdiler → beklenen çıktı → algoritma → pseudocode → program → test → hata ayıklama → iyileştirme.**

YZ ile birlikte programlayın, direksiyonda siz olun. Öğrenci önce kendi çözümünü tasarlar; YZ’den ipucu veya inceleme desteği alır, öneriyi açıklar ve bağımsız testlerle doğrular. Her iki haftada YZ istemleri, düşünme soruları ve gizli çözümlü alıştırmalar vardır. Ücretli YZ hesabı gerekmez.

## İçerik

- 14 haftalık müfredat; her hafta için kazanım, uygulama ve kontrol ölçütü.
- **Hafta 1: 49 slayt.** Programlama, algoritma, günlük yaşam ve toplama algoritmaları, sözde kod, akış şeması, araçlar, kurulum, ilk Python programları, HTML/CSS/JS ve YZ yaklaşımı. 10–15. slaytlarda bölümle bağlantılı motivasyon: etkileşimli olay kaydı sayımı, gerçek SHA-256 hesaplamasıyla içerik değişimi, yedekleme kontrolü, Python araçları ve dönem sonu projesine gelişim yolu.
- **Hafta 2: 51 slayt.** Bellek, değişkenler, türler, input/print, dönüşüm, operatörler, Boolean düşünme, if/elif/else, basitten karmaşığa 4 sözde kod örneği (tek/çift, karşılaştırma, aralık denetimi, kurgusal parola seviyesi), sınır testleri, Python/JavaScript karşılaştırması ve 5 soruluk aşamalı pekiştirme quizi (kolay, orta, zor).
- 14 bağımsız Python dosyası, iki bağımsız web örneği.
- 3–14. haftalar “Yakında” durumundadır; bu aşamada ayrıntılı slaytları hazırlanmadı.

### Hafta 2 Algoritmik Sözde Kod ve Pekiştirme Quizi

Öğrencilerin algoritmik düşünme ve problem çözme becerilerini pekiştirmek amacıyla 2. haftaya basitten karmaşığa 4 aşamalı sözde kod (pseudocode) modeli ve 5 soruluk aşamalı pekiştirme quizi eklenmiştir:
1. **Sözde Kod Örnekleri (Basitten Karmaşığa):**
   - **Tek / Çift Sayı Denetimi:** Temel iki dallı karar yapısı, kalan (`%`) operatörü ve sıfır/negatif sınır durumları.
   - **İki Sayının Karşılaştırması:** Üç dallı karar yapısı (`EĞER / DEĞİLSE EĞER / DEĞİLSE`) ve eşitlik (`==`) durumunun modellenmesi.
   - **Sınav Notu Geçerliliği ve Başarı:** Mantıksal `VE` / `VEYA` operatörleri ile savunmacı programlama (önce geçersiz aralığı ayıklama, ardından başarı değerlendirmesi).
   - **Kurgusal Parola Güvenlik Seviyesi:** Bilgi Güvenliği Teknolojisi programı odağında metin uzunluğu (`UZUNLUK`) ve kademeli sınıflandırma mantığı.
2. **Hafta Sonu 5 Soruluk Pekiştirme Sınavı (Quiz):**
   - **Mini Quiz 1 (Kolay):** Değişken ataması ve metin çarpımı (`"3" * 2` tekrar davranışı).
   - **Mini Quiz 2 (Kolay):** Karar yapısında sınır eşiği ve eşitlik kontrolü (`notu > 50` tuzağı).
   - **Mini Quiz 3 (Orta):** Sözde kod adımlarını kuru çalıştırma ve mod (`%`) hesabı (`10 % 4 == 2`).
   - **Mini Quiz 4 (Orta-Zor):** Not aralığını güvenli doğrulayan çift taraflı `VE` (`and`) mantığı.
   - **Mini Quiz 5 (Zor / BGT):** Parola karakter uzunluğuna göre çok dallı akış ve ilk doğru dalın yürütülmesi.


## İki çalışma modu

**Sunum:** Sağ/sol ok ve önceki/sonraki düğmeleriyle gezinilir. `F` tam ekranı açar/kapatır. `Home` / `End` ilk/son slayta gider. Düzenleme alanı odaktayken yazılan tuşlar slayt değiştirmez. Odak görünümü ve slayt listesi vardır.

**Ders notu:** Aynı hafta uzun sayfa halinde okunur. Her bölüm açıklamayı, aynı etkileşimleri ve ilgili slayta dönüş bağlantısını içerir. İlk bölüm kazanımlardır.

Adım adım algoritma izleme, Boolean anahtarları, “Çözümü Göster”, açıklamalı quizler, Python çalıştırma ve düzenlenebilir web demoları dersin içindedir. Öğretim elemanı notları herkese açıktır. Kod değişiklikleri slayttan ayrılınca sıfırlanır; saklamak için Kopyala kullanılabilir. İndirilebilir çalışma kâğıdı yoktur.

## Teknolojiler

React, Vite, JavaScript, HTML5, kendi CSS dosyalarımız ve Lucide ikonları. TypeScript, backend, veritabanı, authentication ve dark mode yoktur. Kod renklendirme küçük bir yerel bileşen kullanır. Arayüz haricî font indirmez.

Python, çalıştır düğmesine basılınca [Pyodide](https://pyodide.org/en/stable/usage/webworker.html) ile ayrı bir Web Worker içinde başlatılır. İlk yükleme internet gerektirir. Kod uygulama tarafından sunucuya gönderilmez. Durdur düğmesi veya 10 saniyelik çalışma süresi sınırı worker’ı sonlandırır. Tarayıcı tüm yerel Python özelliklerini sunmaz. İnternet yoksa örnek Python dosyaları bilgisayarda çalıştırılabilir.

Web demoları `sandbox="allow-scripts"` iframe ve kısıtlı CSP kullanır. Ana sayfaya ve ağ kaynaklarına erişmez. Bağımsız web örnekleri yerel tarayıcıda açılabilir.

## Kurulum ve çalıştırma

Node.js **22.12 veya üzeri**, npm ve Git gerekir. Örnek kontrolleri için Python 3 de kurulmalıdır.

```sh
git clone https://github.com/cyasar/prg.git
cd prg
npm install
npm run dev
```

Sunum: [http://localhost:5173/prg/](http://localhost:5173/prg/)

Kilit dosyasındaki aynı sürümleri kullanmak için `npm ci` çalıştırılabilir.

```sh
npm run check
npm run build
npm run preview
```

Build çıktısı `dist/` içindedir. Üretim önizlemesi [http://localhost:4173/prg/](http://localhost:4173/prg/) adresindedir.

`npm run check` kazanımların varlığını, ilk slaytların kazanım olmasını, örnek kaynak eşleşmesini ve Python normal/sınır testlerini doğrular. Python komutunun adı farklıysa `PYTHON_BIN` ortam değişkeniyle belirt.

## Öğrenciler için GitHub

- **Repository (depo):** Projenin dosyalarını ve değişiklik geçmişini birlikte tutan alan.
- **Clone:** Depoyu bilgisayarına kopyalama işlemi.
- **Commit:** Anlamlı bir değişikliği açıklamasıyla geçmişe kaydetme işlemi.
- **Push:** Yerel commit’leri uzak depoya gönderme işlemi.
- **Pull:** Uzak depodaki güncellemeleri yerel depoya alma işlemi.

İlk hafta depoyu açmak, clone etmek, örnekleri incelemek ve Python dosyasını çalıştırmak yeterlidir. Commit/push zorunlu değildir. Sunumu tarayıcıda takip etmek için Node.js veya Git kurulumu gerekmez.

[Git kurulumu](https://git-scm.com/install), [Python kurulumu](https://www.python.org/downloads/).

Depo kökünde:

```sh
# Windows
py examples/week01/hello.py
py examples/week01/sum_two_numbers.py
py examples/week02/pass_fail.py

# macOS / Linux
python3 examples/week01/hello.py
```

Windows’ta `py` yoksa `python` denenebilir. Python örnekleri npm gerektirmez. Web örneği için `examples/web/week01/index.html` dosyasını tarayıcıda aç.

## Dosyalar ve bileşen mimarisi

```text
src/
  App.jsx                 Layout, Sidebar, WeekCard, Presentation, LessonNotes
  components.jsx          SlideBody, CodeBlock, Quiz, PythonExample, PythonLab
  learning-widgets.jsx    ThinkBox, AIBox, Flowchart, MemoryBoxes, SumTrace,
                          BooleanLab, LiveDemo
  curriculum.js           14 haftalık tek müfredat kaynağı
  lessons.js              92 slayt ve ayrıntılı açıklamalar
  motivation.js           Motivasyon slaytları, sentetik veriler ve örnek kurallar
  motivation-visuals.jsx  Altı görsel anlatım; kayıt, özet ve otomasyon etkileşimleri
  motivation.css          Beyaz temaya uyumlu, responsive görsel bileşenler
  examples.js             Python ve web örneklerinin ortak tanımları
  course.js               Ders kimliği, kaynaklar ve katkı başlıkları
  styles.css              Yerleşim ve responsive kurallar
  learning.css            Öğrenme bileşenleri ve mavi vurgu
public/python-worker.js   Tarayıcı Python ortamı
examples/week01/          hello.py, name.py, sum_two_numbers.py
examples/week02/          variables.py, input_output.py, arithmetic.py,
                          pass_fail.py, positive.py, even_odd.py, larger.py,
                          age_category.py, username.py, password_length.py,
                          boolean_rules.py
examples/web/week01/      index.html, style.css, script.js, README.md
examples/web/week02/      index.html, style.css, script.js, README.md
scripts/                 İçerik/örnek kontrolleri ve eşitleme
.github/workflows/deploy.yml
```

Örnekleri güncellerken `src/examples.js` düzenlenir ve `npm run examples:sync` çalıştırılır. Slayttaki örnek ile repository dosyası böylece tutarlı kalır. Yeni slayt `src/lessons.js` içindeki ilgili haftaya eklenir. Her haftanın açılışı kazanımları, kapanışı kazanım kontrolünü içerir.

## GitHub Pages deployment

Repository: [cyasar/prg](https://github.com/cyasar/prg)  
Hedef adres: [https://cyasar.github.io/prg/](https://cyasar.github.io/prg/)

Vite `base: '/prg/'` kullanır. Hash tabanlı adresler (`#/hafta/1/sunum/1`) Pages’te sayfa yenileme için özel SPA yönlendirmesi gerektirmez. Worker ve favicon yolları da `/prg/` tabanını kullanır.

1. Dosyaları mevcut depo geçmişini koruyarak `main` dalına yükle.
2. **Settings → Pages → Build and deployment → Source: GitHub Actions** seç.
3. `main` push işlemi `.github/workflows/deploy.yml` akışını başlatır.
4. Akış `npm ci` → kontroller → build → `dist` artifact → Pages deployment adımlarını çalıştırır.
5. Actions ekranında başarılı deployment’ı ve hedef URL’yi doğrula.

Workflow elle de başlatılabilir. Yayın durumunu repository içindeki Actions sekmesinden takip edebilirsiniz. Kaynak kodu ile yayın adresi arasında bir değişiklik görürseniz en son deployment sonucunu kontrol edin.

## Akademik dayanak

Paylaşılan `76089_ogretim-plani-2026-2027.pdf`: BGT-1009, 1. yarıyıl, 2 teori + 2 uygulama, 3 ulusal kredi, 6 AKTS. Kısa kavram açıklamaları uygulamayla birleşir. Slayt sayıları kesintisiz anlatım süresi değildir; alıştırma ve düşünme ekranları da bu sayılara dahildir. Uygulama süresini öğrenci hızına göre ayırın.

[Bölüm hedefleri](https://bilgiguven.cubf.comu.edu.tr/tr/sayfa/hedefler-5) ve [misyon, vizyon ve temel değerler](https://bilgiguven.cubf.comu.edu.tr/tr/sayfa/misyon-vizyon-ve-temel-degerler-4) doğrultusunda analitik düşünme, güvenli yazılım temeli, uygulama, etik ve sürekli öğrenme vurgulanmıştır. A–E etiketleri dersin katkı başlıklarıdır, resmî program çıktısı numarası değildir.

Not eşiği, yaş aralıkları ve sekiz karakterlik metin kuralı eğitim örnekleridir. Üniversitenin not yönetmeliğini veya gerçek parola güvenliği ölçütlerini temsil etmez. Gerçek parola ve kişisel veri kullanılmaz. İlk örneklerin kimi geçersiz girdilerde hata üretmesi bilinçli bir öğretim fırsatıdır; sınırlar slaytlarda açıklanır.

Başvuru kaynakları: [Python](https://docs.python.org/3/), [VS Code Python](https://code.visualstudio.com/docs/python/python-tutorial), [MDN](https://developer.mozilla.org/en-US/docs/Learn_web_development), [Vite Pages](https://vite.dev/guide/static-deploy.html#github-pages).
