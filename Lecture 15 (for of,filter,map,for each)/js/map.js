/*
// multiply each element by 2 
let arr = [1,2,3,4,5];

let map1 = arr.map((num,index,array) => {
    return arr[index] = num * 2;
})
console.log(map1);

/* or 
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8]
*/


// Some Examples to try

/* //1st Square each element
// Given:
const numbers = [1, 2, 3, 4, 5];

// Output:
//[1, 4, 9, 16, 25]

let Square = numbers.map((num) => {
    return num * num;
});

console.log(Square);

//done
 */

/* // 2nd Convert to UpperCase
// Given:
const fruits = ['apple', 'banana', 'cherry'];

/* // Output:
['APPLE', 'BANANA', 'CHERRY']


const Upper = fruits.map((value) => {
    return value.toUpperCase();
})

console.log(Upper);
 */

/* // 3rd Extract ages from objects
// Given:
const people = [
  { name: 'John', age: 25 },
  { name: 'Mary', age: 30 },
  { name: 'Alex', age: 35 }
];

// Output:
// [25, 30, 35]

const extract = people.map((value) => {
    return `age : ${value.age}`;
})

console.log(extract); */


// Given:
const names = ['John Doe', 'Jane Smith', 'Alice Johnson'];

// Output:
// ['John', 'Jane', 'Alice']

let firstNames = names.map(name => name.split(" ")[0]);
console.log(firstNames); // ['John', 'Jane', 'Alice']



// Filter even number and return their square
let arr = [1,2,3,4,5,6]

let sq = arr.filter(num => num % 2 == 0).map(num => num *num);
console.log(sq);
