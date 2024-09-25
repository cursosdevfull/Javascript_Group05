async function sendHttp() {
  try {
    const promise = new Promise((resolve, reject) => {
      const xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
          const response = JSON.parse(xhttp.responseText);
          resolve(response);
        }
      };

      xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
      xhttp.send();
    });

    const response = await promise;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

sendHttp();
