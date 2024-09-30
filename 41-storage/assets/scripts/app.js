const btnSave = document.getElementById("button-save");
const btnRetrieve = document.getElementById("button-retrieve");
const btnDelete = document.getElementById("button-delete");

const save = () => {
  const userId = 50;
  const user = {
    firstname: "Luis",
    lastname: "Zamora",
  };

  const expiredDate = new Date();
  expiredDate.setTime(expiredDate.getTime() + 30000);
  document.cookie = `userId=${userId};max-age=30`;
  document.cookie = `user=${JSON.stringify(
    user
  )}; expires=${expiredDate.toGMTString()}`;
};

const retrieve = () => {
  const pairCookies = document.cookie.split(";").map((el) => el.trim());

  const cookies = pairCookies.reduce((accumulator, pair) => {
    const pairValue = pair.split("=");
    if (!accumulator[pairValue[0]]) {
      accumulator[pairValue[0]] = pairValue[1];
    }

    return accumulator;
  }, {});

  console.log("userId", cookies["userId"]);
  console.log("user", JSON.parse(cookies["user"]));
  console.log("firstname", JSON.parse(cookies["user"]).firstname);
};

const deleteCookie = (cookieName) => {
  const expiresDate = new Date();
  expiresDate.setTime(expiresDate.getTime() - 1000);
  document.cookie = `${cookieName}=; expires=${expiresDate.toGMTString()}`;
};

const remove = () => {
  deleteCookie("userId");
  deleteCookie("user");
};

btnSave.addEventListener("click", save);
btnRetrieve.addEventListener("click", retrieve);
btnDelete.addEventListener("click", remove);
