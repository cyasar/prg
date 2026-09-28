# Liste elemanlarını döngüyle denetleyip yeni bir listeye ayıklama
parolalar = ["admin1", "supersecret2026", "123", "bgt_lab_pass!"]
guvensizler = []

for p in parolalar:
    if len(p) < 8:
        guvensizler.append(p)

print("Taranan toplam parola:", len(parolalar))
print("8 karakterden kısa güvensiz parolalar:", guvensizler)
