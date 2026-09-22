# Kullanıcı türü ve dosya boyutuna göre kota tüketimi
kullanici_tipi = input("Kullanıcı türü (standart / premium): ").strip().lower()
boyut_mb = int(input("İndirilecek veri (MB): "))

if kullanici_tipi == "premium":
    kota = 5000
else:
    kota = 500

if boyut_mb <= 0:
    print("Hata: Geçersiz veri boyutu")
elif boyut_mb > kota:
    print("İşlem engellendi: Kota aşıldı! (Mevcut kota:", kota, "MB)")
else:
    kalan = kota - boyut_mb
    print("İndirme başladı. Kalan kota:", kalan, "MB")
