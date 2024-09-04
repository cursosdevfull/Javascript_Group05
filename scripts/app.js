"use strict";

let currentResult = 0;

function getUserNumberInput() {
  return +userInput.value;
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = resultBeforeCalc + " " + operator + " " + calcNumber;
  currentCalculationOutput.textContent = calcDescription;
  currentResultOutput.textContent = currentResult;
}

function writeToLog(operator, initialResult, enteredNumber, currentResult) {
  console.log(
    operator + " " + initialResult + " " + enteredNumber + " = " + currentResult
  );
}

function add() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;

  currentResult = initialResult + enteredNumber;
  writeToLog("add", initialResult, enteredNumber, currentResult);

  createAndWriteOutput("+", initialResult, enteredNumber);
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;

  currentResult = initialResult - enteredNumber;
  writeToLog("subtract", initialResult, enteredNumber, currentResult);

  createAndWriteOutput("-", initialResult, enteredNumber);
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;

  currentResult = initialResult * enteredNumber;
  writeToLog("multiply", initialResult, enteredNumber, currentResult);

  createAndWriteOutput("*", initialResult, enteredNumber);
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;

  currentResult = initialResult / enteredNumber;
  writeToLog("divide", initialResult, enteredNumber, currentResult);

  createAndWriteOutput("/", initialResult, enteredNumber);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
