// CREATING CONSISTENT OBJECTS IN JS
// VIA CONSTRUCTOR FUNCTIONS AND CLASS SYNTAX

/**
 * classes as we think of them don't really exist in JS
 * ultimately, these things are functions under the hood
 * not always so intuitive to think of them that way
 */

// a constructor function
// a function that returns a new instance of an "object"
// each "object" is distinct from the other

function Book(title, author, pageCount, publisher) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.publisher = publisher;
}

let book1 = new Book('Jurassic Park', 'Michael Crichton', 350, 'Random House');
let book2 = new Book('The Laundry Files', 'Charles Stross', 368, 'Tor');

console.log(book1);
console.log(book2);

// changes to one object do not change the other instance
book1.pageCount = 400;

console.log(book1);
console.log(book2);

// can also just create a class
class Reader {

    // static properties that apply to the whole class
    static readerCount = 0;

    // properties
    // add # to the beginning to make them private
    #name;
    age;
    favoriteGenre;
    library = [ new Book('Goodnight Moon', 'Margaret Wise', 24, 'Kids Luv Books') ];

    // constructor -- initializes the object
    constructor(name, age, favoriteGenre, library) {
        this.#name = name;
        this.age = age;
        this.favoriteGenre = favoriteGenre;
        // for (let book of library) {
        //     this.library.push(book);
        // }

        for (let i = 0; i < library.length; i++) {
            this.library.push(library[i]);
        }

        Reader.readerCount++;
    }

    // getter and setter for the private name property
    get getName() {
        return this.#name;
    }

    set setName(name) {
        if (typeof name === 'string') {
            this.#name = name;
        }
    }

    addBook(book) {
        if (book.title && book.author && book.pageCount && book.publisher) {
            this.library.push(book);
        }
    }

}

let reader1 = new Reader('Jairo', 63, 'Fiction', [ book1, book2 ]);

console.log(reader1);

reader1.addBook(book2);

console.log(reader1);

console.log(reader1.name);
console.log(reader1.getName);

// can't do this
// reader1.#name = 'Test';

reader1.setName = 123;
console.log(reader1.getName);

let reader2 = new Reader('Jairo', 63, 'Fiction', [ book1, book2 ]);
let reader3 = new Reader('Jairo', 63, 'Fiction', [ book1, book2 ]);

console.log(Reader.readerCount);