'use strict';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import tabs from './modules/tabs';
import slider from './modules/slider';
import calc from './modules/calc';
import sendForm from './modules/sendForm';

//timer
countTimer('20 december 2020');
//menu
toggleMenu();
// popup
togglePopUp();
//табы
tabs();
////слайдер
slider();
////калькулятор
calc(100);
/////send-ajax-form
sendForm();