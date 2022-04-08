// C.R.U.D.
// Create
h2 = document.createElement('h2'); // Create a new element
h2.innerHTML = 'Create'; // write text in element
document.body.append(h2); // place element on the body


// Read
h1 = document.querySelector('h1'); // select element
h1.innerHTML = 'Now it is at the bottom'; // write text in element
h1second = document.querySelectorAll('h1')[1]; // seleect multiple elements
document.body.append(h1); // place element on the body

// Update
h2.style.color = 'purple'; // change style
h2.innerHTML = 'Create Elements';
h2.classList.remove('shaker'); // add class

h2.addEventListener('click', () => {
    h2.classList.add('shaker');
    h1second.prepend(h2);
});

// Delete
h2.remove(); // remove element
document.body.append(h2);

console.log(h1second); // show things in console (right click -> inspect)


// case sensitive

H2 = document.createElement('H2'); // Create a new element
console.log(h2, H2);


// comments

// single line //

/*
multi line
comments
*/

console.dir(document);