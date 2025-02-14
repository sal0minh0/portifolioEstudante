// Transformar o menu em um menu responsivo

// Armazenar a classe que gerencia o botao
const menuResponsivo = document.querySelector('.menu-responsive');

// Quando algo acontecer com essa variável adicionar um evento para essa variável
menuResponsivo.addEventListener('click', () => {
    mudarMenu();
    console.log("Ok");
});

function mudarMenu() {
    // Armazenar a classe que gerencia a barra nav responsiva
    const nav = document.querySelector('.nav-responsive');

    // Se for apertado o botão vai colocar ou retirar a classe 'change'
    menuResponsivo.classList.toggle('change');

    // Fazer uma validação se tiver a change vai colocar o display block, se não vai ser none

    if (menuResponsivo.classList.contains('change')) {
        nav.style.display = 'block';
    
    } else {
        nav.style.display = 'none';
    }

}
