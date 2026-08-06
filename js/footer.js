export function footer(data) {
    return `
        <footer class="footer">
            <div class="footer__container container">
                <div class = "footer__content">
                    <a href="#" class="header__logo footer__logo">${data.company.logo}</a>
                    <p class = "footer__subtitle">Krása, ktorá zvýrazní vašu jedinečnosť.</p>
                </div>
                <div class="footer__contacts">
                    <a href="${data.company.phone}" class="footer__contact-link">${data.contacts.phone}</a>
                    <a href="mailto:${data.company.email}" class="footer__contact-link">${data.company.email}</a>
                </div>
                <p class="footer__text">© ${new Date().getFullYear()} ${data.company.name}. Beauty Salon. Všetky práva vyhradené..</p>
            </div>
        </footer>
    `
}