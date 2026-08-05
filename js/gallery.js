export function gallery(data) {
    return `
    <section id="gallery" class="gallery">
        <div class="gallery__container container">
            <h2 class="gallery__title">Galéria</h2>
            <p class="gallery__subtitle">Pozrite si našu prácu</p>
            <div class="gallery__list">
                ${data.gallery.map(item => `
                    <div class="gallery__item">
                        <img src="${item.image}" alt="${item.title}">
                    </div>
                `).join('')}
            </div>
        </div>
    </section>
    `
}