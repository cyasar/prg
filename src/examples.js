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
