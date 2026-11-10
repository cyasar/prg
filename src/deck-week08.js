import { curriculum as weeks } from "./curriculum.js";
import { pythonExamples as py } from "./examples.js";

const s = (title, type, content, notes) => ({ title, type, ...content, notes });
const cards = (title, items, lead, notes) => s(title, "cards", { items, lead }, notes);
const code = (title, language, source, prompt, notes) => s(title, "code", { language, code: source, prompt }, notes);
const run = (title, key, lead, prompt, notes) => s(title, "python", { example: py[key], lead, prompt }, notes);
const exercise = (title, question, solution, notes) => s(title, "exercise", { question, solution }, notes);
const think = (title, question, solution, notes) => s(title, "think", { question, solution }, notes);
const ai = (title, prompt, task, notes) => s(title, "ai", { aiPrompt: prompt, task }, notes);
const table = (title, headers, rows, prompt, notes) => s(title, "table", { headers, rows, prompt }, notes);

const outcomes = (id) =>
  s(
    "Dosyalar ve Hata Yönetimi",
    "outcomes",
    {
      lead: "Program kapandığında veri nasıl kalıcı olur? Dosya ve veri hatalarına karşı programımızı nasıl çökmez hale getiririz?",
      items: weeks[id - 1].outcomes,
    },
    "Bu haftanın kazanımlarını birlikte okuyun. Her kazanım için hafta sonunda bir uygulama kanıtı isteyin.",
  );

