
const themeSwitch = document.getElementById("theme-switch");

themeSwitch.addEventListener("click", () => {
  document.body.classList.toggle("darkmode");

  if (document.body.classList.contains("darkmode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

window.onload = () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("darkmode");
  }
};

const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
});

const elements = document.querySelectorAll(
  ".fadeInDown, .fadeInUp, .fadeInLeft, .fadeInRight"
);

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("s");
    }
  });
});

elements.forEach(el => observer.observe(el));