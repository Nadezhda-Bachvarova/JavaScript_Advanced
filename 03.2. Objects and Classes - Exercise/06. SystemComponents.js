"use strict"


function components(input) {
    const catalog = {};
    //обхождаме входа
    for (let line of input) {
        //отделяме има на система, компонент, подкомпонент
        const [system, component, sub] = line.split(' | ');
        //попълваме каталог
        if (catalog.hasOwnProperty(system) === false) {
            catalog[system] = {};
        }

        if (catalog[system].hasOwnProperty(component) == false) {
            catalog[system][component] = [];
        }
        catalog[system][component].push(sub);
    }
    //сортираме
    Object.entries(catalog).sort((a, b) => {
        //sort by amount keys(if a <= -1 start with a, becouse is bigger) || or a=b return: false and sort by alphabetica order with localeCompare method
        return Object.keys(b[1]).length - Object.keys(a[1]).length || a[0].localeCompare(b[0]); 
    }).forEach(([system, component]) => {
        //печатаме резултата
        console.log(system);
        Object.entries(component)
            .sort((a, b) => b[1].length - a[1].length)
            .forEach(([name, sub]) => {
                console.log('|||' + name);
                //console.log(sub.join('\n'));
                //we have to add '||||||'
                sub.forEach(s => {
                    console.log('||||||' + s);
                });
            });
    }); 
}

components(['SULS | Main Site | Home Page', 'SULS | Main Site | Login Page', 'SULS | Main Site | Register Page', 'SULS | Judge Site | Login Page', 'SULS | Judge Site | Submittion Page', 'Lambda | CoreA | A23', 'SULS | Digital Site | Login Page', 'Lambda | CoreB | B24', 'Lambda | CoreA | A24', 'Lambda | CoreA | A25', 'Lambda | CoreC | C4', 'Indice | Session | Default Storage', 'Indice | Session | Default Security'])