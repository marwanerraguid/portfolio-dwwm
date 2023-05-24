"use strict";

const burger = document.querySelector(".burger");
const menu = document.querySelector("menu");

burger.addEventListener("click", () => {
  menu.classList.toggle("active");
  burger.classList.toggle("active");
});

document.querySelectorAll("li").forEach((n) =>
  n.addEventListener("click", () => {
    menu.classList.remove("active");
    burger.classList.remove("active");
  })
);
