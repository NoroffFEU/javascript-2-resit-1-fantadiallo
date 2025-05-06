
import OldGamesApi from "../../api/oldGames/index.js";
import { createGameCard } from "./createGameCard.js";

export async function renderGameList() {
  const api = new OldGamesApi();
  const gameList = document.getElementById("gameList");

  try {
    const games = await api.getAllGames();
    gameList.innerHTML = "";

    games.forEach((game) => {
      const card = createGameCard(game);
      gameList.appendChild(card);
    });
  } catch (error) {
    gameList.innerHTML = "<p>Error loading games. Please try again later.</p>";
  }
}
