// data types 
// variables
// operators

const pageTitle = 'My List';
// the dom
// step 1: add title to the dom
const titleElement = addToPage('h1', pageTitle, ['title']);
const aboutParagraph = addToPage('p', 'Things we learned', ['about']);
const topicList = addToPage('ul', '');
const topicVariables = addToPage('li', 'Variables', ['user-list-item'], topicList);
const topicDataTypes = addToPage('li', 'Data Types', ['user-list-item'], topicList);











function addToPage(tag, text, classes = [], parent = document.body) {
    const element = document.createElement(tag);
    parent.append(element);
    element.innerHTML = text; 

    if (classes.length > 0) {
        element.classList.add(...classes);
    }
    return element;
}
