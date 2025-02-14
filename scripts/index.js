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


//Mouseover e mouseout
const imgHtml = document.querySelector('.img_html');
const imgCss= document.querySelector('.img_css');
const imgJs = document.querySelector('.img_js');
const imgReact = document.querySelector('.img_react');
const imgGit = document.querySelector('.img_git');
const paragrafoDescricao = document.querySelector('.descricao_tecnologias');

imgHtml.addEventListener("mouseover", () => {
    paragrafoDescricao.innerHTML = "HTML (HyperText Markup Language) é a linguagem usada para estruturar páginas web com elementos como textos, imagens, links, listas e tabelas. Ele utiliza tags para organizar o conteúdo de forma hierárquica."
})
imgHtml.addEventListener('mouseout', () => {
    paragrafoDescricao.innerHTML= "Passe o mouse sobre uma tecnologia para saber mais sobre ela.";
})