const cardGrid = document.querySelector(".card-grid");
const pagination = document.querySelector(".pagination");
const prevButton = pagination.querySelector("button:first-child");
const nextButton = pagination.querySelector("button:last-child");
const currentPageSpan = pagination.querySelector("span");

const postsPerPage = 6;
let currentPage = 1; // Pagina inicial

function createCard(post) {
  const card = document.createElement("div");
  card.classList.add("card");

  const title = document.createElement("h3");
  title.textContent = post.title;

  const body = document.createElement("p");
  body.textContent = post.body;

  card.appendChild(title);
  card.appendChild(body);

  return card;
}

function fetchPosts(page) {
  const url = `https://jsonplaceholder.typicode.com/posts?_start=${(page - 1) * postsPerPage}&_limit=${postsPerPage}`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      cardGrid.innerHTML = ""; // Clear previous cards
      data.forEach(post => {
        const card = createCard(post);
        cardGrid.appendChild(card);
      });
      updatePaginationButtons(data.length);
    })
    .catch(error => console.error(error));
}

function updatePaginationButtons(pageCount) {
  prevButton.disabled = currentPage === 1;
  nextButton.disabled = pageCount < postsPerPage;
  currentPageSpan.textContent = `Page ${currentPage}`;
}

fetchPosts(currentPage);

prevButton.addEventListener("click", () => {
  currentPage--;
  fetchPosts(currentPage);
});

nextButton.addEventListener("click", () => {
  currentPage++;
  fetchPosts(currentPage);
});