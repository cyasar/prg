# pathlib ile her ortamda çalışan (taşınabilir) dosya yolları
# Windows "C:\..." ile Linux/Colab "/content/..." farkını Path nesnesi yönetir.
from pathlib import Path

kok = Path("hafta08_calisma")
rapor_klasoru = kok / "raporlar"          # / operatörü yol parçalarını birleştirir
rapor_klasoru.mkdir(parents=True, exist_ok=True)

dosyalar = {
    "ozet.txt": "Toplam olay: 12\n",
    "uyarilar.txt": "Kritik: 2\nOrta: 5\n",
    "eski.bak": "yedek\n",
}
for ad, icerik in dosyalar.items():
    (rapor_klasoru / ad).write_text(icerik, encoding="utf-8")

hedef = rapor_klasoru / "uyarilar.txt"
print("Göreli yol     :", hedef.as_posix())
print("Dosya adı      :", hedef.name)
print("Uzantı         :", hedef.suffix)
print("Ad (uzantısız) :", hedef.stem)
print("Var mı?        :", hedef.exists())

print("Klasördeki .txt dosyaları:")
for yol in sorted(rapor_klasoru.glob("*.txt")):
    print("  -", yol.name)

eksik = rapor_klasoru / "yok.txt"
print("yok.txt var mı?:", eksik.exists())
print("Okunan satırlar:", hedef.read_text(encoding="utf-8").splitlines())
