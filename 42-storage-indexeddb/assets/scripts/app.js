const btnSave = document.getElementById("button-save");
const btnRetrieve = document.getElementById("button-retrieve");
const btnDelete = document.getElementById("button-delete");
const btnRetrieveAll = document.getElementById("button-retrieve-all");
const btnUpdate = document.getElementById("button-update");

const getObjectStore = (objectStoreName) => {
  return db
    .transaction(objectStoreName, "readwrite")
    .objectStore(objectStoreName);
};

const addProduct = (product) => {
  const productStore = getObjectStore("products");
  productStore.add(product);
};

let db;
const dbRequest = indexedDB.open("ProductsDB", 1);
dbRequest.onsuccess = (evt) => {
  db = evt.target.result;
  console.log(db);
};

dbRequest.onupgradeneeded = (evt) => {
  db = evt.target.result;
  const objectStore = db.createObjectStore("products", { keyPath: "id" });
  objectStore.transaction.oncomplete = (evt) => {
    addProduct({ id: "p1", title: "Product 01" });
    addProduct({ id: "p2", title: "Product 02" });
    addProduct({ id: "p3", title: "Product 03" });
  };
};

const save = () => {};

const retrieve = (productId) => {
  const productStore = getObjectStore("products");
  const request = productStore.get(productId);
  request.onsuccess = (evt) => console.log(request.result);
};

const remove = (productId) => {
  const productStore = getObjectStore("products");
  const request = productStore.delete(productId);
  request.onsuccess = (evt) => console.log(request.result);
};

const retrieveAll = () => {
  const productStore = getObjectStore("products");
  const request = productStore.getAll();
  request.onsuccess = (evt) => console.log(request.result);
};

const update = (productId, newTitle) => {
  const productStore = getObjectStore("products");
  const request = productStore.get(productId);
  request.onsuccess = (evt) => {
    const data = evt.target.result;
    data.title = newTitle;

    const requestUpdate = productStore.put(data);
    requestUpdate.onsuccess = (evt) => console.log("Product updated");
  };
};

btnSave.addEventListener("click", save);
btnRetrieve.addEventListener("click", retrieve.bind(this, "p2"));
btnDelete.addEventListener("click", remove.bind(this, "p3"));
btnRetrieveAll.addEventListener("click", retrieveAll);
btnUpdate.addEventListener(
  "click",
  update.bind(this, "p2", "new title for product")
);
