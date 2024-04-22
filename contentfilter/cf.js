const searchBox = document.getElementById("searchbox");
const itemsList = document.getElementById("items");

searchBox.addEventListener("keyup", (event) => {
  const searchTerm = event.target.value.toLowerCase();
  const items = itemsList.querySelectorAll("li");

  items.forEach((item) => {
    const itemName = item.textContent.toLowerCase();
    if (itemName.includes(searchTerm)) {
      item.classList.remove("hidden");
    } else {
      item.classList.add("hidden");
    }
  });
});
