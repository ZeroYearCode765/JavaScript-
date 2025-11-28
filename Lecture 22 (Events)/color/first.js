// document.body.addEventListener('click', function (e) {
//     const circle = document.createElement('div');
//     circle.className = 'circle';
    
//     const x = e.clientX;
//     const y = e.clientY;
//     circle.style.left = `${x - 25}px`;  
//     circle.style.top = `${y - 25}px`;   
  
   
//     const colors = ['#FF5733', '#33FF57', '#3357FF', '#F3F033', '#8E44AD'];
//     circle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  

//     const messages = ['Hi', 'Hello', 'Welcome', 'Hey there', 'Hola'];
//     circle.textContent = messages[Math.floor(Math.random() * messages.length)];
  
//     document.body.appendChild(circle);
  

//     setTimeout(() => {
//       circle.remove();
//     }, 5000);
//   });


document.body.addEventListener("click", (event) => {
  const circle = document.createElement('div');
  circle.className = 'circle';
  circle.textContent = "Hi";

  const x = event.clientX;
  const y = event.clientY;

  circle.style.left = `${x - 25}px`;
  circle.style.top = `${y - 25}px`;

  const color = ["red", "blue", "orange", "green", "purple", "white", "yellow", "wheat"];
  const randomColor = color[Math.floor(Math.random() * color.length)];
  circle.style.backgroundColor = randomColor;

  // Handle text color based on background
  const lightColors = ["white", "yellow", "wheat"];
  if (lightColors.includes(randomColor)) {
    circle.style.color = "black";
  } else {
    circle.style.color = "white";
  }

  document.body.append(circle);

  setTimeout(() => {
    circle.remove();
  }, 5000);
});
