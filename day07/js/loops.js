// forEach

const topics = ['ForEach', 'For', 'While', 'Do While'];

topics.forEach(function (topic) {
    const li = document.createElement('li');
    li.innerHTML = topic;
    document.body.append(li);
});

document.body.append(document.createElement('hr'));

for (let i = 1; i <= 10; i++) {
    const li = document.createElement('li');
    li.innerHTML = i;
    document.body.append(li);
}
document.body.append(document.createElement('hr'));
let i = 50;

while( i < 60) {
    const li = document.createElement('li');
    li.innerHTML = i;
    document.body.append(li);
    i++;
}
document.body.append(document.createElement('hr'));
i = 95;
do {
    const li = document.createElement('li');
    li.innerHTML = i;
    document.body.append(li);
    i++;
} while(i < 100);

document.body.append(document.createElement('hr'));

let users = ['user 1', 'user 2', 'user 3'];

for(let user of users){
    const li = document.createElement('li');
    li.innerHTML = user;
    document.body.append(li);
}

let person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

document.body.append(document.createElement('hr'));

for(let key in person){
    const li = document.createElement('li');
    li.innerHTML = key + ' = ' + person[key];
    document.body.append(li);
}