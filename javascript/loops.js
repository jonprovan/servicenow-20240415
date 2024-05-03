// LOOPS IN JS

/**
 * loops work basically the same as in other languages
 * 
 * only real exception is the enhanced for loop
 */

// while
// while a condition is valid, keep executing the code
// if the condition is never valid, it never executes
let counter = 0;

while (counter < 3) {
    console.log(counter);
    counter++;
}

// do-while
// code will execute once, then check the condition
// always runs at least once
counter = 5;

do {
    console.log(counter);
    counter++;
} while (counter < 5)

// standard for
// for executing code a specific number of times
// parameters -- set up a local variable, condition to check before each loop iteration, action to take after each iteration
for (let i = 0; i < 10; i++) {
    console.log(i);
}

counter = 0;

// loops can be pretty open-ended!
for ( ; ; ) {
    console.log(counter++);
    if(counter == 10) break;
}

// enhanced for
let nums = [ 1, 2, 3, 4, 5 ];

for (let num of nums) {
    console.log(num*num);
}

// can't do the above with objects
const object = {
    name: 'Steve',
    age: 55,
    job: 'Baker'
}

// use for-in to enumerate the properties (keys) for an object
for (let prop in object) {
    console.log(prop + ' ' + object[prop]);
}

for (let num in nums) {
    console.log(num + ' ' + nums[num]);
}