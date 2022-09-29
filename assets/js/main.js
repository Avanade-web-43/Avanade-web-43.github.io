/*
Existem 7 tipos de erros em JavaScript
-----------------------------------------------------
SyntaxError - escreveu alguma coisa errado
ReferenceError - chamou alguém que não existe
TypeError - erro de tipo é uma violação do JavaScript
EvalError - evite o uso do comando eval, mas se ele for inválido
RangeError - erro de intervalo, loop infinito ou chamadas inúmeras de recursividade
URIError - erro referente a chamadas externas. Uniform Resource Identifier
InternalError - erro interno do JavaScript, falta de memória, processador
*/

escreve("Museu do Ipiranga");
//Função nominal
function escreve(x){ //sofre hoisting
    console.log(x);
}

function mudaTitulo(novoTitulo){
    document.querySelector("h1").innerHTML = "<i>" + novoTitulo + "</i>";
}
mudaTitulo("Vai Santos!")

//Expressão de função - function expression
// Função anômima - que não tem nome. Precisa de um contexto
const mudaTitulo2 = function(target, novoTitulo){
    document.querySelector(target).innerHTML = novoTitulo;
};

mudaTitulo2("h2", "O grande campeão");

const relogio = () => {
    const date = new Date();
    mudaTitulo2("h2", date.toLocaleTimeString());
};

setInterval(relogio, 1000);

const frases = ["Um banco para 20 milhões de pessoas", "C6 Bank o seu banco", "Cartão sem anuidade"];

const mudaFrase = (target, frases, tempo) => {
    let total = 0;
    setInterval(()=>{
        document.querySelector(target).innerHTML = frases[total >= frases.length - 1 ? 0 : total += 1];
    }, tempo * 1000);
};

mudaFrase("h1", frases, 4);