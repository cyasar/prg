# for ve range ile hedef portları tarama simülasyonu
baslangic = int(input("Başlangıç portu: "))
bitis = int(input("Bitiş portu: "))
acik_portlar = [21, 22, 80, 443]

print("--- Tarama Başlatıldı ---")
for port in range(baslangic, bitis + 1):
    if port in acik_portlar:
        print(f"Port {port}: [AÇIK] Servis tespit edildi")
    else:
        print(f"Port {port}: [KAPALI]")
print("--- Tarama Tamamlandı ---")
