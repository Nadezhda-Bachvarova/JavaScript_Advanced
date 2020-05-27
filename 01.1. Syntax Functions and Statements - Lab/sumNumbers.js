"use strict"

function solveSum(n, m) {
    let num1 = Number(n);
    let num2 = Number(m);
    let result = 0;
    for (let i = num1; i <= num2; i++) {
        result += i;
    } 
    console.log(result)
}
    
solveSum('1', '5')
solveSum('-8', '20')