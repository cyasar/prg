# raise ile kendi doğrulama kuralını yazma ve anlaşılır hata mesajı verme
def kullanici_adi_dogrula(ad):
    if not isinstance(ad, str):
        raise TypeError("Kullanıcı adı metin olmalıdır.")
    ad = ad.strip()
    if ad == "":
        raise ValueError("Kullanıcı adı boş olamaz.")
    if not 3 <= len(ad) <= 16:
        raise ValueError("Kullanıcı adı 3-16 karakter olmalıdır.")
    if not ad.isalnum():
        raise ValueError("Yalnızca harf ve rakam kullanılabilir.")
    return ad.lower()


adaylar = ["Ayse01", "   ", "ab", "admin'--", 2026, "  Zeynep  "]
for aday in adaylar:
    try:
        temiz = kullanici_adi_dogrula(aday)
        print(f"KABUL : {aday!r:<12} -> {temiz}")
    except (ValueError, TypeError) as hata:
        print(f"RED   : {aday!r:<12} -> {hata}")
