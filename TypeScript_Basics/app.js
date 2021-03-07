"use strict";
// batch of core data type are number, string, boolean, array, object.
const num1Element = document.getElementById('num1');
const num2Element = document.getElementById('num2');
const button = document.querySelector('button');
// generics
const numResults = [];
// normally defining type
const stringResults = [];
;
function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else if ((typeof num1 === 'string' && typeof num2 === 'string')) {
        return num1 + ' ' + num2;
    }
    return +num1 + +num2;
}
function printResults(result) {
    console.log(result.val);
    console.log(result.timestamp);
}
button.addEventListener('click', () => {
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    var result = add(+num1, +num2);
    numResults.push(result);
    var string_result = add(num1, num2);
    stringResults.push(string_result);
    console.log(numResults);
    console.log(stringResults);
    printResults({ val: result, timestamp: new Date() });
});
// promises are supported from ES6 version changed json config
// Promises are other types where we can specify type according to what it will resolve to - 'generics'
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('It worked');
    }, 1000);
});
myPromise.then((result) => {
    console.log(result);
});
