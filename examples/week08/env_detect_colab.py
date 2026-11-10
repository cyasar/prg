# Hangi ortamda çalışıyorum? try/except ImportError ile ortam tespiti
import sys
from pathlib import Path

try:
    import google.colab  # Bu modül yalnızca Google Colab'da bulunur
    ortam = "Google Colab"
except ImportError:
    if sys.platform == "emscripten":
        ortam = "Tarayıcı (Pyodide - ders sitesi)"
    else:
        ortam = "Yerel bilgisayar (VS Code, IDLE, Terminal veya Jupyter)"

print("Çalışma ortamı:", ortam)

deneme = Path("hafta08_calisma") / "yazma_testi.txt"
deneme.parent.mkdir(exist_ok=True)
deneme.write_text("merhaba\n", encoding="utf-8")
print("Yazma testi:", "başarılı" if deneme.exists() else "başarısız")

if ortam == "Google Colab":
    print("İpucu: Sol menüdeki klasör simgesinden hafta08_calisma klasörünü gör.")
    print("Kendi dosyanı yüklemek için: from google.colab import files; files.upload()")
elif ortam.startswith("Tarayıcı"):
    print("İpucu: Dosyalar tarayıcı belleğindedir; sayfa yenilenince silinir.")
else:
    print("İpucu: Dosyalar, programı çalıştırdığın klasörün içinde oluşturulur.")
