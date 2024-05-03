// TIMED OPERATIONS IN JS

/**
 * setTimeout sets code to be executed after a certain amount of time
 * 
 * setInterval sets code to be executed at a fixed interval until canceled
 */

// first parameter is a function to execute after the timeout
// second parameter is how many milliseconds to wait before execution
setTimeout(() => {
    console.log('Timeout complete!');
}, 0);

let counter = 0;

// for (let i = 0; i < 1000000000; i++) {
//     counter/=234;
// }
console.log('Sync code executed');

let myInterval = setInterval(() => {
    counter++;
    console.log(`Interval ${counter} complete!`);
}, 1000);

setTimeout(() => {
    clearInterval(myInterval);
}, 5000);