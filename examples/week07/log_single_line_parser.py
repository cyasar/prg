# Basit web sunucu log satırını parçalama (Log Parsing)
log_satiri = '192.168.1.45 - [20/Oct/2026:10:15:30] "POST /api/login HTTP/1.1" 401 230'

parcalar = log_satiri.split(" ")
ip = parcalar[0]
zaman = parcalar[2].strip("[]")
metod = parcalar[3].strip('"')
url = parcalar[4]
durum_kodu = int(parcalar[6])
boyut = int(parcalar[7])

print("Kaynak IP    :", ip)
print("Zaman Damgası:", zaman)
print("HTTP Metodu  :", metod)
print("Hedef URL    :", url)
print("Durum Kodu   :", durum_kodu)
print("Yanıt Boyutu :", boyut, "bayt")

if durum_kodu == 401:
    print("[UYARI]: Başarısız oturum denemesi tespit edildi!")
