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