"use strict";

// On récupère notre div toggle
const toggle = document.querySelector(".toggle-mode");

// Evenement au clic sur la div toggle, lorsque l'on clique en light mode, on passe en dark mode et inversement. On change ainsi les logos en fonction du mode
toggleMode.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    // On sauvegarde les choix de l'utilisateur en localStorage
    localStorage.setItem("theme", "dark");
    toggleMode.innerHTML = `<i class="fa-solid fa-sun"></i>`;
  } else {
    document.body.classList.remove("dark");
    localStorage.setItem("theme", "light");
    toggleMode.innerHTML = `<i class="fa-solid fa-moon"></i>`;
  }
});

// On récupère les choix de l'utilisateur
let getMode = localStorage.getItem("theme");

if (getMode && getMode === "dark") {
  document.body.classList.add("dark");
}

// On détecte le thème de l'utilisateur, s'il est sombre alors on ajoute la classe "dark"
// if (
//   window.matchMedia &&
//   window.matchMedia("(prefers-color-scheme: dark)").matches
// ) {
//   document.body.classList.add("dark");
// }
