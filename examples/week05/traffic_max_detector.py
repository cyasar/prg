# Döngü ile listede en büyük değeri (anomali tepe noktasını) bulma
paket_boyutlari = [120, 450, 1500, 8900, 320, 1400]

en_buyuk = paket_boyutlari[0]

for boyut in paket_boyutlari:
    if boyut > en_buyuk:
        en_buyuk = boyut

print("İncelenen paketler:", paket_boyutlari)
print("Tepe paket boyutu (olası anomali):", en_buyuk, "bayt")
