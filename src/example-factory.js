// Ortak örnek fabrikası: examples.js ve haftalık ek modüller aynı yapıyı kullanır.
export const example = (path, code, input, expected, explanations) => ({
  path,
  filename: path.split("/").at(-1),
  title: path.split("/").at(-1),
  code: code + "\n",
  input,
  expected,
  explanations,
  time: "10 dk",
  goal: "Önce sonucu tahmin et, çalıştır ve küçük bir değişiklik yap.",
  task: "Yeni bir girdi dene ve beklenen sonucu açıkla.",
  tests: [],
});

