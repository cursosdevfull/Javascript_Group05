"use strict";
const mainTitle = document.getElementById("main-title");

console.log(mainTitle);

const elements = document.getElementsByClassName("list-item");
console.log(elements);

const el1 = document.querySelector(".list-item");
console.log(el1);

const el2 = document.querySelectorAll(".list-item");
console.log("el2", el2);

const el3 = document.querySelector("ul li:first-of-type");
console.log("el3", el3);

const el4 = document.querySelector("ul li:last-of-type");
console.log("el4", el4);

const ul = document.querySelector("ul li:last-of-type");
console.log("ul", ul);

const body = document.body;
const head = document.head;
const html = document.documentElement;

console.log(html);
