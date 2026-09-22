# Sentetik dosya boyutu ve uzantı güvenlik politikası
uzanti = input("Dosya uzantısı (.txt / .pdf / .png / .exe): ").strip().lower()
boyut = int(input("Dosya boyutu (KiB): "))

if uzanti not in [".txt", ".pdf", ".png"]:
    print("Red: Güvensiz veya desteklenmeyen dosya türü")
elif boyut <= 0:
    print("Red: Dosya boyutu sıfır veya negatif olamaz")
elif boyut > 1024:
    print("Red: Dosya boyutu 1024 KiB sınırını aşıyor")
else:
    print("Kabul: Dosya güvenlik kriterlerine uygun")
