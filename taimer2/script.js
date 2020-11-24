window.addEventListener('DOMContentLoaded', function(){
    'use strict';

const welcome1 = document.querySelector('#say');
let welcome;
const myDate = new Date();
const hour = myDate.getHours();
let minute = myDate.getMinutes();
let second = myDate.getSeconds();
if (minute < 10) {
    minute = "0" + minute;
}
if (second < 10) {
    second = "0" + second;
}
if (hour < 12) {
    welcome = "Доброе утро";
} else if (hour < 17) {
    welcome = "Добрый день";
} else {
    welcome = "вечер в хату";
}
welcome1.textContent = welcome;

const hours = document.querySelector('#hours');
hours.textContent = "текущее время: " + hour;

const minutes = document.querySelector('#minute');
minutes.textContent = minute;

const seconds = document.querySelector('#second');
seconds.textContent = second;

const date = document.querySelector('#day');
const realDate = new Date();
const day = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const dayOfWeeek = "Сегодня: " + day[realDate.getDay()];
date.textContent = dayOfWeeek;

function countTimer(deadline){
    let timerHours = document.querySelector('#hours'),
        timerMinutes = document.querySelector('#minutes'),
        timerSeconds = document.querySelector('#seconds'),
        timerDay = document.querySelector('#newYear');

    function getTimeRemaining(){
    let dateStop = new Date(deadline).getTime(),
        dateNow = new Date().getTime(),
        timeRemaining = (dateStop - dateNow) / 1000,
        seconds = Math.floor(timeRemaining % 60),
        minutes = Math.floor((timeRemaining / 60) % 60),
        hours = Math.floor(timeRemaining / 60 / 60),
        days = Math.floor(timeRemaining / 60 / 60/ 24); 
        return {timeRemaining, hours, minutes, seconds, days};
    }
            

    function updateClock(){
        let timer = getTimeRemaining();

                // timerHours.textContent = ("0" + timer.hours).slice(-2);
                // timerMinutes.textContent = ("0" + timer.minutes).slice(-2);
                // timerSeconds.textContent = ("0" + timer.seconds).slice(-2);
        timerDay.textContent = "До нового года осталось " + ("0" + timer.days).slice(-2) + " дней";
                
        if (timer.timeRemaining > 0) {
                updateClockInterval;
            } else {
                clearInterval(updateClockInterval);
                timerHours.textContent="00";
                timerMinutes.textContent="00";
                timerSeconds.textContent="00";
                timerDay.textContent="00";
            }  
                
    }
    const updateClockInterval = setInterval(updateClock, 1000);
    updateClock();
    }

    countTimer('31 december 2020');
});




