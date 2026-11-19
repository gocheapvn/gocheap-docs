document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector("[data-md-component='search-query']");
  if (!searchInput) return;

  // Material listens for keyup. Paste and mobile input can change the value without it.
  const refreshResults = () => searchInput.dispatchEvent(new Event("keyup"));
  searchInput.addEventListener("input", (event) => {
    if (!event.isComposing) refreshResults();
  });
  searchInput.addEventListener("compositionend", refreshResults);

  const searchButton = document.querySelector(".help-search");
  const searchToggle = document.getElementById("__search");
  if (!searchButton || !searchToggle) return;

  searchButton.hidden = false;
  searchButton.addEventListener("click", () => {
    if (!searchToggle.checked) searchToggle.click();
    searchInput.focus();
  });
});
