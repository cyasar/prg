# Sayı dizisi üzerinde for döngüsü ve istatistik
hatali_girisler = [3, 1, 0, 7, 2, 14, 4]

toplam = 0
supheli_gunler = 0

for sayi in hatali_girisler:
    toplam += sayi
    if sayi >= 5:
        supheli_gunler += 1

ortalama = toplam / len(hatali_girisler)
print("Toplam hatalı giriş:", toplam)
print(f"Haftalık ortalama: {ortalama:.2f}")
print("Eşik (5) üstü şüpheli gün sayısı:", supheli_gunler)
