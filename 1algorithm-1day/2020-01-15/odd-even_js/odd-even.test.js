const isOddOrIsEven = number => number % 2 === 0 ? "Even" : "Odd";

test(`짝수 홀수 판별하기`, () => {
  expect(isOddOrIsEven(3)).toBe("Odd");
  expect(isOddOrIsEven(4)).toBe("Even");
});
