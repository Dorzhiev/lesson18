

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

    countTimer('26 november 2020');
});

const toggleMenu = () =>{
    const btnMenu = document.querySelector('.menu'),
        menu = document.querySelector('menu'),
        closeBtn = document.querySelector('.close-btn'),
        menuItems = menu.querySelectorAll('ul>li');
    
    const handlerMenu = () => {

        menu.classList.toggle('active-menu');

        // if(!menu.style.transform || menu.style.transform === `translate(-100%)`){
        //     menu.style.transform = `translate(0)`;
        // } else {
        //     menu.style.transform = `translate(-100%)`;
        // }
    };

    btnMenu.addEventListener('click', handlerMenu);
    closeBtn.addEventListener('click', handlerMenu);

    menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu));
};
toggleMenu();

// popup

const togglePopUp = () => {
    const popupBtn = document.querySelectorAll('.popup-btn'),
    popup = document.querySelector('.popup');


    popupBtn.forEach((elem) => {
        elem.addEventListener('click', () => {
            popup.style.display = 'block';
        });
    });

    popup.addEventListener('click', (event)=>{
        let target = event.target;

        if(target.classList.contains('popup-close')){
             popup.style.display = 'none';
        } else {
            target = target.closest('.popup-content');
        if(!target){
            popup.style.display = 'none';
        }    
      }
    });
};
togglePopUp();

let popupContent = document.querySelector('.popup-content'),
    popUp = document.querySelector('.popup'),
    popupBtn = document.querySelectorAll('.popup-btn'),
    count = 0;

const opacityPopup = () => {
    popUp.style.display = 'block'; // показать попап
    if (screen.width > 768) { // если ширина экрана больше заданного числа, то запустить анимацию
        let start = Date.now(); // получить стартовое время анимации (в момент клика)
        let timer = setInterval(() => {
            let timePassed = Date.now() - start; // запуск таймера, отнять от текущего реального времени стартовое время, после клика
            if (timePassed >= 800) {
                clearInterval(timer); // если время достигло определенного числа удалить setInterval 
                return;
            }
            draw(timePassed); // отрисовка анимации 
        });
        let draw = (timePassed) => {
            let wContent = +getComputedStyle(popupContent).width.split('px')[0]; // получить стили попап контента (блок с самой формой, а не вся обёртка, с попап )
            wContent = -wContent / 2 + 50 + 'px'; // данные для центрирования по горизонтали
            popupContent.style.left = timePassed / 16 + '%'; // центрирование по горизонтали
            popupContent.style.marginLeft = wContent; // центрирование по горизонтали
        };
    }
};

 popupBtn.forEach((elem) => {
        elem.addEventListener('click', () => {
             opacityPopup();
        });
    });


