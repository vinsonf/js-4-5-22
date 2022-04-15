/*

Syntax Basics
White Space
Case Sensitivity
Comments
Semicolons

*/


/* 
 1. White Space
    (space, tab, newline, etc.)
 2. Case Sensitivity
    (upper or lower case)
    a. camelCase(normal variable)
    b. PascalCase(constructor)
    c. snake_case(not convention)
    d. kebab-case(not used)

 3. Comments
    (single line, multi line)
    // single line
    /* multi line (/ * /)
    
*/


/*
part of the debugging process
console.log is a function that prints to the console
you can find the console in your browser by right clicking on the page and selecting "inspect"

*/

/*
Variables
    - variables are containers for storing data
    - variables are declared with the (var, let, const) keyword
    - variable have naming rules
        - must begin with a letter, underscore, or dollar sign
        - can contain numbers, but not at the beginning
        - can be combined with underscores and dollar signs
        - they can not have spaces
    - variables are case sensitive
*/

/*
 variable data types
 * primitive data types
    - string
    - number
    - boolean
    - null
    - undefined
    - NaN (not a number)

    - symbol (new in es6) (unique identifier)
    - Infinity (positive or negative infinity)
    - -Infinity
    - bigInt (new in es6) (bigger than 32 bits)

* complex data types( organization of data)
    - object (dictionary)
    - array (ordered list)

*/

/* 
 Arithmetic operators
    + -
    * /
    % (modulus)

Assignment operators
    = (assignment)
    +=
    -=
    *=
    /=
    %=

increment and decrement operators
    ++
    --

    ++ at the end of the line ( returns the value before incrementing)
    -- at the end of the line ( returns the value before decrementing)
    ++ before the line ( returns the value after incrementing)
    -- before the line ( returns the value after decrementing)


*/  

// CHALLENGE 1
// Prompt the user for their first name
// Store their input to a variable
// Reverse your user’s name
// alert the reversed string

// Challenge 2
// Prompt for a number value (provide a default of 10)
// Prompt for a second number value (provide a default of 10)
// Convert the prompted values into integers using parseInt()
// Add the numbers together and alert the user with the result

// challenge 1 answer
// const firstName = prompt('What is your first name?');
// const reversedName = firstName.split('').reverse().join('');
// alert(reversedName);

// challenge 2 answer
// const number1 = prompt('Enter a number', 10);
// const number2 = prompt('Enter a second number', 10);
// const sum = parseInt(number1) + parseInt(number2);
// alert(sum);
const today = new Date();
const date = new Date('1/1/2070');

const milliseconds = 1;
const second = 1000;
const minute = 60 * second;
const hour = 60 * minute;
const day = 24 * hour;
const week = 7 * day;
const month = 30 * day;
const year = 365 * day;



console.log(date);
console.log(date.getFullYear());
console.log(date.getMonth()); // 0-11
console.log(date.getDate()); // 1-31
console.log(date.getDay()); // 0-6
console.log(date.getHours() % 12); // 0-23   (12 hour clock)
console.log(date.getMinutes()); // 0-59
console.log(date.getSeconds()); // 0-59
console.log(date.getMilliseconds()); // 0-999
console.log(date.getTime()); // milliseconds since January 1, 1970
console.log(date / year); // milliseconds


// days of the week
// 0 = sunday (none day)
// 1 = monday (one day)
// 2 = tuesday (two days)
// 3 = wednesday (three days)
// 4 = thursday (four days)
// 5 = friday (five days)
// 6 = saturday (sixture days)



