class Pessoa {
  // O construtor é usado para criar objetos a partir da classe.
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
  falar() {
    console.log("Oi, " + this.nome + ".");
  }

  get nomeCompleto() {
    console.log("Ou melhor, " + this.nome + " " + this.sobrenome + "!");
  }
}

// Criando uma instância da classe Pessoa
p1 = new Pessoa("Cássia", "Queiroz");
p1.falar();
//Note abaixo que com o método get não usamos ()
p1.nomeCompleto;

