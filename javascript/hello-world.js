// this is a single-line comment in JavaScript (JS)

/**
 * JS is a browser scripting language
 * runs in the web browser on the client-side
 * 
 * single-threaded language -- only one thing gets processed at a time
 * 
 * JS is loosely-typed (as opposed to strictly typed)
 * 
 * Two ways to run it:
 * 1. click Run in the menu and select the Node.js runtime
 * 2. in the terminal, navigate to the folder holding the file and type node <filename>
 * 
 * Quotes are interchangeable, i.e., '' is the same as ""
 * 
 * semicolons at the ends of statements are OPTIONAL
 * UNLESS the two statements are on the same line
 * 
 * whitespace does not matter!!
 * feel free to structure code visually however is most readable
 * 
 * 
 * 
 */

// this prints whatever's in the parentheses to the console
// console is the terminal for our purposes but will be the browser console in practice
console.log('Test...'); console.log('Test again...')

// functions are fully "hoisted" in JS, meaning you can declare them anywhere and call them anywhere
helloWorld();

// this is a function in JS
// keyword function to start
// you DO NOT declare a return type
// this would normally be a "void" function
function helloWorld() {
    console.log('Hello, World!');
}

helloWorld();

// a function for adding two numbers together
// untyped, though, so we can add other things...
function sum(num1, num2) {

    return num1 + num2;
}

console.log(sum(7, 8));

// even though we wrote our function for numbers, it'll add strings just as well
console.log(sum('One', 'Two'));

// JavaScript has some weirdness surrounding booleans
console.log(sum(true, false));