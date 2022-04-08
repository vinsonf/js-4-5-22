// dinosaur game

const scene = document.createElement('div');
scene.classList.add('scene');
document.body.append(scene);


scene.style.height = 300 + 'px';
scene.style.border = '1px solid black';
scene.style.width = 600 + 'px';

const tree = document.createElement('div');
tree.classList.add('tree');

tree.style.height = 50 + 'px';
tree.style.width = 50 + 'px';
tree.style.backgroundColor = 'green';


scene.append(tree);


const dinosaur = document.createElement('div');
dinosaur.classList.add('dinosaur');
scene.append(dinosaur);


document.addEventListener('click', () => {
    dinosaur.classList.add('jumping');
    setTimeout(() => {
        dinosaur.classList.remove('jumping');
    }, 1000);
});

let score = 0;

setInterval(() => {
    let hit = false;
    const treesLeft = parseInt(getComputedStyle(tree).left);
    const playersTop = parseInt(getComputedStyle(dinosaur).top);
  
    if (treesLeft < 100 && treesLeft > 50 && playersTop > 200) {
        console.log('hit');
        hit = true;
        console.log('dinosaur top: ' + playersTop);
    }

    if (hit === true) {
        console.log('high score: ' + score);
        score = 0;
    }
    score++;
    console.log('score: ' + score);
}, 100);