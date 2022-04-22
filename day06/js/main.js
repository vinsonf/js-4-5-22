// functions depending on the context can be methods
// functions depending on the context can be callbacks
// callbacks


// function orderPizza(type, callback) {
//     console.log(`Ordering a ${type} pizza`);
//     setTimeout( () => {
//         console.log(`baked a ${type} pizza`);
//         callback(function() {
//             console.log(`enjoy ${type} pizza`);
//         });
//     }, 5000);
// }

// orderPizza('pepperoni', function(callback) {
//     console.log('deliver it to me');
//     callback();
// });



// // pokemon api
// function getPokemon(name) {
//     fetch('http://pokeapi.co/api/v2/pokemon/' + name)
//     .then(response => response.text())
//     .then(pokemon => {
//         console.log(pokemon);
//         const img = document.createElement('img');
//         img.src = pokemon.sprites.front_female;
//         document.body.appendChild(img);
//         img.width = '200'
//     });
// }

// getPokemon('pikachu');
// getPokemon('squirtle');

// github api

let limit = 0;
function getGithubUser(username) {
    fetch(
        'https://api.github.com/users/' + username
    ).then(response => response.json()).then( data => {
        console.log(data);
        const img = document.createElement('img');
        img.src = data.avatar_url;
        document.body.appendChild(img);
        img.width = '200';
        fetch(data.followers_url).then(response => response.json()).then(followers => {
            console.log(followers);
            followers.forEach(follower => {
                if (limit < 15) {
                    limit++;
                    getGithubUser(follower.login);
                }
            })
        })
    })

}

// getGithubUser('IsabelaDLC');


function getStarWarsPeople(id) {
    fetch('https://swapi.dev/api/people/' + id).then(response => response.json())
    .then(data => {
        console.log(data);
    });
}

getStarWarsPeople(2);

