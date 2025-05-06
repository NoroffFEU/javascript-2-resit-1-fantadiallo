export default function renderHome() {
    const container = document.querySelector("main") || document.body;
  
    container.innerHTML = `
      <section class="home">
        <h1>Welcome to Old Games</h1>
        <p>Discover classic games from the past!</p>
      </section>
    `;
  }
  