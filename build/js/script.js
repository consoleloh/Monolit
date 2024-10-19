'use strict'
;(function(){
    const backMenu = menu => {
        const activeSublists = document.querySelectorAll('.nav__list--active');

        if (activeSublists.length){
            const activeSublist = activeSublists.item(activeSublists.length - 1);
            
            activeSublist.classList.remove('nav__list--active');
        } else {
            menu.classList.remove('header__nav--opened');
        }
    };

    const mobileMenuInit = () => {
        const controls = document.querySelectorAll('.nav__item--container');
        const controlNavBack = document.querySelector('.js-nav-back');
        const controlMenuOpen = document.querySelector('.js-menu-open');
        const menu = document.querySelector('.header__nav');
        
        let touchStartX = 0;
        let touchEndX = 0;

        controlMenuOpen.addEventListener('click', () => {
            menu.classList.add('header__nav--opened');
        });

        controls.forEach(control => {
            control.addEventListener('click', e => {
                const subList = e.target.querySelector('.nav__list--sub');
                subList.classList.add('nav__list--active');
            });
        });

        controlNavBack.addEventListener('click', () => {
            backMenu(menu);
        });
        
        document.addEventListener('touchstart', e => {
            touchStartX = e.changedTouches[0].screenX
        })
        
        document.addEventListener('touchend', e => {
            touchEndX = e.changedTouches[0].screenX;

            if (touchEndX > touchStartX + 35) {
                backMenu(menu);
            }
        })
    };

    mobileMenuInit();
})();