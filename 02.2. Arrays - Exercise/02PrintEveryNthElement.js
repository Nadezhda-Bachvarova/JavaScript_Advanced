function printNelement(params) {
    const step = Number(params.pop());

    for (let i = 0; i < params.length; i+= step) {   
        console.log(params[i]);  
    }
}

printNelement(['dsa',
'asd',
'test',
'tset',
'2'])