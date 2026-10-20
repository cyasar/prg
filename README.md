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
- **Hafta 3: 53 slayt.** 4 saatlik (2 teori + 2 lab) zenginleştirilmiş ders içeriği: Girdi doğrulama hiyerarşisi (varlık, tür, aralık, izin), `strip()` ve `isdigit()` ile güvenli dönüşüm, derin iç içe koşullar (`nested if`) yerine Guard Clause (erken çıkış) prensibi, karar tabloları matrisi, beyaz liste vs kara liste yaklaşımı, BGT senaryoları (firewall kuralı, hesap kilitleme, 2FA, kota hesabı), 10 bağımsız Python örneği, 6 aşamalı sözde kod ve 5 soruluk pekiştirme quizi.
- **Hafta 4: 29 slayt.** Döngüler ve Tekrarlayan Problemler: while döngüsü ve koşul yönetimi, sonsuz döngüden kaçınma, sayaç (counter) ve toplayıcı (accumulator) kalıpları, break ve continue akış yönetimi, for döngüsü ve range() fonksiyonu (başla, dur, adım), BGT senaryoları (oturum geri sayımı, brute-force PIN deneme kilidi, port tarama simülasyonu, continue ile şüpheli port süzme, ağ trafiği boyutu toplayıcısı), bol soru-cevap ve 5 soruluk aşamalı kendini sına quizi.
- **Hafta 5: 30 slayt.** Diziler (Listeler) ve Veri İşleme: Python listeleri (diziler), bellek yapısı, 0 tabanlı indeksleme ve negatif indeksler, dilimleme (slicing), dinamik metotlar (append, remove, len), in ve not in ile arama, for ile liste gezinme yöntemleri, filtreleme deseni (filtering pattern), döngüyle tepe değer (anomali) bulma, BGT senaryoları (cihaz envanteri, IP kara liste denetimi, dinamik port yönetimi, 7 günlük hatalı oturum istatistiği, 8 karakterden kısa güvensiz parola filtreleme, trafik tepe boyutu tespiti), soru-cevap ve 5 soruluk aşamalı kendini sına quizi.
- **Hafta 6: 37 slayt.** Fonksiyonlarla Problem Parçalama: def anahtar sözcüğü, parametre ve argümanlar, print vs return hayati farkı, varsayılan (default) parametreler, yerel (local) ve genel (global) değişken kapsamı (scope), birden fazla değer döndürme (tuple unpacking), savunmacı guard clause fonksiyonları, büyük problemleri alt fonksiyonlara bölme (Top-Down decomposition), BGT senaryoları (kullanıcı karşılama, port doğrulayıcı, modüler parola güç analizi, güvenlik olayı risk sınıflandırma), bol soru-cevap ve 10 soruluk aşamalı kendini sına quizi.
- **Hafta 7: 35 slayt.** String İşlemleri ve Basit Log Analizi: Metin indeksleme, dilimleme ve ters çevirme, büyük/küçük harf dönüşümü (upper/lower), girdi temizleme (strip), metin doğrulama (startswith/endswith/isdigit), in ile imza arama, split ve join ile veri parçalama/birleştirme, replace ile hassas veri (kredi kartı/parola) maskeleme, log formatı analizi, HTTP durum kodları ile tehdit ayrıştırma, BGT senaryoları (tek satır web log parser, başarısız SSH oturumu süzücü, XSS/SQLi/Path Traversal saldırı tespit motoru, IP frekans ve DoS anomali sayacı), bol soru-cevap ve 10 soruluk aşamalı kendini sına quizi.
- 52 bağımsız Python dosyası, iki bağımsız web örneği, toplam 307 etkileşimli slayt.
- 8–14. haftalar “Yakında” durumundadır; bu aşamada ayrıntılı slaytları hazırlanmadı.

### Hafta 2: Algoritmik Sözde Kod ve Pekiştirme Quizi

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

### Hafta 3: Karar Yapıları ve Veri Doğrulama (4 Saatlik Genişletilmiş İçerik)

