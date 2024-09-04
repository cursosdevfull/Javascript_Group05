"use strict";

let currentResult = 0;
const logEntries = [];

function getUserNumberInput() {
  return +userInput.value;
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = resultBeforeCalc + " " + operator + " " + calcNumber;
  currentCalculationOutput.textContent = calcDescription;
  currentResultOutput.textContent = currentResult;
}

function writeToLog(operatorIdentifier, prevResult, operationNumber, result) {
  const logEntry = {
    operation: operatorIdentifier,
    prevResult: prevResult,
    operationNumber: operationNumber,
    result: result,
  };

  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculationResult(calculationType) {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;

  if (
    (calculationType !== "ADD" &&
      calculationType !== "SUBTRACT" &&
      calculationType !== "MULTIPLY" &&
      calculationType !== "DIVIDE") ||
    enteredNumber === 0
  ) {
    return;
  }

  let mathOperator;

  if (calculationType === "ADD") {
    currentResult = initialResult + enteredNumber;
    mathOperator = "+";
  } else if (calculationType === "SUBTRACT") {
    currentResult = initialResult - enteredNumber;
    mathOperator = "-";
  } else if (calculationType === "MULTIPLY") {
    currentResult = initialResult * enteredNumber;
    mathOperator = "*";
  } else if (calculationType === "DIVIDE") {
    currentResult = initialResult / enteredNumber;
    mathOperator = "/";
  }

  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
}

function add() {
  calculationResult("ADD");
}

function subtract() {
  calculationResult("SUBTRACT");
}

function multiply() {
  calculationResult("MULTIPLY");
}

function divide() {
  calculationResult("DIVIDE");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
