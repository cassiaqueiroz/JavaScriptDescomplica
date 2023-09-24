/*
//typeof

var x;
console.log(typeof(x));

var y = '';
console.log(typeof(y));

var z = null;
console.log(typeof(z));

var w = [];
console.log(typeof(w));

//!
console.log(!(10 > 5));

//Operador ternário
const number = 21;
const resultado = number % 2 == 0 ? 'Par' : 'Ímpar';
console.log(resultado); */

//Prática
/*
Criar um programa que receba informações sobre cada candidato, 
incluindo idade, experiência em anos, nível de educação 
e se o candidato possui um certificado. */

let rlSync = require("readline-sync");
const nome = rlSync.question("Qual o seu nome? \n");
const idade = rlSync.question("Qual sua idade? \n");
const anosExperiencia = rlSync.question(
  "Quantos anos de experiencia na erea voce tem ? \n"
);
const nivelEducativo = rlSync.question("Qual seu nivel de formacao? \n");
const quantidadeCertificados = rlSync.question(
  "Quantos certificados na area voce possui? \n"
);
const elegivel =
  idade > 18 &&
  anosExperiencia > 0 &&
  nivelEducativo === "Superior Completo" &&
  quantidadeCertificados > 1;
const mensagem = elegivel
  ? `Parabéns, ${nome}! Você encontra-se elegível para esta vaga!`
  : `Poxa, ${nome}... No momento você não se encontra elegível para esta vaga.`;
console.log(mensagem);
