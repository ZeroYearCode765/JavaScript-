

const now = new Date();
console.log(now);

const now2 = new Date("2005-11-21");
console.log(now2);


// new Date(year, month, day, hours, minutes, seconds, milliseconds);
const now3 = new Date(2005,10,21,20,0,0);
console.log(now3);
console.log(now3.toString());
console.log(now3.toLocaleString());

//Setting Date Components
const date = new Date();
date.setFullYear(2005);
date.setMonth(10);
date.setDate(21); // Set the day of the month
date.setHours(10); // Set the hour
date.setMinutes(45); // Set the minutes
date.setSeconds(30); // Set the seconds
console.log(date.toString()); // Modified dat

// Date and Time Components
const date2 = new Date();
console.log(date2.getDay());

// Date Calculations
 const date1 = new Date("2024-11-01");
 const date3 = new Date(2024,21,11);
 const difference = date3 - date1; // Difference in 
 //milliseconds
 console.log(difference);

date1.setDate(date1.getDate() + 5);
console.log(date1.getDate());
