const incompletePlayer = (participants, completion) => {
  const p = participants.sort();
  let c = completion.sort();

  return p.reduce((_, cur, curIndex) => {
    if (cur != c[curIndex]) {
      p.splice(curIndex, p.length - curIndex);
      return cur;
    }
  });
  
};


test(`완주하지 못한 선수`, () => {
  expect(incompletePlayer(["leo", "kiki", "eden"], ["eden", "kiki"])).toEqual(
    "leo"
  );

  expect(
    incompletePlayer(
      ["mislav", "stanko", "mislav", "ana"],
      ["stanko", "ana", "mislav"]
    )
  ).toEqual("mislav");

  expect(
    incompletePlayer(
      ["marina", "josipa", "nikola", "vinko", "filipa"],
      ["josipa", "filipa", "marina", "nikola"]
    )
  ).toEqual("vinko");
});
