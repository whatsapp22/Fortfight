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
var contagem = 0;
var ganhadorwindireito = 0;
var perdedorlossdireito = 0;
var ganhadorwinesquerdo = 0;
var perdedorlossesquerdo = 0;

cena1.preload = function () {
  // Fundo da cena
  this.load.image("fundi", "assets/lua.jpg");

  // Carregar todas as cartas
  cartas.forEach((carta) => {
    this.load.image(carta.fundo, carta.fundo);
    this.load.image(carta.habilidade.imagem, carta.habilidade.imagem);
    this.load.image(carta.simpatia.imagem, carta.simpatia.imagem);
    this.load.image(carta.conhecimento.imagem, carta.conhecimento.imagem);
    this.load.image(carta.altura.imagem, carta.altura.imagem);
    this.load.image(carta.idade.imagem, carta.idade.imagem);
  });

  this.load.image("fundograde", "assets/fundograde.png");
  this.load.image("bolverde", "assets/bolinhaverde.png");
  this.load.image("bolverme", "assets/bolinhavermelha.png");
  this.load.image("bolcinza", "assets/bolinhacinza.png");
  this.load.image("newgame", "assets/gamenew.png");
  this.load.image("next", "assets/nextgame.png");
  this.load.image("teste", "assets/astroinicio.png");
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
  newgame = this.add.image(400, 300, "newgame").setInteractive();

  var game = this;

  newgame.on("pointerdown", function () {
    // Descobrir a primeira carta
    carta1 = cartas[Math.floor(Math.random() * 2)];
    console.log(carta1);
    carta2 = cartas[Math.floor(Math.random() * 2)];
    console.log(carta2);
    newgame.setVisible(false);
    while (carta1.name === carta2.name) {
      carta2 = cartas[Math.floor(Math.random() * 2)];
      console.log(carta2);
    }
    contagem = contagem + 1;
    console.log(contagem);

    if (contagem === 1) {
      var carta1fundo = game.add.image(200, 301, carta1.fundo).setInteractive();
      var habilidade1 = game.add
        .image(200, 321, carta1.habilidade.imagem)
        .setInteractive();
      var simpatia1 = game.add
        .image(200, 355, carta1.simpatia.imagem)
        .setInteractive();
      var conhecimento1 = game.add
        .image(200, 385, carta1.conhecimento.imagem)
        .setInteractive();
      var altura1 = game.add
        .image(200, 416, carta1.altura.imagem)
        .setInteractive();
      var idade1 = game.add
        .image(200, 445, carta1.idade.imagem)
        .setInteractive();

      var carta2fundo = game.add.image(600, 300, carta2.fundo).setInteractive();
      var habilidade2 = game.add
        .image(600, 325, carta2.habilidade.imagem)
        .setInteractive();
      var simpatia2 = game.add
        .image(600, 355, carta2.simpatia.imagem)
        .setInteractive();
      var conhecimento2 = game.add
        .image(600, 385, carta2.conhecimento.imagem)
        .setInteractive();
      var altura2 = game.add
        .image(600, 415, carta2.altura.imagem)
        .setInteractive();
      var idade2 = game.add
        .image(600, 445, carta2.idade.imagem)
        .setInteractive();
      var contadordepartida1 = game.add
        .image(130, 520, "bolcinza")
        .setInteractive();
      var bolicinza = game.add.image(170, 520, "bolcinza").setInteractive();
      var bolicinza2 = game.add.image(210, 520, "bolcinza").setInteractive();
      var bolicinza3 = game.add.image(250, 520, "bolcinza").setInteractive();
      var bolicinza4 = game.add.image(290, 520, "bolcinza").setInteractive();
      var contadordepartida2 = game.add
        .image(530, 520, "bolcinza")
        .setInteractive();
      var bolicinza5 = game.add.image(570, 520, "bolcinza").setInteractive();
      var bolicinza6 = game.add.image(610, 520, "bolcinza").setInteractive();
      var bolicinza7 = game.add.image(650, 520, "bolcinza").setInteractive();
      var bolicinza8 = game.add.image(690, 520, "bolcinza").setInteractive();
      var contadorloss;
      contadordepartida1.setVisible(true);
      contadordepartida2.setVisible(true);
      bolicinza.setVisible(true);
      bolicinza2.setVisible(true);
      bolicinza3.setVisible(true);
      bolicinza4.setVisible(true);
      bolicinza5.setVisible(true);
      bolicinza6.setVisible(true);
      bolicinza7.setVisible(true);
      bolicinza8.setVisible(true);
      vencedor.setVisible(false);

      if (Math.round(Math.random()) === 0) {
        placar = "É SUA VEZ!!";
        placarTexto1.setVisible(true);
        placarTexto1.setText(placar);
        placarTexto2.setVisible(false);
        var imagembloqueio = game.add
          .image(600, 300, "fundograde")
          .setInteractive();
      } else {
        placar = "É SUA VEZ!!";
        placarTexto1.setVisible(false);
        placarTexto2.setVisible(true);
        placarTexto2.setText(placar);
        //imagem de bloqueio
        var imagembloqueio = game.add
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
          newgame.setVisible(false);

          if (carta1.habilidade.valor > carta2.habilidade.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(true);
            textven = carta1.name + " GANHOU";
            vencedor.setText(textven);
            contadordepartida1 = game.add
              .image(130, 520, "bolverde")
              .setInteractive(); 
            ganhadorwindireito = 1;
            perdedorlossesquerdo = 1;
            contadordepartida1.setVisible(true);
            contadordepartida2.setVisible(false);
            newgame.setVisible(true);
            contadorloss = game.add
              .image(530, 520, "bolverme")
              .setInteractive();
            contadorloss.setVisible(true);
          } else if (carta1.habilidade.valor < carta2.habilidade.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(true);
            textven = carta2.name + " GANHOU";
            vencedor.setText(textven);
            contadordepartida2 = game.add
              .image(530, 520, "bolverde")
              .setInteractive();
            ganhadorwinesquerdo = 1;
            perdedorlossdireito = 1;
            contadordepartida1.setVisible(true);
            contadordepartida2.setVisible(true);
            newgame.setVisible(true);
            contadorloss = game.add
              .image(130, 520, "bolverme")
              .setInteractive();
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
        newgame.setVisible(true);
        if (carta1.simpatia.valor > carta2.simpatia.valor) {
          placarTexto1.setVisible(false);
          placarTexto2.setVisible(false);
          vencedor.setVisible(true);
          textven = carta1.name + " GANHOU";
          vencedor.setText(textven);
          contadordepartida1 = game.add
            .image(130, 520, "bolverde")
            .setInteractive();
          ganhadorwindireito = 1; perdedorlossesquerdo = 1;
          newgame.setVisible(true);
          contadorloss = game.add.image(530, 520, "bolverme").setInteractive();
          contadorloss.setVisible(true);
          contadordepartida1.setVisible(true);
          contadordepartida2.setVisible(false);
          newgame.setVisible(true);
        } else if (carta1.simpatia.valor < carta2.simpatia.valor) {
          placarTexto1.setVisible(false);
          placarTexto2.setVisible(false);
          vencedor.setVisible(true);
          textven = carta2.name + " GANHOU";
          vencedor.setText(textven);
           contadordepartida2 = game.add
            .image(530, 520, "bolverde")
            .setInteractive();
          ganhadorwinesquerdo = 1; perdedorlossdireito = 1;
          contadordepartida1.setVisible(false);
          contadordepartida2.setVisible(true);
          newgame.setVisible(true);
          contadorloss = game.add.image(530, 520, "bolverme").setInteractive();
          contadorloss.setVisible(true);
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
          contadordepartida1 = game.add
            .image(130, 520, "bolverde")
            .setInteractive();
          ganhadorwindireito = 1; perdedorlossesquerdo = 1;
          contadordepartida1.setVisible(true);
          contadordepartida2.setVisible(false);
          newgame.setVisible(true);
          contadorloss = game.add.image(530, 520, "bolverme").setInteractive();
          contadorloss.setVisible(true);
        } else if (carta1.conhecimento.valor < carta2.conhecimento.valor) {
          placarTexto1.setVisible(false);
          placarTexto2.setVisible(false);
          vencedor.setVisible(true);
          textven = carta2.name + " GANHOU";
          vencedor.setText(textven);
           contadordepartida2 = game.add
            .image(530, 520, "bolverde")
            .setInteractive();
          ganhadorwinesquerdo = 1; perdedorlossdireito = 1;
          contadordepartida1.setVisible(true);
          contadordepartida2.setVisible(true);
          newgame.setVisible(true);
          contadorloss = game.add.image(130, 520, "bolverme").setInteractive();
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
          contadordepartida1 = game.add
            .image(130, 520, "bolverde")
            .setInteractive();
          ganhadorwindireito = 1; perdedorlossesquerdo = 1;
          contadordepartida1.setVisible(true);
          contadordepartida2.setVisible(false);
          newgame.setVisible(true);
          contadorloss = game.add.image(530, 520, "bolverme").setInteractive();
          contadorloss.setVisible(true);
        } else if (carta1.altura.valor < carta2.altura.valor) {
          placarTexto1.setVisible(false);
          placarTexto2.setVisible(false);
          vencedor.setVisible(true);
          textven = carta2.name + " GANHOU";
          vencedor.setText(textven);
           contadordepartida2 = game.add
            .image(530, 520, "bolverde")
            .setInteractive();
          ganhadorwinesquerdo = 1; perdedorlossdireito = 1;
          contadordepartida1.setVisible(true);
          contadordepartida2.setVisible(true);
          newgame.setVisible(true);
          contadorloss = game.add.image(130, 520, "bolverme").setInteractive();
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
          contadordepartida1 = game.add
            .image(130, 520, "bolverde")
            .setInteractive();
          ganhadorwindireito = 1; perdedorlossesquerdo = 1;
          contadordepartida1.setVisible(true);
          contadordepartida2.setVisible(false);
          newgame.setVisible(true);
          contadorloss = game.add.image(530, 520, "bolverme").setInteractive();
          contadorloss.setVisible(true);
        } else if (carta1.idade.valor < carta2.idade.valor) {
          placarTexto1.setVisible(false);
          placarTexto2.setVisible(false);
          vencedor.setVisible(true);
          textven = carta2.name + " GANHOU";
          vencedor.setText(textven);
           contadordepartida2 = game.add
            .image(530, 520, "bolverde")
            .setInteractive();
          ganhadorwinesquerdo = 1; perdedorlossdireito = 1;
          contadordepartida1.setVisible(true);
          contadordepartida2.setVisible(true);
          newgame.setVisible(true);
          contadorloss = game.add.image(130, 520, "bolverme").setInteractive();
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
            contadordepartida1 = game.add
              .image(130, 520, "bolverde")
              .setInteractive();
            ganhadorwindireito = 1;
            perdedorlossesquerdo = 1;
            contadordepartida1.setVisible(true);
            contadordepartida2.setVisible(true);
            newgame.setVisible(true);
            contadorloss = game.add
              .image(530, 520, "bolverme")
              .setInteractive();
            contadorloss.setVisible(true);
          } else if (carta1.habilidade.valor < carta2.habilidade.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(true);
            textven = carta2.name + " GANHOU";
            vencedor.setText(textven);
            contadordepartida2 = game.add
              .image(530, 520, "bolverde")
              .setInteractive();
            ganhadorwinesquerdo = 1;
            perdedorlossdireito = 1;
            contadordepartida1.setVisible(true);
            contadordepartida2.setVisible(true);
            newgame.setVisible(true);
            contadorloss = game.add
              .image(130, 520, "bolverme")
              .setInteractive();
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
          contadordepartida1 = game.add
            .image(130, 520, "bolverde")
            .setInteractive();
          ganhadorwindireito = 1; perdedorlossesquerdo = 1;
          contadordepartida1.setVisible(true);
          contadordepartida2.setVisible(false);
          newgame.setVisible(true);
          contadorloss = game.add.image(530, 520, "bolverme").setInteractive();
          contadorloss.setVisible(true);
        } else if (carta1.simpatia.valor < carta2.simpatia.valor) {
          placarTexto1.setVisible(false);
          placarTexto2.setVisible(false);
          vencedor.setVisible(true);
          textven = carta2.name + " GANHOU";
          vencedor.setText(textven);
           contadordepartida2 = game.add
            .image(530, 520, "bolverde")
            .setInteractive();
          ganhadorwinesquerdo = 1; perdedorlossdireito = 1;
          contadordepartida1.setVisible(false);
          contadordepartida2.setVisible(true);
          newgame.setVisible(true);
          contadorloss = game.add.image(130, 520, "bolverme").setInteractive();
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
          contadordepartida1 = game.add
            .image(130, 520, "bolverde")
            .setInteractive();
          ganhadorwindireito = 1; perdedorlossesquerdo = 1;
          contadordepartida1.setVisible(true);
          contadordepartida2.setVisible(false);
          newgame.setVisible(true);
          contadorloss = game.add.image(530, 520, "bolverme").setInteractive();
          contadorloss.setVisible(true);
        } else if (carta1.conhecimento.valor < carta2.conhecimento.valor) {
          placarTexto1.setVisible(false);
          placarTexto2.setVisible(false);
          vencedor.setVisible(true);
          textven = carta2.name + " GANHOU";
          vencedor.setText(textven);
           contadordepartida2 = game.add
            .image(530, 520, "bolverde")
            .setInteractive();
          ganhadorwinesquerdo = 1; perdedorlossdireito = 1;
          contadordepartida1.setVisible(false);
          contadordepartida2.setVisible(true);
          newgame.setVisible(true);
          contadorloss = game.add.image(130, 520, "bolverme").setInteractive();
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
          contadordepartida1 = game.add
            .image(130, 520, "bolverde")
            .setInteractive();
          ganhadorwindireito = 1; perdedorlossesquerdo = 1;
          contadordepartida1.setVisible(true);
          contadordepartida2.setVisible(false);
          newgame.setVisible(true);
          contadorloss = game.add.image(530, 520, "bolverme").setInteractive();
          contadorloss.setVisible(true);
        } else if (carta1.altura.valor < carta2.altura.valor) {
          placarTexto1.setVisible(false);
          placarTexto2.setVisible(false);
          vencedor.setVisible(true);
          textven = carta2.name + " GANHOU";
          vencedor.setText(textven);
           contadordepartida2 = game.add
            .image(530, 520, "bolverde")
            .setInteractive();
          ganhadorwinesquerdo = 1; perdedorlossdireito = 1;
          contadordepartida1.setVisible(false);
          contadordepartida2.setVisible(true);
          newgame.setVisible(true);
          contadorloss = game.add.image(130, 520, "bolverme").setInteractive();
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
          contadordepartida1 = game.add
            .image(130, 520, "bolverde")
            .setInteractive();
          ganhadorwindireito = 1; perdedorlossesquerdo = 1;
          contadordepartida1.setVisible(true);
          contadordepartida2.setVisible(false);
          newgame.setVisible(true);
          contadorloss = game.add.image(530, 520, "bolverme").setInteractive();
          contadorloss.setVisible(true);
        } else if (carta1.idade.valor < carta2.idade.valor) {
          placarTexto1.setVisible(false);
          placarTexto2.setVisible(false);
          vencedor.setVisible(true);
          textven = carta2.name + " GANHOU";
          vencedor.setText(textven);
           contadordepartida2 = game.add
            .image(530, 520, "bolverde")
            .setInteractive();
          ganhadorwinesquerdo = 1; perdedorlossdireito = 1;
          contadordepartida1.setVisible(false);
          contadordepartida2.setVisible(true);
          newgame.setVisible(true);
          contadorloss = game.add.image(130, 520, "bolverme").setInteractive();
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
      });
    } else if (contagem === 2) {
      var carta1fundo = game.add.image(200, 301, carta1.fundo).setInteractive();
      var habilidade1 = game.add
        .image(200, 321, carta1.habilidade.imagem)
        .setInteractive();
      var simpatia1 = game.add
        .image(200, 355, carta1.simpatia.imagem)
        .setInteractive();
      var conhecimento1 = game.add
        .image(200, 385, carta1.conhecimento.imagem)
        .setInteractive();
      var altura1 = game.add
        .image(200, 416, carta1.altura.imagem)
        .setInteractive();
      var idade1 = game.add
        .image(200, 445, carta1.idade.imagem)
        .setInteractive();

      var carta2fundo = game.add.image(600, 300, carta2.fundo).setInteractive();
      var habilidade2 = game.add
        .image(600, 325, carta2.habilidade.imagem)
        .setInteractive();
      var simpatia2 = game.add
        .image(600, 355, carta2.simpatia.imagem)
        .setInteractive();
      var conhecimento2 = game.add
        .image(600, 385, carta2.conhecimento.imagem)
        .setInteractive();
      var altura2 = game.add
        .image(600, 415, carta2.altura.imagem)
        .setInteractive();
      var idade2 = game.add
        .image(600, 445, carta2.idade.imagem)
        .setInteractive();
      var contadordepartida1 = game.add
        .image(130, 520, "bolcinza")
        .setInteractive();
      var bolicinza = game.add.image(170, 520, "bolcinza").setInteractive();
      var bolicinza2 = game.add.image(210, 520, "bolcinza").setInteractive();
      var bolicinza3 = game.add.image(250, 520, "bolcinza").setInteractive();
      var bolicinza4 = game.add.image(290, 520, "bolcinza").setInteractive();
      var contadordepartida2 = game.add
        .image(530, 520, "bolcinza")
        .setInteractive();
      var bolicinza5 = game.add.image(570, 520, "bolcinza").setInteractive();
      var bolicinza6 = game.add.image(610, 520, "bolcinza").setInteractive();
      var bolicinza7 = game.add.image(650, 520, "bolcinza").setInteractive();
      var bolicinza8 = game.add.image(690, 520, "bolcinza").setInteractive();
      var contadorloss;
      var contadorwin;
      contadordepartida1.setVisible(false);
      contadordepartida2.setVisible(false);
      bolicinza.setVisible(false);
      bolicinza2.setVisible(false);
      bolicinza3.setVisible(false);
      bolicinza4.setVisible(false);
      bolicinza5.setVisible(false);
      bolicinza6.setVisible(false);
      bolicinza7.setVisible(false);
      bolicinza8.setVisible(false);
      vencedor.setVisible(false);

      if (Math.round(Math.random()) === 0) {
        placar = "It's Your turn!!";
        placarTexto1.setVisible(true);
        placarTexto1.setText(placar);
        placarTexto2.setVisible(false);
        var imagembloqueio = game.add
          .image(600, 300, "fundograde")
          .setInteractive();
      } else {
        placar = "Its Your Turn!!";
        placarTexto1.setVisible(false);
        placarTexto2.setVisible(true);
        placarTexto2.setText(placar);
        //imagem de bloqueio
        var imagembloqueio = game.add
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
          newgame.setVisible(true);

          if (carta1.habilidade.valor > carta2.habilidade.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(true);
            textven = carta1.name + " GANHOU";
            vencedor.setText(textven);
            contadorwin = game.add.image(170, 520, "bolverde").setInteractive();
            ganhadorwindireito = 2; perdedorlossesquerdo = 2;
            contadordepartida1.setVisible(false);
            contadordepartida2.setVisible(false);
            newgame.setVisible(true);
            contadorloss = game.add
              .image(570, 520, "bolverme")
              .setInteractive();
            
            contadorloss.setVisible(true);
            contadorwin.setVisible(true);
            bolicinza.setVisible(false);
          } else if (carta1.habilidade.valor < carta2.habilidade.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(true);
            textven = carta2.name + " GANHOU";
            vencedor.setText(textven);
            contadorwin = game.add.image(570, 520, "bolverde").setInteractive();
            ganhadorwinesquerdo = 2;
            perdedorlossdireito = 2;
            contadordepartida1.setVisible(false);
            contadordepartida2.setVisible(false);
            newgame.setVisible(true);
            contadorloss = game.add
              .image(170, 520, "bolverme")
              .setInteractive();
            contadorloss.setVisible(true);
            contadorwin.setVisible(true);
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
        newgame.setVisible(true);
        if (carta1.simpatia.valor > carta2.simpatia.valor) {
          placarTexto1.setVisible(false);
          placarTexto2.setVisible(false);
          vencedor.setVisible(true);
          textven = carta1.name + " GANHOU";
          vencedor.setText(textven);
          contadorwin = game.add.image(170, 520, "bolverde").setInteractive();
          ganhadorwindireito = 2;
          perdedorlossesquerdo = 2;
          contadordepartida1.setVisible(false);
          contadordepartida2.setVisible(false);
          newgame.setVisible(true);
          contadorloss = game.add.image(570, 520, "bolverme").setInteractive();
          contadorloss.setVisible(true);
          contadorwin.setVisible(true);
          bolicinza.setVisible(false);
        } else if (carta1.simpatia.valor < carta2.simpatia.valor) {
          placarTexto1.setVisible(false);
          placarTexto2.setVisible(false);
          vencedor.setVisible(true);
          textven = carta2.name + " GANHOU";
          vencedor.setText(textven);
          contadorwin = game.add.image(570, 520, "bolverde").setInteractive();
          ganhadorwinesquerdo = 2;
          perdedorlossdireito = 2;
          contadordepartida1.setVisible(false);
          contadordepartida2.setVisible(false);
          newgame.setVisible(true);
          contadorloss = game.add.image(170, 520, "bolverme").setInteractive();
          contadorloss.setVisible(true);
          contadorwin.setVisible(true);
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
          contadorwin = game.add.image(170, 520, "bolverde").setInteractive();
          ganhadorwindireito = 2;
          perdedorlossesquerdo = 2;
          contadordepartida1.setVisible(false);
          contadordepartida2.setVisible(false);
          newgame.setVisible(true);
          contadorloss = game.add.image(570, 520, "bolverme").setInteractive();
          contadorloss.setVisible(true);
          contadorwin.setVisible(true);
          bolicinza.setVisible(false);
        } else if (carta1.conhecimento.valor < carta2.conhecimento.valor) {
          placarTexto1.setVisible(false);
          placarTexto2.setVisible(false);
          vencedor.setVisible(true);
          textven = carta2.name + " GANHOU";
          vencedor.setText(textven);
          contadorwin = game.add.image(570, 520, "bolverde").setInteractive();
          ganhadorwinesquerdo = 2;
          perdedorlossdireito = 2;
          contadordepartida1.setVisible(false);
          contadordepartida2.setVisible(false);
          newgame.setVisible(true);
          contadorloss = game.add.image(170, 520, "bolverme").setInteractive();
          contadorloss.setVisible(true);
          contadorwin.setVisible(true);
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
          contadorwin = game.add.image(170, 520, "bolverde").setInteractive();
          ganhadorwindireito = 2;
          perdedorlossesquerdo = 2;
          contadordepartida1.setVisible(false);
          contadordepartida2.setVisible(false);
          newgame.setVisible(true);
          contadorloss = game.add.image(570, 520, "bolverme").setInteractive();
          contadorloss.setVisible(true);
          contadorwin.setVisible(true);
          bolicinza.setVisible(false);
        } else if (carta1.altura.valor < carta2.altura.valor) {
          placarTexto1.setVisible(false);
          placarTexto2.setVisible(false);
          vencedor.setVisible(true);
          textven = carta2.name + " GANHOU";
          vencedor.setText(textven);
          contadorwin = game.add.image(570, 520, "bolverde").setInteractive();
          ganhadorwinesquerdo = 2;
          perdedorlossdireito = 2;
          contadordepartida1.setVisible(false);
          contadordepartida2.setVisible(false);
          newgame.setVisible(true);
          contadorloss = game.add.image(170, 520, "bolverme").setInteractive();
          contadorloss.setVisible(true);
          contadorwin.setVisible(true);
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
          contadorwin = game.add.image(170, 520, "bolverde").setInteractive();
          ganhadorwindireito = 2;
          perdedorlossesquerdo = 2;
          contadordepartida1.setVisible(false);
          contadordepartida2.setVisible(false);
          newgame.setVisible(true);
          contadorloss = game.add.image(570, 520, "bolverme").setInteractive();
          contadorloss.setVisible(true);
          contadorwin.setVisible(true);
          bolicinza.setVisible(false);
        } else if (carta1.idade.valor < carta2.idade.valor) {
          placarTexto1.setVisible(false);
          placarTexto2.setVisible(false);
          vencedor.setVisible(true);
          textven = carta2.name + " GANHOU";
          vencedor.setText(textven);
          contadorwin = game.add.image(570, 520, "bolverde").setInteractive();
          ganhadorwinesquerdo = 2;
          perdedorlossdireito = 2;
          contadordepartida1.setVisible(false);
          contadordepartida2.setVisible(false);
          newgame.setVisible(true);
          contadorloss = game.add.image(170, 520, "bolverme").setInteractive();
          contadorloss.setVisible(true);
          contadorwin.setVisible(true);
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
            contadorwin = game.add.image(170, 520, "bolverde").setInteractive();
            ganhadorwindireito = 2;
            perdedorlossesquerdo = 2;
            contadordepartida1.setVisible(false);
            contadordepartida2.setVisible(false);
            newgame.setVisible(true);
            contadorloss = game.add
              .image(570, 520, "bolverme")
              .setInteractive();
            contadorloss.setVisible(true);
            contadorwin.setVisible(true);
          } else if (carta1.habilidade.valor < carta2.habilidade.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(true);
            textven = carta2.name + " GANHOU";
            vencedor.setText(textven);
            contadorwin = game.add.image(570, 520, "bolverde").setInteractive();
            ganhadorwinesquerdo = 2;
            perdedorlossdireito = 2;
            contadordepartida1.setVisible(false);
            contadordepartida2.setVisible(false);
            newgame.setVisible(true);
            contadorloss = game.add
              .image(170, 520, "bolverme")
              .setInteractive();
            contadorloss.setVisible(true);
            contadorwin.setVisible(true);
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
          contadorwin = game.add.image(170, 520, "bolverde").setInteractive();
          ganhadorwindireito = 2;
          perdedorlossesquerdo = 2;
          contadordepartida1.setVisible(false);
          contadordepartida2.setVisible(false);
          newgame.setVisible(true);
          contadorloss = game.add.image(570, 520, "bolverme").setInteractive();
          contadorloss.setVisible(true);
          contadorwin.setVisible(true);
        } else if (carta1.simpatia.valor < carta2.simpatia.valor) {
          placarTexto1.setVisible(false);
          placarTexto2.setVisible(false);
          vencedor.setVisible(true);
          textven = carta2.name + " GANHOU";
          vencedor.setText(textven);
          contadorwin = game.add.image(570, 520, "bolverde").setInteractive();
          ganhadorwinesquerdo = 2;
          perdedorlossdireito = 2;
          contadordepartida1.setVisible(false);
          contadordepartida2.setVisible(false);
          newgame.setVisible(true);
          contadorloss = game.add.image(170, 520, "bolverme").setInteractive();
          contadorloss.setVisible(true);
          contadorwin.setVisible(true);
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
          contadorwin = game.add.image(170, 520, "bolverde").setInteractive();
          ganhadorwindireito = 2;
          perdedorlossesquerdo = 2;
          contadordepartida1.setVisible(false);
          contadordepartida2.setVisible(false);
          newgame.setVisible(true);
          contadorloss = game.add.image(570, 520, "bolverme").setInteractive();
          contadorloss.setVisible(true);
          contadorwin.setVisible(true);
        } else if (carta1.conhecimento.valor < carta2.conhecimento.valor) {
          placarTexto1.setVisible(false);
          placarTexto2.setVisible(false);
          vencedor.setVisible(true);
          textven = carta2.name + " GANHOU";
          vencedor.setText(textven);
          contadorwin = game.add.image(570, 520, "bolverde").setInteractive();
          ganhadorwinesquerdo = 2;
          perdedorlossdireito = 2;
          contadordepartida1.setVisible(false);
          contadordepartida2.setVisible(false);
          newgame.setVisible(true);
          contadorloss = game.add.image(170, 520, "bolverme").setInteractive();
          contadorloss.setVisible(true);
          contadorwin.setVisible(true);
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
          contadorwin = game.add.image(170, 520, "bolverde").setInteractive();
          ganhadorwindireito = 2;
          perdedorlossesquerdo = 2;
          contadordepartida1.setVisible(false);
          contadordepartida2.setVisible(false);
          newgame.setVisible(true);
          contadorloss = game.add.image(570, 520, "bolverme").setInteractive();
          contadorloss.setVisible(true);
          contadorwin.setVisible(true);
        } else if (carta1.altura.valor < carta2.altura.valor) {
          placarTexto1.setVisible(false);
          placarTexto2.setVisible(false);
          vencedor.setVisible(true);
          textven = carta2.name + " GANHOU";
          vencedor.setText(textven);
          contadorwin = game.add.image(570, 520, "bolverde").setInteractive();
          ganhadorwinesquerdo = 2;
          perdedorlossdireito = 2;
          contadordepartida1.setVisible(false);
          contadordepartida2.setVisible(false);
          newgame.setVisible(true);
          contadorloss = game.add.image(170, 520, "bolverme").setInteractive();
          contadorloss.setVisible(true);
          contadorwin.setVisible(true);
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
          contadorwin = game.add.image(170, 520, "bolverde").setInteractive();
          ganhadorwindireito = 2;
          perdedorlossesquerdo = 2;
          contadordepartida1.setVisible(false);
          contadordepartida2.setVisible(false);
          newgame.setVisible(true);
          contadorloss = game.add.image(570, 520, "bolverme").setInteractive();
          contadorloss.setVisible(true);
          contadorwin.setVisible(true);
        } else if (carta1.idade.valor < carta2.idade.valor) {
          placarTexto1.setVisible(false);
          placarTexto2.setVisible(false);
          vencedor.setVisible(true);
          textven = carta2.name + " GANHOU";
          vencedor.setText(textven);
          contadorwin = game.add.image(570, 520, "bolverde").setInteractive();
          ganhadorwinesquerdo = 2;
          perdedorlossdireito = 2;
          contadordepartida1.setVisible(false);
          contadordepartida2.setVisible(false);
          newgame.setVisible(true);
          contadorloss = game.add.image(170, 520, "bolverme").setInteractive();
          contadorloss.setVisible(true);
          contadorwin.setVisible(true);
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
    } else if (contagem === 3) {
      var carta1fundo = game.add.image(200, 301, carta1.fundo).setInteractive();
      var habilidade1 = game.add
        .image(200, 321, carta1.habilidade.imagem)
        .setInteractive();
      var simpatia1 = game.add
        .image(200, 355, carta1.simpatia.imagem)
        .setInteractive();
      var conhecimento1 = game.add
        .image(200, 385, carta1.conhecimento.imagem)
        .setInteractive();
      var altura1 = game.add
        .image(200, 416, carta1.altura.imagem)
        .setInteractive();
      var idade1 = game.add
        .image(200, 445, carta1.idade.imagem)
        .setInteractive();

      var carta2fundo = game.add.image(600, 300, carta2.fundo).setInteractive();
      var habilidade2 = game.add
        .image(600, 325, carta2.habilidade.imagem)
        .setInteractive();
      var simpatia2 = game.add
        .image(600, 355, carta2.simpatia.imagem)
        .setInteractive();
      var conhecimento2 = game.add
        .image(600, 385, carta2.conhecimento.imagem)
        .setInteractive();
      var altura2 = game.add
        .image(600, 415, carta2.altura.imagem)
        .setInteractive();
      var idade2 = game.add
        .image(600, 445, carta2.idade.imagem)
        .setInteractive();
      var contadordepartida1 = game.add
        .image(130, 520, "bolcinza")
        .setInteractive();
      var bolicinza = game.add.image(170, 520, "bolcinza").setInteractive();
      var bolicinza2 = game.add.image(210, 520, "bolcinza").setInteractive();
      var bolicinza3 = game.add.image(250, 520, "bolcinza").setInteractive();
      var bolicinza4 = game.add.image(290, 520, "bolcinza").setInteractive();
      var contadordepartida2 = game.add
        .image(530, 520, "bolcinza")
        .setInteractive();
      var bolicinza5 = game.add.image(570, 520, "bolcinza").setInteractive();
      var bolicinza6 = game.add.image(610, 520, "bolcinza").setInteractive();
      var bolicinza7 = game.add.image(650, 520, "bolcinza").setInteractive();
      var bolicinza8 = game.add.image(690, 520, "bolcinza").setInteractive();
      var contadorloss;
      var contadorwin;
      contadordepartida1.setVisible(false);
      contadordepartida2.setVisible(false);
      bolicinza.setVisible(false);
      bolicinza2.setVisible(false);
      bolicinza3.setVisible(false);
      bolicinza4.setVisible(false);
      bolicinza5.setVisible(false);
      bolicinza6.setVisible(false);
      bolicinza7.setVisible(false);
      bolicinza8.setVisible(false);
      vencedor.setVisible(false);

      if (Math.round(Math.random()) === 0) {
        placar = "It's Your turn!!";
        placarTexto1.setVisible(true);
        placarTexto1.setText(placar);
        placarTexto2.setVisible(false);
        var imagembloqueio = game.add
          .image(600, 300, "fundograde")
          .setInteractive();
      } else {
        placar = "Its Your Turn!!";
        placarTexto1.setVisible(false);
        placarTexto2.setVisible(true);
        placarTexto2.setText(placar);
        //imagem de bloqueio
        var imagembloqueio = game.add
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
          newgame.setVisible(true);

          if (carta1.habilidade.valor > carta2.habilidade.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(true);
            textven = carta1.name + " GANHOU";
            vencedor.setText(textven);
            contadorwin = game.add.image(210, 520, "bolverde").setInteractive();
            ganhadorwindireito = 3; perdedorlossesquerdo = 3;
            contadordepartida1.setVisible(false);
            contadordepartida2.setVisible(false);
            newgame.setVisible(true);
            contadorloss = game.add
              .image(610, 520, "bolverme")
              .setInteractive();
            contadorloss.setVisible(true);
            contadorwin.setVisible(true);
            bolicinza.setVisible(false);
          } else if (carta1.habilidade.valor < carta2.habilidade.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(true);
            textven = carta2.name + " GANHOU";
            vencedor.setText(textven);
            contadorwin = game.add.image(610, 520, "bolverde").setInteractive();
            ganhadorwinesquerdo = 3; perdedorlossdireito = 3;
            contadordepartida1.setVisible(false);
            contadordepartida2.setVisible(false);
            newgame.setVisible(true);
            contadorloss = game.add
              .image(210, 520, "bolverme")
              .setInteractive();
            contadorloss.setVisible(true);
            contadorwin.setVisible(true);
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
        newgame.setVisible(true);
        if (carta1.simpatia.valor > carta2.simpatia.valor) {
          placarTexto1.setVisible(false);
          placarTexto2.setVisible(false);
          vencedor.setVisible(true);
          textven = carta1.name + " GANHOU";
          vencedor.setText(textven);
          contadorwin = game.add.image(210, 520, "bolverde").setInteractive();
          ganhadorwindireito = 3;
          perdedorlossesquerdo = 3;
          contadordepartida1.setVisible(false);
          contadordepartida2.setVisible(false);
          newgame.setVisible(true);
          contadorloss = game.add.image(610, 520, "bolverme").setInteractive();
          contadorloss.setVisible(true);
          contadorwin.setVisible(true);
          bolicinza.setVisible(false);
        } else if (carta1.simpatia.valor < carta2.simpatia.valor) {
          placarTexto1.setVisible(false);
          placarTexto2.setVisible(false);
          vencedor.setVisible(true);
          textven = carta2.name + " GANHOU";
          vencedor.setText(textven);
          contadorwin = game.add.image(610, 520, "bolverde").setInteractive();
          ganhadorwinesquerdo = 3;
          perdedorlossdireito = 3;
          contadordepartida1.setVisible(false);
          contadordepartida2.setVisible(false);
          newgame.setVisible(true);
          contadorloss = game.add.image(210, 520, "bolverme").setInteractive();
          contadorloss.setVisible(true);
          contadorwin.setVisible(true);
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
          contadorwin = game.add.image(210, 520, "bolverde").setInteractive();
          ganhadorwindireito = 3;
          perdedorlossesquerdo = 3;
          contadordepartida1.setVisible(false);
          contadordepartida2.setVisible(false);
          newgame.setVisible(true);
          contadorloss = game.add.image(610, 520, "bolverme").setInteractive();
          contadorloss.setVisible(true);
          contadorwin.setVisible(true);
          bolicinza.setVisible(false);
        } else if (carta1.conhecimento.valor < carta2.conhecimento.valor) {
          placarTexto1.setVisible(false);
          placarTexto2.setVisible(false);
          vencedor.setVisible(true);
          textven = carta2.name + " GANHOU";
          vencedor.setText(textven);
          contadorwin = game.add.image(610, 520, "bolverde").setInteractive();
          ganhadorwinesquerdo = 3;
          perdedorlossdireito = 3;
          contadordepartida1.setVisible(false);
          contadordepartida2.setVisible(false);
          newgame.setVisible(true);
          contadorloss = game.add.image(210, 520, "bolverme").setInteractive();
          contadorloss.setVisible(true);
          contadorwin.setVisible(true);
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
          contadorwin = game.add.image(210, 520, "bolverde").setInteractive();
          ganhadorwindireito = 3;
          perdedorlossesquerdo = 3;
          contadordepartida1.setVisible(false);
          contadordepartida2.setVisible(false);
          newgame.setVisible(true);
          contadorloss = game.add.image(610, 520, "bolverme").setInteractive();
          contadorloss.setVisible(true);
          contadorwin.setVisible(true);
          bolicinza.setVisible(false);
        } else if (carta1.altura.valor < carta2.altura.valor) {
          placarTexto1.setVisible(false);
          placarTexto2.setVisible(false);
          vencedor.setVisible(true);
          textven = carta2.name + " GANHOU";
          vencedor.setText(textven);
          contadorwin = game.add.image(610, 520, "bolverde").setInteractive();
          ganhadorwinesquerdo = 3;
          perdedorlossdireito = 3;
          contadordepartida1.setVisible(false);
          contadordepartida2.setVisible(false);
          newgame.setVisible(true);
          contadorloss = game.add.image(210, 520, "bolverme").setInteractive();
          contadorloss.setVisible(true);
          contadorwin.setVisible(true);
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
          contadorwin = game.add.image(210, 520, "bolverde").setInteractive();
          ganhadorwindireito = 3;
          perdedorlossesquerdo = 3;
          contadordepartida1.setVisible(false);
          contadordepartida2.setVisible(false);
          newgame.setVisible(true);
          contadorloss = game.add.image(610, 520, "bolverme").setInteractive();
          contadorloss.setVisible(true);
          contadorwin.setVisible(true);
          bolicinza.setVisible(false);
        } else if (carta1.idade.valor < carta2.idade.valor) {
          placarTexto1.setVisible(false);
          placarTexto2.setVisible(false);
          vencedor.setVisible(true);
          textven = carta2.name + " GANHOU";
          vencedor.setText(textven);
          contadorwin = game.add.image(610, 520, "bolverde").setInteractive();
          ganhadorwinesquerdo = 3;
          perdedorlossdireito = 3;
          contadordepartida1.setVisible(false);
          contadordepartida2.setVisible(false);
          newgame.setVisible(true);
          contadorloss = game.add.image(210, 520, "bolverme").setInteractive();
          contadorloss.setVisible(true);
          contadorwin.setVisible(true);
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
            contadorwin = game.add.image(210, 520, "bolverde").setInteractive();
            ganhadorwindireito = 3;
            perdedorlossesquerdo = 3;
            contadordepartida1.setVisible(false);
            contadordepartida2.setVisible(false);
            newgame.setVisible(true);
            contadorloss = game.add
              .image(610, 520, "bolverme")
              .setInteractive();
            contadorloss.setVisible(true);
            contadorwin.setVisible(true);
          } else if (carta1.habilidade.valor < carta2.habilidade.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(true);
            textven = carta2.name + " GANHOU";
            vencedor.setText(textven);
            contadorwin = game.add.image(610, 520, "bolverde").setInteractive();
            ganhadorwinesquerdo = 3;
            perdedorlossdireito = 3;
            contadordepartida1.setVisible(false);
            contadordepartida2.setVisible(false);
            newgame.setVisible(true);
            contadorloss = game.add
              .image(210, 520, "bolverme")
              .setInteractive();
            contadorloss.setVisible(true);
            contadorwin.setVisible(true);
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
          contadorwin = game.add.image(210, 520, "bolverde").setInteractive();
          ganhadorwindireito = 3;
          perdedorlossesquerdo = 3;
          contadordepartida1.setVisible(false);
          contadordepartida2.setVisible(false);
          newgame.setVisible(true);
          contadorloss = game.add.image(610, 520, "bolverme").setInteractive();
          contadorloss.setVisible(true);
          contadorwin.setVisible(true);
        } else if (carta1.simpatia.valor < carta2.simpatia.valor) {
          placarTexto1.setVisible(false);
          placarTexto2.setVisible(false);
          vencedor.setVisible(true);
          textven = carta2.name + " GANHOU";
          vencedor.setText(textven);
          contadorwin = game.add.image(610, 520, "bolverde").setInteractive();
          ganhadorwinesquerdo = 3;
          perdedorlossdireito = 3;
          contadordepartida1.setVisible(false);
          contadordepartida2.setVisible(false);
          newgame.setVisible(true);
          contadorloss = game.add.image(210, 520, "bolverme").setInteractive();
          contadorloss.setVisible(true);
          contadorwin.setVisible(true);
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
          contadorwin = game.add.image(210, 520, "bolverde").setInteractive();
          ganhadorwindireito = 3;
          perdedorlossesquerdo = 3;
          contadordepartida1.setVisible(false);
          contadordepartida2.setVisible(false);
          newgame.setVisible(true);
          contadorloss = game.add.image(610, 520, "bolverme").setInteractive();
          contadorloss.setVisible(true);
          contadorwin.setVisible(true);
        } else if (carta1.conhecimento.valor < carta2.conhecimento.valor) {
          placarTexto1.setVisible(false);
          placarTexto2.setVisible(false);
          vencedor.setVisible(true);
          textven = carta2.name + " GANHOU";
          vencedor.setText(textven);
          contadorwin = game.add.image(610, 520, "bolverde").setInteractive();
          ganhadorwinesquerdo = 3;
          perdedorlossdireito = 3;
          contadordepartida1.setVisible(false);
          contadordepartida2.setVisible(false);
          newgame.setVisible(true);
          contadorloss = game.add.image(210, 520, "bolverme").setInteractive();
          contadorloss.setVisible(true);
          contadorwin.setVisible(true);
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
          contadorwin = game.add.image(210, 520, "bolverde").setInteractive();
          ganhadorwindireito = 3;
          perdedorlossesquerdo = 3;
          contadordepartida1.setVisible(false);
          contadordepartida2.setVisible(false);
          newgame.setVisible(true);
          contadorloss = game.add.image(610, 520, "bolverme").setInteractive();
          contadorloss.setVisible(true);
          contadorwin.setVisible(true);
        } else if (carta1.altura.valor < carta2.altura.valor) {
          placarTexto1.setVisible(false);
          placarTexto2.setVisible(false);
          vencedor.setVisible(true);
          textven = carta2.name + " GANHOU";
          vencedor.setText(textven);
          contadorwin = game.add.image(610, 520, "bolverde").setInteractive();
          ganhadorwinesquerdo = 3;
          perdedorlossdireito = 3;
          contadordepartida1.setVisible(false);
          contadordepartida2.setVisible(false);
          newgame.setVisible(true);
          contadorloss = game.add.image(210, 520, "bolverme").setInteractive();
          contadorloss.setVisible(true);
          contadorwin.setVisible(true);
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
          contadorwin = game.add.image(210, 520, "bolverde").setInteractive();
          ganhadorwindireito = 3;
          perdedorlossesquerdo = 3;
          contadordepartida1.setVisible(false);
          contadordepartida2.setVisible(false);
          newgame.setVisible(true);
          contadorloss = game.add.image(610, 520, "bolverme").setInteractive();
          contadorloss.setVisible(true);
          contadorwin.setVisible(true);
        } else if (carta1.idade.valor < carta2.idade.valor) {
          placarTexto1.setVisible(false);
          placarTexto2.setVisible(false);
          vencedor.setVisible(true);
          textven = carta2.name + " GANHOU";
          vencedor.setText(textven);
          contadorwin = game.add.image(610, 520, "bolverde").setInteractive();
          ganhadorwinesquerdo = 3;
          perdedorlossdireito = 3;
          contadordepartida1.setVisible(false);
          contadordepartida2.setVisible(false);
          newgame.setVisible(true);
          contadorloss = game.add.image(210, 520, "bolverme").setInteractive();
          contadorloss.setVisible(true);
          contadorwin.setVisible(true);
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
    } else if (contagem === 4) {
      var carta1fundo = game.add.image(200, 301, carta1.fundo).setInteractive();
      var habilidade1 = game.add
        .image(200, 321, carta1.habilidade.imagem)
        .setInteractive();
      var simpatia1 = game.add
        .image(200, 355, carta1.simpatia.imagem)
        .setInteractive();
      var conhecimento1 = game.add
        .image(200, 385, carta1.conhecimento.imagem)
        .setInteractive();
      var altura1 = game.add
        .image(200, 416, carta1.altura.imagem)
        .setInteractive();
      var idade1 = game.add
        .image(200, 445, carta1.idade.imagem)
        .setInteractive();

      var carta2fundo = game.add.image(600, 300, carta2.fundo).setInteractive();
      var habilidade2 = game.add
        .image(600, 325, carta2.habilidade.imagem)
        .setInteractive();
      var simpatia2 = game.add
        .image(600, 355, carta2.simpatia.imagem)
        .setInteractive();
      var conhecimento2 = game.add
        .image(600, 385, carta2.conhecimento.imagem)
        .setInteractive();
      var altura2 = game.add
        .image(600, 415, carta2.altura.imagem)
        .setInteractive();
      var idade2 = game.add
        .image(600, 445, carta2.idade.imagem)
        .setInteractive();
      var contadordepartida1 = game.add
        .image(130, 520, "bolcinza")
        .setInteractive();
      var bolicinza = game.add.image(170, 520, "bolcinza").setInteractive();
      var bolicinza2 = game.add.image(210, 520, "bolcinza").setInteractive();
      var bolicinza3 = game.add.image(250, 520, "bolcinza").setInteractive();
      var bolicinza4 = game.add.image(290, 520, "bolcinza").setInteractive();
      var contadordepartida2 = game.add
        .image(530, 520, "bolcinza")
        .setInteractive();
      var bolicinza5 = game.add.image(570, 520, "bolcinza").setInteractive();
      var bolicinza6 = game.add.image(610, 520, "bolcinza").setInteractive();
      var bolicinza7 = game.add.image(650, 520, "bolcinza").setInteractive();
      var bolicinza8 = game.add.image(690, 520, "bolcinza").setInteractive();
      var contadorloss;
      var contadorwin;
      contadordepartida1.setVisible(false);
      contadordepartida2.setVisible(false);
      bolicinza.setVisible(false);
      bolicinza2.setVisible(false);
      bolicinza3.setVisible(false);
      bolicinza4.setVisible(false);
      bolicinza5.setVisible(false);
      bolicinza6.setVisible(false);
      bolicinza7.setVisible(false);
      bolicinza8.setVisible(false);
      vencedor.setVisible(false);

      if (Math.round(Math.random()) === 0) {
        placar = "It's Your turn!!";
        placarTexto1.setVisible(true);
        placarTexto1.setText(placar);
        placarTexto2.setVisible(false);
        var imagembloqueio = game.add
          .image(600, 300, "fundograde")
          .setInteractive();
      } else {
        placar = "Its Your Turn!!";
        placarTexto1.setVisible(false);
        placarTexto2.setVisible(true);
        placarTexto2.setText(placar);
        //imagem de bloqueio
        var imagembloqueio = game.add
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
          newgame.setVisible(true);

          if (carta1.habilidade.valor > carta2.habilidade.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(true);
            textven = carta1.name + " GANHOU";
            vencedor.setText(textven);
            contadorwin = game.add.image(250, 520, "bolverde").setInteractive();
            ganhadorwindireito = 4;
            contadordepartida1.setVisible(false);
            contadordepartida2.setVisible(false);
            newgame.setVisible(true);
            contadorloss = game.add
              .image(650, 520, "bolverme")
              .setInteractive();
            contadorloss.setVisible(true);
            contadorwin.setVisible(true);
            bolicinza.setVisible(false);
          } else if (carta1.habilidade.valor < carta2.habilidade.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(true);
            textven = carta2.name + " GANHOU";
            vencedor.setText(textven);
            contadorwin = game.add.image(650, 520, "bolverde").setInteractive();
            ganhadorwinesquerdo = 4;
            contadordepartida1.setVisible(false);
            contadordepartida2.setVisible(false);
            newgame.setVisible(true);
            contadorloss = game.add
              .image(250, 520, "bolverme")
              .setInteractive();
            contadorloss.setVisible(true);
            contadorwin.setVisible(true);
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
        newgame.setVisible(true);
        if (carta1.simpatia.valor > carta2.simpatia.valor) {
          placarTexto1.setVisible(false);
          placarTexto2.setVisible(false);
          vencedor.setVisible(true);
          textven = carta1.name + " GANHOU";
          vencedor.setText(textven);
          contadorwin = game.add.image(250, 520, "bolverde").setInteractive();
          ganhadorwindireito = 4;
          contadordepartida1.setVisible(false);
          contadordepartida2.setVisible(false);
          newgame.setVisible(true);
          contadorloss = game.add.image(650, 520, "bolverme").setInteractive();
          contadorloss.setVisible(true);
          contadorwin.setVisible(true);
          bolicinza.setVisible(false);
        } else if (carta1.simpatia.valor < carta2.simpatia.valor) {
          placarTexto1.setVisible(false);
          placarTexto2.setVisible(false);
          vencedor.setVisible(true);
          textven = carta2.name + " GANHOU";
          vencedor.setText(textven);
          contadorwin = game.add.image(650, 520, "bolverde").setInteractive();
          ganhadorwinesquerdo = 4;
          contadordepartida1.setVisible(false);
          contadordepartida2.setVisible(false);
          newgame.setVisible(true);
          contadorloss = game.add.image(250, 520, "bolverme").setInteractive();
          contadorloss.setVisible(true);
          contadorwin.setVisible(true);
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
          contadorwin = game.add.image(250, 520, "bolverde").setInteractive();
          ganhadorwindireito = 4;
          contadordepartida1.setVisible(false);
          contadordepartida2.setVisible(false);
          newgame.setVisible(true);
          contadorloss = game.add.image(650, 520, "bolverme").setInteractive();
          contadorloss.setVisible(true);
          contadorwin.setVisible(true);
          bolicinza.setVisible(false);
        } else if (carta1.conhecimento.valor < carta2.conhecimento.valor) {
          placarTexto1.setVisible(false);
          placarTexto2.setVisible(false);
          vencedor.setVisible(true);
          textven = carta2.name + " GANHOU";
          vencedor.setText(textven);
          contadorwin = game.add.image(650, 520, "bolverde").setInteractive();
          ganhadorwinesquerdo = 4;
          contadordepartida1.setVisible(false);
          contadordepartida2.setVisible(false);
          newgame.setVisible(true);
          contadorloss = game.add.image(250, 520, "bolverme").setInteractive();
          contadorloss.setVisible(true);
          contadorwin.setVisible(true);
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
          contadorwin = game.add.image(250, 520, "bolverde").setInteractive();
          ganhadorwindireito = 4;
          contadordepartida1.setVisible(false);
          contadordepartida2.setVisible(false);
          newgame.setVisible(true);
          contadorloss = game.add.image(650, 520, "bolverme").setInteractive();
          contadorloss.setVisible(true);
          contadorwin.setVisible(true);
          bolicinza.setVisible(false);
        } else if (carta1.altura.valor < carta2.altura.valor) {
          placarTexto1.setVisible(false);
          placarTexto2.setVisible(false);
          vencedor.setVisible(true);
          textven = carta2.name + " GANHOU";
          vencedor.setText(textven);
          contadorwin = game.add.image(650, 520, "bolverde").setInteractive();
          ganhadorwinesquerdo = 4;
          contadordepartida1.setVisible(false);
          contadordepartida2.setVisible(false);
          newgame.setVisible(true);
          contadorloss = game.add.image(250, 520, "bolverme").setInteractive();
          contadorloss.setVisible(true);
          contadorwin.setVisible(true);
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
          contadorwin = game.add.image(250, 520, "bolverde").setInteractive();
          ganhadorwindireito = 4;
          contadordepartida1.setVisible(false);
          contadordepartida2.setVisible(false);
          newgame.setVisible(true);
          contadorloss = game.add.image(650, 520, "bolverme").setInteractive();
          contadorloss.setVisible(true);
          contadorwin.setVisible(true);
          bolicinza.setVisible(false);
        } else if (carta1.idade.valor < carta2.idade.valor) {
          placarTexto1.setVisible(false);
          placarTexto2.setVisible(false);
          vencedor.setVisible(true);
          textven = carta2.name + " GANHOU";
          vencedor.setText(textven);
          contadorwin = game.add.image(650, 520, "bolverde").setInteractive();
          ganhadorwinesquerdo = 4;
          contadordepartida1.setVisible(false);
          contadordepartida2.setVisible(false);
          newgame.setVisible(true);
          contadorloss = game.add.image(250, 520, "bolverme").setInteractive();
          contadorloss.setVisible(true);
          contadorwin.setVisible(true);
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
            contadorwin = game.add.image(250, 520, "bolverde").setInteractive();
            ganhadorwindireito = 4;
            contadordepartida1.setVisible(false);
            contadordepartida2.setVisible(false);
            newgame.setVisible(true);
            contadorloss = game.add
              .image(650, 520, "bolverme")
              .setInteractive();
            contadorloss.setVisible(true);
            contadorwin.setVisible(true);
          } else if (carta1.habilidade.valor < carta2.habilidade.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(true);
            textven = carta2.name + " GANHOU";
            vencedor.setText(textven);
            contadorwin = game.add.image(650, 520, "bolverde").setInteractive();
            ganhadorwinesquerdo = 4;
            contadordepartida1.setVisible(false);
            contadordepartida2.setVisible(false);
            newgame.setVisible(true);
            contadorloss = game.add
              .image(250, 520, "bolverme")
              .setInteractive();
            contadorloss.setVisible(true);
            contadorwin.setVisible(true);
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
          contadorwin = game.add.image(250, 520, "bolverde").setInteractive();
          ganhadorwindireito = 4;
          contadordepartida1.setVisible(false);
          contadordepartida2.setVisible(false);
          newgame.setVisible(true);
          contadorloss = game.add.image(650, 520, "bolverme").setInteractive();
          contadorloss.setVisible(true);
          contadorwin.setVisible(true);
        } else if (carta1.simpatia.valor < carta2.simpatia.valor) {
          placarTexto1.setVisible(false);
          placarTexto2.setVisible(false);
          vencedor.setVisible(true);
          textven = carta2.name + " GANHOU";
          vencedor.setText(textven);
          contadorwin = game.add.image(650, 520, "bolverde").setInteractive();
          ganhadorwinesquerdo = 4;
          contadordepartida1.setVisible(false);
          contadordepartida2.setVisible(false);
          newgame.setVisible(true);
          contadorloss = game.add.image(250, 520, "bolverme").setInteractive();
          contadorloss.setVisible(true);
          contadorwin.setVisible(true);
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
          contadorwin = game.add.image(250, 520, "bolverde").setInteractive();
          ganhadorwindireito = 4;
          contadordepartida1.setVisible(false);
          contadordepartida2.setVisible(false);
          newgame.setVisible(true);
          contadorloss = game.add.image(650, 520, "bolverme").setInteractive();
          contadorloss.setVisible(true);
          contadorwin.setVisible(true);
        } else if (carta1.conhecimento.valor < carta2.conhecimento.valor) {
          placarTexto1.setVisible(false);
          placarTexto2.setVisible(false);
          vencedor.setVisible(true);
          textven = carta2.name + " GANHOU";
          vencedor.setText(textven);
          contadorwin = game.add.image(650, 520, "bolverde").setInteractive();
          ganhadorwinesquerdo = 4;
          contadordepartida1.setVisible(false);
          contadordepartida2.setVisible(false);
          newgame.setVisible(true);
          contadorloss = game.add.image(250, 520, "bolverme").setInteractive();
          contadorloss.setVisible(true);
          contadorwin.setVisible(true);
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
          contadorwin = game.add.image(250, 520, "bolverde").setInteractive();
          ganhadorwindireito = 4;
          contadordepartida1.setVisible(false);
          contadordepartida2.setVisible(false);
          newgame.setVisible(true);
          contadorloss = game.add.image(650, 520, "bolverme").setInteractive();
          contadorloss.setVisible(true);
          contadorwin.setVisible(true);
        } else if (carta1.altura.valor < carta2.altura.valor) {
          placarTexto1.setVisible(false);
          placarTexto2.setVisible(false);
          vencedor.setVisible(true);
          textven = carta2.name + " GANHOU";
          vencedor.setText(textven);
          contadorwin = game.add.image(650, 520, "bolverde").setInteractive();
          ganhadorwinesquerdo = 4;
          contadordepartida1.setVisible(false);
          contadordepartida2.setVisible(false);
          newgame.setVisible(true);
          contadorloss = game.add.image(250, 520, "bolverme").setInteractive();
          contadorloss.setVisible(true);
          contadorwin.setVisible(true);
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
          contadorwin = game.add.image(250, 520, "bolverde").setInteractive();
          ganhadorwindireito = 4;
          contadordepartida1.setVisible(false);
          contadordepartida2.setVisible(false);
          newgame.setVisible(true);
          contadorloss = game.add.image(650, 520, "bolverme").setInteractive();
          contadorloss.setVisible(true);
          contadorwin.setVisible(true);
        } else if (carta1.idade.valor < carta2.idade.valor) {
          placarTexto1.setVisible(false);
          placarTexto2.setVisible(false);
          vencedor.setVisible(true);
          textven = carta2.name + " GANHOU";
          vencedor.setText(textven);
          contadorwin = game.add.image(650, 520, "bolverde").setInteractive();
          ganhadorwinesquerdo = 4;
          contadordepartida1.setVisible(false);
          contadordepartida2.setVisible(false);
          newgame.setVisible(true);
          contadorloss = game.add.image(250, 520, "bolverme").setInteractive();
          contadorloss.setVisible(true);
          contadorwin.setVisible(true);
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
    } else {
      var carta1fundo = game.add.image(200, 301, carta1.fundo).setInteractive();
      var habilidade1 = game.add
        .image(200, 321, carta1.habilidade.imagem)
        .setInteractive();
      var simpatia1 = game.add
        .image(200, 355, carta1.simpatia.imagem)
        .setInteractive();
      var conhecimento1 = game.add
        .image(200, 385, carta1.conhecimento.imagem)
        .setInteractive();
      var altura1 = game.add
        .image(200, 416, carta1.altura.imagem)
        .setInteractive();
      var idade1 = game.add
        .image(200, 445, carta1.idade.imagem)
        .setInteractive();

      var carta2fundo = game.add.image(600, 300, carta2.fundo).setInteractive();
      var habilidade2 = game.add
        .image(600, 325, carta2.habilidade.imagem)
        .setInteractive();
      var simpatia2 = game.add
        .image(600, 355, carta2.simpatia.imagem)
        .setInteractive();
      var conhecimento2 = game.add
        .image(600, 385, carta2.conhecimento.imagem)
        .setInteractive();
      var altura2 = game.add
        .image(600, 415, carta2.altura.imagem)
        .setInteractive();
      var idade2 = game.add
        .image(600, 445, carta2.idade.imagem)
        .setInteractive();
      var contadordepartida1 = game.add
        .image(130, 520, "bolcinza")
        .setInteractive();
      var bolicinza = game.add.image(170, 520, "bolcinza").setInteractive();
      var bolicinza2 = game.add.image(210, 520, "bolcinza").setInteractive();
      var bolicinza3 = game.add.image(250, 520, "bolcinza").setInteractive();
      var bolicinza4 = game.add.image(290, 520, "bolcinza").setInteractive();
      var contadordepartida2 = game.add
        .image(530, 520, "bolcinza")
        .setInteractive();
      var bolicinza5 = game.add.image(570, 520, "bolcinza").setInteractive();
      var bolicinza6 = game.add.image(610, 520, "bolcinza").setInteractive();
      var bolicinza7 = game.add.image(650, 520, "bolcinza").setInteractive();
      var bolicinza8 = game.add.image(690, 520, "bolcinza").setInteractive();
      var contadorloss;
      var contadorwin;
      contadordepartida1.setVisible(false);
      contadordepartida2.setVisible(false);
      bolicinza.setVisible(false);
      bolicinza2.setVisible(false);
      bolicinza3.setVisible(false);
      bolicinza4.setVisible(false);
      bolicinza5.setVisible(false);
      bolicinza6.setVisible(false);
      bolicinza7.setVisible(false);
      bolicinza8.setVisible(false);
      vencedor.setVisible(false);

      if (Math.round(Math.random()) === 0) {
        placar = "It's Your turn!!";
        placarTexto1.setVisible(true);
        placarTexto1.setText(placar);
        placarTexto2.setVisible(false);
        var imagembloqueio = game.add
          .image(600, 300, "fundograde")
          .setInteractive();
      } else {
        placar = "Its Your Turn!!";
        placarTexto1.setVisible(false);
        placarTexto2.setVisible(true);
        placarTexto2.setText(placar);
        //imagem de bloqueio
        var imagembloqueio = game.add
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
          newgame.setVisible(true);

          if (carta1.habilidade.valor > carta2.habilidade.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(true);
            textven = carta1.name + " GANHOU";
  
            contadorwin = game.add.image(290, 520, "bolverde").setInteractive();
            ganhadorwindireito = 5;
            contadordepartida1.setVisible(false);
            contadordepartida2.setVisible(false);
            newgame.setVisible(false);
            contadorloss = game.add
              .image(690, 520, "bolverme")
              .setInteractive();
            contadorloss.setVisible(true);
            contadorwin.setVisible(true);
            bolicinza.setVisible(false);
          } else if (carta1.habilidade.valor < carta2.habilidade.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(true);
            textven = carta2.name + " GANHOU";
  
            contadorwin = game.add.image(690, 520, "bolverde").setInteractive(); ganhadorwinesquerdo=5;
            contadordepartida1.setVisible(false);
            contadordepartida2.setVisible(false);
            newgame.setVisible(false);
            contadorloss = game.add
              .image(290, 520, "bolverme")
              .setInteractive();
            contadorloss.setVisible(true);
            contadorwin.setVisible(true);
          } else {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(true);
            textven = "EMPATE";
  
            contadordepartida1.setVisible(true);
            contadordepartida2.setVisible(true);

            newgame.setVisible(false);
          }
        },
        this
      );

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
        newgame.setVisible(true);
        if (carta1.simpatia.valor > carta2.simpatia.valor) {
          placarTexto1.setVisible(false);
          placarTexto2.setVisible(false);
          vencedor.setVisible(true);
          textven = carta1.name + " GANHOU";

          contadorwin = game.add.image(290, 520, "bolverde").setInteractive(); ganhadorwindireito = 5;
          contadordepartida1.setVisible(false);
          contadordepartida2.setVisible(false);
          newgame.setVisible(false);
          contadorloss = game.add.image(690, 520, "bolverme").setInteractive();
          contadorloss.setVisible(true);
          contadorwin.setVisible(true);
          bolicinza.setVisible(false);
        } else if (carta1.simpatia.valor < carta2.simpatia.valor) {
          placarTexto1.setVisible(false);
          placarTexto2.setVisible(false);
          vencedor.setVisible(true);
          textven = carta2.name + " GANHOU";

          contadorwin = game.add.image(690, 520, "bolverde").setInteractive(); ganhadorwinesquerdo=5;
          contadordepartida1.setVisible(false);
          contadordepartida2.setVisible(false);
          newgame.setVisible(false);
          contadorloss = game.add.image(290, 520, "bolverme").setInteractive();
          contadorloss.setVisible(true);
          contadorwin.setVisible(true);
        } else {
          placarTexto1.setVisible(false);
          placarTexto2.setVisible(false);
          vencedor.setVisible(true);
          textven = "EMPATE";

          contadordepartida1.setVisible(true);
          contadordepartida2.setVisible(true);

          newgame.setVisible(false);
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

          contadorwin = game.add.image(290, 520, "bolverde").setInteractive(); ganhadorwindireito = 5;
          contadordepartida1.setVisible(false);
          contadordepartida2.setVisible(false);
          newgame.setVisible(false);
          contadorloss = game.add.image(690, 520, "bolverme").setInteractive();
          contadorloss.setVisible(true);
          contadorwin.setVisible(true);
          bolicinza.setVisible(false);
        } else if (carta1.conhecimento.valor < carta2.conhecimento.valor) {
          placarTexto1.setVisible(false);
          placarTexto2.setVisible(false);
          vencedor.setVisible(true);
          textven = carta2.name + " GANHOU";

          contadorwin = game.add.image(690, 520, "bolverde").setInteractive(); ganhadorwinesquerdo=5;
          contadordepartida1.setVisible(false);
          contadordepartida2.setVisible(false);
          newgame.setVisible(false);
          contadorloss = game.add.image(290, 520, "bolverme").setInteractive();
          contadorloss.setVisible(true);
          contadorwin.setVisible(true);
        } else {
          placarTexto1.setVisible(false);
          placarTexto2.setVisible(false);
          vencedor.setVisible(true);
          textven = "EMPATE";

          contadordepartida1.setVisible(true);
          contadordepartida2.setVisible(true);

          newgame.setVisible(false);
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

          contadorwin = game.add.image(290, 520, "bolverde").setInteractive(); ganhadorwindireito = 5;
          contadordepartida1.setVisible(false);
          contadordepartida2.setVisible(false);
          newgame.setVisible(false);
          contadorloss = game.add.image(690, 520, "bolverme").setInteractive();
          contadorloss.setVisible(true);
          contadorwin.setVisible(true);
          bolicinza.setVisible(false);
        } else if (carta1.altura.valor < carta2.altura.valor) {
          placarTexto1.setVisible(false);
          placarTexto2.setVisible(false);
          vencedor.setVisible(true);
          textven = carta2.name + " GANHOU";

          contadorwin = game.add.image(690, 520, "bolverde").setInteractive(); ganhadorwinesquerdo=5;
          contadordepartida1.setVisible(false);
          contadordepartida2.setVisible(false);
          newgame.setVisible(false);
          contadorloss = game.add.image(290, 520, "bolverme").setInteractive();
          contadorloss.setVisible(true);
          contadorwin.setVisible(true);
        } else {
          placarTexto1.setVisible(false);
          placarTexto2.setVisible(false);
          vencedor.setVisible(true);
          textven = "EMPATE";

          contadordepartida1.setVisible(true);
          contadordepartida2.setVisible(true);

          newgame.setVisible(false);
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

          contadorwin = game.add.image(290, 520, "bolverde").setInteractive(); ganhadorwindireito = 5;
          contadordepartida1.setVisible(false);
          contadordepartida2.setVisible(false);
          newgame.setVisible(false);
          contadorloss = game.add.image(690, 520, "bolverme").setInteractive();
          contadorloss.setVisible(true);
          contadorwin.setVisible(true);
          bolicinza.setVisible(false);
        } else if (carta1.idade.valor < carta2.idade.valor) {
          placarTexto1.setVisible(false);
          placarTexto2.setVisible(false);
          vencedor.setVisible(true);
          textven = carta2.name + " GANHOU";

          contadorwin = game.add.image(690, 520, "bolverde").setInteractive(); ganhadorwinesquerdo=5;
          contadordepartida1.setVisible(false);
          contadordepartida2.setVisible(false);
          newgame.setVisible(false);
          contadorloss = game.add.image(290, 520, "bolverme").setInteractive();
          contadorloss.setVisible(true);
          contadorwin.setVisible(true);
        } else {
          placarTexto1.setVisible(false);
          placarTexto2.setVisible(false);
          vencedor.setVisible(true);
          textven = "EMPATE";

          contadordepartida1.setVisible(true);
          contadordepartida2.setVisible(true);

          newgame.setVisible(false);
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
  
            contadorwin = game.add.image(290, 520, "bolverde").setInteractive(); ganhadorwindireito = 5;
            contadordepartida1.setVisible(false);
            contadordepartida2.setVisible(false);
            newgame.setVisible(false);
            contadorloss = game.add
              .image(690, 520, "bolverme")
              .setInteractive();
            contadorloss.setVisible(true);
            contadorwin.setVisible(true);
          } else if (carta1.habilidade.valor < carta2.habilidade.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(true);
            textven = carta2.name + " GANHOU";
  
            contadorwin = game.add.image(690, 520, "bolverde").setInteractive(); ganhadorwinesquerdo=5;
            contadordepartida1.setVisible(false);
            contadordepartida2.setVisible(false);
            newgame.setVisible(false);
            contadorloss = game.add
              .image(290, 520, "bolverme")
              .setInteractive();
            contadorloss.setVisible(true);
            contadorwin.setVisible(true);
          } else {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(true);
            textven = "EMPATE";
  
            contadordepartida1.setVisible(true);
            contadordepartida2.setVisible(true);

            newgame.setVisible(false);
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
        if (carta1.simpatia.valor > carta2.simpatia.valor) {
          placarTexto1.setVisible(false);
          placarTexto2.setVisible(false);
          vencedor.setVisible(true);
          textven = carta1.name + " GANHOU";

          contadorwin = game.add.image(290, 520, "bolverde").setInteractive(); ganhadorwindireito = 5;
          contadordepartida1.setVisible(false);
          contadordepartida2.setVisible(false);
          newgame.setVisible(false);
          contadorloss = game.add.image(690, 520, "bolverme").setInteractive();
          contadorloss.setVisible(true);
          contadorwin.setVisible(true);
        } else if (carta1.simpatia.valor < carta2.simpatia.valor) {
          placarTexto1.setVisible(false);
          placarTexto2.setVisible(false);
          vencedor.setVisible(true);
          textven = carta2.name + " GANHOU";

          contadorwin = game.add.image(690, 520, "bolverde").setInteractive(); ganhadorwinesquerdo=5;
          contadordepartida1.setVisible(false);
          contadordepartida2.setVisible(false);
          newgame.setVisible(false);
          contadorloss = game.add.image(290, 520, "bolverme").setInteractive();
          contadorloss.setVisible(true);
          contadorwin.setVisible(true);
        } else {
          placarTexto1.setVisible(false);
          placarTexto2.setVisible(false);
          vencedor.setVisible(true);
          textven = "EMPATE";

          contadordepartida1.setVisible(true);
          contadordepartida2.setVisible(true);

          newgame.setVisible(false);
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

          contadorwin = game.add.image(290, 520, "bolverde").setInteractive(); ganhadorwindireito = 5;
          contadordepartida1.setVisible(false);
          contadordepartida2.setVisible(false);
          newgame.setVisible(false);
          contadorloss = game.add.image(690, 520, "bolverme").setInteractive();
          contadorloss.setVisible(true);
          contadorwin.setVisible(true);
        } else if (carta1.conhecimento.valor < carta2.conhecimento.valor) {
          placarTexto1.setVisible(false);
          placarTexto2.setVisible(false);
          vencedor.setVisible(true);
          textven = carta2.name + " GANHOU";

          contadorwin = game.add.image(690, 520, "bolverde").setInteractive(); ganhadorwinesquerdo=5;
          contadordepartida1.setVisible(false);
          contadordepartida2.setVisible(false);
          newgame.setVisible(false);
          contadorloss = game.add.image(290, 520, "bolverme").setInteractive();
          contadorloss.setVisible(true);
          contadorwin.setVisible(true);
        } else {
          placarTexto1.setVisible(false);
          placarTexto2.setVisible(false);
          vencedor.setVisible(true);
          textven = "EMPATE";

          contadordepartida1.setVisible(true);
          contadordepartida2.setVisible(true);

          newgame.setVisible(false);
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

          contadorwin = game.add.image(290, 520, "bolverde").setInteractive(); ganhadorwindireito = 5;
          contadordepartida1.setVisible(false);
          contadordepartida2.setVisible(false);
          newgame.setVisible(false);
          contadorloss = game.add.image(690, 520, "bolverme").setInteractive();
          contadorloss.setVisible(true);
          contadorwin.setVisible(true);
        } else if (carta1.altura.valor < carta2.altura.valor) {
          placarTexto1.setVisible(false);
          placarTexto2.setVisible(false);
          vencedor.setVisible(true);
          textven = carta2.name + " GANHOU";

          contadorwin = game.add.image(690, 520, "bolverde").setInteractive();
          ganhadorwinesquerdo = 5;
          contadordepartida1.setVisible(false);
          contadordepartida2.setVisible(false);
          newgame.setVisible(false);
          contadorloss = game.add.image(290, 520, "bolverme").setInteractive();
          contadorloss.setVisible(true);
          contadorwin.setVisible(true);
        } else {
          placarTexto1.setVisible(false);
          placarTexto2.setVisible(false);
          vencedor.setVisible(true);
          textven = "EMPATE";

          contadordepartida1.setVisible(true);
          contadordepartida2.setVisible(true);

          newgame.setVisible(false);
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

          contadorwin = game.add.image(290, 520, "bolverde").setInteractive(); ganhadorwindireito = 5;
          contadordepartida1.setVisible(false);
          contadordepartida2.setVisible(false);
          newgame.setVisible(false);
          contadorloss = game.add.image(690, 520, "bolverme").setInteractive();
          contadorloss.setVisible(true);
          contadorwin.setVisible(true);
        } else if (carta1.idade.valor < carta2.idade.valor) {
          placarTexto1.setVisible(false);
          placarTexto2.setVisible(false);
          vencedor.setVisible(true);
          textven = carta2.name + " GANHOU";

          contadorwin = game.add.image(690, 520, "bolverde").setInteractive();
          ganhadorwinesquerdo = 5;
          contadordepartida1.setVisible(false);
          contadordepartida2.setVisible(false);
          newgame.setVisible(false);
          contadorloss = game.add.image(290, 520, "bolverme").setInteractive();
          contadorloss.setVisible(true);
          contadorwin.setVisible(true);
        } else {
          placarTexto1.setVisible(false);
          placarTexto2.setVisible(false);
          vencedor.setVisible(true);
          textven = "EMPATE";

          contadordepartida1.setVisible(true);
          contadordepartida2.setVisible(true);

          newgame.setVisible(false);
        }
      });
    }
    if (ganhadorwindireito => ganhadorwinesquerdo) {
      var textofinal;
      var textofinal;
      var textofinal2;
      var placartext;
      var placartext2;
      textofinal = "PARABÉNS VC GANHOU!"
      textofinal2 = "VC PERDEU IDIOTA!"
      placartext = this.add.text(70, 75, textofinal, {
        fontSize: "32px",
        fill: "#ffffff",
      });
       placartext.setVisible(true);
      placartext2 = this.add.text(450, 75, textofinal2, {
        fontSize: "32px",
        fill: "#ffffff",
      });
       placartext2.setVisible(true);
    }
    else if (ganhadorwindireito < ganhadorwinesquerdo) {
      var textofinal;
      var textofinal;
      var textofinal2;
      var placartext;
      var placartext2;
       textofinal = "PARABÉNS VC GANHOU!";
       textofinal2 = "VC PERDEU IDIOTA!";
       placartext = this.add.text(70, 75, textofinal2, {
         fontSize: "32px",
         fill: "#ffffff",
       });
      placartext.setVisible(true);
       placartext2 = this.add.text(450, 75, textofinal, {
         fontSize: "32px",
         fill: "#ffffff",
       });
       placartext2.setVisible(true);
    }
    else {
      var textofinal;
      var empate;
      textofinal = "EMPATE";
      empate = this.add.text(250, 50, textofinal, {
        fontSize: "32px",
        fill: "#ffffff",
      });
      empate.setText(textofinal);
    }
  });
};

cena1.update = function () {};

export { cena1 };
