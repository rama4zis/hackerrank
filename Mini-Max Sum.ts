'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function (inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function (): void {
    inputLines = inputString.split('\n');
    inputString = '';

    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr: number[]): void {
    // Write your code here
    // console.log(arr)
    // Get MinMax number
    let min = arr[0]
    let max = arr[0]
    for(let i = 0; i < arr.length; i++){
        // console.log(arr[i])
        if (min > arr[i]){
            min = arr[i]
        }
        if (max < arr[i]){
            max = arr[i]
        }
        // console.log("min number = " + min)
        // console.log("max number = " + max)
    }
    
    // sumTotal for minimum 
    let totalMin : number = 0
    let totalMax : number = 0
    for(let i=0; i < arr.length; i++){
        if (max != arr[i]){
            totalMin = totalMin + arr[i]
        }
        if (min != arr[i]){
            totalMax = totalMax + arr[i]
        }
        if (min == max && i < arr.length - 1){
            totalMin = totalMin + arr[i]
            totalMax = totalMax + arr[i]
        }
    }
    
    console.log(totalMin, totalMax)
}

function main() {

    const arr: number[] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
