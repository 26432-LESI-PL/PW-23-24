const cardGrid = document.querySelector(".card-grid");

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

fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(data => {
    data.forEach(post => {
      const card = createCard(post);
      cardGrid.appendChild(card);
    });
  })
  .catch(error => console.error(error));
