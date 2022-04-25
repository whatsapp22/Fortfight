var cena1 = new Phaser.Scene("Cena 1");

var carta1 = {
  fundo: "cartlincoln.png",
  habilidade: {
    valor: "80",
    imagem: "habilidadelincoln.png",
  },
  conhecimento: {
    valor: "10",
    imagem: "conhecimentolincoln.png",
  },
  simpatia: {
    valor: "70",
    imagem: "simpatialincoln.png",
  },
  altura: {
    valor: "170",
    imagem: "alturalincoln.png",
  },
  idade: {
    valor: "100",
    imagem: "idadelincoln.png",
  },
};


var carta2 = {
  fundo: "cartlincoln.png",
  habilidade: {
    valor: "80",
    imagem: "habilidadelincoln.png",
  },
  conhecimento: {
    valor: "10",
    imagem: "conhecimentolincoln.png",
  },
  simpatia: {
    valor: "70",
    imagem: "simpatialincoln.png",
  },
  altura: {
    valor: "170",
    imagem: "alturalincoln.png",
  },
  idade: {
    valor: "100",
    imagem: "idadelincoln.png",
  },
};


cena1.preload = function () {
  this.load.image("fundi", "assets/fundi.png");
  this.load.image("cartlincoln", "assets/cartlincoln.png");
  this.load.image("habilidadelincoln", "assets/habilidadelincoln.png");
  this.load.image("simpatialincoln", "assets/simpatialincoln.png");
  this.load.image("conhecimentolincoln", "assets/conhecimentolincoln.png");
  this.load.image("alturalincoln", "assets/alturalincoln.png");
  this.load.image("idadelincoln", "assets/idadelincoln.png");
};

cena1.create = function () {
  this.add.image(400, 300, "fundi");

  carta1 = this.add.image(200, 300, "cartlincoln").setInteractive();
  carta2 = this.add.image(600, 300, "cartlincoln").setInteractive();
  habilidade1 = this.add.image(200, 330, "habilidadelincoln").setInteractive();
  habilidade1.valor = 80;
  carta2.setVisible(false);

  habilidade1.on(
    "pointerdown",
    function () {
      carta1.setVisible(false);
      carta2.setVisible(true);
    },
    this
  );
  carta2.on("pointerdown", function () {}, this);

  /*this.add.image(600, 300, "cartlincoln");
  this.add.image(200, 330, "habilidadelincoln");
  this.add.image(200, 360, "simpatialincoln");
  this.add.image(200, 387, "conhecimentolincoln");
  this.add.image(200, 415, "alturalincoln");
  this.add.image(202, 445, "idadelincoln");
  this.add.image(600, 330, "habilidadelincoln");
  this.add.image(600, 360, "simpatialincoln");
  this.add.image(600, 387, "conhecimentolincoln");
  this.add.image(600, 415, "alturalincoln");
  this.add.image(602, 445, "idadelincoln");*/
};
cena1.update = function () {};

export { cena1 };
