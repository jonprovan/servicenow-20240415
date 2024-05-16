// async is applied to functions

function a() {
    return 5;
}

// Async functions work like .then and .catch where anything returned is wrapped in a fulfilled promise
// anything thrown will be wrapped in a rejected promise

let x = 8;

async function fn() {
    return 5;
}

async function b() {
    if (x > 10) {
        return await fn();
    }
    throw 'X is less than 10'
}

// Await unpacks a promise
// in general, await MUST be used inside an async function

const c = async () => {
    // Calling other async functions
    try {
        const resolvedValue = await b();
        // this all runs AFTER b returns a resolved/fulfilled promise
        console.log(resolvedValue);
    } catch(err) {
        // This runs if b rejected the promise
        console.log(err);
    } finally {
        // do the logic that needs to be regardless

        console.log('Run no matter what')
    }
}

c();

// (async () => await b())();

// fetch

async function parseData(response) {
    try {
        const data = await response.json(); // convert the response body to json
        return data;
    } catch(err) {
        // Do something with failed JSON parse
    }
}

async function getRandomCocktail() {
    try {
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
        const data = await parseData(response);
        console.log(data.drinks[0].strDrink);
    } catch(err) {
        // response never came
    }
    
}

getRandomCocktail();