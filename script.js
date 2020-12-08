

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

    countTimer('30 november 2020');
});

const toggleMenu = () =>{
    const btnMenu = document.querySelector('.menu'),
        menu = document.querySelector('menu');

    const handlerMenu = () => {
        menu.classList.toggle('active-menu');
    };

   btnMenu.addEventListener('click', handlerMenu);

    menu.addEventListener('click', (event) => {
        let target = event.target;
        if(event.target.tagName === 'A'){
            handlerMenu();
            return;
        }

    });
    
 
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


//табы

const tabs = () => {
    const tabHeader = document.querySelector('.service-header'),
    tab = tabHeader.querySelectorAll('.service-header-tab'),
    tabContent = document.querySelectorAll('.service-tab');

const toggleTabContent = (index) => {
    for(let i = 0; i < tabContent.length; i++){
        if (index === i){
            tab[i].classList.add('active');
            tabContent[i].classList.remove('d-none');
        } else {
            tab[i].classList.remove('active');
            tabContent[i].classList.add('d-none');
        }
    }
};
    tabHeader.addEventListener('click', (event) => {
        let target = event.target;
            target = target.closest('.service-header-tab');
        if (target){
            tab.forEach((item, i) => {
                if(item === target){
                    toggleTabContent(i);
                }
            });
        }
    });

};
tabs();

////слайдер

const slider = () => {
    const slide = document.querySelectorAll('.portfolio-item'),
        btn = document.querySelectorAll('.portfolio-btn'),
        slider = document.querySelector('.portfolio-content'),
        portfolioDots = document.querySelector('.portfolio-dots');

    let currentSlide = 0,
        interval;

    slide.forEach(function(item, i) {
     let li = document.createElement('li');
            li.classList.add('dot');
            if (i === 0) {
                li.classList.add('dot-active');
            }
            portfolioDots.append(li);
    });
    
    const dot = document.querySelectorAll('.dot');

    const prevSlide = (elem, index, strClass) => {
        elem[index].classList.remove(strClass);
    };

    const nextSlide = (elem, index, strClass) => {
        elem[index].classList.add(strClass);
    };

    const autoPlaySlide = () => {
        prevSlide(slide, currentSlide, 'portfolio-item-active');
        prevSlide(dot, currentSlide, 'dot-active');
        currentSlide++;
        if(currentSlide >= slide.length){
            currentSlide = 0;
        }
        nextSlide(slide, currentSlide, 'portfolio-item-active');
        nextSlide(dot, currentSlide, 'dot-active');
    };

    const startSlide = (time = 3000) => {
        interval = setInterval(autoPlaySlide, time);
    };

    const stopSlide = () => {
        clearInterval(interval);
    };

    slider.addEventListener('click', (event) => {
        event.preventDefault();
        let target = event.target;

        if(!target.matches('.portfolio-btn, .dot')){
            return;
        }

        prevSlide(slide, currentSlide, 'portfolio-item-active');
        prevSlide(dot, currentSlide, 'dot-active');
        
        if(target.matches('#arrow-right')){
            currentSlide++;
        } else if (target.matches('#arrow-left')){
            currentSlide--;
        } else if (target.matches('.dot')){
            dot.forEach((elem, index) => {
                if (elem === target){
                    currentSlide = index;
                }
            });
        }
        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }
        if (currentSlide < 0) {
            currentSlide = slide.length - 1;
        }
        nextSlide(slide, currentSlide, 'portfolio-item-active');
        nextSlide(dot, currentSlide, 'dot-active');
    });

    slider.addEventListener('mouseover', (event) => {
        if (event.target.matches('.portfolio-btn') ||
        event.target.matches('.dot')){
            stopSlide();
        }
    });

     slider.addEventListener('mouseout', (event) => {
        if (event.target.matches('.portfolio-btn') ||
        event.target.matches('.dot')){
            startSlide();
        }
    });
    startSlide(1500);
};

slider();

/// Наша команда 

const command = document.querySelector('.command');

const toggleImg = event => {
    const target = event.target; 

    if (target.matches('img')) {
        let imgSrc = target.src,
        dataSetImg = target.dataset.img;

        // меняем местами значения

        target.dataset.img = imgSrc;
        target.src = dataSetImg;
    }
}

command.addEventListener('mouseover', toggleImg); 
command.addEventListener('mouseout', toggleImg);



////калькулятор

const calcBlock  = document.querySelector('.calc-block');

// calcBlock.addEventListener('input', () => {
//    target.matches('input') = console.log();//input.value.replace(/\D/g, '');
// });
calcBlock.addEventListener('input', (event) => {
	const target = event.target;
    // input.value = input.value.replace(/\D/g, '');
    if (target.matches('input')) {
      console.log(target.value.replace(/\D/g, '')); 
    }
});
