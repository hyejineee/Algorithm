const removeAnotherChar = (string) => string.replace(/[^-_.a-z0-9]+/g, "");

const removeRepeatedDot = (string) => string.replace(/(\.){2,}/g, ".");

const remoteStartAndEndDot = (string) => string.replace(/^\./g, "").replace(/\.$/, "");

const steps = (lowar) => (step2) => (step3) => (step4) =>
  step4(step3(step2(lowar)));

const solution = (input) => {
  let answer = steps(input.toLowerCase())(removeAnotherChar)(removeRepeatedDot)(
    remoteStartAndEndDot
  );

  answer = answer === undefined || answer == "" ? "a" : answer;
  answer = answer.length > 15 ? answer.slice(0, 15) : answer;

  answer = remoteStartAndEndDot(answer);

  return answer.length < 3 ? answer.concat("",answer.charAt(answer.length - 1).repeat(3 - answer.length)) : answer;
};

test("아이디 추천", () => {
  expect(solution("...!@BaT#*..y.abcdefghijklm")).toEqual("bat.y.abcdefghi");
  expect(solution("abcdefghijklmn.p")).toEqual("abcdefghijklmn");
  expect(solution("z-+.^.")).toEqual("z--");
  expect(solution("=.=")).toEqual("aaa");
  expect(solution("123_.def")).toEqual("123_.def");
  expect(solution("abcdefghijklmn.p")).toEqual("abcdefghijklmn");
});

test("다른 특수문자 치환.", () => {
  expect(removeAnotherChar("!@.#_$%^-&.*(-)_")).toEqual("._-.-_");
});

test("중복되는 . 치환", () => {
  expect(removeRepeatedDot("...--")).toEqual(".--");
});

test(".으로 시작 또는 끝남 치환", () => {
  expect(remoteStartAndEndDot(".-->-.--_-.")).toEqual("-->-.--_-");
});
