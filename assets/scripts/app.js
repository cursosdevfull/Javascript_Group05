const btnFetchPosts = document.querySelector("#available-posts button");
const postTemplate = document.getElementById("single-post");
const listElement = document.querySelector(".posts");

const sentHttpRequestXML = (method, url, data) => {
  return new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest();
    xhttp.open(method, url, true);
    xhttp.responseType = "json";

    xhttp.onload = () => {
      if (xhttp.status >= 200 && xhttp.status < 300) {
        resolve(xhttp.response);
      } else {
        const error = new Error("Algo salió mal");
        reject(error);
      }
    };
    xhttp.onerror = () => {
      reject(new Error());
    };

    xhttp.send(JSON.stringify(data));
  });
};

const showPosts = (posts) => {
  console.log("posts", posts[0]);
  for (const post of posts) {
    console.log("for posts");
    const postEl = document.importNode(postTemplate.content, true);
    console.log(postEl);
    console.log(post.title);
    postEl.querySelector("h2").textContent = post.title.toUpperCase();

    console.log("postEl", postEl);

    listElement.appendChild(postEl);
  }
};

const fetchPostHandler = async () => {
  try {
    const response = await sentHttpRequestXML(
      "get",
      "https://jsonplaceholder.typicode.com/posts"
    );

    showPosts(response);
  } catch (error) {}
};

btnFetchPosts.addEventListener("click", fetchPostHandler);
