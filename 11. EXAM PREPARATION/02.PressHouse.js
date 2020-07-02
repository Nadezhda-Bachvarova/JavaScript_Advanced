function pressHouse() {
    class Article {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return [
                `Title: ${this.title}`,
                `Content: ${this.content}`
            ].join('\n');
        }
    }

    class ShortReports extends Article {
        constructor(title, content, originalResearch) {
            if (content.length >= 150) {
                throw new Error('Short reports content should be less then 150 symbols.');
            } else if (originalResearch.hasOwnProperty('author') == false || originalResearch.hasOwnProperty('title') == false) {
                throw new Error('The original research should have author and title.');
            }
            //тези параметри трябва да ги поддадем на горния клас, които сме ги присвоили
            super(title, content);
            //супер се вика след като сме валидирали, преди да сме присвоили свойство от горната инстанция
            this.originalResearch = originalResearch;
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment);
            return 'The comment is added.';
        }

        toString() {
            const result = [
                //shoud be extended to .toString() from class Article
                super.toString(),
                `Original Research: ${this.originalResearch.title} by ${this.originalResearch.author}`
            ];
            // And if there are any comments you should print on a new line 
            if (this.comments.length > 0) {
                result.push('Comments:');
                //and then all comments each on a new line
                this.comments.forEach(c => result.push(c));
            }
            // result is array [], for return used to join('\n')
            return result.join('\n');
        }
    }

    class BookReview extends Article {
        constructor(title, content, book) {
            //наследява от артикъл -> title i content
            super(title, content); 

            this.book = book;
            this.clients = [];
        }

        addClient(clientName,  orderDescription) {
            //ако клиента съществува в масива няма да върне ъндефайнд, хвърляме грешка
            if (this.clients.find(c => c.clientName == clientName) !== undefined) {
                throw new Error('This client has already ordered this review.');
            //ако не съществува, го добавяме в масива 
            } else {
                this.clients.push({
                    clientName,
                    originalResearch
                });
                return `${clientName} has ordered a review for ${this.book.clientName}`;
            }

        }
        
    }

    return {
        Article,
        ShortReports,
        BookReview
    };
}