# Kullanıcı adı boşluk temizleme ve varlık kontrolü
veri = input("Kullanıcı adı: ")
temiz = veri.strip()

if temiz == "":
    print("Hata: Kullanıcı adı boş bırakılamaz")
else:
    print("Kullanıcı adı geçerli:", temiz)
