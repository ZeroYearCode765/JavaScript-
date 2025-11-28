/* // Creating Set
let s1 = new Set();

s1.add(4);
s1.add("Aadil")

console.log(s1);

s1.delete("Aadil");

console.log(s1);

console.log(s1.size);

console.log(s1.has("Aadil"));
console.log(s1.has(4));

s1.clear();
console.log(s1); */

/* //converting array into set and set into array

let arr = [1,2,3,4,5,5,5];
let set2 = new Set(arr);

console.log(set2);

// set to array
let updatedArray = [...set2];

console.log(updatedArray); */



//Iterating over Map using forEach
const map1 = new Map([[1,2],["age",30],["name","Aadil"]]);

//console.log(map1);

let result = map1.forEach((val,key) => {
    console.log(`${key} : ${val}`);
});
