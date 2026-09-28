# Sayaç ve Toplayıcı kalıbı ile ağ trafiği analizi
paket_adedi = int(input("İncelenecek paket adedi: "))
toplam_bayt = 0
buyuk_paket_sayaci = 0

for i in range(1, paket_adedi + 1):
    boyut = int(input(f"Paket {i} boyutu (bayt): "))
    toplam_bayt += boyut
    if boyut > 1000:
        buyuk_paket_sayaci += 1

print("Toplam aktarılan veri:", toplam_bayt, "bayt")
print("1000 bayt üzeri şüpheli paket sayısı:", buyuk_paket_sayaci)
