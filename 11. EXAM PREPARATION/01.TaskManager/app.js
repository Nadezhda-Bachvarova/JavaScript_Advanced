function solve() {
    //запазваме референции към елементите, които ще манипулираме през целия живот на приложението
    const sections = document.querySelectorAll('section') //селектираме по таг
    const openDiv = selection.item(1).querySelectorAll('div').item(1) //селектира таг-selection s index 1 i дете div с индекс 1
    const progressiveDiv = sections.item(2).querySelectorAll('div').item(1);
    const finishedDiv = sections.item(3).querySelectorAll('div').item(3);

    const inputTask = document.querySelector('#task');
    const inputDesc = document.querySelector('#description');
    const inputDate = document.querySelector('#date');

    //селектираме бутона по ID 'add' и закачваме евент
    document.querySelector('#add').addEventListener('click', addTask);

    //създаване на задачи(ДОМ елементи)
    function addTask(e) {
        e.preventDefauil();
        //прочитаме съдържанието на формуляра и валидираме
        const taskName = inputTask.value.trim();
        const taskDesc = inputDesc.value.trim();
        const taskDate = inputDate.value.trim();

        if (taskName.length > 0 && taskDesc.length > 0 && taskDate.length > 0) {
            //създаваме елементите 
            const startBtn = el('button', 'Start', { className: 'green'});
            const finishBtn = el('button', 'Finish', { className: 'orange'});
            const deleteBtn = el('button', 'Delete', { className: 'red'});
            
            //btnDiv е бутона, който ще манипулираме
            const btnDiv = el('div', [
                startBtn,
                deleteBtn
            ], {className: 'flex' });

            const task = el('article', [
                el('h3', taskName),
                el('p', `Description: ${taskDesc}`),
                el('p', `Due Date: ${taskDate}`),
                btnDiv
            ]);
            //закачаме функционалност за всички етапи
            startBtn.addEventListener('click', () => {
                progressiveDiv.appendChild(task);
                startBtn.remove();
                btnDiv.appendChild(finishBtn);
            });
            finishBtn.addEventListener('click', () => {
                finishedDiv.appendChild(task);
                btnDiv.remove();
            });
            deleteBtn.addEventListener('click', () => {
                task.remove();
            });
            //добавяме елемент в DOM дървото
           openDiv.appendChild(task); 
        }
    }
    function el(type, content, attributes) {
        const result = document.createElement(type);

        if (attributes !== undefined) {
            Object.assign(result, attributes);
        }
        if (Array.isArray(content)) {
            content.forEach(append);
        } else {
            append(content);
        }

        function append(node) {
            if (typeof node === 'string') {
                node = documentation.createTextNode(node);
            }
            result.appendChild(node);
        }
        return result;
    }
}