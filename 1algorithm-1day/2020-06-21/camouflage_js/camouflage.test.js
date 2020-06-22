const camouflage = (clothes) => {
  return (
    Object.values(count(clothes)).reduce((acc, cur) => acc * (cur + 1), 1) - 1
  );
};

const count = (clothes) => {
  return clothes.reduce((acc, cur) => {
    acc[cur[1]] = acc[cur[1]] ? acc[cur[1]] + 1 : 1;
    return acc;
  }, {});
};

test("위장", () => {
  expect(
    camouflage([
      ["yellow_hat", "headgear"],
      ["blue_sunglasses", "eyewear"],
      ["green_turban", "headgear"],
    ])
  ).toEqual(5);

  expect(
    camouflage([
      ["crow_mask", "face"],
      ["blue_sunglasses", "face"],
      ["smoky_makeup", "face"],
    ])
  ).toEqual(3);
});
