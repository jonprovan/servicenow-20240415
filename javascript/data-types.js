// DATA TYPES IN JS

/**
 * PRIMITIVES
 * 
 * In other languages, we have many data types for numbers
 * byte, short, int, long
 * float, double
 * 
 * In JS, we just have one main one and another on the side
 * 
 * number is the main one we'll use -- 0, -23, 123456789 -- up to 2^53 in value
 * the other is BigInt -- 0n, -23n, 123456789n -- no limit to the value you can store
 * 
 * for strings, there's no "char", only string
 * again, quote types don't matter -- 'a', "Hello", '12345', "907+First-123"
 * 
 * we have boolean as well -- true, false (no quotes)
 * 
 * null -- technically another type (Object)
 * 
 * undefined -- we've declared a variable but haven't yet assigned a value
 * 
 * Symbol -- creates an object in memory that we can retrieve with a key
 * 
 * 
 * NON-PRIMITIVES
 * 
 * Arrays -- a defined list of elements, not fixed in size in JS, can contain any type or any combination of types
 *      -- [ 1, 2, 3, 4, 5 ] -- [ 1, 0n, 'abc', [1, 2, 3], { name: 'Joe' } ]
 *      -- can contain arrays, other objects, whatever!
 *      -- syntax = [ <element0>, <element1>, <element2> ]
 *      -- indexed starting at 0
 * 
 * Objects -- loose in JS, can add/delete properties at will, you can have properties that are functions
 * 
 *      {
 *          name: 'Joe',
 *          age: 27,
 *          favoriteFoods: [ 'Ham', 'Ham-flavored bread', 'Ham mayo' ]
 *          speak: () => console.log('Gimme the ham!!')
 *      }
 * 
 */

// this value is undefined
let test;

console.log(typeof 123);

console.log(typeof 123n);

console.log(typeof 'a');

console.log(typeof true);

console.log(typeof null);

console.log(typeof undefined);
console.log(test);

console.log(typeof Symbol('key'));

console.log(typeof [1, 2, 3]);
console.log(typeof { name: 'Joe'});
