import fs from "node:fs";
import assert from "node:assert/strict";
const html = fs.readFileSync("dist/index.html", "utf8");
const paths = [...html.matchAll(/(?:src|href)="([^"]+)"/g)].map(m => m[1]);
for (const path of paths) {
  if (!path.startsWith("/")) continue;
  assert.ok(path.startsWith("/prg/"), `Yanlış Pages tabanı: ${path}`);
  assert.ok(fs.existsSync(`dist/${path.slice(5)}`), `Eksik asset: ${path}`);
}
assert.ok(fs.existsSync("dist/python-worker.js"));
console.log("Pages asset yolları ve Python worker doğrulandı.");
