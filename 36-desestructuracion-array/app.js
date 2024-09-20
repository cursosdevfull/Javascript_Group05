const userInfo = ["Claudia", "Arroyo", 25, "ingeniera"];
/* const name = userInfo[0];
const lastname = userInfo[1];
const age = userInfo[2];
const profession = userInfo[3]; */

const [name, lastname, age, profession] = userInfo;

console.log("name", name);
console.log("lastname", lastname);
console.log("age", age);
console.log("profession", profession);

const data =
  "sergio,hidalgo,24,masculino\ncarla,zamalloa,34,femenino\nmicaela,caceres,34,femenino";

const result = data
  .split("\n") // ["sergio,hidalgo,24,masculino", "carla,zamalloa,34,femenino", "micaela,caceres,34,femenino"]
  .map((el) => el.split(",")) // el = "sergio,hidalgo,24,masculino"   //  ["sergio","hidalgo",24,"masculino"]
  // [["sergio","hidalgo",24,"masculino"] , ["carla","zamalloa",34,"femenino"], ["micaela","caceres",34,"femenino"]]
  .map((person) => {
    // ["sergio","hidalgo",24,"masculino"]
    const [firstname, lastname, age, gender] = person; // firstname = "sergio" // lastname="hidalgo" // age = 24 // gender = "masculino"
    return {
      firstname,
      lastname,
      age,
      gender,
      fullname: `${firstname} ${lastname}`,
    };
  });
// [ [], [], []]
console.log(result);
console.log(result.length);
