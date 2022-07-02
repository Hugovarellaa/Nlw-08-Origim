function menuScroll() {
  const nav = document.querySelector("#navigation");
  if (scrollY === 0) {
    nav.classList.remove("scroll");
  } else {
    nav.classList.add("scroll");
  }
}
