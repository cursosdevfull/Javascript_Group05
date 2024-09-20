const person = {
  firstname: "Adriana",
  lastname: "Zavala",
  age: 40,
  "name and lastname": "Adriana Zavala",
  hobbies: ["jogging", "study", "dance"],
  relatives: {
    father: "Jorge Zavala",
    mother: "Lucía Zevallos",
  },
  greet: function greetMessage() {
    alert("Good morning");
  },
  bye: () => alert("Bye"),
  fullname() {
    return `Fullname1`;
  },
  fullname: function Fullname() {
    return "Fullname2";
  },
  fullname: function (prefix) {
    return prefix + " Fullname4";
  },
  fullname: () => {
    return "Fullname3";
  },

  45: "Person's age",
  value: "Object's value",
};

//person.greet();
//person.bye();

console.log(person.fullname("English"));
console.log(person);
console.log(person[45]);
console.log(person["name and lastname"]);
console.log(person.value);

/*for (const property in person) {
  console.log(property, person[property]);
}*/
const properties = Object.keys(person);
console.log("PROPERTIES", properties);
for (const property of Object.keys(person)) {
  console.log(property, person[property]);
}
