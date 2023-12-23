const buttons = document.querySelectorAll(".icon-mobile-nav");
const header = document.querySelector(".header");
const year = document.querySelector(".year");
const allLinks = document.querySelectorAll("a:link");
const heroImg = document.querySelector(".hero-img-box");
const currYear = new Date().getFullYear();
year.textContent = currYear;

const handleClick = () => header.classList.toggle("nav-open");

const goToLink = (e) => {
  e.preventDefault();
  const href = e.target.getAttribute("href");
  const nullHref = e.target.parentNode.getAttribute("href");
  if (nullHref === "#") window.scrollTo({ behavior: "smooth", top: 0 });

  if (e.target.classList.contains("main-nav-link")) {
    header.classList.toggle("nav-open");
  }

  if (href === null) return;

  if (href !== "#" && href.startsWith("#")) {
    const section = document.querySelector(href);
    section.scrollIntoView({ behavior: "smooth" });
  }
  console.log(window.innerWidth);
};

buttons.forEach((button) => button.addEventListener("click", handleClick));

allLinks.forEach((link) => link.addEventListener("click", goToLink));

toggleImg = () =>
  window.innerWidth > 500
    ? heroImg.classList.remove("hidden")
    : heroImg.classList.add("hidden");

window.addEventListener("resize", toggleImg);

toggleImg();
