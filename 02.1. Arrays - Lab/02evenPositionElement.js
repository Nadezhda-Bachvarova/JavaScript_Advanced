"use strict"

function evenPosition(arr) {
    let evenPos = [];
    for (let i = 0; i < arr.length; i+= 2) {
        evenPos.push(arr[i])
    }
    return evenPos.join(' ')
}

console.log(evenPosition(['20', '30', '40']))
console.log(evenPosition(['5', '10']))