const collatz = number => {
  //return 4;

  //   let count = 0;
  //   while (number !== 1) {
  //     if (number % 2 == 0) {
  //       number = number / 2;
  //       count++;
  //     } else {
  //       number = number * 3 + 1;
  //       count++;
  //     }
  //   }

  //   return count;

  return collatzAlgorithm(number, 0);
};

const collatzAlgorithm = (number, count) => {
  if (count >= 500) return -1;
  if (number == 1) return count;
  return number % 2 == 0
    ? collatzAlgorithm(number / 2, count + 1)
    : collatzAlgorithm(number * 3 + 1, count + 1);
};

test(`콜라츠 추측`, () => {
  expect(collatz(16)).toBe(4);
});
