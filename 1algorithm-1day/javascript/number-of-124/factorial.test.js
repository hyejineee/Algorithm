const factorial = n => {
  if (n == 1) {
    return 1;
  }

  return factorial(n - 1) + n;
};

test("factorial", () => {
  expect(factorial(1)).toBe(1);
  expect(factorial(2)).toBe(3);
  expect(factorial(3)).toBe(6);
});

// 1 => 1
// 2 => 3
// 3 => 6
// 4 => 10
// 5 => 15
// 6 => 21
