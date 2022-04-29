var cena1 = new Phaser.Scene("Cena 1");

var cartas = [
  {
    fundo: "assets/cartlincoln.png",
    habilidade: {
      valor: "80",
      imagem: "assets/habilidadelincoln.png", // cartas[0].habilidade.imagem
    },
    conhecimento: {
      valor: "10",
      imagem: "assets/conhecimentolincoln.png",
    },
    simpatia: {
      valor: "70",
      imagem: "assets/simpatialincoln.png",
    },
    altura: {
      valor: "170",
      imagem: "assets/alturalincoln.png",
    },
    idade: {
      valor: "100",
      imagem: "assets/idadelincoln.png",
    },
  },
  {
    fundo: "assets/cartlincoln.png",
    habilidade: {
      valor: "80",
      imagem: "assets/habilidadelincoln.png", // cartas[0].habilidade.imagem
    },
    conhecimento: {
      valor: "10",
      imagem: "assets/conhecimentolincoln.png",
    },
    simpatia: {
      valor: "70",
      imagem: "assets/simpatialincoln.png",
    },
    altura: {
      valor: "170",
      imagem: "assets/alturalincoln.png",
    },
    idade: {
      valor: "100",
      imagem: "assets/idadelincoln.png",
    },
  },
  /*{
    fundo: "assets/cartferrari.png",
    habilidade: {
      valor: "50",
      imagem: "assets/habilidadeferrari.png",
    },
    conhecimento: {
      valor: "99",
      imagem: "assets/conhecimentoferrari.png",
    },
    simpatia: {
      valor: "81",
      imagem: "assets/simpatiaferrari.png",
    },
    altura: {
      valor: "150",
      imagem: "assets/alturaferrari.png",
    },
    idade: {
      valor: "15",
      imagem: "assets/idadeferrari.png",
    },
  },*/
];

// Descobrir a primeira carta
var carta1 = cartas[Math.floor(Math.random() * 2)];
console.log(carta1);
var carta2 = cartas[Math.floor(Math.random() * 2)];

cena1.preload = function () {
  this.load.image("fundi", "assets/fundi.png");
  this.load.image("carta1.fundo", carta1.fundo);
  this.load.image("carta1.habilidade", carta1.habilidade.imagem);
  this.load.image("carta1.simpatia", carta1.simpatia.imagem);
  this.load.image("carta1.conhecimento", carta1.conhecimento.imagem);
  this.load.image("carta1.altura", carta1.altura.imagem);
  this.load.image("carta1.idade", carta1.idade.imagem);
  this.load.image("carta2.fundo", carta2.fundo);
  this.load.image("carta2.habilidade", carta2.habilidade.imagem);
  this.load.image("carta2.simpatia", carta2.simpatia.imagem);
  this.load.image("carta2.conhecimento", carta2.conhecimento.imagem);
  this.load.image("carta2.altura", carta2.altura.imagem);
  this.load.image("carta2.idade", carta2.idade.imagem);
};

