# Birden fazla değer döndürme (Tuple unpacking)
def paket_istatistikleri(paketler):
    toplam = sum(paketler)
    en_kucuk = min(paketler)
    en_buyuk = max(paketler)
    ortalama = round(toplam / len(paketler), 1)
    return toplam, en_kucuk, en_buyuk, ortalama

veri = [128, 512, 1400, 64, 1500]
toplam_b, min_b, max_b, ort_b = paket_istatistikleri(veri)

print("İncelenen paketler:", veri)
print(f"Toplam Boyut: {toplam_b} bayt")
print(f"En Küçük: {min_b} bayt | En Büyük: {max_b} bayt")
print(f"Ortalama: {ort_b} bayt")
