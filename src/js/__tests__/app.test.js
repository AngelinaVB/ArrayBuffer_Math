import Math from "../app";

test('return stoned decrease attack', () => {
  const merlin = new Math('Merlin', 100, true, 2);
  expect(merlin.attack).toBe(86);
});

test('return usual decrease attack', () => {
  const baltazar = new Math('Baltazar', 100, false, 3);
  expect(baltazar.attack).toBe(80);
});