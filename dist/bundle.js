(()=>{"use strict";function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?t(e,n):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var n,o,r,c,a,i;(function(e){var t=document.querySelector("#timer-hours"),n=document.querySelector("#timer-minutes"),o=document.querySelector("#timer-seconds");function r(){var e,r,a,i=(e=(new Date("20 december 2020").getTime()-(new Date).getTime())/1e3,r=Math.floor(e%60),a=Math.floor(e/60%60),{timeRemaining:e,hours:Math.floor(e/60/60),minutes:a,seconds:r});t.textContent=("0"+i.hours).slice(-2),n.textContent=("0"+i.minutes).slice(-2),o.textContent=("0"+i.seconds).slice(-2),i.timeRemaining>0||(clearInterval(c),t.textContent="00",n.textContent="00",o.textContent="00")}var c=setInterval(r,1e3);r()})(),c=document.querySelector(".menu"),a=document.querySelector("menu"),i=function(){a.classList.toggle("active-menu")},c.addEventListener("click",i),a.addEventListener("click",(function(e){e.target,"A"!==e.target.tagName||i()})),function(){var e=document.querySelectorAll(".popup-btn"),t=document.querySelector(".popup");e.forEach((function(e){e.addEventListener("click",(function(){t.style.display="block"}))})),t.addEventListener("click",(function(e){var n=e.target;n.classList.contains("popup-close")?t.style.display="none":(n=n.closest(".popup-content"))||(t.style.display="none")}));var n=document.querySelector(".popup-content"),o=document.querySelector(".popup");e.forEach((function(e){e.addEventListener("click",(function(){!function(){if(o.style.display="block",screen.width>768)var e=Date.now(),t=setInterval((function(){var n=Date.now()-e;n>=800?clearInterval(t):r(n)})),r=function(e){var t=+getComputedStyle(n).width.split("px")[0];t=-t/2+50+"px",n.style.left=e/16+"%",n.style.marginLeft=t}}()}))}))}(),n=document.querySelector(".service-header"),o=n.querySelectorAll(".service-header-tab"),r=document.querySelectorAll(".service-tab"),n.addEventListener("click",(function(e){var t=e.target;(t=t.closest(".service-header-tab"))&&o.forEach((function(e,n){e===t&&function(e){for(var t=0;t<r.length;t++)e===t?(o[t].classList.add("active"),r[t].classList.remove("d-none")):(o[t].classList.remove("active"),r[t].classList.add("d-none"))}(n)}))})),function(){var e,t=document.querySelectorAll(".portfolio-item"),n=(document.querySelectorAll(".portfolio-btn"),document.querySelector(".portfolio-content")),o=document.querySelector(".portfolio-dots"),r=0;t.forEach((function(e,t){var n=document.createElement("li");n.classList.add("dot"),0===t&&n.classList.add("dot-active"),o.append(n)}));var c=document.querySelectorAll(".dot"),a=function(e,t,n){e[t].classList.remove(n)},i=function(e,t,n){e[t].classList.add(n)},u=function(){a(t,r,"portfolio-item-active"),a(c,r,"dot-active"),++r>=t.length&&(r=0),i(t,r,"portfolio-item-active"),i(c,r,"dot-active")},l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3;e=setInterval(u,t)};n.addEventListener("click",(function(e){e.preventDefault();var n=e.target;n.matches(".portfolio-btn, .dot")&&(a(t,r,"portfolio-item-active"),a(c,r,"dot-active"),n.matches("#arrow-right")?r++:n.matches("#arrow-left")?r--:n.matches(".dot")&&c.forEach((function(e,t){e===n&&(r=t)})),r>=t.length&&(r=0),r<0&&(r=t.length-1),i(t,r,"portfolio-item-active"),i(c,r,"dot-active"))})),n.addEventListener("mouseover",(function(t){(t.target.matches(".portfolio-btn")||t.target.matches(".dot"))&&clearInterval(e)})),n.addEventListener("mouseout",(function(e){(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&l()})),l(1500);var s=document.querySelector(".command"),d=function(e){var t=e.target;if(t.matches("img")){var n=t.src,o=t.dataset.img;t.dataset.img=n,t.src=o}};s.addEventListener("mouseover",d),s.addEventListener("mouseout",d),document.querySelector(".calc-block").addEventListener("input",(function(e){var t=e.target;t.matches("input")&&(t.value=t.value.replace(/\D/g,""))}))}(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,t=document.querySelector(".calc-block"),n=document.querySelector(".calc-type"),o=document.querySelector(".calc-square"),r=document.querySelector(".calc-day"),c=document.querySelector(".calc-count"),a=document.getElementById("total"),i=function(){var t=0,i=1,u=1,l=n.options[n.selectedIndex].value,s=+o.value;c.value>1&&(i+=(c.value-1)/10),r.value&&r.value<5?u*=2:r.value&&r.value<10&&(u*=1.5),l&&s&&(t=e*l*s*i*u),a.textContent=Math.floor(t)};t.addEventListener("change",(function(e){var t=e.target;(t.matches("select")||t.matches("input"))&&i()}))}(100),function(){var t=document.querySelectorAll("form"),n=document.createElement("div");n.textContent="тут будет сообщение!",n.style.cssText="font-size: 2rem;",n.style.cssText="font-size: 2rem; color: white;",t.forEach((function(t){return t.addEventListener("submit",(function(r){r.preventDefault(),t.appendChild(n),n.textContent="Загрузка";var c=new FormData(t),a={};c.forEach((function(e,t){a[t]=e}));var i=document.querySelector(".popup");o(a).then((function(t){if(200!==t.status)throw new Error("status network not 200");n.textContent="Спасибо! Мы скоро с вами свяжемся",setTimeout((function(){i.style.display="none",n.textContent="",e(document.querySelectorAll("input")).forEach((function(e){return e.value=""}))}),3e3)}),(function(t){n.textContent="что то пошло не так..",setTimeout((function(){i.style.display="none",n.textContent="",e(document.querySelectorAll("input")).forEach((function(e){return e.value=""}))}),3e3)}))}))}));var o=function(e){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e),credentials:"include",cache:"default"})};document.querySelectorAll(".form-phone").forEach((function(e){e.addEventListener("input",(function(e){var t=e.target;t.matches("input")&&(t.value=t.value.replace(/(?!^\+)\D/g,""))}))})),document.querySelectorAll(".form-name").forEach((function(e){e.addEventListener("input",(function(e){var t=e.target;t.matches("input")&&(t.value=t.value.replace(/(?![а-яА-Я])\D|[0-9]/g,""))}))})),document.querySelector(".mess").addEventListener("input",(function(e){var t=e.target;t.value=t.value.replace(/[^а-яА-Я\s\,\.\?\!\-\;\:]/g,"")}))}()})();