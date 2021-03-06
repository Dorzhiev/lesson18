const showTime = () => {

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
    if (hour >= 24 && hour < 6) {
        welcome = "доброй ночи";
    } else if (hour >= 6 && hour < 12) {
        welcome = "доброе утро";
    } else if (hour >= 12 && hour < 18) {
         welcome = "добрый день";
    }  else if  (hour >= 18 && hour < 24) {
        welcome = "вечер в хату";
    }

welcome1.textContent = welcome;


const hours = document.querySelector('#hours');
hours.textContent = "Текущее вермя: " + hour;

const minutes = document.querySelector('#minute');
minutes.textContent = minute;

const seconds = document.querySelector('#second');
    if (hour > 12 && hour < 24) {
        seconds.textContent = second + " PM";
    } else {
        seconds.textContent = second + " AM";
    }



const date = document.querySelector('#day');
const realDate = new Date();
const day = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const dayOfWeeek = "Сегодня: " + day[realDate.getDay()];
date.textContent = dayOfWeeek;

function countTimer(deadline){
    let timerDay = document.querySelector('#newYear');

    function getTimeRemaining(){
    let dateStop = new Date(deadline).getTime(),
        dateNow = new Date().getTime(),
        timeRemaining = (dateStop - dateNow) / 1000,
        days = Math.floor(timeRemaining / 60 / 60/ 24); 
        return {timeRemaining, days};
    }
    function updateClock(){
        let timer = getTimeRemaining();
        timerDay.textContent = "До нового года осталось " + ("0" + timer.days).slice(-2) + " дней";
                
        if (timer.timeRemaining > 0) {
                updateClockInterval;
            } else {
                clearInterval(updateClockInterval);
                timerDay.textContent="00";
            }  
                
    }
    const updateClockInterval = setInterval(updateClock, 1000);
    updateClock();
    }
    countTimer('31 december 2020');
}
setInterval(showTime, 1000);




