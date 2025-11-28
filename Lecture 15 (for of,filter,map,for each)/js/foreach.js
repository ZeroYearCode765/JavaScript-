let arr = [1,2,3,4,5,"Aadil"];

arr.forEach(function(value,index,array) {
    console.log(`Index : ${index},Value : ${value},Array : ${array[index] * 2} `);
})

// using arrow function
arr.forEach((value,index,array) => console.log(`Index : ${index},Value : ${value},Array : ${array[index] = value * 2} `) );

console.log(arr); //the originalarray has been modified