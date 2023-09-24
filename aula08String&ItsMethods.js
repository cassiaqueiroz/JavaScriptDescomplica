//Podemos usar aspas duplas ou simples
var nome = "Cássia";
let dogga = "Nina";
console.log(`${nome} tem uma dogguinha chamada ${dogga}.`);

//Formas de Concatenação
var sobrenome = " Queiroz";
var nomeCompleto = nome + sobrenome;
console.log(nomeCompleto + ".");
var nomeCompleto2 = nome.concat(sobrenome);
console.log(nomeCompleto2 + ".");
console.log((nome += sobrenome + "."));


//Método Lenght
var tamanho = nomeCompleto.length;
console.log(tamanho);

//Upper Case
var maiusculas = dogga.toLocaleUpperCase();
console.log(maiusculas);

//Index of
var jogo = "Rayo Vallecano vs Barcelona";
var posicao = jogo.indexOf("Barcelona");
console.log(posicao);


//Slice
var corte = jogo.slice(18);
console.log(corte);

//Criando uma substring (usando o método ".substring"):
var novaString = jogo.substring(18,23);
console.log(novaString);

//Includes
var possui = jogo.includes("Rayo");
console.log(possui);

//Trim
var frase = "      Tá me esperando na janela.";
console.log(frase);
console.log(frase.trim());


//Split - divide uma string em várias partes, com base num separador especificado
var numeros = "1,2,3,4,5";
//Transformando string num array com Split:
var array = numeros.split(",");
console.log(array);
console.log(array[2]);

//StartsWith & Replace
var frase = "Ser libre";
if(frase.startsWith("Ser")){
    let sub = frase.substring(4);
    let novaFrase = sub.replace("libre","de todo libre");
    let letrasMaiusculas = novaFrase.toUpperCase();
    console.log(letrasMaiusculas);
}

//CharAt - retorna o caractere da posição especificada
// Definindo uma string
var minhaString = "Método charAt";
// Obtendo o caractere na posição 5
var caractere = minhaString.charAt(4);

// Imprimindo o caractere
console.log("O caractere na posição 5 é:", caractere);