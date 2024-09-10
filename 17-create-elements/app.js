const ul = document.querySelector("ul");

const newLi = document.createElement("li");
newLi.textContent = "Item 4";

//ul.appendChild(newLi);
ul.append(newLi);
//ul.append("Nuevo texto agregado");
//ul.appendChild("Otro elemento agregado");

const newLi2 = document.createElement("li");
newLi2.textContent = "Item 5";
ul.lastElementChild.before(newLi2);

const newLi3 = document.createElement("li");
newLi3.textContent = "Item 6";
ul.lastElementChild.after(newLi3);

const newLi4 = document.createElement("li");
newLi4.textContent = "Item 7";
ul.firstElementChild.replaceWith(newLi4);

const newLi5 = document.createElement("li");
newLi5.textContent = "Item 8";
ul.append(newLi5);

const newLi6 = document.createElement("li");
newLi6.textContent = "Item 9";
ul.append(newLi6);

ul.replaceChild(newLi5, newLi6);

const newLi7 = document.createElement("li");
newLi7.textContent = "Item 10";

ul.insertBefore(newLi7, ul.children[1]);
