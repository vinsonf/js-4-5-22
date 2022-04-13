// Js review (overview)

// 1.      Syntax
    // 1.1.   Whitespace
       // 1.1.1.  (space character, tab character, newline character, carriage return character)
    const           




name          =    

'John'


;

// 1.2.   Comments
    // 1.2.1.  Single line comment( // )
    // 1.2.2.  Multi line comment( /* */ )
    /*
console.log('Hello World');

    */

// case sensitive
// 1.3.   Variables

const myVariable = 1;
const MyVariable = 2;

// types cases js supports
    // 1. camelCaseTypes (normal data variables)
    // 2. PascalCaseTypes (construction variables)
    // 3. UPPER_CASE_TYPES (constants)
    // 4. snake_caseTypes (not common)
    // 5. kebab-caseTypes (not used in js)

// semicolon
// 1.3.1.  Semicolon (;) used like a punctuation mark

// data types primitive
    // 1. string
    // 2. number
    // 3. boolean

// data types complex/compound (organization units)
    // 1. array (collection of data as list) 
        // 1.1.  [] square brackets
    // 2. object (collection of data as key-value pairs)
        // 2.1.  {} curly brackets

const pets = ['cat', 'dog', 'fish', 'cat'];

const person = {
    name: 'John',
    pets: [{
            type: 'cat',
            name: 'Garfield',
            age: 10 + 'years',
        },
        {
            type: 'dog',
            name: 'Odie',
        },
    ]
}

// variable declarations
// let, const, var(deprecated)

// difference between let and const and var
    // 1. let is block scoped
    // 2. const is block scoped
    // 3. var is function scoped
    // 4. let can be declared once and reassigned many times
    // 5. const can be declared once and reassigned not at all
    var myVar = 1;
    var myVar = 2;
    console.log(myVar);


    let myPet = 'cat';
    // let myPet = 'dog'; // error
    myPet = 'dog';

    const myAnimal = 'cat';
    // myAnimal = 'dog'; not allowed
    // console.log(myAnimal)

    // javascript operators
    // 1. assignment operators
        // example:
        // 1.1.  =
        // 1.2.  +=
        // 1.3.  -=
        // 1.4.  *=
        // 1.5.  /=
        // 1.6.  %=
    // 2. arithmetic operators
        // example:
        // 2.1.  +
        // 2.2.  -
        // 2.3.  *
        // 2.4.  /
        // 2.5.  %
        
    // 3. comparison operators
    // 4. logical operators








