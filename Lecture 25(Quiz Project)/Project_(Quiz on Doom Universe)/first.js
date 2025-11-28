const doomQuiz = [
  {
    question: "What is the name of the protagonist in the DOOM series?",
    options: ["Hell Walker", "Doom Slayer", "Master Chief", "B.J. Blazkowicz"],
    answer: "Doom Slayer"
  },
  {
    question: "What is the name of the main enemy faction in DOOM Eternal?",
    options: ["The Forsaken", "The Legion", "The Demonic Horde", "The Hell Priests"],
    answer: "The Hell Priests"
  },
  {
    question: "What type of weapon is the BFG?",
    options: ["Ballistic Flame Gun", "Big Friendly Gun", "Bio Force Gun", "Big F***ing Gun"],
    answer: "Big F***ing Gun"
  },
  {
    question: "What is the Doom Slayer’s primary melee weapon in DOOM Eternal?",
    options: ["Crucible Blade", "Chainsaw", "Doom Blade", "Energy Sword"],
    answer: "Doom Blade"
  },
  {
    question: "What year was the original DOOM released?",
    options: ["1991", "1993", "1996", "1999"],
    answer: "1993"
  },
  {
    question: "Which corporation is responsible for opening the portals to Hell in DOOM (2016)?",
    options: ["Union Aerospace Corporation (UAC)", "MarsTech", "Weyland Corp", "Argent Facility"],
    answer: "Union Aerospace Corporation (UAC)"
  },
  {
    question: "What resource is used to power weapons and upgrades in DOOM Eternal?",
    options: ["Argent Energy", "Solar Cells", "Demon Cores", "Phobos Energy"],
    answer: "Argent Energy"
  },
  {
    question: "Which enemy explodes upon death in DOOM Eternal?",
    options: ["Mancubus", "Revenant", "Cacodemon", "Lost Soul"],
    answer: "Lost Soul"
  },
  {
    question: "What is the name of the ancient race in DOOM Eternal’s lore?",
    options: ["The Night Sentinels", "The Makers", "The Watchers", "The Seraphim"],
    answer: "The Night Sentinels"
  },
  {
    question: "Which boss appears at the end of DOOM (2016)?",
    options: ["Icon of Sin", "Spider Mastermind", "Cyberdemon", "Hell Priest"],
    answer: "Spider Mastermind"
  },
  {
    question: "Who betrays the Doom Slayer in DOOM Eternal?",
    options: ["Hayden", "The Father", "Samuel Hayden", "The Khan Maykr"],
    answer: "Samuel Hayden"
  },
  {
    question: "What is the name of the Doom Slayer’s base in DOOM Eternal?",
    options: ["Fortress of Pain", "Doom Fortress", "Fortress of Doom", "Hell Keep"],
    answer: "Fortress of Doom"
  },
  {
    question: "Which of these is NOT a weapon in DOOM Eternal?",
    options: ["Super Shotgun", "Heavy Cannon", "Nail Gun", "Plasma Rifle"],
    answer: "Nail Gun"
  },
  {
    question: "Which demon has rocket launchers for shoulders?",
    options: ["Arachnotron", "Revenant", "Whiplash", "Pain Elemental"],
    answer: "Revenant"
  },
  {
    question: "What is the Crucible in DOOM Eternal?",
    options: ["A teleportation device", "A demonic prison", "A sword used by the Slayer", "A power generator"],
    answer: "A sword used by the Slayer"
  },
  {
    question: "What planet is the DOOM (2016) game set on?",
    options: ["Earth", "Titan", "Mars", "Phobos"],
    answer: "Mars"
  },
  {
    question: "What is the main goal of the Doom Slayer?",
    options: ["Escape Mars", "Kill the demons and stop Hell", "Save humanity through diplomacy", "Power up the Crucible"],
    answer: "Kill the demons and stop Hell"
  },
  {
    question: "Who created the DOOM series?",
    options: ["Bungie", "id Software", "Epic Games", "Bethesda"],
    answer: "id Software"
  },
  {
    question: "What is the fast travel system in DOOM Eternal called?",
    options: ["Fast Warp", "Demon Rift", "Fast Travel", "Portal Hop"],
    answer: "Fast Travel"
  },
  {
    question: "What is the final boss in DOOM Eternal?",
    options: ["Marauder", "Icon of Sin", "Khan Maykr", "The Betrayer"],
    answer: "Icon of Sin"
  }
];

// Pick 5 random unique questions
function randomQuestion() {
  let set = new Set();
  while (set.size < 5) {
    const index = Math.floor(Math.random() * doomQuiz.length); // Fixed the math.random mistake
    set.add(doomQuiz[index]);
  }
  return [...set];
}

const form = document.querySelector('form');
const questions = randomQuestion();
const original_answer = {};

// Dynamically create the quiz
questions.forEach((data, index) => {
  const div = document.createElement('div');
  div.className = 'question';

  const paragraph = document.createElement('p');
  paragraph.innerHTML = `${index + 1}: ${data.question}`;
  div.appendChild(paragraph);

  original_answer[`q${index + 1}`] = data.answer;

  data.options.forEach((option) => {
    const label = document.createElement('label');
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = `q${index + 1}`;
    input.value = option;

    label.appendChild(input);
    label.appendChild(document.createTextNode(option));
    div.appendChild(label);
    div.appendChild(document.createElement('br'));
  });

  form.insertBefore(div, document.getElementById('submit-btn')); // insert above submit button
});

// Handle form submission
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  let score = 0;

  for (let [key, value] of formData.entries()) {
    if (value === original_answer[key]) {
      score++;
    }
  }

  const resultBox = document.getElementById('result');
  resultBox.innerText = `${score} out of 5 correct`;
});
