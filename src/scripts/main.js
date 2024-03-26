document.addEventListener('DOMContentLoaded', function(){
    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', function(){
        const posAtual = window.scrollY;

        if (posAtual > alturaHero) {
            ocultaElementosDoHeader();
        } else {
            exibeElementosDoHeader();
        }
    })
})

function ocultaElementosDoHeader(){
    const header = document.querySelector('header');
    header.classList.remove('header__links--is-hidden');
}

function exibeElementosDoHeader(){
    const header = document.querySelector('header');
    header.classList.add('header__links--is-hidden');
}