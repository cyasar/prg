# While döngüsü ve indeks sayacı ile doğrusal liste araması
supheli_macler = ["00:1A:2B:3C:4D:5E", "AA:BB:CC:DD:EE:FF", "12:34:56:78:9A:BC"]
hedef_mac = input("Aranacak MAC adresi: ").strip().upper()

i = 0
bulundu = False
bulunan_indeks = -1

while i < len(supheli_macler):
    if supheli_macler[i] == hedef_mac:
        bulundu = True
        bulunan_indeks = i
        break  # Hedef bulunduğunda döngüyü erken sonlandır
    i += 1

if bulundu:
    print(f"ALARM: Şüpheli MAC bulundu! İndeks: {bulunan_indeks}")
else:
    print("GÜVENLİ: MAC adresi şüpheli listesinde yok.")
