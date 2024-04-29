// OVERLOADING IN JS

/**
 * THERE IS NO OVERLOADING IN JS!
 * 
 * regardless of the parameters declared in the function, a second function with the same name
 * will overwrite the first one
 * 
 * we have some tricks we can do to "overload" functions anyway
 */

// this doesn't work the way we expect it to

// function add(x) {
//     console.log(x + x);
// }

// function add(x, y) {
//     console.log(x + y);
// }

// add(4);
// add(4, 5);

// we can assign default values in the parameter list, including basing them on other parameter values
function add(x = 100, y = x, z = 100) {
    console.log(x + y + z);
}

add(5);
add(5, 6);
add(5, 6, 7);
add(5, 6, 7, 8);
// you can skip parameters by feeding in undefined (will use default values in the parameter list)
add(undefined, 6, 7, 8);

// the rest operator -- ... --- collects all the "rest" of the parameters into an array stored in that variable
// can only have ONE rest operator in a parameter list, and it has to go at the end
function addAll(x, ...y) {
    // the array gets created even if we don't feed in any values to it
    console.log(y);

    let ySum = 0;

    // running through the array and adding the values to ySum
    for(let num of y) {
        ySum += num;
    }

    console.log(x + ySum);
}

// I can put in as many numbers as I want, and they all get added together
addAll(10, 20, 30, 40, 50, 60, 70);

addAll(1);