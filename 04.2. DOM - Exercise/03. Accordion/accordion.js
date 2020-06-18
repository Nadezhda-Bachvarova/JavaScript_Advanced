function toggle() {
    //намираме референция
    const div = document.querySelector('#extra');
    const btn = document.getElementsByClassName('button')[0];
    if (div.style.display === 'block') {
        //ако е видим, скриваме и изписваме More
        btn.textContent = 'More';
        div.style.display = 'none';
    } else {
        //иначе го показваме и изписваме Less
        div.style.display = 'block';
        btn.textContent = 'Less';
    }
}