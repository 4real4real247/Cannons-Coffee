const navUl = document.querySelector("nav ul");
const button = document.getElementById("burger-button");
const menuClosedIcon = document.getElementById("menu-closed");
const menuOpenIcon = document.getElementById("menu-open");

function handleButtonClick() {
  menuClosedIcon.classList.toggle("visible");
  menuOpenIcon.classList.toggle("visible");
  navUl.classList.toggle("visible");
}

button.addEventListener("click", handleButtonClick);
