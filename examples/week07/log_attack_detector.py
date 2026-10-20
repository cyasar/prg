# Web erişim loglarında siber saldırı imzası (XSS, SQLi, LFI) tespiti
web_loglari = [
    "10.0.0.2 - GET /index.html 200",
    "192.168.1.99 - GET /search?q=<script>alert(1)</script> 403",
    "172.16.0.4 - GET /download?file=../../../../etc/shadow 403",
    "10.0.0.5 - POST /login 200",
    "192.168.1.88 - GET /products?id=1' UNION SELECT null,password FROM users-- 403"
]

tehdit_imzalari = {
    "<script>": "XSS (Cross-Site Scripting)",
    "../": "Path Traversal (Dizin Gezinme)",
    "UNION SELECT": "SQL Enjeksiyonu"
}

alarmlar = []

for log in web_loglari:
    for imza, saldiri_turu in tehdit_imzalari.items():
        if imza in log:
            ip = log.split(" - ")[0]
            alarmlar.append(f"[ALARM] {saldiri_turu} -> Kaynak IP: {ip}")

print("Taranan web istekleri:", len(web_loglari))
print(f"Yakalanan şüpheli olay adedi: {len(alarmlar)}")
for a in alarmlar:
    print(a)
