# Dinamik liste yönetimi: append ve remove
engellenen_portlar = [23, 25]
print("Başlangıç listesi:", engellenen_portlar)

yeni_port = int(input("Engellenecek yeni port: "))
engellenen_portlar.append(yeni_port)
print("Eklendikten sonra:", engellenen_portlar)

if 23 in engellenen_portlar:
    engellenen_portlar.remove(23)
    print("Telnet (23) listeden kaldırıldı:", engellenen_portlar)
