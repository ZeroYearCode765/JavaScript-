

function hi(callback) {
    console.log('how are you');
    callback();
}

function fine() {
    console.log("i am fine");
    // or "return i am fine";
}
/* 
hi();
console.log(fine()); */

// Call Back Function
// 1st by name of function or by variable name e.g. const fine = function() {console.log("i am fine")};
hi(fine);
/* O/P
how are you
i am fine */

// 2nd defining whole function inside another function call
hi(function notfine() {
    console.log("I am not fine")
});
/* O/P
how are you
I am not fine */

//3rd method by using arrow function
hi(() => {
    console.log("i am never fine");
})
/* O/P 
how are you
i am never fine */