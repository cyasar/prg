# Varsayılan (default) parametreler ve opsiyonel argüman yönetimi
def baglanti_olustur(ip, port=80, protokol="HTTP"):
    return f"{protokol}://{ip}:{port}"

# Varsayılan port (80) ve protokol (HTTP) kullanılır
url1 = baglanti_olustur("192.168.1.10")
# Port ve protokol elle ezilebilir (override)
url2 = baglanti_olustur("10.0.0.1", port=443, protokol="HTTPS")
url3 = baglanti_olustur("172.16.0.5", 8080)

print("Varsayılan bağlantı:", url1)
print("Güvenli bağlantı:", url2)
print("Özel port bağlantısı:", url3)
