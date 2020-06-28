function solve(){
   //добавяме click event listener на тялото на таблицата
   const tbody = document.querySelector('tbody');
   const items = tbody.querySelectorAll('tr');
   tbody.addEventListener('click', parseTable);

   function parseTable(e) {
      //намираме избрания елемент
      const row = e.target.parentNode;
      //проверяваме дали избрания елемент е ред
      if (row.nodeName === 'TR') {
         //ако избрания елемент свети -> го гасим
         if (row.style.backgroundColor !== '') {
            row.style.backgroundColor = '';
         } else {
            //иначе гасим всички останали и го светваме
            [...items].forEach(i => i.style.backgroundColor = '');
            row.style.backgroundColor = '#413f5e';
         }
      }
   }
}
