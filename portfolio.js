// ===== Smooth scroll on nav click =====
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
  link.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");

    // sirf internal links ke liye
    if (!targetId.startsWith("#")) return;

    const targetSection = document.querySelector(targetId);
    if (!targetSection) return;

    e.preventDefault();

    targetSection.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

// ===== Active nav on scroll =====
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;

    if (
      pageYOffset >= sectionTop &&
      pageYOffset < sectionTop + sectionHeight
    ) {
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

