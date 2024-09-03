"use strict";
for (let count = 0; count <= 50; count = count + 1) {
  console.log("count", count);
}

for (let count = 0; count <= 50; count += 1) {
  console.log("count", count);
}

for (let count = 0; count <= 50; count++) {
  console.log("count", count);
}

const users = ["Miguel", "Carlos", "Marina", "Lucía"];
for (let count = 0; count < users.length; count++) {
  console.log("users", users);
  console.log(users[count]);
}

const userInfo = {
  name: "Francisco",
  lastname: "Zavala",
  age: 45,
  status: "single",
};

console.log(userInfo);

const objecto = Object.keys(userInfo);
console.log("objeto", objecto);

for (const prop in userInfo) {
  console.log("prop", prop);
}

for (const prop of Object.keys(userInfo)) {
  console.log(prop);
}

for (const prop in users) {
  console.log("prop", prop);
}
