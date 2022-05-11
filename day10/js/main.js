// C.R.U.D // html with js



let items = [];

if (readLS()) {
    console.log(readLS(), 'exists');
    items = readLS().split(',');
    console.log(items, typeof items, Array.isArray(items))

}

function createElement(type) {
    const element = document.createElement(type);
    document.body.append(element);
}

function readElement(selector) {
    const element = document.querySelector(selector);
    return element;
}

function updateElement(selector, html) {
    const element = readElement(selector);
    element.innerHTML =  html;
}

function deleteElement(selector) {
    const element = readElement(selector);
    element.remove();
}

createElement('h1');
const myElement = readElement('h1');
updateElement('h1', 'this is an updated h1');
deleteElement('h1');

createElement('h1');
updateElement('h1', 'Todo List');

createElement('input');
createClass('input', 'form-control');


createElement('button');
createClass('button', 'btn');
createClass('button', 'btn-primary');
updateElement('button', 'Add');


createElement('button');
createClass('button:last-child', 'btn');
createClass('button:last-child', 'btn-danger');
updateElement('button:last-child', 'Reset');
createClass('button', 'm-2');

readElement('button:last-child').addEventListener('click', () => {
    updateLS('todos', []);
})



readElement('button').addEventListener('click', () => {
    console.log('you clicked the button', readInputText() );

    items.push(readInputText());
    console.log(items)
    updateLS(items);

    createListItem();
    console.log(getListItems());
    

});


createElement('ul');

createClass('body', 'basic-padding');


function createInputText(text) {
    readElement('input').value = text;
}

function readInputText(){
    return readElement('input').value;
}

function updateInputText(text) {
    readElement('input').value = text;
}

function deleteInputText() {
    readElement('input').value = '';
}


createInputText('Good Day');
const textValue = readInputText();
updateInputText('Good Night');
deleteInputText();


console.log(textValue);

createInputText('this is text');

const myText = readInputText();

updateInputText('this is updated text');
console.log(myText);



function createClass(selector, className) {
    const element = readElement(selector);
    element.classList.add(className);
}

function readClass(selector) {
    const element = readElement(selector);
    return element.classList;
}

function updateClass(selector, className) {
    const element = readElement(selector);
    element.classList.add(className);
}

function deleteClass(selector, className) {
    const element = readElement(selector);
    element.classList.remove(className);
}

createClass('h1', 'title');
createClass('h1', 'green');
updateClass('h1', 'center');
deleteClass('h1', 'green');

console.log(readClass('h1'));



function createListItem() {
    createElement('li');
    const text = readInputText();
    updateElement('li:last-child', text);
    createClass('li:last-child', 'list-group-item');
    deleteInputText();
    const element = readElement('li:last-child');
    element.addEventListener('click', () => {
        element.classList.add('done')
    });
}

function getListItems() {
    return document.querySelectorAll('li');
}



function createLS(items) {
    localStorage.setItem('todos', items);
}
function readLS() {
    return localStorage.getItem('todos');
}

function updateLS(items) {
    localStorage.setItem('todos', items);
}
function deleteLS() {
    localStorage.removeItem('todos');
}


items.forEach( item => {
    updateInputText(item);
    createListItem();
})








