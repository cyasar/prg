import { curriculum as weeks } from "./curriculum.js";
import { motivationSlides } from "./motivation.js";
import { pythonExamples as py, webExamples as web } from "./examples.js";
const s = (title, type, content, notes) => ({ title, type, ...content, notes });
const cards = (title, items, lead, notes) =>
  s(title, "cards", { items, lead }, notes);
const code = (title, language, source, prompt, notes) =>
  s(title, "code", { language, code: source, prompt }, notes);
const run = (title, key, lead, prompt, notes) =>
  s(title, "python", { example: py[key], lead, prompt }, notes);
const exercise = (title, question, solution, notes) =>
  s(title, "exercise", { question, solution }, notes);
const think = (title, question, solution, notes) =>
  s(title, "think", { question, solution }, notes);
const ai = (title, prompt, task, notes) =>
  s(title, "ai", { aiPrompt: prompt, task }, notes);
const table = (title, headers, rows, prompt, notes) =>
  s(title, "table", { headers, rows, prompt }, notes);
const outcomes = (id) =>
  s(
    id === 1
      ? "Programlamaya Giriş"
      : id === 2
        ? "Veri, Değişkenler ve Karar Veren Programlar"
        : id === 3
          ? "Karar Yapıları ve Veri Doğrulama"
          : id === 4
            ? "Döngüler ve Tekrarlayan Problemler"
            : id === 5
              ? "Diziler (Listeler) ve Veri İşleme"
              : id === 6
                ? "Fonksiyonlarla Problem Parçalama"
                : "String İşlemleri ve Basit Log Analizi",
    "outcomes",
    {
      lead:
        id === 1
          ? "Bilgisayara problemleri çözdürmeyi öğreneceğiz."
          : id === 2
            ? "Programlar bilgiyi nerede tutar ve bu bilgiyle nasıl karar verir?"
            : id === 3
              ? "Karmaşık karar mekanizmalarını sadeleştirip veriyi hatalara ve kötüye kullanıma karşı nasıl doğrularız?"
              : id === 4
                ? "Tekrarlanan işlemleri, sayaçları ve toplayıcıları döngülerle nasıl otomatikleştiririz?"
                : id === 5
                  ? "Birden çok veriyi dizilerde (listelerde) nasıl saklar, filtreler ve analiz ederiz?"
                  : id === 6
                    ? "Büyük ve karmaşık problemleri tek sorumlu, yeniden kullanılabilir ve test edilebilir fonksiyonlara nasıl ayırırız?"
                    : "Metin verilerini nasıl dilimler, temizler, dönüştürür ve sistem/güvenlik loglarını nasıl analiz ederiz?",
      items: weeks[id - 1].outcomes,
    },
    "Bu haftanın kazanımlarını birlikte okuyun. Her kazanım için hafta sonunda bir uygulama kanıtı isteyin. Bilgi güvenliğiyle ilişki: açık kurallar, güvenilmeyen veri ve test sorumluluğu.",
  );

