const optionMenu = document.querySelector(".header")
const selectBtn = optionMenu.querySelector(".head-meanu-icon")
const options = optionMenu.querySelectorAll(".head-list");

selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));

