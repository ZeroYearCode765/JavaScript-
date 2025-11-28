function generator() {
    return Math.floor(Math.random() * 3); // returns 0, 1, or 2
}

const choices = ["Rock 🪨", "Paper 📄", "Scissors ✂️"];

let playButton = document.getElementById('Play');

playButton.addEventListener('click', () => {
    let player1El = document.getElementById('player1');
    let player2El = document.getElementById('player2');
    let resultEl = document.getElementById('result');

    const player1Value = generator();
    const player2Value = generator();

    player1El.innerHTML = "Player 1: " + choices[player1Value];
    player2El.innerHTML = "Player 2: " + choices[player2Value];

    // Determine winner
    if (player1Value === player2Value) {
        resultEl.textContent = "It's a Tie! 😐";
    } else if (
        (player1Value === 0 && player2Value === 2) || // Rock beats Scissors
        (player1Value === 1 && player2Value === 0) || // Paper beats Rock
        (player1Value === 2 && player2Value === 1)    // Scissors beats Paper
    ) {
        resultEl.textContent = "Player 1 Wins! 🎉";
    } else {
        resultEl.textContent = "Player 2 Wins! 🎉";
    }
});


//Easiest Project Ever.