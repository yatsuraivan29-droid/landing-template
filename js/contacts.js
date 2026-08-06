export function contacts(data) {
    return `
        <section id="contacts" class="contacts">
            <div class="contacts__container container">
            <div class ="contact__content">
                <h2 class = "contact__title">${data.contacts.title}</h2>
                <p class = "contact__subtitle">${data.contacts.subtitle}</p>
                <div class="contact__info">
                    <div class="contact__info-item">
                        <h3 class="contact__info-title">Telefón:</h3>
                        <a href="${data.company.phone}" class="contact__info-text">${data.contacts.phone}</a>
                    </div>
                    <div class="contact__info-item">
                        <h3 class="contact__info-title">Email:</h3>
                        <a href="mailto:${data.company.email}" class="contact__info-text">${data.contacts.email}</a>
                    </div>
                    <div class="contact__info-item">
                        <h3 class="contact__info-title">Adresa:</h3>
                        <p class="contact__info-text">${data.contacts.address}</p>
                    </div>
                </div>
                <div class="contact__time">
                    <h3 class="contact__time-title">Otváracie hodiny</h3>
                    <p class="contact__time-text"><span>pondelok:</span> ${data.contacts.workTime.monday}</p>
                    <p class="contact__time-text"><span>utorok:</span> ${data.contacts.workTime.tuesday}</p>
                    <p class="contact__time-text"><span>streda:</span> ${data.contacts.workTime.wednesday}</p>
                    <p class="contact__time-text"><span>štvrtok:</span> ${data.contacts.workTime.thursday}</p>
                    <p class="contact__time-text"><span>piatok:</span> ${data.contacts.workTime.friday}</p>
                    <p class="contact__time-text"><span>sobota:</span> ${data.contacts.workTime.saturday}</p>
                    <p class="contact__time-text"><span>nedeľa:</span> ${data.contacts.workTime.sunday}</p>
                </div>
                <a href="${data.company.phone}" class="button contact__button">${data.header.button.title}</a>
                </div>
                <div class="contact__map">
                    ${data.contacts.map}
            </div>
        </section>
    `
}