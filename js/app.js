const icon = document.querySelector(".icon");
const links = document.querySelector(".links");
const nav = document.querySelector("nav");

icon.addEventListener("click", function () {
  if (links.classList.contains("show")) {
    links.classList.remove("show");
    nav.style.borderBottom = "none";
  } else {
    links.classList.add("show");
    nav.style.borderBottom = "2px solid yellowgreen";
  }
});

// let toggleClose = function (icon) {
//   icon.classList.toggle("fa-xmark");
// };

toggleClose = (icon) => icon.classList.toggle("fa-xmark");
