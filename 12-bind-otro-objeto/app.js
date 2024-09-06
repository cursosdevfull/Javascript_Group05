"use strict";

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

const otherStudent = {
  firstname: "Luis",
  lastname: "Zamora",
};

this.firstname = "Carmen";
this.lastname = "Nieto";

const getInfoStudent = student.getInfo.bind(this, "married");

//console.log(student.getInfo("single", "luis.zamora@email.com"));
//console.log(getInfoStudent("single", "luis.zamora@email.com"));
console.log(getInfoStudent("luis.zamora@email.com"));
