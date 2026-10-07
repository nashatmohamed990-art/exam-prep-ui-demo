const burger = document.getElementById("burger");
const top = document.querySelector(".top");
burger.addEventListener("click", () => top.classList.toggle("open"));

document.getElementById("fake").addEventListener("submit", (event) => {
  event.preventDefault();
  document.getElementById("form-note").textContent =
    "مفيش حساب هنا. النموذج شكلي بس عشان تعدّل التصميم.";
});
