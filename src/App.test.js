// Import the function to be tested
import { splitStringByLineBreak } from "./Demo"; // Update with the correct path to your utility file

describe("splitStringByLineBreak function", () => {
  test("splits a string by line break", () => {
    const inputString = "1abc2\npqr3stu8vwx\na1b2c3d4e5f\ntreb7uchet";
    const result = splitStringByLineBreak(inputString);

    // Expected array after splitting by line break
    const expectedArray = ["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet"];

    expect(result).toEqual(expectedArray);
  });

  test("returns an array with a single element if no line breaks are present", () => {
    const inputString = "No line breaks in this string";
    const result = splitStringByLineBreak(inputString);

    // Expected array with a single element
    const expectedArray = ["No line breaks in this string"];

    expect(result).toEqual(expectedArray);
  });

  test("handles an empty string", () => {
    const inputString = "";
    const result = splitStringByLineBreak(inputString);

    // Expected empty array
    const expectedArray = [];

    expect(result).toEqual(expectedArray);
  });
});
