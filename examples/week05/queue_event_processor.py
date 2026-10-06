# While döngüsü ve liste ile FIFO güvenlik olay kuyruğu işleme
olay_kuyrugu = ["SYN_FLOOD", "SSH_BRUTEFORCE", "PORT_SCAN", "SQL_INJECTION"]
islenen_olaylar = []
kritik_sayisi = 0

print("Başlangıç kuyruk boyutu:", len(olay_kuyrugu))

while len(olay_kuyrugu) > 0:
    suanki_olay = olay_kuyrugu.pop(0)  # Kuyruğun başındaki ilk olayı al ve çıkar
    islenen_olaylar.append(suanki_olay)
    if suanki_olay in ["SYN_FLOOD", "SQL_INJECTION"]:
        kritik_sayisi += 1

print("İşlenen olay sayısı:", len(islenen_olaylar))
print("Tespit edilen kritik tehdit:", kritik_sayisi)
print("Kalan kuyruk:", olay_kuyrugu)
