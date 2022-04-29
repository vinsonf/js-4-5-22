// function is to a code block as a class is to an object
let score = 0;

class Player {
    image = 'http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/e871a8dfbd7f16e.png';
    health = 100;
    height= '100px';
    width= '60px';
    rotation = 0;
    direction =1;
    keyMap = {
        right: 'ArrowRight',
        left: 'ArrowLeft',
        up: 'ArrowUp',
        down: 'ArrowDown',
    }



    constructor(
        x, 
        y, 
        up = 'ArrowUp',
        down = 'ArrowDown',
        left = 'ArrowLeft',
        right = 'ArrowRight'
        ) {
        this.playerElement = document.createElement('img');
        document.body.append(this.playerElement);
        this.playerElement.style.transition = 'all .01s ease-in-out';
        this.x = x;
        this.y = y;
        players.push(this);
        this.keyMap.up = up;
        this.keyMap.down = down;
        this.keyMap.left = left;
        this.keyMap.right = right;
    }

    view() {
        this.playerElement.src = this.image;
        this.playerElement.style.height = this.height;
        this.playerElement.style.width = this.width;
        this.playerElement.style.position = 'absolute';
        this.playerElement.style.left = this.x + 'px';
        this.playerElement.style.top = this.y + 'px';
        this.playerElement.style.transform = 'rotate(' + this.rotation + 'deg)' + 'scaleX(' + this.direction+')';
    }

    move(event) {

        if (event.key === this.keyMap.up){
            this.y -= 10;
        }
    
        if (event.key === this.keyMap.down){
            this.y += 10;
        }
        if(event.key === this.keyMap.left){
            this.x -= 10;
            this.direction = -1;
    
        }
        if(event.key === this.keyMap.right){
            this.x += 10;
            this.direction = 1;
        }
        if(event.key === 'm'){
            this.height = parseInt(this.height) + 10 + 'px';
            this.width = parseInt(this.width) + 10 + 'px';
        }
        if(event.key === 'o'){
            this.height = parseInt(this.height) - 10 + 'px';
            this.width = parseInt(this.width) - 10 + 'px';
        }
    
        if(event.key === 't'){
            this.rotation += 15;
        }
    
        if (event.key == 'y'){
            this.scorePoint();
        }
    }

    scorePoint() {
        score++;
        console.log(score);
    }


}

class Enemy extends Player {
    image = 'https://e6.pngbyte.com/pngpicture/107150/png-Character-Sprite-Avgn-Adventures-avgn-Sprite-character_thumbnail.png';
    height = '80px';
    scorePoint() {
        score-=3;
        console.log(score);
    }
}

const players = [];

new Player(100, 100);
new Player(200, 200, 'w', 's', 'a', 'd');
new Player(300, 300, 'j', 'k', 'h', 'l');
new Enemy(400, 400);

players.push({
    x: 100,
    y: 100,
    image: 'http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/e871a8dfbd7f16e.png',
    health: 100,
    height: '200px',
    width: '160px',
    rotation: 0,
    direction:1,
    move: function(event){},
    view: function(){}
})






document.addEventListener('keydown', (event) => {
    
    players.forEach(player => {
        player.move(event);
    });
    

});

function gameLoop(){
  
    players.forEach(player => {
        player.view();
    })
    window.requestAnimationFrame(gameLoop);

  
}
gameLoop();

console.log(players);