# Nesnelerle güvenlik duvarı kuralları: durum (veri) + davranış (metot) bir arada
class Kural:
    def __init__(self, ad, port, eylem="IZIN"):
        self.ad = ad
        self.port = port
        self.eylem = eylem
        self.eslesme_sayisi = 0

    def eslesir_mi(self, port):
        if self.port == port:
            self.eslesme_sayisi += 1
            return True
        return False

    def __str__(self):
        # print(nesne) çağrıldığında bu metin gösterilir
        return f"[{self.eylem:<5}] {self.ad:<6} port {self.port}"


kurallar = [
    Kural("SSH", 22, "ENGEL"),
    Kural("HTTP", 80),
    Kural("HTTPS", 443),
    Kural("SMB", 445, "ENGEL"),
]

gelen_paketler = [443, 22, 80, 443, 445, 8080, 22]

for port in gelen_paketler:
    karar = "ENGEL"   # Hiçbir kural eşleşmezse engelle (varsayılan ret / default deny)
    for kural in kurallar:
        if kural.eslesir_mi(port):
            karar = kural.eylem
            break
    print(f"Paket -> port {port:<5}: {karar}")

print("Kural istatistikleri:")
for kural in kurallar:
    print(kural, "| eşleşme:", kural.eslesme_sayisi)
