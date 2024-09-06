"use strict";

/* const resultHandler = (result, language) => {
  let message = "";

  if (language === "es") {
    message = "El resultado es " + result;
  } else if (language === "en") {
    message = "Result is " + result;
  } else if (language === "pr") {
    message = "O resultado é " + result;
  } else {
    message = "El resultado es " + result;
  }

  alert(message);
}; */

const showResultInSpanish = (result) => {
  const message = "El resultado es " + result;
  alert(message);
};

const showResultInEnglish = (result) => {
  const message = "Result is " + result;
  alert(message);
};

const showResultInPortuguese = (result) => {
  const message = "O resultado é " + result;
  alert(message);
};

const showResultInItalian = (result) => {
  const message = "Il risultato è " + result;
  alert(message);
};

const validateNumber = (number, defaultValue) =>
  isNaN(number) ? defaultValue : number;

const sum = (resultHandler, ...numbers) => {
  //const validateNumber = (number) => (isNaN(number) ? 0 : number);

  let accumulator = 0;

  for (const number of numbers) {
    accumulator += validateNumber(number, 0); // accumulator = accumulator + number
  }

  resultHandler(accumulator);
};

const subtract = (resultHandler, ...numbers) => {
  //const validateNumber = (number) => (isNaN(number) ? 0 : number);

  let accumulator = 0;

  for (const number of numbers) {
    accumulator -= validateNumber(number, 0); // accumulator = accumulator + number
  }

  resultHandler(accumulator);
};

const multiply = (resultHandler, ...numbers) => {
  //const validateNumber = (number) => (isNaN(number) ? 1 : number);

  let accumulator = 1;

  for (const number of numbers) {
    accumulator *= validateNumber(number, 1); // accumulator = accumulator + number
  }

  resultHandler(accumulator);
};

sum(showResultInSpanish, 10, 30, 60);
subtract(showResultInEnglish, 10, -40, -5);
multiply(showResultInItalian, 6, 58, 18, 3);
