/* const validateNumber = (number) => {
  const value = isNaN(number) ? 0 : number;
  return value;
}; */

const sum = (...numbers) => {
  const validateNumber = (number) => (isNaN(number) ? 0 : number);

  let total = 0;
  for (const number of numbers) {
    total += validateNumber(number);
  }

  return total;
};

const result = sum(10, 20, 34, "Hola", 5, 5, 89);
console.log(result);
