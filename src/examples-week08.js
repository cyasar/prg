// Hafta 8: Dosyalar ve hata yönetimi örnekleri.
// Her örnek kendi sentetik dosyasını hafta08_calisma/ klasörüne önce kendisi yazar;
// bu nedenle bilgisayarda, Google Colab'da, Jupyter'da ve ders sitesinde (Pyodide) aynı şekilde çalışır.
import { example } from "./example-factory.js";

export const week08Examples = {
  file_write_read: example(
    "examples/week08/file_write_read.py",
    "# Dosyaya yazma ve okuma: with open() + UTF-8\n# Örnek önce kendi sentetik dosyasını oluşturur. Bu yüzden bilgisayarda,\n# Google Colab'da, Jupyter'da ve ders sitesinde aynı şekilde çalışır.\nfrom pathlib import Path\n\nklasor = Path(\"hafta08_calisma\")\nklasor.mkdir(exist_ok=True)\ndosya = klasor / \"notlar.txt\"\n\n# 1) Yazma (\"w\"): dosya yoksa oluşturur, varsa içeriğini SİLİP baştan yazar.\nwith open(dosya, \"w\", encoding=\"utf-8\") as f:\n    f.write(\"Güvenlik duvarı kuralı güncellendi\\n\")\n    f.write(\"Yedekleme tamamlandı\\n\")\n    f.write(\"Şüpheli oturum incelendi\\n\")\n\n# 2) read(): dosyanın tamamını tek bir metin olarak döndürür.\nwith open(dosya, \"r\", encoding=\"utf-8\") as f:\n    icerik = f.read()\nprint(\"--- read() ---\")\nprint(icerik, end=\"\")\n\n# 3) Dosya nesnesi üzerinde for: satır satır okur (büyük dosyalarda bellek dostu).\nprint(\"--- for satir in f ---\")\nwith open(dosya, \"r\", encoding=\"utf-8\") as f:\n    numara = 1\n    for satir in f:\n        print(f\"{numara}. {satir.strip()}\")\n        numara += 1\n\n# 4) readlines(): tüm satırları liste olarak verir (satır sonu \\n dahil).\nwith open(dosya, \"r\", encoding=\"utf-8\") as f:\n    satirlar = f.readlines()\nprint(\"Satır sayısı:\", len(satirlar))\nprint(\"İlk satır (repr):\", repr(satirlar[0]))",
    "",
    "--- read() ---\nGüvenlik duvarı kuralı güncellendi\nYedekleme tamamlandı\nŞüpheli oturum incelendi\n--- for satir in f ---\n1. Güvenlik duvarı kuralı güncellendi\n2. Yedekleme tamamlandı\n3. Şüpheli oturum incelendi\nSatır sayısı: 3\nİlk satır (repr): 'Güvenlik duvarı kuralı güncellendi\\n'\n",
    [
      "with open(..., 'w', encoding='utf-8') dosyayı açar; blok bitince dosya otomatik kapanır.",
      "'w' modu dosyayı sıfırdan yazar; Türkçe karakterler için encoding='utf-8' her zaman belirtilir.",
      "read() tüm içeriği tek metin, for satir in f satır satır, readlines() ise liste olarak verir.",
      "Satır sonundaki \\n karakteri strip() ile temizlenir; repr() görünmez karakterleri gösterir.",
    ],
  ),
  file_append_audit: example(
    "examples/week08/file_append_audit.py",
    "# Ekleme modu (\"a\"): mevcut içeriği silmeden dosyanın sonuna yazar\n# Güvenlikte denetim kaydı (audit log) tam olarak böyle tutulur.\nfrom pathlib import Path\n\nklasor = Path(\"hafta08_calisma\")\nklasor.mkdir(exist_ok=True)\ndenetim = klasor / \"denetim.log\"\n\n# Her çalıştırmada aynı sonucu görmek için dosyayı önce \"w\" ile sıfırlıyoruz.\nwith open(denetim, \"w\", encoding=\"utf-8\") as f:\n    f.write(\"2026-11-10 09:00 | sistem | Denetim kaydı başlatıldı\\n\")\n\nolaylar = [\n    (\"09:05\", \"ayse\", \"Oturum açtı\"),\n    (\"09:12\", \"mehmet\", \"Parola değiştirdi\"),\n    (\"09:30\", \"ayse\", \"Rapor indirdi\"),\n]\n\n# \"a\" modu: her yeni olay dosyanın SONUNA eklenir, eski kayıtlar korunur.\nfor saat, kullanici, eylem in olaylar:\n    with open(denetim, \"a\", encoding=\"utf-8\") as f:\n        f.write(f\"2026-11-10 {saat} | {kullanici} | {eylem}\\n\")\n\nwith open(denetim, encoding=\"utf-8\") as f:\n    kayitlar = f.read().splitlines()\n\nprint(\"Denetim kaydı satır sayısı:\", len(kayitlar))\nfor kayit in kayitlar:\n    print(kayit)\nprint(\"Son eylem:\", kayitlar[-1].split(\" | \")[2])",
    "",
    "Denetim kaydı satır sayısı: 4\n2026-11-10 09:00 | sistem | Denetim kaydı başlatıldı\n2026-11-10 09:05 | ayse | Oturum açtı\n2026-11-10 09:12 | mehmet | Parola değiştirdi\n2026-11-10 09:30 | ayse | Rapor indirdi\nSon eylem: Rapor indirdi\n",
    [
      "'a' (append) modu mevcut kayıtları silmeden dosyanın sonuna ekleme yapar.",
      "Denetim kayıtları (audit log) geriye dönük değiştirilmemesi gereken, sürekli büyüyen dosyalardır.",
      "splitlines() satır sonlarını atarak dosyayı satır listesine çevirir.",
    ],
  ),
  path_portable: example(
    "examples/week08/path_portable.py",
    "# pathlib ile her ortamda çalışan (taşınabilir) dosya yolları\n# Windows \"C:\\...\" ile Linux/Colab \"/content/...\" farkını Path nesnesi yönetir.\nfrom pathlib import Path\n\nkok = Path(\"hafta08_calisma\")\nrapor_klasoru = kok / \"raporlar\"          # / operatörü yol parçalarını birleştirir\nrapor_klasoru.mkdir(parents=True, exist_ok=True)\n\ndosyalar = {\n    \"ozet.txt\": \"Toplam olay: 12\\n\",\n    \"uyarilar.txt\": \"Kritik: 2\\nOrta: 5\\n\",\n    \"eski.bak\": \"yedek\\n\",\n}\nfor ad, icerik in dosyalar.items():\n    (rapor_klasoru / ad).write_text(icerik, encoding=\"utf-8\")\n\nhedef = rapor_klasoru / \"uyarilar.txt\"\nprint(\"Göreli yol     :\", hedef.as_posix())\nprint(\"Dosya adı      :\", hedef.name)\nprint(\"Uzantı         :\", hedef.suffix)\nprint(\"Ad (uzantısız) :\", hedef.stem)\nprint(\"Var mı?        :\", hedef.exists())\n\nprint(\"Klasördeki .txt dosyaları:\")\nfor yol in sorted(rapor_klasoru.glob(\"*.txt\")):\n    print(\"  -\", yol.name)\n\neksik = rapor_klasoru / \"yok.txt\"\nprint(\"yok.txt var mı?:\", eksik.exists())\nprint(\"Okunan satırlar:\", hedef.read_text(encoding=\"utf-8\").splitlines())",
    "",
    "Göreli yol     : hafta08_calisma/raporlar/uyarilar.txt\nDosya adı      : uyarilar.txt\nUzantı         : .txt\nAd (uzantısız) : uyarilar\nVar mı?        : True\nKlasördeki .txt dosyaları:\n  - ozet.txt\n  - uyarilar.txt\nyok.txt var mı?: False\nOkunan satırlar: ['Kritik: 2', 'Orta: 5']\n",
    [
      "Path('klasor') / 'dosya.txt' yazımı Windows, macOS, Linux ve Colab'da doğru yolu üretir.",
      "mkdir(parents=True, exist_ok=True) klasör zaten varsa hata vermez.",
      "name, suffix, stem ve exists() dosya hakkında bilgi verir; glob('*.txt') desene uyan dosyaları bulur.",
      "Mutlak yol (C:\\Users\\... veya /content/...) yerine göreli yol kullanmak kodu taşınabilir yapar.",
    ],
  ),
  csv_read_events: example(
    "examples/week08/csv_read_events.py",
    "# CSV okuma: csv.DictReader başlık satırını sözlük anahtarı olarak kullanır\nimport csv\nfrom pathlib import Path\n\nklasor = Path(\"hafta08_calisma\")\nklasor.mkdir(exist_ok=True)\nolay_dosyasi = klasor / \"olaylar.csv\"\n\n# Sentetik (kurgusal) olay verisi. Gerçek kişisel veri kullanmıyoruz.\nsatirlar = [\n    [\"zaman\", \"kullanici\", \"ip\", \"olay\", \"boyut_kb\"],\n    [\"08:01\", \"ayse\", \"10.0.0.5\", \"LOGIN_OK\", \"2\"],\n    [\"08:03\", \"mehmet\", \"10.0.0.8\", \"LOGIN_FAIL\", \"1\"],\n    [\"08:04\", \"mehmet\", \"10.0.0.8\", \"LOGIN_FAIL\", \"1\"],\n    [\"08:10\", \"zeynep\", \"10.0.0.12\", \"FILE_UPLOAD\", \"850\"],\n    [\"08:15\", \"mehmet\", \"10.0.0.8\", \"LOGIN_FAIL\", \"1\"],\n    [\"08:20\", \"ayse\", \"10.0.0.5\", \"FILE_UPLOAD\", \"120\"],\n]\n# newline=\"\" CSV modülünün satır sonlarını kendisinin yönetmesi için gereklidir.\nwith open(olay_dosyasi, \"w\", encoding=\"utf-8\", newline=\"\") as f:\n    yazici = csv.writer(f)\n    yazici.writerows(satirlar)\n\nbasarisiz = 0\ntoplam_kb = 0\nwith open(olay_dosyasi, encoding=\"utf-8\", newline=\"\") as f:\n    okuyucu = csv.DictReader(f)\n    print(\"Sütunlar:\", okuyucu.fieldnames)\n    for kayit in okuyucu:\n        boyut = int(kayit[\"boyut_kb\"])   # CSV'deki her değer metindir -> int()\n        toplam_kb += boyut\n        if kayit[\"olay\"] == \"LOGIN_FAIL\":\n            basarisiz += 1\n        print(f\"{kayit['zaman']} {kayit['kullanici']:<7} {kayit['olay']:<12} {boyut:>4} KB\")\n\nprint(\"Başarısız giriş sayısı:\", basarisiz)\nprint(\"Toplam veri:\", toplam_kb, \"KB\")",
    "",
    "Sütunlar: ['zaman', 'kullanici', 'ip', 'olay', 'boyut_kb']\n08:01 ayse    LOGIN_OK        2 KB\n08:03 mehmet  LOGIN_FAIL      1 KB\n08:04 mehmet  LOGIN_FAIL      1 KB\n08:10 zeynep  FILE_UPLOAD   850 KB\n08:15 mehmet  LOGIN_FAIL      1 KB\n08:20 ayse    FILE_UPLOAD   120 KB\nBaşarısız giriş sayısı: 3\nToplam veri: 975 KB\n",
    [
      "csv.writer satır listelerini doğru biçimde (virgül, tırnak) dosyaya yazar.",
      "CSV dosyaları newline='' ile açılır; satır sonlarını csv modülü yönetir.",
      "csv.DictReader her satırı başlık adlarını anahtar olarak kullanan bir sözlüğe dönüştürür.",
      "CSV'den okunan her değer metindir; sayısal işlem için int() ile dönüştürülür.",
    ],
  ),
  csv_summary_report: example(
    "examples/week08/csv_summary_report.py",
    "# Haftanın uygulaması: sentetik CSV günlüğünden kullanıcı bazlı ÖZET dosyası üretme\nimport csv\nfrom pathlib import Path\n\nklasor = Path(\"hafta08_calisma\")\nklasor.mkdir(exist_ok=True)\ngirdi = klasor / \"gunluk.csv\"\ncikti = klasor / \"ozet.csv\"\n\nornek_veri = \"\"\"zaman,kullanici,olay\n08:01,ayse,LOGIN_OK\n08:03,mehmet,LOGIN_FAIL\n08:04,mehmet,LOGIN_FAIL\n08:05,mehmet,LOGIN_FAIL\n08:07,zeynep,LOGIN_FAIL\n08:09,zeynep,LOGIN_OK\n08:12,ayse,LOGOUT\n\"\"\"\ngirdi.write_text(ornek_veri, encoding=\"utf-8\")\n\n# 1) Oku ve kullanıcı başına say\nozet = {}\nwith open(girdi, encoding=\"utf-8\", newline=\"\") as f:\n    for kayit in csv.DictReader(f):\n        kullanici = kayit[\"kullanici\"]\n        if kullanici not in ozet:\n            ozet[kullanici] = {\"toplam\": 0, \"basarisiz\": 0}\n        ozet[kullanici][\"toplam\"] += 1\n        if kayit[\"olay\"] == \"LOGIN_FAIL\":\n            ozet[kullanici][\"basarisiz\"] += 1\n\n# 2) Özeti yeni bir CSV dosyasına yaz\nESIK = 3\nwith open(cikti, \"w\", encoding=\"utf-8\", newline=\"\") as f:\n    alanlar = [\"kullanici\", \"toplam_olay\", \"basarisiz\", \"durum\"]\n    yazici = csv.DictWriter(f, fieldnames=alanlar)\n    yazici.writeheader()\n    for kullanici in sorted(ozet):\n        bilgi = ozet[kullanici]\n        durum = \"INCELE\" if bilgi[\"basarisiz\"] >= ESIK else \"NORMAL\"\n        yazici.writerow({\n            \"kullanici\": kullanici,\n            \"toplam_olay\": bilgi[\"toplam\"],\n            \"basarisiz\": bilgi[\"basarisiz\"],\n            \"durum\": durum,\n        })\n\n# 3) Üretilen dosyayı doğrula\nprint(\"Özet dosyası oluşturuldu:\", cikti.as_posix())\nprint(cikti.read_text(encoding=\"utf-8\"), end=\"\")",
    "",
    "Özet dosyası oluşturuldu: hafta08_calisma/ozet.csv\nkullanici,toplam_olay,basarisiz,durum\nayse,2,0,NORMAL\nmehmet,3,3,INCELE\nzeynep,2,1,NORMAL\n",
    [
      "Girdi dosyası okunur, sözlükte kullanıcı başına toplam ve başarısız olay sayılır.",
      "csv.DictWriter, writeheader() ile başlığı, writerow() ile her özet satırını yazar.",
      "Eşik (ESIK = 3) ile başarısız giriş sayısı yüksek kullanıcılar INCELE olarak işaretlenir.",
      "Son adımda üretilen dosya tekrar okunarak doğrulanır: yaz, sonra kontrol et.",
    ],
  ),
  exception_types: example(
    "examples/week08/exception_types.py",
    "# Sık karşılaşılan hata (exception) türlerini tanıyalım ve kontrollü yakalayalım\nportlar = [22, 80, 443]\nkullanicilar = {\"ayse\": \"admin\", \"mehmet\": \"analist\"}\n\nprint(\"1) ValueError: metin sayıya çevrilemiyor\")\ntry:\n    sayi = int(\"on iki\")\nexcept ValueError as hata:\n    print(\"   Yakalandı:\", hata)\n\nprint(\"2) ZeroDivisionError: sıfıra bölme\")\ntry:\n    oran = 10 / 0\nexcept ZeroDivisionError as hata:\n    print(\"   Yakalandı:\", hata)\n\nprint(\"3) IndexError: listede olmayan indeks\")\ntry:\n    print(portlar[5])\nexcept IndexError as hata:\n    print(\"   Yakalandı:\", hata)\n\nprint(\"4) KeyError: sözlükte olmayan anahtar\")\ntry:\n    rol = kullanicilar[\"zeynep\"]\nexcept KeyError as hata:\n    print(\"   Yakalandı: anahtar bulunamadı ->\", hata)\n\nprint(\"5) TypeError: uyumsuz türler\")\ntry:\n    mesaj = \"Port: \" + 443\nexcept TypeError as hata:\n    print(\"   Yakalandı:\", hata)\n\nprint(\"6) FileNotFoundError: olmayan dosya\")\ntry:\n    with open(\"hafta08_calisma/olmayan_dosya.txt\", encoding=\"utf-8\") as f:\n        f.read()\nexcept FileNotFoundError:\n    print(\"   Yakalandı: dosya bulunamadı\")\n\nprint(\"Program çökmeden sona ulaştı.\")",
    "",
    "1) ValueError: metin sayıya çevrilemiyor\n   Yakalandı: invalid literal for int() with base 10: 'on iki'\n2) ZeroDivisionError: sıfıra bölme\n   Yakalandı: division by zero\n3) IndexError: listede olmayan indeks\n   Yakalandı: list index out of range\n4) KeyError: sözlükte olmayan anahtar\n   Yakalandı: anahtar bulunamadı -> 'zeynep'\n5) TypeError: uyumsuz türler\n   Yakalandı: can only concatenate str (not \"int\") to str\n6) FileNotFoundError: olmayan dosya\n   Yakalandı: dosya bulunamadı\nProgram çökmeden sona ulaştı.\n",
    [
      "Her try bloğu bilerek farklı bir hata türü üretir; except ilgili türü yakalar.",
      "except HataTuru as hata yazımı hata mesajına erişmeyi sağlar.",
      "Hatalar yakalandığı için program çökmez ve son satıra kadar çalışır.",
    ],
  ),
  try_except_basics: example(
    "examples/week08/try_except_basics.py",
    "# try / except / else / finally ile kullanıcı girdisini güvenle işleme\ndef port_oku(metin):\n    try:\n        port = int(metin)                # ValueError oluşabilir\n    except ValueError:\n        print(f\"Hata: '{metin}' bir sayı değil.\")\n        return None\n    else:                                # hata OLUŞMAZSA çalışır\n        if not 1 <= port <= 65535:\n            print(f\"Hata: {port} geçerli port aralığında değil.\")\n            return None\n        print(f\"Kabul: {port}\")\n        return port\n    finally:                             # her durumda çalışır (return olsa bile)\n        print(\"  [kontrol tamamlandı]\")\n\n\ngecerli = []\nfor sira in range(1, 4):\n    metin = input(f\"{sira}. port: \")\n    print()\n    sonuc = port_oku(metin)\n    if sonuc is not None:\n        gecerli.append(sonuc)\n\nprint(\"Geçerli portlar:\", gecerli)",
    "443\nabc\n70000",
    "1. port: \nKabul: 443\n  [kontrol tamamlandı]\n2. port: \nHata: 'abc' bir sayı değil.\n  [kontrol tamamlandı]\n3. port: \nHata: 70000 geçerli port aralığında değil.\n  [kontrol tamamlandı]\nGeçerli portlar: [443]\n",
    [
      "try bloğunda int(metin) çalışır; sayı değilse ValueError oluşur ve except bloğuna geçilir.",
      "else bloğu yalnızca try başarılı olursa çalışır; burada aralık doğrulaması yapılır.",
      "finally bloğu return olsa bile her durumda çalışır; temizlik ve kayıt işleri için kullanılır.",
      "Format doğrulama (sayı mı?) ile değer doğrulama (1-65535 arasında mı?) ayrı adımlardır.",
    ],
  ),
  file_not_found_safe: example(
    "examples/week08/file_not_found_safe.py",
    "# Dosya yoksa programı çökertmek yerine güvenli varsayılan ayarlara dönme\nfrom pathlib import Path\n\nVARSAYILAN = {\"max_deneme\": \"3\", \"kilit_suresi_dk\": \"15\"}\n\n\ndef ayar_yukle(yol):\n    ayarlar = dict(VARSAYILAN)           # varsayılanların kopyası\n    try:\n        with open(yol, encoding=\"utf-8\") as f:\n            for satir in f:\n                satir = satir.strip()\n                if not satir or satir.startswith(\"#\"):\n                    continue             # boş satır ve yorumları atla\n                anahtar, deger = satir.split(\"=\")\n                ayarlar[anahtar.strip()] = deger.strip()\n    except FileNotFoundError:\n        print(f\"[UYARI] {yol.name} bulunamadı, varsayılan ayarlar kullanılıyor.\")\n    return ayarlar\n\n\nklasor = Path(\"hafta08_calisma\")\nklasor.mkdir(exist_ok=True)\nayar_dosyasi = klasor / \"guvenlik.conf\"\nayar_dosyasi.unlink(missing_ok=True)     # örnek her seferinde dosyasız başlasın\n\nprint(\"1. deneme:\", ayar_yukle(ayar_dosyasi))\n\nayar_dosyasi.write_text(\n    \"# Güvenlik ayarları\\nmax_deneme = 5\\n\\nkilit_suresi_dk = 30\\n\",\n    encoding=\"utf-8\",\n)\nprint(\"2. deneme:\", ayar_yukle(ayar_dosyasi))",
    "",
    "[UYARI] guvenlik.conf bulunamadı, varsayılan ayarlar kullanılıyor.\n1. deneme: {'max_deneme': '3', 'kilit_suresi_dk': '15'}\n2. deneme: {'max_deneme': '5', 'kilit_suresi_dk': '30'}\n",
    [
      "Ayar dosyası yoksa FileNotFoundError yakalanır ve güvenli varsayılan değerler kullanılır.",
      "Boş satırlar ve # ile başlayan yorum satırları continue ile atlanır.",
      "anahtar = deger satırları split('=') ile ayrılır ve strip() ile temizlenir.",
    ],
  ),
  raise_validation: example(
    "examples/week08/raise_validation.py",
    "# raise ile kendi doğrulama kuralını yazma ve anlaşılır hata mesajı verme\ndef kullanici_adi_dogrula(ad):\n    if not isinstance(ad, str):\n        raise TypeError(\"Kullanıcı adı metin olmalıdır.\")\n    ad = ad.strip()\n    if ad == \"\":\n        raise ValueError(\"Kullanıcı adı boş olamaz.\")\n    if not 3 <= len(ad) <= 16:\n        raise ValueError(\"Kullanıcı adı 3-16 karakter olmalıdır.\")\n    if not ad.isalnum():\n        raise ValueError(\"Yalnızca harf ve rakam kullanılabilir.\")\n    return ad.lower()\n\n\nadaylar = [\"Ayse01\", \"   \", \"ab\", \"admin'--\", 2026, \"  Zeynep  \"]\nfor aday in adaylar:\n    try:\n        temiz = kullanici_adi_dogrula(aday)\n        print(f\"KABUL : {aday!r:<12} -> {temiz}\")\n    except (ValueError, TypeError) as hata:\n        print(f\"RED   : {aday!r:<12} -> {hata}\")",
    "",
    "KABUL : 'Ayse01'     -> ayse01\nRED   : '   '        -> Kullanıcı adı boş olamaz.\nRED   : 'ab'         -> Kullanıcı adı 3-16 karakter olmalıdır.\nRED   : \"admin'--\"   -> Yalnızca harf ve rakam kullanılabilir.\nRED   : 2026         -> Kullanıcı adı metin olmalıdır.\nKABUL : '  Zeynep  ' -> zeynep\n",
    [
      "raise ValueError('mesaj') kendi doğrulama kuralımız ihlal edildiğinde bilinçli olarak hata üretir.",
      "Fonksiyon hatayı üretir, çağıran kod try/except ile nasıl tepki vereceğine karar verir.",
      "except (ValueError, TypeError) birden fazla hata türünü tek blokta yakalar.",
      "admin'-- gibi enjeksiyon denemeleri isalnum() kuralı ile reddedilir.",
    ],
  ),
  log_file_analyzer: example(
    "examples/week08/log_file_analyzer.py",
    "# Log DOSYASI analizi: dosya okuma + string işlemleri + bozuk satırlara dayanıklılık\nfrom pathlib import Path\n\nklasor = Path(\"hafta08_calisma\")\nklasor.mkdir(exist_ok=True)\nlog_dosyasi = klasor / \"auth.log\"\nrapor_dosyasi = klasor / \"auth_rapor.txt\"\n\n# Sentetik auth logu: bir satır bilerek bozuk, bir satır boş.\nlog_dosyasi.write_text(\n    \"2026-11-10 08:00:01 OK 10.0.0.5 ayse\\n\"\n    \"2026-11-10 08:01:15 FAIL 203.0.113.7 admin\\n\"\n    \"2026-11-10 08:01:17 FAIL 203.0.113.7 admin\\n\"\n    \"BOZUK_SATIR_KAYIT\\n\"\n    \"\\n\"\n    \"2026-11-10 08:01:20 FAIL 203.0.113.7 root\\n\"\n    \"2026-11-10 08:02:00 FAIL 198.51.100.4 test\\n\"\n    \"2026-11-10 08:05:42 OK 10.0.0.8 mehmet\\n\",\n    encoding=\"utf-8\",\n)\n\nbasarisiz_ip = {}\nislenen = 0\natlanan = 0\n\ntry:\n    with open(log_dosyasi, encoding=\"utf-8\") as f:\n        no = 0\n        for satir in f:\n            no += 1\n            satir = satir.strip()\n            if not satir:\n                continue\n            try:\n                tarih, saat, durum, ip, kullanici = satir.split()\n            except ValueError:\n                atlanan += 1\n                print(f\"[ATLANDI] {no}. satır beklenen biçimde değil\")\n                continue\n            islenen += 1\n            if durum == \"FAIL\":\n                # get(anahtar, 0): anahtar yoksa 0 döndürür, KeyError oluşmaz\n                basarisiz_ip[ip] = basarisiz_ip.get(ip, 0) + 1\nexcept FileNotFoundError:\n    print(\"Log dosyası bulunamadı:\", log_dosyasi.name)\nelse:\n    with open(rapor_dosyasi, \"w\", encoding=\"utf-8\") as rapor:\n        rapor.write(\"AUTH LOG RAPORU\\n\")\n        rapor.write(f\"İşlenen satır : {islenen}\\n\")\n        rapor.write(f\"Atlanan satır : {atlanan}\\n\")\n        for ip, adet in basarisiz_ip.items():\n            etiket = \"ŞÜPHELİ\" if adet >= 3 else \"izle\"\n            rapor.write(f\"{ip:<15} {adet} başarısız  [{etiket}]\\n\")\n    print(rapor_dosyasi.read_text(encoding=\"utf-8\"), end=\"\")",
    "",
    "[ATLANDI] 4. satır beklenen biçimde değil\nAUTH LOG RAPORU\nİşlenen satır : 6\nAtlanan satır : 1\n203.0.113.7     3 başarısız  [ŞÜPHELİ]\n198.51.100.4    1 başarısız  [izle]\n",
    [
      "Dış try dosya hatasını, iç try her satırın biçim hatasını yönetir; bozuk satır tüm analizi durdurmaz.",
      "satir.split() beş alan üretmezse paket açma ValueError verir ve satır atlanır.",
      "dict.get(ip, 0) + 1 deseni IP başına başarısız deneme sayısını güvenle artırır.",
      "else bloğunda rapor dosyası yazılır; yalnızca okuma başarılı olduysa rapor üretilir.",
    ],
  ),
  env_detect_colab: example(
    "examples/week08/env_detect_colab.py",
    "# Hangi ortamda çalışıyorum? try/except ImportError ile ortam tespiti\nimport sys\nfrom pathlib import Path\n\ntry:\n    import google.colab  # Bu modül yalnızca Google Colab'da bulunur\n    ortam = \"Google Colab\"\nexcept ImportError:\n    if sys.platform == \"emscripten\":\n        ortam = \"Tarayıcı (Pyodide - ders sitesi)\"\n    else:\n        ortam = \"Yerel bilgisayar (VS Code, IDLE, Terminal veya Jupyter)\"\n\nprint(\"Çalışma ortamı:\", ortam)\n\ndeneme = Path(\"hafta08_calisma\") / \"yazma_testi.txt\"\ndeneme.parent.mkdir(exist_ok=True)\ndeneme.write_text(\"merhaba\\n\", encoding=\"utf-8\")\nprint(\"Yazma testi:\", \"başarılı\" if deneme.exists() else \"başarısız\")\n\nif ortam == \"Google Colab\":\n    print(\"İpucu: Sol menüdeki klasör simgesinden hafta08_calisma klasörünü gör.\")\n    print(\"Kendi dosyanı yüklemek için: from google.colab import files; files.upload()\")\nelif ortam.startswith(\"Tarayıcı\"):\n    print(\"İpucu: Dosyalar tarayıcı belleğindedir; sayfa yenilenince silinir.\")\nelse:\n    print(\"İpucu: Dosyalar, programı çalıştırdığın klasörün içinde oluşturulur.\")",
    "",
    "Çalışma ortamı: Yerel bilgisayar (VS Code, IDLE, Terminal veya Jupyter)\nYazma testi: başarılı\nİpucu: Dosyalar, programı çalıştırdığın klasörün içinde oluşturulur.\n",
    [
      "import google.colab yalnızca Colab'da başarılıdır; diğer ortamlarda ImportError yakalanır.",
      "sys.platform == 'emscripten' Python'un tarayıcıda (Pyodide) çalıştığını gösterir.",
      "Dosya yazma testi her ortamda göreli yol ile yapılır; ipucu ortama göre değişir.",
    ],
  ),
};
