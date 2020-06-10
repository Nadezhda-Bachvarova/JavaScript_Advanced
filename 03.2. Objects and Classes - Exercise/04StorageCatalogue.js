"use strict"

function storage(input) {
    const catalog = {};
    //обхождане на входа
    for (let line of input) {
        //изкарваме името и цената от всеки елемент
        const [product, price] = line.split(' : ');
        const letter = product[0];
        //ако не съществува буквата -> създаваме я (обект)
        if (catalog.hasOwnProperty(letter) === false) {
            catalog[letter] = {};
        }
        //достъпваме стойността зад буквата
        // запазваме обработената стойност във обекта
        catalog[letter][product] = price;
    }
    //сортираме каталога (по начална буква) -> [ 'A', 'B', 'D', 'F', 'T' ]
    const sortedKeys = Object.keys(catalog).sort((a, b) => a.localeCompare(b));  
    for (let key of sortedKeys) {
        //отпечатваме буквата
        console.log(key);
        //сортираме обекта зад буквата
        const sortedProducts = Object.keys(catalog[key]).sort((a, b) => a.localeCompare(b));
        for (let product of sortedProducts) {
            //отпечатваме каталога с пруктите
            console.log(`  ${product}: ${catalog[key][product]}`)
        }
    }     
}

storage(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10'])