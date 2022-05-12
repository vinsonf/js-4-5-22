// global scope
const myVar = "Hello World!";
let score = 0;

function myFunction() {

    // local scope
    let score = 100;
   
    const myVar = "Hello World?";
    console.log(myVar);

    return {
        getPoint() {
            return score;
        },
        scorePoint() {
            score++;
        }
    };
    
}

const scoreKeeper1 = myFunction();
const scoreKeeper2 = myFunction();

console.log(scoreKeeper1.getPoint());

scoreKeeper1.scorePoint();
scoreKeeper1.scorePoint();
scoreKeeper1.scorePoint();
console.log(scoreKeeper1.getPoint());
scoreKeeper2.scorePoint();

console.log(scoreKeeper2.getPoint());




