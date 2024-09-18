const todaySales = [200, 3300, 300, 150, 388, 78, 12, 34];

const sum = todaySales.reduce((accumulator, currentValue) => {
  return accumulator + currentValue; // 0 + 200 => accumulator = 200
  // 200 + 3300 => accumulator = 3500
}, 0);

/* let sum = 0;
let counter = 0;
do {
  sum += todaySales[counter++];
} while (counter < todaySales.length); */
/* while (counter < todaySales.length) {
  sum += todaySales[counter++]; // todaySales[1]
} */

/* for (const index in todaySales) {
  sum += todaySales[index];
} */
/* for (let index = 0; index < todaySales.length; index++) {
  sum += todaySales[index];
} */

console.log("sum", sum);

const salesBooksByBookcase = [
  { local: "Bookcase 01", title: "Javascript", sales: 3000 },
  { local: "Bookcase 02", title: "Angular", sales: 6000 },
  { local: "Bookcase 01", title: "Angular", sales: 4500 },
  { local: "Bookcase 03", title: "Javascript", sales: 1000 },
  { local: "Bookcase 01", title: "NodeJS", sales: 4000 },
  { local: "Bookcase 04", title: "Microservices", sales: 5500 },
];

// totalSalesByBook = {"Javascript": 5000, "Angular": 10500, "NodeJS": 4000, "Microservices": 5550}

const totalSalesByBook = salesBooksByBookcase.reduce(
  (accumulator, currentValue) => {
    if (accumulator[currentValue.title]) {
      accumulator[currentValue.title] += currentValue.sales;
    } else {
      accumulator[currentValue.title] = currentValue.sales;
    }
    return accumulator;
  },
  {}
);

console.log("totalSalesByBook", totalSalesByBook);

const nameList = [
  "Juan",
  "Pedro",
  "Carla",
  "Juan",
  "Luis",
  "Carmen",
  "Alfredo",
  "Raquel",
  "Carla",
  "Luis",
];

const nameListUnique = nameList
  .reduce((accumulator, currentValue) => {
    //if (!accumulator.includes(currentValue)) {
    if (accumulator.indexOf(currentValue) === -1) {
      accumulator.push(currentValue);
    }
    return accumulator;
  }, [])
  .map((name) => name.toUpperCase());

console.log("nameListUnique", nameListUnique);
