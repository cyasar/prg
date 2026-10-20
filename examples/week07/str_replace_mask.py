# replace() ile veri temizleme ve hassas veri maskeleme
kredi_karti = "4543-1234-5678-9012"
maskeli = "****-****-****-" + kredi_karti[-4:]
print("Orijinal Kart:", kredi_karti)
print("Maskeli Kart :", maskeli)

log = "GIRIS_DENEMESI user=mehmet pass=Sifre2026! sonuc=FAIL"
guvenli_log = log.replace("pass=Sifre2026!", "pass=********")
print("Temizlenmiş Log:", guvenli_log)

guvensiz_yol = "/var/www/uploads/../../etc/passwd"
temiz_yol = guvensiz_yol.replace("../", "")
print("Filtrelenmiş dosya yolu:", temiz_yol)
