function notify(message) {
    //намираме кутийката, където трябва да се изпише съобщението
    const notification = document.querySelector('#notification');
    
    //поставяме съобщението в кутийката
    notification.textContent = message;

    //визуализираме съобщението
    notification.style.display = 'block';

    //активираме таймер, който да скрие кутийката след 2 сек(2000мили секунди = 2 сек)
    setTimeout(() => {
        notification.style.display = 'none';
    }, 2000);
}