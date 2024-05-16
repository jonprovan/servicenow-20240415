// Promise is the eventual success or failure of an operation

// Functions used for determining the output of a promise
// Resolve - GOOD
// Reject - BAD

// Promise states
// Pending - Operation is still ongoing
// Fulfilled - Promise was fullfilled and successful
// Rejected - Promise was rejected and unsuccessful

// 200 -> Resolved
// 404 -> Rejected
// 307 -> Resolved

const x = 11;

const promise = new Promise((resolve, reject) => {
    if (x > 10) {
        resolve({name: 'Bob'});
    } else {
        reject('X is less than 10');
    }
});


// console.log(promise);

// Handling Promises

// .then() handles the fulfilled promises
// .catch() handles the rejected promises

function a(value) {
    // Work with the promise value
}

promise
    .then(val => console.log(val))
    .catch(err => console.log(err))
    .finally(() => {
        console.log('Promise finished')
    });

console.log('File Finished');

// File Finished -> {bob} -> Promise Finished

// Creates a promise and instantly resolves with 1 being the value
Promise.resolve(1)
    .then(val => { return 5 }) // What is returned is automatically wrapped into a resolved promise
    .then(val => { throw 'Error!!!!' }) // What is thrown is auto wrapped into a rejected promise
    .catch(err => 50)
    .then(val => console.log(`The final value is ${val}`));

// async / await

const groceries = ['Apples', 'Bananas', 'Grapes'];

const bananaSuccess = 'Banana Found!'
const bananaFailure = 'No banana found'

let errMsg;

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    groceries.forEach(grocery => {
        if (grocery === 'Banana') {
            resolve(bananaSuccess)
        }
        errMsg = 'FFDSF'
        reject(bananaFailure);
    });
  }, 1000);
});
const promise1 = new Promise((resolve, reject) => {
    setTimeout(reject, 1000, 'ERROR>FSAF'); // 1 sec
  });

Promise.race([promise1, promise3])
    .then((values) => {
        console.log(values);
    })
    .catch(err => console.log(err));
// Expected output: Array [3, 42, "foo"]