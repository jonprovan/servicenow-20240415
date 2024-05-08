"use strict";
// Declaration in JS
var _a, _b;
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
let a = '';
a = 5;
function myFn() {
}
const login = {
    email: '',
    password: ''
};
function loginToAccount(info) {
    var _a;
    console.log(`Email is ${(_a = info === null || info === void 0 ? void 0 : info.email) !== null && _a !== void 0 ? _a : 'a@example.com'} and password is ${info === null || info === void 0 ? void 0 : info.password}`);
}
loginToAccount();
const x = {
    b: {
        c: {
            d: {}
        }
    }
};
console.log((_b = (_a = x === null || x === void 0 ? void 0 : x.b) === null || _a === void 0 ? void 0 : _a.c) === null || _b === void 0 ? void 0 : _b.d); // undefined
const o = {
    a: false,
    email: ''
};
const data = {
    a: false
};
const fullAddress = {
    city: '',
    state: '',
    street: '',
    zip: ''
};
console.log();
