const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");
const content = document.querySelector(".content");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  menu.classList.toggle("open");
  content.classList.toggle("hide");
});