cena1.create = function () {
  this.add.image(400, 300, "fundi");
  var carta1fundo = this.add.image(200, 300, "carta1.fundo").setInteractive();
  var habilidade1 = this.add
    .image(200, 330, "carta1.habilidade")
    .setInteractive();
  var simpatia1 = this.add.image(200, 360, "carta1.simpatia").setInteractive();
  var conhecimento1 = this.add
    .image(200, 390, "carta1.conhecimento")
    .setInteractive();
  var altura1 = this.add.image(200, 415, "carta1.altura").setInteractive();
  var idade1 = this.add.image(200, 445, "carta1.idade").setInteractive();
  var carta2fundo = this.add.image(600, 300, "carta2.fundo").setInteractive();
  var habilidade2 = this.add
    .image(600, 330, "carta2.habilidade")
    .setInteractive();
  var simpatia2 = this.add.image(600, 360, "carta2.simpatia").setInteractive();
  var conhecimento2 = this.add
    .image(600, 390, "carta2.conhecimento")
    .setInteractive();
  var altura2 = this.add.image(600, 415, "carta2.altura").setInteractive();
  var idade2 = this.add.image(600, 445, "carta2.idade").setInteractive();

  habilidade1.on(
    "pointerdown",
    function () {
      // carta1.setVisible(false);
      carta1fundo.setVisible(false);
      habilidade1.setVisible(true);
      simpatia1.setVisible(false);
      conhecimento1.setVisible(false);
      altura1.setVisible(false);
      idade1.setVisible(false);
      //carta2.setVisible(true);
    },
    this
  );

  simpatia1.on("pointerdown", function () {
    // carta1.setVisible(false);
    carta1fundo.setVisible(false);
    habilidade1.setVisible(false);
    simpatia1.setVisible(true);
    conhecimento1.setVisible(false);
    altura1.setVisible(false);
    idade1.setVisible(false);
    //carta2.setVisible(true);
  });

  conhecimento1.on("pointerdown", function () {
    // carta1.setVisible(false);
    carta1fundo.setVisible(false);
    habilidade1.setVisible(false);
    simpatia1.setVisible(false);
    conhecimento1.setVisible(true);
    altura1.setVisible(false);
    idade1.setVisible(false);
    //carta2.setVisible(true);
  });

  idade1.on("pointerdown", function () {
    // carta1.setVisible(false);
    carta1fundo.setVisible(false);
    habilidade1.setVisible(false);
    simpatia1.setVisible(false);
    conhecimento1.setVisible(false);
    altura1.setVisible(true);
    idade1.setVisible(false);
    //carta2.setVisible(true);
  });
  altura1.on("pointerdown", function () {
    // carta1.setVisible(false);
    carta1fundo.setVisible(false);
    habilidade1.setVisible(false);
    simpatia1.setVisible(false);
    conhecimento1.setVisible(false);
    altura1.setVisible(false);
    idade1.setVisible(true);
    //carta2.setVisible(true);
  });

  habilidade2.on(
    "pointerdown",
    function () {
      // carta1.setVisible(false);
      carta2fundo.setVisible(false);
      habilidade2.setVisible(true);
      simpatia2.setVisible(false);
      conhecimento2.setVisible(false);
      altura2.setVisible(false);
      idade2.setVisible(false);
      //carta2.setVisible(true);
    },
    this
  );

  simpatia2.on("pointerdown", function () {
    // carta1.setVisible(false);
    carta2fundo.setVisible(false);
    habilidade2.setVisible(false);
    simpatia2.setVisible(true);
    conhecimento2.setVisible(false);
    altura2.setVisible(false);
    idade2.setVisible(false);
    //carta2.setVisible(true);
  });

  conhecimento2.on("pointerdown", function () {
    // carta1.setVisible(false);
    carta2fundo.setVisible(false);
    habilidade2.setVisible(false);
    simpatia2.setVisible(false);
    conhecimento2.setVisible(true);
    altura2.setVisible(false);
    idade2.setVisible(false);
    //carta2.setVisible(true);
  });

  idade2.on("pointerdown", function () {
    // carta1.setVisible(false);
    carta2fundo.setVisible(false);
    habilidade2.setVisible(false);
    simpatia2.setVisible(false);
    conhecimento2.setVisible(false);
    altura2.setVisible(true);
    idade2.setVisible(false);
    //carta2.setVisible(true);
  });
  altura2.on("pointerdown", function () {
    // carta1.setVisible(false);
    carta2fundo.setVisible(false);
    habilidade2.setVisible(false);
    simpatia2.setVisible(false);
    conhecimento2.setVisible(false);
    altura2.setVisible(false);
    idade2.setVisible(true);
    //carta2.setVisible(true);
    if (carta1.altura.valor > carta2.altura.valor) {
    } else {
    
    }
  });
};

cena1.update = function () {};

export { cena1 };
