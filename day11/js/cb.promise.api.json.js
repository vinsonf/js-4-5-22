// debugger;

// function takesACallback(callback) {
//     callback();
// }

// takesACallback(
//     () => {
//         console.log('this is a callback');
//     }
// );

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(1 + 2);
//     }, 5000);
// });

// myPromise.then((data) => {
//     console.log(data);
// });

fetch('http://pokeapi.co/api/v2/pokemon/1')
.then(res => res.json())
.then(data => {
    console.log(data.abilities[1].ability.name);
});

