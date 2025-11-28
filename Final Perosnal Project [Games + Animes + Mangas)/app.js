// 1. Create array of objects
const db = [
    {
        id : 1,
        name : "Cyberpunk",
        rating : 4.5,
        recommendation : "very much",
        image : "cb.jpg"
    },
    {
        id : 2,
        name : "Cyberpunk Orion",
        rating : 0,
        recommendation : "Can't",
        image : "cb.jpg"
    }
]

// 2. Function to create cards
const container = document.querySelector(".cards");

function card_creation(db) {
    container.innerHTML = "";

    db.forEach(game => {
        const card = document.createElement("div");
        card.classList.add("game-card");

        const img = document.createElement("img");
        img.src = `images/${game.image}`;
        img.alt = game.name;
        img.className = "img";

        const title = document.createElement("h3");
        title.textContent = game.name;

        const review = document.createElement("p");
        review.textContent = `⭐ ${game.rating}`;

        const recommendation = document.createElement("p");
        recommendation.textContent = game.recommendation;

        // Event listener
        card.addEventListener("click", () => {
            showGameDetailes(game);
        });

        card.append(img, title, review, recommendation);
        container.appendChild(card);
    });
}

/* showGameDetailes() {
    container.innerHTML = " ";
}  */

// CALL WITH ARGUMENT
card_creation(db);
