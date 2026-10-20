# Çok satırlı auth logundan başarısız giriş denemelerini süzme
auth_loglari = [
    "Oct 20 08:12:01 server sshd: Accepted password for root from 192.168.1.10 port 22",
    "Oct 20 08:14:22 server sshd: Failed password for invalid user admin from 203.0.113.55 port 4421",
    "Oct 20 08:14:25 server sshd: Failed password for invalid user admin from 203.0.113.55 port 4424",
    "Oct 20 08:15:00 server sshd: Failed password for root from 198.51.100.2 port 5122",
    "Oct 20 08:16:10 server sshd: Accepted password for ahmet from 192.168.1.15 port 22"
]

basarisiz_denemeler = []
saldirgan_ipler = []

for satir in auth_loglari:
    if "Failed password" in satir:
        basarisiz_denemeler.append(satir)
        ip_kismi = satir.split("from ")[1].split(" ")[0]
        saldirgan_ipler.append(ip_kismi)

print("İncelenen toplam log:", len(auth_loglari))
print("Başarısız oturum sayısı:", len(basarisiz_denemeler))
print("Tespit edilen saldırgan IP'ler:", saldirgan_ipler)
