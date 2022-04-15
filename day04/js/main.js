// control flow
/*
    if (condition) {} // condition returns true or false
    else if (condition) {}
    else {}
*/

// if (1 + 2 === 5) {
//     console.log('runs if the condition is true');
// } else {
//     console.log('runs if the condition is false');
// }

// const age = prompt('How old are you?');
// const parentsPermission = confirm('Do you have permission from your parents?');
// const dontcare  = prompt('Do you care?');
// if (age >= 18) {
//     console.log('you are old enough to view this page');
// } else if (age >= 13 && parentsPermission) {
//     console.log('you are old enough to view this page with permission from your parents');

// } else if (dontcare) {
//     console.log('dont care');
// }else {
//     console.log('you are not old enough to view this page');
// }


// if you have one condition and you have an action to run when you get true and an action to run when you get false

// ternary operator


// const age = prompt('How old are you?');

// age >= 18 ? console.log('true') : console.log('false');


// switch(age) {
//     case '18':
//         console.log('you are old enough to view this page');
//         break;
//     case '13':
//         console.log('you are old enough to view this page with permission from your parents');
//         break;
//     default:
//         console.log('you are not old enough to view this page');
// }





function signup(membership) {
    switch(membership) {
        case 'platinum':
            console.log('you get everything plus the kitchen sink');
            break;
        case 'gold':
            console.log('you get everthing included in silver and you get to skip the line');
            break;
        case 'silver':
            console.log('you get everthing included in basic and you get one free skip the line');
            break;
        default:
            console.log('you get everthing included in basic');
    
    }
}
// requirements
// password must be at least 8 characters
// password must contain at least one number
// password must contain at least one uppercase letter
function checkpassword(value) {

    if (!value) {
        alert('please fill this out before submitting');
    }
    console.log(value);

    
    if (value.length < 8) {
        console.log('password is too short');
    }

    if (value.toLowerCase() === value) {
        console.log('password must contain at least one uppercase letter');
    }

    const hasNumber = /\d/; // regex
    if (!hasNumber.test(value)) {
        console.log('password must contain at least one number');
    }
}



// false false, 0, '', NaN, undefined, null

// logical operators
// && and
// || or
// ! not


// const age = prompt('How old are you?');
// const parentPermission = confirm('Do you have permission from your parents?');

// if (age >= 18) {
//     console.log('you are old enough to view this page');
// } else if (age >= 13 && parentPermission) {
//     console.log('you are old enough to view this page with permission from your parents');
// } else {
//     console.log('you are not old enough to view this page');
// }