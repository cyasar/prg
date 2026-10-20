# String indeksleme, negatif indeks ve dilimleme (slicing)
kod = "BGT-2026-SEC"

print("Metin:", kod)
print("Uzunluk (len):", len(kod))
print("İlk karakter [0]:", kod[0])
print("Son karakter [-1]:", kod[-1])
print("Bölüm kodu [0:3]:", kod[0:3])
print("Yıl kısmı [4:8]:", kod[4:8])
print("Son takı [9:]:", kod[9:])
print("Tersten yazım [::-1]:", kod[::-1])
