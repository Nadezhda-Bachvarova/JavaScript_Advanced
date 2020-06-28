function getArticleGenerator(articles) {
    const content = document.querySelector('#content');

    function showNext() {
        if (articles.length > 0) {
            const article = document.createElement('article');
            article.textContent = articles.shift();
            content.appendChild(article);
        } 
    }
    //връща функцията, а не резултата от изпълнението на фукцията
    return showNext;
}
