// VARIABLES AND SCOPE IN JS

/**
 * three main keywords we use to declare variables in JavaScript -- var, let, and const
 * 
 * var = globally scoped variable
 * we have access to it everywhere
 * we even have access to its declaration, regardless of where the declaration occurs
 * -- BUT NOT ITS VALUE!
 * 
 * let = block scoped, ceases to exist outside of its block
 * like most other variable declarations in other programs
 * 
 * const = just like let, but you can't change the value after initialization
 * -- you CAN change the properties of a const object OR the index values of a const array
 * 
 */

// even though this occurs before the declaration
// the declaration for var is "hoisted" but NOT the initialization of a value
console.log(myVar);
console.log(myOtherVar);

var myVar = 5;

// can redeclare, which is a little odd
var myVar = 6;

console.log(myVar);

if (true) {
    if (true) {
        if (true) {
            var myOtherVar = 10;
        }
    }
}

console.log(myOtherVar);

// can't do this; it doesn't exist yet, unlike var
// console.log(myLet);

let myLet = 'abc';

console.log(myLet);

if (true) {
    if (true) {
        if (true) {
            let myOtherLet = 'xyz';
            console.log(myOtherLet);
        }
    }
}

// can't do this, either, because myOtherLet no longer exists
// console.log(myOtherLet);

// can have variables with the same name at different scopes
let x = 0;
console.log(x);

if (true) {
    let x = 1;
    console.log(x);
    if (true) {
        console.log(x);
    }
}

// uses the original, pre-block value
console.log(x);

// const declares a constant
const y = 10;
console.log(y);

// can't do this, because y is a const
// y = 11;

// you can change array values within a const array
const myArray = [ 1, 2, 3, 4, 5 ];

console.log(myArray);

myArray[0] = 11;

console.log(myArray);

// can't do this
// myArray = [];

// you can change properties within a const object
const myObject = { name: 'Frank', food: 'Beans' };

// can't do this
// myObject = {};

console.log(myObject);

myObject.food = 'enfurter';

console.log(myObject);


// parameters are also block-scoped and don't exist after the block is complete
// works almost like a "let" in the parameter list
function sum(xx, yy) {
    console.log(xx + yy);
}

sum(3, 4);
console.log(xx);