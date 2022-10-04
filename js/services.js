const navToggle = document.getElementById("nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});

toggleClose = (icon) => icon.classList.toggle("fa-xmark");
