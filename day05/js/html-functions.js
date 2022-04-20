
function createElement(type, text, parent = document.body) {
    const element = document.createElement(type);
    element.textContent = text;
    parent.appendChild(element);
    return element;
}



function addClass(element, className) {
    element.classList.add(className);
}

function removeClass(element, className) {
    element.classList.remove(className);
}

function toggleClass(element, className) {
    element.classList.toggle(className);
}


function listen(element, event, callback) {
    element.addEventListener(event, callback);
}

function get(selector) {
    return document.querySelector(selector);
}

function text(selector, text) {
    const element = get(selector);
    element.textContent = text;
    return element;
}
