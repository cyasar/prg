// Tamamen kurgusal sınıf verileri. Gerçek kullanıcı veya sistem kaydı içermez.
export const loginEvents = [
  { time: "09:00", account: "ogrenci-01", success: false },
  { time: "09:01", account: "ogrenci-02", success: true },
  { time: "09:02", account: "ogrenci-01", success: false },
  { time: "09:04", account: "ogrenci-03", success: false },
  { time: "09:05", account: "ogrenci-01", success: false },
  { time: "09:07", account: "ogrenci-02", success: true },
];

export function summarizeLogins(events, threshold) {
  const counts = new Map();
  for (const event of events) {
    if (!counts.has(event.account)) counts.set(event.account, 0);
    if (!event.success)
      counts.set(event.account, counts.get(event.account) + 1);
  }
  return [...counts].map(([account, failures]) => ({
    account,
    failures,
    review: failures >= threshold,
  }));
}

export const backupDevices = [
  { name: "LAB-01", days: 0 },
  { name: "LAB-02", days: 3 },
  { name: "LAB-03", days: 1 },
  { name: "LAB-04", days: null },
  { name: "LAB-05", days: 5 },
  { name: "LAB-06", days: 0 },
];

export function backupStatus(days) {
  if (days === null) return "Veri eksik";
  return days > 1 ? "Kontrol et" : "Güncel";
}

export const originalText = "yedekleme=acik";
export const changedText = "yedekleme=kapali";
export async function sha256(text) {
  const digest = await globalThis.crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(text),
  );
  return Array.from(new Uint8Array(digest), (byte) =>
    byte.toString(16).padStart(2, "0"),
  ).join("");
}

