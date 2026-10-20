# Basit log analizi: IP bazlı istek sayma ve DoS şüphesi tespiti
erisim_logu = [
    "192.168.1.5 - GET /api/data",
    "10.0.0.99 - GET /index.html",
    "10.0.0.99 - POST /login",
    "10.0.0.99 - GET /dashboard",
    "192.168.1.5 - GET /profile",
    "10.0.0.99 - GET /reports",
    "172.16.0.1 - GET /health"
]

ip_sayilari = {}

for satir in erisim_logu:
    ip = satir.split(" - ")[0]
    if ip in ip_sayilari:
        ip_sayilari[ip] += 1
    else:
        ip_sayilari[ip] = 1

print("IP İstek İstatistikleri:")
for ip, adet in ip_sayilari.items():
    print(f"  {ip}: {adet} istek")

en_cok_istek_yapan = max(ip_sayilari, key=ip_sayilari.get)
print(f"En yoğun trafik üreten IP: {en_cok_istek_yapan} ({ip_sayilari[en_cok_istek_yapan]} istek)")
if ip_sayilari[en_cok_istek_yapan] >= 4:
    print("[DİKKAT]: Anormal istek yoğunluğu (Olası DoS taraması)!")
