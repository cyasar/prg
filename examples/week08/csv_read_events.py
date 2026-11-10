# CSV okuma: csv.DictReader başlık satırını sözlük anahtarı olarak kullanır
import csv
from pathlib import Path

klasor = Path("hafta08_calisma")
klasor.mkdir(exist_ok=True)
olay_dosyasi = klasor / "olaylar.csv"

# Sentetik (kurgusal) olay verisi. Gerçek kişisel veri kullanmıyoruz.
satirlar = [
    ["zaman", "kullanici", "ip", "olay", "boyut_kb"],
    ["08:01", "ayse", "10.0.0.5", "LOGIN_OK", "2"],
    ["08:03", "mehmet", "10.0.0.8", "LOGIN_FAIL", "1"],
    ["08:04", "mehmet", "10.0.0.8", "LOGIN_FAIL", "1"],
    ["08:10", "zeynep", "10.0.0.12", "FILE_UPLOAD", "850"],
    ["08:15", "mehmet", "10.0.0.8", "LOGIN_FAIL", "1"],
    ["08:20", "ayse", "10.0.0.5", "FILE_UPLOAD", "120"],
]
# newline="" CSV modülünün satır sonlarını kendisinin yönetmesi için gereklidir.
with open(olay_dosyasi, "w", encoding="utf-8", newline="") as f:
    yazici = csv.writer(f)
    yazici.writerows(satirlar)

basarisiz = 0
toplam_kb = 0
with open(olay_dosyasi, encoding="utf-8", newline="") as f:
    okuyucu = csv.DictReader(f)
    print("Sütunlar:", okuyucu.fieldnames)
    for kayit in okuyucu:
        boyut = int(kayit["boyut_kb"])   # CSV'deki her değer metindir -> int()
        toplam_kb += boyut
        if kayit["olay"] == "LOGIN_FAIL":
            basarisiz += 1
        print(f"{kayit['zaman']} {kayit['kullanici']:<7} {kayit['olay']:<12} {boyut:>4} KB")

print("Başarısız giriş sayısı:", basarisiz)
print("Toplam veri:", toplam_kb, "KB")
