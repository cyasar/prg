# Kalıtım (inheritance): ortak özellikleri üst sınıfta toplama
class Cihaz:
    def __init__(self, ad, ip):
        self.ad = ad
        self.ip = ip

    def durum_raporu(self):
        return f"{self.ad:<10} {self.ip:<10} genel cihaz"


class Sunucu(Cihaz):                      # Sunucu, Cihaz'dan kalıtım alır
    def __init__(self, ad, ip, acik_portlar):
        super().__init__(ad, ip)          # üst sınıfın kurucusunu çağır
        self.acik_portlar = acik_portlar

    def durum_raporu(self):               # metodu yeniden tanımlama (override)
        riskli = 0
        for port in self.acik_portlar:
            if port in (21, 23, 445):
                riskli += 1
        return f"{self.ad:<10} {self.ip:<10} sunucu, {len(self.acik_portlar)} açık port, {riskli} riskli"


class Kamera(Cihaz):
    def __init__(self, ad, ip, varsayilan_parola):
        super().__init__(ad, ip)
        self.varsayilan_parola = varsayilan_parola

    def durum_raporu(self):
        uyari = "VARSAYILAN PAROLA!" if self.varsayilan_parola else "parola değiştirilmiş"
        return f"{self.ad:<10} {self.ip:<10} IP kamera, {uyari}"


envanter = [
    Sunucu("web-01", "10.0.0.10", [80, 443]),
    Sunucu("dosya-01", "10.0.0.20", [21, 445, 22]),
    Kamera("kamera-01", "10.0.1.5", True),
    Cihaz("yazici-01", "10.0.2.7"),
]

print("Envanter raporu:")
for cihaz in envanter:
    print(" ", cihaz.durum_raporu())     # aynı çağrı, nesneye göre farklı davranış

print("kamera-01 bir Cihaz mı?  :", isinstance(envanter[2], Cihaz))
print("yazici-01 bir Sunucu mu? :", isinstance(envanter[3], Sunucu))
