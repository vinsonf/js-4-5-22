// Prompt the user for two different numbers
// Convert the values to integers
// Store the two integers as variables
// Compare the two numbers
// Alert the larger number

const number1 = askForValidNumber('Please enter a number');
const number2 = askForValidNumber('Please enter another number');

if (number1 > number2) {
    alert(number1);
} else {
    alert(number2);
}

function askForValidNumber(text) {
    const number = parseInt(prompt(text));
    if (isNaN(number)) {
        return askForValidNumber('Please enter a valid number');
    }
    return number;
}