function attachEventsListeners() {
    //обект със съотношение между единиците
    const ratios = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    };
    //функция, която конвертира
    function convert(value, from) {
        //коефициент дни -> получаваме стойност от въвеждане 'value' и го разделяме на ст-тa от обекта със съотношения 
        const inDays = value / ratios[from]
        return {
            days: inDays * ratios.days,
            hours: inDays * ratios.hours,
            minutes: inDays * ratios.minutes,
            seconds: inDays * ratios.seconds
        };
    }
    //взимаме референции от HTML към всички полета 
    const days = document.querySelector('#days');
    const hours = document.querySelector('#hours');
    const minutes = document.querySelector('#minutes');
    const seconds = document.querySelector('#seconds');

    //закачаме EventListener и определяме контекста на бутона - стойност и м.единица
    document.querySelector('main').addEventListener('click', onClick);
    
    function onClick(e) {
        if (e.target.nodeName === 'INPUT' && e.target.type === 'button') {
            const el = e.target.parentNode.querySelector('input[type="text"]');
        const value = Number(el.value);
        const id = el.id;
        const convertedValues = convert(value, id);
        display(convertedValues);
        }  
    }
    function display(values) {
        days.value = values.days;
        hours.value = values.hours;
        minutes.value = values.minutes;
        seconds.value = values.seconds;
    }
}