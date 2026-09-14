import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import {
  backupDevices,
  backupStatus,
  changedText,
  loginEvents,
  originalText,
  sha256,
  summarizeLogins,
} from "../src/motivation.js";

const candidates = (threshold) =>
  summarizeLogins(loginEvents, threshold)
    .filter((item) => item.review)
    .map((item) => item.account);
assert.deepEqual(candidates(3), ["ogrenci-01"]);
assert.deepEqual(candidates(1), ["ogrenci-01", "ogrenci-03"]);
assert.deepEqual(candidates(4), []);
assert.deepEqual(summarizeLogins([], 1), []);
assert.deepEqual(summarizeLogins([{ account: "sample", success: true }], 1), [
  { account: "sample", failures: 0, review: false },
]);
assert.equal(backupStatus(0), "Güncel");
assert.equal(backupStatus(1), "Güncel");
assert.equal(backupStatus(2), "Kontrol et");
assert.equal(backupStatus(null), "Veri eksik");
assert.deepEqual(
  backupDevices.reduce((result, device) => {
    const status = backupStatus(device.days);
    result[status] = (result[status] || 0) + 1;
    return result;
  }, {}),
  { Güncel: 3, "Kontrol et": 2, "Veri eksik": 1 },
);
assert.equal(
  await sha256("abc"),
  "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad",
);
for (const text of [originalText, changedText, "Türkçe: öğrenci"]) {
  assert.equal(
    await sha256(text),
    createHash("sha256").update(text, "utf8").digest("hex"),
  );
}
assert.notEqual(await sha256(originalText), await sha256(changedText));
console.log(
  "Motivasyon demoları: eşikler, eksik veri ve SHA-256 sonuçları doğrulandı.",
);
