# Ekleme modu ("a"): mevcut içeriği silmeden dosyanın sonuna yazar
# Güvenlikte denetim kaydı (audit log) tam olarak böyle tutulur.
from pathlib import Path

klasor = Path("hafta08_calisma")
klasor.mkdir(exist_ok=True)
denetim = klasor / "denetim.log"

# Her çalıştırmada aynı sonucu görmek için dosyayı önce "w" ile sıfırlıyoruz.
with open(denetim, "w", encoding="utf-8") as f:
    f.write("2026-11-10 09:00 | sistem | Denetim kaydı başlatıldı\n")

olaylar = [
    ("09:05", "ayse", "Oturum açtı"),
    ("09:12", "mehmet", "Parola değiştirdi"),
    ("09:30", "ayse", "Rapor indirdi"),
]

# "a" modu: her yeni olay dosyanın SONUNA eklenir, eski kayıtlar korunur.
for saat, kullanici, eylem in olaylar:
    with open(denetim, "a", encoding="utf-8") as f:
        f.write(f"2026-11-10 {saat} | {kullanici} | {eylem}\n")

with open(denetim, encoding="utf-8") as f:
    kayitlar = f.read().splitlines()

print("Denetim kaydı satır sayısı:", len(kayitlar))
for kayit in kayitlar:
    print(kayit)
print("Son eylem:", kayitlar[-1].split(" | ")[2])
