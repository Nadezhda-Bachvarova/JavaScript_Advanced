function solve(){
   //маркираме първата секция в мейн, по-надолу към нея добавяме новата статия 
   const main = document.querySelector('main > section');

   //селектираме бутона в документа с 2-та класа 'btn' & 'create', добавяме listener за клик от потребителя
   document.querySelector('button.btn.create').addEventListener('click', createArticle);

   //ако има клик, има и събитие, изразено във функция
   function createArticle(е) {
      //изключваме дефоутното поведение на евента
      e.preventDefault();
      //селектираме елементите с които създаваме нова статия
      const title = document.querySelector('#title').value;
      const creator = document.querySelector('#creator').value;
      const category = document.querySelector('#category').value;
      const content = document.querySelector('#content').value;

      const art = el('article', [
         el('h1', title),
         el('p', ['Category', el('strong', category)]),
         el('p', ['Creator', el('strong', creator)]),
         el('p', content),
         el('div', [
            el('botton', 'Delete', {className: 'btn delete'}),
            el('button', 'Archive', {className: 'btn archive'})
         ])
      ]);
      main.appendChild(art);
   }
  }
