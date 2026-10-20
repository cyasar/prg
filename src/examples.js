const example = (path, code, input, expected, explanations) => ({
  path,
  filename: path.split("/").at(-1),
  title: path.split("/").at(-1),
  code: code + "\n",
  input,
  expected,
  explanations,
  time: "10 dk",
  goal: "Önce sonucu tahmin et, çalıştır ve küçük bir değişiklik yap.",
  task: "Yeni bir girdi dene ve beklenen sonucu açıkla.",
  tests: [],
});
export const pythonExamples = {
  hello: example(
    "examples/week01/hello.py",
    'print("Merhaba Dünya")\nprint("Merhaba Bilgi Güvenliği Teknolojisi!")',
    "",
    "Merhaba Dünya\nMerhaba Bilgi Güvenliği Teknolojisi!\n",
    [
      "print, parantez içindeki metni ekrana yazar.",
      "İkinci print yeni bir satırda çalışır.",
    ],
  ),
  name: example(
    "examples/week01/name.py",
    'isim = input("Adınız: ")\nprint("Merhaba", isim)',
    "Ayşe",
    "Adınız: Merhaba Ayşe\n",
    [
      "input kullanıcıdan bir metin alır, isim adıyla saklarız.",
      "print iki değeri aralarına boşluk koyarak yazar.",
    ],
  ),
  sum: example(
    "examples/week01/sum_two_numbers.py",
    'sayi1 = int(input("Birinci sayı: "))\nsayi2 = int(input("İkinci sayı: "))\ntoplam = sayi1 + sayi2\nprint("Toplam:", toplam)',
    "4\n7",
    "Birinci sayı: İkinci sayı: Toplam: 11\n",
    [
      "İlk girdiyi int ile tam sayıya dönüştürür.",
      "İkinci tam sayıyı ayrı bir adla tutar.",
      "İki sayıyı toplar ve sonucu toplam adına atar.",
      "Etiketle birlikte sayısal sonucu yazdırır.",
    ],
  ),
  variables: example(
    "examples/week02/variables.py",
    'isim = "Ayşe"\nyas = 18\nortalama = 72.5\nogrenci_mi = True\nprint(isim, type(isim))\nprint(yas, type(yas))\nprint(ortalama, type(ortalama))\nprint(ogrenci_mi, type(ogrenci_mi))',
    "",
    "Ayşe <class 'str'>\n18 <class 'int'>\n72.5 <class 'float'>\nTrue <class 'bool'>\n",
    [
      "İlk dört satır farklı türde değerlere ad verir.",
      "type, değerin türünü gösterir.",
    ],
  ),
  io: example(
    "examples/week02/input_output.py",
    'isim = input("Adınız: ")\nyas = int(input("Yaşınız: "))\nprint("Merhaba", isim)\nprint("Gelecek yıl:", yas + 1)',
    "Ayşe\n18",
    "Adınız: Yaşınız: Merhaba Ayşe\nGelecek yıl: 19\n",
    [
      "İsim metin olarak kalır.",
      "Yaş üzerinde toplama yapabilmek için int dönüşümü gerekir.",
      "Son iki satır sonucu anlaşılır etiketlerle gösterir.",
    ],
  ),
  arithmetic: example(
    "examples/week02/arithmetic.py",
    'dakika = 135\nsaat = dakika // 60\nkalan = dakika % 60\nprint("Süre:", saat, "saat", kalan, "dakika")\nprint("Saat olarak:", dakika / 60)\nprint("İki katı:", dakika * 2)\nprint("Bir saat eksik:", dakika - 60)\nprint("Bir saat fazla:", dakika + 60)\nprint("2 üzeri 3:", 2 ** 3)',
    "",
    "Süre: 2 saat 15 dakika\nSaat olarak: 2.25\nİki katı: 270\nBir saat eksik: 75\nBir saat fazla: 195\n2 üzeri 3: 8\n",
    [
      "// bölümün aşağı yuvarlanmış tamsayı sonucunu, % kalanı verir.",
      "/ gerçek bölme yapar. ** üs alma işlemidir.",
    ],
  ),
  pass: example(
    "examples/week02/pass_fail.py",
    'notu = int(input("Notunuz: "))\n\nif notu >= 50:\n    print("Geçti")\nelse:\n    print("Kaldı")',
    "50",
    "Notunuz: Geçti\n",
    [
      "notu kullanıcıdan alınan tam sayıdır. Bu ilk sürüm 0–100 arası girdi varsayar.",
      ">= 50 eşik değerin kendisini de kapsar.",
      "Girintili ilk print yalnızca koşul doğruysa çalışır.",
      "else, koşul yanlış olduğunda çalışacak dalı seçer.",
    ],
  ),
  positive: example(
    "examples/week02/positive.py",
    'sayi = int(input("Sayı: "))\nif sayi > 0:\n    print("Pozitif")\nelif sayi == 0:\n    print("Sıfır")\nelse:\n    print("Negatif")',
    "0",
    "Sayı: Sıfır\n",
    [
      "Önce pozitiflik sınanır.",
      "İlk koşul yanlışsa sıfır olma durumu sınanır.",
      "İki koşul da yanlışsa sayı negatiftir.",
    ],
  ),
  even: example(
    "examples/week02/even_odd.py",
    'sayi = int(input("Sayı: "))\nif sayi % 2 == 0:\n    print("Çift")\nelse:\n    print("Tek")',
    "8",
    "Sayı: Çift\n",
    [
      "% 2 ikiye bölümden kalanı bulur.",
      "Kalan sıfırsa sayı çifttir; sıfır da çifttir.",
    ],
  ),
  larger: example(
    "examples/week02/larger.py",
    'a = int(input("Birinci sayı: "))\nb = int(input("İkinci sayı: "))\nif a > b:\n    print("Birinci sayı büyük")\nelif b > a:\n    print("İkinci sayı büyük")\nelse:\n    print("Eşit")',
    "5\n5",
    "Birinci sayı: İkinci sayı: Eşit\n",
    [
      "İki sayı ayrı girdilerdir.",
      "Eşitlik üçüncü olasılıktır ve unutulmamalıdır.",
    ],
  ),
  age: example(
    "examples/week02/age_category.py",
    'yas = int(input("Yaş: "))\nif yas < 0:\n    print("Geçersiz yaş")\nelif yas < 18:\n    print("18 yaş altı")\nelif yas < 65:\n    print("18–64 yaş aralığı")\nelse:\n    print("65 yaş ve üzeri")',
    "18",
    "Yaş: 18–64 yaş aralığı\n",
    [
      "Negatif yaş önce reddedilir.",
      "Koşullar üstten alta değerlendirilir, ilk doğru dal çalışır.",
      "Bu kategoriler eğitim örneğidir; hukuki sınıflandırma değildir.",
    ],
  ),
  username: example(
    "examples/week02/username.py",
    'kullanici = input("Kurgusal kullanıcı adı: ").strip()\nif kullanici == "":\n    print("Kullanıcı adı boş olamaz")\nelse:\n    print("Kullanıcı adı alındı")',
    "   ",
    "Kurgusal kullanıcı adı: Kullanıcı adı boş olamaz\n",
    [
      "strip baştaki ve sondaki boşlukları temizler.",
      "Boş metin çift tırnak arasında karakter olmamasıdır.",
    ],
  ),
  password: example(
    "examples/week02/password_length.py",
    '# Yalnızca eğitimsel uzunluk kontrolü. Gerçek parola kullanmayın.\n# Bu örnek bir parola güvenlik veya kimlik doğrulama sistemi değildir.\nmetin = input("Kurgusal deneme metni: ")\nif len(metin) >= 8:\n    print("Uzunluk koşulu sağlandı")\nelse:\n    print("En az 8 karakter gerekli")',
    "deneme12",
    "Kurgusal deneme metni: Uzunluk koşulu sağlandı\n",
    [
      "len metnin uzunluğunu verir.",
      "Sekiz karakter eşiği sadece bu dersin kuralıdır; güvenli parola ölçütü değildir.",
    ],
  ),
  boolean: example(
    "examples/week02/boolean_rules.py",
    'yetkili = True\nbakim_var = False\nif yetkili and not bakim_var:\n    print("İşleme devam")\nelse:\n    print("İşlem bekliyor")\nprint("En az bir koşul:", yetkili or bakim_var)',
    "",
    "İşleme devam\nEn az bir koşul: True\n",
    [
      "and iki koşulun da doğru olmasını ister.",
      "not bakım durumunun tersini alır.",
      "or en az bir doğru koşul arar. Bu bir gerçek yetkilendirme sistemi değildir.",
    ],
  ),
  empty: example(
    "examples/week03/empty_check.py",
    '# Kullanıcı adı boşluk temizleme ve varlık kontrolü\nveri = input("Kullanıcı adı: ")\ntemiz = veri.strip()\n\nif temiz == "":\n    print("Hata: Kullanıcı adı boş bırakılamaz")\nelse:\n    print("Kullanıcı adı geçerli:", temiz)',
    "  ahmet  ",
    "Kullanıcı adı: Kullanıcı adı geçerli: ahmet\n",
    [
      "strip() başta ve sonda yer alan boşluk karakterlerini temizler.",
      "Boş metin ('') kontrolü zorunlu alan doğrulamalarının temelidir.",
    ],
  ),
  digit: example(
    "examples/week03/digit_check.py",
    '# Sayısal karakter denetimi ile güvenli int dönüşümü\ngiris = input("Port numarası girin: ").strip()\n\nif not giris.isdigit():\n    print("Hata: Yalnızca rakamlardan oluşan bir değer girilmelidir")\nelse:\n    port = int(giris)\n    print("Sayısal değer alındı:", port)',
    "8080",
    "Port numarası girin: Sayısal değer alındı: 8080\n",
    [
      "isdigit() tüm karakterlerin rakam olup olmadığını kontrol eder.",
      "int() dönüşümünden önce bu kontrol yapılarak ValueError hatası engellenir.",
    ],
  ),
  range: example(
    "examples/week03/range_validation.py",
    '# Ağ portu geçerlilik aralığı kontrolü (1–65535)\nport = int(input("Hedef port: "))\n\nif port < 1 or port > 65535:\n    print("Hata: Port 1 ile 65535 arasında olmalıdır")\nelse:\n    print("Port geçerli:", port)',
    "443",
    "Hedef port: Port geçerli: 443\n",
    [
      "or operatörü ile değerin kabul edilen sınırların dışında kalması denetlenir.",
      "Ağ programlamasında geçerli port aralığı 1 ile 65535 arasındadır.",
    ],
  ),
  guard: example(
    "examples/week03/nested_vs_guard.py",
    '# Guard Clause (Erken Çıkış) yaklaşımı\nyas = int(input("Yaş: "))\nbilet_var_mi = input("Bilet var mı? (e/h): ").strip().lower()\n\n# Erken kontrollerle geçersiz durumları önceden ayıklama\nif yas < 18:\n    print("Erişim reddedildi: 18 yaşından küçükler giremez")\nelif bilet_var_mi != "e":\n    print("Erişim reddedildi: Geçerli biletiniz yok")\nelse:\n    print("Erişim onaylandı: Hoş geldiniz")',
    "20\ne",
    "Yaş: Bilet var mı? (e/h): Erişim onaylandı: Hoş geldiniz\n",
    [
      "Guard clause, geçersiz veya yetkisiz durumları en başta ele alır.",
      "Derin iç içe bloklar oluşturmak yerine kodun okunabilirliğini artırır.",
    ],
  ),
  policy: example(
    "examples/week03/file_policy.py",
    '# Sentetik dosya boyutu ve uzantı güvenlik politikası\nuzanti = input("Dosya uzantısı (.txt / .pdf / .png / .exe): ").strip().lower()\nboyut = int(input("Dosya boyutu (KiB): "))\n\nif uzanti not in [".txt", ".pdf", ".png"]:\n    print("Red: Güvensiz veya desteklenmeyen dosya türü")\nelif boyut <= 0:\n    print("Red: Dosya boyutu sıfır veya negatif olamaz")\nelif boyut > 1024:\n    print("Red: Dosya boyutu 1024 KiB sınırını aşıyor")\nelse:\n    print("Kabul: Dosya güvenlik kriterlerine uygun")',
    ".pdf\n500",
    "Dosya uzantısı (.txt / .pdf / .png / .exe): Dosya boyutu (KiB): Kabul: Dosya güvenlik kriterlerine uygun\n",
    [
      "not in operatörü güvenli beyaz liste (whitelist) kontrolü sağlar.",
      "Hem dosya uzantısı hem de boyut sınırı kademeli olarak doğrulanır.",
    ],
  ),
  auth: example(
    "examples/week03/decision_table_auth.py",
    '# Rol ve işlem izni karar tablosu modeli\nrol = input("Rol (admin / ogretmen / ogrenci): ").strip().lower()\nislem = input("İşlem (oku / yaz / sil): ").strip().lower()\n\nif rol == "admin":\n    print("İzin verildi: Tam yetki")\nelif rol == "ogretmen":\n    if islem in ["oku", "yaz"]:\n        print("İzin verildi: Öğretmen okuma/yazma yetkisi")\n    else:\n        print("Red: Öğretmen silme işlemi yapamaz")\nelif rol == "ogrenci":\n    if islem == "oku":\n        print("İzin verildi: Öğrenci okuma yetkisi")\n    else:\n        print("Red: Öğrenci yalnızca okuma yapabilir")\nelse:\n    print("Hata: Tanımsız kullanıcı rolü")',
    "admin\nsil",
    "Rol (admin / ogretmen / ogrenci): İşlem (oku / yaz / sil): İzin verildi: Tam yetki\n",
    [
      "Karar tablosu mantığıyla rol ve işlem çiftleri eşleştirilir.",
      "Admin tam yetkili, öğretmen okuma/yazma, öğrenci salt okunur izne sahiptir.",
    ],
  ),
  firewall: example(
    "examples/week03/firewall_rule.py",
    '# Kurgusal paket filtreleme kuralı\nip = input("Kaynak IP: ").strip()\nport = int(input("Hedef port: "))\n\n# Basit yerel ağ kontrolü ve standart web portları\nyerel_mi = ip.startswith("192.168.") or ip.startswith("10.")\nguvenli_port_mu = port in [80, 443]\n\nif yerel_mi and guvenli_port_mu:\n    print("GÜVENLİK DUVARI: İZİN VERİLDİ (Yerel Web Trafiği)")\nelif yerel_mi and not guvenli_port_mu:\n    print("GÜVENLİK DUVARI: ENGEL (Yetkisiz Yerel Port)")\nelse:\n    print("GÜVENLİK DUVARI: ENGEL (Bilinmeyen Dış Kaynak)")',
    "192.168.1.50\n443",
    "Kaynak IP: Hedef port: GÜVENLİK DUVARI: İZİN VERİLDİ (Yerel Web Trafiği)\n",
    [
      "IP adresinin yerel olup olmadığı startswith() ile sınanır.",
      "Port numarası ve IP adresi birlikte değerlendirilerek kural işletilir.",
    ],
  ),
  lockout: example(
    "examples/week03/account_lockout.py",
    '# Hatalı deneme sayacı ve güvenlik kilidi kurgusu\ndeneme_sayisi = int(input("Hatalı deneme sayısı: "))\nparola = input("Parola: ")\n\nif deneme_sayisi >= 3:\n    print("HESAP KİLİTLİ: Çok fazla hatalı deneme yapıldı")\nelif parola == "Guvenli123":\n    print("Giriş başarılı: Hoş geldiniz")\nelse:\n    kalan = 3 - (deneme_sayisi + 1)\n    print("Hatalı parola! Kalan deneme hakkı:", kalan)',
    "0\nGuvenli123",
    "Hatalı deneme sayısı: Parola: Giriş başarılı: Hoş geldiniz\n",
    [
      "Brute-force saldırılarına karşı deneme eşiği (3 kez) denetlenir.",
      "Kalan hak matematiksel olarak hesaplanır ve kullanıcı bilgilendirilir.",
    ],
  ),
  twofactor: example(
    "examples/week03/two_factor_mock.py",
    '# İki adımlı doğrulama (2FA) kontrolü\nparola = input("Parola: ")\ndogrulama_kodu = input("6 haneli onay kodu: ").strip()\n\nparola_dogru = (parola == "Bgt2026")\nkod_gecerli = (dogrulama_kodu == "456789")\n\nif parola_dogru and kod_gecerli:\n    print("Giriş onaylandı: Güvenli oturum açıldı")\nelif not parola_dogru:\n    print("Giriş reddedildi: Parola yanlış")\nelse:\n    print("Giriş reddedildi: Doğrulama kodu hatalı")',
    "Bgt2026\n456789",
    "Parola: 6 haneli onay kodu: Giriş onaylandı: Güvenli oturum açıldı\n",
    [
      "Her iki güvenlik faktörünün (bilgi + sahiplik) doğrulanması istenir.",
      "and operatörüyle iki faktörün de True olması zorunlu tutulur.",
    ],
  ),
  quota: example(
    "examples/week03/quota_calculator.py",
    '# Kullanıcı türü ve dosya boyutuna göre kota tüketimi\nkullanici_tipi = input("Kullanıcı türü (standart / premium): ").strip().lower()\nboyut_mb = int(input("İndirilecek veri (MB): "))\n\nif kullanici_tipi == "premium":\n    kota = 5000\nelse:\n    kota = 500\n\nif boyut_mb <= 0:\n    print("Hata: Geçersiz veri boyutu")\nelif boyut_mb > kota:\n    print("İşlem engellendi: Kota aşıldı! (Mevcut kota:", kota, "MB)")\nelse:\n    kalan = kota - boyut_mb\n    print("İndirme başladı. Kalan kota:", kalan, "MB")',
    "standart\n200",
    "Kullanıcı türü (standart / premium): İndirilecek veri (MB): İndirme başladı. Kalan kota: 300 MB\n",
    [
      "Kullanıcı kategorisine göre sınır/kota değişkeni belirlenir.",
      "Sıfır, negatif ve kota aşımı durumları savunmacı biçimde kontrol edilir.",
    ],
  ),
  countdown: example(
    "examples/week04/countdown.py",
    '# while döngüsü ile oturum geri sayımı\nsayac = int(input("Geri sayım saniyesi: "))\n\nwhile sayac > 0:\n    print("Kalan süre:", sayac, "sn")\n    sayac -= 1\n\nprint("Süre doldu! Oturum güvenlik nedeniyle kilitlendi.")',
    "3",
    "Geri sayım saniyesi: Kalan süre: 3 sn\nKalan süre: 2 sn\nKalan süre: 1 sn\nSüre doldu! Oturum güvenlik nedeniyle kilitlendi.\n",
    [
      "while döngüsü koşul True olduğu sürece bloğu tekrarlar.",
      "Her adımda sayac -= 1 ile bitiş koşuluna yaklaşılır.",
    ],
  ),
  pin_bruteforce: example(
    "examples/week04/pin_bruteforce.py",
    '# while ve break ile PIN deneme kontrolü\nkalan_hak = 3\ndogru_pin = "1923"\ngiris_basarili = False\n\nwhile kalan_hak > 0:\n    tahmin = input("4 haneli PIN girin: ").strip()\n    if tahmin == dogru_pin:\n        giris_basarili = True\n        print("PIN doğrulandı! Güvenli kasa açıldı.")\n        break\n    else:\n        kalan_hak -= 1\n        if kalan_hak > 0:\n            print("Hatalı PIN! Kalan hakkınız:", kalan_hak)\n\nif not giris_basarili:\n    print("3 kez hatalı deneme! Kart bloke edildi.")',
    "1000\n1923",
    "4 haneli PIN girin: Hatalı PIN! Kalan hakkınız: 2\n4 haneli PIN girin: PIN doğrulandı! Güvenli kasa açıldı.\n",
    [
      "break anahtar sözcüğü döngüyü erken sonlandırır.",
      "Hatalı denemelerde sayaç düşürülerek brute-force saldırısı engellenir.",
    ],
  ),
  port_scan: example(
    "examples/week04/port_scanner_mock.py",
    '# for ve range ile hedef portları tarama simülasyonu\nbaslangic = int(input("Başlangıç portu: "))\nbitis = int(input("Bitiş portu: "))\nacik_portlar = [21, 22, 80, 443]\n\nprint("--- Tarama Başlatıldı ---")\nfor port in range(baslangic, bitis + 1):\n    if port in acik_portlar:\n        print(f"Port {port}: [AÇIK] Servis tespit edildi")\n    else:\n        print(f"Port {port}: [KAPALI]")\nprint("--- Tarama Tamamlandı ---")',
    "79\n81",
    "Başlangıç portu: Bitiş portu: --- Tarama Başlatıldı ---\nPort 79: [KAPALI]\nPort 80: [AÇIK] Servis tespit edildi\nPort 81: [KAPALI]\n--- Tarama Tamamlandı ---\n",
    [
      "range(baslangic, bitis + 1) belirlenen port aralığında ardışık sayılar üretir.",
      "in operatörü ile açık portlar listesinde tarama yapılır.",
    ],
  ),
  traffic_sum: example(
    "examples/week04/traffic_accumulator.py",
    '# Sayaç ve Toplayıcı kalıbı ile ağ trafiği analizi\npaket_adedi = int(input("İncelenecek paket adedi: "))\ntoplam_bayt = 0\nbuyuk_paket_sayaci = 0\n\nfor i in range(1, paket_adedi + 1):\n    boyut = int(input(f"Paket {i} boyutu (bayt): "))\n    toplam_bayt += boyut\n    if boyut > 1000:\n        buyuk_paket_sayaci += 1\n\nprint("Toplam aktarılan veri:", toplam_bayt, "bayt")\nprint("1000 bayt üzeri şüpheli paket sayısı:", buyuk_paket_sayaci)',
    "3\n500\n1500\n300",
    "İncelenecek paket adedi: Paket 1 boyutu (bayt): Paket 2 boyutu (bayt): Paket 3 boyutu (bayt): Toplam aktarılan veri: 2300 bayt\n1000 bayt üzeri şüpheli paket sayısı: 1\n",
    [
      "toplam_bayt toplayıcı (accumulator) olarak kümülatif toplamı biriktirir.",
      "buyuk_paket_sayaci sayaç (counter) olarak eşiği aşan durumları sayar.",
    ],
  ),
  continue_filter: example(
    "examples/week04/port_filter_continue.py",
    '# continue ile bilinen güvenli portları atlayıp inceleme\nguvenli_portlar = [80, 443]\n\nfor port in range(78, 83):\n    if port in guvenli_portlar:\n        continue\n    print("İnceleniyor (standart dışı port):", port)',
    "",
    "İnceleniyor (standart dışı port): 78\nİnceleniyor (standart dışı port): 79\nİnceleniyor (standart dışı port): 81\nİnceleniyor (standart dışı port): 82\n",
    [
      "continue ifadesi döngünün mevcut adımını hemen sonlandırıp bir sonraki adıma geçer.",
      "Güvenli ve bilinen portlar pas geçilerek şüpheli portlar filtrelenir.",
    ],
  ),
  device_inventory: example(
    "examples/week05/device_inventory.py",
    '# Liste oluşturma, indeksleme ve uzunluk kontrolü\ncihazlar = ["Router-01", "Switch-A", "Firewall-X", "Server-DB"]\n\nprint("Cihaz sayısı:", len(cihazlar))\nprint("İlk cihaz (indeks 0):", cihazlar[0])\nprint("Son cihaz (indeks -1):", cihazlar[-1])\nprint("İlk iki kritik cihaz:", cihazlar[:2])',
    "",
    "Cihaz sayısı: 4\nİlk cihaz (indeks 0): Router-01\nSon cihaz (indeks -1): Server-DB\nİlk iki kritik cihaz: ['Router-01', 'Switch-A']\n",
    [
      "Listeler köşeli parantez [] ile tanımlanır ve sıralı eleman tutar.",
      "İndeksler 0'dan başlar; negatif indeksler sondan başa doğru erişir.",
      "Dilimleme (slicing) [start:stop] ile listenin bir alt kümesi kopyalanır.",
    ],
  ),
  blacklist_check: example(
    "examples/week05/ip_blacklist_check.py",
    '# in operatörü ile IP kara liste kontrolü\nkara_liste = ["192.168.1.105", "10.0.0.99", "172.16.5.20"]\n\ngelen_ip = input("Sorgulanacak IP: ").strip()\n\nif gelen_ip in kara_liste:\n    print("ERİŞİM ENGEL: Bu IP adresi kara listede!")\nelse:\n    print("ERİŞİM İZİN: IP güvenli görünüyor.")',
    "192.168.1.105",
    "Sorgulanacak IP: ERİŞİM ENGEL: Bu IP adresi kara listede!\n",
    [
      "in anahtar sözcüğü bir elemanın liste içinde var olup olmadığını Boolean olarak döndürür.",
      "Ağ güvenlik duvarlarında kara liste denetimi bu mantıkla yapılır.",
    ],
  ),
  list_operations: example(
    "examples/week05/list_operations.py",
    '# Dinamik liste yönetimi: append ve remove\nengellenen_portlar = [23, 25]\nprint("Başlangıç listesi:", engellenen_portlar)\n\nyeni_port = int(input("Engellenecek yeni port: "))\nengellenen_portlar.append(yeni_port)\nprint("Eklendikten sonra:", engellenen_portlar)\n\nif 23 in engellenen_portlar:\n    engellenen_portlar.remove(23)\n    print("Telnet (23) listeden kaldırıldı:", engellenen_portlar)',
    "135",
    "Başlangıç listesi: [23, 25]\nEngellenecek yeni port: Eklendikten sonra: [23, 25, 135]\nTelnet (23) listeden kaldırıldı: [25, 135]\n",
    [
      "append() listenin sonuna yeni bir eleman ekler.",
      "remove() belirtilen değeri liste içinden siler.",
    ],
  ),
  failed_login_stats: example(
    "examples/week05/failed_login_stats.py",
    '# Sayı dizisi üzerinde for döngüsü ve istatistik\nhatali_girisler = [3, 1, 0, 7, 2, 14, 4]\n\ntoplam = 0\nsupheli_gunler = 0\n\nfor sayi in hatali_girisler:\n    toplam += sayi\n    if sayi >= 5:\n        supheli_gunler += 1\n\nortalama = toplam / len(hatali_girisler)\nprint("Toplam hatalı giriş:", toplam)\nprint(f"Haftalık ortalama: {ortalama:.2f}")\nprint("Eşik (5) üstü şüpheli gün sayısı:", supheli_gunler)',
    "",
    "Toplam hatalı giriş: 31\nHaftalık ortalama: 4.43\nEşik (5) üstü şüpheli gün sayısı: 2\n",
    [
      "for eleman in liste: yapısı her bir elemanı sırayla ziyaret eder.",
      "Sayaç ve toplayıcı kalıpları listelerle birleştirilerek istatistik üretilir.",
    ],
  ),
  password_length_filter: example(
    "examples/week05/password_length_filter.py",
    '# Liste elemanlarını döngüyle denetleyip yeni bir listeye ayıklama\nparolalar = ["admin1", "supersecret2026", "123", "bgt_lab_pass!"]\nguvensizler = []\n\nfor p in parolalar:\n    if len(p) < 8:\n        guvensizler.append(p)\n\nprint("Taranan toplam parola:", len(parolalar))\nprint("8 karakterden kısa güvensiz parolalar:", guvensizler)',
    "",
    "Taranan toplam parola: 4\n8 karakterden kısa güvensiz parolalar: ['admin1', '123']\n",
    [
      "Filtreleme kalıbı: Boş bir liste açılır, koşulu sağlayanlar append() ile toplanır.",
      "len() hem listenin eleman sayısını hem de metnin karakter uzunluğunu verir.",
    ],
  ),
  traffic_max_detector: example(
    "examples/week05/traffic_max_detector.py",
    '# Döngü ile listede en büyük değeri (anomali tepe noktasını) bulma\npaket_boyutlari = [120, 450, 1500, 8900, 320, 1400]\n\nen_buyuk = paket_boyutlari[0]\n\nfor boyut in paket_boyutlari:\n    if boyut > en_buyuk:\n        en_buyuk = boyut\n\nprint("İncelenen paketler:", paket_boyutlari)\nprint("Tepe paket boyutu (olası anomali):", en_buyuk, "bayt")',
    "",
    "İncelenen paketler: [120, 450, 1500, 8900, 320, 1400]\nTepe paket boyutu (olası anomali): 8900 bayt\n",
    [
      "En büyük değeri bulurken ilk eleman başlangıç varsayılır.",
      "Döngüde daha büyük bir değerle karşılaşıldığında en_buyuk güncellenir.",
    ],
  ),
  queue_event_processor: example(
    "examples/week05/queue_event_processor.py",
    '# While döngüsü ve liste ile FIFO güvenlik olay kuyruğu işleme\nolay_kuyrugu = ["SYN_FLOOD", "SSH_BRUTEFORCE", "PORT_SCAN", "SQL_INJECTION"]\nislenen_olaylar = []\nkritik_sayisi = 0\n\nprint("Başlangıç kuyruk boyutu:", len(olay_kuyrugu))\n\nwhile len(olay_kuyrugu) > 0:\n    suanki_olay = olay_kuyrugu.pop(0)  # Kuyruğun başındaki ilk olayı al ve çıkar\n    islenen_olaylar.append(suanki_olay)\n    if suanki_olay in ["SYN_FLOOD", "SQL_INJECTION"]:\n        kritik_sayisi += 1\n\nprint("İşlenen olay sayısı:", len(islenen_olaylar))\nprint("Tespit edilen kritik tehdit:", kritik_sayisi)\nprint("Kalan kuyruk:", olay_kuyrugu)',
    "",
    "Başlangıç kuyruk boyutu: 4\nİşlenen olay sayısı: 4\nTespit edilen kritik tehdit: 2\nKalan kuyruk: []\n",
    [
      "pop(0) metodu listenin ilk elemanını kuyruktan çeker ve listeden siler.",
      "while len(kuyruk) > 0 döngüsü liste boşalana kadar dinamik olarak çalışır.",
    ],
  ),
  while_linear_search: example(
    "examples/week05/while_linear_search.py",
    '# While döngüsü ve indeks sayacı ile doğrusal liste araması\nsupheli_macler = ["00:1A:2B:3C:4D:5E", "AA:BB:CC:DD:EE:FF", "12:34:56:78:9A:BC"]\nhedef_mac = input("Aranacak MAC adresi: ").strip().upper()\n\ni = 0\nbulundu = False\nbulunan_indeks = -1\n\nwhile i < len(supheli_macler):\n    if supheli_macler[i] == hedef_mac:\n        bulundu = True\n        bulunan_indeks = i\n        break  # Hedef bulunduğunda döngüyü erken sonlandır\n    i += 1\n\nif bulundu:\n    print(f"ALARM: Şüpheli MAC bulundu! İndeks: {bulunan_indeks}")\nelse:\n    print("GÜVENLİ: MAC adresi şüpheli listesinde yok.")',
    "AA:BB:CC:DD:EE:FF",
    "Aranacak MAC adresi: ALARM: Şüpheli MAC bulundu! İndeks: 1\n",
    [
      "While döngüsünde indeks değişkeni (i) elle yönetilir ve her adımda i += 1 ile artırılır.",
      "break anahtar sözcüğü aranan eleman bulunduğunda gereksiz turları önler.",
    ],
  ),
  firewall_matrix_2d: example(
    "examples/week05/firewall_matrix_2d.py",
    '# 2 Boyutlu Dizi (Matris): Sunucuların 3 günlük hata logları\n# matris[satir][sutun] -> [Sunucu No][Gün No]\nlog_matrisi = [\n    [12, 45, 8],    # Web-01 (Pzt, Sal, Çar)\n    [3, 98, 14],    # DB-01\n    [27, 5, 62]     # Auth-01\n]\n\nsunucu_adlari = ["Web-01", "DB-01", "Auth-01"]\ngenel_toplam = 0\nen_yuksek_hata = log_matrisi[0][0]\nen_riskli_sunucu = ""\nen_riskli_gun = -1\n\nfor r in range(len(log_matrisi)):\n    satir_toplami = 0\n    for c in range(len(log_matrisi[r])):\n        hata = log_matrisi[r][c]\n        satir_toplami += hata\n        genel_toplam += hata\n        if hata > en_yuksek_hata:\n            en_yuksek_hata = hata\n            en_riskli_sunucu = sunucu_adlari[r]\n            en_riskli_gun = c + 1\n    print(f"{sunucu_adlari[r]} 3 günlük toplam: {satir_toplami}")\n\nprint("Tüm sunucularda genel toplam hata:", genel_toplam)\nprint(f"Tepe Anomali: {en_riskli_sunucu} (Gün {en_riskli_gun}) -> {en_yuksek_hata} hata")',
    "",
    "Web-01 3 günlük toplam: 65\nDB-01 3 günlük toplam: 115\nAuth-01 3 günlük toplam: 94\nTüm sunucularda genel toplam hata: 274\nTepe Anomali: DB-01 (Gün 2) -> 98 hata\n",
    [
      "2 boyutlu listelerde matris[r][c] sözdizimi ile r satırına ve c sütununa erişilir.",
      "İç içe (nested) iki for döngüsü tablonun tüm satır ve sütunlarını sırayla tarar.",
    ],
  ),
  acl_matrix: example(
    "examples/week05/acl_matrix.py",
    '# 2 Boyutlu Dizi: Rol Tabanlı Erişim Kontrol Matrisi (ACL)\n# İzinler: [Okuma(0), Yazma(1), Silme(2)]\nyetki_matrisi = [\n    [1, 0, 0],  # Misafir: sadece Okuma\n    [1, 1, 0],  # Operatör: Okuma + Yazma\n    [1, 1, 1]   # Güvenlik Yöneticisi: Okuma + Yazma + Silme\n]\n\nroller = ["Misafir", "Operatör", "Yönetici"]\nislemler = ["Okuma", "Yazma", "Silme"]\n\nrol_id = int(input("Rol seçin (0: Misafir, 1: Operatör, 2: Yönetici): "))\nislem_id = int(input("İşlem seçin (0: Okuma, 1: Yazma, 2: Silme): "))\n\nif 0 <= rol_id <= 2 and 0 <= islem_id <= 2:\n    yetki = yetki_matrisi[rol_id][islem_id]\n    if yetki == 1:\n        print(f"ONAY: {roller[rol_id]} kullanıcısı için {islemler[islem_id]} izni VERİLDİ.")\n    else:\n        print(f"RED: {roller[rol_id]} kullanıcısının {islemler[islem_id]} yetkisi YOK!")\nelse:\n    print("Hata: Geçersiz rol veya işlem numarası.")',
    "1\n2",
    "Rol seçin (0: Misafir, 1: Operatör, 2: Yönetici): İşlem seçin (0: Okuma, 1: Yazma, 2: Silme): RED: Operatör kullanıcısının Silme yetkisi YOK!\n",
    [
      "Erişim kontrol matrisi (ACL), güvenlik modellerinde 2D ikili (0/1) matrislerle ifade edilir.",
      "İki boyutlu koordinat kontrolü [rol][islem] ile O(1) sabit sürede yetki doğrulanır.",
    ],
  ),
  datacenter_sensors_3d: example(
    "examples/week05/datacenter_sensors_3d.py",
    '# 3 Boyutlu Dizi: Veri Merkezi Sıcaklık Sensör Küpü\n# Boyutlar: [Şube / Veri Merkezi][Kabin][Sunucu Sensörü]\nsensor_kupu = [\n    # Şube 0 (İstanbul)\n    [\n        [24, 26, 28],  # Kabin 0\n        [22, 23, 31]   # Kabin 1\n    ],\n    # Şube 1 (Ankara)\n    [\n        [21, 22, 22],  # Kabin 0\n        [25, 29, 36]   # Kabin 1\n    ]\n]\n\nsube_adlari = ["İstanbul", "Ankara"]\nesik_derece = 30\nalarm_koordinatlari = []\n\nfor b in range(len(sensor_kupu)):             # 1. Boyut: Şube\n    for r in range(len(sensor_kupu[b])):         # 2. Boyut: Kabin\n        for c in range(len(sensor_kupu[b][r])):     # 3. Boyut: Sunucu\n            derece = sensor_kupu[b][r][c]\n            if derece >= esik_derece:\n                konum = f"{sube_adlari[b]} Kabin-{r} Sunucu-{c} ({derece}°C)"\n                alarm_koordinatlari.append(konum)\n\nprint("İncelenen toplam sensör:", 2 * 2 * 3)\nprint(f"Kritik ısı eşiğini ({esik_derece}°C) aşan noktalar:")\nfor alarm in alarm_koordinatlari:\n    print("[ALARM]:", alarm)',
    "",
    "İncelenen toplam sensör: 12\nKritik ısı eşiğini (30°C) aşan noktalar:\n[ALARM]: İstanbul Kabin-1 Sunucu-2 (31°C)\n[ALARM]: Ankara Kabin-1 Sunucu-2 (36°C)\n",
    [
      "3 boyutlu listeler [blok][satir][sutun] hiyerarşik veri yapısıyla derinlik modeller.",
      "3 iç içe for döngüsü ile küpün tüm koordinatları taranarak anomali noktaları yakalanır.",
    ],
  ),
  print_fstring_mastery: example(
    "examples/week06/print_fstring_mastery.py",
    '# print() fonksiyonunun gelişmiş parametreleri ve f-string yetenekleri\n\n# 1. sep parametresi ile özel ayraçlar\nprint("192", "168", "1", "105", sep=".")\nprint("2026-10-20", "10:15:30", "FIREWALL", "DROP", sep=" | ")\n\n# 2. end parametresi ile satır sonunu yönetme\nprint("Port 443 taranıyor", end="... ")\nprint("[AÇIK]")\n\n# 3. f-string ile matematiksel işlem ve metot çağırma\nkullanici = "   admin   "\nyetki_seviyesi = 3\nprint(f"Kullanıcı: {kullanici.strip().upper()} (Yetki x2: {yetki_seviyesi * 2})")\n\n# 4. Sütun hizalama ile CLI güvenlik tablosu oluşturma (< sola, > sağa, ^ ortala)\nprint("-" * 35)\nprint(f"{\'HEDEF IP\':<15} {\'PORT\':^8} {\'DURUM\':>10}")\nprint("-" * 35)\nprint(f"{\'10.0.0.1\':<15} {80:^8} {\'İZİN\':>10}")\nprint(f"{\'192.168.1.99\':<15} {443:^8} {\'BLOKE\':>10}")\nprint("-" * 35)\n\n# 5. Sayı formatlama: Basamak hassasiyeti (.2f) ve Hex/Binary tabanları\nkayip_orani = 0.04567\nport_numarasi = 443\nprint(f"Paket Kaybı: %{kayip_orani * 100:.2f}")\nprint(f"Port 443 Hex: {port_numarasi:#06x} | İkili (Binary): {port_numarasi:016b}")\n\n# 6. Hızlı Debugging sözdizimi ({degisken=})\ntoken = "BGT_SECRET_99"\nprint(f"Debug Çıktısı -> {token=}")',
    "",
    "192.168.1.105\n2026-10-20 | 10:15:30 | FIREWALL | DROP\nPort 443 taranıyor... [AÇIK]\nKullanıcı: ADMIN (Yetki x2: 6)\n-----------------------------------\nHEDEF IP          PORT        DURUM\n-----------------------------------\n10.0.0.1           80          İZİN\n192.168.1.99      443         BLOKE\n-----------------------------------\nPaket Kaybı: %4.57\nPort 443 Hex: 0x01bb | İkili (Binary): 0000000110111011\nDebug Çıktısı -> token='BGT_SECRET_99'\n",
    [
      "sep parametresi argümanlar arasındaki varsayılan boşluğu değiştirir (IP, log, tarih formatı).",
      "end parametresi satır sonuna eklenen '\\n' karakterini ezerek aynı satırda devam etmeyi sağlar.",
      "f-string süslü parantez '{}' içinde doğrudan değişken, hesaplama ve metot çalıştırmayı destekler.",
      "Hizalama (<, >, ^) ve format belirteçleri (.2f, hex/bin, {degisken=}) profesyonel CLI çıktıları sunar.",
    ],
  ),
  def_greet: example(
    "examples/week06/def_greet.py",
    '# Fonksiyon tanımlama (def) ve parametre ile çağırma\ndef kullanici_karsila(kullanici_adi, rol):\n    print("Sisteme hoş geldiniz:", kullanici_adi)\n    print("Mevcut rolünüz:", rol)\n\nkullanici_karsila("Ahmet", "Operatör")\nkullanici_karsila("Zeynep", "Güvenlik Yöneticisi")',
    "",
    "Sisteme hoş geldiniz: Ahmet\nMevcut rolünüz: Operatör\nSisteme hoş geldiniz: Zeynep\nMevcut rolünüz: Güvenlik Yöneticisi\n",
    [
      "def anahtar sözcüğü ile fonksiyon tanımlanır ve girintili blok fonksiyon gövdesini oluşturur.",
      "Fonksiyon çağrıldığında parametrelere karşılık gelen argümanlar sırayla aktarılır.",
    ],
  ),
  calc_return: example(
    "examples/week06/calc_return.py",
    '# return anahtar sözcüğü ile değer döndürme ve sonucu değişkene aktarma\ndef kare_al(sayi):\n    return sayi * sayi\n\ndef cift_mi(sayi):\n    return sayi % 2 == 0\n\nx = int(input("Bir sayı girin: "))\nkare = kare_al(x)\ndurum = cift_mi(x)\n\nprint(f"Girdi: {x}")\nprint(f"Karesi: {kare}")\nprint(f"Çift sayı mı?: {durum}")',
    "6",
    "Bir sayı girin: Girdi: 6\nKaresi: 36\nÇift sayı mı?: True\n",
    [
      "return fonksiyonun çalışmasını bitirir ve üretilen sonucu çağıran yere geri yollar.",
      "print ekrana çıktı basarken, return fonksiyon sonucunu başka hesaplamalarda kullanmak üzere verir.",
    ],
  ),
  default_params: example(
    "examples/week06/default_params.py",
    '# Varsayılan (default) parametreler ve opsiyonel argüman yönetimi\ndef baglanti_olustur(ip, port=80, protokol="HTTP"):\n    return f"{protokol}://{ip}:{port}"\n\n# Varsayılan port (80) ve protokol (HTTP) kullanılır\nurl1 = baglanti_olustur("192.168.1.10")\n# Port ve protokol elle ezilebilir (override)\nurl2 = baglanti_olustur("10.0.0.1", port=443, protokol="HTTPS")\nurl3 = baglanti_olustur("172.16.0.5", 8080)\n\nprint("Varsayılan bağlantı:", url1)\nprint("Güvenli bağlantı:", url2)\nprint("Özel port bağlantısı:", url3)',
    "",
    "Varsayılan bağlantı: HTTP://192.168.1.10:80\nGüvenli bağlantı: HTTPS://10.0.0.1:443\nÖzel port bağlantısı: HTTP://172.16.0.5:8080\n",
    [
      "Varsayılan parametreler fonksiyon çağrısında belirtilmezse tanımlanan ilk değerlerini alır.",
      "İsimlendirilmiş argümanlar (port=443 gibi) kodun okunabilirliğini ve esnekliğini artırır.",
    ],
  ),
  scope_local_global: example(
    "examples/week06/scope_local_global.py",
    '# Yerel (Local) ve Genel (Global) değişken kapsamı (Scope)\nsistem_adi = "BGT_Guvenlik_Duvari"\n\ndef oturum_sayaci():\n    yerel_sayac = 5\n    print(f"[{sistem_adi}] Fonksiyon içi sayaç: {yerel_sayac}")\n\noturum_sayaci()\nprint(f"Sistem adı dışarıda da erişilebilir: {sistem_adi}")',
    "",
    "[BGT_Guvenlik_Duvari] Fonksiyon içi sayaç: 5\nSistem adı dışarıda da erişilebilir: BGT_Guvenlik_Duvari\n",
    [
      "Fonksiyon içinde tanımlanan değişkenler (yerel) fonksiyon bitince bellekten silinir.",
      "Dışarıdaki genel değişkenler fonksiyon içinden okunabilir ancak yan etki yaratmamak için doğrudan değiştirilmemelidir.",
    ],
  ),
  multi_return: example(
    "examples/week06/multi_return.py",
    '# Birden fazla değer döndürme (Tuple unpacking)\ndef paket_istatistikleri(paketler):\n    toplam = sum(paketler)\n    en_kucuk = min(paketler)\n    en_buyuk = max(paketler)\n    ortalama = round(toplam / len(paketler), 1)\n    return toplam, en_kucuk, en_buyuk, ortalama\n\nveri = [128, 512, 1400, 64, 1500]\ntoplam_b, min_b, max_b, ort_b = paket_istatistikleri(veri)\n\nprint("İncelenen paketler:", veri)\nprint(f"Toplam Boyut: {toplam_b} bayt")\nprint(f"En Küçük: {min_b} bayt | En Büyük: {max_b} bayt")\nprint(f"Ortalama: {ort_b} bayt")',
    "",
    "İncelenen paketler: [128, 512, 1400, 64, 1500]\nToplam Boyut: 3604 bayt\nEn Küçük: 64 bayt | En Büyük: 1500 bayt\nOrtalama: 720.8 bayt\n",
    [
      "Python'da return deger1, deger2 sözdizimi ile virgülle ayrılmış çoklu değerler tek seferde döndürülür.",
      "Dönen değerler çağrılan tarafta sırasıyla değişkenlere paket açılarak (unpacking) atanır.",
    ],
  ),
  port_validator: example(
    "examples/week06/port_validator.py",
    '# Savunmacı programlama: Erken çıkış (Guard Clause) ile port doğrulama\ndef port_gecerli_mi(port):\n    if not isinstance(port, int):\n        return False\n    if port < 1 or port > 65535:\n        return False\n    return True\n\ndef port_kategorisi(port):\n    if not port_gecerli_mi(port):\n        return "GEÇERSİZ_PORT"\n    if port < 1024:\n        return "Sistem (Well-known)"\n    elif port <= 49151:\n        return "Kayıtlı (Registered)"\n    else:\n        return "Dinamik/Özel (Dynamic)"\n\ntest_portlari = [22, 8080, 55000, 70000]\nfor p in test_portlari:\n    durum = port_gecerli_mi(p)\n    kat = port_kategorisi(p)\n    print(f"Port {p} -> Geçerli: {durum} | Kategori: {kat}")',
    "",
    "Port 22 -> Geçerli: True | Kategori: Sistem (Well-known)\nPort 8080 -> Geçerli: True | Kategori: Kayıtlı (Registered)\nPort 55000 -> Geçerli: True | Kategori: Dinamik/Özel (Dynamic)\nPort 70000 -> Geçerli: False | Kategori: GEÇERSİZ_PORT\n",
    [
      "port_gecerli_mi tek bir sorumluluğa sahiptir: portun geçerliliğini doğrulamak.",
      "port_kategorisi fonksiyonu diğer fonksiyonu yardımcı olarak çağırarak kod tekrarını önler.",
    ],
  ),
  password_strength_func: example(
    "examples/week06/password_strength_func.py",
    '# Parola gücünü parçalı fonksiyonlarla denetleme\ndef uzunluk_yeterli_mi(parola, min_uzunluk=8):\n    return len(parola) >= min_uzunluk\n\ndef rakam_icerir_mi(parola):\n    for karakter in parola:\n        if karakter.isdigit():\n            return True\n    return False\n\ndef ozel_karakter_icerir_mi(parola):\n    ozel_karakterler = "!@#$%^&*-_+=?"\n    for karakter in parola:\n        if karakter in ozel_karakterler:\n            return True\n    return False\n\ndef parola_skoru_hesapla(parola):\n    skor = 0\n    if uzunluk_yeterli_mi(parola):\n        skor += 1\n    if rakam_icerir_mi(parola):\n        skor += 1\n    if ozel_karakter_icerir_mi(parola):\n        skor += 1\n    return skor\n\nparolalar = ["12345", "gizli123", "Bgt2026!"]\nfor p in parolalar:\n    puan = parola_skoru_hesapla(p)\n    seviye = "Zayıf" if puan < 2 else ("Orta" if puan == 2 else "Güçlü")\n    print(f"Parola: {p} -> Puan: {puan}/3 ({seviye})")',
    "",
    "Parola: 12345 -> Puan: 1/3 (Zayıf)\nParola: gizli123 -> Puan: 2/3 (Orta)\nParola: Bgt2026! -> Puan: 3/3 (Güçlü)\n",
    [
      "Karmaşık bir problem (parola analizi), 3 küçük bağımsız fonksiyona parçalanmıştır.",
      "Her fonksiyon tek bir işi mükemmel yapar ve bağımsız olarak birim teste tabi tutulabilir.",
    ],
  ),
  incident_classifier: example(
    "examples/week06/incident_classifier.py",
    '# Problem parçalama: Güvenlik olayı puanlama ve aksiyon belirleme\ndef siddet_carpani(olay_turu):\n    if olay_turu == "DDoS":\n        return 3.0\n    elif olay_turu == "SQLi":\n        return 2.5\n    elif olay_turu == "BruteForce":\n        return 1.5\n    return 1.0\n\ndef risk_skoru(olay_turu, etkilenen_kullanici):\n    carpan = siddet_carpani(olay_turu)\n    return round(carpan * etkilenen_kullanici, 1)\n\ndef aksiyon_oner(skor):\n    if skor >= 100:\n        return "ACİL: Ağ erişimini kes ve SOC ekibini ara!"\n    elif skor >= 30:\n        return "UYARI: IP adresini geçici kara listeye al."\n    else:\n        return "BİLGİ: Rutin log takibi yap."\n\nolaylar = [\n    ("BruteForce", 10),\n    ("SQLi", 20),\n    ("DDoS", 50)\n]\n\nfor olay, kullanici in olaylar:\n    skor = risk_skoru(olay, kullanici)\n    karar = aksiyon_oner(skor)\n    print(f"Olay: {olay} (Kullanıcı: {kullanici}) -> Skor: {skor} | Aksiyon: {karar}")',
    "",
    "Olay: BruteForce (Kullanıcı: 10) -> Skor: 15.0 | Aksiyon: BİLGİ: Rutin log takibi yap.\nOlay: SQLi (Kullanıcı: 20) -> Skor: 50.0 | Aksiyon: UYARI: IP adresini geçici kara listeye al.\nOlay: DDoS (Kullanıcı: 50) -> Skor: 150.0 | Aksiyon: ACİL: Ağ erişimini kes ve SOC ekibini ara!\n",
    [
      "Büyük karar mekanizması 3 fonksiyon arasında dağıtılmıştır: çarpan bulma, skor hesaplama ve aksiyon önerme.",
      "Değişen iş kuralları (örneğin skor eşikleri) yalnızca ilgili fonksiyon içinde güncellenir.",
    ],
  ),
  str_indexing_slicing: example(
    "examples/week07/str_indexing_slicing.py",
    '# String indeksleme, negatif indeks ve dilimleme (slicing)\nkod = "BGT-2026-SEC"\n\nprint("Metin:", kod)\nprint("Uzunluk (len):", len(kod))\nprint("İlk karakter [0]:", kod[0])\nprint("Son karakter [-1]:", kod[-1])\nprint("Bölüm kodu [0:3]:", kod[0:3])\nprint("Yıl kısmı [4:8]:", kod[4:8])\nprint("Son takı [9:]:", kod[9:])\nprint("Tersten yazım [::-1]:", kod[::-1])',
    "",
    "Metin: BGT-2026-SEC\nUzunluk (len): 12\nİlk karakter [0]: B\nSon karakter [-1]: C\nBölüm kodu [0:3]: BGT\nYıl kısmı [4:8]: 2026\nSon takı [9:]: SEC\nTersten yazım [::-1]: CES-6202-TGB\n",
    [
      "String'ler karakterler dizisidir; 0 tabanlı indeksleme ve dilimleme kuralları geçerlidir.",
      "[::-1] negatif adım parametresiyle metni pratik biçimde tersine çevirir.",
    ],
  ),
  str_case_strip: example(
    "examples/week07/str_case_strip.py",
    '# Harf boyutu dönüşümleri (upper, lower) ve boşluk temizleme (strip)\nkirli_girdi = "   Admin_BGT   \\n"\ntemiz = kirli_girdi.strip()\n\nprint("Orijinal ham girdi:", repr(kirli_girdi))\nprint("strip() sonrası:", repr(temiz))\nprint("upper() ile büyük:", temiz.upper())\nprint("lower() ile küçük:", temiz.lower())\n\nkullanici_rolu = "  aDMin  ".strip().lower()\nif kullanici_rolu == "admin":\n    print("Doğrulama başarılı: Tam yönetici erişimi verildi.")\nelse:\n    print("Erişim reddedildi.")',
    "",
    "Orijinal ham girdi: '   Admin_BGT   \\n'\nstrip() sonrası: 'Admin_BGT'\nupper() ile büyük: ADMIN_BGT\nlower() ile küçük: admin_bgt\nDoğrulama başarılı: Tam yönetici erişimi verildi.\n",
    [
      "strip() baştaki ve sondaki gereksiz boşlukları, tab ve satır sonu (\\n) karakterlerini budar.",
      "lower() veya upper() kullanılarak yapılan vaka-duyarsız karşılaştırmalar kullanıcı hatalarını önler.",
    ],
  ),
  str_inspection: example(
    "examples/week07/str_inspection.py",
    '# Metin sorgulama metotları: startswith, endswith, isdigit, in\nurl = "https://banka.com/odeme.php"\ndosya = "rapor_yedek.tar.gz"\ntc_no = "12345678901"\n\nprint("HTTPS ile mi başlıyor?:", url.startswith("https://"))\nprint(".gz ile mi bitiyor?:", dosya.endswith(".gz"))\nprint("tc_no tamamen rakamlardan mı oluşuyor?:", tc_no.isdigit())\n\nistek = "GET /login.php?user=admin\' OR \'1\'=\'1 HTTP/1.1"\nif "\' OR \'" in istek:\n    print("ALARM: SQL Enjeksiyon şüphesi tespit edildi!")',
    "",
    "HTTPS ile mi başlıyor?: True\n.gz ile mi bitiyor?: True\ntc_no tamamen rakamlardan mı oluşuyor?: True\nALARM: SQL Enjeksiyon şüphesi tespit edildi!\n",
    [
      "startswith ve endswith protokol ve dosya uzantısı doğrulamalarında kullanılır.",
      "in operatörü metin içinde belirli bir saldırı imzasının (signature) geçip geçmediğini Boolean kontrol eder.",
    ],
  ),
  str_split_join: example(
    "examples/week07/str_split_join.py",
    '# split() ile metni listeye ayırma ve join() ile listeyi birleştirme\nip_adresi = "192.168.1.100"\noktetler = ip_adresi.split(".")\nprint("IP Oktetleri listesi:", oktetler)\nprint("1. Oktet (Ağ sınıfı):", oktetler[0])\n\ncsv_satiri = "ahmet;10.0.0.5;SSH;Yetkili"\nalanlar = csv_satiri.split(";")\nprint(f"Kullanıcı: {alanlar[0]} | IP: {alanlar[1]} | Protokol: {alanlar[2]}")\n\nyasakli_kelimeler = ["root", "admin", "guest"]\nfiltre_kurali = " | ".join(yasakli_kelimeler)\nprint("Oluşturulan regex kuralı:", filtre_kurali)',
    "",
    "IP Oktetleri listesi: ['192', '168', '1', '100']\n1. Oktet (Ağ sınıfı): 192\nKullanıcı: ahmet | IP: 10.0.0.5 | Protokol: SSH\nOluşturulan regex kuralı: root | admin | guest\n",
    [
      "split(ayrac) metni belirtilen ayraçtan parçalayarak liste haline getirir.",
      "ayrac.join(liste) liste elemanlarını aralarına ayracı ekleyerek tek bir string'e birleştirir.",
    ],
  ),
  str_replace_mask: example(
    "examples/week07/str_replace_mask.py",
    '# replace() ile veri temizleme ve hassas veri maskeleme\nkredi_karti = "4543-1234-5678-9012"\nmaskeli = "****-****-****-" + kredi_karti[-4:]\nprint("Orijinal Kart:", kredi_karti)\nprint("Maskeli Kart :", maskeli)\n\nlog = "GIRIS_DENEMESI user=mehmet pass=Sifre2026! sonuc=FAIL"\nguvenli_log = log.replace("pass=Sifre2026!", "pass=********")\nprint("Temizlenmiş Log:", guvenli_log)\n\nguvensiz_yol = "/var/www/uploads/../../etc/passwd"\ntemiz_yol = guvensiz_yol.replace("../", "")\nprint("Filtrelenmiş dosya yolu:", temiz_yol)',
    "",
    "Orijinal Kart: 4543-1234-5678-9012\nMaskeli Kart : ****-****-****-9012\nTemizlenmiş Log: GIRIS_DENEMESI user=mehmet pass=******** sonuc=FAIL\nFiltrelenmiş dosya yolu: /var/www/uploads/etc/passwd\n",
    [
      "replace(eski, yeni) metindeki tüm eşleşmeleri yeni değerle değiştirir.",
      "Kişisel verilerin (PII) ve parolaların loglara açık düşmesini önlemek için maskeleme kullanılır.",
    ],
  ),
  log_single_line_parser: example(
    "examples/week07/log_single_line_parser.py",
    '# Basit web sunucu log satırını parçalama (Log Parsing)\nlog_satiri = \'192.168.1.45 - [20/Oct/2026:10:15:30] "POST /api/login HTTP/1.1" 401 230\'\n\nparcalar = log_satiri.split(" ")\nip = parcalar[0]\nzaman = parcalar[2].strip("[]")\nmetod = parcalar[3].strip(\'"\')\nurl = parcalar[4]\ndurum_kodu = int(parcalar[6])\nboyut = int(parcalar[7])\n\nprint("Kaynak IP    :", ip)\nprint("Zaman Damgası:", zaman)\nprint("HTTP Metodu  :", metod)\nprint("Hedef URL    :", url)\nprint("Durum Kodu   :", durum_kodu)\nprint("Yanıt Boyutu :", boyut, "bayt")\n\nif durum_kodu == 401:\n    print("[UYARI]: Başarısız oturum denemesi tespit edildi!")',
    "",
    "Kaynak IP    : 192.168.1.45\nZaman Damgası: 20/Oct/2026:10:15:30\nHTTP Metodu  : POST\nHedef URL    : /api/login\nDurum Kodu   : 401\nYanıt Boyutu : 230 bayt\n[UYARI]: Başarısız oturum denemesi tespit edildi!\n",
    [
      "Log satırları düzenli ayraçlarla (boşluk gibi) ayrıldığında split() ile yapılandırılmış alanlara çevrilebilir.",
      "strip() ile tırnak (\") veya köşeli parantez ([]) gibi gürültü karakterler ayıklanır.",
    ],
  ),
  log_failed_login_filter: example(
    "examples/week07/log_failed_login_filter.py",
    '# Çok satırlı auth logundan başarısız giriş denemelerini süzme\nauth_loglari = [\n    "Oct 20 08:12:01 server sshd: Accepted password for root from 192.168.1.10 port 22",\n    "Oct 20 08:14:22 server sshd: Failed password for invalid user admin from 203.0.113.55 port 4421",\n    "Oct 20 08:14:25 server sshd: Failed password for invalid user admin from 203.0.113.55 port 4424",\n    "Oct 20 08:15:00 server sshd: Failed password for root from 198.51.100.2 port 5122",\n    "Oct 20 08:16:10 server sshd: Accepted password for ahmet from 192.168.1.15 port 22"\n]\n\nbasarisiz_denemeler = []\nsaldirgan_ipler = []\n\nfor satir in auth_loglari:\n    if "Failed password" in satir:\n        basarisiz_denemeler.append(satir)\n        ip_kismi = satir.split("from ")[1].split(" ")[0]\n        saldirgan_ipler.append(ip_kismi)\n\nprint("İncelenen toplam log:", len(auth_loglari))\nprint("Başarısız oturum sayısı:", len(basarisiz_denemeler))\nprint("Tespit edilen saldırgan IP\'ler:", saldirgan_ipler)',
    "",
    "İncelenen toplam log: 5\nBaşarısız oturum sayısı: 3\nTespit edilen saldırgan IP'ler: ['203.0.113.55', '203.0.113.55', '198.51.100.2']\n",
    [
      "for döngüsü ile log satırları sırayla taranır ve 'Failed password' filtresi uygulanır.",
      "split('from ')[1] zinciri aranan bilginin hemen sonrasına konumlanmayı sağlar.",
    ],
  ),
  log_attack_detector: example(
    "examples/week07/log_attack_detector.py",
    '# Web erişim loglarında siber saldırı imzası (XSS, SQLi, LFI) tespiti\nweb_loglari = [\n    "10.0.0.2 - GET /index.html 200",\n    "192.168.1.99 - GET /search?q=<script>alert(1)</script> 403",\n    "172.16.0.4 - GET /download?file=../../../../etc/shadow 403",\n    "10.0.0.5 - POST /login 200",\n    "192.168.1.88 - GET /products?id=1\' UNION SELECT null,password FROM users-- 403"\n]\n\ntehdit_imzalari = {\n    "<script>": "XSS (Cross-Site Scripting)",\n    "../": "Path Traversal (Dizin Gezinme)",\n    "UNION SELECT": "SQL Enjeksiyonu"\n}\n\nalarmlar = []\n\nfor log in web_loglari:\n    for imza, saldiri_turu in tehdit_imzalari.items():\n        if imza in log:\n            ip = log.split(" - ")[0]\n            alarmlar.append(f"[ALARM] {saldiri_turu} -> Kaynak IP: {ip}")\n\nprint("Taranan web istekleri:", len(web_loglari))\nprint(f"Yakalanan şüpheli olay adedi: {len(alarmlar)}")\nfor a in alarmlar:\n    print(a)',
    "",
    "Taranan web istekleri: 5\nYakalanan şüpheli olay adedi: 3\n[ALARM] XSS (Cross-Site Scripting) -> Kaynak IP: 192.168.1.99\n[ALARM] Path Traversal (Dizin Gezinme) -> Kaynak IP: 172.16.0.4\n[ALARM] SQL Enjeksiyonu -> Kaynak IP: 192.168.1.88\n",
    [
      "Güvenlik imza kütüphanesi (sözlük) ile her bir log satırı otomatik karşılaştırılır.",
      "Şüpheli payload yakalandığında kaynak IP izole edilir ve güvenlik analistine raporlanır.",
    ],
  ),
  log_ip_counter: example(
    "examples/week07/log_ip_counter.py",
    '# Basit log analizi: IP bazlı istek sayma ve DoS şüphesi tespiti\nerisim_logu = [\n    "192.168.1.5 - GET /api/data",\n    "10.0.0.99 - GET /index.html",\n    "10.0.0.99 - POST /login",\n    "10.0.0.99 - GET /dashboard",\n    "192.168.1.5 - GET /profile",\n    "10.0.0.99 - GET /reports",\n    "172.16.0.1 - GET /health"\n]\n\nip_sayilari = {}\n\nfor satir in erisim_logu:\n    ip = satir.split(" - ")[0]\n    if ip in ip_sayilari:\n        ip_sayilari[ip] += 1\n    else:\n        ip_sayilari[ip] = 1\n\nprint("IP İstek İstatistikleri:")\nfor ip, adet in ip_sayilari.items():\n    print(f"  {ip}: {adet} istek")\n\nen_cok_istek_yapan = max(ip_sayilari, key=ip_sayilari.get)\nprint(f"En yoğun trafik üreten IP: {en_cok_istek_yapan} ({ip_sayilari[en_cok_istek_yapan]} istek)")\nif ip_sayilari[en_cok_istek_yapan] >= 4:\n    print("[DİKKAT]: Anormal istek yoğunluğu (Olası DoS taraması)!")',
    "",
    "IP İstek İstatistikleri:\n  192.168.1.5: 2 istek\n  10.0.0.99: 4 istek\n  172.16.0.1: 1 istek\nEn yoğun trafik üreten IP: 10.0.0.99 (4 istek)\n[DİKKAT]: Anormal istek yoğunluğu (Olası DoS taraması)!\n",
    [
      "Sözlük (dict) sayacı ile her benzersiz IP'nin frekansı hesaplanır.",
      "Anormal istek yoğunluğuna sahip IP adresleri hız sınırı (rate-limiting) uygulamak üzere tespit edilir.",
    ],
  ),
};

