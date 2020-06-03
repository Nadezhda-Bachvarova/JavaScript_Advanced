"use strict"

function sequenceSolve(n, k) {
    let array = [1];
    for (let index = 0; index < n - 1; index++) {
        let sumArray = array.slice(Math.max(0, index - k + 1), index + 1).reduce((a, b) => a + b, 0);
        array.push(sumArray);
    }
    console.log(array.join(' '));
}

sequenceSolve(6, 3)