export function createGameDetail(game) {
    const container = document.createElement("section");
    container.className = "game-detail";
  
    container.innerHTML = `
      <h1>${game.name}</h1>
      <img src="${game.image?.url}" alt="${game.image?.alt || game.name}" class="game-img" />
      <p><strong>Released:</strong> ${game.released}</p>
      <p><strong>Genre:</strong> ${game.genre?.join(", ") || "N/A"}</p>
      <p><strong>Description:</strong> ${game.description || "No description available."}</p>
      <a href="/" class="back-link">← Back to all games</a>
    `;
  
    return container;
  }
  