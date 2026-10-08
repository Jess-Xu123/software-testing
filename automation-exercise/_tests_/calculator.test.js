import { divide } from "../src/caculator.js";

describe("divide", () => {
  it("divide two numbers", () => {
    expect(divide(6, 3)).toBe(2);
  });

  it("a or b is not a number, throw errors", () => {
    expect(() => divide("6", 3)).toThrow("Both arguments must be numbers");
  });

  it("throws errors when dividing by zero", () => {
    expect(() => divide(6, 0)).toThrow("Division by zero is not allowed");
  });

  it("throw errors when input is NaN", () => {
    expect(() => divide(NaN, 3).toThrow("Arguments cannot be NaN"));
  });

  it("throw error when arguments are missing or null", () => {
    expect(() => divide(6)).toThrow("Both arguments must be numbers");
  });
});
