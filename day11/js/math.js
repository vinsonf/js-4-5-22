import {imgUrl1, imgUrl2, imgUrl3 } from './img-urls.js';

// calculator stuff
// console.log(Math.PI);
// console.log(Math.E);
// console.log(Math.SQRT2);
// console.log(Math.SQRT1_2);
// console.log(Math.LN2);
// console.log(Math.LN10);
// console.log(Math.LOG2E);
// console.log(Math.LOG10E);
// console.log(Math.abs(-1));
// console.log(Math.acos(0.5));
// console.log(Math.asin(0.5));
// console.log(Math.atan(0.5));
// console.log(Math.atan2(0.5, 0.5));

// random number stuff
console.log(Math.random());
console.log(Math.floor(Math.random() * 10));
console.log(Math.ceil(0.5));

const randomImages = [
    imgUrl1,
    imgUrl2,
    imgUrl3,
];

document.querySelector('img').src = randomImages[Math.floor(Math.random() * randomImages.length)];

console.log(randomImages[1]);