export const week08Deck = [
  outcomes(8),
  think(
    "Program Kapandığında Veriler Nereye Gider?",
    "RAM'de tutulan değişkenler bilgisayar kapandığında veya program sonlandığında tamamen silinir. Siber güvenlik logları, kullanıcı veritabanları ve sistem ayarları kalıcı olarak nerede ve nasıl saklanır?",
    "Kalıcı depolama birimlerinde (SSD/HDD) dosyalar halinde saklanır. Python'da 'with open()' yapısı işletim sistemi düzeyinde dosya okuma/yazma kilitlerini ve UTF-8 karakter setini güvenle yönetir.",
    "Bellek (RAM - geçici) ile disk (dosya sistemi - kalıcı) arasındaki farkı ve güvenlik açısından önemini vurgulayın.",
  ),
  cards(
    "Python'da Dosya Açma Modları",
    [
      [
        "'r' (Read - Salt Okuma)",
        "Dosyayı yalnızca okumak için açar. Dosya diskte yoksa FileNotFoundError fırlatır.",
      ],
      [
        "'w' (Write - Baştan Yazma)",
        "Dosyayı yazmak için açar. Dosya yoksa oluşturur; varsa İÇERİĞİNİ TAMAMEN SİLİP baştan yazar!",
      ],
      [
        "'a' (Append - Sona Ekleme)",
        "Dosyanın sonuna yeni kayıtlar ekler. Eski veriler korunur. Denetim ve audit logları için esastır.",
      ],
      [
        "encoding='utf-8'",
        "Türkçe karakterlerin (ş, ğ, ı, ö, ü, ç) bozulmaması için her zaman açıkça belirtilmelidir.",
      ],
    ],
    "Dosya sistemiyle güvenli etkileşim kipleri.",
    "'w' modunun var olan dosyayı sorgusuz sualsiz sıfırladığı tehlikesine dikkat çekin.",
  ),
  cards(
    "Neden Daima 'with open()' Kullanmalıyız?",
    [
      [
        "Otomatik Kaynak Yönetimi",
        "with bloğu tamamlandığında veya blok içinde bir hata (exception) oluştuğunda dosya otomatik kapatılır.",
      ],
      [
        "Veri Kaybını Önleme (Flush)",
        "Kapatılmayan dosyaların tamponundaki (buffer) son yazılan satırlar diske yazılmadan kaybolabilir.",
      ],
      [
        "Dosya Kilidi Serbest Bırakma",
        "İşletim sisteminde dosyanın 'başka bir işlem tarafından kullanılıyor' uyarısıyla kilitli kalmasını engeller.",
      ],
      [
        "Temiz ve Okunabilir Kod",
        "f.close() çağırmayı unutma riskini tamamen ortadan kaldırır.",
      ],
    ],
    "Context Manager (Bağlam Yöneticisi) güvencesi.",
    "Öğrencilere geleneksel open/close yerine daima with bloklarını benimsetin.",
  ),
  run(
    "Uygulama 1: Dosyaya Yazma ve Okuma (UTF-8)",
    "file_write_read",
    "with open(), write(), read() ve satır satır okuma demosu.",
    "# write() içerisine yeni bir güvenlik notu satırı ekle.",
    "Örnek dosya otomatik olarak çalışma klasöründe oluşturulur ve güvenle okunur.",
  ),
  run(
    "Uygulama 2: Denetim (Audit) Loguna Ekleme ('a' Modu)",
    "file_append_audit",
    "Eski kayıtları koruyarak dosya sonuna yeni olay satırları ekleme demosu.",
    "# Yeni bir saat ve kullanıcı eylemi ekleyerek logun büyüdüğünü gör.",
    "Denetim loglarında 'a' kipinin kritik rolünü açıklayın.",
  ),
  cards(
    "Taşınabilir Kod: Google Colab, Jupyter ve pathlib",
    [
      [
        "İşletim Sistemi Farkı",
        "Windows ters bölü (\\), Linux, macOS ve Google Colab ise düz bölü (/) kullanır.",
      ],
      [
        "Pathlib Devrimi",
        "from pathlib import Path: yol = Path('klasor') / 'dosya.csv' yazımı tüm işletim sistemlerinde sorunsuz çalışır.",
      ],
      [
        "Göreli (Relative) Yol Avantajı",
        "'C:\\Users\\...' gibi mutlak yollar başka bilgisayarda veya Colab'da anında çöker. Göreli yollar her yerde çalışır.",
      ],
      [
        "Klasör Otomasyonu",
        "Path('raporlar').mkdir(exist_ok=True) klasör yoksa oluşturur, varsa çökmez.",
      ],
    ],
    "Platformlar arası taşınabilirlik prensibi.",
    "Öğrencilerin kodlarını doğrudan Google Colab'a yüklediklerinde sıfır ayarla çalışmasının sırrı pathlib ve göreli yollardır.",
  ),
  run(
    "Uygulama 3: pathlib ile Platform Bağımsız Dosya Yönetimi",
    "path_portable",
    "Path nesnesi, göreli yollar, dosya uzantı kontrolü ve glob() ile arama.",
    "# *.txt yerine *.bak uzantılı dosyaları arat.",
    "Colab ve yerel bilgisayar uyumunu gösterin.",
  ),
  cards(
    "Yapılandırılmış Veri: CSV (Comma-Separated Values)",
    [
      [
        "CSV Nedir?",
        "Tablo biçimindeki verilerin virgül veya noktalı virgülle ayrıldığı evrensel metin formatı.",
      ],
      [
        "csv.reader vs csv.DictReader",
        "DictReader sütun başlıklarını anahtar yapar: kayit['ip'] şeklinde güvenli ve okunabilir erişim sağlar.",
      ],
      [
        "Tüm Değerler String Gelir",
        "CSV'den okunan '230' bir string'dir; sayısal işlem veya karşılaştırma için int() gereklidir.",
      ],
      [
        "newline='' Kuralı",
        "CSV dosyaları açılırken newline='' verilerek boş satır oluşumu engellenir.",
      ],
    ],
    "Siber güvenlikte loglar ve raporlar için standart format.",
    "Excel veya SIEM sistemlerinden dışa aktarılan verilerin işlenmesini anlatın.",
  ),
  run(
    "Uygulama 4: Güvenlik Olaylarını CSV'den Okuma",
    "csv_read_events",
    "csv.DictReader ile IP, kullanıcı ve bayt boyutlarını süzme demosu.",
    "# Boyutu 500 KB'tan büyük dosyaları ekrana filtreleyen kural ekle.",
    "DictReader'ın sütun başlıklarını nasıl anahtara dönüştürdüğünü inceletin.",
  ),
  run(
    "Uygulama 5: CSV Günlüğünden Özet Rapor Dosyası Üretme",
    "csv_summary_report",
    "Sentetik giriş loglarını kullanıcı bazında sayıp INCELE durumlu özet CSV dosyası üretme.",
    "# Eşik değerini (ESIK) 2 yaparak durum sütununu gözlemle.",
    "Haftanın çıktısı olan özet rapor üretici mini aracı çalıştırın.",
  ),
  think(
    "Programın Çökmesi Kabul Edilebilir mi?",
    "7/24 çalışan bir güvenlik duvarı veya kimlik doğrulama servisi, kullanıcı yanlış bir karakter girdiğinde çökerse ne olur?",
    "Hizmet kesintisi (DoS - Denial of Service) yaşanır; güvenlik açığı doğar. Savunmacı programlamada beklenen tüm hata senaryoları 'try / except' ile kontrollü olarak ele alınmalı, program asla aniden kapanmamalıdır.",
    "İstisna (exception) yönetimini bir kaza anındaki hava yastığına benzetin.",
  ),
  cards(
    "Sık Karşılaşılan İstisnalar (Exceptions)",
    [
      [
        "ValueError",
        "int('abc') gibi geçersiz tür/değer dönüşümlerinde fırlatılır.",
      ],
      [
        "FileNotFoundError",
        "Diskte var olmayan bir dosya 'r' modunda açılmak istendiğinde oluşur.",
      ],
      [
        "ZeroDivisionError",
        "Bir sayıyı 0'a bölme girişiminde sistemin kilitlenmesini önler.",
      ],
      [
        "KeyError & IndexError",
        "Sözlükte olmayan anahtara veya listede olmayan indekse erişim hatası.",
      ],
    ],
    "Python hata tipleri kataloğu.",
    "Hataları gizlemek yerine doğru hata tipini yakalamanın önemini belirtin.",
  ),
  run(
    "Uygulama 6: Temel Hata Türlerini Kontrollü Yakalama",
    "exception_types",
    "ValueError, ZeroDivisionError, KeyError, FileNotFoundError yakalama demosu.",
    "# Yeni bir liste sınır aşımı ekleyip IndexError ile yakala.",
    "Hatalar yakalandığı için programın sonuna kadar çökmeden çalıştığını gösterin.",
  ),
  cards(
    "try / except / else / finally Mimarisi",
    [
      [
        "try bloğu",
        "Hata üretme potansiyeli olan riskli kod buraya yazılır.",
      ],
      [
        "except HataTuru:",
        "Yalnızca ilgili hata oluştuğunda çalışır ve kurtarma aksiyonunu alır.",
      ],
      [
        "else bloğu",
        "Hiçbir hata OLUŞMAZSA çalışır; başarılı akış işlemlerini ayırır.",
      ],
      [
        "finally bloğu",
        "Hata olsun ya da olmasın, return edilse bile MUTLAKA en son çalışır.",
      ],
    ],
    "Eksiksiz istisna yönetim akışı.",
    "Temizlik veya bağlantı kapatma işlemlerinde finally'nin rolünü açıklayın.",
  ),
  run(
    "Uygulama 7: try / except / else / finally ile Port Doğrulama",
    "try_except_basics",
    "Format hatası (ValueError) ile sınır hatasını güvenle ayıran tam blok demosu.",
    "# Geçersiz bir metin ('xyz') girerek akışı incele.",
    "finally bloğunun her şartta çalıştığını konsolda gözlemleyin.",
  ),
  run(
    "Uygulama 8: Güvenli Varsayılan Ayarlara Dönüş",
    "file_not_found_safe",
    "Ayar dosyası eksik olduğunda çökmek yerine varsayılan güvenlik ilkelerine geçiş.",
    "# Dosyayı oluşturup yeni ayarların yüklendiğini gör.",
    "Fail-safe (arızaya karşı güvenli) tasarım felsefesini örnekleyin.",
  ),
  run(
    "Uygulama 9: raise ile Bilinçli Hata Fırlatma",
    "raise_validation",
    "Kendi doğrulama kurallarımızı yazıp ihlal durumunda ValueError fırlatma demosu.",
    "# Parolaya özel karakter zorunluluğu kuralı ekle.",
    "Fonksiyonun hata fırlatması ve çağıran kodun bunu yakalaması mantığını anlatın.",
  ),
  run(
    "Uygulama 10: Bozuk Satırlara Dayanıklı Log Dosyası Analizi",
    "log_file_analyzer",
    "Bozuk veya eksik satırları atlayarak analizi sürdüren ve rapor üreten SOC betiği.",
    "# Log dosyasına yeni bozuk bir satır ekleyip sayacı incele.",
    "Gerçek hayattaki kirli veriler karşısında programın dayanıklılığını vurgulayın.",
  ),
  run(
    "Uygulama 11: Çalışma Ortamı Tespiti (Google Colab / Yerel)",
    "env_detect_colab",
    "Kodun Google Colab'da mı, Pyodide'de mi yoksa yerel Python'da mı çalıştığını anlama.",
    "# Colab'a özel dosya yükleme ipuçlarını konsoldan oku.",
    "Öğrencilere kodlarını her araçta sıfır sorunla nasıl çalıştıracaklarını gösterin.",
  ),
  ai(
    "🤖 YZ ile Çalış: Dayanıklı Log Ayrıştırıcı Tasarımı",
    "Bana Python'da dosya okurken ve CSV yazarken sık yapılan 3 güvenlik/stabilite hatasını ve bunların try/except ile nasıl düzeltileceğini anlat.",
    "Önce kendi try/except planını kur, YZ'den edge-case (uç durum) senaryoları iste.",
    "Öğrencilere savunmacı hata yönetimi refleksi kazandırın.",
  ),
  s(
    "Mini Quiz 1: with open() ve Otomatik Kapanma",
    "quiz",
    {
      question: "Python'da 'with open(...)' bloğunun en önemli avantajı nedir?",
      options: [
        "Dosyayı işlem bitince veya hata çıksa bile otomatik olarak kapatması",
        "Dosyayı daha hızlı okuması",
        "Dosya boyutunu otomatik küçültmesi",
        "Şifreli dosya oluşturması",
      ],
      answer: 0,
      explanation:
        "with bağlam yöneticisi (context manager), blok sona erdiğinde dosyayı f.close() çağrısına gerek kalmadan güvenle kapatır.",
    },
    "Dosya yönetimi temel sorusu.",
  ),
  s(
    "Mini Quiz 2: Dosya Açma Modu ('a' vs 'w')",
    "quiz",
    {
      question: "Var olan bir güvenlik log dosyasının önceki verilerini SİLMEDEN sonuna yeni olaylar eklemek için hangi mod kullanılmalıdır?",
      options: ["'a'", "'w'", "'r'", "'x'"],
      answer: 0,
      explanation:
        "'a' (append) modu mevcut içeriği korur ve yeni verileri dosya sonuna ekler. 'w' modu ise dosyayı tamamen sıfırlar.",
    },
    "Dosya açma kipleri sorusu.",
  ),
  s(
    "Mini Quiz 3: Olmayan Dosyayı Okuma Hatası",
    "quiz",
    {
      question: "with open('olmayan.txt', 'r') satırı çalıştırıldığında hangi hata fırlatılır?",
      options: ["FileNotFoundError", "KeyError", "ValueError", "ZeroDivisionError"],
      answer: 0,
      explanation:
        "Salt okuma ('r') modunda belirtilen dosya diskte bulunamazsa FileNotFoundError hatası oluşur.",
    },
    "İstisna tipleri sorusu.",
  ),
  s(
    "Mini Quiz 4: CSV DictReader Davranışı",
    "quiz",
    {
      question: "csv.DictReader ile okunan bir satırdaki sayısal veriler (örn: port veya boyut) Python'a hangi veri türünde gelir?",
      options: ["str (metin)", "int (tam sayı)", "float", "bool"],
      answer: 0,
      explanation:
        "CSV metin tabanlı bir format olduğu için tüm alanlar başlangıçta 'str' olarak okunur; sayısal kullanım için int() gereklidir.",
    },
    "CSV veri türü sorusu.",
  ),
  s(
    "Mini Quiz 5: finally Bloğunun Çalışma Zamanı",
    "quiz",
    {
      question: "try / except / else / finally yapısında 'finally' bloğu ne zaman çalışır?",
      options: [
        "Hata olsun ya da olmasın, her durumda mutlaka çalışır",
        "Yalnızca hata oluştuğunda çalışır",
        "Yalnızca hata OLUŞMADIĞINDA çalışır",
        "Sadece dosya kilitliyse çalışır",
      ],
      answer: 0,
      explanation:
        "finally bloğu bir hata oluşsa da oluşmasa da, hatta fonksiyondan return ile çıkılsa bile mutlaka en son çalışır.",
    },
    "finally bloğu sorusu.",
  ),
  s(
    "Mini Quiz 6: Taşınabilir Dosya Yolları (pathlib)",
    "quiz",
    {
      question: "Windows ve Linux/Colab dosya yolu ayracı farklarını otomatik yönetmek için hangi Python standart kütüphanesi önerilir?",
      options: ["pathlib", "math", "random", "time"],
      answer: 0,
      explanation:
        "pathlib kütüphanesindeki Path sınıfı, işletim sistemine göre bölü veya ters bölü karakterini taşınabilir şekilde yönetir.",
    },
    "pathlib taşınabilirlik sorusu.",
  ),
  s(
    "Hafta 8: Kazanım kontrolü",
    "outcomes",
    {
      lead: "Dosyalar ve hata yönetimi konusunun ardından şu 4 kanıtı kendi kodunla göster:",
      items: weeks[7].outcomes,
    },
    "Kazanım kontrolü: Öğrencilerin UTF-8 dosya okuma/yazma ve CSV özet raporlama becerilerini değerlendirin.",
  ),
];

