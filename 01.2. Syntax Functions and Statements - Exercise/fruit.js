"use strict"

function solve(fruit, weightInGrams, priceKg) {
    const weightInKg = weightInGrams / 1000
    const total = weightInKg * priceKg
    console.log('I need $' + total.toFixed(2) + ' to buy ' + weightInKg.toFixed(2) + ' kilograms ' + fruit + '.')
}

solve('orange', 2500, 1.80)