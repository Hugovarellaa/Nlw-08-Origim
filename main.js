window.addEventListener("scroll", menuScroll);
menuScroll();

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add("scroll");
  } else {
    navigation.classList.remove("scroll");
  }
}

// função que ativa o marcador de menu
function activeMenuAtCurrentSection(section) {
  const targeLine = scrollY + innerHeight / 2; //linha alvo

  const sectionTop = section.offsetTop; //top da seção atual

  const sectionHeight = section.offsetHeight; //altura da seção atual

  const sectionTopReachOrPassedTargetLine = targeLine >= sectionTop; //se a linha alvo está dentro da seção atual

  const sectionEnd = sectionTop + sectionHeight; //linha de fim da seção atual

  const sectionEndPassedTargetLine = sectionEnd <= targeLine; //se a seção atual passou a linha alvo

  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine; //limites da seção

  const sectionId = section.getAttribute("id");

  const menuElement = document.querySelector(`.menu a[href*="${sectionId}"]`);

  menuElement.classList.remove("active");
  if (sectionBoundaries) {
    menuElement.classList.add("active");
  }
}

function menuScroll() {
  showNavOnScroll();
  buttonBackToTop();
  activeMenuAtCurrentSection(home);
  activeMenuAtCurrentSection(services);
  activeMenuAtCurrentSection(about);
  activeMenuAtCurrentSection(contact);
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

