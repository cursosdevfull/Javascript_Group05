"use strict";

const hobbies = [
  "Viajar",
  "Reunión con amigos",
  "Ir a la playa",
  "Jugar bowling",
  "Escuchar música antigua",
  "Salir con mi familia",
];

const elementsDeleted = hobbies.splice(2, 2);

console.log("hobbies", hobbies);
console.log("elementsDeleted", elementsDeleted);

hobbies.splice(1, 1, "Pasear al perro", "Ir a bailar", "Leer libros");
console.log("elements", hobbies);

hobbies.splice(4, 0, "Pintar", "Comprar");
console.log("elements", hobbies);
