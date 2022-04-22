const titleElement = document.createElement('h1'); // create elements
const myInput = document.createElement('input'); // create elements
const myUl = document.createElement('ul'); // create elements
const myButton = document.createElement('button'); // create elements



const div = document.querySelector('.cool-div'); // find elements in html

div.append(titleElement); // nest elements in other elements
div.append(myInput); // nest elements in other elements
div.append(myButton); // nest elements in other elements
div.append(myUl); // nest elements in other elements

titleElement.innerHTML = 'My title'; // set innerHTML(text)
myButton.innerHTML = 'Submit'; // set innerHTML(text)

myButton.addEventListener('click', function() {
    console.log(myInput.value);
    const myLi = document.createElement('li');
    myLi.innerHTML = myInput.value;
    myUl.append(myLi);
    const button = document.createElement('button');
    button.innerHTML = 'Delete';
    myLi.append(button);
   
    myLi.addEventListener('click', function() {
        myLi.classList.toggle('done');
    })
    button.addEventListener('click', function() {
        myLi.remove();
    });
});








