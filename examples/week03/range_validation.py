# Ağ portu geçerlilik aralığı kontrolü (1–65535)
port = int(input("Hedef port: "))

if port < 1 or port > 65535:
    print("Hata: Port 1 ile 65535 arasında olmalıdır")
else:
    print("Port geçerli:", port)
