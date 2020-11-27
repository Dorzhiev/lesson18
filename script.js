

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
    const popup = document.querySelector('.popup'),
    popupBtn = document.querySelectorAll('.popup-btn'),
    popUpClose = document.querySelector('.popup-close');

    popupBtn.forEach((elem) => {
        elem.addEventListener('click', () => {
            popup.style.display = 'block';
        });
    });

    popUpClose.addEventListener('click', () => {
        popup.style.display = 'none';
    })
};
togglePopUp();

//табы

const tabs = () => {
    const tabHeader = document.querySelector('.service-header'),
    tab = tabHeader.querySelector('.service-header-tab'),
    tabContent = document.querySelector('.service-tab');
    // document.querySelector('.popup-content').style.opacity="0.5";
};
tabs();

let popup = document.querySelector('.popup-content'),
count = 0;

let opacityPopup = function(){
	count++;
	popup.style.opacity = count +'%';
	if(count < 100) {
		setTimeout(opacityPopup, 50);
	}
	
};
opacityPopup();
