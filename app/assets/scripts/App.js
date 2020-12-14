import { omit } from 'lodash';
import '../styles/styles.css';
import MobileMenu from './modules/Mobile-menu';

let mobileMenu = new MobileMenu();

if(module.hot) {
    module.hot.accept()
}

