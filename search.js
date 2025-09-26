// search.js
function filterSite(query) {
  query = query.toLowerCase();

  // Example: filter list items on the current page
  const items = document.querySelectorAll(".searchable");
  items.forEach(item => {
    if (item.textContent.toLowerCase().includes(query)) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
}
