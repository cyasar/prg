yetkili = True
bakim_var = False
if yetkili and not bakim_var:
    print("İşleme devam")
else:
    print("İşlem bekliyor")
print("En az bir koşul:", yetkili or bakim_var)
