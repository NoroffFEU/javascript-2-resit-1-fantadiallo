import OldGamesApi from "../../api/gameApi";
import { createGameCard } from "../../utils/card/renderGameCard";

export default async function renderGenrePage() {
    const container = document.querySelector("main") || document.body;
    container.innerHTML = `<section id="genreList">Loading genre...</section>`;
  
    const genreParam = new URLSearchParams(window.location.search).get("genre");
    const genreContainer = container.querySelector("#genreList");
  
    if (!genreParam) {
      genreContainer.innerHTML = "No genre provided.";
      return;
    }
  
    const api = new OldGamesApi();
  
    try {
      const allGames = await api.getAllGames();
      const filtered = allGames.filter((game) =>
        game.genre?.some((g) => g.toLowerCase() === genreParam.toLowerCase())
      );
  
      if (filtered.length === 0) {
        genreContainer.innerHTML = `<p>No games found in "${genreParam}" genre.</p>`;
        return;
      }
  
      genreContainer.innerHTML = `<h2>${genreParam} Games</h2>`;
      filtered.forEach((game) => {
        const card = createGameCard(game);
        genreContainer.appendChild(card);
      });
    } catch (error) {
      genreContainer.innerHTML = "Failed to load genre games.";
    }
  }