Haftalık 4 saatlik (2 teori + 2 laboratuvar) ders yapısına tam uyumlu olarak 53 slayt ve 10 çalıştırılabilir Python örneğiyle zenginleştirilmiştir:
1. **1. Saat (Girdi Doğrulama & Güvenilmeyen Veri):** Varlık (`strip`), tip (`isdigit`), aralık (0–100 / 1–65535) ve izin hiyerarşisi.
2. **2. Saat (Tasarım & Refactoring):** Derin iç içe if yapıları (Piramit anti-pattern) yerine Guard Clause (Erken Çıkış) yaklaşımı ve kod sadeleştirme.
3. **3. Saat (Karar Tabloları Matrisi):** $2^n$ kural analizi, eksik durum tespiti, rol ve işlem matrisi (Admin/Öğretmen/Öğrenci).
4. **4. Saat (BGT Uygulamaları & Sınav):** Güvenlik duvarı paket filtresi, hatalı deneme sayacı (Account Lockout), 2FA kontrolü, kota yönetimi ve 5 soruluk aşamalı sınav.

### Hafta 4: Döngüler ve Tekrarlayan Problemler (Örnek-Çözüm & Kendini Sına)

Döngüler, programlamada otomasyonun ve tekrarlanan veri akışlarını yönetmenin temel aracıdır. Hafta 4 içeriği bol örnekli soru-cevap, çalışan Python kodları ve kendini sına quiziyle kurgulanmıştır:
1. **while Döngüsü & Koşullu Tekrar:** Başlangıç, koşul ve güncelleme adımları, sonsuz döngüden (infinite loop) kaçınma stratejileri.
2. **Sayaç (Counter) ve Toplayıcı (Accumulator):** Olay adedini sayma (`sayac += 1`) ile miktarları kümülatif biriktirme (`toplam += deger`) kalıpları ve kuru çalıştırma adımları.
3. **Akış Kırıcılar (break ve continue):** Erken çıkış (`break`) ile gereksiz işlemleri pas geçme (`continue`) farkı ve güvenlik senaryoları.
4. **for Döngüsü ve range():** Sayılabilir adımlar, `range(dur)`, `range(basla, dur)` ve `range(basla, dur, adim)` sınır kuralları.
5. **BGT Uygulama Örnekleri (Bağımsız Python Dosyaları):**
   - `countdown.py`: while döngüsü ile oturum geri sayımı ve güvenlik kilidi.
   - `pin_bruteforce.py`: 3 deneme haklı PIN doğrulama ve kart bloke simülasyonu (while + break).
   - `port_scanner_mock.py`: for ve range ile hedef port aralığını tarama ve açık servisleri tespit etme.
   - `traffic_accumulator.py`: Ağ trafiği paket boyutu toplayıcısı ve anomali sayacı.
   - `port_filter_continue.py`: Standart portları continue ile atlayıp şüpheli portları raporlama.
6. **Hafta Sonu Kendini Sına (5 Aşamalı Quiz):**
   - Mini Quiz 1 (Kolay): `range(2, 9, 2)` serisini okuma.
   - Mini Quiz 2 (Kolay-Orta): `while` döngüsünde sayaç güncellenmezse oluşan sonsuz döngü tuzağı.
   - Mini Quiz 3 (Orta): Döngü izleme ve toplayıcı hesabı (`toplam += x`).
   - Mini Quiz 4 (Orta-Zor): `break` ve `continue` komutlarının çalışma anı farkı.
   - Mini Quiz 5 (Zor / BGT): Brute-force deneme eşiği ve sayaç son durumu analizi.

### Hafta 5: Diziler (Listeler) ve Veri İşleme (İnteraktif Simülatör, 2D/3D Matrisler & Soru-Çözüm)

