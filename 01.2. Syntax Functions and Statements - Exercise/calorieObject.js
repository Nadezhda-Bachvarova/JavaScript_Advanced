"use strict"

function calorie(params) {
    const calorie = {};

    for (let i = 0; i < params.length; i += 2) {
        const propName = params[i];
        const value = Number(params[i + 1]);

        calorie[propName] = value;
    }
    console.log(calorie)
}

calorie(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'])