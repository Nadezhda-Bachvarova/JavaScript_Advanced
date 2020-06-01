"use strict"

function addRemove(arr) {
    let n = 1;
    let result = [];

    arr.forEach(element => {
        element === 'add' ? result.push(n) : result.pop();

        n++;
        
    });

    return result.length === 0 ? 'Empty' : result.join('\n');
}

console.log(addRemove(['remove',
'remove',
'remove']))