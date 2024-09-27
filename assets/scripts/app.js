const btnFetchPosts = document.querySelector("#available-posts button");
const postTemplate = document.getElementById("single-post");
const listElement = document.querySelector(".posts");
const loading = document.querySelector("#loading");
const form = document.querySelector("#new-post form");

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

const sentHttpRequestFetch = (method, url, data) =>
  fetch(url, { method, body: data }).then((res) => res.json());

const deletePost = async (id) => {
  await sentHttpRequestXML(
    "delete",
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  alert(`Post Id deleted: ${id}`);
};

const showPosts = (posts) => {
  loading.classList.remove("hide");
  loading.classList.add("show");
  for (const post of posts) {
    const postEl = document.importNode(postTemplate.content, true);
    postEl.querySelector("h2").textContent = post.title.toUpperCase();
    postEl.querySelector("p").textContent = post.body;
    postEl.querySelector("li").id = post.id;
    postEl
      .querySelector("button")
      .addEventListener("click", deletePost.bind(this, post.id));
    //.addEventListener("click", () => console.log(post.id));
    listElement.appendChild(postEl);
  }
  loading.classList.remove("show");
  loading.classList.add("hide");
};

const fetchPostHandler = async () => {
  try {
    /*const response = await sentHttpRequestXML(
      "get",
      "https://jsonplaceholder.typicode.com/posts"
    );*/
    const response = await sentHttpRequestFetch(
      "get",
      "https://jsonplaceholder.typicode.com/posts"
    );

    showPosts(response);
  } catch (error) {}
};

const createPost = (title, body) => {
  const userId = Math.random();
  const fd = new FormData();
  fd.append("title", title);
  fd.append("body", body);
  fd.append("userId", userId);

  sentHttpRequestXML("post", `https://jsonplaceholder.typicode.com/posts`, fd);
};

const clean = (ctrl) => (ctrl.value = "");

const submitHandler = (evt) => {
  evt.preventDefault();
  const title = evt.currentTarget.querySelector("#title").value;
  const content = evt.currentTarget.querySelector("#content").value;

  createPost(title, content);

  clean(evt.currentTarget.querySelector("#title"));
  clean(evt.currentTarget.querySelector("#content"));
};

btnFetchPosts.addEventListener("click", fetchPostHandler);
form.addEventListener("submit", submitHandler);
