// BOOLEANS IN JS

/**
 * talking here about true/false and the various ways JS addresses this concept
 * 
 * an actual boolean is a type with two values -- true and false
 * 
 * == checks value only -- != for not equals
 * === checks type -- !== for not equals -- this is called the Strict Equality Operator 
 * 
 * In JS, we have the concept of truthy and falsy
 * 
 * VALUES THAT ARE FALSY
 * null
 * undefined
 * NaN
 * 0
 * -0
 * 0.0
 * 0n
 * '' or ""
 * false
 * !true or !anything-true
 * 
 * VALUES THAT ARE TRUTHY
 * Anything that's not falsy
 * 
 * Includes [] and {}
 * 'false', 'null', !false, -100, etc.
 * 
 */

let myBoolean = true;

// ! will reverse its value
console.log(!myBoolean);

console.log(0 < 5);
console.log(!(0 < 5));

// can use AND && and OR || to create complex questions/statements
// order of processing can be confusing, so make sure you use parentheses to set up order properly
console.log((5 >= 4 || 45 % 2 !== 0) && true == !true);

// some oddities, though...
console.log(2 == 2);
console.log(2 == '2');
console.log(2 === '2');

// you can coerce values manually if you need to
let coercedNumber = Number('123');
let coercedString = String(123);

console.log(typeof coercedNumber);
console.log(typeof coercedString);

// standard if/else questions apply in JS

let classStatus = 'Pumped';

if (classStatus == 'Pumped') {
    console.log('Yep, they\'re pumped.');
} else {
    console.log('Nope, not pumped.');
}

// shorthand way via ternary operator
// same question as above
// SYNTAX -- (boolean question) ? <what to do if it's true> : <what to do if it's false>
(classStatus == 'Pumped') ? console.log('Yep, they\'re pumped.') : console.log('Nope, not pumped.');

console.log(typeof NaN);

// using truthy/falsy can shorthand many operations in JS
let numberOfStudents = 10;

console.log(numberOfStudents ? 'Class is on!' : 'Class is canceled...');

// returns the first statment if it's truthy, otherwise the second
let newNumberOfStudents = numberOfStudents || 100;

console.log(newNumberOfStudents);

// we cannot return a false if it's on the left here
let isRaining = false;

let rainStatus = isRaining || 'Not Good';

console.log(rainStatus);

// this is the Nullish Coalescing Operator
// returns the first statement if it's not null or undefined, otherwise the second
rainStatus = isRaining ?? 'Not Good';

console.log(rainStatus);

// an example
function weatherCheck(inchesOfRain) {
    let amount = Number(inchesOfRain) || 0;

    // using variable values directly in a string
    return (amount > 0) ? `We had ${amount} inches of rain today.` : 'No rain today!';
}

console.log(weatherCheck('5'));