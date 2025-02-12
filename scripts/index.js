//Efeito digitação
const texto = "Estudante de Análise e Desenvolvimento de Sistemas e estou em busca da minha primeira experiência como desenvolvedor Front-end.";
let i = 0;
const digitando = document.querySelector('.digitando');

function escrever () {
    if(i < texto.length) {
        digitando.innerHTML = texto.substring(0, i + 1) + '<span class="cursor"></span>';
        i++;
        setTimeout(escrever, 12);
    };
};

escrever();
