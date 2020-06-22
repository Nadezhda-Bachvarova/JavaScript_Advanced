function createArticle() {
	const newTitle = document.getElementById('createTitle');
	const newContent = document.getElementById('createContent');
	const articleSection = document.getElementById('articles');

	const newArticle = document.createElement('article');
	const articleHeading = document.createElement('h3');
	const articleParagraph = document.createElement('p');

	if (newTitle.value !== '' && newContent.value !== '') {
		//fill the box to 'h3' and 'p' with HTML text
		articleHeading.innerHTML = newTitle.value; 
		articleParagraph.innerHTML = newContent.value;
		newArticle.appendChild(articleHeading);
		newArticle.appendChild(articleParagraph);
		articleSection.appendChild(newArticle);	
	}	
	newTitle.value = '';
	newContent.value = '';		
}