window.addEventListener("scroll", menuScroll);
menuScroll();

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add("scroll");
  } else {
    navigation.classList.remove("scroll");
  }
}

function menuScroll() {
  showNavOnScroll();
  buttonBackToTop();
}

function buttonBackToTop() {
  if (scrollY > 350) {
    backTop.classList.add("show");
  } else {
    backTop.classList.remove("show");
  }
}

function openMenu() {
  document.body.classList.add("menu-expanded");
}

function closeMenu() {
  document.body.classList.remove("menu-expanded");
}

ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
}).reveal(`
      #home, #home img, #home .stats, 
      #services, #services header, #services .card,
      #about, #about header, #about .content
      `);
