const removeMinValue = arr =>
  arr.length <= 1 ? [-1] : arr.filter(v => v > Math.min(...arr));

test(`제일 작은 수 제거하기`, () => {
  expect(removeMinValue([4, 3, 2, 1])).toEqual([4, 3, 2]);
});
