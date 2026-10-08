const nav = document.querySelector(".nav");
window.addEventListener("scroll", () => nav && nav.classList.toggle("scrolled", window.scrollY > 8));
const btn = document.querySelector(".menu-btn");
const links = document.querySelector(".links");
if (btn && links) btn.addEventListener("click", () => links.classList.toggle("open"));
