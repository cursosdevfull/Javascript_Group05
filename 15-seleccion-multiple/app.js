"use strict";
const listItemsSelected01 = document.getElementsByTagName("li");
const listItemsSelected02 = document.querySelectorAll("li");
console.log("listItemsSelected01", listItemsSelected01);
console.log("listItemsSelected02", listItemsSelected02);

for (const item of listItemsSelected01) {
  console.dir(item);
}

const p = document.getElementById("user-logged");
p.textContent = "Hola Carmela";
p.id = "user-logout";
p.className = "selected";

const li = document.querySelector("li:last-of-type");
li.textContent = "curso dev";

const li1 = document.querySelector("li:nth-child(1)");
li.textContent = "li child 1";
