import { Carousel } from "bootstrap";

const mobMenuBtns = document.querySelectorAll(".mob-menu-btn");
const mobMenu = document.getElementById("mob-menu");

mobMenuBtns.forEach((mobMenuBtn) => {
  mobMenuBtn.addEventListener("click", (e) => {
    e.stopPropagation();

    if (mobMenu.classList.contains("opened")) {
      mobMenu.classList.remove("opened");
    } else {
      mobMenu.classList.add("opened");
    }
  });
});

mobMenu.addEventListener("click", (e) => {
  if (e.target === mobMenu) {
    mobMenu.classList.remove("opened");
  }
});
