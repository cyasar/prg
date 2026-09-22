const row = (id, title, theory, lab, outcomes) => ({
  id,
  title,
  short: title,
  theme: id <= 3 ? "Etkileşimli ders" : "Dönem planı",
  ready: id <= 3,
  theory,
  lab,
  outcomes,
  deliverable: "Algoritma, çalışan örnek ve test sonucu.",
  assessment:
    "Çözümünü açıklar, yeni bir girdiyle sınar ve küçük bir değişikliği uygular.",
  alignment: id <= 3 ? ["A", "B", "D", "E"] : ["A", "B", "C", "D", "E"],
});
export const curriculum = [
  row(
    1,
    "Programlama, Algoritmik Düşünme ve YZ Çağında Programcı Olmak",
    "Problem çözme, algoritma, pseudocode, akış şeması, diller, araçlar, Python, HTML/CSS/JS ve YZ ile çalışma.",
    "Günlük algoritma, iki sayı toplamı, ilk Python programları ve canlı web sayfası.",
    [
      "Problemi girdi, işlem ve çıktı olarak çözümler ve açık bir algoritma kurar.",
      "Sözde kodu ve akış şemasını izleyerek sonucu tahmin eder.",
      "Python ortamını hazırlayıp ilk programını çalıştırır; HTML, CSS ve JavaScript rollerini ayırt eder.",
      "YZ yardımını kendi taslağı ve testleriyle denetler.",
      "Programlama ve Python becerilerini kayıt analizi, dosya bütünlüğü ve otomasyon örnekleriyle bilgi güvenliğine bağlar.",
    ],
  ),
  row(
    2,
    "Veri, Değişkenler ve Karar Veren Programlar",
    "Bellek, değişken, veri türleri, input/print, dönüşüm, operatörler, Boolean mantığı, if/elif/else ve JavaScript karşılığı.",
    "Not kararı, tek/çift, büyük sayı, yaş kategorisi, boş kullanıcı adı ve eğitimsel uzunluk kontrolü.",
    [
      "Değişkenin adı, değeri ve türü arasındaki ilişkiyi açıklar.",
      "Girdi alır, uygun tür dönüşümünü yapar ve sonucu yazdırır.",
      "Aritmetik ve mantıksal ifadelerle if/elif/else kullanan program yazar.",
      "Normal, sınır ve beklenmeyen girdileri düşünerek Python ve JavaScript çözümlerini karşılaştırır.",
    ],
  ),
  row(
    3,
    "Karar yapıları ve veri doğrulama",
    "Boolean mantığı, iç içe koşullar, girdi doğrulama ve karar tabloları.",
    "Sentetik dosya boyutu denetimi için normal, sınır ve geçersiz durumları modelle.",
    [
      "Birden fazla koşulu karar tablosuyla ifade eder.",
      "İç içe koşulları gerektiğinde sadeleştirir.",
      "Girdi aralığını doğrular ve sınır testleri tasarlar.",
    ],
  ),
  row(
    4,
    "Döngüler ve tekrarlayan problemler",
    "for, while, range, sayaç ve toplayıcı.",
    "Verilen kurgusal olayları say ve toplam kayıt boyutunu hesapla.",
    [
      "Tekrarlanan bir işi döngüye dönüştürür.",
      "Sayaç ve toplayıcıyı elle izler.",
      "Bitiş koşulu ile boş girdi durumunu sınar.",
    ],
  ),
  row(
    5,
    "Fonksiyonlarla problem parçalama",
    "Parametre, return, scope ve kod tekrarını azaltma.",
    "Veri doğrulama ve hesaplama adımlarını ayrı fonksiyonlara taşı.",
    [
      "Problemi tek sorumlu fonksiyonlara ayırır.",
      "Parametre ile dönüş değerini ayırt eder.",
      "Yerel kapsamı ve bağımsız fonksiyon testini açıklar.",
    ],
  ),
  row(
    6,
    "Veri koleksiyonları",
    "Python list, tuple, set, dictionary; JavaScript array ve object.",
    "Kurgusal cihaz ve olay koleksiyonunu uygun yapılarla modelle.",
    [
      "Veriye uygun koleksiyon türünü seçer.",
      "Koleksiyon içinde arama ve güncelleme yapar.",
      "Python ve JavaScript veri yapılarının temel rollerini karşılaştırır.",
    ],
  ),
  row(
    7,
    "String işlemleri ve basit log analizi",
    "Metin parçalama, arama, filtreleme ve metin analizi.",
    "Sentetik log satırlarını parçalayıp başarısız olayları filtrele.",
    [
      "Metni alanlarına ayırır.",
      "Belirli koşulu sağlayan satırları filtreler.",
      "Boş ve beklenmeyen metin girdilerini test eder.",
    ],
  ),
  row(
    8,
    "Dosyalar ve hata yönetimi",
    "Dosya okuma/yazma, CSV, log dosyaları, exception ve try/except.",
    "Sentetik CSV günlük dosyasından ayrı bir özet dosyası üret.",
    [
      "UTF-8 dosya verisini okur ve yazar.",
      "CSV alanlarını uygun türlere dönüştürür.",
      "Beklenen dosya ve veri hatalarını kontrollü ele alır.",
    ],
  ),
  row(
    9,
    "Modüler programlama ve GitHub",
    "Python modülleri, package, Git, repository, commit ve branch.",
    "Küçük aracı modüllere ayır ve bir dalda değişiklik geliştir.",
    [
      "Modül ile package kavramını ayırt eder.",
      "Anlamlı bir commit oluşturur.",
      "Dal üzerinde değişiklik geliştirip geçmişini açıklar.",
    ],
  ),
  row(
    10,
    "Web programlamaya giriş",
    "HTML, CSS, JavaScript, DOM, event, form; Python ve JavaScript çalışma ortamları.",
    "Python algoritmasının giriş ve sonuç alanlarını web arayüzüyle modelle.",
    [
      "Erişilebilir bir HTML formu kurar.",
      "JavaScript olaylarıyla sonucu günceller.",
      "Tarayıcı ile Python çalışma ortamının farklarını açıklar.",
    ],
  ),
  row(
    11,
    "Algoritma analizi",
    "Doğrusal arama, binary search, sıralama ve Big-O kavramına sezgisel giriş.",
    "Aynı sentetik veri üzerinde arama adımlarını sayıp karşılaştır.",
    [
      "Doğrusal ve ikili aramayı elle izler.",
      "İkili aramanın sıralı veri önkoşulunu açıklar.",
      "Girdi büyüdükçe işlem sayısının nasıl değiştiğini yorumlar.",
    ],
  ),
  row(
    12,
    "Güvenli programlamaya giriş",
    "Güvenilmeyen veri, input validation, secrets, parola saklama ve web güvenliği farkındalığı.",
    "Örnek kodda veri doğrulama ve yanlış sır saklama davranışlarını incele.",
    [
      "Dış girdiyi neden doğrulamak gerektiğini açıklar.",
      "Sırları kaynak koddan ayrı tutmanın gerekçesini söyler.",
      "Eğitimsel parola kontrolü ile gerçek kimlik doğrulamayı ayırt eder.",
    ],
  ),
  row(
    13,
    "Debugging, test ve kod inceleme",
    "Assertion, unit test, kod inceleme, YZ ile inceleme ve GitHub Issues.",
    "Hatalı bir özetleyiciyi testle düzelt ve sorunu yeniden üretme adımlarını yaz.",
    [
      "Hata için küçük bir yeniden üretim örneği hazırlar.",
      "Normal ve sınır durumlara birim test yazar.",
      "YZ önerisini bağımsız testle değerlendirir.",
    ],
  ),
  row(
    14,
    "Final mini projesi",
    "Problem analizi, algoritma, Python, web arayüzü, test, GitHub, dokümantasyon ve kontrollü YZ kullanımı.",
    "Sentetik olayları özetleyen Python programını ve aynı veriyle çalışan statik web görünümünü sun.",
    [
      "Problemi algoritma ve çalışan programa dönüştürür.",
      "Web arayüzü, testler ve çalıştırma açıklaması hazırlar.",
      "YZ katkısını belirtip yeni bir girdide çözümünü savunur.",
    ],
  ),
];
curriculum[0].short = "Programlama ve algoritma";
curriculum[1].short = "Veri ve karar yapıları";
