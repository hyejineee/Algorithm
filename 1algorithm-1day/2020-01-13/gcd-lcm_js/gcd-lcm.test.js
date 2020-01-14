const gcdLcm = (num1, num2) => {
  // return [4,48]
  // 4와 48은 무엇을 의미하는 수인가?
  // 4와 48은 어떻게 나오게 된 수인가?
  // 두 수의 공약수를 구하고 최대 공약수를 찾는다. 최대 공약수를 이용해 최대 공배수를 구한다.

  // let gcd = [1,2,3,4,6,12].filter(v => [1,2,4,8,16].includes(v))
  // gcd = Math.max(...gcd);
  // return [gcd,(num1*num2)/gcd]
  // 각 배열은 무엇을 의미하는가?
  // 각 배열을 어떤 방법으로 구할 수 있는가?
  // 각 수의 약수를 구한다. -> findAliquots

  let commonDivisor= findAliquots(num1).filter(v => findAliquots(num2).includes(v))
  let gcd = Math.max.apply(null, commonDivisor)
  return [gcd, (num1*num2)/gcd]
};

const findAliquots = (number, arr = [], aliquot = 1) => {
  // return [1,2,3,4,6,12]
  // 배열이 의미하는 것은 무엇인가? 12의 약수
  // 어떻게 나오게 된 수인가? 12를 소인수분해 해서...
  //

  //   let aliquot = 0;
  //   let numberCopy = number
  //   let aliquots = []

  //   while(aliquot !== number){
  //       aliquot++;
  //       if(numberCopy%aliquot !== 0 ) {
  //           continue
  //       }
  //       aliquots.push(aliquot);
  //   }
  //   return aliquots

  if (number === aliquot) {
    arr.push(number);
    return arr;
  }

  if (number % aliquot !== 0) {
    return findAliquots(number, [...arr], aliquot + 1);
  } else {
    return findAliquots(number, [...arr, aliquot], aliquot + 1);
  }
};
test(`최대 공약수 최대 공배수 구하기`, () => {
  expect(gcdLcm(12, 16)).toEqual([4, 48]);
});

test(`약수 구하기`, () => {
  expect(findAliquots(12)).toEqual([1, 2, 3, 4, 6, 12]);
  expect(findAliquots(16)).toEqual([1, 2, 4, 8, 16]);
  expect(findAliquots(11)).toEqual([1, 11]);
});
// - 각 수의 약수를 구한다.
// - 구한 약수들 중에서 공통인 수만 뽑는다.
// - 뽑은 수 중에서 제일 큰 수를 최대 공약수로 한다.
// - 최대 공약수 * 최소 공배수 = 두 수의 곱 식을 사용해 최소 공배수를 구한다.
