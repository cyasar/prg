# Kurgusal paket filtreleme kuralı
ip = input("Kaynak IP: ").strip()
port = int(input("Hedef port: "))

# Basit yerel ağ kontrolü ve standart web portları
yerel_mi = ip.startswith("192.168.") or ip.startswith("10.")
guvenli_port_mu = port in [80, 443]

if yerel_mi and guvenli_port_mu:
    print("GÜVENLİK DUVARI: İZİN VERİLDİ (Yerel Web Trafiği)")
elif yerel_mi and not guvenli_port_mu:
    print("GÜVENLİK DUVARI: ENGEL (Yetkisiz Yerel Port)")
else:
    print("GÜVENLİK DUVARI: ENGEL (Bilinmeyen Dış Kaynak)")
