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
