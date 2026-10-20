# Yerel (Local) ve Genel (Global) değişken kapsamı (Scope)
sistem_adi = "BGT_Guvenlik_Duvari"

def oturum_sayaci():
    yerel_sayac = 5
    print(f"[{sistem_adi}] Fonksiyon içi sayaç: {yerel_sayac}")

oturum_sayaci()
print(f"Sistem adı dışarıda da erişilebilir: {sistem_adi}")
