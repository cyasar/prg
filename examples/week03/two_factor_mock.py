# İki adımlı doğrulama (2FA) kontrolü
parola = input("Parola: ")
dogrulama_kodu = input("6 haneli onay kodu: ").strip()

parola_dogru = (parola == "Bgt2026")
kod_gecerli = (dogrulama_kodu == "456789")

if parola_dogru and kod_gecerli:
    print("Giriş onaylandı: Güvenli oturum açıldı")
elif not parola_dogru:
    print("Giriş reddedildi: Parola yanlış")
else:
    print("Giriş reddedildi: Doğrulama kodu hatalı")
