"use strict";

const showResult = (message, result) => {
  alert(message + " " + result);
};

const validateNumber = (number, defaultValue) =>
  isNaN(number) ? defaultValue : number;

const sum = (resultHandler, ...numbers) => {
  let accumulator = 0;

  for (const number of numbers) {
    accumulator += validateNumber(number, 0);
  }

  resultHandler(accumulator);
};

const subtract = (resultHandler, ...numbers) => {
  let accumulator = 0;

  for (const number of numbers) {
    accumulator -= validateNumber(number, 0);
  }

  resultHandler(accumulator);
};

const multiply = (resultHandler, ...numbers) => {
  let accumulator = 1;

  for (const number of numbers) {
    accumulator *= validateNumber(number, 1);
  }

  resultHandler(accumulator);
};

sum(showResult.bind(this, "Result is"), 10, 30, 60);
subtract(showResult.bind(this, "O resultado é"), 10, -40, -5);
multiply(showResult.bind(this, "Il risultato è"), 6, 58, 18, 3);

//showResult("Mi mensaje", 1000);

//const newShowResult = showResult.bind(this, "Mi nuevo mensaje", 3000);
//const newShowResult = showResult.call(this, "Mi nuevo mensaje", 3000);
/*const newShowResult = showResult.apply(this, ["Mi nuevo mensaje apply", 3000]);
newShowResult();*/

//showResult.call(this, "El resultado es", 2000);
//showResult.apply(this, ["El resultado es", 2000]);
