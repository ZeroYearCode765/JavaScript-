//Making Countdown Timer for Mom's Birthday(10-June-2025)
const curDate = new Date();
const birthDate = new Date(2025,5,10);
const diff = birthDate - curDate;
console.log(diff);

// Days left
const days = Math.floor(diff/(1000*60*60*24)); // 1000 for ms to second,60 for sec to minutes,60 for minutes to hours, and 24 for hours to days

// hours left
const hours = Math.floor(diff/(1000*60*60)%24); //  1000 for ms to second,60 for sec to minutes,60 for minutes to hours, and % 24 because we already found the number of days.

// minutes left
const minutes = Math.floor(diff/(1000*60)%60); //  1000 for ms to second,60 for sec to minutes, and % 60 because we already found hours remaining 

// seconds left
const seconds = Math.floor(diff/(1000)%60); // 1000 for ms to sec,mod 60 because we already found minutes.

//Printing
console.log(`The time till Ammi's BirthDay is Days: ${days}, Hours: ${hours}, Minutes:${minutes} and Seconds: ${seconds}`);