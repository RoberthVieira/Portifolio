const botaoVermais = document.querySelector('.btn_ampliar');
const habilidade = document.querySelectorAll('.esconder');

function clickVer (e) {

    let todosVisiveis = true;

    habilidade.forEach((elemento) => {
        if(elemento.classList.contains('esconder')) {
            elemento.classList.remove('esconder');
            elemento.classList.add('visivel')
            todosVisiveis = false
        } else {
            elemento.classList.add('esconder');
            elemento.classList.remove('visivel');
        }
    })

    botaoVermais.innerHTML = todosVisiveis ? 'Ver mais' : 'Ver menos';
}

function eventoAoClicar (elemento) {
    elemento.addEventListener('click', clickVer)
}

eventoAoClicar(botaoVermais);