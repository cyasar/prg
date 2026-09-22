# Hatalı deneme sayacı ve güvenlik kilidi kurgusu
deneme_sayisi = int(input("Hatalı deneme sayısı: "))
parola = input("Parola: ")

if deneme_sayisi >= 3:
    print("HESAP KİLİTLİ: Çok fazla hatalı deneme yapıldı")
elif parola == "Guvenli123":
    print("Giriş başarılı: Hoş geldiniz")
else:
    kalan = 3 - (deneme_sayisi + 1)
    print("Hatalı parola! Kalan deneme hakkı:", kalan)
