import assert from "node:assert/strict";
import fs from "node:fs";
import { spawnSync } from "node:child_process";
import { pythonExamples, webExamples } from "../src/examples.js";
const python = process.env.PYTHON_BIN || "python";
let checks = 0;
function run(example, input) {
  return spawnSync(python, [example.path], {
    input: input + "\n",
    encoding: "utf8",
    env: { ...process.env, PYTHONIOENCODING: "utf-8" },
    timeout: 5000,
  });
}
for (const example of Object.values(pythonExamples)) {
  assert.equal(
    fs.readFileSync(example.path, "utf8"),
    example.code,
    example.path,
  );
  const result = run(example, example.input);
  assert.equal(
    result.status,
    0,
    `${example.path}: ${result.stderr || result.error}`,
  );
  assert.equal(
    result.stdout.replaceAll("\r\n", "\n"),
    example.expected,
    example.path,
  );
  checks++;
}
const edgeCases = [
  ["sum", "0\n0", "Toplam: 0"],
  ["sum", "-4\n7", "Toplam: 3"],
  ["pass", "49", "Kaldı"],
  ["pass", "50", "Geçti"],
  ["pass", "51", "Geçti"],
  ["positive", "-1", "Negatif"],
  ["positive", "1", "Pozitif"],
  ["even", "0", "Çift"],
  ["even", "-2", "Çift"],
  ["even", "9", "Tek"],
  ["larger", "3\n5", "İkinci sayı büyük"],
  ["larger", "5\n3", "Birinci sayı büyük"],
  ["age", "-1", "Geçersiz yaş"],
  ["age", "17", "18 yaş altı"],
  ["age", "64", "18–64 yaş aralığı"],
  ["age", "65", "65 yaş ve üzeri"],
  ["username", "", "Kullanıcı adı boş olamaz"],
  ["username", "ogrenci1", "Kullanıcı adı alındı"],
  ["password", "1234567", "En az 8 karakter gerekli"],
  ["password", "123456789", "Uzunluk koşulu sağlandı"],
];
for (const [key, input, expected] of edgeCases) {
  const r = run(pythonExamples[key], input);
  assert.equal(r.status, 0);
  assert.ok(r.stdout.includes(expected), `${key}: ${input}`);
  checks++;
}
const invalid = run(pythonExamples.io, "Ayşe\nabc");
assert.notEqual(invalid.status, 0);
assert.ok(invalid.stderr.includes("ValueError"));
checks++;
for (const demo of Object.values(webExamples)) {
  for (const file of ["index.html", "style.css", "script.js", "README.md"])
    assert.ok(fs.existsSync(`${demo.path}/${file}`));
  const r = spawnSync(process.execPath, ["--check", `${demo.path}/script.js`], {
    encoding: "utf8",
  });
  assert.equal(r.status, 0, r.stderr);
}
console.log(
  `${checks} Python çalışma testi ve 2 web örneğinin dosya/sözdizimi kontrolü geçti.`,
);
