# Savunmacı programlama: Erken çıkış (Guard Clause) ile port doğrulama
def port_gecerli_mi(port):
    if not isinstance(port, int):
        return False
    if port < 1 or port > 65535:
        return False
    return True

def port_kategorisi(port):
    if not port_gecerli_mi(port):
        return "GEÇERSİZ_PORT"
    if port < 1024:
        return "Sistem (Well-known)"
    elif port <= 49151:
        return "Kayıtlı (Registered)"
    else:
        return "Dinamik/Özel (Dynamic)"

test_portlari = [22, 8080, 55000, 70000]
for p in test_portlari:
    durum = port_gecerli_mi(p)
    kat = port_kategorisi(p)
    print(f"Port {p} -> Geçerli: {durum} | Kategori: {kat}")
