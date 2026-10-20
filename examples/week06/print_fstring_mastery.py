# print() fonksiyonunun gelişmiş parametreleri ve f-string yetenekleri

# 1. sep parametresi ile özel ayraçlar
print("192", "168", "1", "105", sep=".")
print("2026-10-20", "10:15:30", "FIREWALL", "DROP", sep=" | ")

# 2. end parametresi ile satır sonunu yönetme
print("Port 443 taranıyor", end="... ")
print("[AÇIK]")

# 3. f-string ile matematiksel işlem ve metot çağırma
kullanici = "   admin   "
yetki_seviyesi = 3
print(f"Kullanıcı: {kullanici.strip().upper()} (Yetki x2: {yetki_seviyesi * 2})")

# 4. Sütun hizalama ile CLI güvenlik tablosu oluşturma (< sola, > sağa, ^ ortala)
print("-" * 35)
print(f"{'HEDEF IP':<15} {'PORT':^8} {'DURUM':>10}")
print("-" * 35)
print(f"{'10.0.0.1':<15} {80:^8} {'İZİN':>10}")
print(f"{'192.168.1.99':<15} {443:^8} {'BLOKE':>10}")
print("-" * 35)

# 5. Sayı formatlama: Basamak hassasiyeti (.2f) ve Hex/Binary tabanları
kayip_orani = 0.04567
port_numarasi = 443
print(f"Paket Kaybı: %{kayip_orani * 100:.2f}")
print(f"Port 443 Hex: {port_numarasi:#06x} | İkili (Binary): {port_numarasi:016b}")

# 6. Hızlı Debugging sözdizimi ({degisken=})
token = "BGT_SECRET_99"
print(f"Debug Çıktısı -> {token=}")
