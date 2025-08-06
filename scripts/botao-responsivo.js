// Armazenar a classe que gerencia o botão
const menuResponsivo = document.querySelector('.menu-responsive');

// Armazenar a classe que gerencia a barra nav responsiva
const nav = document.querySelector('.nav-responsive');

// Quando algo acontecer com essa variável adicionar um evento para essa variável
menuResponsivo.addEventListener('click', () => {
    mudarMenu();
});

function mudarMenu() {
    // Se for apertado o botão vai colocar ou retirar a classe 'change'
    menuResponsivo.classList.toggle('change');
    nav.classList.toggle("active");

    // Garantir que o efeito blur seja reiniciado
    nav.style.backdropFilter = 'none'; // Reseta o blur
    setTimeout(() => {
        nav.style.backdropFilter = ''; // Permite que o CSS reassuma o controle
    }, 0);

    // Fazer uma validação se tiver a change vai colocar o display block, se não vai ser none
    if (menuResponsivo.classList.contains('change')) {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }

    document.querySelectorAll('.nav-responsive a').forEach(link => {
        link.addEventListener('click', () => {
            menuResponsivo.classList.remove('change');
            nav.classList.remove("active");
            nav.style.display = 'none';
        });
    });
}