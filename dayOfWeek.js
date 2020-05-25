"use strict"


function solve(day) {
    let result = 0;
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    if (days.includes(day)) {
        result = days.indexOf(day) + 1
        console.log(result)
    } else {
        console.log('error')
    }
        
}

solve('Monday')
solve('Friday')
solve('Invalid')