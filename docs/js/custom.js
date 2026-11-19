document.addEventListener("DOMContentLoaded", () => {
  const searchButton = document.querySelector(".help-search");
  const searchToggle = document.getElementById("__search");
  const searchInput = document.querySelector("[data-md-component='search-query']");

  if (searchButton && searchToggle && searchInput) {
    searchButton.hidden = false;
    searchButton.addEventListener("click", () => {
      if (!searchToggle.checked) {
        searchToggle.click();
      }
      searchInput.focus();
    });
  }
});
