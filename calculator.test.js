const { add } = require("./calculator");

describe("String Calculator", () => {
  describe("add", () => {
    // Base cases
    test("should return 0 for an empty string", () => {
      expect(add("")).toBe(0);
    });

    test("should return the number when only one number is provided", () => {
      expect(add("1")).toBe(1);
    });

    // Handling multiple numbers
    test("should return the sum of two numbers separated by a comma", () => {
      expect(add("1,2")).toBe(3);
    });

    test("should return the sum of multiple numbers", () => {
      expect(add("1,2,3,4")).toBe(10);
    });

    // Handling new lines
    test("should handle new lines between numbers", () => {
      expect(add("1\n2,3")).toBe(6);
    });

    // Handling different delimiters
    test("should support different single-character delimiters", () => {
      expect(add("//;\n1;2")).toBe(3);
    });

    test("should support different custom delimiters like '|'", () => {
      expect(add("//|\n1|2|3")).toBe(6);
    });

    // Handling negatives
    test("should throw an exception when negative numbers are provided", () => {
      expect(() => add("1,-2,3,-4")).toThrow(
        "negative numbers not allowed: -2,-4"
      );
    });

    // Edge case: handling multiple custom delimiters and empty input edge cases
    test("should handle multiple delimiters and empty input gracefully", () => {
      expect(add("//;\n1;2;;")).toBe(3);
    });
  });
});
