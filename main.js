function onScroll() {
  const scroll = document.getElementById("navigator");
  if (scrollY !== 0) {
    scroll.classList.add("scroll");
  } else {
    scroll.classList.remove("scroll");
  }
}
