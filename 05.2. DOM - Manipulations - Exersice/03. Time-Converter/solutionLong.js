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
    document.querySelector('#daysBtn').addEventListener('click', convertDays);
    document.querySelector('#hoursBtn').addEventListener('click', convertHours);
    document.querySelector('#minutesBtn').addEventListener('click', convertMinutes);
    document.querySelector('#secondsBtn').addEventListener('click', convertSeconds);

    //извиква конвертираща функция
    function convertDays(e) {
        const value = Number(days.value);
        const convertedValues = convert(value, 'days');
        //изобразяваме всички стойности
        display(convertedValues);
    }

    function convertHours(e) {
        const value = Number(hours.value);
        const convertedValues = convert(value, 'hours');
        //изобразяваме всички стойности
        display(convertedValues);
    }

    function convertMinutes(e) {
        const value = Number(minutes.value);
        const convertedValues = convert(value, 'minutes');
        //изобразяваме всички стойности
        display(convertedValues);
    }

    function convertSeconds(e) {
        const value = Number(minutes.value);
        const convertedValues = convert(value, 'seconds');
        //изобразяваме всички стойности
        display(convertedValues);
    }

    function display(values) {
        days.value = values.days;
        hours.value = values.hours;
        minutes.value = values.minutes;
        seconds.value = values.seconds;
    }
}