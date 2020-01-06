const sumOfDigits = n => {
  if (n < 10) {
    return n;
  }

  const remain = n % 10;
  return sumOfDigits((n - remain) / 10) + remain;
};

test("sumOfDigits", () => {
  expect(sumOfDigits(3)).toBe(3);
  expect(sumOfDigits(9)).toBe(9);
  expect(sumOfDigits(10)).toBe(1);
  expect(sumOfDigits(11)).toBe(2);
});
