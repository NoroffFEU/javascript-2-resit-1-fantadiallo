import { renderGameList } from "../../../ui/render/rendergamelist.js";

export default function renderHome() {
  const container = document.querySelector("main") || document.body;

  container.innerHTML = `
    <section class="home">
      <h1>Welcome to Old Games</h1>
      <p>Discover classic games from the past!</p>
      <div id="gameList" class="containerGames">Loading games...</div>
    </section>
  `;

  renderGameList(); // this will now work because #gameList exists
}
