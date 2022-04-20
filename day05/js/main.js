const myVariable = 'Hello World';

// declaration - function name - parameters as many as we need
function myFunctionName(param1, param2, etc) { // code block
    console.log('code block', param1, param2, etc); // execute code block

    // return value
    return 'return value';
}


// function call.
// function name followed by parenthesis
// inside parenthesis we pass arguments
const value = myFunctionName(1, true, 'another parameter');
const value2 = myFunctionName([], {}, 'another parameter');


console.log(value, value2)
// why?
// 1. we can call the function as many times as we want (reuse)
// 2. we can pass arguments to the function (dymanic)
// 3. we can return a value from the function
// 4. we can use it later
// 5. we can name our code blocks

// use cases

// random number always between 0 and 1
// never reache 1
// float (decimal)

// console.log( Math.ceil(Math.random() * 10));

function getRandomInteger(min, max) {
    const range = max - min + 1;
    return Math.floor(Math.random() * range) + min;
}



function sum(one, two) {
    return one + two;
}

function sum2randomNumbers(min, max) {
    return getRandomInteger(min, max) + getRandomInteger(min, max);
}

console.log(sum(5, 10));
function double(value) {
    return value * 2;
}

console.log(double(5));
function multiply(value, multiplier) {
    return value * multiplier;
}

console.log(multiply(5, 20));

console.log(getRandomInteger(147, 1020));

const one = getRandomInteger(5, 9);
const two = getRandomInteger(8, 20);

const combined = sum(one, two);

console.log(combined);





// helper functions


// Work


const h1 = createElement('h1', 'Hello World');
addClass(h1, 'active');

const div = createElement('div', 'This is a div');
const p = createElement('p', 'This is a paragraph', div);
const button = createElement('button', 'Click me', div);
const ul = createElement('ul', '');

listen(button, 'click', () => {
    const li = createElement('li', 'New item', ul);
    li.style.color = 'red';
    toggleClass(h1, 'active');

});
listen(h1, 'click', function () {
    console.log('h1 clicked');
});
text('article', 'Hello World');


