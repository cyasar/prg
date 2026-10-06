# 2 Boyutlu Dizi (Matris): Sunucuların 3 günlük hata logları
# matris[satir][sutun] -> [Sunucu No][Gün No]
log_matrisi = [
    [12, 45, 8],    # Web-01 (Pzt, Sal, Çar)
    [3, 98, 14],    # DB-01
    [27, 5, 62]     # Auth-01
]

sunucu_adlari = ["Web-01", "DB-01", "Auth-01"]
genel_toplam = 0
en_yuksek_hata = log_matrisi[0][0]
en_riskli_sunucu = ""
en_riskli_gun = -1

for r in range(len(log_matrisi)):
    satir_toplami = 0
    for c in range(len(log_matrisi[r])):
        hata = log_matrisi[r][c]
        satir_toplami += hata
        genel_toplam += hata
        if hata > en_yuksek_hata:
            en_yuksek_hata = hata
            en_riskli_sunucu = sunucu_adlari[r]
            en_riskli_gun = c + 1
    print(f"{sunucu_adlari[r]} 3 günlük toplam: {satir_toplami}")

print("Tüm sunucularda genel toplam hata:", genel_toplam)
print(f"Tepe Anomali: {en_riskli_sunucu} (Gün {en_riskli_gun}) -> {en_yuksek_hata} hata")
