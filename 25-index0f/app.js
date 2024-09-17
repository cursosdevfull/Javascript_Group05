const hobbies = [
  "Viajar",
  "Reunión con amigos",
  "Ir a la playa",
  "Jugar bowling",
  "Escuchar música antigua",
  "Salir con mi familia",
];

/*const value01 = hobbies.indexOf("Ir a la playa");
console.log(value01);*/

function deleteElement(element) {
  const position = hobbies.indexOf(element);

  if (position > -1) {
    hobbies.splice(position, 1);
    console.log("hobbies", hobbies);
  }
}

deleteElement("Jugar bowling");
