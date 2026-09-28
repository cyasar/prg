# while döngüsü ile oturum geri sayımı
sayac = int(input("Geri sayım saniyesi: "))

while sayac > 0:
    print("Kalan süre:", sayac, "sn")
    sayac -= 1

print("Süre doldu! Oturum güvenlik nedeniyle kilitlendi.")
