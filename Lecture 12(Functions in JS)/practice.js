// Practice all three types of making function

// do some simple programs
let arr = [1, 2, 3, 4, 5];

const arrDestructure = ([, , c, d,...rest]) => {
    console.log(c, d);// will print 3 4
    console.log(rest); // 5
    return ;
};

console.log(arrDestructure(arr)); // this will output: 3 4 [5] undefined because we are not returning anything in function.
