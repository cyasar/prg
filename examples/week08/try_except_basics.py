# try / except / else / finally ile kullanıcı girdisini güvenle işleme
def port_oku(metin):
    try:
        port = int(metin)                # ValueError oluşabilir
    except ValueError:
        print(f"Hata: '{metin}' bir sayı değil.")
        return None
    else:                                # hata OLUŞMAZSA çalışır
        if not 1 <= port <= 65535:
            print(f"Hata: {port} geçerli port aralığında değil.")
            return None
        print(f"Kabul: {port}")
        return port
    finally:                             # her durumda çalışır (return olsa bile)
        print("  [kontrol tamamlandı]")


gecerli = []
for sira in range(1, 4):
    metin = input(f"{sira}. port: ")
    print()
    sonuc = port_oku(metin)
    if sonuc is not None:
        gecerli.append(sonuc)

print("Geçerli portlar:", gecerli)
