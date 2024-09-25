const promise = new Promise((resolve, reject) => {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const request = JSON.parse(xhttp.responseText);
      resolve(request);
    }
  };

  xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
  xhttp.send();
});

/* promise.then(
  (parameter) => {
    console.log("Promesa resuelta", parameter);
  },
  () => {
    console.log("error");
  }
); */

/* promise
  .then((parameter) => {
    console.log("Promesa resuelta", parameter);
  })
  .catch(() => {
    console.log("error");
  }); */

promise.then((parameter) => {
  console.log("Promesa resuelta", parameter);
});

promise.catch(() => {
  console.log("error");
});
