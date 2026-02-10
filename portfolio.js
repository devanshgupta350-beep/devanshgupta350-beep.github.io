document.addEventListener("DOMContentLoaded", () => 
  {

  // ===== Smooth scroll =====
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (!targetId.startsWith("#")) return;

      const targetSection = document.querySelector(targetId);
      if (!targetSection) return;

      e.preventDefault();
      targetSection.scrollIntoView({ behavior: "smooth" });
    });
  });

  // ===== Active nav =====
  const sections = document.querySelectorAll("section");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;

      if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

  // ===== Reveal =====
  const reveals = document.querySelectorAll(".reveal");

  function revealOnScroll() {
    const windowHeight = window.innerHeight;
    reveals.forEach(el => {
      if (el.getBoundingClientRect().top < windowHeight - 120) {
        el.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

  // ===== Hamburger =====
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const overlay = document.getElementById("overlay");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("show");
  overlay.classList.toggle("show");
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show");
    hamburger.classList.remove("active");
    overlay.classList.remove("show");
  });
});

overlay.addEventListener("click", () => {
  navMenu.classList.remove("show");
  hamburger.classList.remove("active");
  overlay.classList.remove("show");
});

// ===== Hover cursor text =====
const hoverLabel = document.getElementById("hover-label");
const hoverItems = document.querySelectorAll(".hover-text");

hoverItems.forEach(item => {
  item.addEventListener("mouseenter", () => {
    hoverLabel.textContent = item.dataset.hover;
    hoverLabel.style.opacity = "1";
  });

  item.addEventListener("mouseleave", () => {
    hoverLabel.style.opacity = "0";
  });

  item.addEventListener("mousemove", (e) => {
    hoverLabel.style.left = e.clientX + "px";
    hoverLabel.style.top = e.clientY + "px";
  });
});
  });