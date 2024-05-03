// HIGHER-ORDER FUNCTIONS IN JS

/**
 * in JS, we can store a function as a variable
 * 
 * we can also input a function as a parameter
 * 
 * we can also-also return a function from a function
 * 
 * these returned functions CAN include information from the environment of the function that created them
 * this is called a closure and is pretty popular in the JS world
 */

// storing a function as a variable

// arrow-function syntax
// if you have one parameter, you don't need the parentheses but can use them
// if you have zero or more than one parameter, you must use them
// if you have only one statement in the body, you don't need the curly braces but can use them
// if you have more than one statement in the body, you must use them
const func1 = num => console.log(num);
const func2 = (num1, num2) => { ++num1; ++num2; console.log(num1 + num2); };
const func3 = () => { console.log('No params'); };

func1(5);
func2(3, 9);
func3();

// returning a function from a function
function funcGen() {
    return () => console.log('Returned function!');
}

let func4 = funcGen();

func4();

// closures

function multiplyByFive(num) {
    return num * 5;
}

function mutiplyByOtherParam(num1, num2) {
    return num1 * num2;
}


function multByNum(num1) {

    // this is a closure
    // a function with access to context from its enclosing function
    return (num2) => { return num2 * num1; };
}

const multBy5 = multByNum(5);

console.log(multBy5(10));

const multBy7 = multByNum(7);

console.log(multBy7(11));

// dealing with functions that take other functions as parameters
// most illustrative when dealing with array methods in JS

/**
 * .forEach
 * .map
 * .filter
 * .reduce
 */

let nums = [ 1, 2, 3, 4, 5 ];

// forEach -- takes each element of the array and does something with it
// it does NOT change the element in the array itself
// it does NOT pass anything along to another step (forEach itself does not return anything)
// it requires a consumer function as a parameter -- does not return anything

let test = nums.forEach(num => {
    console.log(num * num);
});

// no return to the variable
console.log(test);


// map -- takes each element, does something with it, adds it to an array it'll pass on
// it requires a supplier function -- returns a value of any kind

let test2 = nums.map(num => {
    return num + num;
});

console.log(test2);

// since .map returns an array, you can chain it with .forEach and others
nums.map(num => {
    return num + num;
    })
    .forEach(num => {
        console.log(num * num);
    });


// filter -- takes each element, checks if it meets a certain criteria, and, if it does, includes it in the output array
// requires a predicate function -- places an element in the output array if it's true

let test3 = nums.filter(num => {
    return num % 2 === 0;
});

console.log(test3);

nums.map(num => {
    return num * num;
}).filter(num => {
    return num % 2 !== 0;
}).forEach(num => {
    console.log(num);
});


// reduce -- reduce our entire array down to a single value
// requires a special function that takes two parameters instead of one

let test4 = nums.reduce((num1, num2) => {
    return num1 + num2;
}, 100);

console.log(test4);

let nums2 = [ -12, -30, -345, -2.3, -146.78, -7 ];

// don't need the starting value if it would make the results erroneous
let test5 = nums2.reduce((num1, num2) => {
    return num1 < num2 ? num1 : num2;
});

console.log(test5);

// doing reduce with object properties
class Movie {
    title;
    constructor(title) {
        this.title = title;
    }
}

let movies = [ new Movie('Jurassic Park'), 
               new Movie('The Giver'), 
               new Movie('Scott Pilgrim vs. The World'),
               new Movie('Your Name'),
               new Movie('E.T.') ];

console.log(movies.reduce((movie1, movie2) => {
    return movie1.title.length > movie2.title.length ? movie1 : movie2;
}).title);