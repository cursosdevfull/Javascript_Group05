const hobbies = [
  "Ver películas",
  "Hacer parrilladas",
  "Aprender lo último de tecnología",
];
/* hobbies.push("Subir a las montañas rusas");
console.log("hobbies", hobbies);
hobbies.unshift("Ir a la playa");
console.log("hobbies", hobbies); */

const hobbieDeleted = hobbies.pop();
console.log("hobbies", hobbies);
console.log("hobbie deleted", hobbieDeleted);

const hobbieDeletedFromBegin = hobbies.shift();
console.log("hobbies", hobbies);
console.log("hobbie deleted from begin", hobbieDeletedFromBegin);
