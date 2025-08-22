document.addEventListener("DOMContentLoaded", function () {
  const logoLink = document.querySelector("a.md-header__button.md-logo");
  if (logoLink) {
    logoLink.setAttribute("href", "https://gocheap.vn");
    logoLink.setAttribute("target", "_blank"); // mở tab mới
  }
});
