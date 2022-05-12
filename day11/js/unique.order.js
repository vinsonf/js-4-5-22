const testCases = [
    'AAAABBBCCDAABBB',
    'ABBCcAD',
    [1,2,2,3,3],

];


function unique(stringOrArray) {
    let value = stringOrArray;
    let result = [];
    if (Array.isArray(stringOrArray)) {
        value = stringOrArray.join('');
    }

    for (let i = 0; i < value.length; i++) {
        if (result.slice(-1)[0] !== value[i])  {
            result.push(value[i]);
        }
    }
    return result;
}

testCases.forEach(testCase => {
    console.log(unique(testCase));
});