'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    const totalArr = arr.length;
    const finalResult = [];
    // get positive 

    let counterPositive = 0;
    arr.forEach((data) => {
        if (data > 0) {
            counterPositive++;
        }
    });
    let result = (counterPositive / totalArr).toFixed(6);
    console.log(result);


    // get negative 

    let counterNegative = 0;
    arr.forEach((data) => {
        if (data < 0) {
            counterNegative++;
        }
    });
    result = (counterNegative / totalArr).toFixed(6);
    console.log(result);


    // get zero 

    let counterZero = 0;
    arr.forEach((data) => {
        if (data == 0) {
            counterZero++;
        }
    });
    result = (counterZero / totalArr).toFixed(6);
    console.log(result);


    // console.log(finalResult);
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
