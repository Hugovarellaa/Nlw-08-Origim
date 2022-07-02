function menuScroll() {
  const nav = document.querySelector("#navigation");
  if (scrollY === 0) {
    nav.classList.remove("scroll");
  } else {
    nav.classList.add("scroll");
  }
}

function openMenu() {
  document.body.classList.add("menu-expanded");
}

function closeMenu() {
  document.body.classList.remove("menu-expanded");
}
