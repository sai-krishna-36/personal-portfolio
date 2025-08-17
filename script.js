// Navigation Tabs Control
const navLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("article[data-page]");

navLinks.forEach((link, index) => {
  link.addEventListener("click", () => {
    // remove active from all nav links
    navLinks.forEach(l => l.classList.remove("active"));
    // remove active from all pages
    pages.forEach(page => page.classList.remove("active"));

    // add active to clicked nav link
    link.classList.add("active");

    // show corresponding page (same index as nav)
    pages[index].classList.add("active");
  });
});
