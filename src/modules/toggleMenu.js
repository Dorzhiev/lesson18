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

export default toggleMenu;