describe("Caesar Cipher", () => {
 it("Should shift to the right", () => {
  assert.equal(caesarCipher("I love JavaScript!", 100), "E hkra FwrwOynelp!");
 });
it("Should shift to the left", () => {
  assert.equal(caesarCipher("I love JavaScript!", -100), "M pszi NezeWgvmtx!");
 });
});
