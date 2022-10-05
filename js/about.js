const sidebarToggle = document.querySelector(".sidebar-toggle");
const sidebarClose = document.querySelector(".sidebar-close-toggle");
const sideBar = document.querySelector(".sidebar");
const modalBtn = document.querySelector(".modal-btn");
const closeBtn = document.querySelector(".close-btn");
const modalContent = document.querySelector(".modal-content");
const questionBtns = document.querySelectorAll(".question-btn");

sidebarToggle.addEventListener("click", function () {
  sideBar.classList.toggle("show-sidebar");
});

sidebarClose.addEventListener("click", function () {
  sideBar.classList.remove("show-sidebar");
});

modalBtn.addEventListener("click", function () {
  modalContent.classList.add("show-modal");
});

closeBtn.addEventListener("click", function () {
  modalContent.classList.remove("show-modal");
});

questionBtns.forEach(function (btn) {
  btn.addEventListener("click", function (item) {
    const question = item.currentTarget.parentElement.parentElement;
    question.classList.toggle("show-answer");
  });
});
