# split() ile metni listeye ayırma ve join() ile listeyi birleştirme
ip_adresi = "192.168.1.100"
oktetler = ip_adresi.split(".")
print("IP Oktetleri listesi:", oktetler)
print("1. Oktet (Ağ sınıfı):", oktetler[0])

csv_satiri = "ahmet;10.0.0.5;SSH;Yetkili"
alanlar = csv_satiri.split(";")
print(f"Kullanıcı: {alanlar[0]} | IP: {alanlar[1]} | Protokol: {alanlar[2]}")

yasakli_kelimeler = ["root", "admin", "guest"]
filtre_kurali = " | ".join(yasakli_kelimeler)
print("Oluşturulan regex kuralı:", filtre_kurali)
