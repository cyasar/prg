# Hafta 8 örneklerini tek tıkla Google Colab'da çalıştıran etkileşimli Jupyter Notebook (.ipynb) üretici
import json
from pathlib import Path

notebook = {
    "cells": [
        {
            "cell_type": "markdown",
            "metadata": {},
            "source": [
                "# 🛡️ BGT-1009 Programlamaya Giriş\n",
                "## 08. Hafta: Dosyalar ve Hata Yönetimi (Google Colab Uyumlu)\n",
                "\n",
                "Bu defter ÇOMÜ Bilgisayar Güvenliği Programlamaya Giriş dersi 8. hafta uygulamalarını içerir.\n",
                "- Tüm örnekler **bağımsızdır** ve kendi sentetik verisini otomatik oluşturur.\n",
                "- `pathlib.Path` kullanıldığı için Google Colab, Jupyter Notebook ve yerel ortamlarda sıfır ayarla çalışır.\n",
                "\n",
                "[Ders web sitesine git](https://cyasar.github.io/prg/#/hafta/8/sunum/1)"
            ]
        }
    ],
    "metadata": {
        "colab": {
            "name": "BGT_Hafta08_Dosyalar_ve_Hata_Yonetimi.ipynb",
            "provenance": []
        },
        "kernelspec": {
            "display_name": "Python 3",
            "name": "python3"
        },
        "language_info": {
            "name": "python"
        }
    },
    "nbformat": 4,
    "nbformat_minor": 0
}

files = sorted(Path("examples/week08").glob("*.py"))
for py_file in files:
    code = py_file.read_text(encoding="utf-8")
    title = py_file.stem.replace("_", " ").title()
    notebook["cells"].append({
        "cell_type": "markdown",
        "metadata": {},
        "source": [f"### 📌 Örnek: {py_file.name} ({title})"]
    })
    notebook["cells"].append({
        "cell_type": "code",
        "execution_count": None,
        "metadata": {},
        "outputs": [],
        "source": [line + "\n" for line in code.splitlines()]
    })

notebooks_dir = Path("notebooks/week08")
notebooks_dir.mkdir(parents=True, exist_ok=True)
output_path = notebooks_dir / "hafta08_dosyalar_ve_hata_yonetimi.ipynb"
output_path.write_text(json.dumps(notebook, indent=2, ensure_ascii=False), encoding="utf-8")
print(f"Başarıyla oluşturuldu: {output_path} ({len(files)} kod hücresi)")
