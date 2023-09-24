const numbers = [5, 2, 4, 7];
console.log(`Meu array: ${numbers}.`);

//Filter
const odd = numbers.filter((number) => number % 2 !== 0);
console.log(`Mostrando os ímpares com filter: ${odd}.`);

//Splice - altera o array
numbers.splice(2, 1);
console.log(`Cortando o índice 2 com Splice: ${numbers}.`);

//Usando Slice para cortar um índice e substituí-lo
numbers.splice(2, 1, 2023);
console.log(
  `Cortando o novo índice 2 e substituindo-o com Splice: ${numbers}.`
);

//Find 
const nomes = ["Alice", "Bob", "Charlie", "David", "Eva"];
const pessoaEncontrada = nomes.find((nome) => nome === "Charlie");
console.log(pessoaEncontrada, ".");

//Usando concat
const sobrenomes = ["Chaves", "Kiko", "Chiquinha", "Popis", "Chapolim"];
const mix = nomes.concat(sobrenomes);
console.log(mix);

//Atividade - dividir meses do ano em trimestres
const meses = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

const trimestres = [];

while (meses.length >= 3) {
  const trimestre = meses.splice(0, 3);
  trimestres.push(trimestre);
}

console.log(trimestres);

/* Acima o array trimestres acumula trimestres de acordo com o 
"corte" do splice - índices 0 a 2 -, 
e o push serve para sempre selecionar apenas os próximos grupos de 3:
Janeiro, fevereiro e março vão do array meses para o 
array trimestres na primeira iteração por conta do push */

//Usando filter com Array e Função (e criação de objetos)
const socios = [
  { nome: "Cláudia", idade: 41 },
  { nome: "Raquel", idade: 47 },
  { nome: "Beatriz", idade: 52 },
  { nome: "Jaime", idade: 46 },
];

const sociosListagem = socios.filter(function (integrante) {
  return integrante.nome.length >= 6;
});
console.log(sociosListagem);

//Atividade - filter com array de objetos
const produtos = [
  { id: 1, descricao: "Notebook", categoria: "Eletrônico" },
  { id: 2, descricao: "Smart TV", categoria: "Eletrônico" },
  { id: 3, descricao: "Smart Phone", categoria: "Eletrônico" },
  { id: 4, descricao: "Head Phone", categoria: "Eletrônico" },
  { id: 5, descricao: "Microondas", categoria: "Eletrodoméstico" },
  { id: 6, descricao: "Máquina de Lavar Louças", categoria: "Eletrodoméstico" },
];

const categoriaEletronico = produtos.filter(function (eletronico) {
  return eletronico.categoria === "Eletrônico";
});
console.log(categoriaEletronico);

