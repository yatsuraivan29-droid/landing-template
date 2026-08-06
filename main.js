// ===== Імпорт компонентів =====
import { header } from "./js/header.js";
import { hero } from "./js/hero.js";
import { about } from "./js/about.js";
import { services } from "./js/services.js";
import { gallery } from "./js/gallery.js";
import { reviews } from "./js/reviews.js";
import { contacts } from "./js/contacts.js";
import { footer } from "./js/footer.js";
import { data } from "./js/data.js";

// ===== DOM =====
const app = document.getElementById('app');



// ===== Рендер =====
function render(){
    app.innerHTML =`
    ${header(data)}
    ${hero(data)}
    ${about(data)}
    ${services(data)}
    ${gallery(data)}
    ${reviews(data)}
    ${contacts(data)}
    ${footer(data)}
`
};
// ===== Запуск =====
render()
openMenu()

function openMenu(){
const burger = document.getElementById('burger');
const hederMenu = document.getElementById('hederMenu');
let burgerLisen = false

burger.addEventListener('click', (event) => {
    if (burger.contains(event.target)){
        if (!burgerLisen){
        burgerLisen = !burgerLisen
        burger.classList.add('burger-menu-open')
        hederMenu.classList.add('header__menu-open')
    } else {
        burgerLisen = !burgerLisen
        burger.classList.remove('burger-menu-open')
        hederMenu.classList.remove('header__menu-open')
    }
    }
});

}