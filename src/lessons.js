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
      : "Veri, Değişkenler ve Karar Veren Programlar",
    "outcomes",
    {
      lead:
        id === 1
          ? "Bilgisayara problemleri çözdürmeyi öğreneceğiz."
          : "Programlar bilgiyi nerede tutar ve bu bilgiyle nasıl karar verir?",
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
      "Mini quiz: Doğru dal",
      "quiz",
      {
        question:
          "notu = 50 iken if notu > 50: Geçti, else: Kaldı algoritması hangi sonucu verir?",
        options: ["Geçti", "Kaldı", "İki mesajı da verir"],
        answer: 1,
        explanation:
          "> koşulu eşitliği kapsamaz. Program Kaldı der. Gereksinim “50 ve üzeri” ise >= kullanılmalıdır.",
      },
      "Çıkan sonuç ile doğru olması gereken sonucu ayırın. Soru mevcut kodun ne yaptığını soruyor. Sonra öğrenci gereksinime uygun düzeltmeyi versin.",
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
};
