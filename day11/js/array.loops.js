const myArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// myArray.forEach(displayLetter);

function displayLetter(letter) {
    const li = document.createElement('li');
    li.textContent = letter;
    document.body.append(li);
}

for(let i = 0; i < myArray.length; i += 5) {
    // displayLetter(myArray[i]);
}
let j = 100;
while(j < myArray.length) {
    displayLetter(myArray[j]);
    j += 1;
}

let k = 25;

do {
    displayLetter(myArray[k]);
    k+= 5;
} while(k < myArray.length);

