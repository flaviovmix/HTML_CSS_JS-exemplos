let valorParallax = -0.43;
function atualizarValorParallax() {
    const largura = window.innerWidth;

    if (largura <= 480) {
        valorParallax = -0.03;
        console.log('até 480');
    } else if (largura >= 481 && largura <= 768) {
        valorParallax = -0.04;
        console.log('até 768');
    } else if (largura >= 769 && largura <= 1366) {
        valorParallax = -0.05;
        console.log('até 1366');
    } else if (largura >= 1367 && largura <= 1920) {
        valorParallax = -0.2;
        console.log('até 1920');
    } else if (largura >= 1921 && largura <= 2300) {
        valorParallax = -0.02;
        console.log('até 2300');
    } else if (largura >= 2301 && largura <= 2560) {
        valorParallax = -0.2;
        console.log('até 2560');
    } else if (largura >= 2561) {
        valorParallax = -0.2;
        console.log('até 2561');
    } else {
        valorParallax = -0.43;
        console.log('padrao');
    }

}

function aplicarParallax() {
    const scrollY = window.scrollY;
    const parallax = document.querySelector('.parallax');
    if (parallax) {
        parallax.style.backgroundPositionY = `${scrollY * valorParallax}px`;
    }
}

// Inicializa valores
atualizarValorParallax();
aplicarParallax(); // Aplica mesmo sem rolar

// Aplica ao rolar
window.addEventListener('scroll', aplicarParallax);

// Recalcula valor e aplica imediatamente ao redimensionar
window.addEventListener('resize', () => {
    atualizarValorParallax(); // Chama a função que já tem o console.log
    aplicarParallax(); // Aplica na hora com o novo valor
});


