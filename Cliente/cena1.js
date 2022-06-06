var cena1 = new Phaser.Scene("Cena 1");
import { cena2 } from "./cena2.js";
var cartas = [
  {
    name: "LINCOLN",
    fundo: "assets/cartlincoln.png",
    habilidade: {
      valor: "70",
      imagem: "assets/habilidadelincoln.png", // cartas[0].habilidade.imagem
    },
    conhecimento: {
      valor: "50",
      imagem: "assets/conhecimentolincoln.png",
    },
    simpatia: {
      valor: "90",
      imagem: "assets/simpatialincoln.png",
    },
    altura: {
      valor: "172",
      imagem: "assets/alturalincoln.png",
    },
    idade: {
      valor: "19",
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
  {
    name: "LULSONARO",
    fundo: "assets/fundolulsonaro.png",
    habilidade: {
      valor: "10",
      imagem: "assets/habilidadelulsonaro.png", // cartas[0].habilidade.imagem
    },
    conhecimento: {
      valor: "0",
      imagem: "assets/conhecimentolulsonaro.png",
    },
    simpatia: {
      valor: "99",
      imagem: "assets/simpatialulsonaro.png",
    },
    altura: {
      valor: "177",
      imagem: "assets/alturalulsonaro.png",
    },
    idade: {
      valor: "72",
      imagem: "assets/idadelulsonaro.png",
    },
  },
];

// Placar
var placar;
var placarTexto1;
var placarTexto2;
var imagembloqueio;
var ganhadora;
var vencedor;
var textven;
var textven2;
var contadordepartida1;
var contadordepartida2;
var newgame;
var carta1;
var carta2;

cena1.preload = function () {
  // Fundo da cena
  this.load.image("fundi", "assets/lua.jpg");

  // Carregar todas as cartas
  cartas.forEach((carta) => {
    this.load.image(carta.name, carta.fundo);
    this.load.image(carta.habilidade, carta.habilidade.imagem);
    this.load.image(carta.simpatia, carta.simpatia.imagem);
    this.load.image(carta.simpatia, carta.simpatia.imagem);
    this.load.image(carta.conhecimento, carta.conhecimento.imagem);
    this.load.image(carta.altura, carta.altura.imagem);
    this.load.image(carta.idade, carta.idade.imagem);
    this.load.image(carta.fundo, carta.fundo);
    this.load.image(carta.habilidade, carta.habilidade.imagem);
    this.load.image(carta.simpatia, carta.simpatia.imagem);
    this.load.image(carta.conhecimento, carta.conhecimento.imagem);
    this.load.image(carta.altura, carta.altura.imagem);
    this.load.image(carta.idade, carta.idade.imagem);

    
  });

    this.load.image("fundograde", "assets/fundograde.png");
    this.load.image("bolverde", "assets/bolinhaverde.png");
    this.load.image("bolverme", "assets/bolinhavermelha.png");
    this.load.image("bolcinza", "assets/bolinhacinza.png");
    this.load.image("newgame", "assets/gamenew.png");
  
  /*
   
  
  */
};

cena1.create = function () {
  this.add.image(400, 300, "fundi");

  // Placar
  placarTexto1 = this.add.text(70, 75, placar, {
    fontSize: "32px",
    fill: "#ffffff",
  });
  placarTexto2 = this.add.text(450, 75, placar, {
    fontSize: "32px",
    fill: "#ffffff",
  });
  vencedor = this.add.text(250, 50, textven, {
    fontSize: "32px",
    fill: "#ffffff",
  });

  var carta1fundo = this.add.image(200, 301, "carta1.fundo").setInteractive();
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
  var contadordepartida1 = this.add
    .image(130, 520, "bolcinza")
    .setInteractive();
  var bolicinza = this.add.image(170, 520, "bolcinza").setInteractive();
  var bolicinza2 = this.add.image(210, 520, "bolcinza").setInteractive();
  var bolicinza3 = this.add.image(250, 520, "bolcinza").setInteractive();
  var bolicinza4 = this.add.image(290, 520, "bolcinza").setInteractive();
  var contadordepartida2 = this.add
    .image(530, 520, "bolcinza")
    .setInteractive();
  var bolicinza5 = this.add.image(570, 520, "bolcinza").setInteractive();
  var bolicinza6 = this.add.image(610, 520, "bolcinza").setInteractive();
  var bolicinza7 = this.add.image(650, 520, "bolcinza").setInteractive();
  var bolicinza8 = this.add.image(690, 520, "bolcinza").setInteractive();
  var contadorloss;
  var newgame = this.add.image(400, 520, "newgame").setInteractive();
  newgame.setVisible(false);

  if (Math.round(Math.random()) === 0) {
    placar = "It's Your turn!!";
    placarTexto1.setVisible(true);
    placarTexto1.setText(placar);
    placarTexto2.setVisible(false);
    var imagembloqueio = this.add
      .image(600, 300, "fundograde")
      .setInteractive();
  } else {
    placar = "Its Your Turn!!";
    placarTexto1.setVisible(false);
    placarTexto2.setVisible(true);
    placarTexto2.setText(placar);
    //imagem de bloqueio
    var imagembloqueio = this.add
      .image(200, 300, "fundograde")
      .setInteractive();
  }

  habilidade1.on(
    "pointerdown",
    function () {
      carta1fundo.setVisible(true);
      habilidade1.setVisible(true);
      simpatia1.setVisible(false);
      conhecimento1.setVisible(false);
      altura1.setVisible(false);
      idade1.setVisible(false);
      carta2fundo.setVisible(true);
      habilidade2.setVisible(true);
      simpatia2.setVisible(false);
      conhecimento2.setVisible(false);
      altura2.setVisible(false);
      idade2.setVisible(false);
      imagembloqueio.setVisible(false);
      if (carta1.habilidade.valor > carta2.habilidade.valor) {
        placarTexto1.setVisible(false);
        placarTexto2.setVisible(false);
        vencedor.setVisible(true);
        textven = carta1.name + " GANHOU";
        vencedor.setText(textven);
        contadordepartida1 = this.add
          .image(130, 520, "bolverde")
          .setInteractive();
        contadordepartida1.setVisible(true);
        contadordepartida2.setVisible(true);
        newgame.setVisible(true);
        contadorloss = this.add.image(530, 520, "bolverme").setInteractive();
        contadorloss.setVisible(true);
      } else if (carta1.habilidade.valor < carta2.habilidade.valor) {
        placarTexto1.setVisible(false);
        placarTexto2.setVisible(false);
        vencedor.setVisible(true);
        textven = carta2.name + " GANHOU";
        vencedor.setText(textven);
        contadordepartida2 = this.add
          .image(530, 520, "bolverde")
          .setInteractive();
        contadordepartida1.setVisible(true);
        contadordepartida2.setVisible(true);
        newgame.setVisible(true);
        contadorloss = this.add.image(130, 520, "bolverme").setInteractive();
        contadorloss.setVisible(true);
      } else {
        placarTexto1.setVisible(false);
        placarTexto2.setVisible(false);
        vencedor.setVisible(true);
        textven = "EMPATE";
        vencedor.setText(textven);
        contadordepartida1.setVisible(true);
        contadordepartida2.setVisible(true);

        newgame.setVisible(true);
      }
    },
    this
  );

  newgame.on("pointerdown", function () {
    // Descobrir a primeira carta
    carta1 = cartas[Math.floor(Math.random() * 2)];
    console.log(carta1);
    carta2 = cartas[Math.floor(Math.random() * 2)];
    console.log(carta2);

    while (carta1.name === carta2.name) {
      carta2 = cartas[Math.floor(Math.random() * 2)];
      console.log(carta2);
    }

    carta1fundo.setVisible(true);
    habilidade1.setVisible(true);
    simpatia1.setVisible(true);
    conhecimento1.setVisible(true);
    altura1.setVisible(true);
    idade1.setVisible(true);
    carta2fundo.setVisible(true);
    habilidade2.setVisible(true);
    simpatia2.setVisible(true);
    conhecimento2.setVisible(true);
    altura2.setVisible(true);
    idade2.setVisible(true);
    imagembloqueio.setVisible(true);
  });

  simpatia1.on("pointerdown", function () {
    carta1fundo.setVisible(true);
    habilidade1.setVisible(false);
    simpatia1.setVisible(true);
    conhecimento1.setVisible(false);
    altura1.setVisible(false);
    idade1.setVisible(false);
    carta2fundo.setVisible(true);
    habilidade2.setVisible(false);
    simpatia2.setVisible(true);
    conhecimento2.setVisible(false);
    altura2.setVisible(false);
    idade2.setVisible(false);
    imagembloqueio.setVisible(false);

    if (carta1.simpatia.valor > carta2.simpatia.valor) {
      placarTexto1.setVisible(false);
      placarTexto2.setVisible(false);
      vencedor.setVisible(true);
      textven = carta1.name + " GANHOU";
      vencedor.setText(textven);
      contadordepartida1 = this.add
        .image(130, 520, "bolverde")
        .setInteractive();
      contadordepartida1.setVisible(true);
      contadordepartida2.setVisible(false);

      newgame.setVisible(true);
    } else if (carta1.simpatia.valor < carta2.simpatia.valor) {
      placarTexto1.setVisible(false);
      placarTexto2.setVisible(false);
      vencedor.setVisible(true);
      textven = carta2.name + " GANHOU";
      vencedor.setText(textven);
      contadordepartida2 = this.add
        .image(530, 520, "bolverde")
        .setInteractive();
      contadordepartida1.setVisible(false);
      contadordepartida2.setVisible(true);

      newgame.setVisible(true);
    } else {
      placarTexto1.setVisible(false);
      placarTexto2.setVisible(false);
      vencedor.setVisible(true);
      textven = "EMPATE";
      vencedor.setText(textven);
      contadordepartida1.setVisible(true);
      contadordepartida2.setVisible(true);
      newgame.setVisible(true);
    }
  });

  conhecimento1.on("pointerdown", function () {
    carta1fundo.setVisible(true);
    habilidade1.setVisible(false);
    simpatia1.setVisible(false);
    conhecimento1.setVisible(true);
    altura1.setVisible(false);
    idade1.setVisible(false);
    carta2fundo.setVisible(true);
    habilidade2.setVisible(false);
    simpatia2.setVisible(false);
    conhecimento2.setVisible(true);
    altura2.setVisible(false);
    idade2.setVisible(false);
    imagembloqueio.setVisible(false);
    if (carta1.conhecimento.valor > carta2.conhecimento.valor) {
      placarTexto1.setVisible(false);
      placarTexto2.setVisible(false);
      vencedor.setVisible(true);
      textven = carta1.name + " GANHOU";
      vencedor.setText(textven);
    } else if (carta1.conhecimento.valor < carta2.conhecimento.valor) {
      placarTexto1.setVisible(false);
      placarTexto2.setVisible(false);
      vencedor.setVisible(true);
      textven = carta2.name + " GANHOU";
      vencedor.setText(textven);
    } else {
      placarTexto1.setVisible(false);
      placarTexto2.setVisible(false);
      vencedor.setVisible(true);
      textven = "EMPATE";
      vencedor.setText(textven);
    }
  });

  altura1.on("pointerdown", function () {
    carta1fundo.setVisible(true);
    habilidade1.setVisible(false);
    simpatia1.setVisible(false);
    conhecimento1.setVisible(false);
    altura1.setVisible(true);
    idade1.setVisible(false);
    carta2fundo.setVisible(true);
    habilidade2.setVisible(false);
    simpatia2.setVisible(false);
    conhecimento2.setVisible(false);
    altura2.setVisible(true);
    idade2.setVisible(false);
    imagembloqueio.setVisible(false);
    if (carta1.altura.valor > carta2.altura.valor) {
      placarTexto1.setVisible(false);
      placarTexto2.setVisible(false);
      vencedor.setVisible(true);
      textven = carta1.name + " GANHOU";
      vencedor.setText(textven);
    } else if (carta1.altura.valor < carta2.altura.valor) {
      placarTexto1.setVisible(false);
      placarTexto2.setVisible(false);
      vencedor.setVisible(true);
      textven = carta2.name + " GANHOU";
      vencedor.setText(textven);
    } else {
      placarTexto1.setVisible(false);
      placarTexto2.setVisible(false);
      vencedor.setVisible(true);
      textven = "EMPATE";
      vencedor.setText(textven);
    }
  });
  idade1.on("pointerdown", function () {
    carta1fundo.setVisible(true);
    habilidade1.setVisible(false);
    simpatia1.setVisible(false);
    conhecimento1.setVisible(false);
    altura1.setVisible(false);
    idade1.setVisible(true);
    carta2fundo.setVisible(true);
    habilidade2.setVisible(false);
    simpatia2.setVisible(false);
    conhecimento2.setVisible(false);
    altura2.setVisible(false);
    idade2.setVisible(true);
    imagembloqueio.setVisible(false);
    if (carta1.idade.valor > carta2.idade.valor) {
      placarTexto1.setVisible(false);
      placarTexto2.setVisible(false);
      vencedor.setVisible(true);
      textven = carta1.name + " GANHOU";
      vencedor.setText(textven);
    } else if (carta1.idade.valor < carta2.idade.valor) {
      placarTexto1.setVisible(false);
      placarTexto2.setVisible(false);
      vencedor.setVisible(true);
      textven = carta2.name + " GANHOU";
      vencedor.setText(textven);
    } else {
      placarTexto1.setVisible(false);
      placarTexto2.setVisible(false);
      vencedor.setVisible(true);
      textven = "EMPATE";
      vencedor.setText(textven);
    }
  });

  habilidade2.on(
    "pointerdown",
    function () {
      carta2fundo.setVisible(true);
      habilidade2.setVisible(true);
      simpatia2.setVisible(false);
      conhecimento2.setVisible(false);
      altura2.setVisible(false);
      idade2.setVisible(false);
      carta1fundo.setVisible(true);
      habilidade1.setVisible(true);
      simpatia1.setVisible(false);
      conhecimento1.setVisible(false);
      altura1.setVisible(false);
      idade1.setVisible(false);
      imagembloqueio.setVisible(false);
      if (carta1.habilidade.valor > carta2.habilidade.valor) {
        placarTexto1.setVisible(false);
        placarTexto2.setVisible(false);
        vencedor.setVisible(true);
        textven = carta1.name + " GANHOU";
        vencedor.setText(textven);
        contadordepartida1 = this.add
          .image(130, 520, "bolverde")
          .setInteractive();
        contadordepartida1.setVisible(true);
        contadordepartida2.setVisible(true);
        newgame.setVisible(true);
        contadorloss = this.add.image(530, 520, "bolverme").setInteractive();
        contadorloss.setVisible(true);
      } else if (carta1.habilidade.valor < carta2.habilidade.valor) {
        placarTexto1.setVisible(false);
        placarTexto2.setVisible(false);
        vencedor.setVisible(true);
        textven = carta2.name + " GANHOU";
        vencedor.setText(textven);
        contadordepartida2 = this.add
          .image(530, 520, "bolverde")
          .setInteractive();
        contadordepartida1.setVisible(true);
        contadordepartida2.setVisible(true);
        newgame.setVisible(true);
        contadorloss = this.add.image(130, 520, "bolverme").setInteractive();
        contadorloss.setVisible(true);
      } else {
        placarTexto1.setVisible(false);
        placarTexto2.setVisible(false);
        vencedor.setVisible(true);
        textven = "EMPATE";
        vencedor.setText(textven);
        contadordepartida1.setVisible(true);
        contadordepartida2.setVisible(true);

        newgame.setVisible(true);
      }
    },
    this
  );

  simpatia2.on("pointerdown", function () {
    carta2fundo.setVisible(true);
    habilidade2.setVisible(false);
    simpatia2.setVisible(true);
    conhecimento2.setVisible(false);
    altura2.setVisible(false);
    idade2.setVisible(false);
    carta1fundo.setVisible(true);
    habilidade1.setVisible(false);
    simpatia1.setVisible(true);
    conhecimento1.setVisible(false);
    altura1.setVisible(false);
    idade1.setVisible(false);
    imagembloqueio.setVisible(false);
    if (carta1.simpatia.valor > carta2.simpatia.valor) {
      placarTexto1.setVisible(false);
      placarTexto2.setVisible(false);
      vencedor.setVisible(true);
      textven = carta1.name + " GANHOU";
      vencedor.setText(textven);
    } else if (carta1.simpatia.valor < carta2.simpatia.valor) {
      placarTexto1.setVisible(false);
      placarTexto2.setVisible(false);
      vencedor.setVisible(true);
      textven = carta2.name + " GANHOU";
      vencedor.setText(textven);
    } else {
      placarTexto1.setVisible(false);
      placarTexto2.setVisible(false);
      vencedor.setVisible(true);
      textven = "EMPATE";
      vencedor.setText(textven);
    }
  });

  conhecimento2.on("pointerdown", function () {
    carta2fundo.setVisible(true);
    habilidade2.setVisible(false);
    simpatia2.setVisible(false);
    conhecimento2.setVisible(true);
    altura2.setVisible(false);
    idade2.setVisible(false);
    carta1fundo.setVisible(true);
    habilidade1.setVisible(false);
    simpatia1.setVisible(false);
    conhecimento1.setVisible(true);
    altura1.setVisible(false);
    idade1.setVisible(false);
    imagembloqueio.setVisible(false);
    if (carta1.conhecimento.valor > carta2.conhecimento.valor) {
      placarTexto1.setVisible(false);
      placarTexto2.setVisible(false);
      vencedor.setVisible(true);
      textven = carta1.name + " GANHOU";
      vencedor.setText(textven);
    } else if (carta1.conhecimento.valor < carta2.conhecimento.valor) {
      placarTexto1.setVisible(false);
      placarTexto2.setVisible(false);
      vencedor.setVisible(true);
      textven = carta2.name + " GANHOU";
      vencedor.setText(textven);
    } else {
      placarTexto1.setVisible(false);
      placarTexto2.setVisible(false);
      vencedor.setVisible(true);
      textven = "EMPATE";
      vencedor.setText(textven);
    }
  });

  altura2.on("pointerdown", function () {
    carta2fundo.setVisible(true);
    habilidade2.setVisible(false);
    simpatia2.setVisible(false);
    conhecimento2.setVisible(false);
    altura2.setVisible(true);
    idade2.setVisible(false);
    carta1fundo.setVisible(true);
    habilidade1.setVisible(false);
    simpatia1.setVisible(false);
    conhecimento1.setVisible(false);
    altura1.setVisible(true);
    idade1.setVisible(false);
    imagembloqueio.setVisible(false);
    if (carta1.altura.valor > carta2.altura.valor) {
      placarTexto1.setVisible(false);
      placarTexto2.setVisible(false);
      vencedor.setVisible(true);
      textven = carta1.name + " GANHOU";
      vencedor.setText(textven);
    } else if (carta1.altura.valor < carta2.altura.valor) {
      placarTexto1.setVisible(false);
      placarTexto2.setVisible(false);
      vencedor.setVisible(true);
      textven = carta2.name + " GANHOU";
      vencedor.setText(textven);
    } else {
      placarTexto1.setVisible(false);
      placarTexto2.setVisible(false);
      vencedor.setVisible(true);
      textven = "EMPATE";
      vencedor.setText(textven);
    }
  });
  idade2.on("pointerdown", function () {
    carta2fundo.setVisible(true);
    habilidade2.setVisible(false);
    simpatia2.setVisible(false);
    conhecimento2.setVisible(false);
    altura2.setVisible(false);
    idade2.setVisible(true);
    carta1fundo.setVisible(true);
    habilidade1.setVisible(false);
    simpatia1.setVisible(false);
    conhecimento1.setVisible(false);
    altura1.setVisible(false);
    idade1.setVisible(true);
    imagembloqueio.setVisible(false);

    if (carta1.idade.valor > carta2.idade.valor) {
      placarTexto1.setVisible(false);
      placarTexto2.setVisible(false);
      vencedor.setVisible(true);
      textven = carta1.name + " GANHOU";
      vencedor.setText(textven);
    } else if (carta1.idade.valor < carta2.idade.valor) {
      placarTexto1.setVisible(false);
      placarTexto2.setVisible(false);
      vencedor.setVisible(true);
      textven = carta2.name + " GANHOU";
      vencedor.setText(textven);
    } else {
      placarTexto1.setVisible(false);
      placarTexto2.setVisible(false);
      vencedor.setVisible(true);
      textven = "EMPATE";
      vencedor.setText(textven);
    }
  });
};

cena1.update = function () {};

export { cena1 };
