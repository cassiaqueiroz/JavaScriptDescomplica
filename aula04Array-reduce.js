var valores = [8,1,7,2,9];
console.log(valores[0]);

//Imprimindo os elementos do array
for (var posicao = 0; posicao < valores.length; posicao++){
    console.log(`Posição: ${posicao}; Valor: ${valores[posicao]}.`);
};

//Calculando a média de todos os números de um array:
var soma = 0;
for (var posicao = 0; posicao < valores.length; posicao++){
    soma += valores[posicao];
};
var media = soma/valores.length;
console.log(media);

//Localizando o maior valor dentro do array:
//O operador de propagação (...) passa os elementos do array diretamente para a função Math.max
var maiorValor = Math.max(...valores); 
console.log(`O maior valor do array é: ${maiorValor}.`);

//Outras formas de declarar array:

var instrumentos = [];
instrumentos[0] = "Bateria";
instrumentos[1] = "Guitarra";

var ritmos = new Array("Blues", "Rhythm & Blues", "Flamenco");

//Imprimindo a palavra com maior quantidade de letras:
var maiorPalavra = ritmos.reduce((biggest, rhythm ) => (rhythm.length > biggest.length ? rhythm : biggest), "");
console.log(`A maior palavra é: ${maiorPalavra}.`);

//Reduce para iterar (poderia usar "for" para isso também
var total = valores.reduce(function(total,numero){
  return total + numero;
}, 0);
console.log(total);

/*
Reduce é um método que percorre um array.  
Métodos são funções associadas a objetos, 
quando uma função é associada a um objeto, ela é chamada de método desse objeto.
Função é um bloco de código que pode ser chamado em vários momentos de um grande código, 
sem que seja preciso reescrever todo esse bloco.
O reduce permite reduzir (ou acumular) os elementos de um array a um único valor
(biggest, rhythm) são os parâmetros estabelecidos no caso acima.
Representação do valor acumulado: biggest; representação de cada elemento do array: rhythm.
(rhythm.length > biggest.length ? rhythm : biggest) compara o comprimento da palavra atual com a acumulada e guarda a mais longa.
Se essa condição for verdadeira (comprimento da palavra atual maior do que o da acumulada), 
a expressão retorna o valor à esquerda de ":" (ou seja, rhythm). 
Se a condição for falsa (comprimento da palavra atual não é maior do que o da acumulada), 
a expressão retorna o valor à direita de ":" (ou seja, biggest).
"" é o valor inicial da maior palavra, que começa vazio.
Sobre "=>":
Função Tradicional:
function soma(a, b) {
  return a + b;
}
Função de Seta:
const soma = (a, b) => a + b;
*/

