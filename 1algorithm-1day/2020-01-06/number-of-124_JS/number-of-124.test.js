// const numbers = [4, 1, 2];

const convertTo124 = n => {
  if (n == 1) {
    return 1;
  } else if (n == 2) {
    return 2;
  } else if (n == 3) {
    return 4;
  }

  return (
    convertTo124(((n - 1) % 3) + 1) + convertTo124(Math.floor((n - 1) / 3)) * 10
  );
};

// [0, 1, 2];

// number % [0, 1, 2].length

// 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2

test(`124나라의 숫자 테스트`, () => {
  expect(convertTo124(1)).toBe(1);
  expect(convertTo124(2)).toBe(2);
  expect(convertTo124(3)).toBe(4);
  expect(convertTo124(4)).toBe(11);
  expect(convertTo124(5)).toBe(12);
  expect(convertTo124(6)).toBe(14);
  expect(convertTo124(7)).toBe(21);
  expect(convertTo124(8)).toBe(22);
  expect(convertTo124(9)).toBe(24);
  expect(convertTo124(10)).toBe(41);
  expect(convertTo124(11)).toBe(42);
  expect(convertTo124(12)).toBe(44);
  expect(convertTo124(13)).toBe(111);
  expect(convertTo124(14)).toBe(112);
  expect(convertTo124(15)).toBe(114);
});
