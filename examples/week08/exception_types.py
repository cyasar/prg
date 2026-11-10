# Sık karşılaşılan hata (exception) türlerini tanıyalım ve kontrollü yakalayalım
portlar = [22, 80, 443]
kullanicilar = {"ayse": "admin", "mehmet": "analist"}

print("1) ValueError: metin sayıya çevrilemiyor")
try:
    sayi = int("on iki")
except ValueError as hata:
    print("   Yakalandı:", hata)

print("2) ZeroDivisionError: sıfıra bölme")
try:
    oran = 10 / 0
except ZeroDivisionError as hata:
    print("   Yakalandı:", hata)

print("3) IndexError: listede olmayan indeks")
try:
    print(portlar[5])
except IndexError as hata:
    print("   Yakalandı:", hata)

print("4) KeyError: sözlükte olmayan anahtar")
try:
    rol = kullanicilar["zeynep"]
except KeyError as hata:
    print("   Yakalandı: anahtar bulunamadı ->", hata)

print("5) TypeError: uyumsuz türler")
try:
    mesaj = "Port: " + 443
except TypeError as hata:
    print("   Yakalandı:", hata)

print("6) FileNotFoundError: olmayan dosya")
try:
    with open("hafta08_calisma/olmayan_dosya.txt", encoding="utf-8") as f:
        f.read()
except FileNotFoundError:
    print("   Yakalandı: dosya bulunamadı")

print("Program çökmeden sona ulaştı.")
