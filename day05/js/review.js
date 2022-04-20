// variable
// nicknames/labels for data
// data is stored in memory( warehouse )

// when we want to use data
// we need to get it from the warehouse ( memory ) using a label(nickname )

// variables can have a do not replace label (constant)
const myName = 'John'; // constant

// variables can have a do replace label (variable)
let myAge = 26; // can be changed

// data types

//primitive data types

const dataTypesList = [
    'string', 'number', 'boolean', // string, number, boolean
    
    'null', 'undefined', // no value
];


// object data types

const dataTypesObject = {
    string: 'string',
    number: 27,
    boolean: true,
    null: null,
    undefined: undefined,
    array: [1,2,3,4,5],
    object: {
        name: 'John',
    }
}

const bodyTag = document.querySelector('body');

// object
bodyTag.style.backgroundColor = 'pink';

// operator
// operators allow us to do work on data

// arithmetic operators
// +, -, *, /, %

let score = 0;
console.log(score + 5); // do work on data
console.log(score + 2);
console.log(score);

console.log(score += 5);
console.log(score += 2); // addition with assignment
console.log(score);

console.log(score % 3); // modulus (modulo) operator

// const myAlert = alert('Hello World');
// const myConfirm = confirm('Are you sure?');
// const myPrompt = prompt('What is your name?');

// console.log(myAlert, myConfirm, myPrompt);

console.log(Math['random']());
console.log(Date());