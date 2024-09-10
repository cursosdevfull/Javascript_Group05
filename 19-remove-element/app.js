const h1 = document.getElementById("main-title");
h1.remove();

const ul = document.querySelector("ul");
//ul.removeChild(ul.children[0]);
//ul.firstElementChild.remove();

if (ul.children.length) {
  ul.removeChild(ul.children[0]);
}
