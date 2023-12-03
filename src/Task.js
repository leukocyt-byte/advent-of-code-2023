import React from "react";
import { data } from "./data";
import Result from "./Result";

const Task = () => {
  function splitStringByLineBreak(inputString) {
    return inputString.split("\n");
  }
  const myArray = splitStringByLineBreak(data);
  let numberPairs = [];

  function findFirstAndLastDigitsAsString(inputString) {
    const numbers = inputString.match(/\d+/g);

    if (!numbers || numbers.length === 0) {
      return null;
    }

    const firstNumber = numbers[0];
    const lastNumber = numbers[numbers.length - 1];

    const firstDigit = firstNumber.charAt(0);
    const lastDigit = lastNumber.charAt(lastNumber.length - 1);
    numberPairs.push([firstDigit, lastDigit]);
    return firstDigit + lastDigit;
  }

  myArray.forEach((element) => {
    findFirstAndLastDigitsAsString(element);
  });
  let combined = [];
  function combineDigits(strings) {
    if (strings.length !== 2) {
      throw new Error("Input array must contain exactly two strings.");
    }

    if (strings[0] === "0") {
      combined.push(strings[1]);
      return strings[1];
    }

    const combinedNumber = parseInt(strings[0] + strings[1]);
    combined.push(combinedNumber);
    return combinedNumber;
  }

  numberPairs.forEach((element) => {
    combineDigits(element);
  });

  function sumArray(numbers) {
    if (!Array.isArray(numbers)) {
      throw new Error("Input must be an array of numbers.");
    }

    return numbers.reduce((sum, num) => sum + num, 0);
  }

  const result = sumArray(combined);

  return <Result result={result} />;
};

export default Task;
