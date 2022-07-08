window.addEventListener("scroll", menuScroll);
menuScroll();

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add("scroll");
  } else {
    navigation.classList.remove("scroll");
  }
}

// função que ativa o marcado de menu
function activeMenuAtCurrentSection() {
  const targeLine = scrollY + innerHeight / 2; //linha alvo
  const sectionTop = home.offsetTop;           //top da seção atual
  const sectionHeight = home.offsetHeight;     //altura da seção atual
  const sectionTopReachOrPassedTargetLine = targeLine >= sectionTop  //se a linha alvo está dentro da seção atual




  console.log(sectionTopReachOrPassedTargetLine)
}

function menuScroll() {
  showNavOnScroll();
  buttonBackToTop();
  activeMenuAtCurrentSection();
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
