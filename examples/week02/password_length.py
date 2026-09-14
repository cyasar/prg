# Yalnızca eğitimsel uzunluk kontrolü. Gerçek parola kullanmayın.
# Bu örnek bir parola güvenlik veya kimlik doğrulama sistemi değildir.
metin = input("Kurgusal deneme metni: ")
if len(metin) >= 8:
    print("Uzunluk koşulu sağlandı")
else:
    print("En az 8 karakter gerekli")
