"use strict";

const toggle = document.querySelector(".toggle-mode");

toggleMode.addEventListener("click", () => {
	console.log("La classe dark a bien été ajoutée au body");
	document.body.classList.toggle("dark");
	if (document.body.classList.contains("dark")) {
		toggleMode.innerHTML = `<i class="fa-solid fa-sun"></i>`;
	} else {
		document.body.classList.remove("dark");
		toggleMode.innerHTML = `<i class="fa-solid fa-moon"></i>`;
	}
});
