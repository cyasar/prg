# Rol ve işlem izni karar tablosu modeli
rol = input("Rol (admin / ogretmen / ogrenci): ").strip().lower()
islem = input("İşlem (oku / yaz / sil): ").strip().lower()

if rol == "admin":
    print("İzin verildi: Tam yetki")
elif rol == "ogretmen":
    if islem in ["oku", "yaz"]:
        print("İzin verildi: Öğretmen okuma/yazma yetkisi")
    else:
        print("Red: Öğretmen silme işlemi yapamaz")
elif rol == "ogrenci":
    if islem == "oku":
        print("İzin verildi: Öğrenci okuma yetkisi")
    else:
        print("Red: Öğrenci yalnızca okuma yapabilir")
else:
    print("Hata: Tanımsız kullanıcı rolü")
