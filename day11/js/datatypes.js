export const string1 = "Hello";
export let string2 = "World";
export const number1 = 1;
export let number2 = 2;
export const boolean1 = true;
export let boolean2 = false;

export const object1 = {
    string1: string1,
    string2: string2,
    number1: number1,
    number2: number2,
    boolean1: boolean1,
    boolean2: boolean2
};


export default [
    string1,
    string2,
    number1,
    number2,
    boolean1,
    boolean2,
    object1
];

const falsey = [
    undefined,
    null,
    0,
    NaN,
    false,
    "", 
]

const others = [
    BigInt,
    Symbol,
    Infinity,
    
];