


//  let date = new Date();
// console.log(date.toISOString().substr(0, 10));

// console.log('год ' + date.getFullYear());
// console.log('месяц ' +( date.getMonth() + 1));
// console.log('День месяца ' + date.getDate());
// console.log('День недели ' + date.getDay());
// console.log('час ' + date.getHours());
// console.log('минуты ' + date.getMinutes());
// console.log('секунды ' + date.getSeconds());
// console.log('Миллисекунды ' + date.getMilliseconds());

window.addEventListener('DOMContentLoaded', function(){
    'use strict';

    function countTimer(deadline){
        let timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');

            function getTimeRemaining(){
            let dateStop = new Date(deadline).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow) / 1000,
                seconds = Math.floor(timeRemaining % 60),
                minutes = Math.floor((timeRemaining / 60) % 60),
                hours = Math.floor(timeRemaining / 60 / 60);
                return {timeRemaining, hours, minutes, seconds};
            }
            

            function updateClock(){
                let timer = getTimeRemaining();

                timerHours.textContent = ("0" + timer.hours).slice(-2);
                timerMinutes.textContent = ("0" + timer.minutes).slice(-2);
                timerSeconds.textContent = ("0" + timer.seconds).slice(-2);
                
                if (timer.timeRemaining > 0) {
                        updateClockInterval;
                    } else {
                        clearInterval(updateClockInterval);
                        timerHours.textContent="00";
                        timerMinutes.textContent="00";
                    timerSeconds.textContent="00";
                    }  
                
            }
            const updateClockInterval = setInterval(updateClock, 1000);
            updateClock();
    }

    countTimer('24 november 2020');
});



