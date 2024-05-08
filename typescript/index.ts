// Declaration in JS

/**
 * string
 * number
 * boolean
 * object
 * any
 * void
 * unknown
 * Custom Data Types
 */

let a: any = '';
a = 5;

function myFn(): void {
    
}

// Custom Data Types

type LoginInfo = {
    email: string;
    password?: string;
}

const login: LoginInfo = {
    email: '',
    password: ''
}


function loginToAccount(info?: LoginInfo) {
    console.log(`Email is ${info?.email ?? 'a@example.com'} and password is ${info?.password}`);
}

loginToAccount();

const x = {
    b: {
        c: {
            d: {}
        }
    }
}

console.log(x?.b?.c?.d); // undefined


type SomeObject = {
    a: boolean;
}

type NewDataType = SomeObject & LoginInfo;

const o: NewDataType = {
    a: false,
    email: ''
}

// Union types

type MyDataType = number | string | boolean | LoginInfo | SomeObject

const data: MyDataType = {
    a: false
};


type MyLocation = {
    city: string;
    state: string;
}

type MyAddress = {
    street: string;
    zip: string;
}

type MyFullAddress = MyLocation & MyAddress;

const fullAddress: MyFullAddress = {
    city: '',
    state: '',
    street: '',
    zip: ''
}

console.log();