# 3 Boyutlu Dizi: Veri Merkezi Sıcaklık Sensör Küpü
# Boyutlar: [Şube / Veri Merkezi][Kabin][Sunucu Sensörü]
sensor_kupu = [
    # Şube 0 (İstanbul)
    [
        [24, 26, 28],  # Kabin 0
        [22, 23, 31]   # Kabin 1
    ],
    # Şube 1 (Ankara)
    [
        [21, 22, 22],  # Kabin 0
        [25, 29, 36]   # Kabin 1
    ]
]

sube_adlari = ["İstanbul", "Ankara"]
esik_derece = 30
alarm_koordinatlari = []

for b in range(len(sensor_kupu)):             # 1. Boyut: Şube
    for r in range(len(sensor_kupu[b])):         # 2. Boyut: Kabin
        for c in range(len(sensor_kupu[b][r])):     # 3. Boyut: Sunucu
            derece = sensor_kupu[b][r][c]
            if derece >= esik_derece:
                konum = f"{sube_adlari[b]} Kabin-{r} Sunucu-{c} ({derece}°C)"
                alarm_koordinatlari.append(konum)

print("İncelenen toplam sensör:", 2 * 2 * 3)
print(f"Kritik ısı eşiğini ({esik_derece}°C) aşan noktalar:")
for alarm in alarm_koordinatlari:
    print("[ALARM]:", alarm)
