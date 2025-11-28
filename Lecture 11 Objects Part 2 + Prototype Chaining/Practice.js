
//  Nested Objects in JS
const obj = {
    Name : "Aadil",
    Age : 19,
    Address : {
        city : "Gondia",
        pincode : 441614,
        state : "Maharashtra"
    }
};

console.log(obj.Address.pincode);

//Delete
delete obj.Address.pincode;

console.log(obj.Address.pincode);

//Add 
obj.Address.pincode = 441617;

console.log(obj.Address.pincode);

//Modify
obj.Address.city = "Nagpur";

console.log(obj.Address.city);

// Creating clone of above Object
let user = Object.seal(structuredClone(obj)); // sealing or freezing object
console.log(user);

//Modifying in cloned objct to see if changes are made in actual object
user.Name = "Bhavesh";

console.log(obj);
console.log(user);

// Destructuring using rest operator
const  obj1 = {
    Name : "Aadil",
    Age : 19,
    Address : {
        city : "Gondia",
        pincode : 441614,
        state : "Maharashtra"
    }
};

const {Name,Age: myAge,...obj2} = obj1; // ...obj2 is rest operator.
console.log(Name,myAge);
console.log("Hi");
console.log(obj2);  // calling the object created using rest operator.