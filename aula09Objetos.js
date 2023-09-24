/*
Objetos possuem propriedades que possuem chave (nome da propriedade) e valo. Sintaxe:
nome da propriedade: valor
*/
//Um objeto é como uma "supervariável" que pode conter inúmeras variáveis

//Forma 01 de se criar um objeto
const pessoa = {
  nome: "Ben",
  sobrenome: "Jovem",
};
const key = "sobrenome";
//Três formas de imprimir no terminal:
console.log(pessoa["sobrenome"]);
console.log(pessoa[key]);
console.log(pessoa.sobrenome);
console.log("=================================");

//Forma 02 de se criar um objeto
const pet = new Object();
pet.nome = "Nina";
pet.sobrenome = "Serena";
console.log(pet.nome);
console.log("=================================");

//Forma 03 de se criar um objeto (utilizando função)
function criarLivro(titulo, autor, p) {
  return {
    titulo,
    autor,
    preco: p.toFixed(2),
    //Usando o método get dentro do Objeto
    get dadosLivro() {
      /*Poderia usar dadosLivro como uma função:
        dadosLivro(){ return ... }
        Mas na hora de imprimir, seria: (livro2.dadosLivro())
        */
      return `${this.titulo}, ${this.autor}: ${this.preco}.`;
    },
  };
}
const livro1 = criarLivro("Espelho Quebrado", "Cássia Queiroz", 29.90);
const livro2 = criarLivro("Marimar", "Thalia", 89.99);
console.log(livro1);
console.log(livro2);
console.log(livro1.autor);
console.log(livro2.dadosLivro);
