//Alert
window.alert("Meu primeiro alert Descomplica!");

//Confirm (muito utilizado em carrinhos de compra, por exemplo) é uma janela que pede ao usuário que confirme se ele quer ou não realizar uma ação
window.confirm("Meu primeiro confirm Descomplica.");

//Prompt - tudo que o usuário digita aqui é inicialmente entendido como String
var nome = window.prompt("Digite seu nome e aperte 'Enter': ");
var sobrenome = window.prompt("Digite seu sobrenome e aperte 'Enter': ");
window.alert("Seja bem-vindo(a), " + nome.toUpperCase() + " " + sobrenome.toUpperCase() + "! Vamos somar 2 números?");
//Vai ser utilizado o parseFloat (poderia ser parseInt para inteiros) para "avisar" ao prompt que será inserido um número e não uma String:
var number1 = Number.parseFloat(window.prompt("Digite um número e aperter 'Ok'"));
var number2 = Number.parseFloat(window.prompt("Digite outro número e aperter 'Ok'"));
var soma = number1 + number2;
window.alert("A soma total dos números é: " + soma + ".");

//Function e Confirm
function confirma(){
    let confirmacao = window.confirm("O resultado da soma está correto, " + nome.toUpperCase() + "?");
    if(confirmacao){
        window.alert("O computador manda muito bem, né?");
    }else{
        window.alert("Poxa, o computador deve ter bugado...");
    }
}

//Para garantir que o código seja executado após a carga completa da página:
document.addEventListener("DOMContentLoaded", function () {
//Selecionando elementos do DOM por meio de tags HTML
//Aqui vamos transformar cada elemento li:
elemento00 = document.getElementsByTagName("li")[0];
elemento00.style.color = "purple";

elemento01 = document.getElementsByTagName("li")[1];
elemento01.style.background = "lightgray";

elemento02 = document.getElementsByTagName("li")[2];
elemento02.innerText = "SpringBoot.";

elementoDivId = document.getElementById("content01");
elementoDivId.innerHTML = "<p> Estou colocando a tag 'p' dentro da div. </p>";

elementoDivName = document.getElementsByName("divcontent02")[0];
elementoDivName.style.color = "violet";
elementoDivName.innerText = "Estou colocando mais um texto na Div 01 (getting element by Name).";

elementoDivClass = document.getElementsByClassName("mensagem")[1];
elementoDivClass.style.background = "darkviolet";
elementoDivClass.innerText = "Estou colocando mais um texto na Div 02 (getting element by Class).";

//Aqui vamos selecionar o elemento pelo nome da tag e pela classe:
elementoSpanClass = document.querySelector("span.novo");
elementoSpanClass.style.color = "pink";

//Aqui vamos selecionar o elemento pelo id:
elementoSpanId = document.querySelector("#novospan");
elementoSpanId.style.background = "orange";

//Selecionando a partir de elementos que possuem uma mesma classe:
elementoSeletor = document.querySelectorAll(".mensagem")[2];
elementoSeletor.style.textTransform = "uppercase";

});
