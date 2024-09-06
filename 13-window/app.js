"use strict";

window.name = "App";

console.log(window.name);

//console.log(document);
//console.dir(document);

const student = {
  firstname: "Luis",
  lastname: "Zamora",
  getInfo: function (status, email) {
    return (
      "firstname: " +
      this.firstname +
      " lastname: " +
      this.lastname +
      " status: " +
      status +
      " email: " +
      email
    );
  },
};

console.log(student);
console.dir(student);
