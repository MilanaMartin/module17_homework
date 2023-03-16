import { getPercents } from "../src/func17.js";

describe("test getPercents(10, 200)", () => {
  it("getPercents true values", () => {
    const result = getPercents(10, 200);
    expect(result).toBe(20);
  }),
  it("getPercents(0.1,1) check digits 0.0010000000005 ", () => {
    const result = getPercents(0.1, 1);

    expect(result).toBeCloseTo(0.001, 4);
  }),
  it("getPercents(10, 1110) != 1110", () => {
    const result = getPercents(10, 1110);
    expect(result).not.toBe(1110);
  });
});