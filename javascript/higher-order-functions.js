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