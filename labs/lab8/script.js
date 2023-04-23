
let element = document.querySelector("body");

function toggleTheme() {
    element.classList.toggle("dark-mode");
}

let buttonElement = document.getElementById("toggleButton");

buttonElement.onclick = toggleTheme;