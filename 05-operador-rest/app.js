"use strict";

/* function sum(a, b, c, d, e, f, g, h, i) {
  const total = a + b + c + d + e + f + g + h + i;
  console.log(total);
  return total;
} */

/* function sum(values) {
  let total = 0;

  for (const el of values) {
    total = total + el;
  }

  return total;
}

sum([34, 5, 20, 44, 3, 54, 23, 55, 88]); */

function sum(...values) {
  // values = [34, 5, 20, 44, 3, 54, 23, 55, 88]
  let total = 0;

  for (const el of values) {
    total = total + el;
  }

  console.log("total", total);

  return total;
}

sum(34, 5, 20, 44, 3, 54, 23, 55, 88);
