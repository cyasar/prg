# Sayısal karakter denetimi ile güvenli int dönüşümü
giris = input("Port numarası girin: ").strip()

if not giris.isdigit():
    print("Hata: Yalnızca rakamlardan oluşan bir değer girilmelidir")
else:
    port = int(giris)
    print("Sayısal değer alındı:", port)
