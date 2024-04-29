// ARRAYS IN JS

/**
 * arrays have a malleable length in JS
 * they can hold any combination of types
 * they are accessed via index
 * 
 */

let array1 = [ 0, 1, 2, 3, 4, 2 ];

console.log(array1);

// accessing via index
array1[0] = 10;
console.log(array1[4]);

console.log(array1);

array1[0] = 0;

console.log(array1);

// we have several LinkedList-style methods we can use to alter an array

// .push adds something to the end
array1.push(5);

console.log(array1);

// .pop takes off the last element
let poppedElement = array1.pop();

console.log(poppedElement);

console.log(array1);

// .unshift adds something to the beginning
array1.unshift(-1);

console.log(array1);

// .shift removes something from the beginning
let shiftedElement = array1.shift();

console.log(shiftedElement);

console.log(array1);

// search for the index at which something appears in the array
console.log(array1.indexOf(2));

// pointing a new variable to an array DOES NOT COPY the array
// it points to the same array in memory

let array2 = [ 7, 8, 9 ];
let array3 = array2;

array2[2] = 10;

console.log(array2);
console.log(array3);

array2[2] = 9;

// ... here is not the rest operator but instead the spread operator
// it takes the values from an array and spreads them out into a new one
// the new array and the original array are no longer linked
array3 = [ ...array2 ];

array2[2] = 10;

console.log(array2);
console.log(array3);

// .slice makes a copy of a portion of an array
// syntax = .slice(index to start at (inclusive), index to end at (exclusive))

let array4 = ['a', 'b', 'c', 'd', 'e'];

console.log(array4);

console.log(array4.slice(1, 4));

let array4Slice = array4.slice(1, 4);
array4[2] = 'C';

console.log(array4);
console.log(array4Slice);

// .splice can cut out AND/OR insert elements at a spot in an array
// syntax = .splice(insert index, how many to cut out, things to put in (can be multiple parameters))

array4[2] = 'c';
console.log(array4);

// inserting only
array4.splice(3, 0, 'x', 'y', 'z');
console.log(array4);

// cutting only
array4.splice(3, 3);
console.log(array4);

// doing both
let temp = array4.splice(1, 2, 'x', 'y');
console.log(array4);
console.log(temp);

array4 = ['a', 'b', 'c', 'd', 'e'];

// you can combine these to move elements from one spot to another within an array
array4.splice(3, 0, ...array4.splice(0, 1));
console.log(array4);