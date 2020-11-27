'use strict';

const task6 = (deadline) => {

    const body = document.getElementsByTagName('body')[0];
    body.style.fontSize = '25px';
    
    const dates = () => {
        const date = new Date();
        const dayLeftSec = (new Date(deadline).getTime() - date.getTime()) / 1000,
        daysLeft = (Math.floor(dayLeftSec / 60 / 60 / 24) > 0) ? Math.floor(dayLeftSec / 60 / 60 / 24) : '0',
        weekday = `${date.toLocaleString('ru', {
            'weekday': 'long'}
            )[0].toUpperCase()}${date.toLocaleString('ru', {
            'weekday': 'long'}
            ).slice(1)}`,
        timeHH = date.toLocaleTimeString().slice(0, 2),
        timeMM = date.toLocaleTimeString().slice(3, 5),
        dayTime = (timeHH >= '00' && timeHH < '04' && timeMM <= '59') ? 'Доброй ночи' : (timeHH >= '04' && timeHH < '12' && timeMM <= '59') ? 'Доброе утро' : (timeHH >= '12' && timeHH < '16' && timeMM <= '59') ? 'Добрый день' : 'Добрый вечер';

        return {daysLeft, weekday, dayTime};
    };
    
    
    
    const showResult = () => {
    const show = dates();
    body.innerHTML = `${show.dayTime}<br />
    Сегодня: ${show.weekday}<br />
    Текущее время: ${new Date().toLocaleTimeString('en')}<br />
    До нового года осталось ${show.daysLeft} дней`;
    };
    setInterval(showResult, 1000);
};
task6('1 january 2021');