const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
  link.addEventListener("click", function (e) {

    const targetId = this.getAttribute("href");

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
