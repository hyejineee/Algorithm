const camouflage = clothes => {
  // return 5;
  // 5가 의미하는 것은 무엇인가? 스파이가 입을 수 있는 복장의 경우의 수
  // 하루에 각 종류 중 하나의 옷을 입을 수 있다.
  // 입을 수 있는 옷의 종류를 찾는다. findCategoryOfClothes
  // 옷의 종류에 해당하는 경우의 수를 찾는다. findNumberOfcasesOfClothes
  // 각 종류의 경우의 수 : (headgear : 2 + 안입는 경우 1), (eyewear : 1 + 안입는 경우 1) -1(반드시 하나는 입어야 한다.)
  // (3 * 2) -1

  const category = findCategoryOfClothes(clothes.map(v => v[1]));
  return (
    category.reduce(
      (acc, cur) => acc * findNumberOfcasesOfClothes(clothes, cur),
      1
    ) - 1
  );
};

const findCategoryOfClothes = categories => {
  let category = [];
  categories.forEach(element => {
    if (!category.includes(element)) {
      category.push(element);
    }
  });
  return category;
};

const findNumberOfcasesOfClothes = (clothes, category) =>
  clothes.filter(it => it[1] === category).length + 1;

test(`camouflage test`, () => {
  expect(
    camouflage([
      ["yellow_hat", "headgear"],
      ["blue_sunglasses", "eyewear"],
      ["green_turban", "headgear"]
    ])
  ).toBe(5);

  expect(findCategoryOfClothes(["headgear", "eyewear", "headgear"])).toEqual([
    "headgear",
    "eyewear"
  ]);

  expect(
    findNumberOfcasesOfClothes(
      [
        ["yellow_hat", "headgear"],
        ["blue_sunglasses", "eyewear"],
        ["green_turban", "headgear"]
      ],
      "headgear"
    )
  ).toBe(3);
});
