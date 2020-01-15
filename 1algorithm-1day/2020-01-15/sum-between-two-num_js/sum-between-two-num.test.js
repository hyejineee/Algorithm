const sumBetween2Num = (num1, num2) => {
  const [min, max] = [num1, num2].sort((a, b) => a - b);
  return sum(min, max);
};

const sum = (min, max) =>
  Array.from({ length: max - min + 1 }, (_, i) => min + i).reduce(
    (acc, cur) => acc + cur,
    0
  );
  
// const sum = (max, start)=>{
//     if(start === max) return start;
//     return start + sum(max,start+1);
// }

test(`두 정수 사이의 합`, () => {
  expect(sumBetween2Num(5, 3)).toBe(12);
  expect(sumBetween2Num(3, 5)).toBe(12);
  expect(sumBetween2Num(4, -2)).toBe(7);
  expect(sumBetween2Num(-1, 4)).toBe(9);
});
