import fs from "node:fs";
import path from "node:path";
import { pythonExamples, webExamples } from "../src/examples.js";
for (const example of Object.values(pythonExamples)) {
  fs.mkdirSync(path.dirname(example.path), { recursive: true });
  fs.writeFileSync(example.path, example.code);
}
for (const demo of Object.values(webExamples)) {
  fs.mkdirSync(demo.path, { recursive: true });
  fs.writeFileSync(
    `${demo.path}/index.html`,
    `<!doctype html>\n<html lang="tr">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1">\n  <title>${demo.title}</title>\n  <link rel="stylesheet" href="style.css">\n  <script src="script.js" defer></script>\n</head>\n<body>\n${demo.html}\n</body>\n</html>\n`,
  );
  fs.writeFileSync(`${demo.path}/style.css`, demo.css + "\n");
  fs.writeFileSync(`${demo.path}/script.js`, demo.js + "\n");
  fs.writeFileSync(
    `${demo.path}/README.md`,
    `# ${demo.title}\n\nProgramlamaya Giriş, ÇOMÜ Bilgi Güvenliği Teknolojisi.\n\n## Çalıştırma\n\nBu klasördeki index.html dosyasını tarayıcıda aç. Ek paket veya sunucu gerekmez.\n\n- index.html: sayfa yapısı ve erişilebilir etiketler.\n- style.css: sayfanın görünümü.\n- script.js: kullanıcı etkileşimi ve kararlar.\n\n## Uygulama\n\n${demo.path.includes("week01") ? "Düğmeye tıkla ve mesajın değiştiğini doğrula. HTML başlığını, CSS rengini ve JavaScript mesajını ayrı ayrı değiştir. Her değişiklikten önce sonucu tahmin et." : "49 → Kaldı, 50 → Geçti, 51 → Geçti testlerini dene. Boş, -1 ve 101 değerlerinde açıklayıcı hata mesajını kontrol et. 50 eşiği eğitim örneğidir; üniversitenin not yönetmeliği değildir. Tarayıcıdaki doğrulama gerçek sunucu güvenliğinin yerini tutmaz."}\n\n## YZ ile çalışma\n\nÖnce kendi değişikliğini planla. YZ’den kodu yazmasını istemek yerine bir ipucu iste. Sonucu test edip hangi satırın davranışı değiştirdiğini açıkla.\n`,
  );
}
for (const week of ["week01", "week02"]) {
  const items = Object.values(pythonExamples).filter((e) =>
    e.path.includes(`/${week}/`),
  );
  fs.writeFileSync(
    `examples/${week}/README.md`,
    `# ${week === "week01" ? "Hafta 1: İlk Python programları" : "Hafta 2: Veri ve kararlar"}\n\nPython 3 dışında paket gerekmez. Önce kodu oku ve çıktıyı tahmin et.\n\nDepo kökünde Windows için:\n\n\`\`\`sh\npy ${items[0].path}\n\`\`\`\n\nmacOS/Linux için py yerine python3 kullan. Her input sorusunu terminalde sırayla yanıtla.\n\n${items.map((e) => `- [${e.filename}](${e.filename}): ${e.explanations[0]}`).join("\n")}\n\nÖrneklerde belirtilen normal girdi biçimini kullan. abc gibi girdiler bazı örneklerde bilerek yönetilmez; hata türünü gözlemlemek dersin parçasıdır. Sayısal biçim ile geçerli değer aralığı farklıdır. Not eşiği ve yaş kategorileri yalnızca eğitim örneğidir. Gerçek parola veya kişisel veri kullanma.\n`,
  );
}
console.log(
  `${Object.keys(pythonExamples).length} Python dosyası ve ${Object.keys(webExamples).length} bağımsız web örneği eşitlendi.`,
);
