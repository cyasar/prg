# Parola gücünü parçalı fonksiyonlarla denetleme
def uzunluk_yeterli_mi(parola, min_uzunluk=8):
    return len(parola) >= min_uzunluk

def rakam_icerir_mi(parola):
    for karakter in parola:
        if karakter.isdigit():
            return True
    return False

def ozel_karakter_icerir_mi(parola):
    ozel_karakterler = "!@#$%^&*-_+=?"
    for karakter in parola:
        if karakter in ozel_karakterler:
            return True
    return False

def parola_skoru_hesapla(parola):
    skor = 0
    if uzunluk_yeterli_mi(parola):
        skor += 1
    if rakam_icerir_mi(parola):
        skor += 1
    if ozel_karakter_icerir_mi(parola):
        skor += 1
    return skor

parolalar = ["12345", "gizli123", "Bgt2026!"]
for p in parolalar:
    puan = parola_skoru_hesapla(p)
    seviye = "Zayıf" if puan < 2 else ("Orta" if puan == 2 else "Güçlü")
    print(f"Parola: {p} -> Puan: {puan}/3 ({seviye})")
