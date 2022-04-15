const pTags = document.querySelectorAll('p'); // gets a list of tags that match the selector
const h3Tags = document.querySelectorAll('h3');
const myFavorite = document.querySelector('#my-favorite span'); // gets the first tag it finds that matches the selector

console.log(pTags, h3Tags);

h3Tags[0].addEventListener('click', function() {
    pTags[0].classList.toggle('visible');
});
h3Tags[1].addEventListener('click', function() {
    pTags[1].classList.toggle('visible');
});

console.log(myFavorite);

if (age > 18 || hasParentsPermission) {
    myFavorite.textContent = 'beer';
}

// || is the or operator