// hero.js

export function hero(data) {
    return `
        <section id="hero">
            <div class="hero__container container">
                <div class="hero__content">
                    <h1 class="hero__title">${data.hero.title}</h1>
                    <p class="hero__subtitle">${data.hero.subtitle}</p> 
                    <a href="${data.company.phone}" class="button hero__btn">${data.header.button.title}</a>
                </div>
                <div class="hero__image">
                    <img src="${data.hero.image}" alt="Hero Image">
                </div>
            </div>
        </section>
    `;
}