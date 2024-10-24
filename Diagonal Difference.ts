'use strict';

import { WriteStream, createWriteStream } from "fs";
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
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr: number[][]): number {
    // Write your code here
    console.log(arr.length);

    let n = arr.length;

    let primaryD = 0;
    let secondaryD = 0;

    for (let i = 0; i < n; i++) {

        // for (let j = i; j < n; )
        primaryD += arr[i][i]

    }
    let index = 0
    for (let i = n-1; i >= 0; i--){
        // console.log('number = ', arr[i][index])
        secondaryD += arr[i][index]
        index++
        
    }

    // console.log('PrimaryD now  = ', primaryD)
    // console.log('SecondaryD now  = ', secondaryD)

    return Math.abs(primaryD - secondaryD) ;
}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const n: number = parseInt(readLine().trim(), 10);

    let arr: number[][] = Array(n);

    for (let i: number = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result: number = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}
