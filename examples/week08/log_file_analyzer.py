# Log DOSYASI analizi: dosya okuma + string işlemleri + bozuk satırlara dayanıklılık
from pathlib import Path

klasor = Path("hafta08_calisma")
klasor.mkdir(exist_ok=True)
log_dosyasi = klasor / "auth.log"
rapor_dosyasi = klasor / "auth_rapor.txt"

# Sentetik auth logu: bir satır bilerek bozuk, bir satır boş.
log_dosyasi.write_text(
    "2026-11-10 08:00:01 OK 10.0.0.5 ayse\n"
    "2026-11-10 08:01:15 FAIL 203.0.113.7 admin\n"
    "2026-11-10 08:01:17 FAIL 203.0.113.7 admin\n"
    "BOZUK_SATIR_KAYIT\n"
    "\n"
    "2026-11-10 08:01:20 FAIL 203.0.113.7 root\n"
    "2026-11-10 08:02:00 FAIL 198.51.100.4 test\n"
    "2026-11-10 08:05:42 OK 10.0.0.8 mehmet\n",
    encoding="utf-8",
)

basarisiz_ip = {}
islenen = 0
atlanan = 0

try:
    with open(log_dosyasi, encoding="utf-8") as f:
        no = 0
        for satir in f:
            no += 1
            satir = satir.strip()
            if not satir:
                continue
            try:
                tarih, saat, durum, ip, kullanici = satir.split()
            except ValueError:
                atlanan += 1
                print(f"[ATLANDI] {no}. satır beklenen biçimde değil")
                continue
            islenen += 1
            if durum == "FAIL":
                # get(anahtar, 0): anahtar yoksa 0 döndürür, KeyError oluşmaz
                basarisiz_ip[ip] = basarisiz_ip.get(ip, 0) + 1
except FileNotFoundError:
    print("Log dosyası bulunamadı:", log_dosyasi.name)
else:
    with open(rapor_dosyasi, "w", encoding="utf-8") as rapor:
        rapor.write("AUTH LOG RAPORU\n")
        rapor.write(f"İşlenen satır : {islenen}\n")
        rapor.write(f"Atlanan satır : {atlanan}\n")
        for ip, adet in basarisiz_ip.items():
            etiket = "ŞÜPHELİ" if adet >= 3 else "izle"
            rapor.write(f"{ip:<15} {adet} başarısız  [{etiket}]\n")
    print(rapor_dosyasi.read_text(encoding="utf-8"), end="")
