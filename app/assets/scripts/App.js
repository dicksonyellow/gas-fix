import '../styles/styles.css';
import MobileMenu from './modules/Mobile-menu';
import Testimonials from './modules/Testimonials'

let mobileMenu = new MobileMenu();
let testimonials = new Testimonials();

if(module.hot) {
    module.hot.accept()
}

