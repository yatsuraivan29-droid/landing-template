// services.js
export function services(data) {
    return `
    <section id="services" class="services">
        <div class="serveces__container container">
            <h2 class="services__title">Naše služby</h2>
            <p class="services__subtitle">Krátky popis služieb</p>
            <div class="services__list">
                ${data.services.map(service => `
                    <div class="services__item">
                        <img src="${service.image}" alt="${service.title}" class="services__image">
                        <h3 class="services__item-title">${service.title}</h3>
                        <p class="services__item-description">${service.description}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>
    `;
}
