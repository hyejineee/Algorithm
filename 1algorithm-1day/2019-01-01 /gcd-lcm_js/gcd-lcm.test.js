const gcdLcm = (n1, n2) => {
  const gcd = calculateGCD(n1, n2, 2);
  const lcm = calculateLCM(n1,n2,gcd)
  return [gcd,lcm];
};

const calculateLCM = (n1, n2, gcd)=> (n1 * n2) / gcd

const calculateGCD = (n1, n2, divider) => {
  if (divider > n1 || divider > n2) {
    return 1;
  }

  if (n1 % divider === 0 && n2 % divider === 0) {
    return divider * calculateGCD(n1 / divider, n2 / divider, divider);
  }

  return calculateGCD(n1, n2, divider + 1);
};

test("gcd-lcm 구하기 테스트", () => {
  expect(gcdLcm(3, 4)).toEqual([1, 12]);
});
