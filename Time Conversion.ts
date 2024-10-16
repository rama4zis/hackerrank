'use strict';

import { WriteStream, createWriteStream } from "fs";
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';

    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s: string): string {
    // Write your code here
    
    
    // splite
    let newS = s.replace(/PM|AM/gi, "")
    let data = newS.split(":")
    let numberData = data.map(Number)
    // console.log(numberData)
    let finalData = []
    if(s.includes("PM") && numberData[0] != 12){
        numberData[0] += 12
    }
    
    if(s.includes("AM") && numberData[0] == 12){
        numberData[0] -= 12
    }
    // console.log(numberData.join(":"))
    // console.log(numberData[2].toString().length)
    
    
    for(let i = 0; i < numberData.length; i++){
        if(numberData[i].toString().length < 2){
            finalData[i] = "0" + numberData[i]
        }else {
            finalData[i] = numberData[i]
        }
    }
    
    // console.log(finalData.join(":"))
    
    return finalData.join(":")
}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const s: string = readLine();

    const result: string = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
