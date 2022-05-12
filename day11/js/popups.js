export default [
    alert,
    confirm,
    prompt,
];


// const canLeave = confirm("You have unsaved work. Are you sure you want to leave?");

// if (canLeave === true) {
//     console.log('this will leave')
// } else {
//     console.log('this will stay')
// }

const username = prompt("What is your name?");
console.log(username);

if (username) {
    console.log(`Hello ${username}`);
} else {
    console.log("Ill just call you 'buddy'");
}
