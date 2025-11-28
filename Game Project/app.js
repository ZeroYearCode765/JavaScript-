// 1. Game data array
const games = [
  {
    id: 1,
    name: "Cyberpunk 2077",
    rating: "⭐ 4.5",
    recommendation: "Recommended for RPG lovers",
    image: "1.jpg",
    description: "In Night City, a mercenary named V must navigate chaos, gangs, and megacorps."
  },
  {
    id: 2,
    name: "God of War: Ragnarok",
    rating: "⭐ 4.9",
    recommendation: "Perfect for mythological action lovers",
    image: "2.jpg",
    description: "Join Kratos and Atreus in an epic journey across Norse realms to prevent Ragnarok."
  },
  {
    id: 3,
    name: "Red Dead Redemption 2",
    rating: "⭐ 4.8",
    recommendation: "Great for open-world story fans",
    image: "3.jpg",
    description: "Live the life of Arthur Morgan in the dying days of the American frontier."
  },
  {
    id: 4,
    name: "Valorant",
    rating: "⭐ 4.2",
    recommendation: "Best for competitive shooter lovers",
    image: "4.jpg",
    description: "A 5v5 tactical shooter where precise aim and teamwork determine victory."
  },
  {
    id: 5,
    name: "The Witcher 3: Wild Hunt",
    rating: "⭐ 4.9",
    recommendation: "Must-play for fantasy RPG fans",
    image: "5.jpg",
    description: "Play as Geralt of Rivia, a monster hunter in a rich world full of moral decisions."
  },
  {
    id: 6,
    name: "Elden Ring",
    rating: "⭐ 4.7",
    recommendation: "Challenging and beautiful adventure",
    image: "6.jpg",
    description: "Explore the vast Lands Between in a dark fantasy world filled with powerful bosses."
  },
  {
    id: 7,
    name: "GTA V",
    rating: "⭐ 4.6",
    recommendation: "Great for sandbox mayhem and story",
    image: "7.jpg",
    description: "Follow three criminals through a wild story of heists, betrayal, and chaos in Los Santos."
  },
  {
    id: 8,
    name: "Hades",
    rating: "⭐ 4.4",
    recommendation: "Great for roguelike fans",
    image: "7.jpg",
    description: "Escape the Underworld as Zagreus, battling mythological creatures in fast-paced combat."
  }
];


// 2. Main grid container
const container = document.querySelector(".games-grid");

// 3. Render all cards
function renderGameCards() {
  container.innerHTML = ""; // Clear container
  games.forEach(game => {
    const card = document.createElement("div");
    card.classList.add("game-card");

    const img = document.createElement("img");
    img.src = `Images/${game.image}`;
    img.alt = game.name;
    img.className = "img";

    const title = document.createElement("h3");
    title.textContent = game.name;
    title.classList.add("game-title");

    const review = document.createElement("p");
    review.textContent = game.rating;
    review.classList.add("game-review");

    const recommendation = document.createElement("p");
    recommendation.textContent = game.recommendation;
    recommendation.classList.add("game-recommendation");

    // Add click event to show detailed info
    card.addEventListener("click", () => {
      showGameDetails(game);
    });

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(review);
    card.appendChild(recommendation);

    container.appendChild(card);
  });
}

// 4. Function to display one game's detail view
function showGameDetails(game) {
  container.innerHTML = ""; // Clear grid

  const detail = document.createElement("div");
  detail.classList.add("game-detail");

  detail.innerHTML = `
    <img src="Images/${game.image}" class="img" alt="${game.name}">
    <h2>${game.name}</h2>
    <p><strong>Rating:</strong> ${game.rating}</p>
    <p><strong>About:</strong> ${game.description}</p>
    <p><strong>Recommendation:</strong> ${game.recommendation}</p>
    <button class="back-btn">🔙 Back to Games</button>
  `;

  container.appendChild(detail);

  // Back button to return to card view
  document.querySelector(".back-btn").addEventListener("click", renderGameCards);
}

// 5. Initial load
renderGameCards();