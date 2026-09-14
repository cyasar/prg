const dugme = document.querySelector("#dugme");
const mesaj = document.querySelector("#mesaj");
dugme.addEventListener("click", () => {
  mesaj.textContent = "Bu sayfayı ben yönetiyorum!";
});
