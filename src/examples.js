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
