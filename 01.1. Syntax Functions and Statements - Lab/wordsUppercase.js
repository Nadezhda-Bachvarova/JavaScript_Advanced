"user strict"

function wordsUppercase(input) {
    // Mask
    let results = String(input.match(/(\w|\s)*\w(?=")|\w+/g)).toUpperCase().split(",");
    console.log(results.join(', '));
}

wordsUppercase('Hi, how are you?')