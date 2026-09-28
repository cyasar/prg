# in operatörü ile IP kara liste kontrolü
kara_liste = ["192.168.1.105", "10.0.0.99", "172.16.5.20"]

gelen_ip = input("Sorgulanacak IP: ").strip()

if gelen_ip in kara_liste:
    print("ERİŞİM ENGEL: Bu IP adresi kara listede!")
else:
    print("ERİŞİM İZİN: IP güvenli görünüyor.")
