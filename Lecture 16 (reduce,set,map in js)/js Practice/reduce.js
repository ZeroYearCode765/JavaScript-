/* // Que find maximum nuber in array 
let arr = [1,2,10,4,5];

let result = arr.reduce((accum,curr) => {
    if(curr > accum) {
        return curr;
    } else {
        return accum;
    }
}, 0);

console.log(result); */

/* // Flatten an Array
const arr = [[1, 2], [3, 4], [5, 6]];

let flat = arr.reduce((accum,curr) => {
   return  accum.concat((curr),[]);
}, []);

console.log(flat);
 */


/* // Count Occurence
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const occurence = fruits.reduce((acc,curr) => {
    if(acc.hasOwnProperty(curr)) {
        acc[curr]++;
    } else {
        acc[curr] = 1;
    }
    return acc;
},{});

console.log(occurence); */


/* // Find Product in an Array
const numbers = [2,3,4];

const product = numbers.reduce((acc,curr) => {
    return acc = acc * curr;
    // or return acc;
}, 1);

console.log(product); */


/* // Reverse a String
const str = "hello";

const reversed = str.split('').reduce((acc,curr) => { //.split converts string into array ['h', 'e', 'l', 'l', 'o']
    return acc=curr+acc;
},'');

console.log(reversed); */


/* // Sum of Even Numbers in Array
const numbers = [1,2,3,4,5,6];

const sum = numbers.reduce((acc,curr) => {
    if(curr % 2 == 0) {
        acc = acc + curr;
    }
    return acc;
}, 0);

console.log(sum); */

/* // Grouping Data by Property
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 25 },
  { name: "David", age: 30 }
];

const groupByAge = people.reduce((acc,curr) => {
    const age = curr.age;
    if(!acc[age]) {
        acc[age] = [];
    } 
    acc[age].push(curr.name);
    
    return acc;
},{});

console.log(groupByAge); */

/* //Remove Dulicates from array
const nums = [1,2,2,3,4,4,5];

const removedDuplicates = nums.reduce((accu,curr,index,arr) => {
    if(!accu.includes(curr)) {
        accu.push(curr);
    } 
    return accu;
},[]);

console.log(removedDuplicates); */

// Conveert Array of Objects to Single Object
const data = [
  { key: 'a', value: 1 },
  { key: 'b', value: 2 },
  { key: 'c', value: 3 }
];

const singleObj = data.reduce((accu,curr) => {
    accu[curr.key] = curr.value;
    return accu;
}, {});

console.log(singleObj);