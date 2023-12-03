import React from "react";
import { data } from "./data";
import Result from "./Result";

const Demo = () => {
  const splitStringByLineBreak = (inputString) => inputString.split("\n");

  const replaceWordsWithDigits = (inputString, wordToDigitMap) => {
    let replacedString = inputString;
    let replacementsMade = false;

    Object.keys(wordToDigitMap).forEach((word) => {
      let index = replacedString.indexOf(word);
      while (index !== -1) {
        replacedString =
          replacedString.slice(0, index) +
          wordToDigitMap[word] +
          replacedString.slice(index + word.length);
        index = replacedString.indexOf(word, index + 1);
        replacementsMade = true;
      }
    });

    return replacementsMade ? replacedString : inputString;
  };

  const findFirstAndLastDigitsAsString = (inputString) => {
    const numbers = inputString.match(/\d+/g);

    if (!numbers || numbers.length === 0) {
      return null;
    }

    const firstNumber = numbers[0];
    const lastNumber = numbers[numbers.length - 1];

    const firstDigit = firstNumber.charAt(0);
    const lastDigit = lastNumber.charAt(lastNumber.length - 1);

    return firstDigit + lastDigit;
  };

  const combineDigits = (strings) => {
    if (strings.length !== 2) {
      throw new Error("Input array must contain exactly two strings.");
    }

    if (strings[0] === "0") {
      return strings[1];
    }

    const combinedNumber = parseInt(strings[0] + strings[1]);

    return combinedNumber;
  };

  const consolidated = (stringItem, wordToDigitMap) => {
    const replacedString = replaceWordsWithDigits(stringItem, wordToDigitMap);
    const digits = findFirstAndLastDigitsAsString(replacedString);
    return combineDigits(digits);
  };

  const myArray = splitStringByLineBreak(data);

  const wordToDigitMap = {
    oneight: "18",
    threeight: "38",
    fiveight: "58",
    nineight: "98",
    sevenine: "79",
    eighthree: "83",
    eightwo: "82",
    twone: "21",
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };

  const translatedData = myArray.map((item) =>
    consolidated(item, wordToDigitMap)
  );

  const result = sumArray(translatedData);

  function sumArray(numbers) {
    if (!Array.isArray(numbers)) {
      throw new Error("Input must be an array of numbers.");
    }

    return numbers.reduce((sum, num) => sum + num, 0);
  }

  return (
    <>
      <Result result={result} />
    </>
  );
};

export default Demo;
