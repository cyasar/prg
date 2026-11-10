# Kapsülleme (encapsulation): veriyi metotlarla korumak
import hashlib


class Hesap:
    MAKS_DENEME = 3   # sınıf niteliği: tüm hesaplar için ortak kural

    def __init__(self, kullanici, parola):
        self.kullanici = kullanici
        # Parola asla düz metin saklanmaz; özet (hash) değeri saklanır.
        self._parola_ozeti = self._ozetle(parola)
        self._hatali_deneme = 0     # _ ile başlayan ad: "sınıf içinde kullan" uyarısı

    def _ozetle(self, metin):
        return hashlib.sha256(metin.encode("utf-8")).hexdigest()

    def kilitli_mi(self):
        return self._hatali_deneme >= Hesap.MAKS_DENEME

    def giris_yap(self, parola):
        if self.kilitli_mi():
            return "KİLİTLİ: Yöneticiye başvurun"
        if self._ozetle(parola) == self._parola_ozeti:
            self._hatali_deneme = 0
            return "Giriş başarılı"
        self._hatali_deneme += 1
        kalan = Hesap.MAKS_DENEME - self._hatali_deneme
        return f"Hatalı parola (kalan hak: {kalan})"


hesap = Hesap("ayse", "Bgt!2026")
denemeler = ["12345", "Bgt!2026", "qwerty", "admin", "parola", "Bgt!2026"]
for parola in denemeler:
    print(f"{parola:<9} -> {hesap.giris_yap(parola)}")

print("Hesap kilitli mi?:", hesap.kilitli_mi())
# Yalnızca gösterim amaçlı: normalde _ ile başlayan niteliğe dışarıdan dokunulmaz.
print("Saklanan özet (ilk 16 karakter):", hesap._parola_ozeti[:16] + "...")
