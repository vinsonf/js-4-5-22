const phoneNumber1 = '555-555-5555';
const phoneNumber2 = '(555) 555-5555';
const phoneNumber3 = '555 555 5555';
const phoneNumber4 = '555-5555';


const regexPhonePattern = /\(?\d{3}\)?[- ]\d{3}[- ]\d{4}/;

console.log(regexPhonePattern.test(phoneNumber1));
console.log(regexPhonePattern.test(phoneNumber2));
console.log(regexPhonePattern.test(phoneNumber3));
console.log(regexPhonePattern.test(phoneNumber4));

const input = document.querySelector('input');
input.addEventListener('input', (event) =>{
    regexPhonePattern.test(input.value) ? input.style.backgroundColor = 'green' : input.style.backgroundColor = 'red';
})