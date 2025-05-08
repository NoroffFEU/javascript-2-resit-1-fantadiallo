import { isFavourited, toggleFavourite } from "../../storage/favourites";

/**
 * Creates a game card element.
 * Displays game details and allows toggling the favourite status.
 * @param {Object} game - The game object containing details to display.
 * @param {string} game.id - The unique ID of the game.
 * @param {string} game.name - The name of the game.
 * @param {Object} [game.image] - The image object for the game.
 * @param {string} [game.image.url] - The URL of the game's image.
 * @param {string} [game.image.alt] - The alt text for the game's image.
 * @param {string} game.released - The release date of the game.
 * @param {Array<string>} [game.genre] - The genres associated with the game.
 * @returns {HTMLElement} The game card element.
 */
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