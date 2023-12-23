const buttons = document.querySelectorAll(".icon-mobile-nav");
const header = document.querySelector(".header");

const handleClick = () => header.classList.toggle("nav-open");

buttons.forEach((button) => button.addEventListener("click", handleClick));
