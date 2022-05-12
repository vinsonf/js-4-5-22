const date = new Date();

console.log(date);


console.log(date.getMonth() + 1);
console.log(date.getDate());
console.log(date.getFullYear());
console.log(date.getHours() % 12);
console.log(date.getMinutes());
console.log(date.getSeconds());

date.setHours(1);

console.log(date);