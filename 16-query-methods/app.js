const ul = document.querySelector("ul");
ul.innerHTML = ul.innerHTML + "<li>Item new</li>";

const div = document.querySelector("div");

div.insertAdjacentHTML("afterbegin", "<h1>Título</h1>");
