//Filter in js 
let arr = [
    {name: "Aadil",age : 30,salary : 5000},
    {name: "Aai",age : 31,salary : 50001},
    {name: "bhal",age : 42,salary : 3000},
]
/* 
let bigPays = arr.filter((pay)=> {
    if(pay.salary >= 5000) {
        console.log(`name : ${pay.name}`)
        return true;
    }
    return false;
})
 */
//console.log(bigPays);

// or 

/* let bigPays = arr.filter( (employee) => {
    return employee.salary >= 5000;
}) 
console.log(bigPays); 

// if you only want to return name 
bigPays.forEach(pay => {
    console.log(`name = ${pay.name}`);
}
)
 */

// we can even destructure inside filter 
 let student = [
    {name: "Aadil",age : 30,marks : 5000},
    {name: "Aai",age : 31,marks: 50001},
    {name: "bhal",age : 42,marks : 3000},
]

let person = student.filter( ({marks}) => {
    return marks > 4999;
}) 
console.log(person);