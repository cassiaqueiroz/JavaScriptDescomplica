class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome;
    // Dispositivo ligado, será desligado com o acionamento do método botaoOnOff
    this.ligado = true; 
  }
  botaoOnOff() {
    if (this.ligado === false) {
      this.ligado = true;
      console.log("Dispositivo ligado.");
    } else if (this.ligado === true) {
      this.ligado = false;
      console.log("Dispositivo desligado.");
    }
  }
}

//Herança - SmartPhone herda propriedades de DispositivoEletronico
class SmartPhone extends DispositivoEletronico {
  constructor(nome, cor, modelo) {
    //super() chama o construtor herdado de "DispositivoEletronico"
    super(nome);
    this.cor = cor;
    this.modelo = modelo;
  }
}

var sp1 = new SmartPhone("Motorola", "Azul", "Moto G7 Plus");
console.log(sp1);
sp1.botaoOnOff();
