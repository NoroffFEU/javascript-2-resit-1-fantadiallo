import router from "./js/api/router";
import { isLoggedIn } from "./js/storage/user";
import "./style.css";

(async () => {
  await router(window.location.pathname);

  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
  }

  document.querySelectorAll(".auth-only").forEach((el) => {
    el.style.display = isLoggedIn() ? "block" : "none";
  });

  document.querySelectorAll(".guest-only").forEach((el) => {
    el.style.display = isLoggedIn() ? "none" : "block";
  });
})();
