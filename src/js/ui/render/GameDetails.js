import OldGamesApi from "../../api/gameApi/index.js";
import { createGameDetail } from "../../utils/card/gameDetailCard.js";

export default async function renderGameDetails(gameId) {
  const container = document.querySelector("main") || document.body;
  container.innerHTML = `<section id="gameDetails">Loading game details...</section>`;
  
  const gameDetailsContainer = container.querySelector("#gameDetails"); // ✅ Fix here

  if (!gameId) {
    gameDetailsContainer.innerHTML = "No game ID provided.";
    return;
  }

  const api = new OldGamesApi();

  try {
    const game = await api.getGameById(gameId);
    gameDetailsContainer.innerHTML = "";
    const detail = createGameDetail(game);
    gameDetailsContainer.appendChild(detail);
  } catch (error) {
    console.error("Game detail fetch failed", error);
    gameDetailsContainer.innerHTML = "Failed to load game details.";
  }
}

