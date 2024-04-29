// OBJECTS IN JS

/**
 * Objects in JS are more lightweight and malleable than object in other languages
 * 
 * Essentially a set of key-value pairs
 * We can change a lot about objects even after their creation
 */

// you can declare an object outright, i.e., you don't need a class to instantiate
let myBook = {
    title: 'Elon Musk',
    author: 'Walter Isaacson',
    numPages: 665
}

// access properties using . notation
console.log(myBook.title);

// change them using . notation
myBook.title = 'ELON MUSK';

console.log(myBook.title);

// can add properties not in the original object
myBook.publisher = 'Simon & Schuster';

// printing out the entire object DOES NOT require a toString() method, unlike in Java
console.log(myBook);

// can also delete a property
delete myBook.publisher;

console.log(myBook);

// objects can be complicated...
let student = {
    name: 'Jairo',
    id: 123456789,
    gpa: 4.0,
    courses: [ 'JavaScript', 'ServiceNow', { name: 'Life', sectionNumber: 42, instructors: [ { instructorName: 'Jon', isQualified: false },
                                                                                { instructorName: 'Joe', isQualified: true } ] } ]
}

// get used to digging through complex objects for data
console.log(student);

console.log(student.id);

console.log(student.courses[1]);

console.log(student.courses[2].sectionNumber);

console.log(student.courses[2].instructors[1].instructorName);

// constructor function (more on this later...)
function Teacher(name, course) {
    this.name = name;
    this.course = course;
}

let teacher1 = new Teacher('Jon', 'JS');

console.log(teacher1);