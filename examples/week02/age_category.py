yas = int(input("Yaş: "))
if yas < 0:
    print("Geçersiz yaş")
elif yas < 18:
    print("18 yaş altı")
elif yas < 65:
    print("18–64 yaş aralığı")
else:
    print("65 yaş ve üzeri")
