# Hafta 7: String işlemleri ve basit log analizi

Python 3 dışında paket gerekmez. Önce kodu oku ve çıktıyı tahmin et.

Depo kökünde Windows için:

```sh
py examples/week07/str_indexing_slicing.py
```

macOS/Linux için py yerine python3 kullan. Her input sorusunu terminalde sırayla yanıtla.

- [str_indexing_slicing.py](str_indexing_slicing.py): String'ler karakterler dizisidir; 0 tabanlı indeksleme ve dilimleme kuralları geçerlidir.
- [str_case_strip.py](str_case_strip.py): strip() baştaki ve sondaki gereksiz boşlukları, tab ve satır sonu (\n) karakterlerini budar.
- [str_inspection.py](str_inspection.py): startswith ve endswith protokol ve dosya uzantısı doğrulamalarında kullanılır.
- [str_split_join.py](str_split_join.py): split(ayrac) metni belirtilen ayraçtan parçalayarak liste haline getirir.
- [str_replace_mask.py](str_replace_mask.py): replace(eski, yeni) metindeki tüm eşleşmeleri yeni değerle değiştirir.
- [log_single_line_parser.py](log_single_line_parser.py): Log satırları düzenli ayraçlarla (boşluk gibi) ayrıldığında split() ile yapılandırılmış alanlara çevrilebilir.
- [log_failed_login_filter.py](log_failed_login_filter.py): for döngüsü ile log satırları sırayla taranır ve 'Failed password' filtresi uygulanır.
- [log_attack_detector.py](log_attack_detector.py): Güvenlik imza kütüphanesi (sözlük) ile her bir log satırı otomatik karşılaştırılır.
- [log_ip_counter.py](log_ip_counter.py): Sözlük (dict) sayacı ile her benzersiz IP'nin frekansı hesaplanır.

Örneklerde belirtilen normal girdi biçimini kullan. abc gibi girdiler bazı örneklerde bilerek yönetilmez; hata türünü gözlemlemek dersin parçasıdır. Sayısal biçim ile geçerli değer aralığı farklıdır. Not eşiği ve yaş kategorileri yalnızca eğitim örneğidir. Gerçek parola veya kişisel veri kullanma.
