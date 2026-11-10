// Hafta 6 ek modülü: Nesneye Dayalı Programlamaya (sınıf ve nesne) giriş örnekleri.
import { example } from "./example-factory.js";

export const oopExamples = {
  oop_class_basics: example(
    "examples/week06/oop_class_basics.py",
    "# Sınıf (class) ve nesne (object) kavramına ilk adım\nclass Kullanici:\n    \"\"\"Sisteme kayıtlı bir kullanıcıyı temsil eden kalıp (şablon).\"\"\"\n\n    def __init__(self, ad, rol):\n        # __init__: nesne oluşturulurken otomatik çalışan kurucu metot\n        self.ad = ad          # nitelik (attribute)\n        self.rol = rol\n        self.aktif = True\n\n    def tanit(self):\n        # metot: sınıfın içinde tanımlanan fonksiyon\n        durum = \"aktif\" if self.aktif else \"pasif\"\n        return f\"{self.ad} ({self.rol}) - hesap {durum}\"\n\n    def pasif_yap(self):\n        self.aktif = False\n\n\n# Aynı kalıptan iki farklı nesne (örnek / instance) üretiyoruz\nk1 = Kullanici(\"Ayşe\", \"admin\")\nk2 = Kullanici(\"Mehmet\", \"analist\")\n\nprint(k1.tanit())\nprint(k2.tanit())\n\nk2.pasif_yap()             # yalnızca k2 nesnesinin durumu değişir\nprint(\"Değişiklikten sonra:\")\nprint(k1.tanit())\nprint(k2.tanit())\n\nprint(\"k1 nesnesinin türü:\", type(k1).__name__)\nprint(\"k1.ad niteliği:\", k1.ad)",
    "",
    "Ayşe (admin) - hesap aktif\nMehmet (analist) - hesap aktif\nDeğişiklikten sonra:\nAyşe (admin) - hesap aktif\nMehmet (analist) - hesap pasif\nk1 nesnesinin türü: Kullanici\nk1.ad niteliği: Ayşe\n",
    [
      "class Kullanici: satırı bir kalıp (şablon) tanımlar; henüz hiçbir nesne oluşmaz.",
      "__init__ kurucu metodu Kullanici(...) çağrıldığında otomatik çalışır ve self.ad, self.rol, self.aktif niteliklerini oluşturur.",
      "self, metodun hangi nesne için çalıştığını gösterir: k1.tanit() çağrısında self = k1 olur.",
      "k2.pasif_yap() yalnızca k2'nin aktif niteliğini değiştirir; her nesnenin kendi verisi vardır.",
    ],
  ),
  oop_firewall_rule: example(
    "examples/week06/oop_firewall_rule.py",
    "# Nesnelerle güvenlik duvarı kuralları: durum (veri) + davranış (metot) bir arada\nclass Kural:\n    def __init__(self, ad, port, eylem=\"IZIN\"):\n        self.ad = ad\n        self.port = port\n        self.eylem = eylem\n        self.eslesme_sayisi = 0\n\n    def eslesir_mi(self, port):\n        if self.port == port:\n            self.eslesme_sayisi += 1\n            return True\n        return False\n\n    def __str__(self):\n        # print(nesne) çağrıldığında bu metin gösterilir\n        return f\"[{self.eylem:<5}] {self.ad:<6} port {self.port}\"\n\n\nkurallar = [\n    Kural(\"SSH\", 22, \"ENGEL\"),\n    Kural(\"HTTP\", 80),\n    Kural(\"HTTPS\", 443),\n    Kural(\"SMB\", 445, \"ENGEL\"),\n]\n\ngelen_paketler = [443, 22, 80, 443, 445, 8080, 22]\n\nfor port in gelen_paketler:\n    karar = \"ENGEL\"   # Hiçbir kural eşleşmezse engelle (varsayılan ret / default deny)\n    for kural in kurallar:\n        if kural.eslesir_mi(port):\n            karar = kural.eylem\n            break\n    print(f\"Paket -> port {port:<5}: {karar}\")\n\nprint(\"Kural istatistikleri:\")\nfor kural in kurallar:\n    print(kural, \"| eşleşme:\", kural.eslesme_sayisi)",
    "",
    "Paket -> port 443  : IZIN\nPaket -> port 22   : ENGEL\nPaket -> port 80   : IZIN\nPaket -> port 443  : IZIN\nPaket -> port 445  : ENGEL\nPaket -> port 8080 : ENGEL\nPaket -> port 22   : ENGEL\nKural istatistikleri:\n[ENGEL] SSH    port 22 | eşleşme: 2\n[IZIN ] HTTP   port 80 | eşleşme: 1\n[IZIN ] HTTPS  port 443 | eşleşme: 2\n[ENGEL] SMB    port 445 | eşleşme: 1\n",
    [
      "Her Kural nesnesi kendi port, eylem ve eslesme_sayisi verisini taşır (durum).",
      "eslesir_mi() metodu hem karar verir hem de nesnenin sayacını günceller (davranış).",
      "Hiçbir kural eşleşmezse karar ENGEL kalır: güvenlikte 'varsayılan ret' (default deny) ilkesi.",
      "__str__ özel metodu print(kural) çağrısında okunabilir bir metin üretir.",
    ],
  ),
  oop_account_lockout: example(
    "examples/week06/oop_account_lockout.py",
    "# Kapsülleme (encapsulation): veriyi metotlarla korumak\nimport hashlib\n\n\nclass Hesap:\n    MAKS_DENEME = 3   # sınıf niteliği: tüm hesaplar için ortak kural\n\n    def __init__(self, kullanici, parola):\n        self.kullanici = kullanici\n        # Parola asla düz metin saklanmaz; özet (hash) değeri saklanır.\n        self._parola_ozeti = self._ozetle(parola)\n        self._hatali_deneme = 0     # _ ile başlayan ad: \"sınıf içinde kullan\" uyarısı\n\n    def _ozetle(self, metin):\n        return hashlib.sha256(metin.encode(\"utf-8\")).hexdigest()\n\n    def kilitli_mi(self):\n        return self._hatali_deneme >= Hesap.MAKS_DENEME\n\n    def giris_yap(self, parola):\n        if self.kilitli_mi():\n            return \"KİLİTLİ: Yöneticiye başvurun\"\n        if self._ozetle(parola) == self._parola_ozeti:\n            self._hatali_deneme = 0\n            return \"Giriş başarılı\"\n        self._hatali_deneme += 1\n        kalan = Hesap.MAKS_DENEME - self._hatali_deneme\n        return f\"Hatalı parola (kalan hak: {kalan})\"\n\n\nhesap = Hesap(\"ayse\", \"Bgt!2026\")\ndenemeler = [\"12345\", \"Bgt!2026\", \"qwerty\", \"admin\", \"parola\", \"Bgt!2026\"]\nfor parola in denemeler:\n    print(f\"{parola:<9} -> {hesap.giris_yap(parola)}\")\n\nprint(\"Hesap kilitli mi?:\", hesap.kilitli_mi())\n# Yalnızca gösterim amaçlı: normalde _ ile başlayan niteliğe dışarıdan dokunulmaz.\nprint(\"Saklanan özet (ilk 16 karakter):\", hesap._parola_ozeti[:16] + \"...\")",
    "",
    "12345     -> Hatalı parola (kalan hak: 2)\nBgt!2026  -> Giriş başarılı\nqwerty    -> Hatalı parola (kalan hak: 2)\nadmin     -> Hatalı parola (kalan hak: 1)\nparola    -> Hatalı parola (kalan hak: 0)\nBgt!2026  -> KİLİTLİ: Yöneticiye başvurun\nHesap kilitli mi?: True\nSaklanan özet (ilk 16 karakter): f09da01212e86370...\n",
    [
      "MAKS_DENEME sınıf niteliğidir; tüm Hesap nesneleri aynı kuralı paylaşır.",
      "Parola düz metin değil SHA-256 özeti olarak saklanır; karşılaştırma da özetler üzerinden yapılır.",
      "_hatali_deneme dışarıdan değil, yalnızca giris_yap() metodu üzerinden değişir: kapsülleme.",
      "Kilitlenen hesap doğru parola girilse bile açılmaz; kural sınıfın içinde korunur.",
    ],
  ),
  oop_inheritance_devices: example(
    "examples/week06/oop_inheritance_devices.py",
    "# Kalıtım (inheritance): ortak özellikleri üst sınıfta toplama\nclass Cihaz:\n    def __init__(self, ad, ip):\n        self.ad = ad\n        self.ip = ip\n\n    def durum_raporu(self):\n        return f\"{self.ad:<10} {self.ip:<10} genel cihaz\"\n\n\nclass Sunucu(Cihaz):                      # Sunucu, Cihaz'dan kalıtım alır\n    def __init__(self, ad, ip, acik_portlar):\n        super().__init__(ad, ip)          # üst sınıfın kurucusunu çağır\n        self.acik_portlar = acik_portlar\n\n    def durum_raporu(self):               # metodu yeniden tanımlama (override)\n        riskli = 0\n        for port in self.acik_portlar:\n            if port in (21, 23, 445):\n                riskli += 1\n        return f\"{self.ad:<10} {self.ip:<10} sunucu, {len(self.acik_portlar)} açık port, {riskli} riskli\"\n\n\nclass Kamera(Cihaz):\n    def __init__(self, ad, ip, varsayilan_parola):\n        super().__init__(ad, ip)\n        self.varsayilan_parola = varsayilan_parola\n\n    def durum_raporu(self):\n        uyari = \"VARSAYILAN PAROLA!\" if self.varsayilan_parola else \"parola değiştirilmiş\"\n        return f\"{self.ad:<10} {self.ip:<10} IP kamera, {uyari}\"\n\n\nenvanter = [\n    Sunucu(\"web-01\", \"10.0.0.10\", [80, 443]),\n    Sunucu(\"dosya-01\", \"10.0.0.20\", [21, 445, 22]),\n    Kamera(\"kamera-01\", \"10.0.1.5\", True),\n    Cihaz(\"yazici-01\", \"10.0.2.7\"),\n]\n\nprint(\"Envanter raporu:\")\nfor cihaz in envanter:\n    print(\" \", cihaz.durum_raporu())     # aynı çağrı, nesneye göre farklı davranış\n\nprint(\"kamera-01 bir Cihaz mı?  :\", isinstance(envanter[2], Cihaz))\nprint(\"yazici-01 bir Sunucu mu? :\", isinstance(envanter[3], Sunucu))",
    "",
    "Envanter raporu:\n  web-01     10.0.0.10  sunucu, 2 açık port, 0 riskli\n  dosya-01   10.0.0.20  sunucu, 3 açık port, 2 riskli\n  kamera-01  10.0.1.5   IP kamera, VARSAYILAN PAROLA!\n  yazici-01  10.0.2.7   genel cihaz\nkamera-01 bir Cihaz mı?  : True\nyazici-01 bir Sunucu mu? : False\n",
    [
      "class Sunucu(Cihaz): Sunucu, Cihaz sınıfının ad ve ip niteliklerini kalıtım yoluyla alır.",
      "super().__init__(ad, ip) üst sınıfın kurucusunu çağırarak ortak kodu tekrar yazmamızı önler.",
      "Her alt sınıf durum_raporu() metodunu kendine göre yeniden tanımlar (override).",
      "Döngüdeki aynı cihaz.durum_raporu() çağrısı nesnenin türüne göre farklı sonuç verir (çok biçimlilik).",
    ],
  ),
};
