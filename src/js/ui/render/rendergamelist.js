import OldGamesApi from "../../api/gameApi/index.js";
import { createGameCard } from "../../utils/card/renderGameCard.js";

let allGames = [];

/**
 * Renders the game list on the page.
 * Fetches all games from the API, displays them, and adds search and sort functionality.
 */
export async function renderGameList() {
  const api = new OldGamesApi();
  const gameList = document.getElementById("gameList");
  const searchInput = document.getElementById("searchInput");
  const sortSelect = document.getElementById("sortSelect");

  gameList.innerHTML = "Loading...";

  try {
    // Fetch all games and display them
    allGames = await api.getAllGames();
    displayGames(allGames);
  } catch (error) {
    gameList.innerHTML = "Failed to load games.";
  }

  /**
   * Displays a list of games in the game list container.
   * @param {Array<Object>} games - The array of game objects to display.
   */
  function displayGames(games) {
    gameList.innerHTML = "";
    games.forEach((game) => {
      const card = createGameCard(game);
      gameList.appendChild(card);
    });
  }

  // Add search functionality
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const searchValue = searchInput.value.toLowerCase();

      const filtered = allGames.filter((game) =>
        game.name.toLowerCase().includes(searchValue)
      );

      displayGames(filtered);
    });
  }

  // Add sort functionality
  if (sortSelect) {
    sortSelect.addEventListener("change", () => {
      const value = sortSelect.value;

      const sorted = [...allGames].sort((a, b) => {
        if (value === "name") return a.name.localeCompare(b.name);
        if (value === "release") return new Date(b.released) - new Date(a.released);
        return 0;
      });

      displayGames(sorted);
    });
  }
}
