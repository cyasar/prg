# Guard Clause (Erken Çıkış) yaklaşımı
yas = int(input("Yaş: "))
bilet_var_mi = input("Bilet var mı? (e/h): ").strip().lower()

# Erken kontrollerle geçersiz durumları önceden ayıklama
if yas < 18:
    print("Erişim reddedildi: 18 yaşından küçükler giremez")
elif bilet_var_mi != "e":
    print("Erişim reddedildi: Geçerli biletiniz yok")
else:
    print("Erişim onaylandı: Hoş geldiniz")
