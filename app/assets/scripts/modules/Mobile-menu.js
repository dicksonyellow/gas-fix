
class MobileMenu {
    constructor() {
        this.menuIcon = document.querySelector('.site-header__menu-icon')
        this.navContent = document.querySelector('.site-header__menu-content')
        this.navMenu = document.querySelector('.site-header__nav-menu')
        this.events()
        this.headerBtns = document.querySelector('.site-header__btns')
    }

    events() {
        this.menuIcon.addEventListener('click', () => this.toggleTheMenu())
    }

    toggleTheMenu() {
        this.navContent.classList.toggle('site-header__menu-content--vissible')
        this.navMenu.classList.toggle('site-header__nav-menu--vissible')
        this.headerBtns.classList.toggle('site-header__btns--vissible')
        this.menuIcon.classList.toggle('site-header__menu-icon--close-x')
    }
} 

export default MobileMenu