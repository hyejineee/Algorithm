const hidePhoneNumber = phoneNumber => {
  return [...phoneNumber]
    .map((v, index) => (index < phoneNumber.length - 4 ? "*" : v))
    .join("");
};

test(`핸드폰 번호 가리기`, () => {
  expect(hidePhoneNumber("027778888")).toBe("*****8888");
});
