# return anahtar sözcüğü ile değer döndürme ve sonucu değişkene aktarma
def kare_al(sayi):
    return sayi * sayi

def cift_mi(sayi):
    return sayi % 2 == 0

x = int(input("Bir sayı girin: "))
kare = kare_al(x)
durum = cift_mi(x)

print(f"Girdi: {x}")
print(f"Karesi: {kare}")
print(f"Çift sayı mı?: {durum}")
