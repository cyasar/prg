# Hafta 3: Karar yapıları ve veri doğrulama

Python 3 dışında paket gerekmez. Önce kodu oku ve çıktıyı tahmin et.

Depo kökünde Windows için:

```sh
py examples/week03/empty_check.py
```

macOS/Linux için py yerine python3 kullan. Her input sorusunu terminalde sırayla yanıtla.

- [empty_check.py](empty_check.py): strip() başta ve sonda yer alan boşluk karakterlerini temizler.
- [digit_check.py](digit_check.py): isdigit() tüm karakterlerin rakam olup olmadığını kontrol eder.
- [range_validation.py](range_validation.py): or operatörü ile değerin kabul edilen sınırların dışında kalması denetlenir.
- [nested_vs_guard.py](nested_vs_guard.py): Guard clause, geçersiz veya yetkisiz durumları en başta ele alır.
- [file_policy.py](file_policy.py): not in operatörü güvenli beyaz liste (whitelist) kontrolü sağlar.
- [decision_table_auth.py](decision_table_auth.py): Karar tablosu mantığıyla rol ve işlem çiftleri eşleştirilir.
- [firewall_rule.py](firewall_rule.py): IP adresinin yerel olup olmadığı startswith() ile sınanır.
- [account_lockout.py](account_lockout.py): Brute-force saldırılarına karşı deneme eşiği (3 kez) denetlenir.
- [two_factor_mock.py](two_factor_mock.py): Her iki güvenlik faktörünün (bilgi + sahiplik) doğrulanması istenir.
- [quota_calculator.py](quota_calculator.py): Kullanıcı kategorisine göre sınır/kota değişkeni belirlenir.

Örneklerde belirtilen normal girdi biçimini kullan. abc gibi girdiler bazı örneklerde bilerek yönetilmez; hata türünü gözlemlemek dersin parçasıdır. Sayısal biçim ile geçerli değer aralığı farklıdır. Not eşiği ve yaş kategorileri yalnızca eğitim örneğidir. Gerçek parola veya kişisel veri kullanma.
