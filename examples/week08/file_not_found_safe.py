# Dosya yoksa programı çökertmek yerine güvenli varsayılan ayarlara dönme
from pathlib import Path

VARSAYILAN = {"max_deneme": "3", "kilit_suresi_dk": "15"}


def ayar_yukle(yol):
    ayarlar = dict(VARSAYILAN)           # varsayılanların kopyası
    try:
        with open(yol, encoding="utf-8") as f:
            for satir in f:
                satir = satir.strip()
                if not satir or satir.startswith("#"):
                    continue             # boş satır ve yorumları atla
                anahtar, deger = satir.split("=")
                ayarlar[anahtar.strip()] = deger.strip()
    except FileNotFoundError:
        print(f"[UYARI] {yol.name} bulunamadı, varsayılan ayarlar kullanılıyor.")
    return ayarlar


klasor = Path("hafta08_calisma")
klasor.mkdir(exist_ok=True)
ayar_dosyasi = klasor / "guvenlik.conf"
ayar_dosyasi.unlink(missing_ok=True)     # örnek her seferinde dosyasız başlasın

print("1. deneme:", ayar_yukle(ayar_dosyasi))

ayar_dosyasi.write_text(
    "# Güvenlik ayarları\nmax_deneme = 5\n\nkilit_suresi_dk = 30\n",
    encoding="utf-8",
)
print("2. deneme:", ayar_yukle(ayar_dosyasi))