export const motivationSlides = [
  {
    title: "Güvenliği anlamak için yazılımı anlamak",
    type: "motivation",
    variant: "purpose",
    lead: "Programlama, güvenlik bilgisini çalışan bir çözüme dönüştürme becerisidir.",
    prompt:
      "Bir uygulama yanlış kişiye dosya gösterirse, yazılımın hangi kararını incelemek istersin?",
    notes:
      "Bu bölümde öğrenci güvenliği yalnızca araç ekranlarını okuyarak öğrenmez; verinin nasıl işlendiğini, kuralların nasıl uygulandığını ve hataların nasıl oluştuğunu da anlamalıdır. Örneğin bir dosyaya erişim için kimlik ile yetki farklı sorulardır. Programlama bilgisi bu kararları okumayı, sınamayı ve iyileştirmeyi sağlar. Bu ilişki, bölümün analitik düşünme, uygulama ve güvenlik alanlarında yetkinlik hedeflerinin ders içindeki yorumudur; resmî bir yeterlilik listesi değildir. Öğrenciler bir dosya paylaşım uygulamasında girdiyi, kuralı ve testi sözlü olarak belirlesin.",
  },
  {
    title: "Kayıt kalabalığından anlam çıkar",
    type: "motivation",
    variant: "logs",
    lead: "Soru: Bu örnek zaman aralığında hangi hesabı incelemeye almalıyız?",
    prompt:
      "Önce elle say. Eşik 3 yerine 1 olursa hangi hesaplar listeye girer? Sonra dene.",
    notes:
      "Log, bir sistemin olay kaydıdır. Burada yalnızca ekrandaki 09:00–09:07 aralığındaki altı sentetik kayıt işlenir; gerçek bir izleme sistemi değildir. Algoritma: Her hesabın başarısız denemelerini say, seçilen eşikle karşılaştır, inceleme adaylarını göster. Eşik 3 iken ogrenci-01, eşik 1 iken ogrenci-01 ve ogrenci-03 aday olur. Tekrarlanan başarısızlık unutulan bir paroladan da kaynaklanabilir; saldırı kanıtı değildir. Öğrenci önce beklenen sonucu bulsun. Python ile ileride dosyayı okuyup aynı algoritmayı daha çok kayda uygulayabiliriz; veri kalitesi, zaman penceresi ve eşik kararını insan belirler.",
  },
  {
    title: "Bir dosyanın değiştiğini fark et",
    type: "motivation",
    variant: "integrity",
    lead: "Soru: Yedekleme ayarı, güvendiğimiz ilk kopyayla aynı mı?",
    prompt:
      "Ayarı değiştir, özetleri karşılaştır, sonra geri al. Farklı özet bize neyi söyler?",
    notes:
      "Özet (hash), veriden hesaplanan sabit uzunlukta bir değerdir. Bu demo bir dosyanın içeriğini temsil eden kısa metnin SHA-256 özetini tarayıcıda gerçekten hesaplar; kullanıcının dosyalarına erişmez. Python’da hashlib aynı tür hesaplama için kullanılabilir. Algoritma: Güvenilir başlangıç özetini al, güncel içeriğin özetini hesapla, karşılaştır, farklıysa incele. Farklı özet içerik değişikliğini gösterir; değişikliğin kötü amaçlı olduğunu tek başına göstermez. Başlangıç kopyasının da güvenilir olması gerekir. Burada kriptografi ayrıntısı veya parola saklama öğretilmez. Öğrenci sonucu görmeden tahmin etsin; aynı içeriğe dönünce özetin neden aynı olduğunu açıklasın.",
  },
  {
    title: "Tekrarlanan kontrolü bir kez tarif et",
    type: "motivation",
    variant: "automation",
    lead: "Görev: Laboratuvar cihazlarının yedekleme kayıtlarından kontrol listesi çıkar.",
    prompt:
      "LAB-04 için “güncel” diyebilir miyiz? Önce karar ver, ardından raporu oluştur.",
    notes:
      "Ekran altı cihazın kurgusal yedekleme kayıtlarını temsil eder. Sınıf kuralı: Son yedek 0 veya 1 gün önceyse güncel, 1 günden eskiyse kontrol et; tarih yoksa veri eksik. Bu eşik kurumsal politika değildir. Program gerçek cihazlara bağlanmaz ve yedeklerin geri yüklenebilirliğini doğrulamaz. Algoritma: Her kaydı oku, eksik alanı ayır, yaşı karşılaştır, rapora ekle. Yazılım uygulaması, bir kontrolün tekrar uygulanmasını ve aynı kurala göre raporlanmasını sağlar. Yanlış kuralı otomatikleştirmek hatayı tekrarlar; bu nedenle 0, 1, 2 ve eksik değerlerle test tasarlanır. YZ’ye “Kodu yazma; bu kuralın eksik ve sınır durumlarını düşünmem için sorular sor” istemini verin.",
  },
  {
    title: "Neden özellikle Python?",
    type: "motivation",
    variant: "python",
    lead: "Okunabilir kod + hazır veri araçları + küçük adımlarla çalışan bir çözüm.",
    prompt:
      "Bir görev seç. Girdiyi ve beklediğin çıktıyı kendi cümlelerinle söyle; sonra aracı incele.",
    notes:
      "Python’ın standart kütüphanesi bu örneklerde ek paket kurmadan kullanılabilir: csv tablo biçimindeki kayıtları okur/yazar, hashlib özet hesaplar, json yapılandırılmış veriyi Python verilerine dönüştürür ve tersini yapar. json bir ağ bağlantısı kurmaz; bir API’den alınmış örnek yanıtı çözümleyebilir. Hazır araçlar bütün problemi çözmez: hangi alanın gerekli olduğu, kural, eksik veri ve test hâlâ programcının sorumluluğudur. Başlangıçta bu adları ezberletmeyin. Öğrenci bir problem seçsin, sonra girdi → işlem → çıktı çizsin. Python her alanda tek seçenek değildir; burada algoritmayı uygulamaya dönüştürmek ve hızlı geri bildirim almak için ana öğrenme aracımızdır.",
  },
  {
    title: "Bugünkü küçük adım, dönem sonundaki aracın",
    type: "motivation",
    variant: "roadmap",
    lead: "Hedef: Kurgusal olay kayıtlarını okuyup gerekçeli bir kontrol raporu sunabilmek.",
    prompt:
      "🤖 YZ ile Çalış: “Kodu yazma. Seçtiğim kontrolün girdisini, kuralını ve üç testini bulmam için sorular sor.”",
    notes:
      "Bu yol, dersin mini projesi için örnek bir gelişim çizgisidir; bütün beceriler ilk hafta beklenmez. İlk iki hafta bir değeri alıp karar veririz, dördüncü hafta kararı tekrarlanan kayıtlara uygularız, sekizinci hafta dosyalardan veri okuruz, on üçüncü hafta testlerle sınarız. Son hafta Python’ın ürettiği örnek raporu HTML/CSS/JavaScript ile gösterebiliriz; backend veya canlı sistem entegrasyonu gerekmez. Öğrenci bugün bir soru ve beklenen bir sonuç yazabiliyorsa başlamıştır. Yazılım Uygulamaları çalışmalarında bu temeli problem parçalama, uygulama geliştirme, hata ayıklama ve kod açıklama için tekrar kullanacaktır. Başarı ölçütü kopyalanan satır sayısı değil, açıklanabilen ve sınanabilen çözümdür.",
  },
];
