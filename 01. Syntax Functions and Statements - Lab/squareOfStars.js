"use strict"

function stars(input = 5) {
    for (var i = 1; i <= input; i++) {
        console.log('* '.repeat(input))
    }
}

stars()
