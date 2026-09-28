# while ve break ile PIN deneme kontrolü
kalan_hak = 3
dogru_pin = "1923"
giris_basarili = False

while kalan_hak > 0:
    tahmin = input("4 haneli PIN girin: ").strip()
    if tahmin == dogru_pin:
        giris_basarili = True
        print("PIN doğrulandı! Güvenli kasa açıldı.")
        break
    else:
        kalan_hak -= 1
        if kalan_hak > 0:
            print("Hatalı PIN! Kalan hakkınız:", kalan_hak)

if not giris_basarili:
    print("3 kez hatalı deneme! Kart bloke edildi.")
