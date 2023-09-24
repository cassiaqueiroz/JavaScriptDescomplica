class Funcionario {
  constructor(nome, idade, cargo) {
    this.nome = nome;

    this.idade = idade;

    this.cargo = cargo;
  }

  seApresentar() {
    console.log(
      `Oi, meu nome é ${this.nome}, tenho ${this.idade} anos e trabalho como ${this.cargo}.`
    );
  }

  trabalhar() {
    console.log(`${this.nome} está trabalhando.`);
  }
}

class Gerente extends Funcionario {
  constructor(nome, idade, cargo, departamento) {
    super(nome, idade, cargo);

    this.departamento = departamento;
  }

  gerenciar() {
    console.log(
      `${this.nome} gerencia o departamento de ${this.departamento}.`
    );
  }
}

class Desenvolvedor extends Funcionario {
  constructor(nome, idade, cargo, linguagem) {
    super(nome, idade, cargo);

    this.linguagem = linguagem;
  }

  programar() {
    console.log(`${this.nome} desenvolve sistemas em ${this.linguagem}.`);
  }
}

const gerente = new Gerente(
  "Cíntia",

  43,

  "Gerente",

  "Marketing"
);

const desenvolvedor = new Desenvolvedor(
  "Beatriz",

  25,

  "Desenvolvedora",

  "JavaScript"
);

gerente.seApresentar();

gerente.trabalhar();

gerente.gerenciar();

desenvolvedor.seApresentar();

desenvolvedor.trabalhar();

desenvolvedor.programar();