Çoklu verileri tek bir konteyner altında düzenli tutma, indeksleme, döngülerle toplu analiz etme ve çok boyutlu modelleme becerileri:
1. **İnteraktif Laboratuvar (Dizi & Döngü Simülatörü):** Web arayüzünde 1D, 2D ve 3D diziler üzerinde for/while döngülerini bloklarla kurgulama, bellek adımlarını görsel imleçle izleme ve otomatik Python kodu üretme aracı.
2. **Dizi (Liste) Temelleri:** Bellekte sıralı veri saklama, köşeli parantez `[]` sözdizimi, veri tipleri çeşitliliği ve değiştirilebilirlik (mutable).
3. **İndeksleme & Dilimleme:** 0 tabanlı indeksleme mantığı, negatif indeksler (`-1` son eleman), `[basla:dur]` ile parça alma ve `IndexError` sınır hatası.
4. **Dinamik Metotlar & in Operatörü:** `len()`, `append()`, `remove()` ile dinamik liste yönetimi ve `in` ile tek satırda üyelik sorgulama.
5. **Döngüler ve Listeler (for & while):** Doğrudan değer okuma, indeks sayacıyla `while` gezinmesi, erken çıkış (`break`) ve FIFO kuyruk işleme (`pop(0)`).
6. **İki Boyutlu Diziler (2D Listeler / Matrisler):** `matris[satir][sutun]` koordinat mantığı, iç içe (nested) iki for döngüsü ile satır toplamları, tepe anomali tespiti ve Erişim Kontrol Matrisleri (ACL).
7. **Üç Boyutlu Diziler (3D Listeler):** `kup[blok][satir][sutun]` derinlik hiyerarşisi, 3 iç içe döngü ile Veri Merkezi / Kabin / Sunucu IoT sıcaklık sensör küpü taraması.
8. **BGT Uygulama Örnekleri (Bağımsız Python Dosyaları):**
   - `device_inventory.py`: Ağ cihazları envanteri, indeksleme ve dilimleme.
   - `ip_blacklist_check.py`: in operatörü ile IP kara liste güvenlik kontrolü.
   - `list_operations.py`: Dinamik port engelleme listesi yönetimi (`append`, `remove`).
   - `failed_login_stats.py`: 7 günlük hatalı oturum istatistikleri, haftalık ortalama ve şüpheli gün eşik analizi.
   - `password_length_filter.py`: 8 karakterden kısa zayıf parolaları otomatik filtreleme.
   - `traffic_max_detector.py`: Liste içindeki tepe paket boyutunu döngüyle bulma.
   - `queue_event_processor.py`: While döngüsü ve `pop(0)` ile FIFO güvenlik olay kuyruğu işleme.
   - `while_linear_search.py`: While döngüsü ve indeks sayacı ile şüpheli MAC arama ve `break` ile erken çıkış.
   - `firewall_matrix_2d.py`: 2D sunucu log matrisinde satır toplamları ve tepe anomali hücresi bulma.
   - `acl_matrix.py`: Rol ve işlem bazlı 2D erişim kontrol matrisi (ACL) yetki denetimi.
   - `datacenter_sensors_3d.py`: 3D sensör küpünde (2x2x3) 30°C üzeri kritik aşırı ısınma koordinat taraması.
9. **Hafta Sonu Kendini Sına (7 Aşamalı Quiz):**
   - Mini Quiz 1 (Kolay): İlk eleman `[0]` ve son eleman `[-1]` indeks kuralı.
   - Mini Quiz 2 (Kolay-Orta): `append()` metodunun listenin boyutuna ve son elemanına etkisi.
   - Mini Quiz 3 (Orta): `sayilar[1:4]` dilimleme çıktısı analizi.
   - Mini Quiz 4 (Orta-Zor): Liste üzerinde for döngüsü ile işlem ve toplayıcı hesabı.
   - Mini Quiz 5 (Zor / BGT): Kara liste filtreleme ve engellenen IP adedi analizi.
   - Mini Quiz 6 (Orta-Zor): 2D matris çift indeksleme `matris[1][2]` mantığı.
   - Mini Quiz 7 (Zor): 3 Boyutlu dizide (2x3x4) iç içe 3 döngünün toplam adım sayısı.

### Hafta 6: Fonksiyonlarla Problem Parçalama (Modüler Mimari, Guard Clause & 10 Soruluk Quiz)

