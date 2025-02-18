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

const tecnologias = [
    { 
        classe: "img_html", 
        descricao: "HTML (HyperText Markup Language) é a linguagem usada para estruturar páginas web com elementos como textos, imagens, links, listas e tabelas. Ele utiliza tags para organizar o conteúdo de forma hierárquica." 
    },
    { 
        classe: "img_css", 
        descricao: "CSS (Cascading Style Sheets) é a linguagem usada para estilizar páginas web, definindo cores, fontes, tamanhos, espaçamentos e layouts. Ele permite personalizar a aparência dos elementos HTML e criar designs responsivos." 
    },
    { 
        classe: "img_js", 
        descricao: "JavaScript é uma linguagem de programação usada para adicionar interatividade às páginas web. Ele permite manipular elementos HTML, responder a eventos do usuário e criar experiências dinâmicas." 
    },
    { 
        classe: "img_react", 
        descricao: "React é uma biblioteca JavaScript para a criação de interfaces de usuário interativas e eficientes. Ele usa componentes reutilizáveis e um estado dinâmico para atualizar a página sem recarregá-la." 
    },
    { 
        classe: "img_git", 
        descricao: "Git é um sistema de controle de versão distribuído que permite rastrear alterações no código, colaborar em projetos e reverter versões anteriores com facilidade." 
    }
];

tecnologias.forEach((tecnologia) => {
    const elemento = document.querySelector(`.${tecnologia.classe}`);

    elemento.addEventListener("mouseover", () => {
        paragrafoDescricao.innerHTML = tecnologia.descricao;
    });

    elemento.addEventListener("mouseout", () => {
        paragrafoDescricao.innerHTML = "Aqui estão algumas das tecnologias e linguagens com as quais tenho conhecimento. Passe o mouse sobre uma delas para mais detalhes.";
    });
});
