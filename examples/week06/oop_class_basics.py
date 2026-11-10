# Sınıf (class) ve nesne (object) kavramına ilk adım
class Kullanici:
    """Sisteme kayıtlı bir kullanıcıyı temsil eden kalıp (şablon)."""

    def __init__(self, ad, rol):
        # __init__: nesne oluşturulurken otomatik çalışan kurucu metot
        self.ad = ad          # nitelik (attribute)
        self.rol = rol
        self.aktif = True

    def tanit(self):
        # metot: sınıfın içinde tanımlanan fonksiyon
        durum = "aktif" if self.aktif else "pasif"
        return f"{self.ad} ({self.rol}) - hesap {durum}"

    def pasif_yap(self):
        self.aktif = False


# Aynı kalıptan iki farklı nesne (örnek / instance) üretiyoruz
k1 = Kullanici("Ayşe", "admin")
k2 = Kullanici("Mehmet", "analist")

print(k1.tanit())
print(k2.tanit())

k2.pasif_yap()             # yalnızca k2 nesnesinin durumu değişir
print("Değişiklikten sonra:")
print(k1.tanit())
print(k2.tanit())

print("k1 nesnesinin türü:", type(k1).__name__)
print("k1.ad niteliği:", k1.ad)
