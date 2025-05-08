import OldGamesApi from "../../api/gameApi";
import { createGameCard } from "../../utils/card/renderGameCard";

/**
 * Renders the genre page.
 * Fetches games from the API, filters them by the genre provided in the query parameter,
 * and displays them on the page.
 */
export default async function renderGenrePage() {
    const container = document.querySelector("main") || document.body;
    container.innerHTML = `<section id="genreList">Loading genre...</section>`;
  
    const genreParam = new URLSearchParams(window.location.search).get("genre");
    const genreContainer = container.querySelector("#genreList");
  
    // Check if a genre parameter is provided
    if (!genreParam) {
      genreContainer.innerHTML = "No genre provided.";
      return;
    }
  
    const api = new OldGamesApi();
  
    try {
      // Fetch all games and filter by genre
      const allGames = await api.getAllGames();
      const filtered = allGames.filter((game) =>
        game.genre?.some((g) => g.toLowerCase() === genreParam.toLowerCase())
      );
  
      // Handle case where no games match the genre
      if (filtered.length === 0) {
        genreContainer.innerHTML = `<p>No games found in "${genreParam}" genre.</p>`;
        return;
      }
  
      // Render the filtered games
      genreContainer.innerHTML = `<h2>${genreParam} Games</h2>`;
      filtered.forEach((game) => {
        const card = createGameCard(game);
        genreContainer.appendChild(card);
      });
    } catch (error) {
      // Handle errors during API call or rendering
      genreContainer.innerHTML = "Failed to load genre games.";
    }
}