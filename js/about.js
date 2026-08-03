export function about(data) {
    return `
        <section class = "about" id="about">
            <div class="about__container container">
                <div class="about__image">
                    <img src="${data.about.image}" alt="About Image">
                </div>
                <div class="about__content">                
                    <h2 class="about__title">${data.about.title}</h2>
                    <p class="about__subtitle">${data.about.description}</p>
                    <ul class="about__advantages">
                        ${data.about.Advantages.map(advantage => `<li class = "about__advantage">${advantage}</li>`).join('')}
                    </ul>
                </div>
            </div>
        </section>
    `
}