// console.log('defer')

/*
document.body.innerHTML = 'this is new text';

*/

const myConstant = 'this is a constant variable'; // it can't be changed

let myLettable = 'this is a let variable'; // it can be changed


const dataTypes = {
    primitives: {
        string: 'this is a string',
        number: 10,
        boolean: true,
    },
    complex: {
        array: [1, 2, 3, 4, 5],
        object: {}
    },
    otherPrimitives: {
        undefined: undefined,
        null: null,
    },
    falsey: {
        0: 0, // is an answer
        '': '', 
        false: false,
        NaN: NaN,
        undefined: undefined,
        null: null,
    },
    truthey: {
        '*': 'everything else'
    }

}

const strings = {
    singleQoutes: 'this is a single qoutes',
    doubleQoutes: "this is a double qoutes",
    template: `this is a template string`,
}

const firstName = 'Joe';
const age = 30;

const templateStrings = `${firstName} Is ${age + 1} years old`;


let score = 2;





// const myAlert = alert('this is an alert');
// const myConfirm = confirm('Are you sure?');
// const myPrompt = prompt('What is your name?');

// console.log(myAlert, myConfirm, myPrompt);



const answers = ['yes', 'no', 'maybe', 'idk', 'test'];
const answer = answers[ Math.floor(Math.random() * answers.length) ]


const today = new Date('3/13/2020');

today.setMonth(today.getMonth() + 14)




if (answer === 'yes') {
    document.body.style.backgroundColor = 'green';
} else if (answer === 'no') {
    document.body.style.backgroundColor = 'red';
} else if (answer === 'maybe'){
    document.body.style.backgroundColor = 'yellow';
} else {
    document.body.style.backgroundColor = 'blue';
}

switch(answer) {
    case 'yes':
        document.body.innerHTML = 'yes';
        break;
    case 'no':
        document.body.innerHTML = 'no';
        break;
    case 'maybe':
        document.body.innerHTML = 'maybe';
        break;
    default:
        document.body.innerHTML = 'default';
}


function getDate(dateString) { // code block
    const date = new Date(dateString);
    return date;
}

console.log(getDate('1/27/2020'));

function createElement(type, text = '', parent = document.body) {
    const element =  document.createElement(type);
    element.innerHTML = text;
    parent.appendChild(element);
    return element;
}

console.log(createElement('h1', 'Hello World'));
const ul = createElement('ul');

// createElement('li', 'this is a li', ul);
const button = createElement('button', 'Click me');

ul.innerHTML = '<li>this is a li</li> <li>this is another li</li>';
ul.innerHTML += '<li>this is a different li</li> ';

// scope - where a variable is available

const myName = 'Joe';


const user = {
    myName: 'Jim',
    sayHello: sayHello
}

const user2  = {
    myName: 'Larry',
    sayHello: sayHello
}
user.sayHello
user2.sayHello();

function sayHello() {
    console.log(this.myName);
    return 'Curly'
}






