//Array
let arr = [1,2,3,"Aadil","Malik",true,null];
console.log(arr);
console.log(typeof arr);

//Object
let obj = {
    Full_name : "Aadil",
    Age : 19,
    Work : "Student",
};
console.log(obj);

//Functions
let f1 = function() {
    console.log(16+4+"Hello")
}
f1();
//console.log(f1());
console.log(typeof f1);

// Type Conversion

// NULL,Undefined,Boolean to string
let x = null;
console.log( typeof String(x));

let y;
console.log( typeof String(y));

let a = true;
console.log( typeof String(a));

// number,null,undefined to boolean conversion
let c = 100;
console.log(Boolean(c));

let aa = null;
console.log(Boolean(aa));

let aaa;
console.log(typeof  Boolean(aaa));