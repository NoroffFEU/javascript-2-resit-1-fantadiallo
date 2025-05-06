export function createGameCard(game) {
    const card = document.createElement("div");
    card.className = "game-card";
  
    card.innerHTML = `
      <img src="${game.image?.url}" alt="${game.image?.alt || game.name}" class="game-img" />
      <h2>${game.name}</h2>
      <p><strong>Released:</strong> ${game.released}</p>
      <p><strong>Genre:</strong> ${game.genre?.join(", ") || "N/A"}</p>
    `;
  
    return card;
  }
  