Monolitik ve tekrarlanan kodları yönetilebilir, test edilebilir ve yeniden kullanılabilir fonksiyonlara dönüştürme becerileri:
1. **DRY Prensibi & Problem Parçalama:** "Don't Repeat Yourself" (Kendini Tekrar Etme) yaklaşımı, kod tekrarının (WET) siber güvenlik bakım maliyeti ve Top-Down Decomposition (böl ve yönet).
2. **Fonksiyon Tanımlama (`def`) & Çağırma:** Fonksiyon başlığı, isimlendirme kuralları (snake_case), girintileme (`indentation`) ve parametre-argüman eşleşmesi.
3. **print() vs return Farkı:** Ekrana çıktı basma ile hesaplanan değeri çağıran koda teslim etme arasındaki hayati fark; boru hattı (pipeline) veri aktarımı ve erken çıkış kapısı.
4. **Varsayılan (Default) Parametreler & İsimlendirilmiş Argümanlar:** Opsiyonel argüman tasarımı, ağ protokollerinde standart portların varsayılan değerlerle yönetimi (`port=80, protokol="HTTP"`).
5. **Değişken Kapsamı (Scope):** Yerel (Local) vs Genel (Global) değişkenler, fonksiyon içi değişken yaşam döngüsü ve global değişken kullanımının güvenlik riskleri (race condition, yetki yükseltme).
6. **Birden Fazla Değer Döndürme:** Tuple unpacking mekanizması ile tek fonksiyondan çoklu özet istatistik (`toplam, min, max, ort`) alma.
7. **Savunmacı Programlama & Guard Clause:** Tip ve sınır kontrollerinin (`isinstance`, `1 <= p <= 65535`) fonksiyon başında erken çıkışla yapılması ve derin `if/else` piramitlerinin önlenmesi.
8. **BGT Uygulama Örnekleri (Bağımsız Python Dosyaları):**
   - `def_greet.py`: Fonksiyon tanımlama ve kullanıcı karşılama.
   - `calc_return.py`: `return` ile matematiksel kare ve çiftlik kontrolü.
   - `default_params.py`: Varsayılan parametreli ağ bağlantı URL oluşturucusu.
   - `scope_local_global.py`: Yerel ve genel kapsam bellek yaşam döngüsü.
   - `multi_return.py`: Ağ trafiği paket boyutu özet istatistikleri ve tuple unpacking.
   - `port_validator.py`: Guard clause ile savunmacı port doğrulayıcı ve servis sınıflandırıcısı.
   - `password_strength_func.py`: 4 küçük fonksiyona parçalanmış modüler parola güç analizi.
   - `incident_classifier.py`: Güvenlik olayı şiddet çarpanı, risk skoru ve SOC aksiyonu karar dağıtımı.
9. **Hafta Sonu Kendini Sına (10 Aşamalı Quiz):**
   - Mini Quiz 1 (Kolay): `def` anahtar sözcüğü ile fonksiyon tanımlama.
   - Mini Quiz 2 (Kolay): Parametre ve argüman sırasal aktarımı.
   - Mini Quiz 3 (Kolay-Orta): `return` içermeyen fonksiyonun `None` dönüş davranışı.
   - Mini Quiz 4 (Orta): `return` ile erken çıkış (early return) ve ölü kod analizi.
   - Mini Quiz 5 (Orta): Varsayılan (default) parametre devreye girme koşulu.
   - Mini Quiz 6 (Orta): Yerel kapsam (local scope) ve `NameError` hatası.
   - Mini Quiz 7 (Orta-Zor): Çoklu değer döndürme ve tuple unpacking paket açma.
   - Mini Quiz 8 (Orta-Zor): Fonksiyon içinde yardımcı fonksiyon çağırma zinciri.
   - Mini Quiz 9 (Zor / BGT): IP oktet doğrulama fonksiyonu ve `0 <= deger <= 255` aralık denetimi.
   - Mini Quiz 10 (Zor / BGT): Parola güç puanı hesaplayıcı fonksiyon ve sınır durumu analizi.

### Hafta 7: String İşlemleri ve Basit Log Analizi (Metin İşleme, Güvenlik İmzaları & 10 Soruluk Quiz)

