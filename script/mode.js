"use strict";

const toggle = document.querySelector(".toggle-mode");

toggleMode.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    toggleMode.innerHTML = `<i class="fa-solid fa-sun"></i>`;
  } else {
    document.body.classList.remove("dark");
    localStorage.setItem("theme", "light");
    toggleMode.innerHTML = `<i class="fa-solid fa-moon"></i>`;
  }
});

let getMode = localStorage.getItem("theme");

if (getMode && getMode === "dark") {
  document.body.classList.add("dark");
}

if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  document.body.classList.add("dark");
}
