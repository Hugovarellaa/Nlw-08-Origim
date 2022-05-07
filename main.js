function onScroll() {
  const scroll = document.getElementById("navigator");
  if (scrollY !== 0) {
    scroll.classList.add("scroll");
  } else {
    scroll.classList.remove("scroll");
  }
}

function openMenu() {
  document.body.classList.add("menu-active");
}

function closeMenu() {
  document.body.classList.remove("menu-active");
}