Sistemlerin, web sunucularının ve güvenlik duvarlarının ana dili olan metinleri parçalama, temizleme ve güvenlik loglarını süzme becerileri:
1. **String Temelleri & İmmutability:** 0 tabanlı pozitif indeksleme, sağdan negatif indeksleme (`[-1]`), dilimleme (`[basla:dur:adim]`), `len()` ve metinlerin değiştirilemezlik (immutable) yapısı.
2. **Büyük/Küçük Harf & Girdi Temizleme:** `strip()`, `lstrip()`, `rstrip()` ile görünmez boşluk ve satır sonu (`\n`) budama, `upper()` ve `lower()` ile vaka duyarsız (case-insensitive) güvenli rol kontrolü.
3. **Metin Doğrulama & İmza Tarama:** `startswith()` ile protokol denetimi, `endswith()` ile zararlı dosya uzantısı tespiti, `isdigit()` ile rakam denetimi ve `in` operatörü ile tek satırda saldırı imzası (payload) yakalama.
4. **Metin Parçalama (`split`) & Birleştirme (`join`):** Ayraçlara göre yapılandırılmamış metinleri listeye ayırma (IP oktetleri, CSV alanları) ve listeyi ayracı ekleyerek biçimlendirilmiş string'e dönüştürme.
5. **Hassas Veri Maskeleme & Sanitizasyon:** `replace()` metodu ile kredi kartı ve parola maskeleme (`****`), log dosyalarından hassas verileri sansürleme, Path Traversal (`../`) temizliği.
6. **Log Analizi & HTTP Tehdit Tespiti:** Web sunucu (Access Log) ve kimlik doğrulama (Auth Log) mimarisi; 200, 401, 403, 404, 500 durum kodları ile anomali ve brute-force tespiti.
7. **BGT Uygulama Örnekleri (Bağımsız Python Dosyaları):**
   - `str_indexing_slicing.py`: Metin indeksleme, dilimleme, bölüm kodu ayıklama ve ters çevirme.
   - `str_case_strip.py`: `strip()` ve `lower()` ile temiz ve güvenli kullanıcı rolü kontrolü.
   - `str_inspection.py`: `startswith`, `endswith` ve `in` ile SQL enjeksiyon şüphesi yakalama.
   - `str_split_join.py`: IP oktetlerine ayırma, CSV satırı ayrıştırma ve liste birleştirme.
   - `str_replace_mask.py`: Kredi kartı maskeleme, log parola sansürleme ve yol temizleme.
   - `log_single_line_parser.py`: Web log satırını parçalayıp IP, tarih, HTTP metodu, URL ve durum kodu ayıklama.
   - `log_failed_login_filter.py`: SSH auth loglarından "Failed password" olaylarını ve saldırgan IP'leri süzme.
   - `log_attack_detector.py`: Web loglarında XSS, SQLi ve Path Traversal saldırı imzalarını otomatik tarama.
   - `log_ip_counter.py`: IP bazlı istek frekansı hesaplama ve olası DoS tepe anomalisini tespit etme.
8. **Hafta Sonu Kendini Sına (10 Aşamalı Quiz):**
   - Mini Quiz 1 (Kolay): Sağdan negatif indeksleme `s[-2]`.
   - Mini Quiz 2 (Kolay): String dilimleme `log[0:4]` sınır kuralı.
   - Mini Quiz 3 (Kolay-Orta): `strip()` metodunun boşluk ve `\n` temizliği etkisi.
   - Mini Quiz 4 (Kolay-Orta): `lower()` ile vaka duyarsız karşılaştırma.
   - Mini Quiz 5 (Orta): `endswith()` ile çift uzantılı (`.py.exe`) dosya aldatmacası denetimi.
   - Mini Quiz 6 (Orta): `split(':')` ile port alanını çekme ve liste indeksi.
   - Mini Quiz 7 (Orta): `replace()` ile karakter öbeği dönüştürme.
   - Mini Quiz 8 (Orta-Zor): `in` operatörü ile istek içinde SQL payload imzası yakalama.
   - Mini Quiz 9 (Zor / BGT): Apache web log satırından HTTP durum kodunu split ile ayıklama.
   - Mini Quiz 10 (Zor / BGT): Çok satırlı log üzerinde döngüyle başarısız oturum sayacı analizi.



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
py examples/week02/pass_fail.py
py examples/week03/nested_vs_guard.py
py examples/week04/pin_bruteforce.py
py examples/week05/ip_blacklist_check.py

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
  lessons.js              218 slayt ve ayrıntılı açıklamalar
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
examples/week03/          digit_check.py, empty_check.py, range_validation.py,
                          nested_vs_guard.py, file_policy.py, decision_table_auth.py,
                          firewall_rule.py, account_lockout.py, two_factor_mock.py,
                          quota_calculator.py
examples/week04/          countdown.py, pin_bruteforce.py, port_scanner_mock.py,
                          traffic_accumulator.py, port_filter_continue.py
examples/week05/          device_inventory.py, ip_blacklist_check.py,
                          list_operations.py, failed_login_stats.py,
                          password_length_filter.py, traffic_max_detector.py,
                          queue_event_processor.py, while_linear_search.py,
                          firewall_matrix_2d.py, acl_matrix.py, datacenter_sensors_3d.py
examples/week06/          def_greet.py, calc_return.py, default_params.py,
                          scope_local_global.py, multi_return.py,
                          port_validator.py, password_strength_func.py,
                          incident_classifier.py
examples/week07/          str_indexing_slicing.py, str_case_strip.py,
                          str_inspection.py, str_split_join.py,
                          str_replace_mask.py, log_single_line_parser.py,
                          log_failed_login_filter.py, log_attack_detector.py,
                          log_ip_counter.py
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
