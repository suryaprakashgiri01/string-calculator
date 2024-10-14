const { add } = require("./calculator");

describe("calculator", () => {
  describe("add", () => {
    test("should return 0 for an empty string", () => {
      expect(add("")).toBe(0);
    });
  });
});
