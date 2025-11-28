/*
let obj = {
    name : "Aadil",
    age : 19,
    state : "Maharashtra"
};

for(let keys in obj) { // the name does not have to bekeys it can be anything
    console.log(keys,":",obj[keys]);
};

// object inheriting from obj
let obj2 = Object.create(obj);
obj2.id = 12;
obj2.mail = "@gmail.com";


//Difference between Object.keys and for-in loop
console.log(Object.keys(obj2)); // O/P [ 'id', 'mail' ]

for(let keys in obj2) {
    console.log(keys); /* O/P id
                              mail
                              name
                              age
                              state 
}
*/



/* // Writable,Enumerable and Configurable :- definitions in pdf
let obj = {
     name : "Aadil",
    age : 19,
    state : "Maharashtra"
};

Object.defineProperty(obj,'name',{
    value: "Bhavesh",
    writable: false,
    enumerable: true,
    configurable: true
});

obj.name = "Aadil2";
console.log(obj.name); // O/P Bhavesh because writable is false

console.log(Object.getOwnPropertyDescriptor(obj,"age"));

//Setting Enumerable false
Object.defineProperty(obj,'age',{
    writable: false,
    enumerable: false,
    configurable: true
});

console.log(obj); // age will not show even in for -in,Object.keys and Object.entries
*/



// New Properties to practice as homework
let obj = {
     name : "Aadil",
    age : 19,
    state : "Maharashtra"
};

//1st 
console.log(obj.hasOwnProperty("toString")); //false becauseits not obj's own property its inherited property

//2nd 
Object.defineProperties(obj,{weight : {value : 100,writable:true,enumerable:true,configurable:false},height : {value : "6ft 1 inch",writable:false,enumerable:true,configurable:true}});

obj.height = "6ft 2 inch"; // can't change height 
console.log(obj);
/* O/P
{
  name: 'Aadil',
  age: 19,
  state: 'Maharashtra',
  weight: 100,
  height: '6ft 1 inch'
}
*/
//Hiding state from printing
Object.defineProperty(obj,"state", {
    enumerable:false
})

for(let keys in obj) {
    console.log(keys ,":",obj[keys]); // state will not show
} /*
o/p 
name : Aadil
age : 19
weight : 100
height : 6ft 1 inch
*/  //Thats practice done