# Problem parçalama: Güvenlik olayı puanlama ve aksiyon belirleme
def siddet_carpani(olay_turu):
    if olay_turu == "DDoS":
        return 3.0
    elif olay_turu == "SQLi":
        return 2.5
    elif olay_turu == "BruteForce":
        return 1.5
    return 1.0

def risk_skoru(olay_turu, etkilenen_kullanici):
    carpan = siddet_carpani(olay_turu)
    return round(carpan * etkilenen_kullanici, 1)

def aksiyon_oner(skor):
    if skor >= 100:
        return "ACİL: Ağ erişimini kes ve SOC ekibini ara!"
    elif skor >= 30:
        return "UYARI: IP adresini geçici kara listeye al."
    else:
        return "BİLGİ: Rutin log takibi yap."

olaylar = [
    ("BruteForce", 10),
    ("SQLi", 20),
    ("DDoS", 50)
]

for olay, kullanici in olaylar:
    skor = risk_skoru(olay, kullanici)
    karar = aksiyon_oner(skor)
    print(f"Olay: {olay} (Kullanıcı: {kullanici}) -> Skor: {skor} | Aksiyon: {karar}")
