/*Print 
 12345
 12345
 12345
 12345
 12345

for(let j = 1;j <=5;j++) {
    let row = '';
    for(let i = 1;i <= 5;i++) {
        row+=i;
    }
    console.log(row);
} 
*/

/*
 1
 2 2
 3 3 3
 4 4 4 4
 5 5 5 5 5 
for(let row = 1;row <= 5;row++) {
    let print = '';
    for(let col = 1;col <= row;col++) {
        print = print + row + " ";
    }
    console.log(print);
}
*/

/*
55555
4444
333
22
1

for(let row = 5;row>=1;row--) {
    let print ="";
    for(let col = 1;col<=row;col++) {
        print+=row;
    }
    console.log(print);
}
*/

/* 
        *
       ***
      *****
      *****
       ***
        *

let n = 3; 
for(let i = 1;i <= n;i++) {
    let row =" ".repeat(n-i) + "*".repeat(2*i-1);
    console.log(row);
}
for(let i = n;i >= 1;i--) {
    let row =" ".repeat(n-i) + "*".repeat(2*i-1);
    console.log(row);
}
*/

/*
    *
   * *
  * * *
 * * * *
  * * *
   * *
    *

let n = 4;
for(let i = 1;i <=n;i++) {
    let row = " ".repeat(n - i) + "* ".repeat(i);
    console.log(row);
}
for(let i = n-1;i >= 1;i--) {
    let row = " ".repeat(n - i) + "* ".repeat(i);
    console.log(row);
}
*/


/* //Creating variable and constant with same name under diffrent scope
const a = 100;
if(true){
    const a =200;
    console.log(a);
}
console.log(a); */

/* Accessing array elements using for loop
let arr =  [1,2,3,"Aadil"];
for(let i = 0;i< arr.length;i++) {
    console.log(arr[i]);
} */


/* // Accesing object values using key in for loop
const obj = {
    name:'Aadil',
    age: 20,
    weight:"100",
    height:"6ft 1inch"
};
let keys = Object.keys(obj);

for(let i = 0;i <keys.length;i++) {
    console.log(keys[i] + ":" + obj[keys[i]]);
} */


// Prototype Chaining
const obj = {
    name:"Aadil",
};

console.log(obj.__proto__.__proto__==null);