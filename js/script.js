// Contoh data produk (bisa diganti dengan API/Database)
const games = [
  { id: 1, name: "Mobile Legends", image: "images/mlbb.jpg" },
  { id: 2, name: "Free Fire", image: "images/ff.jpg" }
];

function loadGames() {
  const container = document.querySelector('.game-list');
  games.forEach(game => {
    container.innerHTML += `
      <div class="game-card">
        <img src="${game.image}" alt="${game.name}">
        <h3>${game.name}</h3>
        <button>Top Up</button>
      </div>
    `;
  });
}

loadGames();
