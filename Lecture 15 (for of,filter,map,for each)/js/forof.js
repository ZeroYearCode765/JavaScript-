// for of loop is used to iterate through arrays
let arr = [1,2,3,4,5,"Aadil",null,undefined];

for(let iterate of arr) {
    console.log(iterate,":",arr[iterate]);
}

/*
for...of gives values of array.
✅ You are accessing arr[value], so it works like an object property lookup.
✅ For numbers (1,2,3...), it works fine as they are valid indices.
✅ For strings ("Aadil"), null, undefined, they are not valid indices, so you get undefined.
*/