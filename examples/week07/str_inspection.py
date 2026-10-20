# Metin sorgulama metotları: startswith, endswith, isdigit, in
url = "https://banka.com/odeme.php"
dosya = "rapor_yedek.tar.gz"
tc_no = "12345678901"

print("HTTPS ile mi başlıyor?:", url.startswith("https://"))
print(".gz ile mi bitiyor?:", dosya.endswith(".gz"))
print("tc_no tamamen rakamlardan mı oluşuyor?:", tc_no.isdigit())

istek = "GET /login.php?user=admin' OR '1'='1 HTTP/1.1"
if "' OR '" in istek:
    print("ALARM: SQL Enjeksiyon şüphesi tespit edildi!")
