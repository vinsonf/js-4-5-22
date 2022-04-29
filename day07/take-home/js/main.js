// cat facts api
const button = document.createElement("button");
button.innerHTML = "Get Cat Facts";
document.body.append(button);


const ul = document.createElement("ul");
document.body.append(ul);
console.log(1 + 2);


button.addEventListener('click', function() {
    fetch('https://cat-fact.herokuapp.com/facts/random?animal_type=dog,horse&amount=1')
    .then(res => res.json())
    .then(data => {
        console.log(data);

        if (Array.isArray(data)) {
            data.forEach((fact) => {
                const li = document.createElement("li");
                li.innerHTML = fact.text;
                ul.append(li);
            });
        } else {
            const li = document.createElement("li");
            li.innerHTML = data.text;
            ul.append(li);
            const deleteButton = document.createElement("button");
            deleteButton.innerHTML = "Delete";
            li.append(deleteButton);
            deleteButton.addEventListener('click', function() {
                li.remove();
            });
        }

    });
});





