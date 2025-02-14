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
    paragrafoDescricao.innerHTML = "HTML (HyperText Markup Language) é a linguagem usada para estruturar páginas web com elementos como textos, imagens, links, listas e tabelas. Ele utiliza tags para organizar o conteúdo de forma hierárquica.";
})
imgHtml.addEventListener('mouseout', () => {
    paragrafoDescricao.innerHTML= "Passe o mouse sobre uma tecnologia para saber mais sobre ela.";
});

imgCss.addEventListener('mouseover', () => {
    paragrafoDescricao.innerHTML = 'CSS (Cascading Style Sheets) é a linguagem usada para estilizar páginas web, definindo cores, fontes, tamanhos, espaçamentos e layouts. Ele permite personalizar a aparência dos elementos HTML e criar designs responsivos.';
});
imgCss.addEventListener('mouseout', () => {
    paragrafoDescricao.innerHTML= "Passe o mouse sobre uma tecnologia para saber mais sobre ela.";
});

imgJs.addEventListener('mouseover', () => {
    paragrafoDescricao.innerHTML = 'JavaScript é uma linguagem de programação usada para adicionar interatividade às páginas web. Ele permite manipular elementos HTML, responder a eventos do usuário e criar experiências dinâmicas.'
});
imgJs.addEventListener('mouseout', () => {
    paragrafoDescricao.innerHTML= "Passe o mouse sobre uma tecnologia para saber mais sobre ela.";
});

imgReact.addEventListener('mouseover', () => {
    paragrafoDescricao.innerHTML = 'React é uma biblioteca JavaScript para a criação de interfaces de usuário interativas e eficientes. Ele usa componentes reutilizáveis e um estado dinâmico para atualizar a página sem recarregá-la.';
});
imgReact.addEventListener('mouseout', () => {
    paragrafoDescricao.innerHTML= "Passe o mouse sobre uma tecnologia para saber mais sobre ela.";
});

imgGit.addEventListener('mouseover', () => {
    paragrafoDescricao.innerHTML = 'Git é um sistema de controle de versão distribuído que permite rastrear alterações no código, colaborar em projetos e reverter versões anteriores com facilidade.';
});
imgGit.addEventListener('mouseout', () => {
    paragrafoDescricao.innerHTML= "Passe o mouse sobre uma tecnologia para saber mais sobre ela.";
});
