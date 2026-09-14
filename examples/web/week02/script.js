const alan = document.querySelector("#notu");
const sonuc = document.querySelector("#sonuc");
document.querySelector("#kontrol").addEventListener("click", () => {
  const metin = alan.value.trim();
  const notu = Number(metin);
  if (metin === "" || !Number.isFinite(notu) || notu < 0 || notu > 100) {
    sonuc.textContent = "0–100 arasında bir sayı girin.";
  } else if (notu >= 50) {
    sonuc.textContent = "Geçti";
  } else {
    sonuc.textContent = "Kaldı";
  }
});
