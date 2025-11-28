
//Create a Element
let ele =document.createElement('li'); //element created
ele.innerHTML = "Git";

// Now to link to ul in html doc follow these steps
document.getElementById("first").append(ele);


//Create a Text Node
// in index,].js
//Create a Attribute Node
// in index.js

//Homework

//insertAdjacentHTML
let obj1 = document.createTextNode("Hello Coder Army");
let obj = document.getElementById("first");
obj.appendChild(obj1);


//removeChil(node)

obj.removeChild(ele); // removed git
// obj.remove();