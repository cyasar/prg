# 2 Boyutlu Dizi: Rol Tabanlı Erişim Kontrol Matrisi (ACL)
# İzinler: [Okuma(0), Yazma(1), Silme(2)]
yetki_matrisi = [
    [1, 0, 0],  # Misafir: sadece Okuma
    [1, 1, 0],  # Operatör: Okuma + Yazma
    [1, 1, 1]   # Güvenlik Yöneticisi: Okuma + Yazma + Silme
]

roller = ["Misafir", "Operatör", "Yönetici"]
islemler = ["Okuma", "Yazma", "Silme"]

rol_id = int(input("Rol seçin (0: Misafir, 1: Operatör, 2: Yönetici): "))
islem_id = int(input("İşlem seçin (0: Okuma, 1: Yazma, 2: Silme): "))

if 0 <= rol_id <= 2 and 0 <= islem_id <= 2:
    yetki = yetki_matrisi[rol_id][islem_id]
    if yetki == 1:
        print(f"ONAY: {roller[rol_id]} kullanıcısı için {islemler[islem_id]} izni VERİLDİ.")
    else:
        print(f"RED: {roller[rol_id]} kullanıcısının {islemler[islem_id]} yetkisi YOK!")
else:
    print("Hata: Geçersiz rol veya işlem numarası.")
