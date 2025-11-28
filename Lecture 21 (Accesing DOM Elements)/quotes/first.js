const quotes = [
    "The best way to predict the future is to create it. — Peter Drucker",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. — Winston Churchill",
    "The only way to do great work is to love what you do. — Steve Jobs",
    "Don't watch the clock; do what it does. Keep going. — Sam Levenson",
    "It does not matter how slowly you go, as long as you do not stop. — Confucius",
    "Opportunities don't happen, you create them. — Chris Grosser",
    "You miss 100% of the shots you don’t take. — Wayne Gretzky",
    "In the middle of every difficulty lies opportunity. — Albert Einstein",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us. — Ralph Waldo Emerson",
    "The harder you work for something, the greater you'll feel when you achieve it. — Anonymous",
    "Success is not how high you have climbed, but how you make a positive difference to the world. — Roy T. Bennett",
    "Dream big and dare to fail. — Norman Vaughan",
    "Don’t let yesterday take up too much of today. — Will Rogers",
    "The future belongs to those who believe in the beauty of their dreams. — Eleanor Roosevelt",
    "It always seems impossible until it's done. — Nelson Mandela",
    "The way to get started is to quit talking and begin doing. — Walt Disney",
    "Success usually comes to those who are too busy to be looking for it. — Henry David Thoreau",
    "It’s not whether you get knocked down, it’s whether you get up. — Vince Lombardi",
    "Your time is limited, so don’t waste it living someone else’s life. — Steve Jobs",
    "Everything you’ve ever wanted is on the other side of fear. — George Addair"
  ];
  


/* function generatQuote(){  
const text = document.getElementById("quote");


const index = Math.floor(Math.random()*quotes.length);
text.textContent = quotes[index];
}
 */

//setInterval(generatQuote,2000);


//  Chnage the background color in every 5 second


const colors = [
  "#FF5733", "#33FF57", "#3357FF", "#FFD700", "#8A2BE2", "#FF1493", "#00CED1", "#FF4500",
  "#7FFF00", "#FF6347", "#20B2AA", "#DA70D6", "#00FF7F", "#DC143C", "#BA55D3", "#1E90FF",
  "#ADFF2F", "#FF8C00", "#00FA9A", "#4682B4", "#EE82EE", "#FF00FF", "#A52A2A", "#808000",
  "#40E0D0", "#FA8072", "#6A5ACD", "#9ACD32", "#F08080", "#B22222", "#5F9EA0", "#8B008B",
  "#00FFFF", "#556B2F", "#F0E68C", "#8FBC8F", "#BDB76B", "#C71585", "#D2691E", "#FFB6C1",
  "#87CEEB", "#9932CC", "#E9967A", "#E6E6FA", "#B0C4DE", "#CD5C5C", "#FFDEAD", "#3CB371"
];

function bg(){
const obj =document.getElementById("body");
 const randomIndex = Math.floor(Math.random() * colors.length);
  obj.style.backgroundColor = colors[randomIndex];
};

setInterval(bg,2000);


//Adding Event Listener
const button = document.getElementById("button");

button.addEventListener('click',() => {

const text = document.getElementById("quote");

const index = Math.floor(Math.random()*quotes.length);
text.textContent = quotes[index];

})