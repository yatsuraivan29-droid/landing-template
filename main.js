// ===== Імпорт компонентів =====
import { hero } from "./js/hero.js";
import { about } from "./js/about.js";
import { services } from "./js/services.js";
import { gallery } from "./js/gallery.js";
import { reviews } from "./js/reviews.js";
import { contacts } from "./js/contacts.js";
import { footer } from "./js/footer.js";

// ===== DOM =====
const app = document.getElementById('app');

// ===== Рендер =====
function render(){
    app.innerHTML =`
    ${hero()}
    ${about()}
    ${services()}
    ${gallery()}
    ${reviews()}
    ${contacts()}
    ${footer()}
`
};
// ===== Запуск =====
render()