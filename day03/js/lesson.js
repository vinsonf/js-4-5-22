function greeting(name, age) {
    console.log('Hello');
    console.log(name, age);
}

// function is a block of code that can be executed when called

// call a function by using the function name followed by parenthesis: greeting()

// function parameters are the values that are passed to the function when it is called: greeting('John', 30)

// method is a function that is stored in an object
// console.log is a method

const myString = 'This is my string';
let answer = myString.toUpperCase();

answer = myString.substring(4, 10);
answer = myString.substring(-4, 10);
answer = myString.slice(-2);
answer = myString.slice(0);
answer = myString[0];
answer = myString.indexOf('is');
answer = myString.lastIndexOf('is');
answer = myString.includes('is');
answer = myString.indexOf('magenta');
answer = myString.endsWith('?');
answer = myString.startsWith('this');
answer = myString.repeat(3);
answer = myString.replaceAll('is', 'was');
answer = myString.lastIndexOf('is');
// console.log( myString.split(' '));


// pop up methods
// alert('Hello');
// confirm('Are you sure?');
// prompt('What is your name?');

// // alert('hello') //returns undefined
// answer = confirm('are you sure?') //returns true or false
// answer = prompt('what is your name?') //returns string
// console.log(answer);

// console.log(Math.PI)
// console.log(Math.round(Math.PI))
answer = Math.round(Math.PI);
answer = Math.ceil(Math.PI);
answer = Math.floor(Math.PI);
answer = Math.sqrt(Math.PI);
answer = Math.abs(-7);
answer = Math.pow(2, 3);
answer = Math.min(100, 20, 3, 4, 5);
answer = Math.max(100, 20, 3000, 4, 5);
answer = Math.random() * 5;
// answer = Math.floor(answer);
answer = Math.ceil(answer);
console.log(answer);


// date methods

let myDate = new Date();


// console.log(myDate.getHours() % 12 + ':' + myDate.getMinutes() + ':' + myDate.getSeconds().toString().padStart(2, '0'));

myDate.getDate();
myDate.setDate(myDate.getDate() - 2000);

console.log('time: ' + myDate.getHours() % 12 + ':' + myDate.getMinutes() + ':' + myDate.getSeconds());

console.log(myDate.getMonth() + 1, myDate.getDate(), myDate.getFullYear());


