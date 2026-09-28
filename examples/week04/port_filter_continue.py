# continue ile bilinen güvenli portları atlayıp inceleme
guvenli_portlar = [80, 443]

for port in range(78, 83):
    if port in guvenli_portlar:
        continue
    print("İnceleniyor (standart dışı port):", port)
