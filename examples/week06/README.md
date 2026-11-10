# Hafta 6: Fonksiyonlarla problem parçalama

Python 3 dışında paket gerekmez. Önce kodu oku ve çıktıyı tahmin et.

Depo kökünde Windows için:

```sh
py examples/week06/print_fstring_mastery.py
```

macOS/Linux için py yerine python3 kullan. Her input sorusunu terminalde sırayla yanıtla.

- [print_fstring_mastery.py](print_fstring_mastery.py): sep parametresi argümanlar arasındaki varsayılan boşluğu değiştirir (IP, log, tarih formatı).
- [def_greet.py](def_greet.py): def anahtar sözcüğü ile fonksiyon tanımlanır ve girintili blok fonksiyon gövdesini oluşturur.
- [calc_return.py](calc_return.py): return fonksiyonun çalışmasını bitirir ve üretilen sonucu çağıran yere geri yollar.
- [default_params.py](default_params.py): Varsayılan parametreler fonksiyon çağrısında belirtilmezse tanımlanan ilk değerlerini alır.
- [scope_local_global.py](scope_local_global.py): Fonksiyon içinde tanımlanan değişkenler (yerel) fonksiyon bitince bellekten silinir.
- [multi_return.py](multi_return.py): Python'da return deger1, deger2 sözdizimi ile virgülle ayrılmış çoklu değerler tek seferde döndürülür.
- [port_validator.py](port_validator.py): port_gecerli_mi tek bir sorumluluğa sahiptir: portun geçerliliğini doğrulamak.
- [password_strength_func.py](password_strength_func.py): Karmaşık bir problem (parola analizi), 3 küçük bağımsız fonksiyona parçalanmıştır.
- [incident_classifier.py](incident_classifier.py): Büyük karar mekanizması 3 fonksiyon arasında dağıtılmıştır: çarpan bulma, skor hesaplama ve aksiyon önerme.
- [oop_class_basics.py](oop_class_basics.py): class Kullanici: satırı bir kalıp (şablon) tanımlar; henüz hiçbir nesne oluşmaz.
- [oop_firewall_rule.py](oop_firewall_rule.py): Her Kural nesnesi kendi port, eylem ve eslesme_sayisi verisini taşır (durum).
- [oop_account_lockout.py](oop_account_lockout.py): MAKS_DENEME sınıf niteliğidir; tüm Hesap nesneleri aynı kuralı paylaşır.
- [oop_inheritance_devices.py](oop_inheritance_devices.py): class Sunucu(Cihaz): Sunucu, Cihaz sınıfının ad ve ip niteliklerini kalıtım yoluyla alır.

Örneklerde belirtilen normal girdi biçimini kullan. abc gibi girdiler bazı örneklerde bilerek yönetilmez; hata türünü gözlemlemek dersin parçasıdır. Sayısal biçim ile geçerli değer aralığı farklıdır. Not eşiği ve yaş kategorileri yalnızca eğitim örneğidir. Gerçek parola veya kişisel veri kullanma.
