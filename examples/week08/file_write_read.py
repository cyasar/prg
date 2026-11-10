# Dosyaya yazma ve okuma: with open() + UTF-8
# Örnek önce kendi sentetik dosyasını oluşturur. Bu yüzden bilgisayarda,
# Google Colab'da, Jupyter'da ve ders sitesinde aynı şekilde çalışır.
from pathlib import Path

klasor = Path("hafta08_calisma")
klasor.mkdir(exist_ok=True)
dosya = klasor / "notlar.txt"

# 1) Yazma ("w"): dosya yoksa oluşturur, varsa içeriğini SİLİP baştan yazar.
with open(dosya, "w", encoding="utf-8") as f:
    f.write("Güvenlik duvarı kuralı güncellendi\n")
    f.write("Yedekleme tamamlandı\n")
    f.write("Şüpheli oturum incelendi\n")

# 2) read(): dosyanın tamamını tek bir metin olarak döndürür.
with open(dosya, "r", encoding="utf-8") as f:
    icerik = f.read()
print("--- read() ---")
print(icerik, end="")

# 3) Dosya nesnesi üzerinde for: satır satır okur (büyük dosyalarda bellek dostu).
print("--- for satir in f ---")
with open(dosya, "r", encoding="utf-8") as f:
    numara = 1
    for satir in f:
        print(f"{numara}. {satir.strip()}")
        numara += 1

# 4) readlines(): tüm satırları liste olarak verir (satır sonu \n dahil).
with open(dosya, "r", encoding="utf-8") as f:
    satirlar = f.readlines()
print("Satır sayısı:", len(satirlar))
print("İlk satır (repr):", repr(satirlar[0]))
