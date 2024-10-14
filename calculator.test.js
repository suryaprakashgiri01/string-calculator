const { add } = require("./calculator");

describe("calculator", () => {
  describe("add", () => {
    test("should return 0 for an empty string", () => {
      expect(add("")).toBe(0);
    });

    test('should return the number when only one number is provided', () => {
      expect(add("1")).toBe(1);
    });

    test('should return the sum of two numbers separated by a comma', () => {
      expect(add("1,2")).toBe(3);
    });    
  });
});
