const sidebarToggle = document.querySelector(".sidebar-toggle");
const sidebarClose = document.querySelector(".sidebar-close-toggle");
const sideBar = document.querySelector(".sidebar");

sidebarToggle.addEventListener("click", function () {
  sideBar.classList.toggle("show-sidebar");
});

sidebarClose.addEventListener("click", function () {
  sideBar.classList.remove("show-sidebar");
});
