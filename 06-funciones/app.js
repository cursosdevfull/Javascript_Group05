"use strict";

const result = sum(10, 20, 30);
console.log("result", result);

function sum(...numbers) {
  let total = 0;
  for (const number of numbers) {
    total = total + number;
  }

  return total;
}

const ftnMultiply = function multiply(...numbers) {
  let total = 1;
  for (const number of numbers) {
    total = total * number;
  }

  return total;
};

const resultMultiply = ftnMultiply(2, 4, 6);
console.log("resultMultiply", resultMultiply);

let ftnDivide = function (a, b) {
  console.log("contexto", this);
  console.log("a", a);
  console.log("b", b);

  return a / b;
};

ftnDivide(40, 8);

function module(a, b) {
  return a % b;
}

const ftnModuleV2 = (a, b) => {
  console.log("contexto", this);
  return a % b;
};

console.log("Result of ftnModuleV2", ftnModuleV2(10, 3));