export const decks = {
  1: [
    outcomes(1),
    think(
      "Yapay zekâ programlamayı öldürdü mü?",
      "YZ bir programın kodunu yazarsa, programcıya hangi kararlar kalır? Bir örnek üret.",
      "Hayır. Programcının rolü değişiyor. Problemi, kısıtları, güvenlik gereksinimlerini ve doğruluğun nasıl sınanacağını insan belirler.",
      "Önce 2 dakika bireysel düşünme, sonra eşli paylaşım yapın. “Çalışan kod” ile “istenen problemi çözen kod” arasındaki farkı tartışın. İş piyasasının geleceği hakkında kesin tahmin vermeyin.",
    ),
    cards(
      "Direksiyonda kim var?",
      [
        [
          "İnsan",
          "Problemi ve amacı tanımlar. Kısıtları ve algoritmayı kurar. Sonucu, güvenliği ve testleri değerlendirir.",
        ],
        [
          "YZ",
          "Kod önerir, alternatif üretir, açıklama yapar, hata arar ve dokümantasyon taslağı oluşturur.",
        ],
      ],
      "Karar ve doğrulama sorumluluğu insanda.",
      "Bir YZ aracının ikna edici ama hatalı cevap verebileceğini açıklayın. Öğrenciden “Kullanıcı yaşı 18 mi, 18’den büyük mü?” gibi sınır gereksinimini insanın belirlediği bir örnek alın.",
    ),
    ai(
      "🤖 YZ ile Çalış: Önce düşünce",
      "Kodu benim için yazma. Bir sayının tek mi çift mi olduğunu belirleyen algoritmayı benim geliştirmem için bana sırayla sorular sor.",
      "Önce kendi iki adımını yaz. YZ’nin ilk sorusunu yanıtla ve taslağını geliştir.",
      "YZ kullanımı teşvik edilir. İlk taslak, alınan yardım ve test kanıtı öğrencinin kendi öğrenmesini görünür kılar. Araç erişimi yoksa öğretmen aynı soruları sorabilir. Ücretli abonelik gerekli değildir.",
    ),
    cards(
      "Program nedir?",
      [
        [
          "Problem",
          "Bir laboratuvarda günlük toplam olay sayısını öğrenmek istiyoruz.",
        ],
        [
          "Program",
          "Veriyi alıp belirlediğimiz kurallara göre işleyen komutlar bütünü.",
        ],
        ["Sonuç", "Kayıtları sayar ve ekranda anlamlı bir özet gösterir."],
      ],
      "Programlama, çözümümüzü bilgisayarın uygulayabileceği biçimde ifade etmektir.",
      "Log sözcüğünü olay kaydı olarak tanımlayın. Programın kendiliğinden niyet okuyamadığını vurgulayın. Öğrenciden telefonundaki bir programın girdisini ve çıktısını söylemesini isteyin.",
    ),
    s(
      "Bilgisayar komutları nasıl çalıştırır?",
      "flow",
      {
        items: [
          ["Kod", "Yazdığımız komutlar"],
          ["Çalışma ortamı", "Komutları yürütür"],
          ["Sonuç", "Bellek değişir / çıktı oluşur"],
        ],
        prompt:
          "Bir hesap makinesinde 4 + 7 yazdığında girdi ve çıktı ne olur?",
      },
      "İşlemci komutları yürütür, bellek çalışma verilerini tutar, işletim sistemi dosya ve ekran gibi kaynakları yönetir. Bu bir başlangıç modeli. Her dilin aynı yürütme ayrıntılarına sahip olduğunu söylemeyin.",
    ),
    cards(
      "Programlama dili ve çeviri",
      [
        [
          "Programlama dili",
          "Algoritmayı belirli yazım ve anlam kurallarıyla ifade eder. Python ve JavaScript örnektir.",
        ],
        [
          "Derleyici (compiler)",
          "Kodu başka bir biçime, örneğin makine koduna veya ara koda dönüştürür.",
        ],
        [
          "Yorumlayıcı (interpreter)",
          "Programın işlemlerini çalışma sırasında yürütür.",
        ],
      ],
      "Bir dilin çalışma ortamı derleme ve yorumlamayı birlikte kullanabilir.",
      "“Python sadece satır satır okur, hiç derlenmez” demeyin. Yaygın CPython uygulaması kaynak kodu bytecode ara biçimine derleyip sanal makinede yürütür. Başlangıçta öğrencinin bilmesi gereken: Python kodunu çalıştırmak için Python ortamına ihtiyaç vardır.",
    ),
    cards(
      "Neden Python ile başlıyoruz?",
      [
        [
          "Okunabilir yazım",
          "Çözüm adımlarını az sayıda satırla ifade edebiliriz.",
        ],
        [
          "Hızlı geri bildirim",
          "Küçük bir değişikliği hemen çalıştırıp sonucu görürüz.",
        ],
        [
          "Standart kütüphane",
          "Dosya, metin ve veri işleme için hazır araçlar sunar.",
        ],
      ],
      "Önce algoritmayı öğreneceğiz. Python onu ifade ettiğimiz ana dil olacak.",
      "Python sözdizimi de öğrenilecek ancak dersin odağı problem çözmedir. Python yorumlayıcısı ile editörün ayrı araçlar olduğunu birazdan uygulayacağız. Başlangıçta ek paket kurdurmayın.",
    ),
    cards(
      "Bilgi güvenliğinde Python",
      [
        [
          "Veriyi anlamak",
          "Kurgusal log satırlarını filtreleme, dosya ve ağ verilerini özetleme.",
        ],
        [
          "Tekrarlanan işi yapmak",
          "Kendi dosyalarını işleme, rapor hazırlama ve küçük otomasyon araçları.",
        ],
        [
          "Araçlarla konuşmak",
          "İzin verilen API’lerden veri okuma ve analiz etme.",
        ],
      ],
      "Örneklerimiz sentetik verilerle ve kendi çalışma alanımızda ilerleyecek.",
      "API, bir programın başka bir programla belirlenmiş kurallar üzerinden iletişim kurmasıdır. Burada ağ isteği veya saldırı örneği çalıştırmıyoruz. Bu temel ileride Log ve Veri Analizi ile Güvenli Yazılım Geliştirme derslerine katkı sağlar.",
    ),
    ...motivationSlides,
    s(
      "Bir programın düşünce yolu",
      "process",
      {
        items: [
          "Problem",
          "Analiz",
          "Girdiler",
          "Beklenen çıktı",
          "Algoritma",
          "Pseudocode",
          "Programlama",
          "Test",
          "Hata ayıklama",
          "İyileştirme",
        ],
        prompt: "Kod yazmadan önce hangi dört soruya cevap vereceğini seç.",
      },
      "Süreç tek yönlü olmak zorunda değildir. Test bir eksik gereksinimi ortaya çıkarırsa analize döneriz. Öğrenci her uygulamada kendi girdi ve beklenen çıktı cümlesini yazmalı.",
    ),
    think(
      "🧠 Önce Sen Düşün: İki sayı",
      "Kullanıcının verdiği iki sayıyı toplayacağız. Programın girdisi, işlemi ve çıktısı nedir?",
      "Girdi: sayi1 ve sayi2. İşlem: toplam = sayi1 + sayi2. Çıktı: toplam. Bu ilk örnekte tam sayı girdiler kullanacağız.",
      "Yanıtı açmadan herkes 60 saniye düşünsün. Bir öğrencinin “çıktı: ekran” demesi halinde ekrana yazılacak değeri sorun. Girdi türü bir varsayımdır, açıkça belirtilmelidir.",
    ),
    s(
      "Günlük yaşam algoritması: Çay yapmak",
      "steps",
      {
        items: [
          ["1", "Gerekli suyu ve çayı hazırla."],
          ["2", "Suyu uygun araçla kaynat."],
          ["3", "Çaya sıcak su ekle."],
          ["4", "Belirlenen süre demlenmesini bekle."],
          ["5", "Çayı bardağa koy ve işlemi bitir."],
        ],
        prompt: "“Biraz bekle” yerine daha açık bir adım nasıl yazılır?",
      },
      "Bu, algoritma fikrini konuşmak için bir modeldir. Mutfakta uygulama yapılmaz. “Belirlenen süre”nin örneğin 10 dakika olarak netleştirilmesi gerektiğini öğrenciler bulsun. Girdiler ve araçların hazır olduğu varsayımlarını listeleyin.",
    ),
    cards(
      "İyi bir algoritmanın özellikleri",
      [
        ["Sıralı", "Sonraki adım, önceki adımların ürettiği bilgiyi kullanır."],
        ["Açık", "“Uygun şekilde yap” gibi belirsiz ifadeler içermez."],
        ["Sonlu", "Bu görev, sınırlı sayıda adımdan sonra biter."],
        ["Uygulanabilir", "Her adım mevcut araçlarla gerçekleştirilebilir."],
      ],
      "Aynı problem için birden fazla doğru algoritma bulunabilir.",
      "Öğrenciler çay algoritmasında her özelliğe karşılık gelen bir adımı göstersin. Sonlu görev algoritmalarını inceliyoruz. Sürekli çalışan sunucu süreçleri farklı bir kullanım bağlamıdır.",
    ),
    exercise(
      "Bir eksik adımı bul",
      "“Suyu kaynat. Çayı dök. Bitir.” algoritmasında hangi adım veya varsayım eksik?",
      "Çayın nereye ekleneceği ve demleme süresi belirsiz. Araçları/girdileri hazırla, çaya sıcak su ekle, süreyi belirt ve bardağa koy adımları açık yazılmalı.",
      "3 dakika eşli çalışma. Tek bir ideal tarif ezberletmeyin. Belirsizliği gideren, sıralı ve biten her makul çözümü tartışın.",
    ),
    s(
      "İki sayı toplamı: Girdi, işlem, çıktı",
      "flow",
      {
        items: [
          ["Girdi", "4 ve 7"],
          ["İşlem", "4 + 7"],
          ["Çıktı", "11"],
        ],
        prompt: "4 yerine -4 gelse çıktı ne olur? Algoritma değişir mi?",
      },
      "Sonuç 3 olur, toplama algoritması değişmez. Değişen girdiye aynı kural uygulanır. Sıfır, negatif ve eşit sayıları daha sonra test edeceğiz.",
    ),
    code(
      "Algoritmayı pseudocode ile yazalım",
      "Pseudocode",
      "BAŞLA\n  sayi1 değerini OKU\n  sayi2 değerini OKU\n  toplam = sayi1 + sayi2\n  toplam değerini YAZ\nBİTİR",
      "Her satırı eşine kendi cümlenle açıkla.",
      "Pseudocode, yani sözde kod, bir programlama dilinin kesin sözdizimine bağlı değildir. Bilgisayarda doğrudan çalıştırılmaz. Kod yazmadan çözümün mantığını görünür kılar.",
    ),
    s(
      "Akış şeması adımları görünür kılar",
      "flowchart",
      {
        variant: "sum",
        prompt:
          "Girdi ve çıktı şekillerini göster. Toplama hangi şeklin içinde?",
      },
      "Oval başlangıç/bitiş, paralelkenar girdi/çıktı, dikdörtgen işlem içindir. Oklar yürütme sırasını gösterir. Öğrenciler şemayı izleyip sayi1 ve sayi2 değerlerinin toplamdan önce okunmasını açıklasın.",
    ),
    s(
      "Toplam algoritmasını elle izle",
      "sumtrace",
      {
        lead: "Önce tahmin et. Her adımda bellekteki değerlerin nasıl oluştuğunu gör.",
      },
      "İki sayı için önce beklenen toplamı yazdırın. Sonraki adım düğmesini sırayla kullanın. Henüz okunmamış değer ile sıfırın farklı olduğunu açıklayın. 4/7, 0/0 ve -4/7 değerlerini deneyin.",
    ),
    cards(
      "Programcı çantası: Çalışma ortamı",
      [
        ["Bilgisayar", "Kodun ve araçların çalıştığı cihaz."],
        [
          "İşletim sistemi",
          "Windows, macOS veya Linux; dosyaları ve programları yönetir.",
        ],
        ["Metin editörü", "Kod dosyasını yazıp kaydederiz."],
        [
          "IDE",
          "Editör, çalıştırma ve hata ayıklama araçlarını birlikte sunar.",
        ],
      ],
      "Araçların adını bilmekten çok, hangi iş için kullanıldığını anlayacağız.",
      "Editör düz metin üretir. Word belgesi yerine .py dosyası kullanılır. VS Code eklentilerle geliştirme ortamı sunar. Öğrenciden işletim sistemini ve var olan editörünü bulmasını isteyin.",
    ),
    cards(
      "Programcı çantası: Kod ve web",
      [
        [
          "VS Code",
          "Kod yazmak ve proje klasörünü açmak için kullanacağımız editör.",
        ],
        [
          "Python yorumlayıcısı",
          "Python kodunu yürütür; editörden ayrı kurulabilir.",
        ],
        ["Tarayıcı", "HTML/CSS/JavaScript sayfasını açar."],
        [
          "Developer Tools",
          "Sayfa yapısını, stilleri ve JavaScript hatalarını inceler.",
        ],
      ],
      "Bir editörün kurulu olması, Python’ın kurulu olduğu anlamına gelmez.",
      "Python için Microsoft Python eklentisi ve doğru yorumlayıcı seçimi gerekir. IDLE, küçük Python örnekleri için alternatif olabilir. Tarayıcı araçlarını daha sonra bir yerel HTML dosyasında açacağız.",
    ),
    code(
      "Terminal: Komutla iletişim",
      "Terminal",
      "# Windows\npy --version\n\n# macOS / Linux\npython3 --version",
      "Kendi sistemine uygun komutu çalıştır. “Python 3…” çıktısını kontrol et.",
      "Terminal bir komut arayüzüdür. Komutu Python dosyasına yazmayın. Windows py bulunamazsa python --version deneyin. Hiçbiri bulunamazsa kurulum ve PATH ayarını kontrol edip yeni terminal açın.",
    ),
    s(
      "Python kurulumu: İlk kontrol",
      "links",
      {
        items: [
          ["Python 3 indir", "https://www.python.org/downloads/"],
          ["VS Code indir", "https://code.visualstudio.com/"],
          [
            "VS Code Python yönergesi",
            "https://code.visualstudio.com/docs/python/python-tutorial",
          ],
        ],
        lead: "Kararlı Python 3 sürümünü işletim sistemine uygun şekilde kur.",
        prompt:
          "Terminalde sürüm görünüyor mu? Görünmüyorsa kurulum tamamlanmış sayılmaz.",
      },
      "Kurulum adımları işletim sistemine ve sürüme göre değişir. Resmî yönergeyi izleyin. Windows için gerekli olduğunda PATH seçeneğini kullanın. Kurulum gecikirse slayttaki tarayıcı Python alanıyla derse devam edilebilir; ilk yükleme internet ister.",
    ),
    s(
      "İlk proje klasörümüz",
      "steps",
      {
        items: [
          ["1", "prg-calismalarim klasörünü oluştur ve VS Code ile aç."],
          ["2", "merhaba.py dosyasını oluştur ve kaydet."],
          ["3", "Python: Select Interpreter ile Python 3’ü seç."],
          ["4", "Terminali bu klasörde aç. Dosya uzantısını kontrol et."],
        ],
        prompt: "Dosyanın adı merhaba.py olmalı; merhaba.py.txt olmamalı.",
      },
      "İlk kez başlayan öğrencilerde en yaygın sorun yanlış klasör, kaydedilmemiş dosya ve gizli uzantıdır. Her öğrenci dosyasını eşine göstersin. >>> görünüyor ise Python etkileşimli kabuğundadır; exit() ile terminale dönülebilir.",
    ),
    cards(
      "Git, GitHub ve GitHub Pages",
      [
        [
          "Git",
          "Dosya değişikliklerinin geçmişini yerelde tutan sürüm kontrol aracı.",
        ],
        [
          "GitHub",
          "Git depolarını çevrimiçi incelemek ve paylaşmak için platform.",
        ],
        [
          "GitHub Pages",
          "Depodaki web içeriğini tarayıcıdan erişilen bir site olarak yayımlar.",
        ],
      ],
      "İlk hafta depoyu açmak, örnekleri görmek ve kendi bilgisayarında çalıştırmak yeterli.",
      "Repository/depo proje dosyaları ve geçmişidir. Commit anlamlı bir değişiklik kaydıdır. GitHub hesabı herkese açık depoyu okumak için gerekmez. Branch gibi ayrıntılar 9. haftada uygulamalı ele alınacak.",
    ),
    code(
      "GitHub’dan örnekleri alalım",
      "Terminal",
      "git clone https://github.com/cyasar/prg.git\ncd prg\n\n# Windows\npy examples/week01/hello.py\n\n# macOS / Linux\npython3 examples/week01/hello.py",
      "Clone, depoyu bilgisayarına kopyalar. Python örneklerini çalıştırmak için npm gerekmez.",
      "Git kurulumu gerekirse git-scm.com/install adresindeki işletim sistemi yönergesini izleyin. Bu komutlar içerik hedef depoya yayımlandıktan sonra geçerlidir. Git kuramayan öğrenci slayttaki kodu kendi .py dosyasına kopyalayabilir. İlk hafta push beklemiyoruz.",
    ),
    s(
      "Tarayıcı geliştirici araçları",
      "steps",
      {
        items: [
          ["1", "Birazdan oluşturacağın HTML sayfasını tarayıcıda aç."],
          [
            "2",
            "Tarayıcı menüsünden Geliştirici Araçları’nı aç (çoğu masaüstünde F12).",
          ],
          ["3", "Elements / Öğeler sekmesinde başlığı bul."],
          ["4", "Console / Konsol sekmesinde varsa JavaScript hatasını oku."],
        ],
        prompt: "Başlığın görünen metni ile HTML içindeki metni eşleştir.",
      },
      "Kısayollar işletim sistemine göre değişebilir. Sayfa üzerindeki geçici değişikliklerin kaynak dosyaya kaydedilmediğini gösterin. İlk hafta Network, Performance gibi sekmelere girip öğrenciyi yormayın.",
    ),
    run(
      "İlk Python programı",
      "hello",
      "Kodları yukarıdan aşağıya çalıştırıyoruz.",
      "İkinci mesajın sonuna kendi bölümünle ilgili bir kelime ekle.",
      "Önce Kodu dene alanını açıp çalıştırın. Ardından yerel merhaba.py dosyasını çalıştırın. Windows: py merhaba.py, macOS/Linux: python3 merhaba.py. print ve parantezleri gösterin.",
    ),
    run(
      "Program kullanıcıyla konuşuyor",
      "name",
      "Girdi aldığımızda programın sonucu kişiye göre değişebilir.",
      "Kurgusal bir isim kullan. İki farklı isimle sonucu karşılaştır.",
      "input metin döndürür. isim bu değere verdiğimiz addır. Değişkenlerin ayrıntısı 2. haftada. Tarayıcı çalışma alanında input yanıtları Program girdileri alanına yazılır.",
    ),
    run(
      "Sözde koddan Python’a: İki sayının toplamı",
      "sum",
      "Her kod satırını daha önce yazdığımız bir algoritma adımıyla eşleştir.",
      "4 ve 7 yerine 0 ve 7 dene. Beklenen sonuç 7 mi?",
      "İlk hafta int ve input kullanımını örnekte gözlemliyoruz; tür dönüşümünü ikinci hafta ayrıntılandıracağız. Geçersiz metin girişini bu aşamada çözmüyoruz. Satır açıklamalarını açıp öğrenciden kendi cümlesiyle tekrarını isteyin.",
    ),
    cards(
      "Web sayfasının üç katmanı",
      [
        [
          "HTML: Yapı",
          "Başlık, paragraf, girdi ve düğme gibi içerikleri tanımlar.",
        ],
        ["CSS: Görünüm", "Renk, boşluk, yazı boyutu ve yerleşimi belirler."],
        [
          "JavaScript: Davranış",
          "Bir tıklama olduğunda metni değiştirmek gibi işlemleri yapar.",
        ],
      ],
      "Python ana dilimiz. Web örneği, aynı algoritmik düşüncenin başka ortamda kullanılmasını gösterir.",
      "HTML bir işaretleme, CSS bir stil dilidir. JavaScript ve Python genel amaçlı programlama dilleridir. Python tarayıcıda doğal olarak çalışmaz; bu ders alanında Pyodide adlı ek çalışma ortamı kullanıyoruz.",
    ),
    code(
      "HTML: Sayfanın yapısı",
      "HTML",
      web.welcome.html,
      "h1 içindeki metni kurgusal adınla değiştir.",
      "h1 ana başlıktır, p paragraftır, button etkileşim başlatır. id bir öğeyi seçebilmek için verdiğimiz benzersiz addır. Bağımsız örnekte doctype, head ve body de bulunur. Sonraki slaytlarda aynı sayfaya stil ve davranış ekleyeceğiz.",
    ),
    code(
      "CSS: Sayfanın görünümü",
      "CSS",
      web.welcome.css,
      "Başlığın font-size değerini 28px yap. Yapı veya davranış değişti mi?",
      "Seçici, hangi HTML öğelerinin biçimleneceğini belirtir. Özellik: değer çiftleri görünümü belirler. CSS burada toplam hesabı yapmaz ve düğme olayını yönetmez.",
    ),
    code(
      "JavaScript: Sayfanın davranışı",
      "JavaScript",
      web.welcome.js,
      "Tıklama sonrasında gösterilecek mesajı değiştir.",
      "querySelector sayfadan öğe seçer. addEventListener belirtilen olay gerçekleştiğinde işlevi çalıştırır. textContent metni değiştirir. Ok fonksiyonu söz dizimini bu hafta ezberletmeyin; olay ve sonuç ilişkisini gösterin.",
    ),
    s(
      "Canlı demo: Sayfayı sen değiştir",
      "web",
      {
        demo: web.welcome,
        lead: "Kod sekmesini seç, küçük bir değişiklik yap ve demoyu yenile.",
      },
      "Önce çıktıdaki düğmeye tıklayın. Sonra HTML başlığını, CSS rengini ve JS mesajını sırayla değiştirin. Her seferinde yalnızca bir katmanı değiştirerek etkisini gözlemletin. Kod ve çıktı ayrı güvenlik bağlamlarında tutulur.",
    ),
    table(
      "Test etmek: Tahmin ile sonucu karşılaştırmak",
      ["Girdiler", "Beklenen toplam", "Test amacı"],
      [
        ["4, 7", "11", "Normal durum"],
        ["0, 0", "0", "Sıfır"],
        ["-4, 7", "3", "Negatif sayı"],
        ["5, 5", "10", "Eşit girdiler"],
      ],
      "Bir testte önce beklenen sonucu yaz, sonra programı çalıştır.",
      "Testin amacı programdan gelen sonucu onaylamak değil, gereksinimle karşılaştırmaktır. Dört satırı öğrenciler sum_two_numbers.py üzerinde çalıştırsın. Gerçekleşen sonuç farklıysa hatayı birlikte inceleyin.",
    ),
    think(
      "Beklenmeyen girdi de problemin parçası",
      "İki sayı isteyen programa abc girilirse ne olur? Programcı bu durumu düşünmeli mi?",
      'int("abc") ValueError üretir. Programcı kabul edilen veri biçimini ve geçersiz girdide ne yapılacağını düşünmelidir. Hata yönetimini ilerleyen haftalarda öğreneceğiz.',
      "Henüz try/except öğretmeyin. Amaç, alınan veriye körü körüne güvenmemeyi fark etmektir. Tür dönüşümü ile girdi aralığı kontrolü aynı şey değildir.",
    ),
    exercise(
      "Etkinlik 1: Günlük hayattan algoritma",
      "Kütüphaneden kitap ödünç alma sürecini en fazla 6 açık adımla yaz. Girdi ve bitişi belirt.",
      "Örnek: Kitabı seç. Kimlik/üyelik bilgisini hazırla. Kitabın ödünç verilebilirliğini kontrol et. Uygunsa ödünç kaydı oluştur. İade tarihini öğren. Kitabı al ve bitir. Uygun değilse başka kitap seç veya işlemi bitir.",
      "Tek bir doğru çözüm yoktur. Öğrenciler üyelik ve kitap bulunabilirliği varsayımlarını yazsın. Akran, belirsiz bir adımı tespit edip soru sorsun.",
    ),
    exercise(
      "Etkinlik 2: Toplamı sen tasarla",
      "İki tam sayının toplamı için girdi, işlem, çıktı ve sözde kod yaz. 10 ve -3 için test ekle.",
      "Girdi: a ve b. İşlem: toplam = a + b. Çıktı: toplam. BAŞLA, a oku, b oku, toplamı hesapla, toplamı yaz, BİTİR. 10 ve -3 için beklenen sonuç 7.",
      "İlk 3 dakika önceki slayta dönmeden kendi çözümünü yazdırın. Çözümü göster ancak öğrenci kendi taslağını oluşturduktan sonra kullanılsın.",
    ),
    exercise(
      "Etkinlik 3: İsim alan Python programı",
      "Kurgusal bir isim al ve “Merhaba” mesajında kullan. Çalıştırmadan önce çıktıyı yaz.",
      'isim = input("Adınız: ")\nprint("Merhaba", isim)\n\nÖrnek girdi: Deniz\nBeklenen mesaj: Merhaba Deniz',
      "Öğrenci kodu slayttaki çalışma alanında veya yerel dosyada deneyebilir. Hızlı bitirenlerden bölüm adını da yazdırmasını isteyin.",
    ),
    exercise(
      "Etkinlik 4: İlk web sayfan",
      "HTML başlığında kurgusal adını göster. CSS ile başlığı mavi yap. Düğmeye tıklanınca bir selamlama yazdır.",
      'HTML: <h1 id="baslik">Deniz</h1> ve bir button.\nCSS: h1 { color: blue; }\nJavaScript: Düğmenin click olayında başlığın textContent değerini "Merhaba Deniz" yap.\nCanlı demo slaytını kendi çözümünle düzenleyebilirsin.',
      "Yapı, görünüm ve davranışın hangi dosyada olduğunu her öğrenci söylesin. Mesajı kaynakta değiştirmek ile tarayıcıda geçici değiştirmek arasındaki farkı tartışın.",
    ),
    ai(
      "Etkinlik 5: 🤖 YZ ile Çalış",
      "Kendi algoritmam şu: … Kodu yazma. Bir adımım belirsizse bana soru sor. Sonra çözümümü deneyebileceğim bir sınır durumu öner.",
      "Önce kendi algoritmanı yaz. Gelen öneride neyi değiştirdiğini bir cümleyle açıkla.",
      "Öğrenciler “YZ böyle dedi” yerine kendi gerekçesini söylemeli. YZ erişimi olmayanlar “Girdin sıfır olursa ne olur?” hazır sorusunu kullanabilir. Herkes aynı düşünme sürecinden geçer.",
    ),
    s(
      "Mini quiz: Önce hangi adım?",
      "quiz",
      {
        question:
          "“İki sayıyı toplayan program yaz” isteği geldi. İlk işimiz hangisi?",
        options: [
          "Dil seçmeden kod üretmek",
          "Girdileri, beklenen sonucu ve kuralları netleştirmek",
          "Ekran rengini değiştirmek",
        ],
        answer: 1,
        explanation:
          "Önce problemi ve başarı ölçütünü netleştiririz. Sonra algoritma, kod ve test gelir.",
      },
      "Cevabı seçmeden önce bireysel düşünme süresi verin. Yanlış seçeneklerin neden yeterli olmadığı sorulsun.",
    ),
    s(
      "Hafta 1: Kazanım kontrolü",
      "outcomes",
      {
        lead: "5 dakikalık çıkış bileti: Bir örnek üzerinden göster.",
        items: [
          "Bir problemi girdi, işlem ve çıktı olarak anlat.",
          "Sözde kodu ve akış şemasını izleyip bir sonuç tahmin et.",
          "Bir Python örneğini çalıştır; HTML, CSS ve JavaScript rollerini söyle.",
          "YZ’nin önerisini hangi testle kontrol ettiğini açıkla.",
        ],
      },
      "İlk slayttaki kazanımları bu dört kanıtla eşleştirin. Eksik kalan kazanımı 2. hafta başındaki kısa geri çağırma etkinliğine taşıyın. Öğrencinin açıklayabildiği küçük ama doğru çözümü önemseyin.",
    ),
  ],
  2: [
    outcomes(2),
    think(
      "Programlar bilgiyi nerede tutar?",
      "Kullanıcı adını yazdıktan sonra program bu adı selamlamada yeniden kullanıyor. Arada bu bilgiye nasıl erişiyor?",
      "Çalışma sırasında değer bellekte tutulur. Değişken adı bu değere erişmemizi sağlar. Program bitince bu değişken otomatik olarak kalıcı dosyaya dönüşmez.",
      "Önceki haftanın isim örneğine dönün. RAM ile dosya depolamanın farklı olduğunu başlangıç düzeyinde açıklayın. Python değişkenlerinin değere referans olan adlar olduğunu söyleyin; kutu görseli öğretim modelidir.",
    ),
    s(
      "Değişken: Ad, değer ve tür",
      "memory",
      {
        items: [
          ["isim", '"Ayşe"', "str"],
          ["yas", "18", "int"],
          ["ortalama", "72.5", "float"],
          ["ogrenci_mi", "True", "bool"],
        ],
        prompt: "yas değerini 19 yaptığında hangi etiket ve tür aynı kalır?",
      },
      "Kutu benzetmesi ad-değer ilişkisini görselleştirir, gerçek bellek düzeni değildir. Python’da tür değerle ilişkilidir. Değişkenin adı üzerinden değere erişilir.",
    ),
    table(
      "Anlaşılır değişken isimleri",
      ["İsim", "Değerlendirme", "Gerekçe"],
      [
        ["kayit_sayisi", "Uygun", "Anlamlı, kelimeler alt çizgiyle ayrılmış."],
        ["2sayi", "Geçersiz", "Rakamla başlayamaz."],
        ["not", "Geçersiz", "Python anahtar sözcüğüdür."],
        ["notu", "Uygun", "Anahtar sözcükle çakışmaz."],
        ["yas / Yas", "Farklı adlar", "Büyük-küçük harf önemlidir."],
      ],
      "x yerine anlamı daha açık bir ad öner.",
      "Python Unicode adları destekler; bu derste taşınabilir ve tutarlı örnekler için küçük harf ve ASCII adlar seçiyoruz. Boşluk veya kısa çizgi değişken adında kullanılmaz.",
    ),
    code(
      "Atama bir anda gerçekleşir",
      "Python",
      "dakika = 5\nsaniye = dakika * 60\ndakika = 8\nprint(saniye)",
      "# Sonucun 300 mü 480 mi olacağını tahmin et.",
      "Sonuç 300. saniye ikinci satırda hesaplanır. dakika değişince önceki hesap kendiliğinden tekrar yapılmaz. Her satırdan sonra iki değişkenin değerini deftere yazdırın.",
    ),
    table(
      "Veri türü, değerin anlamını belirler",
      ["Tür", "Günlük örnek", "Python değeri"],
      [
        ["int", "Kayıt sayısı", "12"],
        ["float", "Ortalama not", "72.5"],
        ["str", "Kurgusal cihaz kodu", '"LAB-01"'],
        ["bool", "İşlem etkin mi?", "True / False"],
      ],
      "Bir telefon numarasını neden metin olarak saklamak isteyebiliriz?",
      "Telefon numarası üzerinde aritmetik yapmayız, başındaki sıfırlar ve + gibi işaretler anlamlıdır. Sayılara benzeyen her veri int değildir. Bu etkinlikte gerçek telefon numarası kullanmayın.",
    ),
    think(
      "int: Kaç kayıt var?",
      "Bir dosyada 12 kayıt, diğerinde 5 kayıt varsa toplamı hangi türde tutarız?",
      "17, bir int değeridir. Kayıt sayısı gibi ayrık miktarlarda tam sayı kullanırız.",
      "Öğrenciler kayıt sayısının eksi olup olamayacağını tartışsın. Dil negatif int değerine izin verir, ancak problem kuralı vermeyebilir. Tür uygunluğu ve iş kuralı farklıdır.",
    ),
    code(
      "float: Ortalama hesaplamak",
      "Python",
      "not1 = 70\nnot2 = 75\nortalama = (not1 + not2) / 2\nprint(ortalama)",
      "70 yerine 71 koy. Yeni ortalamayı tahmin et.",
      "İlk sonuç 72.5, ikinci sonuç 73.0. Python’da ondalık ayırıcı nokta kullanılır. float her ondalık sayıyı tam temsil edemez; para gibi bağlamlarda temsil seçimi daha sonra ayrıntılandırılır. Burada basit not hesabı var.",
    ),
    code(
      "str: Sayı gibi görünen metin",
      "Python",
      'print("5" + "3")\nprint(5 + 3)\nprint("5" * 3)',
      "53, 8 ve 555 sonuçlarını veri türüne bakarak açıkla.",
      "Metinlerde + birleştirir ve tamsayıyla * tekrar üretir. Sayısal işlemlerden farklıdır. input sorusuna 5 yazınca bu ayrım önemli olacak.",
    ),
    think(
      "bool: Bir koşul doğru mu?",
      "Dosyanın boyutu 900 KiB. Kabul sınırı 1024 KiB. boyut <= 1024 sonucu hangi türdür?",
      'True, bir bool değeridir. Karşılaştırmalar doğru/yanlış sonucu verir. True metin olan "True" ile aynı değer değildir.',
      "Boolean düşünme, kararın ifadesini ve olasılıklarını açıkça kurmaktır. Öğrenciden 1025 için aynı koşulun sonucunu söylemesini isteyin. Boyut kuralı bir güvenlik taraması değildir.",
    ),
    run(
      "Dört türü çalıştırarak görelim",
      "variables",
      "Her değerin yanındaki type() sonucu türü gösterir.",
      'yas değerini "18" yap. Tür ve ekranda görünen değer nasıl değişti?',
      "Başlangıçta programın tamamını çalıştırın. Sonra yalnızca yaş satırındaki tırnakları değiştirin. Değerin ekranda benzer görünmesi türlerin aynı olduğunu göstermez.",
    ),
    run(
      "Girdi ve çıktı: Programın sınırları",
      "io",
      "input dışarıdan veri alır. print sonucu görünür kılar.",
      "Kurgusal isim ve 18 yaşla dene. Sonra yaşı 20 yap.",
      "Bu örnekte yaş dönüşümü vardır. Öğrenci input sorularını sırayla yanıtlar. Terminal girdiyi ekranda yankılar; tarayıcı çıktısında otomatik giriş yankısı olmadığını açıklayın.",
    ),
    s(
      "Mini quiz: input hangi türü döndürür?",
      "quiz",
      {
        question: "Kullanıcı input() sorusuna 18 yazarsa sonuç nedir?",
        options: ["18 (int)", '"18" (str)', "18.0 (float)"],
        answer: 1,
        explanation:
          "input() metin döndürür. Sayı görünümündeki metin, dönüşüm yapılana kadar str türündedir.",
      },
      "Öğrenci neden int seçeneğinin otomatik olmadığını açıklasın. Bilgisayar kullanıcı girdisini kullanım amacına göre kendiliğinden sayıya dönüştürmez.",
    ),
    code(
      "Tip dönüşümü: Metni sayıya çevirmek",
      "Python",
      'yas_metni = input("Yaşınız: ")\nyas = int(yas_metni)\nprint("Gelecek yıl:", yas + 1)',
      '18 ile 19 sonucunu doğrula. "abc" girilirse hangi satır sorun yaşar?',
      'int("18") 18 sayısını üretir. int("abc") ValueError verir. int("18.5") de geçerli tamsayı metni değildir. Hata yönetimi 8. haftada; bugün girdinin biçimini düşünmemiz yeterli.',
    ),
    run(
      "Aritmetik bir problemin içinde",
      "arithmetic",
      "135 dakikayı saat ve dakika olarak nasıl gösteririz?",
      "dakika değerini 60 ve 59 yap. Bölüm ile kalan nasıl değişiyor?",
      "Önce 135 = 2×60 + 15 ilişkisini kurun. Sonra // ve % operatörlerini gösterin. +, -, *, / ve ** satırlarını aynı problemde küçük değişikliklerle açıklayın. Negatif sayılarda // aşağı yuvarlar; bu örnek pozitif süre kullanır.",
    ),
    code(
      "İşlem sırası sonucu değiştirir",
      "Python",
      "print(10 + 2 * 3)\nprint((10 + 2) * 3)\nprint(2 ** 3)",
      "Sonuçlar 16, 36 ve 8. Parantez neden fark oluşturdu?",
      "Önce çarpma, sonra toplama uygulanır. Parantez sırayı açık hale getirir. Karmaşık öncelik kurallarını ezberletmek yerine öğrencinin niyetini parantezle göstermesini önerin.",
    ),
    table(
      "Karşılaştırma: Hangi kuralı soruyoruz?",
      ["Problem sorusu", "İfade", "Örnek sonuç"],
      [
        ["Not en az 50 mi?", "notu >= 50", "50 için True"],
        ["Tam 50 mi?", "notu == 50", "49 için False"],
        ["50’den farklı mı?", "notu != 50", "49 için True"],
        ["Sınırı aştı mı?", "boyut > 1024", "1025 için True"],
        ["Yaş 18’in altında mı?", "yas < 18", "18 için False"],
        ["Boyut en fazla 1024 mü?", "boyut <= 1024", "1024 için True"],
      ],
      "Kuralın “en az” ve “en fazla” sözcüklerini uygun işaretle eşleştir.",
      "Karşılaştırmayı İngilizce operatör adı yerine problem cümlesiyle öğretin. Eşitlik sınırını yanlış yazmanın hatasız çalışan ama yanlış karar veren program ürettiğini vurgulayın.",
    ),
    exercise(
      "= ve == aynı işi yapmaz",
      "yas = 18 ile yas == 18 ifadelerini kendi cümlelerinle açıkla.",
      "yas = 18: 18 değerini yas adına atar.\nyas == 18: yas değerinin 18 olup olmadığını karşılaştırır ve bool üretir.",
      "Öğrenciler = işaretinin matematiksel eşitlik testi olmadığını açıklamalı. Koşulda atama kullanma hatasını ileride SyntaxError örneğinde gösterebilirsiniz.",
    ),
    table(
      "Mantıksal operatörler: Birden çok koşul",
      ["Durum", "İfade", "Anlam"],
      [
        [
          "Yetkili ve bakım yok",
          "yetkili and not bakim_var",
          "İki koşul da sağlanmalı.",
        ],
        [
          "Öğrenci veya personel",
          "ogrenci or personel",
          "En az biri doğru olmalı.",
        ],
        ["Bakım yok", "not bakim_var", "Koşulun tersini alır."],
      ],
      "Öğrenci de personel de True olursa or sonucu ne olur?",
      "or kapsayıcıdır, iki koşul da doğru olabilir. Başlangıçta operatörleri bool değerleriyle kullanıyoruz. Python and/or genel değerlerde operand döndürebilir; bunu bugün genişletmeyin.",
    ),
    s(
      "Boolean laboratuvarı",
      "boolean",
      {
        lead: "Yetki ve bakım durumunu değiştir. Kararı çalıştırmadan önce tahmin et.",
      },
      "Dört olası birleşimi deneyin. İzin yalnızca yetkili=True ve bakım=False iken verilir. Bu bir mantık modeli; gerçek erişim kontrolü veya güvenlik uygulaması değildir.",
    ),
    think(
      "🧠 Önce Sen Düşün: Yaşa göre karar",
      "Bir program kullanıcının 18 yaş ve üzerinde olup olmadığını yazacak. Girdi, işlem, çıktı ve sınır testin nedir?",
      "Girdi: yaş. İşlem: yas >= 18 karşılaştırması. Çıktı: 18 ve üzeri / 18 altı. Testler: 17, 18, 19. Negatif yaşın geçersiz sayılması ayrıca tanımlanır.",
      "Kod gösterilmeden önce öğrenciler koşulu kendi başına kursun. Bu eğitimsel eşiktir; hukukî yaş sınıflandırmasına ilişkin tavsiye değildir.",
    ),
    s(
      "Problem: Öğrenci geçti mi?",
      "flow",
      {
        items: [
          ["Girdi", "0–100 arası not"],
          ["Kural", "notu ≥ 50"],
          ["Çıktı", "Geçti / Kaldı"],
        ],
        prompt: "49, 50 ve 51 için beklenen sonuçları söyle.",
      },
      "50 eşiği bu ders örneğinin kuralıdır, üniversitenin resmî başarı notu değildir. Başlangıçta 0–100 arası tam sayı varsayılır. Geçersiz değerleri ayrıca ele alacağız.",
    ),
    code(
      "Karar algoritmasının pseudocode karşılığı",
      "Pseudocode",
      'BAŞLA\n  notu değerini OKU\n  EĞER notu >= 50 İSE\n    "Geçti" YAZ\n  DEĞİLSE\n    "Kaldı" YAZ\nBİTİR',
      "50 için hangi dal yürür? 49 için hangi dal yürür?",
      "Koşulun iki olasılığını ayrı okuyun. Tek çalıştırmada bu örnekte yalnızca bir dalın sonucu yazılır. Öğrenciler kararın nerede verildiğini işaretlesin.",
    ),
    s(
      "Karar, akış şemasında iki yol açar",
      "flowchart",
      {
        variant: "grade",
        prompt: "Karar elmasından çıkan Evet ve Hayır yollarını sırayla izle.",
      },
      "Başlangıç ve bitiş oval, girdi/çıktı paralelkenar, karar elmas biçimindedir. İki dal da bitişe bağlanır. Akış şemasını 49 ve 50 girdileriyle elle yürütün.",
    ),
    run(
      "Python ile karar veren ilk program",
      "pass",
      "Sözde koddaki EĞER if, DEĞİLSE else olur.",
      "Girdiyi 49, 50 ve 51 yap. Üç durumda da beklenen sonucu doğrula.",
      "İki nokta bir bloğun başlayacağını gösterir. Dört boşluk girinti aynı bloğu belirtir. not sözcüğü Python anahtar sözcüğü olduğundan notu adını kullanıyoruz. Satır açıklamalarını açın.",
    ),
    exercise(
      "Girinti neden önemli?",
      "if notu >= 50: satırından sonra print satırının girintisi kaldırılırsa ne olur?",
      'Python bir girintili blok bekler ve IndentationError verir.\n\nif notu >= 50:\n    print("Geçti")\nelse:\n    print("Kaldı")',
      "Hata ayıklamayı tek değişiklikle yapın. Önce hatayı üretin, mesajdaki satırı bulun ve girintiyi geri koyun. Tab ve boşlukları karıştırmadan editörün dört boşluk ayarını kullanın.",
    ),
    code(
      "Sözde Kod 1: Sayı tek mi çift mi?",
      "Pseudocode",
      'BAŞLA\n  sayi değerini OKU\n  EĞER sayi % 2 == 0 İSE\n    "Çift" YAZ\n  DEĞİLSE\n    "Tek" YAZ\nBİTİR',
      "8, 7, 0 ve -4 değerleri için hangi dalın çalışacağını izle.",
      "Temel iki dallı karar yapısı. Kalan (%) operatörünün mantığını ve 0 ile negatif çift sayıların durumunu tahtada veya defterde izletin.",
    ),
    code(
      "Sözde Kod 2: İki sayıyı karşılaştırma",
      "Pseudocode",
      'BAŞLA\n  sayi1 değerini OKU\n  sayi2 değerini OKU\n  EĞER sayi1 > sayi2 İSE\n    "Birinci sayı daha büyük" YAZ\n  DEĞİLSE EĞER sayi2 > sayi1 İSE\n    "İkinci sayı daha büyük" YAZ\n  DEĞİLSE\n    "İki sayı birbirine eşit" YAZ\nBİTİR',
      "sayi1 = 5 ve sayi2 = 5 iken hangi dal çalışır?",
      "Üç durumlu karar yapısı. Eşitlik olasılığını (==) atlamamak algoritmik düşünmenin temelidir. Karar tablosuyla üç durumu eşleştirin.",
    ),
    code(
      "Sözde Kod 3: Sınav notu geçerliliği ve başarı",
      "Pseudocode",
      'BAŞLA\n  notu değerini OKU\n  EĞER notu < 0 VEYA notu > 100 İSE\n    "Hata: Not 0 ile 100 arasında olmalıdır!" YAZ\n  DEĞİLSE\n    EĞER notu >= 50 İSE\n      "Geçti" YAZ\n    DEĞİLSE\n      "Kaldı" YAZ\nBİTİR',
      "-5, 49, 50 ve 120 değerleri için adımları takip et.",
      "Savunmacı programlama: Önce geçersiz girdiyi yakala, sonra kuralı işlet. VEYA mantıksal operatörünün sınır denetimindeki rolünü vurgulayın.",
    ),
    code(
      "Sözde Kod 4: Kurgusal parola güvenlik seviyesi",
      "Pseudocode",
      'BAŞLA\n  parola değerini OKU\n  uzunluk = UZUNLUK(parola)\n  EĞER uzunluk < 6 İSE\n    "Geçersiz: Parola en az 6 karakter olmalıdır." YAZ\n  DEĞİLSE EĞER uzunluk < 10 İSE\n    "Parola kabul edildi (Seviye: Orta)." YAZ\n  DEĞİLSE\n    "Parola kabul edildi (Seviye: Güçlü)." YAZ\nBİTİR',
      '"123", "abcde", "123456" ve "bgt2026comu" için sonuç ne olur?',
      "Bilgi Güvenliği Teknolojisi öğrencileri için algoritmik modelleme: Metin uzunluğunu sayısal kurala dönüştürme ve kademeli sınıflandırma.",
    ),
    run(
      "Örnek 1: Pozitif, sıfır veya negatif",
      "positive",
      "Üç durum olduğunda elif başka bir koşulu sınar.",
      "-1, 0 ve 1 girdilerini dene. Sıfır hangi sınıfta?",
      "else ile sıfırı negatif diye sınıflandırmak yaygın mantık hatasıdır. elif önceki if yanlış olduğunda değerlendirilir. İlk doğru dal çalıştıktan sonra kalan elif/else atlanır.",
    ),
    run(
      "Örnek 2: Sayı tek mi çift mi?",
      "even",
      "Bir tam sayının ikiye bölümünden kalan sıfırsa sayı çifttir.",
      "8, 9, 0 ve -2 için tahmin yap, sonra çalıştır.",
      "Önce algoritma cümlesini kurun: sayıyı al, kalanı bul, sıfırla karşılaştır, sonucu yaz. Sıfır ve negatif çift sayı örnekleri sınır düşünmesini destekler.",
    ),
    run(
      "Örnek 3: İki sayıdan hangisi büyük?",
      "larger",
      "Üç olasılık var: birinci büyük, ikinci büyük, eşit.",
      "5/3, 3/5 ve 5/5 ile üç dalı da çalıştır.",
      "Eşitlik durumunu atlayan algoritma eksiktir. Öğrenci önce üç satırlık karar tablosunu yazsın. Kodda b > a yerine a < b aynı anlamı verir.",
    ),
    run(
      "Örnek 4: Yaşa göre kategori",
      "age",
      "Küçükten büyüğe eşikler kullanarak ilk doğru dalı seçiyoruz.",
      "-1, 17, 18, 64 ve 65 için kategori tahmin et.",
      "Bu aralıklar eğitim örneğidir. Bir elif dalına gelindiyse önceki koşulların yanlış olduğunu biliyoruz. 18 koşulu ilk eşikten geçtiği için 18–64 dalına düşer.",
    ),
    run(
      "Örnek 5: Kullanıcı adı boş mu?",
      "username",
      "Sadece boşluk yazılmış bir ad da boş sayılmalı.",
      "Hiç metin yazmadan, üç boşlukla ve ogrenci1 ile dene.",
      "strip burada ilk kez kullanılıyor. Uçlardaki boşlukları kaldırır; metnin ortasındaki boşlukları kaldırmaz. Veri temizleme ile gerçek kullanıcı doğrulama aynı şey değildir.",
    ),
    run(
      "Örnek 6: Eğitimsel uzunluk kontrolü",
      "password",
      "Kuralımız: Kurgusal deneme metni en az 8 karakter olsun.",
      "7, 8 ve 9 karakterlik uydurma metinlerle test et.",
      "Bu yalnızca len ve karşılaştırma öğretir. Gerçek parola güvenliği ya da kimlik doğrulama sistemi değildir. Gerçek parolaları slayta, GitHub’a veya YZ aracına girmeyin. Parola saklama kültürü 12. haftada ele alınacak.",
    ),
    think(
      "Güvenilmeyen veri: Kullanıcı abc yazarsa?",
      'yas = int(input("Yaş: ")) satırına abc veya -5 verilirse iki durumda ne olur?',
      "abc: ValueError oluşur. -5: dönüşüm başarılı olur ama yaş kuralına uygun değildir. Tür dönüşümü, iş kuralına uygunluğu tek başına garanti etmez.",
      "Henüz exception sözdizimi öğretmeyin. Normal durumun dışında düşünmek ilk güvenli kod alışkanlığıdır. İlk durumda biçim, ikinci durumda aralık sorunu var.",
    ),
    table(
      "Sınır testleri hatayı görünür kılar",
      ["Not", "Beklenen", "Neden?"],
      [
        ["49", "Kaldı", "Eşiğin hemen altı"],
        ["50", "Geçti", "Eşiğin kendisi"],
        ["51", "Geçti", "Eşiğin hemen üstü"],
        [
          "-1 / 101",
          "Geçersiz girdi",
          "İlk Python sürümünde bu doğrulama eksik.",
        ],
      ],
      "notu > 50 yazarsan hangi test başarısız olur?",
      "Sınır 50 testinde hata yakalanır. -1 ve 101 girdilerini mevcut örnekte deneyin: yanlış biçimde Kaldı/Geçti verir. Bu bilinen sınırlılığı öğrenci fark edip ayrı doğrulama gereksinimi yazmalıdır.",
    ),
    code(
      "JavaScript değişkenleri",
      "JavaScript",
      'const isim = "Ayşe";\nlet yas = 18;\nconst ortalama = 72.5;\nconst ogrenciMi = true;\nyas = yas + 1;',
      "Python’daki True ile JavaScript’teki true yazımını karşılaştır.",
      "const değişken bağının yeniden atanmasını engeller; let yeniden atamaya izin verir. JavaScript’te bu örnekte int/float ayrımı yerine number türü kullanılır. Bu bir yan karşılaştırmadır; ana dil Python olarak kalır.",
    ),
    table(
      "Aynı karar, farklı dil",
      ["Kavram", "Python", "JavaScript"],
      [
        ["Değişken", "notu = 50", "let notu = 50;"],
        ["Karar", "if notu >= 50:", "if (notu >= 50) { … }"],
        ["Çıktı", 'print("Geçti")', 'sonuc.textContent = "Geçti";'],
        ["Mantık", "and / or / not", "&& / || / !"],
        ["Doğru değeri", "True", "true"],
      ],
      "Karar algoritmasının hangi kısmı iki dilde de aynı?",
      "Python örneğimiz yerel yorumlayıcıda veya Pyodide ile, JavaScript örneğimiz tarayıcıda çalışır. Python genel amaçlıdır; web sunucusunda da kullanılabilir. GitHub Pages bu projede bir Python backend çalıştırmaz.",
    ),
    s(
      "Canlı demo: JavaScript ile not kararı",
      "web",
      {
        demo: web.grade,
        lead: "Aynı eşik kuralını bu kez tarayıcıdaki bir girdi alanıyla uygula.",
      },
      "Önce 49 ve 50 deneyin. Sonra alanı boşaltıp 101 deneyin. Demo ek girdi kontrolleri içerir. HTML min/max tek başına iş kuralını uygulamaz; JS kontrolü de vardır. İstemci tarafı kontrol, gerçek sunucu güvenliği için yeterli değildir.",
    ),
    ai(
      "🤖 YZ ile Çalış: Hatayı sen bul",
      'Aşağıdaki Python kodundaki hatayı doğrudan düzeltme. Önce hatanın hangi satırda olabileceğini bulmam için ipucu ver.\n\nyas = input("Yaş: ")\nprint(yas + 1)',
      "18 girdiğinde ne beklediğini ve gerçekte ne olduğunu yaz. YZ ipucundan sonra düzeltmeyi kendin yap.",
      'str ile int toplamak TypeError üretir. Beklenen sayısal sonucu elde etmek için int dönüşümü gerekir. Bu örnek int("abc") ValueError örneğinden farklıdır. Öğrenci hata türlerini ezberlemek yerine nedeni anlatsın.',
    ),
    exercise(
      "Alıştırma 1: Sıfırın yeri",
      "Bir tam sayı için pozitif, negatif veya sıfır yazdıran sözde kodu yaz. Her dala bir test seç.",
      "EĞER sayi > 0: Pozitif\nDEĞİLSE EĞER sayi == 0: Sıfır\nDEĞİLSE: Negatif\nTestler: 1, 0, -1.",
      "Önce yalnızca algoritma üretin. Öğrenci isterse Python örneğine bakmadan koda çevirsin. Sıfırın bir önceki iki durumlu tasarımda neden kaybolduğunu tartışın.",
    ),
    exercise(
      "Alıştırma 2: Yeni başarı kuralı",
      "Kurgusal başarı eşiği 60 oldu. Python not programını uyarlayıp üç sınır testi yaz.",
      "Koşul: notu >= 60\nTestler: 59 → Kaldı, 60 → Geçti, 61 → Geçti.\nGirdi varsayımı hâlâ 0–100 arasında tam sayı.",
      "Gerçek başarı kuralı gibi sunmayın. Amaç mevcut kodun küçük bir gereksinim değişikliğine uyarlanmasıdır. Öğrenci 60 sınırını neden test ettiğini açıklasın.",
    ),
    exercise(
      "Alıştırma 3: İki koşullu kabul",
      "Sentetik bir dosya için boyut 0–1024 KiB aralığında olmalı. Koşulu and ile ifade et.",
      "boyut >= 0 and boyut <= 1024\nTestler: -1 False, 0 True, 1024 True, 1025 False.\nBu kural yalnızca boyutu kontrol eder.",
      "Zincir karşılaştırma Python’da mümkündür fakat bugün and ile iki koşulu açık görünür tutun. Gereksinimde en az/en fazla sözcüklerinin etkisini öğrenci açıklasın.",
    ),
    s(
      "Mini quiz 1: Değişkenler ve tür davranışı",
      "quiz",
      {
        question:
          'adet = "3" ve sayi = 2 iken sonuc = adet * sayi ifadesinin değeri ve türü ne olur?',
        options: [
          "6 (int)",
          '"33" (str)',
          '"6" (str)',
          "TypeError hatası verir",
        ],
        answer: 1,
        explanation:
          'Tırnak içindeki "3" bir metindir (str). Metin bir tamsayı ile çarpıldığında aritmetik çarpma yapılmaz, metin o sayıda yinelenir ("33").',
      },
      "Kolay seviye pekiştirme sorusu. Metin ve tamsayı tür ayrımını ve Python'da çarpma (*) operatörünün türe göre davranışını hatırlatın.",
    ),
    s(
      "Mini quiz 2: Sınır değeri ve operatörler",
      "quiz",
      {
        question:
          "notu = 50 iken EĞER notu > 50 İSE 'Geçti' DEĞİLSE 'Kaldı' algoritması hangi sonucu verir?",
        options: ["Geçti", "Kaldı", "İki mesajı da verir", "Hata verir"],
        answer: 1,
        explanation:
          "> büyüktür operatörü eşitlik durumunu kapsamaz. 50 > 50 yanlış (False) olduğundan DEĞİLSE dalı (Kaldı) çalışır. Eşitliği dahil etmek için >= gerekir.",
      },
      "Kolay seviye sınır testi sorusu. 50 değerinin kritik eşik olduğunu ve karşılaştırma operatörünün sınır davranışını vurgulayın.",
    ),
    s(
      "Mini quiz 3: Sözde kod izleme ve kalan operatörü",
      "quiz",
      {
        question:
          "BAŞLA; x = 10; y = 4; EĞER x % y == 2 İSE sonuc = x + y, DEĞİLSE sonuc = x - y; sonuc YAZ; BİTİR algoritmasında ekrana ne yazılır?",
        options: ["6", "14", "2", "10"],
        answer: 1,
        explanation:
          "10 % 4 (10'un 4'e bölümünden kalan) 2'dir. 2 == 2 koşulu doğru olduğundan EĞER dalı çalışır ve sonuc = 10 + 4 = 14 hesaplanır.",
      },
      "Orta seviye kuru çalıştırma sorusu. Adım adım değişken izleme ve mod (%) operatörünün doğru hesaplanmasını kontrol edin.",
    ),
    s(
      "Mini quiz 4: Mantıksal operatörler ve aralık denetimi",
      "quiz",
      {
        question:
          "Bir puanın 0 ile 100 arasında (sınırlar dahil) geçerli olduğunu doğrulamak için hangi koşul kurulmalıdır?",
        options: [
          "puan >= 0 VE puan <= 100",
          "puan >= 0 VEYA puan <= 100",
          "puan > 0 VE puan < 100",
          "puan == 0 VEYA puan == 100",
        ],
        answer: 0,
        explanation:
          "Bir değerin iki sınırın da içinde olması için her iki koşulun da aynı anda sağlanması gerekir; bu nedenle VE (and) kullanılır.",
      },
      "Orta-zor seviye mantık sorusu. VE ile VEYA arasındaki farkı ve savunmacı programlamada geçerli aralık yakalamayı tartışın.",
    ),
    s(
      "Mini quiz 5: Çok dallı akış ve kurgusal parola",
      "quiz",
      {
        question:
          'parola = "comu12" iken (uzunluk = 6); EĞER uzunluk < 6: "Yetersiz", DEĞİLSE EĞER uzunluk <= 8: "Orta", DEĞİLSE: "Güçlü" akışında çıktı ne olur?',
        options: ["Yetersiz", "Orta", "Güçlü", "Program hata verir"],
        answer: 1,
        explanation:
          '"comu12" 6 karakterdir. İlk koşul 6 < 6 yanlıştır. İkinci koşul 6 <= 8 doğru olduğu için "Orta" yazılır ve yapıdan çıkılır.',
      },
      "Zor seviye çoklu koşul sorusu. Çok dallı karar yapılarında ilk doğru dalın çalışıp sonrakilerin atlandığını ve eşitlik sınırını pekiştirin.",
    ),
    s(
      "Hafta 2: Kazanım kontrolü",
      "outcomes",
      {
        lead: "Kodu kapatıp önce anlat, sonra yeni girdiyle göster.",
        items: [
          "Bir değişkenin adını, değerini ve türünü göster.",
          "input sonucunu doğru türde kullanıp bir çıktı üret.",
          "Karar programının her dalını bir testle çalıştır.",
          "Bir sınır hatasını, beklenmeyen girdiyi ve YZ yardımını nasıl denetlediğini açıkla.",
        ],
      },
      "Dört kazanımı ayrı kanıtlarla değerlendirin. Bu biçimlendirici değerlendirme resmî not yüzdesi tanımlamaz. Sonraki hafta karar tabloları, iç içe koşullar ve girdi doğrulama derinleşecek.",
    ),
  ],
  3: [
    outcomes(3),
    think(
      "Kullanıcı her zaman beklediğimiz gibi mi davranır?",
      "Bir programa adını yazması istendiğinde yalnızca boşluk tuşuna basarsa veya yaş yerine 'on sekiz' yazarsa ne olur?",
      "Program çöker (ValueError) veya anlamsız veriyi işlemeye devam eder. Güvenli yazılımın 1 numaralı kuralı: 'Tüm harici girdiler aksi kanıtlanana kadar hatalı ve tehlikelidir.'",
      "Öğrencilere günlük hayatta karşılaştıkları web formu hatalarını hatırlatın. Güvenlik açıkları çoğunlukla eksik veya yanlış doğrulanan girdilerden kaynaklanır.",
    ),
    cards(
      "Girdi Doğrulama Hiyerarşisi (4 Adım)",
      [
        [
          "1. Varlık Kontrolü",
          "Girdi sağlandı mı yoksa tamamen boş veya boşluklardan mı ibaret? (strip)",
        ],
        [
          "2. Tür ve Biçim",
          "Beklenen sayısal veya metin yapısına uyuyor mu? (isdigit)",
        ],
        [
          "3. Değer ve Aralık",
          "Kabul edilebilir sınırlar içinde mi? (0 <= x <= 100 veya 1 <= port <= 65535)",
        ],
        [
          "4. İş Kuralı ve İzin",
          "Bu kullanıcının bu işlemi yapma yetkisi veya yeterli kotası var mı?",
        ],
      ],
      "Doğrulama sırası önemlidir: Olmayan verinin aralığına bakılamaz.",
      "Bu hiyerarşiyi tahtaya çizin. Adımların yerinin değiştirilmesinin (örneğin boş veriyi int'e dönüştürmeye çalışmanın) neden hata ürettiğini tartışın.",
    ),
    table(
      "Girdi doğrulama yöntemleri",
      ["Aşama", "Olası Tehlike", "Python Çözüm Aracı"],
      [
        ["Boşluklar", "Kullanıcı adı sadece boşluk", "veri.strip() == ''"],
        ["Harf/Sayı Karışımı", "Yaş yerine 'abc' girilmesi", "not metin.isdigit()"],
        ["Sınır Aşımı", "Notun -5 veya 150 girilmesi", "notu < 0 or notu > 100"],
        ["Geçersiz Tür", "Zararlı dosya uzantısı (.exe)", "uzanti not in izinli_liste"],
      ],
      "Neden her girdiyi önce metin olarak karşılayıp sonra doğrularız?",
      "input() her zaman metin üretir. Doğrulamadan int() fonksiyonuna göndermek programın kırılmasına yol açar.",
    ),
    code(
      "Sözde Kod 1: Boş girdi ve boşluk ayıklama",
      "Pseudocode",
      'BAŞLA\n  kullanici_adi değerini OKU\n  temiz_ad = BOŞLUKLARI_TEMİZLE(kullanici_adi)\n  EĞER temiz_ad == "" İSE\n    "Hata: Kullanıcı adı boş bırakılamaz!" YAZ\n  DEĞİLSE\n    "Kullanıcı adı kabul edildi: " + temiz_ad YAZ\nBİTİR',
      '"   " ve "ahmet" girdileri için hangi satırların çalıştığını izle.',
      "Metin uçlarındaki görünmez boşlukların temizlenmesi (strip) veritabanı ve oturum güvenliğinin ilk basamağıdır.",
    ),
    run(
      "Örnek 1: strip() ile boşluk temizleme ve varlık kontrolü",
      "empty",
      "Sadece boşluk tuşuna basıldığında programın bunu yakaladığını gör.",
      "Üç boşluk yazıp çalıştır, ardından geçerli bir ad girip tekrar dene.",
      "Öğrenciye veri tabanında 'ahmet' ile 'ahmet ' adlarının iki farklı hesap yaratabileceğini ve bunun bir kimlik karmaşası doğuracağını anlatın.",
    ),
    exercise(
      "Boşluk karakteri neden tehlikelidir?",
      "Bir kullanıcı parola alanına yalnızca 5 tane boşluk yazarsa ne olur? strip() parolalarda doğrudan kullanılmalı mıdır?",
      "Parolalarda strip() dikkatli kullanılmalıdır; çünkü kullanıcı bilerek boşluk içerebilir ancak yalnızca boşluklardan oluşan parolalar kabul edilmemelidir.\n\nparola = input('Parola: ')\nif parola.strip() == '':\n    print('Parola boşluktan ibaret olamaz')",
      "Veri türüne göre iş kuralı değişir. Kullanıcı adında boşluk temizlenirken, parola metninde boşluk karakterinin kasıtlı parola parçası olabileceğini tartışın.",
    ),
    code(
      "Tür dönüşümünden önce güvenli kontrol",
      "Python",
      'giris = input("Port girin: ").strip()\nif not giris.isdigit():\n    print("Hata: Yalnızca rakam girin!")\nelse:\n    port = int(giris)\n    print("Dönüşüm başarılı:", port)',
      "abc, 80 ve -5 değerleri için programın nasıl tepki verdiğini incele.",
      "isdigit() fonksiyonu string bir metottur ve sadece 0-9 arası rakamlar varsa True döner. Eksi işareti (-) rakam olmadığı için negatif sayıları da False yapar.",
    ),
    code(
      "Sözde Kod 2: Sayısal karakter denetimi",
      "Pseudocode",
      'BAŞLA\n  giris_metni değerini OKU\n  EĞER RAKAM_MI(giris_metni) DEĞİLSE İSE\n    "Geçersiz biçim: Sayısal değer bekleniyor" YAZ\n  DEĞİLSE\n    sayi = TAMSAYIYA_DÖNÜŞTÜR(giris_metni)\n    "İşlem yapılan sayı: " + sayi YAZ\nBİTİR',
      "Hatalı girdide programın çökmeden kullanıcıyı uyardığına dikkat et.",
      "Savunmacı programlama: Program asla beklenmedik bir kütüphane hatasıyla sonlanmamalı, anlaşılır bir uyarı vermelidir.",
    ),
    run(
      "Örnek 2: isdigit() ile güvenli tamsayı dönüşümü",
      "digit",
      "Kullanıcı metin veya sembol girdiğinde ValueError hatasını önler.",
      "8080 yerine 'web' veya '80a' yazarak hatanın nasıl yakalandığını gözlemle.",
      "Tip denetimi yapılmadan int() çalıştırılırsa terminalde Traceback hatası oluşur. isdigit() bu hatanın önüne bir güvenlik kalkanı koyar.",
    ),
    think(
      "isdigit() eksi sayıları tanır mı?",
      "'-10' girdisi için isdigit() True mu döner False mu? Neden?",
      "False döner. Çünkü '-' karakteri bir rakam değildir. Negatif sayıları kabul edeceksek eksi işaretini ayrı ele almalı veya aralık kuralı koymalıyız.",
      "Öğrencilere hazır fonksiyonların sınırlarını bilmenin önemini anlatın. isdigit() negatif int değerlerini desteklemez.",
    ),
    table(
      "str.isdigit() fonksiyonunun sınır davranışları",
      ["Girdi", "isdigit() Sonucu", "Açıklama / Neden"],
      [
        ['"123"', "True", "Tüm karakterler rakamdır."],
        ['"12.5"', "False", "Nokta (.) karakteri rakam değildir."],
        ['"-10"', "False", "Eksi (-) karakteri rakam değildir."],
        ['"  "', "False", "Boşluk karakteri rakam değildir."],
        ['""', "False", "Boş string rakam içermez."],
      ],
      "Ondalık (float) sayılar için isdigit() neden doğrudan kullanılamaz?",
      "Nokta sembolü rakam sayılmaz. Ondalık sayı denetimi daha sonra fonksiyonlar veya gelişmiş yöntemlerle ele alınacaktır.",
    ),
    cards(
      "Değer ve Aralık Doğrulama Örnekleri",
      [
        [
          "Ağ Portları (TCP/UDP)",
          "1 ile 65535 arasında olmalıdır. 0 rezerve, 65536 geçersizdir.",
        ],
        [
          "Sınav Puanı",
          "0 ile 100 arasında olmalıdır. Negatif veya 100 üzeri reddedilir.",
        ],
        [
          "Dosya Yükleme Boyutu",
          "1 KiB ile 1024 KiB arasında olmalıdır. 0 KiB boş dosya reddedilir.",
        ],
        [
          "Kullanıcı Yaşı",
          "0 ile 120 arasında mantıklı bir insan ömrü olmalıdır.",
        ],
      ],
      "Doğrulama sadece biçim değil, mantıksal değer sınırıdır.",
      "Her sistemin kendi sınırları vardır. Bir portun geçerli olması açık veya güvenli olduğu anlamına gelmez, sadece teknik olarak geçerlidir.",
    ),
    code(
      "Sözde Kod 3: Ağ portu geçerlilik aralığı",
      "Pseudocode",
      'BAŞLA\n  port_no değerini OKU\n  EĞER port_no < 1 VEYA port_no > 65535 İSE\n    "Hata: Port 1 ile 65535 arasında olmalıdır!" YAZ\n  DEĞİLSE\n    "Port geçerli ve dinlemeye uygun: " + port_no YAZ\nBİTİR',
      "0, 80, 443 ve 70000 değerleri için akışı elle yürüt.",
      "Sınır testleri: 0 (hemen altı), 1 (alt sınır), 65535 (üst sınır), 65536 (hemen üstü).",
    ),
    run(
      "Örnek 3: Port aralık denetimi (1–65535)",
      "range",
      "or mantıksal operatörüyle kabul sınırlarının dışına çıkma durumu sınanır.",
      "0, 443 ve 70000 değerleriyle programın sınır davranışlarını test et.",
      "Aralık kontrolünde < ve > operatörlerinin doğru seçildiğinden emin olun. 1 ve 65535 geçerli portlardır.",
    ),
    table(
      "Aralık doğrulama sınır testleri matrisi",
      ["Girdi Değeri", "Test Durumu", "Beklenen Çıktı", "Gerekçe"],
      [
        ["0", "Alt Sınırın 1 Altı", "Hata", "Port 1'den küçük olamaz."],
        ["1", "Alt Sınır Noktası", "Geçerli", "En küçük geçerli port."],
        ["65535", "Üst Sınır Noktası", "Geçerli", "En büyük 16-bit port."],
        ["65536", "Üst Sınırın 1 Üstü", "Hata", "16-bit sınırını aşar."],
      ],
      "Sınır testleri neden daima eşiğin kendisini ve 1 eksiği/fazlasını hedefler?",
      "Programcıların en sık yaptığı mantık hatası eşitsizliklerde < yerine <= veya tam tersini kullanmasıdır (off-by-one error).",
    ),
    ai(
      "🤖 YZ ile Çalış: Sınır değer açığı avı",
      "Aşağıdaki kodda sınır değer hatası var mı?\n\nport = int(input())\nif port > 1 and port < 65535:\n    print('Geçerli')",
      "1 ve 65535 portlarının bu koda göre geçerli sayılıp sayılmadığını YZ'ye sor ve doğru operatörleri açıkla.",
      "> ve < operatörleri 1 ve 65535 uç noktalarını dışarıda bırakır. >= ve <= gereklidir. Öğrenciden YZ'nin analizini açıklamasını isteyin.",
    ),
    cards(
      "İç İçe Koşullar (Nested If) ve 'Piramit Laneti'",
      [
        [
          "Okunabilirlik Düşüşü",
          "Her yeni if bloğu 4 boşluk daha içeri girer, kod sağa doğru kayar.",
        ],
        [
          "Bilişsel Yük",
          "Geliştirici aynı anda 4-5 farklı koşulun doğru olduğunu aklında tutmak zorunda kalır.",
        ],
        [
          "Hata ve Atlanmış Durumlar",
          "En içteki else dalının hangi if bloğuna ait olduğunu anlamak güçleşir.",
        ],
        [
          "Sadeleştirme İhtiyacı",
          "Kodun derinleşmesi refactoring (yeniden düzenleme) ihtiyacını gösterir.",
        ],
      ],
      "Çok derinleşen kod kokar (code smell). Sadeleştirmek bir güvenlik erdemidir.",
      "Okunabilir kod daha güvenli koddur. Karmaşık iç içe yapılar mantık hatalarının en bereketli yuvasıdır.",
    ),
    code(
      "Piramit Kod Örneği (Kaçınılması Gereken Tasarım)",
      "Python",
      'if yas >= 18:\n    if bilet_var:\n        if kimlik_onayli:\n            if covid_yok:\n                print("Giriş serbest")\n            else:\n                print("Sağlık engeli")\n        else:\n            print("Kimliksiz girilemez")',
      "Bu kod 4 basamak içeri girdi. Hangi koşulun başarısız olduğunu takip etmek ne kadar zor?",
      "Arrow Anti-Pattern (Ok biçimli kod). Bu tür yapıları Guard Clause veya mantıksal operatörlerle düzleştireceğiz.",
    ),
    cards(
      "Guard Clause (Erken Çıkış) Yaklaşımı",
      [
        [
          "1. Hatalı Durumu Öne Al",
          "Geçersiz, hatalı veya yetkisiz şartı en başta yakala.",
        ],
        [
          "2. Hemen Reddet / Çık",
          "Olumsuz durumda derhal hata verip devam etme.",
        ],
        [
          "3. Düz Akış Sağla",
          "Başarılı senaryo içeri gömülmek yerine en altta düz bir çizgide aksın.",
        ],
      ],
      "Olumsuzlukları kapıda ayıkla; içeriye sadece temiz veriyi al.",
      "Güvenlik kapısında kontrol: Bileti olmayan kapıda elenir, içeri alınıp diğer kontrollerle yorulmaz.",
    ),
    code(
      "Sözde Kod 4: Guard Clause ile erken çıkış",
      "Pseudocode",
      'BAŞLA\n  yas değerini OKU\n  bilet değerini OKU\n  \n  EĞER yas < 18 İSE\n    "Red: Yaş sınırı" YAZ\n  DEĞİLSE EĞER bilet != "e" İSE\n    "Red: Bilet eksik" YAZ\n  DEĞİLSE\n    "Onay: Etkinliğe hoş geldiniz" YAZ\nBİTİR',
      "İç içe gömülme yerine düz bir elif zinciriyle koşulların elendiğine dikkat et.",
      "Her adım bir güvenlik filtresidir. İlk elenen durumdan sonra sonraki satırlar çalıştırılmaz.",
    ),
    run(
      "Örnek 4: Derin if yerine Guard Clause",
      "guard",
      "Hatalı koşullar sırayla elenir, en sona temiz durum kalır.",
      "Önce yaş 16 yaz, sonra yaş 20 ve bilet h yaz. Farklı erken çıkışları gözlemle.",
      "Kodun derinleşmesini önleyen bu pratik, yazılım sektöründe en çok tercih edilen temiz kod prensiplerindendir.",
    ),
    exercise(
      "İç içe yapıyı Guard Clause'a dönüştür",
      "Şu kodu erken çıkış mantığıyla yeniden yaz:\n\nif rol == 'admin':\n    if sifre_dogru:\n        print('Sistem açık')\n    else:\n        print('Hatalı şifre')\nelse:\n    print('Yetkisiz rol')",
      "if rol != 'admin':\n    print('Yetkisiz rol')\nelif not sifre_dogru:\n    print('Hatalı şifre')\nelse:\n    print('Sistem açık')",
      "Öğrencilerin olumsuz koşulları tersine çevirme (de Morgan / mantıksal tersi) becerisini sınayın.",
    ),
    table(
      "İç içe koşulları sadeleştirme karşılaştırması",
      ["Tasarım Türü", "Okunabilirlik", "Yeni Kural Ekleme", "Hata Riski"],
      [
        ["Derin İç İçe (Nested)", "Düşük (Piramit)", "Zor (Dalları bozar)", "Yüksek"],
        ["Guard Clause", "Yüksek (Düz akış)", "Kolay (Yeni elif)", "Düşük"],
        ["Mantıksal and Birleşimi", "Tek satır (Orta)", "Kısmen kolay", "Orta"],
      ],
      "Neden tek satırda 5 tane 'and' yazmak yerine Guard Clause tercih edilir?",
      "Tek satırda çok fazla and kullanıldığında hangi koşulun başarısız olduğunu kullanıcıya açıklamak imkânsızlaşır.",
    ),
    think(
      "and ile birleştirmek her zaman doğru mudur?",
      "if yas >= 18 and bilet_var == 'e' and kimlik == 'e': satırı başarısız olursa kullanıcıya tam olarak hangi sebepten reddedildiğini söyleyebilir miyiz?",
      "Hayır. Sadece 'Giremezsiniz' diyebiliriz. Kullanıcı yaş yüzünden mi, bilet yüzünden mi yoksa kimlik yüzünden mi reddedildiğini bilemez. Guard Clause her hataya özel mesaj verir.",
      "Kullanıcı deneyimi ve hata ayıklama (debug) açısından detaylı hata mesajının önemini vurgulayın.",
    ),
    cards(
      "Beyaz Liste (Whitelist) vs Kara Liste (Blacklist)",
      [
        [
          "Kara Liste (Blacklist)",
          "Yasaklı olanları sıralar (.exe, .bat yasak). Tehlike: Yeni veya bilinmeyen uzantılar (.sh, .vbs) aradan sızabilir.",
        ],
        [
          "Beyaz Liste (Whitelist)",
          "Yalnızca açıkça izin verilenleri sıralar (.txt, .pdf izinli). İlke: 'İzin verilmemiş her şey yasaktır.'",
        ],
        [
          "Güvenlik Karşılaştırması",
          "Siber güvenlikte daima Beyaz Liste yaklaşımı tercih edilir.",
        ],
        [
          "Python Uygulaması",
          "if uzanti in izinliler: veya if uzanti not in izinliler:",
        ],
      ],
      "Varsayılan olarak red (Default Deny) temel güvenlik prensibidir.",
      "Güvenlik dersi bağlantısı: Bir güvenlik duvarı da kuralı olmayan tüm paketleri varsayılan olarak düşürür (DROP).",
    ),
    code(
      "Sözde Kod 5: Dosya politikası doğrulama",
      "Pseudocode",
      'BAŞLA\n  uzanti değerini OKU\n  boyut değerini OKU\n  \n  EĞER uzanti BEYAZ_LİSTEDE_YOK İSE\n    "Red: Güvenli olmayan dosya türü" YAZ\n  DEĞİLSE EĞER boyut <= 0 İSE\n    "Red: Geçersiz dosya boyutu" YAZ\n  DEĞİLSE EĞER boyut > 1024 İSE\n    "Red: Kota aşımı (Maksimum 1024 KiB)" YAZ\n  DEĞİLSE\n    "Kabul: Dosya yükleme başarılı" YAZ\nBİTİR',
      ".exe ve 500 KiB için hangi dal çalışır? .pdf ve 2000 KiB için hangi dal çalışır?",
      "Çok kriterli dosya yükleme doğrulaması. Önce uzantı güvenliği, sonra boyut aralığı denetlenir.",
    ),
    run(
      "Örnek 5: Sentetik dosya boyutu ve uzantı politikası",
      "policy",
      "not in operatörüyle beyaz liste dışındaki tüm uzantılar tek seferde elenir.",
      "'.pdf' ve 500 gir, ardından '.exe' ve 500 gir. Reddedilme gerekçesini incele.",
      "Güvenlik kuralı: Dosya uzantısını küçük harfe (.lower()) dönüştürerek doğrulamak büyük-küçük harf hilelerini engeller.",
    ),
    table(
      "Dosya politikası test senaryoları",
      ["Uzantı", "Boyut (KiB)", "Beklenen Sonuç", "Gerekçe"],
      [
        [".txt", "500", "Kabul", "İzinli uzantı ve kota içinde."],
        [".exe", "100", "Red: Desteklenmeyen tür", "Kara listedeki tehlikeli uzantı."],
        [".pdf", "0", "Red: Sıfır veya negatif", "Boş dosya kabul edilmez."],
        [".pdf", "1024", "Kabul", "Tam sınır değeri (1024 KiB)."],
        [".pdf", "1025", "Red: Kota aşımı", "Sınırın 1 KiB üstü."],
      ],
      "1024 KiB sınırında kabul verilirken 1025'te neden red verilir?",
      "İş kuralı 'en fazla 1024 KiB' dediğinde <= 1024 kabul, > 1024 red olmalıdır.",
    ),
    exercise(
      "Büyük harfli dosya uzantısı (.PDF)",
      "Kullanıcı '.PDF' yüklediğinde 'if uzanti not in [\".pdf\"]:' kontrolü ne sonuç verir? Çözüm nedir?",
      "Büyük-küçük harf duyarlılığı yüzünden '.PDF' listede bulunamaz ve reddedilir. Çözüm: uzanti = input().strip().lower() kullanmaktır.",
      "Saldırganların filtreleri aşmak için .pDf, .Exe gibi harf varyasyonları denediğini belirtin.",
    ),
    cards(
      "Karar Tabloları (Decision Tables) Nedir?",
      [
        [
          "Kural Matrisi",
          "Birden fazla koşulun ve bunlara karşılık gelen eylemlerin tablo halinde dökümüdür.",
        ],
        [
          "2 üzeri n Kuralı",
          "n adet bağımsız Evet/Hayır koşulu varsa toplam 2^n farklı durum kombinasyonu ortaya çıkar.",
        ],
        [
          "Eksik Durum Analizi",
          "Kod yazarken gözden kaçabilecek unutulmuş durumları erkenden yakalar.",
        ],
        [
          "Çelişki Denetimi",
          "Aynı girdi kombinasyonuna iki farklı kuralın uygulanmasını önler.",
        ],
      ],
      "Kod yazmadan önce tüm olasılıkları bir matriste görmek mantık hatalarını sıfırlar.",
      "Yazılım mühendisliğinde karar tabloları karmaşık iş kurallarını netleştirmek için standart bir araçtır.",
    ),
    table(
      "Karar Tablosu 1: Kullanıcı Rolü ve İşlem İzni",
      ["Kural No", "Kullanıcı Rolü", "İşlem Türü", "Sistem Kararı"],
      [
        ["K1", "Admin", "Herhangi biri (oku/yaz/sil)", "İzin Verildi (Tam Yetki)"],
        ["K2", "Öğretmen", "oku veya yaz", "İzin Verildi"],
        ["K3", "Öğretmen", "sil", "Red: Silme yetkisi yok"],
        ["K4", "Öğrenci", "oku", "İzin Verildi (Salt Okunur)"],
        ["K5", "Öğrenci", "yaz veya sil", "Red: Yazma/Silme yetkisi yok"],
        ["K6", "Diğer", "Herhangi biri", "Hata: Geçersiz rol"],
      ],
      "Bu tabloda hangi rol yalnızca okuma yapabilir?",
      "Öğrenci rolü sadece okuma yetkisine sahiptir. Tablo, rol ve eylem eşleşmesini eksiksiz tanımlar.",
    ),
    code(
      "Sözde Kod 6: Karar tablosundan koda geçiş",
      "Pseudocode",
      'BAŞLA\n  rol değerini OKU\n  islem değerini OKU\n  \n  EĞER rol == "admin" İSE\n    "Tam yetki verildi" YAZ\n  DEĞİLSE EĞER rol == "ogretmen" İSE\n    EĞER islem == "oku" VEYA islem == "yaz" İSE\n      "İşleme izin verildi" YAZ\n    DEĞİLSE\n      "Red: Öğretmen bu işlemi yapamaz" YAZ\n  DEĞİLSE EĞER rol == "ogrenci" İSE\n    EĞER islem == "oku" İSE\n      "Okuma izni verildi" YAZ\n    DEĞİLSE\n      "Red: Öğrenci yalnızca okuyabilir" YAZ\n  DEĞİLSE\n    "Hata: Tanımsız rol" YAZ\nBİTİR',
      "Tablodaki her satırın koddaki bir dala nasıl karşılık geldiğini incele.",
      "Tablodan algoritmaya ve koda geçiş mekanik ve hatasız bir şekilde yürütülür.",
    ),
    run(
      "Örnek 6: Rol ve işlem karar tablosu",
      "auth",
      "Admin, öğretmen ve öğrenci rolleriyle işlem izinlerini test et.",
      "'ogrenci' ve 'sil' girip çıktıyı gözlemle; ardından 'admin' ve 'sil' dene.",
      "Yetkilendirme kontrollerinde varsayılan olarak yetki vermemek, sadece tanımlı rollere izin vermek esastır.",
    ),
    table(
      "Karar Tablosu 2: Güvenlik Duvarı Paket Filtresi",
      ["Kural", "Kaynak IP Türü", "Hedef Port", "Güvenlik Kararı", "Açıklama"],
      [
        ["K1", "Yerel (192.168.x / 10.x)", "80 veya 443", "İZİN VERİLDİ", "Yerel web trafiği güvenli."],
        ["K2", "Yerel (192.168.x / 10.x)", "Diğer portlar", "ENGEL", "Yerel yetkisiz port erişimi."],
        ["K3", "Harici (Dış Dünya)", "Herhangi biri", "ENGEL", "Bilinmeyen dış IP trafiği."],
      ],
      "Bu filtreye göre dış dünyadan gelen bir 443 port isteği geçer mi?",
      "Hayır. İlk koşul olan 'Yerel IP' sağlanmadığı için K3 kuralına düşer ve engellenir.",
    ),
    code(
      "Sözde Kod 7: Güvenlik duvarı paket filtresi",
      "Pseudocode",
      'BAŞLA\n  ip değerini OKU\n  port değerini OKU\n  \n  yerel_mi = IP_YEREL_MI(ip)\n  web_portu_mu = (port == 80 VEYA port == 443)\n  \n  EĞER yerel_mi VE web_portu_mu İSE\n    "İZİN: Güvenli yerel web trafiği" YAZ\n  DEĞİLSE EĞER yerel_mi VE DEĞİL web_portu_mu İSE\n    "ENGEL: Yetkisiz yerel port" YAZ\n  DEĞİLSE\n    "ENGEL: Bilinmeyen harici kaynak" YAZ\nBİTİR',
      "Değişkenleri Boolean bayrak (flag) olarak tanımlamanın okunabilirliğe etkisine dikkat et.",
      "yerel_mi ve web_portu_mu değişkenleri karmaşık koşulları sade Boolean etiketlere dönüştürür.",
    ),
    run(
      "Örnek 7: Kurgusal güvenlik duvarı kuralı",
      "firewall",
      "IP öneki ve port numarası kombinasyonuyla ağ trafiği denetlenir.",
      "'192.168.1.50' ve '443' ile izin al; '8.8.8.8' ve '80' ile engeli test et.",
      "Ağ güvenlik duvarlarının temel çalışma mantığı bu tür kural tablolarını yukarıdan aşağıya taramaktır.",
    ),
    think(
      "Ağ trafiğinde ilk eşleşen kural ilkesi",
      "Güvenlik duvarı kural listesinde en üstte 'Tüm trafiği engelle' kuralı olsaydı altındaki kurallar çalışır mıydı?",
      "Hayır. İlk eşleşen kural çalıştığı için alttaki kurallara asla sıra gelmezdi. Karar yapılarında kural sıralaması hayatidir.",
      "if/elif bloklarında da ilk True olan dal çalışır, altındakiler atlanır. Bu paralelliği öğrencilere kavratın.",
    ),
    cards(
      "Brute-Force Saldırıları ve Hesap Kilitleme",
      [
        [
          "Saldırı Yöntemi",
          "Otomatik programlarla binlerce parola ardı ardına denenir.",
        ],
        [
          "Sayaç Mantığı",
          "Her hatalı girişte başarısız deneme sayacı 1 artırılır.",
        ],
        [
          "Eşik Kontrolü",
          "Belirli bir limite (örn. 3 veya 5 hatalı deneme) ulaşıldığında hesap kilitlenir.",
        ],
        [
          "Güvenlik İlkesi",
          "Kullanıcıya 'kalan hakkı' gösterilerek meşru kullanıcının uyarılması sağlanır.",
        ],
      ],
      "Sınırsız deneme hakkı tanımak en zayıf parolayı bile kırılabilir kılar.",
      "Web ve sistem güvenliğinde 'Rate Limiting' ve 'Account Lockout' politikalarının temelidir.",
    ),
    code(
      "Sözde Kod 8: Hatalı deneme sayacı ve kilitleme",
      "Pseudocode",
      'BAŞLA\n  hatali_sayac değerini OKU\n  girilen_parola değerini OKU\n  \n  EĞER hatali_sayac >= 3 İSE\n    "HESAP KİLİTLENDİ: Sistem yöneticisine başvurun" YAZ\n  DEĞİLSE EĞER girilen_parola == "Guvenli123" İSE\n    "Giriş başarılı: Oturum açıldı" YAZ\n  DEĞİLSE\n    kalan_hak = 3 - (hatali_sayac + 1)\n    "Hatalı parola! Kalan hakkınız: " + kalan_hak YAZ\nBİTİR',
      "Sayaç 3 olduğunda doğru parola girilse bile neden içeri alınmadığını incele.",
      "Güvenlik politikası: Hesap kilitlendikten sonra doğru parola gelse bile yetkili müdahalesi veya süre dolumu gerekir.",
    ),
    run(
      "Örnek 8: Hesap kilitleme kurgusu",
      "lockout",
      "Hatalı deneme eşiği aşıldığında oturum kilitlenir.",
      "Sayaç 0 ve doğru parola yaz; ardından sayaç 3 yapıp doğru parolayla dene.",
      "Erken kilitleme kontrolü (guard clause) parolanın doğrulanmasından önce işletilir.",
    ),
    cards(
      "Çok Faktörlü Doğrulama (2FA / MFA)",
      [
        [
          "1. Faktör: Bildiğin Bir Şey",
          "Kullanıcı parolası veya PIN kodu.",
        ],
        [
          "2. Faktör: Sahip Olduğun Bir Şey",
          "SMS onay kodu, Authenticator uygulaması veya donanım anahtarı.",
        ],
        [
          "Mantıksal 'and' Koşulu",
          "Sisteme girmek için HER İKİ faktörün de aynı anda doğrulanması şarttır.",
        ],
      ],
      "Parolanın çalınması durumunda 2. faktör hesabı korur.",
      "Bilgi güvenliğinin temel kimlik doğrulama modellerinden biri.",
    ),
    code(
      "Sözde Kod 9: İki adımlı doğrulama akışı",
      "Pseudocode",
      'BAŞLA\n  parola değerini OKU\n  kod değerini OKU\n  \n  parola_dogru_mu = (parola == "Bgt2026")\n  kod_dogru_mu = (kod == "456789")\n  \n  EĞER parola_dogru_mu VE kod_dogru_mu İSE\n    "Giriş onaylandı: Güvenli oturum açıldı" YAZ\n  DEĞİLSE EĞER DEĞİL parola_dogru_mu İSE\n    "Red: Parola yanlış" YAZ\n  DEĞİLSE\n    "Red: Doğrulama kodu hatalı" YAZ\nBİTİR',
      "İki durumun da aynı anda True olması zorunluluğunu izle.",
      "Hangi bilginin hatalı olduğunu kullanıcıya bildirme stratejisi.",
    ),
    run(
      "Örnek 9: İki adımlı doğrulama (2FA) kontrolü",
      "twofactor",
      "Parola ve 6 haneli kod birlikte doğrulanır.",
      "Parolayı doğru, kodu yanlış girip reddi test et; sonra ikisini de doğru gir.",
      "İki koşullu doğrulama akışında and operatörünün birleştirici gücü.",
    ),
    code(
      "Sözde Kod 10: Kullanıcı kotası ve indirme kontrolü",
      "Pseudocode",
      'BAŞLA\n  kullanici_tipi değerini OKU\n  istenen_mb değerini OKU\n  \n  EĞER kullanici_tipi == "premium" İSE\n    kota = 5000\n  DEĞİLSE\n    kota = 500\n    \n  EĞER istenen_mb <= 0 İSE\n    "Hata: Geçersiz veri miktarı" YAZ\n  DEĞİLSE EĞER istenen_mb > kota İSE\n    "Kota aşıldı! İndirme reddedildi" YAZ\n  DEĞİLSE\n    kalan = kota - istenen_mb\n    "İndirme başladı. Kalan kota: " + kalan YAZ\nBİTİR',
      "Kullanıcı türüne göre sınırın belirlenip ardından işlem büyüklüğünün denetlenmesi.",
      "Ağ ve bulut sistemlerinde kota yönetimi.",
    ),
    run(
      "Örnek 10: Kota hesaplama ve yetki kontrolü",
      "quota",
      "Standart kullanıcı (500 MB) ve Premium kullanıcı (5000 MB) limitleri sınanır.",
      "'standart' ve 600 gir (reddedilmeli); ardından 'premium' ve 600 gir (onaylanmalı).",
      "Sınır ve kota mantığının değişkenlerle nasıl dinamikleştirildiğini gösterin.",
    ),
    ai(
      "🤖 YZ ile Çalış: Derin iç içe yapıyı sadeleştir",
      "YZ aracına şu istemi ver:\n\n'Aşağıdaki 4 seviyeli iç içe if-else kodunu Guard Clause (erken çıkış) prensibiyle yeniden yaz ve kodun neden daha okunabilir olduğunu açıkla.'",
      "Kendi kodunu YZ'ye sadeleştirt, önerilen erken çıkış mantığını defterine çiz.",
      "YZ destekli kod iyileştirme (refactoring) pratiği. Direksiyonda öğrenci var, YZ tasarım önerisi sunuyor.",
    ),
    s(
      "Mini quiz 1: Doğrulama sırası",
      "quiz",
      {
        question:
          "Kullanıcıdan alınan bir port numarası için en güvenli doğrulama sırası hangisidir?",
        options: [
          "1. int() dönüşümü → 2. strip() → 3. isdigit()",
          "1. strip() boşluk temizleme → 2. isdigit() sayısal kontrol → 3. int() ve aralık kontrolü",
          "1. 1 <= port <= 65535 kontrolü → 2. isdigit()",
          "Doğrulama sırasının program çalışmasına hiçbir etkisi yoktur",
        ],
        answer: 1,
        explanation:
          "Önce metin boşluklardan temizlenmeli, ardından harf içermediği isdigit() ile sınanmalı, en son güvenle int'e dönüştürülüp sayısal aralık denetlenmelidir.",
      },
      "Kolay seviye doğrulama hiyerarşisi sorusu.",
    ),
    s(
      "Mini quiz 2: Karar tablosunda durum kombinasyonu",
      "quiz",
      {
        question:
          "Bir güvenlik kuralında 3 adet bağımsız Evet/Hayır (True/False) koşulu varsa karar tablosunda kaç farklı durum satırı oluşur?",
        options: ["3", "6", "8", "9"],
        answer: 2,
        explanation:
          "n adet ikili koşul için durum sayısı 2^n formülüyle hesaplanır. 2^3 = 8 farklı durum kombinasyonu vardır.",
      },
      "Kolay-orta seviye karar tablosu matematik sorusu.",
    ),
    s(
      "Mini quiz 3: Guard clause mantığı",
      "quiz",
      {
        question:
          "Guard Clause (Erken Çıkış) yaklaşımının temel amacı nedir?",
        options: [
          "Daha fazla iç içe girinti oluşturarak kodu karmaşıklaştırmak",
          "Hatalı veya geçersiz durumları en başta ayıklayıp ana akışı düz ve okunabilir kılmak",
          "Programda hiçbir zaman if kullanmamak",
          "Değişkenlerin türünü otomatik değiştirmek",
        ],
        answer: 1,
        explanation:
          "Guard Clause hatalı durumları kapıda eler. Böylece kod sağa doğru piramit şeklinde derinleşmez, düz ve okunabilir kalır.",
      },
      "Orta seviye temiz kod prensibi sorusu.",
    ),
    s(
      "Mini quiz 4: Port aralığı mantıksal ifadesi",
      "quiz",
      {
        question:
          "Bir port değişkeninin 1 ile 65535 sınırlarının DIŞINDA (geçersiz) olduğunu yakalayan doğru koşul hangisidir?",
        options: [
          "port < 1 or port > 65535",
          "port < 1 and port > 65535",
          "port >= 1 or port <= 65535",
          "port == 1 and port == 65535",
        ],
        answer: 0,
        explanation:
          "Bir sayı aynı anda hem 1'den küçük hem de 65535'ten büyük olamaz (and kullanılamaz). Dışarıda kalma durumu or ile yakalanır.",
      },
      "Orta-zor seviye mantıksal operatör sorusu.",
    ),
    s(
      "Mini quiz 5: Çok kriterli güvenlik duvarı kuralı",
      "quiz",
      {
        question:
          "K1: Yerel IP ve Web Portu → İZİN; K2: Yerel IP ve Diğer Port → ENGEL; K3: Harici IP → ENGEL. IP='8.8.8.8' ve Port=80 için hangi kural çalışır ve sonuç ne olur?",
        options: [
          "K1 kuralı çalışır ve İzin verilir",
          "K2 kuralı çalışır ve Engellenir",
          "K3 kuralı çalışır ve Engellenir (Bilinmeyen harici kaynak)",
          "Kuralların hiçbiri çalışmaz, sistem çöker",
        ],
        answer: 2,
        explanation:
          "8.8.8.8 yerel bir IP değildir (192.168 veya 10 ile başlamaz). Bu nedenle ilk iki kuralı geçemez ve K3 kuralında engellenir.",
      },
      "Zor seviye güvenlik kuralı analiz sorusu.",
    ),
    s(
      "Hafta 3: Kazanım kontrolü",
      "outcomes",
      {
        lead: "4 saatlik dersin ardından şu 3 kanıtı kendi kodunla göster:",
        items: [
          "Birden fazla koşulu karar tablosuyla ifade et ve eksik durumu yakala.",
          "Derin iç içe bir koşulu Guard Clause ile sadeleştir.",
          "Güvenilmeyen bir girdiyi boşluk, tür ve aralık kontrolleriyle doğrula.",
        ],
      },
      "Kazanım kontrolü: Öğrencilerin yazdığı küçük ama güvenli doğrulama kodlarını değerlendirin.",
    ),
  ],
  4: [
    outcomes(4),
    think(
      "Neden döngü kullanırız?",
      "Bir sunucuya bağlanan 100 kullanıcının her biri için ayrı ayrı 'kullanici1_kontrol()', 'kullanici2_kontrol()' yazmak sürdürülebilir midir? 10.000 istek geldiğinde kod neye benzer?",
      "Hayır. Elle kod tekrarı hem hata riskini katlar hem de kodun bakımını imkansız hale getirir. Döngüler, aynı veya benzer mantığı tek bir blokta binlerce kez çalıştırmamızı sağlar.",
      "Döngülerin temel motivasyonunu sınıfça tartışın. Programlamada 'DRY' (Don't Repeat Yourself - Kendini Tekrar Etme) prensibine vurgu yapın.",
    ),
    cards(
      "Döngülerin Temel Rolü ve Gücü",
      [
        [
          "Otomasyon ve Hız",
          "Aynı işlemi elle defalarca yazmak yerine bilgisayarın saniyede milyonlarca işlem yapma hızından yararlanırız.",
        ],
        [
          "Veri Akışını İşleme",
          "Ağdan gelen paketleri, log dosyası satırlarını veya veritabanı kayıtlarını sırayla okuyup işleriz.",
        ],
        [
          "Koşula Bağlı Canlılık",
          "Belirli bir durum sağlanana kadar (örneğin doğru parola girilene ya da bağlantı kurulana dek) sistemi canlı tutarız.",
        ],
        [
          "Dinamik Karar Alma",
          "Her döngü turunda (iterasyonda) farklı girdi değerlerini if/elif/else bloklarıyla değerlendiririz.",
        ],
      ],
      "Tek bir algoritma, sınırsız tekrar kabiliyeti.",
      "Öğrencilere günlük hayattan periyodik görevleri sorarak döngü analojisi kurun (saatin tik-takları, sayaçlar vb.).",
    ),
    cards(
      "Python'da İki Temel Döngü Türü",
      [
        [
          "while Döngüsü",
          "Bir mantıksal koşul True olduğu sürece çalışmaya devam eder. Adım sayısının önceden bilinmediği durumlar için idealdir.",
        ],
        [
          "for Döngüsü",
          "Belirli bir aralık (range) veya veri koleksiyonu (liste, metin) üzerinde sırayla ilerler. Adım sayısı genellikle bellidir.",
        ],
      ],
      "Problemin yapısına göre doğru döngü aracını seçmek başarının ilk adımıdır.",
      "Girdi beklerken veya olay odaklı durumlarda while, sıralı eleman gezerken for tercih edildiğini vurgulayın.",
    ),
    cards(
      "while Döngüsünün Üç Altın Kuralı",
      [
        [
          "1. Başlangıç Durumu",
          "Döngüye girmeden önce koşulda test edilecek değişken tanımlanmalı ve ilk değeri verilmelidir (örn: sayac = 0).",
        ],
        [
          "2. Geçerlilik Koşulu",
          "while ifadesinin yanındaki mantıksal test True olduğu müddetçe döngü gövdesi çalışır.",
        ],
        [
          "3. Değişken Güncellemesi",
          "Döngü bloğu içinde koşul değişkeni mutlaka güncellenmelidir (örn: sayac += 1). Aksi halde sonsuz döngü oluşur.",
        ],
      ],
      "Döngü koşulu zaman içinde mutlaka False değerine ulaşabilmelidir.",
      "Sonsuz döngünün CPU tüketimini ve sistem kilitlenmesini nasıl tetiklediğini anlatın.",
    ),
    code(
      "while döngüsünün anatomisi",
      "Python",
      "sayac = 1  # 1. Başlangıç\nwhile sayac <= 3:  # 2. Koşul denetimi\n    print(\"Oturum kontrol adımı:\", sayac)\n    sayac += 1  # 3. İlerleme/Güncelleme\nprint(\"Kontrol tamamlandı, oturum güvenli.\")",
      "# Bu kod çalıştığında ekrana sırasıyla hangi çıktılar verilir?",
      "sayac değişkeninin 1, 2, 3 değerlerini alacağını, 4 olduğunda koşulun bozulup döngüden çıkılacağını adım adım gösterin.",
    ),
    exercise(
      "Soru & Çözüm 1: while ile Geri Sayım",
      "Soru: Bir sistem oturumunun kilitlenmesi için kullanıcıya 3'ten geriye sayan, 0'a ulaştığında 'Süre doldu! Oturum kilitlendi.' yazan algoritmayı ve Python kodunu yazınız.",
      "sayac = 3\nwhile sayac > 0:\n    print(\"Kalan süre:\", sayac, \"sn\")\n    sayac -= 1\nprint(\"Süre doldu! Oturum güvenlik nedeniyle kilitlendi.\")",
      "Geriye doğru saymada sayac -= 1 adımının kritik olduğunu ve sayac > 0 sınırını vurgulayın.",
    ),
    run(
      "Uygulama 1: Güvenlik Oturumu Geri Sayımı",
      "countdown",
      "Python'da while döngüsü ile sayaç tabanlı oturum kilitleme demosu.",
      "# Farklı bir saniye değeri girip geri sayımı terminalde incele.",
      "Pyodide üzerinde kodu çalıştırıp sayacın değişimini adım adım izletin.",
    ),
    think(
      "Sonsuz Döngü (Infinite Loop) Tuzağı",
      "sayac = 1\nwhile sayac <= 5:\n    print(sayac)\nsayac += 1 satırını yazmayı unutursak veya girintiyi while dışına koyarsak ne meydana gelir?",
      "sayac değişkeni döngü içinde hiç artmadığı için hep 1 kalır. 1 <= 5 koşulu sürekli True olacağından program sonsuza kadar 1 yazdırır, terminal donar ve işlemci aşırı yüklenir.",
      "Python'da girintinin (indentation) mantıksal kapsamı belirlediğini hatırlatın. Sonsuz döngüden çıkmak için terminalde Ctrl+C kullanıldığını belirtin.",
    ),
    cards(
      "Döngülerde İki Kritik Kalıp: Sayaç ve Toplayıcı",
      [
        [
          "Sayaç (Counter)",
          "Belirli bir olayın kaç kez gerçekleştiğini sayar. Genellikle her seferinde 1 artırılır: hatali_deneme += 1.",
        ],
        [
          "Toplayıcı (Accumulator)",
          "Sayısal büyüklükleri kümülatif olarak biriktirir. Örneğin gelen veri boyutlarını toplar: toplam_bayt += paket_boyutu.",
        ],
        [
          "Başlangıç Sıfırlaması",
          "Her iki değişken de döngü başlamadan önce mutlaka 0 (veya uygun etkisiz eleman) değerine eşitlenmelidir.",
        ],
        [
          "Döngü Sonrası Raporlama",
          "Nihai sayaç ve toplayıcı değerleri döngü tamamlandıktan sonra ekrana yazdırılır veya güvenlik kararında kullanılır.",
        ],
      ],
      "Döngülerde durum ve istatistik tutmanın iki temel omurgası.",
      "BGT bağlamında: hatalı parola sayımı (sayaç), indirilen bayt miktarı (toplayıcı).",
    ),
    table(
      "Sayaç ve Toplayıcı Karşılaştırması",
      ["Özellik", "Sayaç (Counter)", "Toplayıcı (Accumulator)"],
      [
        ["Amaç", "Olay adedini saymak", "Kümülatif miktarı toplamak"],
        ["Artış Miktarı", "Sabit (+1)", "Değişken (+gelen_deger)"],
        ["Başlangıç Değeri", "0", "0"],
        ["BGT Senaryosu", "Brute-force deneme adedi", "Günlük aktarılan veri kotası"],
      ],
      "Senaryoya göre doğru değişken rolünü belirle.",
      "Sayaç ve toplayıcı kavramlarının algoritma kurmadaki yerini pekiştirin.",
    ),
    cards(
      "Döngü Kırıcılar: break ve continue",
      [
        [
          "break İfadesi",
          "İçinde bulunduğu döngüyü DERHAL sonlandırır. Döngüden sonraki ilk satıra atlar.",
        ],
        [
          "continue İfadesi",
          "Döngünün MEVCUT TURUNU yarıda keser; bir sonraki tura (iterasyona) geçer.",
        ],
        [
          "Ne Zaman break?",
          "Aranan hedef bulunduğunda, doğru parola girildiğinde veya kritik hata oluştuğunda döngüyü sürdürmeye gerek kalmaz.",
        ],
        [
          "Ne Zaman continue?",
          "Geçersiz, güvenli veya zararsız veriyle karşılaşıldığında gereksiz ağır işlemleri atlamak için kullanılır.",
        ],
      ],
      "Döngü akışını koşullara göre dinamik yöneten iki anahtar kelime.",
      "Gereksiz döngü turlarını önleyerek CPU tasarrufu sağlandığını belirtin.",
    ),
    code(
      "break vs continue akış farkı",
      "Python",
      "# break: Koşul sağlandığı anda döngüyü tamamen bitirir\nfor i in range(1, 6):\n    if i == 3:\n        break\n    print(\"break çıktısı:\", i)  # Yalnızca 1 ve 2 yazar\n\n# continue: O anki adımı atlar, sonraki adıma geçer\nfor i in range(1, 6):\n    if i == 3:\n        continue\n    print(\"continue çıktısı:\", i)  # 1, 2, 4, 5 yazar",
      "# 3 değerinin iki döngüdeki farklı akışını incele.",
      "Öğrencilere break'in döngüden tamamen kaçış, continue'nun ise o adımı pas geçme olduğunu gösterin.",
    ),
    exercise(
      "Soru & Çözüm 2: while ve break ile PIN Girişi",
      "Soru: Kullanıcıya en fazla 3 deneme hakkı veren, doğru PIN ('1923') girilirse 'PIN doğrulandı' deyip döngüyü break ile bitiren, 3 hak biterse 'Kart bloke edildi' uyarısı veren algoritmayı yazınız.",
      "kalan_hak = 3\ndogru_pin = \"1923\"\ngiris_basarili = False\nwhile kalan_hak > 0:\n    tahmin = input(\"PIN: \").strip()\n    if tahmin == dogru_pin:\n        giris_basarili = True\n        print(\"PIN doğrulandı!\")\n        break\n    else:\n        kalan_hak -= 1\nif not giris_basarili:\n    print(\"3 kez hatalı deneme! Kart bloke edildi.\")",
      "break ifadesinin rolünü ve kalan_hak sayacının eksiltilmesini gösterin.",
    ),
    run(
      "Uygulama 2: PIN Deneme ve Brute-Force Kilidi",
      "pin_bruteforce",
      "while ve break ile hatalı deneme sayacı ve güvenlik bloğu.",
      "# Yanlış PIN'ler ve doğru PIN girerek döngü akışını sına.",
      "Sınıfta brute-force saldırılarına karşı bu mekanizmanın neden elzem olduğunu tartışın.",
    ),
    cards(
      "for Döngüsü ve range() Fonksiyonu",
      [
        [
          "for Döngüsü",
          "Sıralı bir veri kümesindeki her eleman için gövdesindeki kodları sırayla yürütür.",
        ],
        [
          "range(dur)",
          "0'dan başlar, 'dur' değerine kadar (dur hariç) 1'er artarak sayılar üretir. range(5) → 0, 1, 2, 3, 4.",
        ],
        [
          "range(basla, dur)",
          "Belirtilen 'basla' değerinden 'dur' değerine kadar sayar. range(1, 4) → 1, 2, 3.",
        ],
        [
          "range(basla, dur, adim)",
          "Belirtilen 'adim' miktarına göre sayar. range(2, 10, 2) → 2, 4, 6, 8.",
        ],
      ],
      "range() fonksiyonu bellek dostudur, sayıları ihtiyaç duyuldukça üretir.",
      "Bitiş değerinin dahil edilmediğini (exclusive) özellikle vurgulayın.",
    ),
    table(
      "range() Kullanım Tablosu",
      ["Kullanım", "Üretilen Sayılar", "Açıklama"],
      [
        ["range(4)", "0, 1, 2, 3", "0'dan başlar, toplam 4 sayı üretir."],
        ["range(1, 5)", "1, 2, 3, 4", "1'den başlar, 5 hariçtir."],
        ["range(10, 50, 10)", "10, 20, 30, 40", "10'ar artışla seriler üretir."],
        ["range(5, 0, -1)", "5, 4, 3, 2, 1", "Negatif adımla geriye doğru sayar."],
      ],
      "range(1, 101) kaç adet sayı üretir?",
      "Üst sınırın neden dahil olmadığını Python'un 0 tabanlı indeksleme felsefesiyle açıklayın.",
    ),
    think(
      "for mu yoksa while mı seçilmeli?",
      "Bir ağ yöneticisi 1. porttan 100. porta kadar tüm portları sırayla kontrol etmek istiyor. Hangi döngü daha uygundur ve neden?",
      "for port in range(1, 101): daha uygundur; çünkü başlangıç ve bitiş sınırları bellidir. Sayaç artırma işi range tarafından otomatik yapılır, sonsuz döngü riski ortadan kalkar.",
      "Sınırları belirli adımlarda for, dış olaya bağlı durumlarda while tercih edilir.",
    ),
    exercise(
      "Soru & Çözüm 3: for ve range ile Port Tarama Simülatörü",
      "Soru: 79 ile 81 arasındaki portları tarayan, 80 numaralı portu görünce '[AÇIK] Servis tespit edildi', diğerlerine '[KAPALI]' yazan programı tasarlayınız.",
      "baslangic = 79\nbitis = 81\naciklar = [80]\nfor p in range(baslangic, bitis + 1):\n    if p in aciklar:\n        print(f\"Port {p}: [AÇIK] Servis tespit edildi\")\n    else:\n        print(f\"Port {p}: [KAPALI]\")",
      "range(baslangic, bitis + 1) yazılmazsa son portun taranmayacağını belirtin.",
    ),
    run(
      "Uygulama 3: Port Tarama Simülasyonu",
      "port_scan",
      "for ve range ile hedef portları tarama ve açık servisleri tespit etme.",
      "# Başlangıç 79, bitiş 81 verip açık portu incele.",
      "Port tarama (Nmap vb.) araçlarının çalışma mantığını basitleştirilmiş olarak anlatın.",
    ),
    exercise(
      "Soru & Çözüm 4: continue ile Güvenli Portları Ayıklama",
      "Soru: 78 ile 82 arasındaki portları incelerken bilinen standart web portları (80, 443) geldiğinde incelemeyi atlayan (continue), diğerlerini 'İnceleniyor (standart dışı port)' olarak yazdıran program.",
      "guvenli = [80, 443]\nfor port in range(78, 83):\n    if port in guvenli:\n        continue\n    print(\"İnceleniyor (standart dışı port):\", port)",
      "continue satırından sonraki kodların o tur için çalıştırılmadığını vurgulayın.",
    ),
    run(
      "Uygulama 4: continue ile Port Filtreleme",
      "continue_filter",
      "Standart portları atlayıp yalnızca analiz edilmesi gereken portları süzme.",
      "# Çıktıda 80 portunun neden yer almadığını açıkla.",
      "Güvenlik analistlerinin gürültüyü (noise) filtrelemek için bu mantığı kullandığını söyleyin.",
    ),
    exercise(
      "Soru & Çözüm 5: Ağ Trafiği Sayacı ve Toplayıcısı",
      "Soru: Kullanıcıdan 3 adet ağ paket boyutu alan, toplam boyutu toplayan ve 1000 bayttan büyük şüpheli paket sayısını sayan algoritma ve Python kodunu yazınız.",
      "toplam = 0\nsupheli = 0\nfor i in range(1, 4):\n    b = int(input(f\"Paket {i} boyutu: \"))\n    toplam += b\n    if b > 1000:\n        supheli += 1\nprint(\"Toplam aktarılan veri:\", toplam, \"bayt\")\nprint(\"1000 bayt üzeri şüpheli paket sayısı:\", supheli)",
      "Döngü içindeki toplayıcı (toplam += b) ile sayaç (supheli += 1) farkını pekiştirin.",
    ),
    run(
      "Uygulama 5: Trafik Analizi ve Anomali Sayacı",
      "traffic_sum",
      "Gerçek zamanlı paket boyutu toplama ve eşik üstü anomali tespiti.",
      "# Farklı paket boyutları girerek sayacın davranışını test et.",
      "Ağ analizinde DDoS veya veri sızıntısı tespiti için boyut analizinin önemini belirtin.",
    ),
    ai(
      "🤖 YZ ile Çalış: Döngü Sınırlarını Test Et",
      "Yazdığım while döngüsünün sonsuz döngüye girip girmeyeceğini ve döngü değişkeninin sınır durumlarını (0, negatif, maksimum) analiz etmem için bana 3 soru sor.",
      "Kendi yazdığın bir döngü kodunu hazırla. YZ'ye kodu doğrudan çözdürmek yerine sınır tuzaklarını sormasını iste.",
      "Öğrencinin YZ'yi bir denetçi ve soru soran rehber olarak konumlandırmasını teşvik edin.",
    ),
    cards(
      "Hafta Özeti: Döngülerde 4 Temel Güvenlik Kuralı",
      [
        [
          "Sonsuz Döngü Önlemi",
          "while döngüsünde koşul değişkeninin her adımda güncellendiğini doğrula.",
        ],
        [
          "range() Bitiş Sınırı",
          "range(a, b) ifadesinde b'nin dahil olmadığını unutma; gerekiyorsa b + 1 kullan.",
        ],
        [
          "Değişken Sıfırlama",
          "Sayaç ve toplayıcı değişkenlerini döngüden hemen önce sıfırla.",
        ],
        [
          "Erken Çıkış (break)",
          "Hedef veri bulunduğunda veya güvenlik ihlali algılandığında sistemi bekletmeden break ile çık.",
        ],
      ],
      "Temiz, güvenli ve performanslı döngüler yazmanın omurgası.",
      "Pekiştirme sınavına girmeden önce bu 4 kuralı hatırlatın.",
    ),
    s(
      "Mini quiz 1: range() serisini okuma",
      "quiz",
      {
        question:
          "range(2, 9, 2) ifadesi Python'da hangi sayı serisini üretir?",
        options: [
          "2, 4, 6, 8",
          "2, 4, 6, 8, 9",
          "2, 3, 4, 5, 6, 7, 8",
          "0, 2, 4, 6, 8",
        ],
        answer: 0,
        explanation:
          "range(2, 9, 2) 2'den başlar, 9'a kadar (9 hariç) 2'şer artar: 2, 4, 6, 8 üretilir.",
      },
      "Kolay seviye range() fonksiyonu kavrama sorusu.",
    ),
    s(
      "Mini quiz 2: while döngüsü ve sonsuz döngü",
      "quiz",
      {
        question:
          "sayi = 5\nwhile sayi > 0:\n    print(sayi)\nYukarıdaki kod çalıştırıldığında ne meydana gelir?",
        options: [
          "5'ten 1'e kadar geriye sayıp durur",
          "Sonsuz döngüye girer, sürekli 5 yazar",
          "Hiçbir şey yazdırmaz",
          "SyntaxError hatası verir",
        ],
        answer: 1,
        explanation:
          "sayi değişkeni döngü içinde hiç azaltılmadığı için sayi > 0 koşulu daima True kalır ve sonsuz döngü oluşur.",
      },
      "Kolay-orta seviye sonsuz döngü farkındalık sorusu.",
    ),
    s(
      "Mini quiz 3: Döngü izleme ve toplayıcı hesabı",
      "quiz",
      {
        question:
          "toplam = 0\nfor x in range(1, 5):\n    toplam += x\nprint(toplam)\nProgramın ekran çıktısı nedir?",
        options: ["10", "15", "5", "4"],
        answer: 0,
        explanation:
          "x değerleri sırasıyla 1, 2, 3, 4 olur (5 hariç). toplam = 0 + 1 + 2 + 3 + 4 = 10 olur.",
      },
      "Orta seviye kuru çalıştırma ve toplayıcı sorusu.",
    ),
    s(
      "Mini quiz 4: break ve continue farkı",
      "quiz",
      {
        question:
          "Bir döngü içinde belirli bir koşul sağlandığında döngünün diğer turlarının tamamen iptal edilip döngü dışına çıkılması için hangi komut kullanılır?",
        options: ["break", "continue", "pass", "exit"],
        answer: 0,
        explanation:
          "break döngüyü tamamen sonlandırır. continue ise sadece o anki turu atlayıp bir sonraki tura geçer.",
      },
      "Orta seviye döngü kontrol mekanizması sorusu.",
    ),
    s(
      "Mini quiz 5: BGT Brute-force deneme eşiği analizi",
      "quiz",
      {
        question:
          "hak = 3\nwhile hak > 0:\n    p = input()\n    if p == 'admin':\n        break\n    hak -= 1\nKullanıcı sırasıyla '123', 'root', 'admin' girerse döngü kaç kez çalışır ve hak değişkeninin son değeri ne olur?",
        options: [
          "3 kez çalışır ve hak = 1 olur",
          "3 kez çalışır ve hak = 0 olur",
          "2 kez çalışır ve hak = 2 olur",
          "1 kez çalışır ve hak = 3 olur",
        ],
        answer: 0,
        explanation:
          "1. tur ('123'): hak 2 olur. 2. tur ('root'): hak 1 olur. 3. tur ('admin'): if doğru olur ve break ile çıkılır. hak azaltılmaz, 1 olarak kalır. Toplam 3 tur çalışmıştır.",
      },
      "Zor seviye döngü akışı ve güvenlik sayacı analizi sorusu.",
    ),
    s(
      "Hafta 4: Kazanım kontrolü",
      "outcomes",
      {
        lead: "Döngüler konusunun ardından şu 3 kanıtı kendi kodunla göster:",
        items: [
          "Tekrarlanan bir işi while veya for döngüsüyle modelle.",
          "Sayaç ve toplayıcı değişkenleri döngü içinde doğru güncelle.",
          "break ve continue ile döngü akışını koşullara göre yönet.",
        ],
      },
      "Kazanım kontrolü: Öğrencilerin döngü ve karar yapılarını birlikte kullandığı küçük projeleri değerlendirin.",
    ),
  ],
  5: [
    outcomes(5),
    think(
      "Neden tek bir değişken yetmez?",
      "Bir güvenlik duvarında engellenecek 500 adet zararlı IP adresi varsa, her biri için 'ip1 = ...', 'ip2 = ...' şeklinde 500 değişken mi oluştururuz? Yeni bir IP geldiğinde kod nasıl yazılır?",
      "Hayır. Yüzlerce değişken tanımlamak kodun bakımını imkansız kılar. Bunun yerine verileri tek bir 'liste' (dizi) konteynerinde tutar, döngüler ve arama fonksiyonlarıyla hepsini tek satırda denetleriz.",
      "Gerçek hayattaki kara liste, log satırları ve port listeleri üzerinden dizilerin gerekliliğini tartışın.",
    ),
    cards(
      "Dizi (Liste) Kavramı Nedir?",
      [
        [
          "Sıralı Veri Koleksiyonu",
          "Birden çok veriyi tek bir ad altında, sıralı bir biçimde saklayan dinamik veri yapısıdır.",
        ],
        [
          "Köşeli Parantez []",
          "Python'da listeler köşeli parantez içinde virgülle ayrılarak oluşturulur: portlar = [21, 22, 80].",
        ],
        [
          "Farklı Veri Tipleri",
          "Bir liste içinde int, str, float ve bool aynı anda bulunabilir; ancak genellikle homojen kullanılır.",
        ],
        [
          "Değiştirilebilirlik (Mutable)",
          "Listeler oluşturulduktan sonra elemanları güncellenebilir, yeni eleman eklenebilir veya silinebilir.",
        ],
      ],
      "Tek değişken, zengin veri saklama kabiliyeti.",
      "Listelerin dinamik boyutlu olduğunu (C dizilerinden farklı olarak boyutu esnek) vurgulayın.",
    ),
    cards(
      "İndeksleme (Indexing) Kuralları",
      [
        [
          "0'dan Başlayan İndeks",
          "Listenin İLK elemanının indeksi DAİMA 0'dır: liste[0].",
        ],
        [
          "Pozitif İndeksler (Soldan Sağa)",
          "0, 1, 2, ..., n-1 şeklinde soldan sağa doğru ilerler.",
        ],
        [
          "Negatif İndeksler (Sağdan Sola)",
          "-1 daima SON elemanı, -2 sondan bir öncekini verir.",
        ],
        [
          "IndexError Sınır Hatası",
          "Var olmayan bir indekse (örn: 3 elemanlı listede liste[3]) erişmeye çalışmak IndexError fırlatır.",
        ],
      ],
      "Elemanlara doğrudan erişimin anahtarı.",
      "0 tabanlı indeks mantığının bellek ofseti prensibine dayandığını açıklayın.",
    ),
    table(
      "Pozitif ve Negatif İndeks Haritası",
      ["Eleman", '"Router"', '"Switch"', '"Firewall"', '"Server"'],
      [
        ["Pozitif İndeks", "0", "1", "2", "3"],
        ["Negatif İndeks", "-4", "-3", "-2", "-1"],
      ],
      "Listenin ilk ve son elemanına nasıl erişirsin?",
      "Pozitif ve negatif indekslerin simetrisini tablo üzerinden gösterin.",
    ),
    think(
      "Sınır Tuzağı: IndexError",
      "cihazlar = ['PC-01', 'PC-02', 'PC-03']\nprint(cihazlar[3]) yazarsak Python nasıl tepki verir?",
      "IndexError: list index out of range hatası fırlatılır. 3 elemanlı bir listenin geçerli pozitif indeksleri 0, 1 ve 2'dir. İndeks 3 sınır dışıdır.",
      "Python'daki yaygın 'off-by-one' (1 eksik/fazla) sınır hatalarını vurgulayın.",
    ),
    cards(
      "Dilimleme (Slicing): Parça Alma",
      [
        [
          "Şablon: liste[basla:dur]",
          "Belirtilen 'basla' indeksinden 'dur' indeksine kadar (dur hariç) yeni bir alt liste üretir.",
        ],
        [
          "Baştan Başlama: liste[:k]",
          "0 indeksinden k indeksine kadar olan ilk k elemanı alır.",
        ],
        [
          "Sona Kadar: liste[k:]",
          "k indeksinden listenin sonuna kadar tüm elemanları alır.",
        ],
        [
          "Ters Çevirme: liste[::-1]",
          "Adım değerini -1 vererek listeyi baştan sona tersine çevirir.",
        ],
      ],
      "Veri kümesinden ihtiyaç duyulan bölümü kopyalama tekniği.",
      "Dilimlemenin orijinal listeyi bozmayıp yeni bir kopya döndürdüğünü açıklayın.",
    ),
    exercise(
      "Soru & Çözüm 1: Liste Tanımlama ve İndeksleme",
      "Soru: 4 adet sunucu adını bir listeye alan, ilk sunucuyu, son sunucuyu ve ilk 2 kritik sunucuyu ekrana yazdıran programı yazınız.",
      "sunucular = ['DB-01', 'Web-01', 'Auth-01', 'Mail-01']\nprint('İlk sunucu:', sunucular[0])\nprint('Son sunucu:', sunucular[-1])\nprint('İlk 2 kritik sunucu:', sunucular[:2])",
      "sunucular[:2] diliminin 0 ve 1. indeksleri aldığını gösterin.",
    ),
    run(
      "Uygulama 1: Ağ Cihazları Envanteri",
      "device_inventory",
      "Liste tanımlama, eleman sayısı (len), indeksleme ve dilimleme demosu.",
      "# Yeni bir cihaz ekleyip dilimleme sınırlarını sına.",
      "Pyodide üzerinde çalıştırarak listenin yapısını inceletin.",
    ),
    cards(
      "Dinamik Liste Metotları",
      [
        [
          "len(liste)",
          "Listenin içindeki toplam eleman sayısını tam sayı olarak döndürür.",
        ],
        [
          "liste.append(deger)",
          "Listenin en sonuna yeni bir eleman ekler. Boyutu 1 artırır.",
        ],
        [
          "liste.remove(deger)",
          "Belirtilen değeri listeden ilk bulduğu yerde siler. Değer yoksa ValueError verir.",
        ],
        [
          "in / not in Operatörü",
          "Bir elemanın liste içinde bulunup bulunmadığını kontrol eder (True / False).",
        ],
      ],
      "Listeleri çalışma anında büyütüp küçültme araçları.",
      "Güvenlik duvarı kurallarının dinamik olarak eklenip çıkarılmasıyla bağ kurun.",
    ),
    think(
      "in Operatörü Neden Güvenlikte Çok Kullanılır?",
      "gelen_ip = '10.0.0.1'\nkara_liste = ['192.168.1.1', '10.0.0.1', '172.16.0.5']\nif gelen_ip in kara_liste: kontrolü nasıl çalışır?",
      "in operatörü, liste içindeki her elemanı tek tek gezerek aranan değerle karşılaştırır. Eşleşme bulursa True, bulamazsa False döndürür. IP engelleme ve beyaz liste denetiminde tek satırda kontrol sağlar.",
      "in operatörünün arkasında gizli bir arama döngüsü olduğunu açıklayın.",
    ),
    exercise(
      "Soru & Çözüm 2: IP Kara Liste Kontrolü",
      "Soru: 3 adet engelli IP içeren bir kara liste tanımlayınız. Kullanıcıdan bir IP alıp eğer kara listedeyse 'ERİŞİM ENGEL: Bu IP adresi kara listede!', değilse 'ERİŞİM İZİN: IP güvenli görünüyor.' yazan programı kodlayınız.",
      "kara_liste = ['192.168.1.105', '10.0.0.99', '172.16.5.20']\ngelen_ip = input('Sorgulanacak IP: ').strip()\nif gelen_ip in kara_liste:\n    print('ERİŞİM ENGEL: Bu IP adresi kara listede!')\nelse:\n    print('ERİŞİM İZİN: IP güvenli görünüyor.')",
      "strip() ile boşluk temizliğinin önemini ve in operatörünün kullanımını belirtin.",
    ),
    run(
      "Uygulama 2: IP Kara Liste Denetimi",
      "blacklist_check",
      "in operatörü ile kurgusal IP filtreleme ve güvenlik duvarı engeli demosu.",
      "# Kara listedeki bir IP ve rastgele bir IP ile test et.",
      "Beyaz liste ve kara liste modellerini sınıfta tartışın.",
    ),
    exercise(
      "Soru & Çözüm 3: Dinamik Liste Yönetimi (append ve remove)",
      "Soru: Engellenen portlar listesine kullanıcıdan alınan yeni bir portu ekleyen (append), ardından eski bir güvensiz protokol portunu (23 - Telnet) listeden çıkaran (remove) program.",
      "engellenen_portlar = [23, 25]\nyeni_port = int(input('Engellenecek yeni port: '))\nengellenen_portlar.append(yeni_port)\nif 23 in engellenen_portlar:\n    engellenen_portlar.remove(23)\nprint('Güncel liste:', engellenen_portlar)",
      "remove() kullanmadan önce değerin listede var olup olmadığını (in) kontrol etmenin ValueError'ı önlediğini açıklayın.",
    ),
    run(
      "Uygulama 3: Dinamik Port Listesi Yönetimi",
      "list_operations",
      "append ve remove metotlarıyla çalışma anında liste güncelleme.",
      "# Farklı portlar ekleyerek listenin değişimini izle.",
      "Port engelleme listesinin nasıl dinamik yönetildiğini gösterin.",
    ),
    cards(
      "Diziler Üzerinde for Döngüsü ile Gezinme",
      [
        [
          "Doğrudan Gezinme",
          "for eleman in liste: yapısı, indekslerle uğraşmadan sırayla her elemanın değerini alır.",
        ],
        [
          "İndeksle Gezinme",
          "for i in range(len(liste)): hem elemanın indeksine (i) hem değerine (liste[i]) erişim sağlar.",
        ],
        [
          "Kümülatif İstatistik",
          "Liste elemanlarını döngüyle toplayabilir, sayabilir ve ortalamasını alabiliriz.",
        ],
        [
          "Koşullu Filtreleme",
          "Döngü içine konulan if şartıyla kriterleri sağlayan elemanları ayıklayabiliriz.",
        ],
      ],
      "Diziler ve döngülerin kusursuz entegrasyonu.",
      "Python'daki for eleman in liste sözdiziminin okunabilirliğini öne çıkarın.",
    ),
    table(
      "Döngü ile Liste Gezinme Yöntemleri",
      ["Yöntem", "Sözdizimi", "Ne Zaman Kullanılır?"],
      [
        ["Doğrudan Değer", "for x in liste:", "Yalnızca elemanın değeri lazımsa (en temiz yol)."],
        ["İndeks ile", "for i in range(len(liste)):", "Elemanın sıra numarası veya güncellenmesi gerekiyorsa."],
        ["Numaralandırma", "for i, x in enumerate(liste):", "Hem sıra numarası hem değer aynı anda lazımsa."],
      ],
      "Probleme en uygun gezinme yöntemini seç.",
      "Pythonik kod yazma alışkanlığını pekiştirin.",
    ),
    exercise(
      "Soru & Çözüm 4: Hatalı Giriş İstatistikleri (Toplam ve Ortalama)",
      "Soru: 7 günlük hatalı oturum açma sayılarını tutan bir liste üzerinde for döngüsüyle toplam hatalı giriş sayısını, haftalık ortalamayı ve 5 ve üzeri olan şüpheli gün adedini hesaplayınız.",
      "hatali_girisler = [3, 1, 0, 7, 2, 14, 4]\ntoplam = 0\nsupheli_gunler = 0\nfor sayi in hatali_girisler:\n    toplam += sayi\n    if sayi >= 5:\n        supheli_gunler += 1\nortalama = toplam / len(hatali_girisler)\nprint('Toplam hatalı giriş:', toplam)\nprint(f'Haftalık ortalama: {ortalama:.2f}')\nprint('Eşik (5) üstü şüpheli gün sayısı:', supheli_gunler)",
      "toplam / len(hatali_girisler) formülünde listenin boş olmaması gerektiğini hatırlatın.",
    ),
    run(
      "Uygulama 4: Hatalı Oturum İstatistikleri",
      "failed_login_stats",
      "Sayısal dizi üzerinde döngü, toplayıcı, sayaç ve ortalama hesabı.",
      "# Kendi hata sayılarını tanımlayarak ortalamayı gözlemle.",
      "SIEM sistemlerindeki anomali alarmlarının temel mantığıyla ilişkilendirin.",
    ),
    cards(
      "Dizilerde Filtreleme Kalıbı (Filtering Pattern)",
      [
        [
          "1. Hedef Liste Aç",
          "Filtrelenen verileri toplamak için boş bir liste tanımlanır: guvensizler = [].",
        ],
        [
          "2. Kaynak Listeyi Gez",
          "for eleman in kaynak_liste: ile her veri tek tek ziyaret edilir.",
        ],
        [
          "3. Kriteri Denetle",
          "if len(p) < 8: gibi istenen güvenlik veya geçerlilik şartı sınanır.",
        ],
        [
          "4. Uygun Olanı Ekle",
          "Kriteri sağlayan eleman hedefe eklenir: guvensizler.append(p).",
        ],
      ],
      "Veri temizleme ve anomali filtrelemenin ana algoritması.",
      "Bilgi güvenliği analistlerinin devasa loglardan zararlı satırları bu kalıpla ayıkladığını belirtin.",
    ),
    exercise(
      "Soru & Çözüm 5: Zayıf Parolaları Ayıklama",
      "Soru: Bir kullanıcı parolaları listesindeki her parolayı denetleyip uzunluğu 8 karakterden kısa olan zayıf parolaları ayrı bir 'guvensizler' listesine ekleyen programı yazınız.",
      "parolalar = ['admin1', 'supersecret2026', '123', 'bgt_lab_pass!']\nguvensizler = []\nfor p in parolalar:\n    if len(p) < 8:\n        guvensizler.append(p)\nprint('Taranan toplam parola:', len(parolalar))\nprint('8 karakterden kısa güvensiz parolalar:', guvensizler)",
      "len(p) fonksiyonunun metin uzunluğunu, len(liste)'nin ise eleman sayısını verdiğini açıklayın.",
    ),
    run(
      "Uygulama 5: Parola Uzunluk Denetimi ve Filtreleme",
      "password_length_filter",
      "Dizi filtreleme kalıbı ile zayıf parolaları ayıklama.",
      "# Yeni parolalar ekleyerek filtrenin başarısını test et.",
      "Kurumsal parola politikalarının otomatik denetim mekanizmasını örnekleyin.",
    ),
    cards(
      "Dizide En Büyük Değeri Bulma (Anomali Tespiti)",
      [
        [
          "Başlangıç Kabulü",
          "Listenin İLK elemanı (liste[0]) geçici olarak 'en_buyuk' kabul edilir.",
        ],
        [
          "Döngü ile Karşılaştırma",
          "Döngüdeki her eleman mevcut 'en_buyuk' ile kıyaslanır.",
        ],
        [
          "Güncelleme Kuralı",
          "Eğer o anki eleman > en_buyuk ise: en_buyuk = eleman yapılır.",
        ],
        [
          "Neden 0 Değil?",
          "Tüm liste negatif sayılardan oluşuyorsa, 0'dan başlamak hatalı sonuç verir! Daima liste[0] kullanılmalıdır.",
        ],
      ],
      "Algoritmik arama ve tepe değer tespiti.",
      "Veri sızıntısı veya anomali tespitinde tepe paket boyutunun önemini tartışın.",
    ),
    exercise(
      "Soru & Çözüm 6: Tepe Paket Boyutunu Bulma",
      "Soru: Bir listedeki ağ paket boyutları arasından döngü kullanarak en büyük değeri bulan ve ekrana anomali tepe noktası olarak yazdıran kodu yazınız.",
      "paket_boyutlari = [120, 450, 1500, 8900, 320, 1400]\nen_buyuk = paket_boyutlari[0]\nfor boyut in paket_boyutlari:\n    if boyut > en_buyuk:\n        en_buyuk = boyut\nprint('İncelenen paketler:', paket_boyutlari)\nprint('Tepe paket boyutu (olası anomali):', en_buyuk, 'bayt')",
      "max() gömülü fonksiyonunun arkasında bu algoritmanın çalıştığını açıklayın.",
    ),
    run(
      "Uygulama 6: Trafik Anomali Tepe Noktası Tespiti",
      "traffic_max_detector",
      "Döngü ile listede en büyük değeri (anomali) tespit etme demosu.",
      "# Paket boyutlarını değiştirip en yüksek değeri teyit et.",
      "Ağ trafiğindeki sıradışı sıçramaların siber güvenlikteki önemini belirtin.",
    ),
    s(
      "İnteraktif Laboratuvar: Dizi & Döngü Simülatörü",
      "array_simulation",
      {},
      "Öğrencilerin 1D, 2D ve 3D diziler üzerinde for ve while döngülerini bloklarla kurgulamasını, bellek durumunu adım adım izlemesini ve otomatik üretilen Python kodunu analiz etmesini sağlayın.",
    ),
    cards(
      "Diziler ve While Döngüsü (Dinamik Liste Yönetimi)",
      [
        [
          "İndeks Sayacı ile Gezinme",
          "i = 0 ile başlanır, her adımda i += 1 ile ilerlenir. while i < len(liste): koşuluyla sınırda durulur.",
        ],
        [
          "Kuyruk (Queue / FIFO) Mantığı",
          "while len(kuyruk) > 0: ve kuyruk.pop(0) kalıbıyla liste elemanları geldikleri sırayla işlenip tüketilir.",
        ],
        [
          "Erken Çıkış (break)",
          "Aranan bir güvenlik tehdidi (şüpheli MAC/IP) bulunduğunda döngüyü hemen bitirip gereksiz turları önler.",
        ],
        [
          "Sonsuz Döngü Tehlikesi",
          "While döngüsünde sayaç artırılmazsa (i += 1 unutulursa) veya liste küçültülmezse program kilitlenir!",
        ],
      ],
      "Döngü koşulu ve dinamik değişen liste boyutu.",
      "While döngüsünün liste elemanlarını tüketerek (pop) işleme senaryolarını vurgulayın.",
    ),
    exercise(
      "Soru & Çözüm 7: Olay Kuyruğu İşleme (While & pop)",
      "Soru: Bir güvenlik olay kuyruğundaki (olay_kuyrugu) olayları while döngüsü ve pop(0) kullanarak sırayla işleyen, kuyruk boşalana kadar devam eden ve 'SYN_FLOOD' veya 'SQL_INJECTION' gibi kritik olayları sayan programı yazınız.",
      "olay_kuyrugu = ['SYN_FLOOD', 'SSH_BRUTEFORCE', 'PORT_SCAN', 'SQL_INJECTION']\nislenen_olaylar = []\nkritik_sayisi = 0\nwhile len(olay_kuyrugu) > 0:\n    suanki = olay_kuyrugu.pop(0)\n    islenen_olaylar.append(suanki)\n    if suanki in ['SYN_FLOOD', 'SQL_INJECTION']:\n        kritik_sayisi += 1\nprint('İşlenen olay sayısı:', len(islenen_olaylar))\nprint('Tespit edilen kritik tehdit:', kritik_sayisi)",
      "pop(0) metodunun listenin başından eleman çıkararak kuyruğu kısalttığını gösterin.",
    ),
    run(
      "Uygulama 7: Güvenlik Olay Kuyruğu (While & FIFO)",
      "queue_event_processor",
      "While döngüsü ve pop(0) ile olay kuyruğu tüketme ve kritik tehdit sayımı.",
      "# Yeni olaylar ekleyerek kuyruğun nasıl sıfırlandığını gözlemle.",
      "SOC (Güvenlik Operasyon Merkezi) olay işleme kuyruklarının temel algoritmasını tartışın.",
    ),
    exercise(
      "Soru & Çözüm 8: Doğrusal Arama (Linear Search & break)",
      "Soru: Şüpheli MAC adresleri listesinde kullanıcının girdiği bir MAC adresini while döngüsü ve indeks sayacıyla arayan, bulunursa indeksini yazdırıp break ile döngüden çıkan programı yazınız.",
      "supheli_macler = ['00:1A:2B:3C:4D:5E', 'AA:BB:CC:DD:EE:FF', '12:34:56:78:9A:BC']\nhedef = input('Aranacak MAC: ').strip().upper()\ni = 0\nbulundu = False\nwhile i < len(supheli_macler):\n    if supheli_macler[i] == hedef:\n        bulundu = True\n        print('ALARM: Bulundu! İndeks:', i)\n        break\n    i += 1\nif not bulundu:\n    print('GÜVENLİ: Listede yok.')",
      "break ifadesinin arama tamamlandığında döngüyü erken keserek kaynak tasarrufu sağladığını açıklayın.",
    ),
    run(
      "Uygulama 8: Doğrusal Arama ve Erken Çıkış",
      "while_linear_search",
      "While döngüsü ve indeks sayacı ile şüpheli MAC adresi arama ve break kullanımı.",
      "# Listede olan ve olmayan MAC adresleriyle sınır durumlarını sına.",
      "Büyük listelerde erken çıkışın (break) performans kazancını örnekleyin.",
    ),
    cards(
      "İki Boyutlu Diziler (2D Listeler / Matrisler)",
      [
        [
          "Liste İçinde Liste",
          "2D dizi, satırlar ve sütunlardan oluşan bir tablodur: matris = [[1, 2], [3, 4]].",
        ],
        [
          "Satır ve Sütun İndeksi",
          "matris[satir][sutun] biçiminde çift indeksle erişilir: matris[0][1] ilk satırın ikinci sütunudur.",
        ],
        [
          "İç İçe İki Döngü (Nested)",
          "Dış döngü satırları (for r in range(len(matris))), iç döngü sütunları (for c in range(len(matris[r]))) gezer.",
        ],
        [
          "Güvenlik Modelleri",
          "Erişim Kontrol Matrisleri (ACL), sunucu-günlük log tabloları ve ağ bağlantı haritaları 2D matrislerle modellenir.",
        ],
      ],
      "Tablo ve ızgara (grid) veri yapılarını programlama diliyle ifade etme.",
      "Matrislerin bellek yapısını ve [satir][sutun] kuralını tahtada çizerek gösterin.",
    ),
    table(
      "2D Matris Çift İndeks Haritası (3x3 Örnek)",
      ["Satır \\ Sütun", "Sütun 0 (Pzt)", "Sütun 1 (Sal)", "Sütun 2 (Çar)"],
      [
        ["Satır 0 (Web-01)", "matris[0][0] = 12", "matris[0][1] = 45", "matris[0][2] = 8"],
        ["Satır 1 (DB-01)", "matris[1][0] = 3", "matris[1][1] = 98", "matris[1][2] = 14"],
        ["Satır 2 (Auth-01)", "matris[2][0] = 27", "matris[2][1] = 5", "matris[2][2] = 62"],
      ],
      "matris[1][1] hücresinde hangi sunucu ve günün değeri vardır?",
      "Satır indeksi birinci, sütun indeksi ikinci köşeli parantezdir.",
    ),
    exercise(
      "Soru & Çözüm 9: 2D Sunucu Log Matrisi Analizi",
      "Soru: 3 sunucunun 3 günlük hata sayılarını tutan bir 2D matris üzerinde iç içe döngülerle her sunucunun satır toplamını ve matristeki en büyük tepe anomaliyi bulan programı yazınız.",
      "log_matrisi = [[12, 45, 8], [3, 98, 14], [27, 5, 62]]\nsunucular = ['Web-01', 'DB-01', 'Auth-01']\nen_buyuk = log_matrisi[0][0]\nfor r in range(len(log_matrisi)):\n    satir_top = 0\n    for c in range(len(log_matrisi[r])):\n        val = log_matrisi[r][c]\n        satir_top += val\n        if val > en_buyuk:\n            en_buyuk = val\n    print(f'{sunucular[r]} toplam:', satir_top)\nprint('Tepe Anomali:', en_buyuk)",
      "Dış döngünün her turunda satir_top değişkeninin 0 olarak sıfırlandığına dikkat çekin.",
    ),
    run(
      "Uygulama 9: 2D Sunucu Log Analizi",
      "firewall_matrix_2d",
      "İç içe for döngüleri ile 2D matriste satır toplamı ve tepe anomali tespiti.",
      "# Matristeki değerleri değiştirip en riskli sunucunun değişimini izle.",
      "Matrislerin veri merkezlerindeki çok boyutlu izleme panelleriyle bağını kurun.",
    ),
    exercise(
      "Soru & Çözüm 10: 2D Erişim Yetki Matrisi (ACL Kontrolü)",
      "Soru: 3 rol (Misafir, Operatör, Yönetici) ve 3 izin (Okuma=0, Yazma=1, Silme=2) içeren 2D yetki matrisinde kullanıcının girdiği rol ve işlem numarasına göre yetki durumunu (1 ise ONAY, 0 ise RED) bildiren programı yazınız.",
      "yetki = [[1, 0, 0], [1, 1, 0], [1, 1, 1]]\nrol = int(input('Rol (0,1,2): '))\nislem = int(input('İşlem (0,1,2): '))\nif 0 <= rol <= 2 and 0 <= islem <= 2:\n    if yetki[rol][islem] == 1:\n        print('ONAY: Yetki verildi.')\n    else:\n        print('RED: Yetki yok!')\nelse:\n    print('Geçersiz girdi.')",
      "Erişim kontrol matrislerinin sabit sürede O(1) yetki denetimi sağladığını açıklayın.",
    ),
    run(
      "Uygulama 10: 2D Erişim Yetki Matrisi",
      "acl_matrix",
      "2D ikili matris ile rol ve işlem bazlı yetkilendirme kontrolü demosu.",
      "# Farklı rol ve işlem indeksleri girerek izin tablosunu doğrula.",
      "İşletim sistemlerindeki dosya izin matrisleri (r-w-x) ile paralellik kurun.",
    ),
    cards(
      "Üç Boyutlu Diziler (3D Listeler): Derinlik ve Hiyerarşi",
      [
        [
          "3 Boyutlu Küp Modeli",
          "3D liste, liste içinde listelerin listesidir: kup[blok][satir][sutun].",
        ],
        [
          "Hiyerarşik Fiziksel Anlam",
          "Örn: [Veri Merkezi Şubesi][Kabin Numarası][Sunucu Sensörü]. Gerçek dünyadaki fiziksel konumu modeller.",
        ],
        [
          "3 İç İçe Döngü",
          "Tüm sensörleri taramak için: for b in ... -> for r in ... -> for c in ... kullanılır.",
        ],
        [
          "Kritik Sınır Tarama",
          "Küp içindeki herhangi bir hücre kritik eşiği (örn: 30°C) aştığında tam koordinatı [b][r][c] raporlanır.",
        ],
      ],
      "Çok boyutlu veri yapılarıyla fiziksel sistemleri ve IoT ağlarını modelleme.",
      "3D dizi indekslerinin matrisler katmanı (blok), satır ve sütun sırasıyla çalıştığını açıklayın.",
    ),
    exercise(
      "Soru & Çözüm 11: 3D Veri Merkezi Sensör Isı Taraması",
      "Soru: 2 Şube, 2 Kabin ve 3 Sunucudan oluşan 3D sensör küpünde (2x2x3) 30°C ve üzeri olan aşırı ısınmış sunucuların konumunu (Şube, Kabin, Sunucu) tespit edip listeleyen programı yazınız.",
      "kup = [[[24, 26, 28], [22, 23, 31]], [[21, 22, 22], [25, 29, 36]]]\nfor b in range(len(kup)):\n    for r in range(len(kup[b])):\n        for c in range(len(kup[b][r])):\n            sicaklik = kup[b][r][c]\n            if sicaklik >= 30:\n                print(f'ALARM: Şube-{b} Kabin-{r} Sunucu-{c} -> {sicaklik}°C')",
      "3 iç içe döngünün toplam adım sayısının 2 * 2 * 3 = 12 olduğunu vurgulayın.",
    ),
    run(
      "Uygulama 11: 3D Veri Merkezi Sensör Küpü",
      "datacenter_sensors_3d",
      "3D dizi ve 3 iç içe for döngüsü ile çok boyutlu IoT sıcaklık anomali taraması.",
      "# Farklı sensör sıcaklıkları ekleyerek alarm koordinatlarını izle.",
      "Büyük veri merkezlerindeki ortam denetim otomasyonlarını tartışın.",
    ),
    ai(
      "🤖 YZ ile Çalış: Liste Algoritmalarını Denetle",
      "Yazdığım liste filtreleme ve arama kodunda liste boş olduğunda, tek elemanlı olduğunda veya tüm elemanlar aynı olduğunda ne gibi hatalar oluşabileceğini öğrenmek için bana 3 soru sor.",
      "Kendi yazdığın liste kodunu YZ'ye sunmadan önce uç senaryoları düşün. YZ'den sınır açıklarını sorgulamasını iste.",
      "Öğrencilerin 'boş liste' ve 'tek elemanlı liste' gibi uç durumları düşünmesini sağlayın.",
    ),
    cards(
      "Hafta Özeti: Dizilerde 4 Altın Kural",
      [
        [
          "0 Tabanlı İndeks",
          "İlk eleman 0, son eleman -1'dir. Sınırları aşma (IndexError).",
        ],
        [
          "in ile Hızlı Kontrol",
          "Arama yaparken döngü yazmadan önce in operatörünü hatırla.",
        ],
        [
          "Dinamik Metotlar",
          "append ile sona ekle, remove ile değere göre sil.",
        ],
        [
          "Filtreleme Deseni",
          "Boş hedef liste aç -> Döngüyle tara -> Koşul tutarsa append et.",
        ],
      ],
      "Listelerle çalışırken en çok kullanılan prensipler.",
      "Pekiştirme sınavına girmeden önce bu 4 kuralı özetleyin.",
    ),
    s(
      "Mini quiz 1: Listenin ilk ve son indeksleri",
      "quiz",
      {
        question:
          "5 elemanlı bir 'cihazlar' listesinde ilk elemana ve son elemana erişmek için hangi indeksler kullanılır?",
        options: [
          "cihazlar[0] ve cihazlar[-1]",
          "cihazlar[1] ve cihazlar[5]",
          "cihazlar[0] ve cihazlar[5]",
          "cihazlar[1] ve cihazlar[-1]",
        ],
        answer: 0,
        explanation:
          "Python'da indeksler 0'dan başlar (ilk eleman [0]). Negatif indekslemede -1 daima son elemanı temsil eder.",
      },
      "Kolay seviye liste indeksleme sorusu.",
    ),
    s(
      "Mini quiz 2: append() metodunun etkisi",
      "quiz",
      {
        question:
          "portlar = [80, 443]\nportlar.append(22)\nİşleminden sonra len(portlar) ve portlar[-1] değerleri ne olur?",
        options: [
          "Uzunluk 3, son eleman 22",
          "Uzunluk 2, son eleman 443",
          "Uzunluk 3, son eleman 80",
          "Hata verir, listeye sayı eklenemez",
        ],
        answer: 0,
        explanation:
          "append() elemanı listenin sonuna ekler. Eleman sayısı 2'den 3'e çıkar ve son eleman (-1) 22 olur.",
      },
      "Kolay-orta seviye append() ve len() sorusu.",
    ),
    s(
      "Mini quiz 3: Liste dilimleme aralığı",
      "quiz",
      {
        question:
          "sayilar = [10, 20, 30, 40, 50]\nprint(sayilar[1:4]) ifadesinin çıktısı nedir?",
        options: [
          "[20, 30, 40]",
          "[10, 20, 30, 40]",
          "[20, 30, 40, 50]",
          "[20, 30]",
        ],
        answer: 0,
        explanation:
          "Dilimleme [1:4], 1. indeksten başlar (20), 4. indekse kadar (4. indeks olan 50 hariç) alır: [20, 30, 40].",
      },
      "Orta seviye dilimleme (slicing) kavrama sorusu.",
    ),
    s(
      "Mini quiz 4: Döngü ve toplayıcı izleme",
      "quiz",
      {
        question:
          "veri = [2, 5, 1]\ntoplam = 0\nfor x in veri:\n    toplam += x * 2\nprint(toplam)\nProgramın çıktısı nedir?",
        options: ["16", "8", "20", "14"],
        answer: 0,
        explanation:
          "Döngüde: 2*2=4, 5*2=10, 1*2=2 toplanır. toplam = 4 + 10 + 2 = 16 olur.",
      },
      "Orta-zor seviye döngü ve liste içi işlem sorusu.",
    ),
    s(
      "Mini quiz 5: BGT Kara liste filtreleme analizi",
      "quiz",
      {
        question:
          "kara = ['10.0.0.1', '192.168.1.5']\ngelen = ['10.0.0.1', '8.8.8.8', '192.168.1.5']\nengellenen = []\nfor ip in gelen:\n    if ip in kara:\n        engellenen.append(ip)\nlen(engellenen) sonucu nedir?",
        options: ["2", "1", "3", "0"],
        answer: 0,
        explanation:
          "gelen listesindeki '10.0.0.1' ve '192.168.1.5' kara listede bulunduğu için if şartı True olur ve engellenen listesine eklenir. Toplam 2 IP engellenmiştir.",
      },
      "Zor seviye liste filtreleme ve güvenlik kurgusu sorusu.",
    ),
    s(
      "Mini quiz 6: 2 Boyutlu matris hücre erişimi",
      "quiz",
      {
        question:
          "matris = [[10, 20, 30], [40, 50, 60], [70, 80, 90]]\nprint(matris[1][2]) ifadesinin ekrana yazdıracağı değer nedir?",
        options: ["60", "50", "20", "80"],
        answer: 0,
        explanation:
          "matris[1], 1. indeksteki satırı ([40, 50, 60]) seçer. matris[1][2] ise bu satırdaki 2. indeksteki elemanı (60) döndürür.",
      },
      "2D dizi çift indeks kavrama sorusu.",
    ),
    s(
      "Mini quiz 7: 3 Boyutlu dizide toplam eleman sayısı",
      "quiz",
      {
        question:
          "2 Veri Merkezi Şubesi, her şubede 3 Sunucu Kabini ve her kabinde 4 Sensör bulunan 3D bir listede (2x3x4) iç içe 3 döngü toplam kaç adımda tamamlanır?",
        options: ["24 adım", "9 adım", "14 adım", "18 adım"],
        answer: 0,
        explanation:
          "3 boyutlu yapıda toplam hücre sayısı ve döngü iterasyon adedi boyutların çarpımıdır: 2 x 3 x 4 = 24 adım.",
      },
      "3D dizi boyut mantığı ve döngü karmaşıklığı sorusu.",
    ),
    s(
      "Hafta 5: Kazanım kontrolü",
      "outcomes",
      {
        lead: "Diziler ve veri işleme konusunun ardından şu 3 kanıtı kendi kodunla göster:",
        items: [
          "Birden fazla veriyi tek bir liste (dizi) yapısında saklar ve indeksle erişir.",
          "for döngüsü ve if koşulları ile liste elemanlarını filtreler ve arama yapar.",
          "Dinamik liste metotlarını (append, remove, len) güvenlik senaryolarında uygular.",
        ],
      },
      "Kazanım kontrolü: Öğrencilerin listeleri döngü ve koşullarla birleştiren kodlarını değerlendirin.",
    ),
  ],
  6: [
    outcomes(6),
    think(
      "print() Sadece Basit Bir Ekrana Yazma Aracı mıdır?",
      "Python'a ilk başladığımızda print('Merhaba Dünya') yazdık. Ancak profesyonel bir siber güvenlik analisti terminalde log üretirken, ağ tablosu çizerken veya anlık tarama yaparken print()'i nasıl bir silaha dönüştürür?",
      "print() yalnızca çıktı vermez; sep ile özel veri formatları (IP/tarih/CSV), end ile satır içi ilerleme çubukları, f-string ile matematiksel hesaplamalar ve hizalama ile konsol gösterge panelleri (CLI dashboards) inşa eder.",
      "Öğrencilerin print()'e bakış açısını 'yeni başlayan komutu'ndan 'profesyonel terminal aracı' seviyesine taşıyın.",
    ),
    cards(
      "print() Fonksiyonunun Gizli Parametreleri: sep ve end",
      [
        [
          "sep (Separator / Ayraç)",
          "Varsayılanı boşluktur (' '). sep='.' ile IP (192.168.1.1), sep=':' ile zaman, sep=' | ' ile güvenlik log formatı oluşturur.",
        ],
        [
          "end (Satır Sonu Belirteci)",
          "Varsayılanı yeni satırdır ('\\n'). end='' veya end='... ' yazıldığında alt satıra geçmez, bir sonraki çıktıyı aynı satıra ekler.",
        ],
        [
          "Çoklu Argüman Desteği",
          "print('IP:', ip, 'Port:', port) şeklinde sınırsız sayıda değişkeni otomatik aralıklarla tek hamlede basar.",
        ],
        [
          "flush=True (Tamponu Boşaltma)",
          "Canlı sayaç veya tarama durumlarında çıktının bellekte beklemeden anında ekrana düşmesini sağlar.",
        ],
      ],
      "Terminal çıktılarını kontrol etme sanatı.",
      "sep ve end parametrelerinin güvenlik loglarındaki rollerini gösterin.",
    ),
    cards(
      "f-string (Format String) Süper Güçleri",
      [
        [
          "f'...' Devrimi (Python 3.6+)",
          "Metnin başına küçük f koyarak süslü parantezler {} içine doğrudan değişken ve ifadeler yazılır.",
        ],
        [
          "İfade ve Metot Çalıştırma",
          "Süslü parantez içinde doğrudan kod çalışır: {len(parola)}, {sayi * 2}, {kullanici.strip().upper()}.",
        ],
        [
          "Hassasiyet Formatı (.2f)",
          "Kayan noktalı sayıları virgülden sonra sınırlandırma: {oran * 100:.2f} -> %4.57 gibi temiz rapor çıktısı.",
        ],
        [
          "Hızlı Debugging ({degisken=})",
          "Python 3.8+: print(f'{token=}') yazdığınızda ekrana token='BGT_SECRET' şeklinde adı ve değeriyle basar!",
        ],
      ],
      "Python'un en güçlü ve modern metin biçimlendiricisi.",
      "Eski % ve .format() yöntemleri yerine modern f-string kullanımını benimsetin.",
    ),
    cards(
      "CLI Güvenlik Tablosu: Hizalama ve Sayı Tabanları",
      [
        [
          "Sola Yasla ({degisken:<15})",
          "Metni soldan 15 karakterlik bir sütun içine yerleştirir, sağı boşlukla doldurur.",
        ],
        [
          "Sağa Yasla ({degisken:>10})",
          "Sayısal değerleri veya durum kodlarını sağa yaslayarak düzgün sütunlar oluşturur.",
        ],
        [
          "Ortala ({degisken:^8})",
          "Port veya protokol adlarını sütunun tam ortasına hizalar.",
        ],
        [
          "Hex (#06x) ve Binary (016b)",
          "Ağ baytlarını onaltılık (0x01bb) veya ikili bitler (0000000110111011) olarak terminalde görselleştirir.",
        ],
      ],
      "Konsolda profesyonel SOC gösterge panelleri ve tablolar.",
      "Terminalde hizalı sütunlar üretmenin konsol araçlarındaki önemini açıklayın.",
    ),
    run(
      "Uygulama: print() ve f-string Ustalığı",
      "print_fstring_mastery",
      "sep, end, f-string hesaplama, hizalama ve taban dönüştürme demosu.",
      "# Hizalama genişliklerini ve sep ayracını değiştirerek dene.",
      "Öğrencilere terminalde tablo oluşturmanın ve debug çıktısı almanın pratikliğini gösterin.",
    ),
    think(
      "Fonksiyonlar Neden Gereklidir?",
      "Aynı port kontrolünü veya parola denetimini programın 10 farklı yerinde kopyala-yapıştır yaparsak ne gibi güvenlik ve bakım sorunları yaşarız?",
      "Kod tekrarı (WET) kural değişiminde hatalara yol açar. Bir yerde düzeltilen açık diğer 9 yerde unutulur. Fonksiyonlar kodu tek bir merkezde toplar (DRY prensibi) ve tek noktadan güncellemeyi sağlar.",
      "Öğrencilere 'Don't Repeat Yourself' (DRY) prensibini ve bakım maliyetini anlatın.",
    ),
    cards(
      "Fonksiyonların Temel Avantajları",
      [
        [
          "Problem Parçalama (Decomposition)",
          "Büyük ve karmaşık bir problemi bağımsız, yönetilebilir küçük alt problemlere böler.",
        ],
        [
          "Yeniden Kullanılabilirlik (Reusability)",
          "Bir kez yazılan mantık, programın herhangi bir yerinde tek satırla defalarca çağrılır.",
        ],
        [
          "Birim Test Edilebilirlik (Testability)",
          "Her fonksiyon tek bir işi yapar; bu sayede bağımsız birim testlerle (unit test) kolayca doğrulanır.",
        ],
        [
          "Soyutlama (Abstraction)",
          "Fonksiyonun iç detaylarını bilmeden yalnızca ne girdi alıp ne çıktı verdiğini bilmek yeterlidir.",
        ],
      ],
      "Yazılım mühendisliğinin ve modüler güvenliğin temeli.",
      "Karmaşık sistemlerin fonksiyonel yapı taşlarıyla nasıl güvenli hale geldiğini açıklayın.",
    ),
    cards(
      "Fonksiyon Tanımlama Sözdizimi",
      [
        [
          "def anahtarı",
          "Python'a yeni bir fonksiyon tanımlandığını bildirir (define sözcüğünün kısaltması).",
        ],
        [
          "Fonksiyon Adı",
          "Yapılan işi net açıklayan yılan_yazimi (snake_case) ad verilir.",
        ],
        [
          "Parametreler",
          "Fonksiyonun işini yapmak için dışarıdan beklediği girdi değişkenleri.",
        ],
        [
          "Gövde (Body)",
          "Girintili (indentation) blok içinde yürütülen komutlar bütünü.",
        ],
      ],
      "def fonksiyon_adi(parametre1, parametre2):",
      "Fonksiyon tanımlandığında çalışmaz; ancak çağrıldığında (call) yürütülür.",
    ),
    exercise(
      "Soru & Çözüm 1: İlk Fonksiyon Tanımlama",
      "Soru: Verilen kullanıcı adı ve rolünü ekrana biçimlendirilmiş olarak yazdıran 'kullanici_karsila' fonksiyonunu tanımlayıp iki farklı kullanıcı için çağırınız.",
      "def kullanici_karsila(kullanici_adi, rol):\n    print('Sisteme hoş geldiniz:', kullanici_adi)\n    print('Mevcut rolünüz:', rol)\n\nkullanici_karsila('Ahmet', 'Operatör')\nkullanici_karsila('Zeynep', 'Güvenlik Yöneticisi')",
      "Parametrelerin fonksiyon çağrılırken sırayla argümanlarla eşleştiğini vurgulayın.",
    ),
    run(
      "Uygulama 1: Parametreli Fonksiyon Çağrısı",
      "def_greet",
      "def ve argüman aktarımı ile kullanıcı karşılama demosu.",
      "# Fonksiyona 3. bir kullanıcı çağrısı ekle.",
      "Fonksiyon çağrısının akışını Pyodide üzerinde adım adım izletin.",
    ),
    cards(
      "print() ile return Arasındaki Hayati Fark",
      [
        [
          "print() (Ekrana Yazma)",
          "Yalnızca terminale metin basar. Üretilen değeri bellekte tutmaz. Geriye None döner.",
        ],
        [
          "return (Değer Döndürme)",
          "Fonksiyonun çalışmasını bitirir ve hesaplanan değeri çağıran koda teslim eder. Değişkene atanabilir.",
        ],
        [
          "Boru Hattı (Pipeline)",
          "return edilen değer başka bir fonksiyona girdi olarak aktarılabilir; print edilen değer aktarılamaz.",
        ],
        [
          "Erken Çıkış (Guard Clause)",
          "Fonksiyon içinde koşul sağlandığı anda return ile erken çıkış yapılarak gereksiz işlemler önlenir.",
        ],
      ],
      "Programlamanın en sık karıştırılan iki kavramı.",
      "print'in son kullanıcıya, return'ün ise programın kendisine hizmet ettiğini vurgulayın.",
    ),
    think(
      "return Sonrası Komutlar Çalışır mı?",
      "def test():\n    return 'TAMAM'\n    print('Bu satır çalışır mı?')\nfonksiyonu çağrıldığında ne olur?",
      "print satırı asla çalışmaz! return komutu fonksiyonun yürütülmesini anında sonlandırır ve kontrolü çağıran satıra devreder. return altındaki kodlar 'ölü kod' (unreachable code) haline gelir.",
      "Öğrencilere return'ün fonksiyon için nihai çıkış kapısı olduğunu hatırlatın.",
    ),
    exercise(
      "Soru & Çözüm 2: Değer Döndüren Fonksiyon",
      "Soru: Kendisine verilen bir tam sayının karesini hesaplayıp return eden ve sayının çift olup olmadığını (True/False) döndüren iki ayrı fonksiyon yazınız.",
      "def kare_al(sayi):\n    return sayi * sayi\n\ndef cift_mi(sayi):\n    return sayi % 2 == 0\n\nx = 6\nprint('Kare:', kare_al(x), '| Çift mi?:', cift_mi(x))",
      "return sayesinde sonucun print veya başka matematik ifadelerine doğrudan gömülebildiğine dikkat çekin.",
    ),
    run(
      "Uygulama 2: return ile Hesaplama",
      "calc_return",
      "Hesaplanan değeri return ile döndürüp değişkene aktarma demosu.",
      "# Tek sayı girdiğinde cift_mi sonucunu gözlemle.",
      "return ifadesinin ürettiği değeri değişkende saklama mantığını gösterin.",
    ),
    cards(
      "Varsayılan (Default) Parametreler",
      [
        [
          "Tanımlama",
          "def baglanti(ip, port=80): şeklinde parametreye varsayılan bir değer atanır.",
        ],
        [
          "Opsiyonel Çağrı",
          "Argüman girilmezse varsayılan değer devreye girer. Girilirse yeni değer geçerli olur.",
        ],
        [
          "Sıralama Kuralı",
          "Varsayılan değere sahip parametreler her zaman parametre listesinin SONUNDA yer almalıdır.",
        ],
        [
          "İsimlendirilmiş Argüman",
          "baglanti('10.0.0.1', port=443) şeklinde argüman adı belirtilerek çağrılabilir.",
        ],
      ],
      "Esnek ve savunmacı API tasarımı.",
      "Ağ protokollerinde standart portların varsayılan parametrelerle nasıl yönetildiğini anlatın.",
    ),
    exercise(
      "Soru & Çözüm 3: Varsayılan Parametreli URL Oluşturucu",
      "Soru: IP, port (varsayılan: 80) ve protokol (varsayılan: 'HTTP') alıp 'protokol://ip:port' string'i döndüren fonksiyonu kodlayınız.",
      "def baglanti_olustur(ip, port=80, protokol='HTTP'):\n    return f'{protokol}://{ip}:{port}'\n\nprint(baglanti_olustur('192.168.1.1'))\nprint(baglanti_olustur('10.0.0.1', port=443, protokol='HTTPS'))",
      "Varsayılan değerlerin gereksiz parametre tekrarını nasıl önlediğini gösterin.",
    ),
    run(
      "Uygulama 3: Varsayılan Parametreler",
      "default_params",
      "Ağ bağlantı dizgisi üretici fonksiyon demosu.",
      "# Farklı bir port ve protokol argümanı ile test et.",
      "Override (üzerine yazma) davranışını sınıfta deneyin.",
    ),
    cards(
      "Değişken Kapsamı: Yerel (Local) vs Genel (Global)",
      [
        [
          "Yerel (Local) Kapsam",
          "Fonksiyon içinde tanımlanan değişkenler sadece o fonksiyon çalışırken vardır. Fonksiyon bitince bellekten silinir.",
        ],
        [
          "Genel (Global) Kapsam",
          "Fonksiyonların dışında tanımlanan değişkenlerdir. Program boyunca yaşar.",
        ],
        [
          "İsim Çakışması",
          "Yerel değişken, aynı ada sahip genel değişkeni fonksiyon içinde maskeler (gölgeler).",
        ],
        [
          "Küresel Değişken Tehlikesi",
          "Fonksiyonların dışarıdaki global değişkenleri değiştirmesi yan etkilere (side-effects) ve güvenlik açıklarına yol açar.",
        ],
      ],
      "Bellek yönetimi ve temiz fonksiyon sınırları.",
      "LEGB (Local, Enclosing, Global, Built-in) arama sırasını özetleyin.",
    ),
    think(
      "Neden Global Değişkenlerden Kaçınmalıyız?",
      "Bir güvenlik sisteminde tüm fonksiyonlar ortak tek bir global 'kullanici_yetkisi' değişkenini değiştirirse ne tür güvenlik zaafiyetleri doğar?",
      "Yarış durumu (race condition), beklenmeyen durum bozulması ve yetki yükseltme (privilege escalation) açıkları doğar. Güvenli tasarımda veriler fonksiyonlara parametre olarak verilmeli ve sonuçlar return ile döndürülmelidir.",
      "Saf fonksiyon (pure function) yaklaşımını ve yan etkisiz kodu açıklayın.",
    ),
    run(
      "Uygulama 4: Değişken Kapsamı (Scope)",
      "scope_local_global",
      "Yerel ve genel değişkenlerin bellek yaşam döngüsü demosu.",
      "# Fonksiyon dışından yerel değişkene erişmeyi deneyerek hatayı gözlemle.",
      "NameError hatasını öğrencilerle birlikte inceleyin.",
    ),
    cards(
      "Birden Fazla Değer Döndürme (Tuple Unpacking)",
      [
        [
          "Sözdizimi",
          "return toplam, en_kucuk, en_buyuk şeklinde virgülle ayrılmış çoklu değer döner.",
        ],
        [
          "Paket Açma (Unpacking)",
          "a, b, c = fonksiyon() çağrısıyla dönen değerler sırasıyla değişkenlere dağıtılır.",
        ],
        [
          "Koleksiyon Özeti",
          "Büyük bir veri listesinden tek seferde özet istatistik üretirken çok kullanışlıdır.",
        ],
        [
          "Eşleşme Kuralı",
          "Sol taraftaki değişken sayısı, dönen eleman sayısıyla birebir eşit olmalıdır.",
        ],
      ],
      "Tek fonksiyondan çoklu sonuç alma tekniği.",
      "Python'un arka planda demet (tuple) oluşturduğunu ve paket açtığını gösterin.",
    ),
    exercise(
      "Soru & Çözüm 4: Paket Boyut İstatistikleri",
      "Soru: Kendisine verilen bayt listesinden toplam boyutu, minimum ve maksimum paket boyutunu aynı anda döndüren fonksiyonu yazınız.",
      "def paket_ozeti(paketler):\n    return sum(paketler), min(paketler), max(paketler)\n\ntoplam, kucuk, buyuk = paket_ozeti([64, 128, 1500])\nprint(f'Toplam: {toplam}, Min: {kucuk}, Max: {buyuk}')",
      "Tuple unpacking mekanizmasını tahtada gösterin.",
    ),
    run(
      "Uygulama 5: Çoklu Değer Döndürme",
      "multi_return",
      "Ağ trafiği paket istatistiklerini hesaplayıp dağıtma demosu.",
      "# Listeye yeni bir büyük paket ekleyip değerleri incele.",
      "Dönen değerlerin ayrı değişkenlere atanmasını inceletin.",
    ),
    cards(
      "Savunmacı Programlama: Guard Clause ile Doğrulama",
      [
        [
          "Guard Clause Prensibi",
          "Fonksiyonun en başında geçersiz durumları tespit edip hemen return False / None ile çıkmak.",
        ],
        [
          "İç İçe Koddan Kaçınma",
          "Derin if/else piramitleri yerine düz, temiz ve okunabilir fonksiyon gövdesi sağlar.",
        ],
        [
          "Tip ve Aralık Kontrolü",
          "isinstance() ile veri türünü, ardından sayısal aralığı doğrular.",
        ],
        [
          "Tek Sorumluluk (Single Responsibility)",
          "Bir fonksiyon yalnızca tek bir işi doğrulamalı veya hesaplamalıdır.",
        ],
      ],
      "Güvenli yazılım geliştirmenin temel yapı taşı.",
      "Erken çıkış yapmanın hata ihtimalini nasıl azalttığını açıklayın.",
    ),
    exercise(
      "Soru & Çözüm 5: Port Doğrulama Fonksiyonu",
      "Soru: Verilen portun 1 ile 65535 arasında bir tam sayı olup olmadığını doğrulayan ve ardından port kategorisini belirleyen iki fonksiyonu kodlayınız.",
      "def port_gecerli_mi(p):\n    return isinstance(p, int) and 1 <= p <= 65535\n\ndef kategori(p):\n    if not port_gecerli_mi(p): return 'GEÇERSİZ'\n    return 'Sistem' if p < 1024 else 'Kullanıcı'\n\nprint(kategori(80), kategori(70000))",
      "Bir fonksiyonun diğerini doğrulama için çağırma desenini vurgulayın.",
    ),
    run(
      "Uygulama 6: Port Doğrulayıcı ve Sınıflandırıcı",
      "port_validator",
      "Guard clause ile sınır denetimi ve port sınıflandırma demosu.",
      "# Sınır değerleri (0, 1, 65535, 65536) ile fonksiyonu sına.",
      "Sistem (well-known) ve kayıtlı port farklarını özetleyin.",
    ),
    cards(
      "Büyük Problemleri Parçalama (Top-Down Decomposition)",
      [
        [
          "1. Adım: Problemi Böl",
          "Karmaşık bir siber güvenlik gereksinimini (örn. Parola Güç Analizi) bağımsız kurallara böl.",
        ],
        [
          "2. Adım: Küçük Fonksiyonlar Yaz",
          "Her kural için tek bir fonksiyon yaz: uzunluk_kontrol(), rakam_kontrol(), sembol_kontrol().",
        ],
        [
          "3. Adım: Birleştirici Fonksiyon",
          "Tüm alt fonksiyonları çağıran ve genel skoru hesaplayan ana fonksiyonu oluştur.",
        ],
        [
          "4. Adım: Kolay Bakım ve Test",
          "Kural değiştiğinde yalnızca ilgili fonksiyonu güncelle, tüm sistemi bozma.",
        ],
      ],
      "Böl ve Yönet (Divide and Conquer) mimarisi.",
      "Monolitik kod yazmak yerine modüler fonksiyonlar geliştirmenin değerini vurgulayın.",
    ),
    run(
      "Uygulama 7: Modüler Parola Güç Analizi",
      "password_strength_func",
      "Problemi 4 küçük fonksiyona bölerek parola puanlama demosu.",
      "# Özel karakter listesine yeni semboller ekle.",
      "Her yardımcı fonksiyonun bağımsız test edilebilirliğini gösterin.",
    ),
    run(
      "Uygulama 8: Güvenlik Olayı Risk Hesaplayıcı",
      "incident_classifier",
      "Şiddet çarpanı, risk skoru ve aksiyon kararını fonksiyonlara dağıtma demosu.",
      "# Yeni bir tehdit türü ('Ransomware') ekleyerek fonksiyonu genişlet.",
      "Gerçek SOC senaryolarında fonksiyonel puanlama modellerini anlatın.",
    ),
    ai(
      "🤖 YZ ile Çalış: Fonksiyon Parçalama Refactoring",
      "Bana tek bir büyük fonksiyonda yazılmış karmaşık bir güvenlik kodu ver ve bunu tek sorumluluk prensibine göre nasıl 3 küçük fonksiyona ayırabileceğimi adım adım göster.",
      "Önce kendi fonksiyon taslağını kur, YZ'den birim test önerisi iste.",
      "Öğrencilere büyük fonksiyonları parçalama ve refactoring alışkanlığı kazandırın.",
    ),
    s(
      "Mini Quiz 1: Fonksiyon tanımlama sözdizimi",
      "quiz",
      {
        question:
          "Python'da bir fonksiyon tanımlamak için hangi anahtar sözcük kullanılır?",
        options: ["def", "function", "fn", "define"],
        answer: 0,
        explanation:
          "Python'da fonksiyonlar 'def' (define kısaltması) anahtar sözcüğü ile tanımlanır.",
      },
      "Temel sözdizimi sorusu.",
    ),
    s(
      "Mini Quiz 2: Parametre ve Argüman Eşleşmesi",
      "quiz",
      {
        question:
          "def topla(a, b):\n    return a + b\nprint(topla(3, 7)) ifadesinin çıktısı nedir?",
        options: ["10", "37", "None", "Hata"],
        answer: 0,
        explanation:
          "3 değeri a parametresine, 7 değeri b parametresine aktarılır. 3 + 7 = 10 hesaplanıp return edilir.",
      },
      "Temel argüman aktarım sorusu.",
    ),
    s(
      "Mini Quiz 3: return Olmayan Fonksiyonun Dönüş Değeri",
      "quiz",
      {
        question:
          "def selamla(isim):\n    print('Merhaba', isim)\nsonuc = selamla('Ali')\nprint(sonuc) ekrana ne yazar?",
        options: ["None", "Merhaba Ali", "Ali", "Hata"],
        answer: 0,
        explanation:
          "Fonksiyon içinde 'return' ifadesi bulunmazsa veya boş return kullanılırsa, Python otomatik olarak 'None' döndürür.",
      },
      "print vs return ayrımı sorusu.",
    ),
    s(
      "Mini Quiz 4: return ile Erken Çıkış (Early Return)",
      "quiz",
      {
        question:
          "def kontrol(sayi):\n    if sayi < 0:\n        return 'Negatif'\n    return 'Pozitif'\nprint(kontrol(-5)) çıktısı nedir?",
        options: ["Negatif", "Pozitif", "Negatif\nPozitif", "None"],
        answer: 0,
        explanation:
          "sayi < 0 koşulu sağlandığı için ilk return çalışır ve fonksiyon hemen sonlanır. İkinci return çalışmaz.",
      },
      "Guard clause mantığı sorusu.",
    ),
    s(
      "Mini Quiz 5: Varsayılan (Default) Parametre Davranışı",
      "quiz",
      {
        question:
          "def baglan(ip, port=22):\n    return f'{ip}:{port}'\nprint(baglan('10.0.0.1')) ifadesinin sonucu nedir?",
        options: [
          "'10.0.0.1:22'",
          "'10.0.0.1:80'",
          "'10.0.0.1'",
          "Hata: eksik argüman",
        ],
        answer: 0,
        explanation:
          "port parametresi çağrıda belirtilmediği için tanımlanan varsayılan değeri (22) alır.",
      },
      "Default parametre sorusu.",
    ),
    s(
      "Mini Quiz 6: Yerel (Local) Değişken Kapsamı",
      "quiz",
      {
        question:
          "def hesapla():\n    gizli_anahtar = 999\nhesapla()\nprint(gizli_anahtar) satırı çalıştırılırsa ne olur?",
        options: [
          "NameError: name 'gizli_anahtar' is not defined",
          "999",
          "None",
          "0",
        ],
        answer: 0,
        explanation:
          "gizli_anahtar değişkeni yerel kapsamda (fonksiyon içinde) tanımlanmıştır. Fonksiyon dışında erişilemez.",
      },
      "Scope ve NameError sorusu.",
    ),
    s(
      "Mini Quiz 7: Çoklu Değer Döndürme (Unpacking)",
      "quiz",
      {
        question:
          "def min_max(liste):\n    return min(liste), max(liste)\nkucuk, buyuk = min_max([10, 5, 25])\nprint(buyuk) ekrana ne yazar?",
        options: ["25", "5", "10", "(5, 25)"],
        answer: 0,
        explanation:
          "Fonksiyon (5, 25) döndürür. kucuk=5, buyuk=25 olarak paket açılır. buyuk değeri 25'tir.",
      },
      "Tuple unpacking sorusu.",
    ),
    s(
      "Mini Quiz 8: Fonksiyon İçinde Fonksiyon Çağırma",
      "quiz",
      {
        question:
          "def iki_kat(x):\n    return x * 2\ndef kare_iki_kat(x):\n    return iki_kat(x) ** 2\nprint(kare_iki_kat(3)) sonucu nedir?",
        options: ["36", "18", "12", "9"],
        answer: 0,
        explanation:
          "kare_iki_kat(3) fonksiyonu iki_kat(3)'ü çağırır. iki_kat(3) = 6 döner. 6 ** 2 = 36 elde edilir.",
      },
      "Modüler çağrı zinciri sorusu.",
    ),
    s(
      "Mini Quiz 9: BGT IP Oktet Doğrulama Fonksiyonu",
      "quiz",
      {
        question:
          "def oktet_gecerli(oktet):\n    if not oktet.isdigit():\n        return False\n    deger = int(oktet)\n    return 0 <= deger <= 255\nprint(oktet_gecerli('300')) çıktısı nedir?",
        options: ["False", "True", "ValueError", "None"],
        answer: 0,
        explanation:
          "'300' rakamlardan oluşur (isdigit=True) fakat 300 <= 255 koşulunu sağlamadığı için False döner.",
      },
      "BGT veri doğrulama sorusu.",
    ),
    s(
      "Mini Quiz 10: Zor / BGT Parola Güç Puanı Analizi",
      "quiz",
      {
        question:
          "def puan(p):\n    skor = 0\n    if len(p) >= 8: skor += 1\n    if any(c.isdigit() for c in p): skor += 1\n    return skor\nprint(puan('Bgt2026')) sonucu nedir?",
        options: ["1", "2", "0", "8"],
        answer: 0,
        explanation:
          "'Bgt2026' 7 karakterdir (len >= 8 False, +0). Rakam içerir ('2', '0', '2', '6' True, +1). Toplam skor 1 olur.",
      },
      "Zor seviye sınır ve mantık analizi sorusu.",
    ),
    s(
      "Hafta 6: Kazanım kontrolü",
      "outcomes",
      {
        lead: "Fonksiyonlarla problem parçalama konusunun ardından şu 3 kanıtı kendi kodunla göster:",
        items: weeks[5].outcomes,
      },
      "Kazanım kontrolü: Öğrencilerin fonksiyonları savunmacı ve modüler tarzda kurgulamasını değerlendirin.",
    ),
  ],
  7: [
    outcomes(7),
    think(
      "Siber Güvenlikte Metinler (String) Neden Bu Kadar Önemlidir?",
      "Web siteleri, güvenlik duvarları, işletim sistemleri ve saldırganlar arasındaki tüm iletişim metinlerden oluşur. Metin analizi bilmeyen bir siber güvenlik uzmanı neyi kaçırır?",
      "Log dosyalarını, HTTP isteklerini, kimlik doğrulama paketlerini ve zararlı kod imzalarını anlamlandıramaz. Saldırı tespit sistemleri (IDS/IPS) özünde ileri düzey metin işleme motorlarıdır.",
      "Metinlerin güvenliğin ana iletişim dili olduğunu öğrencilere vurgulayın.",
    ),
    cards(
      "String Temelleri: İndeksleme ve Dilimleme",
      [
        [
          "0 Tabanlı İndeksleme",
          "Metnin her bir karakterine pozitif [0, 1, 2...] veya negatif [-1, -2...] indeksle erişilir.",
        ],
        [
          "Dilimleme (Slicing)",
          "metin[basla:dur:adim] sözdizimi ile belirli bir karakter parçası güvenle kopyalanır.",
        ],
        [
          "Değiştirilemezlik (Immutability)",
          "String'lerin bir karakteri doğrudan metin[0] = 'X' ile değiştirilemez! Yeni bir metin üretilir.",
        ],
        [
          "len() Fonksiyonu",
          "Metnin toplam karakter adedini tam sayı olarak verir.",
        ],
      ],
      "Karakter dizisi olarak metin mantığı.",
      "String'lerin bellekte sabit (immutable) tutulduğunu açıklayın.",
    ),
    exercise(
      "Soru & Çözüm 1: String İndeksleme ve Dilimleme",
      "Soru: 'BGT-2026-SEC' metninin ilk karakterini, son karakterini, yıl kısmını ('2026') ve tersini ekrana yazdıran program.",
      "kod = 'BGT-2026-SEC'\nprint('İlk:', kod[0], '| Son:', kod[-1])\nprint('Yıl:', kod[4:8], '| Ters:', kod[::-1])",
      "kod[4:8] diliminde 4 dahil, 8 hariçtir.",
    ),
    run(
      "Uygulama 1: String İndeksleme ve Dilimleme",
      "str_indexing_slicing",
      "Metin indeksleme, dilimleme ve ters çevirme demosu.",
      "# Kendi adın ve okul numaranla dilimleme aralıklarını dene.",
      "Negatif indeksleme ve ters çevirme pratiği yaptırın.",
    ),
    cards(
      "Büyük/Küçük Harf ve Temizleme Metotları",
      [
        [
          "strip(), lstrip(), rstrip()",
          "Metnin başındaki ve sonundaki boşluk, tab ve satır sonu (\\n) karakterlerini budar.",
        ],
        [
          "upper() ve lower()",
          "Tüm harfleri BÜYÜK veya küçük harfe çevirir. Case-insensitive karşılaştırmanın anahtarıdır.",
        ],
        [
          "capitalize() ve title()",
          "İlk harfi veya her kelimenin baş harfini büyük yapar.",
        ],
        [
          "Temizlik Önceliği",
          "Kullanıcıdan input alındığında her zaman önce .strip().lower() yapılmalıdır!",
        ],
      ],
      "Girdi sanitizasyonu ve standartlaştırma.",
      "Güvenlik kontrollerinde küçük-büyük harf bypass açıklarını anlatın.",
    ),
    exercise(
      "Soru & Çözüm 2: Güvenli Kullanıcı Rolü Doğrulama",
      "Soru: Kullanıcıdan alınan '  aDMin  ' şeklindeki kirli rol bilgisini temizleyip büyük/küçük harf fark etmeksizin 'admin' ise onay veren kodu yazınız.",
      "rol = input('Rol: ').strip().lower()\nif rol == 'admin':\n    print('ONAY: Yönetici yetkisi verildi.')\nelse:\n    print('RED: Yetkisiz rol.')",
      "strip().lower() zincirleme metot (method chaining) kullanımını gösterin.",
    ),
    run(
      "Uygulama 2: Temizleme ve Harf Dönüşümü",
      "str_case_strip",
      "strip, upper, lower ve vaka duyarsız kontrol demosu.",
      "# Boşluklu ve karışık büyük/küçük harfli girişler dene.",
      "repr() fonksiyonu ile görünmez boşlukları terminalde fark ettirin.",
    ),
    cards(
      "Metin Sorgulama ve İmza Tarama",
      [
        [
          "startswith(onek)",
          "Metnin belirtilen ön ekle başlayıp başlamadığını kontrol eder (True/False). Örn: 'https://'",
        ],
        [
          "endswith(sonek)",
          "Metnin belirtilen son ekle bitip bitmediğini denetler. Örn: '.php', '.exe', '.tar.gz'",
        ],
        [
          "isdigit(), isalpha()",
          "Yalnızca rakamlardan mı yoksa harflerden mi oluştuğunu denetler.",
        ],
        [
          "in / not in Operatörü",
          "Metin içinde saldırı payload'ı (örn: \"' OR '1'='1\", '<script>') geçip geçmediğini tek hamlede arar.",
        ],
      ],
      "Saldırı imzası yakalama araçları.",
      "Zararlı dosya yükleme ve web zafiyeti taraması ile ilişkilendirin.",
    ),
    exercise(
      "Soru & Çözüm 3: Protokol ve Uzantı Doğrulama",
      "Soru: Bir URL'nin 'https://' ile başlayıp başlamadığını ve dosya adının '.tar.gz' ile bitip bitmediğini denetleyen program.",
      "url = 'https://guvenlik.com'\ndosya = 'backup.tar.gz'\nprint('Güvenli web mi?:', url.startswith('https://'))\nprint('Sıkıştırılmış arşiv mi?:', dosya.endswith('.tar.gz'))",
      "startswith ve endswith metotlarının Boolean döndürdüğünü belirtin.",
    ),
    run(
      "Uygulama 3: Metin Sorgulama ve İmza Denetimi",
      "str_inspection",
      "startswith, endswith, isdigit ve in ile saldırı tespiti demosu.",
      "# SQL enjeksiyon imzasını değiştirip alarmı gözlemle.",
      "Kurgusal SQL injection imzasının nasıl tetiklendiğini inceleyin.",
    ),
    cards(
      "Metin Parçalama (split) ve Birleştirme (join)",
      [
        [
          "metin.split(ayrac)",
          "Metni belirtilen karaktere göre dilimleyip bir string listesi döndürür. Varsayılanı boşluktur.",
        ],
        [
          "Log Formatı Ayrıştırma",
          "IP, zaman damgası ve HTTP isteklerini ayırmak için split(' ') kullanılır.",
        ],
        [
          "ayrac.join(liste)",
          "Liste içindeki metinleri aralarına belirtilen ayracı koyarak tek bir string yapar.",
        ],
        [
          "CSV / TSV İşleme",
          "Virgül (,) veya noktalı virgül (;) ile ayrılmış veri satırlarını alanlara döker.",
        ],
      ],
      "Yapılandırılmamış metni veriye dönüştürme.",
      "join() metodunun bir string metodu olduğunu vurgulayın.",
    ),
    exercise(
      "Soru & Çözüm 4: IP Oktetlerine Ayırma",
      "Soru: '192.168.1.100' IP adresini split('.') ile oktet listesine ayıran ve 1. oktet ile son okteti yazdıran program.",
      "ip = '192.168.1.100'\noktetler = ip.split('.')\nprint('Oktetler:', oktetler)\nprint('Ağ:', oktetler[0], '| Host:', oktetler[-1])",
      "split çıktısının bir liste olduğunu ve elemanların string kaldığını unutmayın.",
    ),
    run(
      "Uygulama 4: split() ve join() ile Veri Dönüşümü",
      "str_split_join",
      "IP parçalama, CSV ayıklama ve liste birleştirme demosu.",
      "# Farklı bir ayraç (| veya :) ile parçalama dene.",
      "join ve split simetrisini inceletin.",
    ),
    cards(
      "Hassas Veri Maskeleme ve Sanitizasyon (replace)",
      [
        [
          "replace(eski, yeni)",
          "Metin içindeki belirli bir karakter veya kelime öbeğini yenisiyle değiştirir.",
        ],
        [
          "Maskeleme",
          "Kredi kartı, TC kimlik ve parola gibi hassas verilerin son birkaç hanesi hariç yıldızlanması (****).",
        ],
        [
          "Log Temizleme",
          "Loglara açık olarak düşmüş parolaların sansürlenmesi (pass=********).",
        ],
        [
          "Path Traversal Filtresi",
          "Dosya yollarındaki tehlikeli '../' üst dizine çıkma ifadelerinin temizlenmesi.",
        ],
      ],
      "Veri güvenliği ve gizlilik uyumluluğu (KVKK/GDPR).",
      "replace metodunun yeni bir kopya ürettiğini, orijinal metni bozmadığını hatırlatın.",
    ),
    run(
      "Uygulama 5: replace() ile Hassas Veri Maskeleme",
      "str_replace_mask",
      "Kart maskeleme, log parola gizleme ve yol temizleme demosu.",
      "# Maskeleme karakterini '#' yaparak çıktıyı incele.",
      "PII (Kişisel Tanımlanabilir Bilgi) güvenliğini sınıfta tartışın.",
    ),
    cards(
      "Log Nedir? Standart Log Mimarisi",
      [
        [
          "Olay Günlüğü (Log)",
          "İşletim sistemlerinin, sunucuların ve güvenlik duvarlarının kaydettiği zaman damgalı olay izi.",
        ],
        [
          "Web Sunucu Logu (Access Log)",
          "Format: IP - [Zaman] 'Metod URL Protokol' Durum_Kodu Boyut",
        ],
        [
          "Kimlik Doğrulama Logu (Auth Log)",
          "SSH ve sistem oturum açma, parola deneme ve yetki yükseltme kayıtları.",
        ],
        [
          "Güvenlik Operasyonları (SOC)",
          "Milyonlarca log satırı filtrelenerek brute-force, sızıntı ve ihlaller tespit edilir.",
        ],
      ],
      "Siber güvenliğin en kritik veri kaynağı.",
      "Adli bilişim (forensics) süreçlerinde logların hukuki delil niteliğini anlatın.",
    ),
    exercise(
      "Soru & Çözüm 5: Tek Satır Web Logu Ayrıştırma",
      "Soru: '192.168.1.45 - [20/Oct/2026:10:15:30] \"POST /login HTTP/1.1\" 401 230' satırından IP, URL ve durum kodunu ayıklayınız.",
      "satir = '192.168.1.45 - [20/Oct/2026:10:15:30] \"POST /login HTTP/1.1\" 401 230'\nparcalar = satir.split(' ')\nprint('IP:', parcalar[0], '| URL:', parcalar[4], '| Durum:', parcalar[6])",
      "Boşluk indekslerini sayarak alanları doğru seçmeyi gösterin.",
    ),
    run(
      "Uygulama 6: Tek Satır Web Logu Ayrıştırıcı",
      "log_single_line_parser",
      "Web erişim logunu parçalara ayırıp durum kodunu inceleme demosu.",
      "# Durum kodunu 200 yaparak uyarı koşulunu sına.",
      "strip('[]') ve strip('\"') ile temizlemeyi gösterin.",
    ),
    cards(
      "HTTP Durum Kodları ile Tehdit Analizi",
      [
        [
          "200 OK",
          "İstek başarılı. Normal kullanıcı trafiği veya başarılı oturum.",
        ],
        [
          "401 Unauthorized",
          "Kimlik doğrulama başarısız. Hatalı parola denemesi veya brute-force atağı.",
        ],
        [
          "403 Forbidden",
          "Erişim yasaklandı. Yetkisiz alana sızma veya WAF (Güvenlik Duvarı) engeli.",
        ],
        [
          "404 Not Found",
          "Sayfa yok. Gizli dizin/dosya taraması (Dirb/Gobuster) şüphesi.",
        ],
        [
          "500 Internal Server Error",
          "Sunucu çöktü. Başarılı bir SQL enjeksiyonu veya bellek taşması belirtisi.",
        ],
      ],
      "Log analizinde durum kodlarının anlamı.",
      "Durum kodlarının güvenlik analistine hangi ipuçlarını verdiğini özetleyin.",
    ),
    run(
      "Uygulama 7: Başarısız SSH Oturumlarını Filtreleme",
      "log_failed_login_filter",
      "Auth log listesinden 'Failed password' olaylarını ve saldıran IP'leri süzme demosu.",
      "# Listeye yeni bir başarısız oturum ekleyip sayacı kontrol et.",
      "Brute force saldırılarının log izlerini analiz edin.",
    ),
    run(
      "Uygulama 8: Web Loglarında Siber Saldırı İmzası Tespiti",
      "log_attack_detector",
      "XSS, SQLi ve Path Traversal imzalarını sözlük ile otomatik tarama demosu.",
      "# Yeni bir şüpheli payload (<iframe veya /etc/passwd) ile test et.",
      "WAF (Web Application Firewall) çalışma mantığını görselleştirin.",
    ),
    run(
      "Uygulama 9: IP İstek Yoğunluğu ve DoS Analizi",
      "log_ip_counter",
      "Log satırlarından IP frekansı hesaplama ve tepe anomaliyi tespit etme demosu.",
      "# Bir IP'nin istek sayısını artırarak alarmı tetikle.",
      "Rate-limiting (hız sınırlama) eşiklerini tartışın.",
    ),
    ai(
      "🤖 YZ ile Çalış: Düzenli İfade (Regex) ve Log Analizi",
      "Bana Apache access log satırlarını ayıklamak için basit string split yöntemleri ile Python re (Regex) modülünün karşılaştırmasını yap ve avantajlarını açıkla.",
      "YZ'den log analizi için pratik bir Python fonksiyon taslağı iste.",
      "Regex'e sezgisel bir giriş yaparak string metotlarının gücünü pekiştirin.",
    ),
    s(
      "Mini Quiz 1: String Negatif İndeksleme",
      "quiz",
      {
        question: "s = 'CYBER'\nprint(s[-2]) ifadesinin çıktısı nedir?",
        options: ["E", "R", "B", "Y"],
        answer: 0,
        explanation:
          "Negatif indeksler sağdan başlar: s[-1]='R', s[-2]='E' olur.",
      },
      "String indeks sorusu.",
    ),
    s(
      "Mini Quiz 2: String Dilimleme (Slicing)",
      "quiz",
      {
        question:
          "log = 'FIREWALL_ALERT'\nprint(log[0:4]) ekrana ne yazdırır?",
        options: ["FIRE", "FIREW", "FIR", "WALL"],
        answer: 0,
        explanation:
          "0:4 dilimi 0, 1, 2 ve 3. indekslerdeki karakterleri (F, I, R, E) alır. 4. indeks dahil değildir.",
      },
      "Dilimleme sınır sorusu.",
    ),
    s(
      "Mini Quiz 3: strip() Metodunun İşlevi",
      "quiz",
      {
        question:
          "ham = '   admin\\n'\nsonuc = ham.strip()\nlen(sonuc) değeri kaçtır?",
        options: ["5", "8", "6", "9"],
        answer: 0,
        explanation:
          "ham metninin başındaki 3 boşluk ve sonundaki '\\n' strip() ile atılır. Geriye 'admin' (5 karakter) kalır.",
      },
      "strip ve len sorusu.",
    ),
    s(
      "Mini Quiz 4: lower() ile Vaka Duyarsız Kontrol",
      "quiz",
      {
        question:
          "kullanici = 'Admin'\nif kullanici.lower() == 'admin':\n    print('Geçerli')\nçıktısı nedir?",
        options: ["Geçerli", "Hata", "Çıktı vermez", "False"],
        answer: 0,
        explanation:
          "'Admin'.lower() 'admin' üretir ve eşitlik sağlandığı için 'Geçerli' yazdırılır.",
      },
      "lower() kontrol sorusu.",
    ),
    s(
      "Mini Quiz 5: startswith() ve endswith() Kontrolü",
      "quiz",
      {
        question:
          "dosya = 'zararli_kod.py.exe'\nprint(dosya.endswith('.py')) sonucu nedir?",
        options: ["False", "True", "None", "Hata"],
        answer: 0,
        explanation:
          "Dosya adı '.py' ile değil, en sonda '.exe' ile bittiği için endswith('.py') False döndürür.",
      },
      "Çift uzantılı dosya aldatmacası sorusu.",
    ),
    s(
      "Mini Quiz 6: split() ile Metni Listeye Ayırma",
      "quiz",
      {
        question:
          "veri = '10.0.0.1:8080'\nparcalar = veri.split(':')\nprint(parcalar[1]) çıktısı nedir?",
        options: ["'8080'", "'10.0.0.1'", "['8080']", "8080"],
        answer: 0,
        explanation:
          "veri.split(':') metni ':' karakterinden bölerek ['10.0.0.1', '8080'] listesini oluşturur. 1. indeksteki eleman '8080' string'idir.",
      },
      "split ve liste indeksi sorusu.",
    ),
    s(
      "Mini Quiz 7: replace() ile Karakter Değiştirme",
      "quiz",
      {
        question:
          "metin = 'admin--bgt'\nprint(metin.replace('--', '__')) çıktısı nedir?",
        options: ["'admin__bgt'", "'admin--bgt'", "'adminbgt'", "Hata"],
        answer: 0,
        explanation:
          "replace('--', '__') metindeki '--' kısmını '__' ile değiştirerek 'admin__bgt' üretir.",
      },
      "replace sorusu.",
    ),
    s(
      "Mini Quiz 8: in Operatörü ile Saldırı İmzası Arama",
      "quiz",
      {
        question:
          "istek = 'GET /login?user=admin OR 1=1'\nif 'OR 1=1' in istek:\n    print('ALARM')\nekrana ne yazar?",
        options: ["ALARM", "Hiçbir şey", "False", "Hata"],
        answer: 0,
        explanation:
          "'OR 1=1' alt metni istek içinde birebir bulunduğu için in operatörü True döndürür ve ALARM basılır.",
      },
      "in operatörü ile imza denetimi sorusu.",
    ),
    s(
      "Mini Quiz 9: BGT Apache Log Durum Kodu Ayıklama",
      "quiz",
      {
        question:
          "log = '10.0.0.5 - - [20/Oct/2026] \"GET /secret HTTP/1.1\" 403 512'\nkod = log.split(' ')[8]\nprint(kod) çıktısı nedir?",
        options: ["403", "512", "GET", "/secret"],
        answer: 0,
        explanation:
          "Boşluklara göre split edildiğinde: [0]:'10.0.0.5', [1]:'-', [2]:'-', [3]:'[20/Oct/2026]', [4]:'\"GET', [5]:'/secret', [6]:'HTTP/1.1\"', [7]:(durum öncesi boşluk yönetimi değil doğrudan 8. alanda 403 yer alır).",
      },
      "Log parsing alan indeksi sorusu.",
    ),
    s(
      "Mini Quiz 10: Zor / BGT Log Filtreleme ve Sayaç Hesabı",
      "quiz",
      {
        question:
          "loglar = ['401 Fail', '200 OK', '401 Fail', '403 Forbidden']\nsayac = 0\nfor l in loglar:\n    if l.startswith('401'):\n        sayac += 1\nprint(sayac) sonucu kaçtır?",
        options: ["2", "1", "3", "4"],
        answer: 0,
        explanation:
          "loglar listesinde '401 Fail' ile başlayan 2 adet kayıt vardır. sayac döngü sonunda 2 olur.",
      },
      "Zor seviye log filtreleme ve sayaç sorusu.",
    ),
    s(
      "Hafta 7: Kazanım kontrolü",
      "outcomes",
      {
        lead: "String işlemleri ve basit log analizi konusunun ardından şu 3 kanıtı kendi kodunla göster:",
        items: weeks[6].outcomes,
      },
      "Kazanım kontrolü: Öğrencilerin metin metotlarını log filtreleme senaryolarında başarıyla kullanmasını değerlendirin.",
    ),
  ],
};
