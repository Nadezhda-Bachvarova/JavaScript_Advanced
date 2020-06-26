function solve() {
   // закачаме listener за бутона от който очакваме клик от потребителя
   document.querySelector('#searchBtn').addEventListener('click', onSearch);
   const input = document.querySelector('#searchField');

   function onSearch(e) {
      //четем входа, изрязваме спейсове и правим вс символи малки за сравнение, кейс-сензитив
      const query = input.value.trim().toLocaleLowerCase();
      if (query.trim().length > 0) {
         const tbody = document.querySelector('tbody');
         //обхождаме редовете и премахваме клас select aко има от предишно търсене запазени
         [...tbody.querySelectorAll('tr')].forEach(r => {
            r.classList.remove('select');
         });
         //обхождаме клетките и търсим съвпадения -> добавяме клас select на родителя
         [...tbody.querySelectorAll('td')].forEach(d => {
            if (d.textContent.trim().toLocaleLowerCase().includes(query)) {
               d.parentNode.classList.add('select');
            }
         });
         //зачистваме полето
         input.value = '';
      }
   }
}