const makePrimeNumber = arr => {
  // return 1;
  // 무엇을 의미하는가? [7]의 사이드

  // return [7].length;
  // 각각 숫자는 무엇을 의미하는가? 매개변수로 주어진 배열 중에서 3개를 뽑아 더한 수 중에 소수인 수

  // return [6,7,8,9]
  // .filter(isPrimeNumber())
  // .length;
  // 배열의 원소는 무엇을 의미하는 수인가? 주어진 배열에서 3개를 뽑아 더해서 만들 수 있는 수 [6,7,8,9]
  // 각 수는 어떻게 만들 수 있는가?
  // 어떻게 더해서 만든 수가 소수인지 판별할 수 있는가? 소수를 판별하는 함수( isPrimeNumber() )를 만든다.

  // return [
  //   arr[0] + arr[1] + arr[2],
  //   arr[0] + arr[1] + arr[3],
  //   arr[0] + arr[2] + arr[3],
  //   arr[1] + arr[2] + arr[3]
  // ]
  // .filter(isPrimeNumber())
  // .length;
  // 어떻게 주어진 배열에서 3개를 뽑을 수 있는가?? 인덱스 3개를 변경해 가면서 숫자를 뽑는다.
  // 뽑은 수를 더해서 반환하는 함수를 만든다.

  return makeAdditionNumber(arr).filter(it => isPrimeNumber(it)).length;
};

const makeAdditionNumber = arr => {
  let additionArr = [];
  for (let i = 0; i <= arr.length - 3; i++) {
    for (let j = i + 1; j <= arr.length - 2; j++) {
      for (let k = j + 1; k <= arr.length - 1; k++) {
        additionArr.push(arr[i] + arr[j] + arr[k]);
      }
    }
  }
  return additionArr;
};

const isPrimeNumber = number => {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

test(`소수 만들기`, () => {
  expect(makePrimeNumber([1, 2, 3, 4])).toBe(1);
});

test(`소수인지 확인하기`, () => {
  expect(isPrimeNumber(121)).toBe(false);
  expect(isPrimeNumber(11)).toBe(true);
});

test(`3개의 숫자가 더해진 수가 있는 배열 만들기`, () => {
  expect(makeAdditionNumber([1, 2, 3, 4])).toEqual([6, 7, 8, 9]);
});
