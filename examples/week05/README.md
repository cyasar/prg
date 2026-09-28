# Hafta 5: Diziler (listeler) ve veri işleme

Python 3 dışında paket gerekmez. Önce kodu oku ve çıktıyı tahmin et.

Depo kökünde Windows için:

```sh
py examples/week05/device_inventory.py
```

macOS/Linux için py yerine python3 kullan. Her input sorusunu terminalde sırayla yanıtla.

- [device_inventory.py](device_inventory.py): Listeler köşeli parantez [] ile tanımlanır ve sıralı eleman tutar.
- [ip_blacklist_check.py](ip_blacklist_check.py): in anahtar sözcüğü bir elemanın liste içinde var olup olmadığını Boolean olarak döndürür.
- [list_operations.py](list_operations.py): append() listenin sonuna yeni bir eleman ekler.
- [failed_login_stats.py](failed_login_stats.py): for eleman in liste: yapısı her bir elemanı sırayla ziyaret eder.
- [password_length_filter.py](password_length_filter.py): Filtreleme kalıbı: Boş bir liste açılır, koşulu sağlayanlar append() ile toplanır.
- [traffic_max_detector.py](traffic_max_detector.py): En büyük değeri bulurken ilk eleman başlangıç varsayılır.

Örneklerde belirtilen normal girdi biçimini kullan. abc gibi girdiler bazı örneklerde bilerek yönetilmez; hata türünü gözlemlemek dersin parçasıdır. Sayısal biçim ile geçerli değer aralığı farklıdır. Not eşiği ve yaş kategorileri yalnızca eğitim örneğidir. Gerçek parola veya kişisel veri kullanma.
