"use strict"


function aggregate(...items) {
    let sum1 = 0;
    let sum2 = 0;
    let concat = '';
    for (var i = 0; i < items.length; i++) {
        const currentItem = items[i];
        sum1 += currentItem;
        sum2 += 1/currentItem;
        concat +=currentItem;
    }
    console.log(sum1)
    console.log(sum2)
    console.log(concat)
}

aggregate(1, 2, 3)
aggregate(2, 4, 8, 16)