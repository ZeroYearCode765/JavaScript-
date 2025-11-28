//  JS is a single threaded synchronous language:

// JS bheviour: Async

console.log("10");

setTimeout(() => {
    console.log("20");
}, 5000);


console.log("30");

// single threaded: One task will be executed at a time:


console.log("10");

const timer = Date.now();
// timer Older time
while(Date.now()-timer<2000){
    // Wait for 2 second
} // because while is part of js it ill be exected first for 2 seconds then e will goto next tash whereas above setTimeout() is not part of js therefore it will be executed asynchronusly.

console.log('20');


console.log("30");