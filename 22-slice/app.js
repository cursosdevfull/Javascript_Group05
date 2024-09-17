"use strict";

const hobbies = [
  "Viajar",
  "Reunión con amigos",
  "Ir a la playa",
  "Jugar bowling",
  "Escuchar música antigua",
  "Salir con mi familia",
];
console.log(hobbies[0]);
console.log(hobbies[2]);

hobbies[0] = "Viajar a EEUU";

console.log(hobbies);

console.log("hobby 8", hobbies[8]);
console.log("hobbies", hobbies);
hobbies[10] = "Jugar taco";

console.log("hobbies", hobbies);

const sliceHobbies = hobbies.slice(1, 3);
console.log("sliceHobbies", sliceHobbies);

const sliceHobbies2 = hobbies.slice(1);
console.log("sliceHobbies2", sliceHobbies2);
