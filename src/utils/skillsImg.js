import angular from '../assets/images/svg/angular.svg'
import bootstrap from '../assets/images/svg/bootstrap.svg'
import css from '../assets/images/svg/css.svg'
import html from '../assets/images/svg/html.svg'
import javascript from '../assets/images/svg/javascript.svg'
import jquery from '../assets/images/svg/jquery.svg'
import json from '../assets/images/svg/json.svg'
import nodejs from '../assets/images/svg/nodejs.svg'
//import node from '../assets/images/svg/node.png'
import php from '../assets/images/svg/php.svg'
import react from '../assets/images/svg/react.svg'
import typescript from '../assets/images/svg/typescript.svg'
import vue from '../assets/images/svg/vue.svg'
import wordpress from '../assets/images/svg/wordpress.svg'


export const skillsImg = (skills) => {
    const skillsID = skills.toLowerCase();
    switch (skillsID) {
        case 'angular':
            return angular;
        case 'bootstrap':
            return bootstrap;
        case 'css':
            return css;
        case 'html':
            return html;
        case 'javascript':
            return javascript;
        case 'jquery':
            return jquery;
        case 'json':
            return json;
        case 'nodejs':
            return nodejs;
        case 'php':
            return php;
        case 'react':
            return react;
        case 'typescript':
            return typescript;
        case 'vue':
            return vue;
        case 'wordpress':
            return wordpress;
        default:
            break;
    }
}