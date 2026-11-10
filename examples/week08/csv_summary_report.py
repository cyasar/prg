# Haftanın uygulaması: sentetik CSV günlüğünden kullanıcı bazlı ÖZET dosyası üretme
import csv
from pathlib import Path

klasor = Path("hafta08_calisma")
klasor.mkdir(exist_ok=True)
girdi = klasor / "gunluk.csv"
cikti = klasor / "ozet.csv"

ornek_veri = """zaman,kullanici,olay
08:01,ayse,LOGIN_OK
08:03,mehmet,LOGIN_FAIL
08:04,mehmet,LOGIN_FAIL
08:05,mehmet,LOGIN_FAIL
08:07,zeynep,LOGIN_FAIL
08:09,zeynep,LOGIN_OK
08:12,ayse,LOGOUT
"""
girdi.write_text(ornek_veri, encoding="utf-8")

# 1) Oku ve kullanıcı başına say
ozet = {}
with open(girdi, encoding="utf-8", newline="") as f:
    for kayit in csv.DictReader(f):
        kullanici = kayit["kullanici"]
        if kullanici not in ozet:
            ozet[kullanici] = {"toplam": 0, "basarisiz": 0}
        ozet[kullanici]["toplam"] += 1
        if kayit["olay"] == "LOGIN_FAIL":
            ozet[kullanici]["basarisiz"] += 1

# 2) Özeti yeni bir CSV dosyasına yaz
ESIK = 3
with open(cikti, "w", encoding="utf-8", newline="") as f:
    alanlar = ["kullanici", "toplam_olay", "basarisiz", "durum"]
    yazici = csv.DictWriter(f, fieldnames=alanlar)
    yazici.writeheader()
    for kullanici in sorted(ozet):
        bilgi = ozet[kullanici]
        durum = "INCELE" if bilgi["basarisiz"] >= ESIK else "NORMAL"
        yazici.writerow({
            "kullanici": kullanici,
            "toplam_olay": bilgi["toplam"],
            "basarisiz": bilgi["basarisiz"],
            "durum": durum,
        })

# 3) Üretilen dosyayı doğrula
print("Özet dosyası oluşturuldu:", cikti.as_posix())
print(cikti.read_text(encoding="utf-8"), end="")
