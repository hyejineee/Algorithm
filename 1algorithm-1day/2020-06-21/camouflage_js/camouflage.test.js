const camouflage = (clothes)=>{

}

test("위장", () => {
  expact(
    camouflage([
      ["yellow_hat", "headgear"],
      ["blue_sunglasses", "eyewear"],
      ["green_turban", "headgear"],
    ])
  ).toEqual(5);

  expact([
    ["crow_mask", "face"],
    ["blue_sunglasses", "face"],
    ["smoky_makeup", "face"],
  ]).toEqual(3);
});
