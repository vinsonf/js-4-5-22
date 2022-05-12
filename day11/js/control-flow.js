
// basic if statement

const number = prompt('Enter a number');
debugger;
if (!parseInt(number)) {
    createTitle(`${number} is not a number`);
} else {
    if (1 + +number == 2) {
    console.log("1 + 1 = 2");
    createTitle("1 + 1 = 2");
}

}

// if else statement
if (2 + 2 === 'fish') {
    console.log("This will run if the condition is true");
    createTitle("2 + 2 = fish");
} else {
    console.log("This will not run if the condition is NOT true");
    createTitle("2 + 2 = not fish");
}


// if (else if) `repeat as manytimes as we need` else statement
if (2 + 2 === 5) {
    console.log("This will run if the first condition is true");
} else if (2 + 2 === 4) {
    console.log("This will run if the second condition is true");
    createTitle("2 + 2 = 4");
} else {
    console.log("This will run if all the conditions are NOT true");
}

function createTitle(text) {
    const title = document.createElement('h1');
    title.textContent = text;
    document.body.append(title);
}


// switch statement
const day = new Date().getDay();
switch (day) {
    case 0:
        console.log("Today is Sunday");
        createTitle("Today is Sunday");
        break;
    case 1:
        console.log("Today is Monday");
        createTitle("Today is Monday");
        break;
    case 2:
        console.log("Today is Tuesday");
        createTitle("Today is Tuesday");

        break;  // break is not needed here
        default:
            console.log("Today is not sunday, monday, or tuesday");
            createTitle("Today is not sunday, monday, or tuesday");
}

// like an if else (ternary)
1 + 1 === 2 ? createTitle('1 + 1 does === 2') : console.log("1 + 1 = not 2");