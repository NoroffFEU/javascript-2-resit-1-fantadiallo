import { isFavourited, toggleFavourite } from "../../storage/favourites";

export function createGameCard(game) {
  const card = document.createElement("div");
  card.className = "game-card";

  const favSymbol = isFavourited(game.id) ? "★" : "☆";

  card.innerHTML = `
    <a href="/game/index.html?id=${game.id}">
      <img src="${game.image?.url}" alt="${game.image?.alt || game.name}" class="game-img" />
    </a>
    <h2>${game.name}</h2>
    <p><strong>Released:</strong> ${game.released}</p>
    <p><strong>Genre:</strong> ${game.genre?.join(", ") || "N/A"}</p>
    <button class="favourite-btn" data-id="${game.id}">${favSymbol}</button>
  `;
  console.log(`Rendering ${game.name}, favourited:`, isFavourited(game.id));

  const favBtn = card.querySelector(".favourite-btn");
  favBtn.addEventListener("click", (e) => {
    toggleFavourite(game.id);
    favBtn.textContent = isFavourited(game.id) ? "★" : "☆";
  });

  return card;
}