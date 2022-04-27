// data types 
// variables
// operators

const pageTitle = 'My List';
let selected = null;





// the dom
// step 1: add title to the dom
const titleElement = addToPage('h1', pageTitle, ['title']);
const aboutParagraph = addToPage('p', 'Things we learned', ['about']);
const topicList = addToPage('ul', '');
const topicVariables = addToPage('li', 'Variables', ['user-list-item'], topicList);
const topicDataTypes = addToPage('li', 'Data Types', ['user-list-item'], topicList);


const infoElement = addToPage('p', 'Things we learned', ['info']);


topicVariables.addEventListener('click', function() {
    console.log('Variables');
    console.log('selected', selected);
    if (selected) {
        selected.classList.remove('selected');
    }
    topicVariables.classList.add('selected');
    selected = topicVariables;
    infoElement.innerHTML = `
        <ul>
            <li>Variables are containers for storing data</li>
            <li>Variables are declared using the keyword <code>var</code></li>
            <li>Variables can be reassigned</li>
            <li>Variables can be declared and initialized at the same time</li>
        </ul>
    
    `;
});
topicDataTypes.addEventListener('click', function() {
    console.log('Data Types');
    console.log('selected', selected);
    titleElement.append(topicDataTypes)

    if (selected) {
        selected.classList.remove('selected');
    }
    topicDataTypes.classList.add('selected');
    selected = topicDataTypes;
    infoElement.innerHTML = `
    <ul>
        <li>Data types are the types of data that can be stored in variables</li>
        <li>There are six data types in JavaScript</li>
        <li>There are three primitive data types: <code>number</code>, <code>string</code>, and <code>boolean</code></li>
        <li>There are two object data types: <code>object</code> and <code>array</code></li>
        <li>There are two undefined data types: <code>undefined</code> and <code>null</code></li>
    </ul>
    `;
});












function addToPage(tag, text, classes = [], parent = document.body) {
    const element = document.createElement(tag);
    parent.append(element);
    element.innerHTML = text; 

    if (classes.length > 0) {
        element.classList.add(...classes);
    }
    return element;
}


