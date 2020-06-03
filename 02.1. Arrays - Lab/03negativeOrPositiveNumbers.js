function negativePositiveNums(array = []) {
    let sortedArray = [];
    
    array.forEach(element => {
        element < 0 ? sortedArray.unshift(element) : sortedArray.push(element);
    });
    console.log(sortedArray.join('\n'));
}

negativePositiveNums([7, -2, 8, 9])
negativePositiveNums([3, -2, 0, -1])