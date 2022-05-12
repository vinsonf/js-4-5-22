import { imgUrl1, imgUrl2 } from "./img-urls.js";

// document.body.children[0].src = imgUrl1;
// document.querySelector('img').src = imgUrl1;
// document.querySelectorAll('img').forEach(img => img.src = imgUrl1);
document.querySelectorAll('img')[0].src = imgUrl1;

const li = document.createElement('li');
li.textContent = imgUrl1;
document.body.append(li);

const image = document.createElement('img');
image.src = imgUrl1;
document.body.append(image);
// document.addEventListener('keydown', (event) => {
//     console.log(event.code)
//     if (event.code !== 'Enter') {
//         return
//     }
//     fetch('http://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * 151) + 1)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//         image.src = data.sprites.front_default;
//         image.style.width = '200px';
//     })
// });


const input = document.createElement('input');
document.body.append(input);
input.addEventListener('keydown', (event) => {
    console.log(event.keyCode, event.code);
    if (event.code !== 'Enter') {
        return
    }
    fetch('http://pokeapi.co/api/v2/pokemon/' + input.value)
    .then(res => res.json())
    .then(data => {
        image.src = data.sprites.front_default;
    })
});


