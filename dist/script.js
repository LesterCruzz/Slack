const header = document.querySelector(".header");
const container = document.querySelector(".container");
const black = document.querySelector(".black");
const white = document.querySelector(".white");
const nav = document.querySelector(".header__nav ul a");

const drop = document.querySelector(".features__dropdown");
const chev = document.querySelector(".header__nav ul i");

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.scrollY >= 400) {
    header.classList.add("light");
  } else {
    header.classList.remove("light");
  }
  if (window.scrollY >= 400) {
    container.classList.add("light");
  } else {
    container.classList.remove("light");
  }
  if (window.scrollY >= 400) {
    black.classList.add("light");
  } else {
    black.classList.remove("light");
  }
  if (window.scrollY >= 400) {
    white.classList.add("light");
  } else {
    white.classList.remove("light");
  }
  if (window.scrollY >= 400) {
    nav.classList.add("light");
  } else {
    nav.classList.remove("light");
  }
});

chev.addEventListener("click", () => {
    chev.classList.toggle("open");
    drop.classList.toggle("open");
  });



