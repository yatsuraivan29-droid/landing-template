export function header(data) {
    return `
    <header class="header">
        <div class="container">
            <div class="header__inner">
                <div id = "burger" class="burger-menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <a href="#" class="header__logo">${data.company.logo}</a>
                <nav id = "hederMenu" class="header__menu">
                    ${data.header.navigation.map(item => `<a href="${item.href}" class="header__link">${item.title}</a>`).join('')}
                </nav>
                <a href="${data.company.phone}" class="button header__button">${data.header.button.title}</a>
            </div>
        </div>
    </header>
    `
}