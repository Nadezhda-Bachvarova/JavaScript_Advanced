"use strict"


function sumFirstLast(arr) {
    const a = Number(arr[0])
    const b = Number(arr[arr.length - 1]);
    return a + b;
} 

console.log(sumFirstLast(['20', '30', '40']))
console.log(sumFirstLast(['5', '16', '10', '5']))