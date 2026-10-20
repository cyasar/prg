# Harf boyutu dönüşümleri (upper, lower) ve boşluk temizleme (strip)
kirli_girdi = "   Admin_BGT   \n"
temiz = kirli_girdi.strip()

print("Orijinal ham girdi:", repr(kirli_girdi))
print("strip() sonrası:", repr(temiz))
print("upper() ile büyük:", temiz.upper())
print("lower() ile küçük:", temiz.lower())

kullanici_rolu = "  aDMin  ".strip().lower()
if kullanici_rolu == "admin":
    print("Doğrulama başarılı: Tam yönetici erişimi verildi.")
else:
    print("Erişim reddedildi.")