export const webExamples = {
  welcome: {
    path: "examples/web/week01",
    title: "İlk etkileşimli sayfam",
    html: '<h1>Merhaba, Bilgi Güvenliği!</h1>\n<p id="mesaj">İlk web sayfam.</p>\n<button id="dugme" type="button">Mesajı değiştir</button>',
    css: "body { font-family: sans-serif; padding: 24px; background: white; color: #202938; }\nh1 { color: #235c9b; font-size: 24px; }\nbutton { padding: 10px 16px; background: #235c9b; color: white; border: 0; border-radius: 6px; cursor: pointer; }",
    js: 'const dugme = document.querySelector("#dugme");\nconst mesaj = document.querySelector("#mesaj");\ndugme.addEventListener("click", () => {\n  mesaj.textContent = "Bu sayfayı ben yönetiyorum!";\n});',
  },
  grade: {
    path: "examples/web/week02",
    title: "Not kararı: JavaScript karşılığı",
    html: '<label for="notu">Notunuz (0–100)</label>\n<input id="notu" type="number" min="0" max="100" value="50">\n<button id="kontrol" type="button">Kontrol et</button>\n<p id="sonuc" role="status">Henüz değerlendirilmedi.</p>',
    css: "body { font-family: sans-serif; padding: 24px; color: #202938; background: white; }\ninput, button { padding: 10px; margin: 10px 4px 10px 0; }\ninput { width: 90px; }\nbutton { color: white; background: #235c9b; border: 0; border-radius: 5px; }",
    js: 'const alan = document.querySelector("#notu");\nconst sonuc = document.querySelector("#sonuc");\ndocument.querySelector("#kontrol").addEventListener("click", () => {\n  const metin = alan.value.trim();\n  const notu = Number(metin);\n  if (metin === "" || !Number.isFinite(notu) || notu < 0 || notu > 100) {\n    sonuc.textContent = "0–100 arasında bir sayı girin.";\n  } else if (notu >= 50) {\n    sonuc.textContent = "Geçti";\n  } else {\n    sonuc.textContent = "Kaldı";\n  }\n});',
  },
};
