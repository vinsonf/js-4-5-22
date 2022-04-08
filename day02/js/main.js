// Data Types: Primitive

// Boolean (true/false)
// No
// Yes

// Number (integer/float)
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9

// String (text)
// 'Name'
// 'a'
// 'b'
// 'c'
// 'green'

// Data Types: Complex (Organized)
// Array
// Object

// favoriteFoods = ['pizza', 'sushi', 'burgers']; (ordered organized list)
// person = { name: 'John', age: 30, isPresent: true }; (unordered organized list)


// variables (nicknames) we put in the memory
// myFavoriteNumber = 27;
// myFavoriteFood = 'pizza';
// myFavoriteBoolean = true;

// myMiddleName = undefined;


// console.log(myFavoriteNumber, myFavoriteFood, myFavoriteBoolean);

// // array (indexed list)
// aFewOfMyFavoriteThings = [myFavoriteNumber, myFavoriteFood, myFavoriteBoolean, true];
// console.log(aFewOfMyFavoriteThings);

// // object (key, value pairs)
// myFavoriteThings = {
//     myFavoriteNumber: 27,
//     myFavoriteFood: 'pizza',
//     myFavoriteBoolean: true
// }

// person = {
//     isSelected: null,
//     name: 'Vinson',
//     movie: 'Back to the Future',
//     favorite: 'Carne Asada with everything',
// }

// console.log(person.isPresent);

// a = 'hello';
// b = 9;
// c = true;

// strings
// quotes (single or double or backticks) ' " `

// numbers
// integers (whole numbers)
// floats (decimals)

// booleans
// true false
// const isLoggedIn = false;

// if (isLoggedIn) {
//     console.log('send the user to the dashboard');
// } else {
//     console.log('send the user to the login page');
// }


// types of variables
// var
// let
// const

// var (default)
var myName = 'Vinson';
console.log(myName);

// let
let myCity = 'Fresno';

// const (cannot be reassigned)
const myState = 'CA';


// variables can be declared
// variables can be assigned
// variables can be reassigned
// variables can be redeclared

// var type can (frown face, meh)
// 1. be declared
// 2. be assigned
// 3. be reassigned
// 4. be redeclared


// let type can
// 1. be declared
// 2. be assigned
// 3. be reassigned

// const type can
// 1. be declared
// 2. be assigned


var myName = 'Joe';
console.log(myName);

myCity = 'New York';
myCity = 'Fresno';
// myState = 'CA'; // error (cannot be reassigned)


// operators

// arithmetic
// + - * / %

let score = 5;

// console.log( score + 10 );
// console.log( score - 10 );
// console.log( score * 10 );
// console.log( score / 10 );
// console.log( score % 10 );

// console.log(13 % 4);

// console.log(score + 5);

score += 5;
score += 5;
score += 5;
score -= 10;
score *= 3;
score /= 2;
score %= 2;



console.log(score);

document.addEventListener('click', () => {
    score += 1;
    console.log(score);
});


// add strings together

console.log('hello ' + 'world');

console.log('Supercalifragilisticexpialidocious'.length);


let mySecretDataType = ['pizza', 'sushi', 'burgers'];

console.log(mySecretDataType);

