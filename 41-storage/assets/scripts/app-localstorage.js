const btnSave = document.getElementById("button-save");
const btnRetrieve = document.getElementById("button-retrieve");
const btnDelete = document.getElementById("button-delete");

const save = () => {
  const userId = 50;
  const user = {
    firstname: "Luis",
    lastname: "Zamora",
  };

  localStorage.setItem("id", userId);
  localStorage.setItem("user", JSON.stringify(user));
};

const retrieve = () => {
  const userId = localStorage.getItem("id");
  const user = JSON.parse(localStorage.getItem("user"));

  console.log("userId", userId);
  console.log("user", user);
  console.log("firstname", user.firstname);
};

const remove = () => {
  localStorage.removeItem("id");
  localStorage.removeItem("user");
};

btnSave.addEventListener("click", save);
btnRetrieve.addEventListener("click", retrieve);
btnDelete.addEventListener("click", remove);
