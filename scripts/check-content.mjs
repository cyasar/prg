import assert from "node:assert/strict";
import { curriculum as weeks } from "../src/curriculum.js";
import { decks } from "../src/lessons.js";
assert.equal(weeks.length, 14);
for (const week of weeks) {
  assert.ok(week.outcomes.length >= 3, `Hafta ${week.id}: kazanımlar`);
  assert.ok(
    week.lab && week.assessment,
    `Hafta ${week.id}: uygulama ve değerlendirme`,
  );
}
for (const [week, slides] of Object.entries(decks)) {
  assert.equal(
    slides[0].type,
    "outcomes",
    `Hafta ${week}: ilk slayt kazanımlar`,
  );
  assert.deepEqual(slides[0].items, weeks[Number(week) - 1].outcomes);
  for (const slide of slides) {
    assert.ok(slide.title && slide.notes);
    if (slide.type === "quiz") assert.ok(slide.options[slide.answer]);
  }
}
console.log(
  `14 hafta, ${Object.values(decks).flat().length} slayt, kazanımlar ve uygulamalar doğrulandı.`,
);
