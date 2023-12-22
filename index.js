const buttons = document.querySelectorAll(".icon-mobile-nav");
const header = document.querySelector(".header");

const handleClick = () => {
  header.classList.contains("nav-open")
    ? header.classList.remove("nav-open")
    : header.classList.add("nav-open");
};

buttons.forEach((button) => button.addEventListener("click", handleClick));
