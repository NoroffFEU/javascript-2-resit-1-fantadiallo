import { renderGameList } from "../../../ui/render/rendergamelist.js";

export default function renderHome() {
  const container = document.querySelector("main") || document.body;

  container.innerHTML = `
  <section class="home">
    <h1>Welcome to Old Games</h1>
    <p>Discover classic games from the past!</p>

    <input type="text" id="searchInput" placeholder="Search games..." />

    <select id="sortSelect">
      <option value="">Sort by...</option>
      <option value="name">Name (A-Z)</option>
      <option value="release">Release Date (Newest)</option>
    </select>

    <div id="gameList" class="containerGames">Loading games...</div>
  </section>
`;
  renderGameList();
}
