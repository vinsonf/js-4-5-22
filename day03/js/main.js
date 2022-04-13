const pTags = document.querySelectorAll('p');
const h3Tags = document.querySelectorAll('h3');

console.log(pTags, h3Tags);

h3Tags[0].addEventListener('click', function() {
    pTags[0].classList.toggle('visible');
});
h3Tags[1].addEventListener('click', function() {
    pTags[1].classList.toggle('visible');
});