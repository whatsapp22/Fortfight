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
  {
    name: "MAYARA",
    fundo: "assets/Mayara.png",
    habilidade: {
      valor: "70",
      imagem: "assets/habilidademayara.png",
    },
    conhecimento: {
      valor: "80",
      imagem: "assets/conhecimentomayara.png",
    },
    simpatia: {
      valor: "92",
      imagem: "assets/simpatiamayara.png",
    },
    altura: {
      valor: "155",
      imagem: "assets/alturamayara.png",
    },
    idade: {
      valor: "35",
      imagem: "assets/idademayara.png",
    },
  },
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
  {
    name: "VICTOR",
    fundo: "assets/cartavictor.png",
    habilidade: {
      valor: "75",
      imagem: "assets/habilidadevictor.png", // cartas[0].habilidade.imagem
    },
    conhecimento: {
      valor: "52",
      imagem: "assets/conhecimentovictor.png",
    },
    simpatia: {
      valor: "10",
      imagem: "assets/simpatiavictor.png",
    },
    altura: {
      valor: "180",
      imagem: "assets/alturavictor.png",
    },
    idade: {
      valor: "19",
      imagem: "assets/idadevictor.png",
    },
  },
  {
    name: "BAUNGARTEN",
    fundo: "assets/cartabaungarten.png",
    habilidade: {
      valor: "60",
      imagem: "assets/habilidadebaurgarten.png", // cartas[0].habilidade.imagem
    },
    conhecimento: {
      valor: "88",
      imagem: "assets/conhecimentobaurgarten.png",
    },
    simpatia: {
      valor: "40",
      imagem: "assets/simpatiabaurgarten.png",
    },
    altura: {
      valor: "171",
      imagem: "assets/alturabaurgarten.jpg",
    },
    idade: {
      valor: "19",
      imagem: "assets/idadebaurgarten.png",
    },
  },
];

// Placar
var placar;
var placarTexto;
var imagembloqueio;
var ganhadora;
var vencedor;
var textven;
var contadordepartida;
var newgame;
var carta;
var contagem = 0;
var ganhadorwindireito = 0;
var perdedorlossdireito = 0;
var ganhadorwinesquerdo = 0;
var contadorloss;
var textofinal;
var textofinal;
var placartext;
var empate;
var socket;
var jogador;
var cartadobaralhofundo;
var cartadobaralhohabilidade;
var cartadobaralhosimpatia;
var cartadobaralhoconhecimento;
var cartadobaralhoidaide;
var cartadobaralhoaltura;

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
  placarTexto = this.add.text(270, 75, placar, {
    fontSize: "32px",
    fill: "#ffffff",
  });
  vencedor = this.add.text(260, 50, textven, {
    fontSize: "32px",
    fill: "#ffffff",
  });
  newgame = this.add.image(200, 300, "newgame").setInteractive();

  placartext = this.add.text(260, 75, textofinal, {
    fontSize: "24px",
    fill: "#ffffff",
  });

  empate = this.add.text(270, 50, textofinal, {
    fontSize: "24px",
    fill: "#ffffff",
  });

  var game = this;

  socket = io();

  socket.on("jogadores", (jogadores) => {
    if (jogadores.primeiro === socket.id) {
      jogador = 1;
    } else if (jogadores.segundo === socket.id) {
      jogador = 2;
    }
    console.log(jogadores);
  });

  newgame.on("pointerdown", function () {
    // Descobrir a primeira carta
    carta = cartas[Math.floor(Math.random() * 5)];
    console.log(carta);

    newgame.setVisible(false);
    contagem = contagem + 1;
    console.log(contagem);

    if (contagem === 1) {
      var cartafundo = game.add.image(400, 301, carta.fundo).setInteractive();
      var habilidade = game.add
        .image(400, 321, carta.habilidade.imagem)
        .setInteractive();
      var simpatia = game.add
        .image(400, 355, carta.simpatia.imagem)
        .setInteractive();
      var conhecimento = game.add
        .image(400, 385, carta.conhecimento.imagem)
        .setInteractive();
      var altura = game.add
        .image(400, 416, carta.altura.imagem)
        .setInteractive();
      var idade = game.add.image(400, 445, carta.idade.imagem).setInteractive();

      var contadordepartida = game.add
        .image(320, 520, "bolcinza")
        .setInteractive();
      var bolicinza = game.add.image(360, 520, "bolcinza").setInteractive();
      var bolicinza2 = game.add.image(400, 520, "bolcinza").setInteractive();
      var bolicinza3 = game.add.image(440, 520, "bolcinza").setInteractive();
      var bolicinza4 = game.add.image(480, 520, "bolcinza").setInteractive();
      contadordepartida.setVisible(true);
      bolicinza.setVisible(true);
      bolicinza2.setVisible(true);
      bolicinza3.setVisible(true);
      bolicinza4.setVisible(true);

      vencedor.setVisible(false);

      habilidade.on("pointerdown", function () {
        socket.emit("escolha", {
          item: "habilidade",
          valor: carta.habilidade.valor,
          cartanome: carta.name,
        });
        cartafundo.setVisible(true);
        habilidade.setVisible(true);
        simpatia.setVisible(false);
        conhecimento.setVisible(false);
        altura.setVisible(false);
        idade.setVisible(false);
        // imagembloqueio.setVisible(false);
        newgame.setVisible(false);
      });

      socket.on("escolha", (escolha) => {
        console.log(escolha);
        if (escolha.item === "habilidade") {
          cartafundo.setVisible(true);
          habilidade.setVisible(true);
          simpatia.setVisible(false);
          conhecimento.setVisible(false);
          altura.setVisible(false);
          idade.setVisible(false);
          // imagembloqueio.setVisible(false);
          newgame.setVisible(false);
          if (escolha.valor > carta.habilidade.valor) {
            placarTexto.setVisible(false);
            vencedor.setVisible(true);
            textven = carta.name + " PERDEU";
            vencedor.setText(textven);
            ganhadorwindireito = +1;
            contadordepartida.setVisible(false);
            newgame.setVisible(true);
            contadorloss = game.add
              .image(320, 520, "bolverme")
              .setInteractive();
            contadorloss.setVisible(true);
            socket.emit("decisao", {
              item: "habilidade",
              valor: "primeiro",
              carta: carta.nome,
            });
          } else if (escolha.valor < carta.habilidade.valor) {
            placarTexto.setVisible(false);
            vencedor.setVisible(true);
            textven = carta.name + " GANHOU";
            vencedor.setText(textven);
            ganhadorwinesquerdo = +1;
            contadordepartida = game.add
              .image(320, 520, "bolverde")
              .setInteractive();
            contadordepartida.setVisible(true);
            newgame.setVisible(true);
            socket.emit("decisao", {
              item: "habilidade",
              valor: "segundo",
              carta: carta.nome,
            });
          } else {
            placarTexto.setVisible(false);
            vencedor.setVisible(true);
            textven = "EMPATE";
            vencedor.setText(textven);
            contadordepartida.setVisible(true);
            newgame.setVisible(true);
            socket.emit("decisao", {
              item: "habilidade",
              valor: "empate",
              carta: carta.nome,
            });
          }
          console.log(carta);
        } else if (escolha.item === "simpatia") {
          cartafundo.setVisible(true);
          habilidade.setVisible(false);
          simpatia.setVisible(true);
          conhecimento.setVisible(false);
          altura.setVisible(false);
          idade.setVisible(false);
          newgame.setVisible(false);
          if (escolha.valor > carta.simpatia.valor) {
            placarTexto.setVisible(false);
            vencedor.setVisible(true);
            textven = carta.name + " PERDEU";
            vencedor.setText(textven);
            ganhadorwindireito = +1;
            contadordepartida.setVisible(false);
            newgame.setVisible(true);
            contadorloss = game.add
              .image(320, 520, "bolverme")
              .setInteractive();
            contadorloss.setVisible(true);
            socket.emit("decisao", {
              item: "simpatia",
              valor: "primeiro",
              carta: carta.nome,
            });
          } else if (escolha.valor < carta.simpatia.valor) {
            placarTexto.setVisible(false);
            vencedor.setVisible(true);
            textven = carta.name + " GANHOU";
            vencedor.setText(textven);
            ganhadorwinesquerdo = +1;
            contadordepartida = game.add
              .image(320, 520, "bolverde")
              .setInteractive();
            contadordepartida.setVisible(true);
            newgame.setVisible(true);
            socket.emit("decisao", {
              item: "simpatia",
              valor: "segundo",
              carta: carta.nome,
            });
          } else {
            placarTexto.setVisible(false);
            vencedor.setVisible(true);
            textven = "EMPATE";
            vencedor.setText(textven);
            contadordepartida.setVisible(true);
            newgame.setVisible(true);
            socket.emit("decisao", {
              item: "simpatia",
              valor: "empate",
              carta: carta.nome,
            });
          }
        } else if (escolha.item === "conhecimento") {
          cartafundo.setVisible(true);
          habilidade.setVisible(false);
          simpatia.setVisible(false);
          conhecimento.setVisible(true);
          altura.setVisible(false);
          idade.setVisible(false);
          // imagembloqueio.setVisible(false);
          newgame.setVisible(false);
          if (escolha.valor > carta.conhecimento.valor) {
            placarTexto.setVisible(false);
            vencedor.setVisible(true);
            textven = carta.name + " PERDEU";
            vencedor.setText(textven);
            ganhadorwindireito = +1;
            contadordepartida.setVisible(false);
            newgame.setVisible(true);
            contadorloss = game.add
              .image(320, 520, "bolverme")
              .setInteractive();
            contadorloss.setVisible(true);
            socket.emit("decisao", {
              item: "conhecimento",
              valor: "primeiro",
              carta: carta.nome,
            });
          } else if (escolha.valor < carta.conhecimento.valor) {
            placarTexto.setVisible(false);
            vencedor.setVisible(true);
            textven = carta.name + " GANHOU";
            vencedor.setText(textven);
            ganhadorwinesquerdo = +1;
            contadordepartida = game.add
              .image(320, 520, "bolverde")
              .setInteractive();
            contadordepartida.setVisible(true);
            newgame.setVisible(true);
            socket.emit("decisao", {
              item: "conhecimento",
              valor: "segundo",
              carta: carta.nome,
            });
          } else {
            placarTexto.setVisible(false);
            vencedor.setVisible(true);
            textven = "EMPATE";
            vencedor.setText(textven);
            contadordepartida.setVisible(true);
            newgame.setVisible(true);
            socket.emit("decisao", {
              item: "conhecimento",
              valor: "empate",
              carta: carta.nome,
            });
          }
          console.log(carta);
        }
      });

      socket.on("decisao", (decisao) => {
        if (jogador === 1) {
          if (decisao.valor === "primeiro") {
            cartafundo.setVisible(true);
            habilidade.setVisible(true);
            simpatia.setVisible(false);
            conhecimento.setVisible(false);
            altura.setVisible(false);
            idade.setVisible(false);
            placarTexto.setVisible(false);
            vencedor.setVisible(true);
            textven = carta.name + " GANHOU";
            vencedor.setText(textven);
            ganhadorwinesquerdo = +1;
            contadordepartida = game.add
              .image(320, 520, "bolverde")
              .setInteractive();
            contadordepartida.setVisible(true);
            // imagembloqueio.setVisible(false);
            newgame.setVisible(true);
          } else if (decisao.valor === "segundo") {
            cartafundo.setVisible(true);
            habilidade.setVisible(true);
            simpatia.setVisible(false);
            conhecimento.setVisible(false);
            altura.setVisible(false);
            idade.setVisible(false);
            placarTexto.setVisible(false);
            vencedor.setVisible(true);
            textven = carta.name + " PERDEU";
            vencedor.setText(textven);
            ganhadorwindireito = +1;
            contadordepartida.setVisible(false);
            newgame.setVisible(true);
            contadorloss = game.add
              .image(320, 520, "bolverme")
              .setInteractive();
            contadorloss.setVisible(true);
          } else {
            cartafundo.setVisible(true);
            habilidade.setVisible(true);
            simpatia.setVisible(false);
            conhecimento.setVisible(false);
            altura.setVisible(false);
            idade.setVisible(false);
            placarTexto.setVisible(false);
            vencedor.setVisible(true);
            textven = "EMPATE";
            vencedor.setText(textven);
            contadordepartida.setVisible(true);
            newgame.setVisible(true);
          }
        }
      });

      simpatia.on("pointerdown", function () {
        socket.emit("escolha", {
          item: "simpatia",
          valor: carta.simpatia.valor,
          cartanome: carta.name,
        });
        cartafundo.setVisible(true);
        habilidade.setVisible(false);
        simpatia.setVisible(true);
        conhecimento.setVisible(false);
        altura.setVisible(false);
        idade.setVisible(false);
        // imagembloqueio.setVisible(false);
        newgame.setVisible(false);
      });
    }
    conhecimento.on("pointerdown", function () {
      socket.emit("escolha", {
        item: "conhecimento",
        valor: carta.conhecimento.valor,
        cartanome: carta.name,
      });
      cartafundo.setVisible(true);
      habilidade.setVisible(false);
      simpatia.setVisible(false);
      conhecimento.setVisible(true);
      altura.setVisible(false);
      idade.setVisible(false);
      // imagembloqueio.setVisible(false);
      newgame.setVisible(false);
    });


    socket.on("decisao", (decisao) => {
      if (jogador === 1) {
        if (decisao.valor === "primeiro") {
          cartafundo.setVisible(true);
          habilidade.setVisible(false);
          simpatia.setVisible(true);
          conhecimento.setVisible(false);
          altura.setVisible(false);
          idade.setVisible(false);
          placarTexto.setVisible(false);
          vencedor.setVisible(true);
          textven = carta.name + " GANHOU";
          vencedor.setText(textven);
          ganhadorwinesquerdo = +1;
          contadordepartida = game.add
            .image(320, 520, "bolverde")
            .setInteractive();
          contadordepartida.setVisible(true);
          // imagembloqueio.setVisible(false);
          newgame.setVisible(true);
        } else if (decisao.valor === "segundo") {
          cartafundo.setVisible(true);
          habilidade.setVisible(false);
          simpatia.setVisible(true);
          conhecimento.setVisible(false);
          altura.setVisible(false);
          idade.setVisible(false);
          placarTexto.setVisible(false);
          vencedor.setVisible(true);
          textven = carta.name + " PERDEU";
          vencedor.setText(textven);
          ganhadorwindireito = +1;
          contadordepartida.setVisible(false);
          newgame.setVisible(true);
          contadorloss = game.add.image(320, 520, "bolverme").setInteractive();
          contadorloss.setVisible(true);
        } else {
          cartafundo.setVisible(true);
          habilidade.setVisible(false);
          simpatia.setVisible(true);
          conhecimento.setVisible(false);
          altura.setVisible(false);
          idade.setVisible(false);
          placarTexto.setVisible(false);
          vencedor.setVisible(true);
          textven = "EMPATE";
          vencedor.setText(textven);
          contadordepartida.setVisible(true);
          newgame.setVisible(true);
        }
      }
      });
  })
}


  /*
        simpatia.on("pointerdown", function () {
          cartafundo.setVisible(true);
          habilidade.setVisible(false);
          simpatia.setVisible(true);
          conhecimento.setVisible(false);
          altura.setVisible(false);
          idade.setVisible(false);
          carta2fundo.setVisible(true);
          habilidade2.setVisible(false);
          simpatia2.setVisible(true);
          conhecimento2.setVisible(false);
          altura2.setVisible(false);
          idade2.setVisible(false);
          imagembloqueio.setVisible(false);
          newgame.setVisible(true);
          if (carta.simpatia.valor > carta2.simpatia.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(true);
            textven = carta.name + " GANHOU";
            vencedor.setText(textven);
            contadordepartida1 = game.add
              .image(130, 520, "bolverde")
              .setInteractive();
            ganhadorwindireito = +1;
            perdedorlossesquerdo = +1;
            newgame.setVisible(true);
            contadorloss = game.add.image(530, 520, "bolverme").setInteractive();
            contadorloss.setVisible(true);
            contadordepartida1.setVisible(true);
            contadordepartida2.setVisible(false);
            newgame.setVisible(true);
          } else if (carta.simpatia.valor < carta2.simpatia.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(true);
            textven = carta2.name + " GANHOU";
            vencedor.setText(textven);
            contadordepartida2 = game.add
              .image(530, 520, "bolverde")
              .setInteractive();
            ganhadorwinesquerdo = +1;
            perdedorlossdireito = +1;
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
  
        conhecimento.on("pointerdown", function () {
          cartafundo.setVisible(true);
          habilidade.setVisible(false);
          simpatia.setVisible(false);
          conhecimento.setVisible(true);
          altura.setVisible(false);
          idade.setVisible(false);
          carta2fundo.setVisible(true);
          habilidade2.setVisible(false);
          simpatia2.setVisible(false);
          conhecimento2.setVisible(true);
          altura2.setVisible(false);
          idade2.setVisible(false);
          imagembloqueio.setVisible(false);
          if (carta.conhecimento.valor > carta2.conhecimento.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(true);
            textven = carta.name + " GANHOU";
            vencedor.setText(textven);
            contadordepartida1 = game.add
              .image(130, 520, "bolverde")
              .setInteractive();
            ganhadorwindireito = +1;
            perdedorlossesquerdo = +1;
            contadordepartida1.setVisible(true);
            contadordepartida2.setVisible(false);
            newgame.setVisible(true);
            contadorloss = game.add.image(530, 520, "bolverme").setInteractive();
            contadorloss.setVisible(true);
          } else if (carta.conhecimento.valor < carta2.conhecimento.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(true);
            textven = carta2.name + " GANHOU";
            vencedor.setText(textven);
            contadordepartida2 = game.add
              .image(530, 520, "bolverde")
              .setInteractive();
            ganhadorwinesquerdo = +1;
            perdedorlossdireito = +1;
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
  
        altura.on("pointerdown", function () {
          cartafundo.setVisible(true);
          habilidade.setVisible(false);
          simpatia.setVisible(false);
          conhecimento.setVisible(false);
          altura.setVisible(true);
          idade.setVisible(false);
          carta2fundo.setVisible(true);
          habilidade2.setVisible(false);
          simpatia2.setVisible(false);
          conhecimento2.setVisible(false);
          altura2.setVisible(true);
          idade2.setVisible(false);
          imagembloqueio.setVisible(false);
          if (carta.altura.valor > carta2.altura.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(true);
            textven = carta.name + " GANHOU";
            vencedor.setText(textven);
            contadordepartida1 = game.add
              .image(130, 520, "bolverde")
              .setInteractive();
            ganhadorwindireito = +1;
            perdedorlossesquerdo = +1;
            contadordepartida1.setVisible(true);
            contadordepartida2.setVisible(false);
            newgame.setVisible(true);
            contadorloss = game.add.image(530, 520, "bolverme").setInteractive();
            contadorloss.setVisible(true);
          } else if (carta.altura.valor < carta2.altura.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(true);
            textven = carta2.name + " GANHOU";
            vencedor.setText(textven);
            contadordepartida2 = game.add
              .image(530, 520, "bolverde")
              .setInteractive();
            ganhadorwinesquerdo = +1;
            perdedorlossdireito = +1;
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
  
        idade.on("pointerdown", function () {
          cartafundo.setVisible(true);
          habilidade.setVisible(false);
          simpatia.setVisible(false);
          conhecimento.setVisible(false);
          altura.setVisible(false);
          idade.setVisible(true);
          carta2fundo.setVisible(true);
          habilidade2.setVisible(false);
          simpatia2.setVisible(false);
          conhecimento2.setVisible(false);
          altura2.setVisible(false);
          idade2.setVisible(true);
          imagembloqueio.setVisible(false);
          if (carta.idade.valor > carta2.idade.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(true);
            textven = carta.name + " GANHOU";
            vencedor.setText(textven);
            contadordepartida1 = game.add
              .image(130, 520, "bolverde")
              .setInteractive();
            ganhadorwindireito = +1;
            perdedorlossesquerdo = +1;
            contadordepartida1.setVisible(true);
            contadordepartida2.setVisible(false);
            newgame.setVisible(true);
            contadorloss = game.add.image(530, 520, "bolverme").setInteractive();
            contadorloss.setVisible(true);
          } else if (carta.idade.valor < carta2.idade.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(true);
            textven = carta2.name + " GANHOU";
            vencedor.setText(textven);
            contadordepartida2 = game.add
              .image(530, 520, "bolverde")
              .setInteractive();
            ganhadorwinesquerdo = +1;
            perdedorlossdireito = +1;
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
            cartafundo.setVisible(true);
            habilidade.setVisible(true);
            simpatia.setVisible(false);
            conhecimento.setVisible(false);
            altura.setVisible(false);
            idade.setVisible(false);
            imagembloqueio.setVisible(false);
            if (carta.habilidade.valor > carta2.habilidade.valor) {
              placarTexto1.setVisible(false);
              placarTexto2.setVisible(false);
              vencedor.setVisible(true);
              textven = carta.name + " GANHOU";
              vencedor.setText(textven);
              contadordepartida1 = game.add
                .image(130, 520, "bolverde")
                .setInteractive();
              ganhadorwindireito = +1;
              perdedorlossesquerdo = +1;
              contadordepartida1.setVisible(true);
              contadordepartida2.setVisible(true);
              newgame.setVisible(true);
              contadorloss = game.add
                .image(530, 520, "bolverme")
                .setInteractive();
              contadorloss.setVisible(true);
            } else if (carta.habilidade.valor < carta2.habilidade.valor) {
              placarTexto1.setVisible(false);
              placarTexto2.setVisible(false);
              vencedor.setVisible(true);
              textven = carta2.name + " GANHOU";
              vencedor.setText(textven);
              contadordepartida2 = game.add
                .image(530, 520, "bolverde")
                .setInteractive();
              ganhadorwinesquerdo = +1;
              perdedorlossdireito = +1;
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
          cartafundo.setVisible(true);
          habilidade.setVisible(false);
          simpatia.setVisible(true);
          conhecimento.setVisible(false);
          altura.setVisible(false);
          idade.setVisible(false);
          imagembloqueio.setVisible(false);
          if (carta.simpatia.valor > carta2.simpatia.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(true);
            textven = carta.name + " GANHOU";
            vencedor.setText(textven);
            contadordepartida1 = game.add
              .image(130, 520, "bolverde")
              .setInteractive();
            ganhadorwindireito = +1;
            perdedorlossesquerdo = +1;
            contadordepartida1.setVisible(true);
            contadordepartida2.setVisible(false);
            newgame.setVisible(true);
            contadorloss = game.add.image(530, 520, "bolverme").setInteractive();
            contadorloss.setVisible(true);
          } else if (carta.simpatia.valor < carta2.simpatia.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(true);
            textven = carta2.name + " GANHOU";
            vencedor.setText(textven);
            contadordepartida2 = game.add
              .image(530, 520, "bolverde")
              .setInteractive();
            ganhadorwinesquerdo = +1;
            perdedorlossdireito = +1;
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
          cartafundo.setVisible(true);
          habilidade.setVisible(false);
          simpatia.setVisible(false);
          conhecimento.setVisible(true);
          altura.setVisible(false);
          idade.setVisible(false);
          imagembloqueio.setVisible(false);
          if (carta.conhecimento.valor > carta2.conhecimento.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(true);
            textven = carta.name + " GANHOU";
            vencedor.setText(textven);
            contadordepartida1 = game.add
              .image(130, 520, "bolverde")
              .setInteractive();
            ganhadorwindireito = +1;
            perdedorlossesquerdo = +1;
            contadordepartida1.setVisible(true);
            contadordepartida2.setVisible(false);
            newgame.setVisible(true);
            contadorloss = game.add.image(530, 520, "bolverme").setInteractive();
            contadorloss.setVisible(true);
          } else if (carta.conhecimento.valor < carta2.conhecimento.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(true);
            textven = carta2.name + " GANHOU";
            vencedor.setText(textven);
            contadordepartida2 = game.add
              .image(530, 520, "bolverde")
              .setInteractive();
            ganhadorwinesquerdo = +1;
            perdedorlossdireito = +1;
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
          cartafundo.setVisible(true);
          habilidade.setVisible(false);
          simpatia.setVisible(false);
          conhecimento.setVisible(false);
          altura.setVisible(true);
          idade.setVisible(false);
          imagembloqueio.setVisible(false);
          if (carta.altura.valor > carta2.altura.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(true);
            textven = carta.name + " GANHOU";
            vencedor.setText(textven);
            contadordepartida1 = game.add
              .image(130, 520, "bolverde")
              .setInteractive();
            ganhadorwindireito = +1;
            perdedorlossesquerdo = +1;
            contadordepartida1.setVisible(true);
            contadordepartida2.setVisible(false);
            newgame.setVisible(true);
            contadorloss = game.add.image(530, 520, "bolverme").setInteractive();
            contadorloss.setVisible(true);
          } else if (carta.altura.valor < carta2.altura.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(true);
            textven = carta2.name + " GANHOU";
            vencedor.setText(textven);
            contadordepartida2 = game.add
              .image(530, 520, "bolverde")
              .setInteractive();
            ganhadorwinesquerdo = +1;
            perdedorlossdireito = +1;
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
          cartafundo.setVisible(true);
          habilidade.setVisible(false);
          simpatia.setVisible(false);
          conhecimento.setVisible(false);
          altura.setVisible(false);
          idade.setVisible(true);
          imagembloqueio.setVisible(false);
  
          if (carta.idade.valor > carta2.idade.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(true);
            textven = carta.name + " GANHOU";
            vencedor.setText(textven);
            contadordepartida1 = game.add
              .image(130, 520, "bolverde")
              .setInteractive();
            ganhadorwindireito = +1;
            perdedorlossesquerdo = +1;
            contadordepartida1.setVisible(true);
            contadordepartida2.setVisible(false);
            newgame.setVisible(true);
            contadorloss = game.add.image(530, 520, "bolverme").setInteractive();
            contadorloss.setVisible(true);
          } else if (carta.idade.valor < carta2.idade.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(true);
            textven = carta2.name + " GANHOU";
            vencedor.setText(textven);
            contadordepartida2 = game.add
              .image(530, 520, "bolverde")
              .setInteractive();
            ganhadorwinesquerdo = +1;
            perdedorlossdireito = +1;
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
        var cartafundo = game.add.image(200, 301, carta.fundo).setInteractive();
        var habilidade = game.add
          .image(200, 321, carta.habilidade.imagem)
          .setInteractive();
        var simpatia = game.add
          .image(200, 355, carta.simpatia.imagem)
          .setInteractive();
        var conhecimento = game.add
          .image(200, 385, carta.conhecimento.imagem)
          .setInteractive();
        var altura = game.add
          .image(200, 416, carta.altura.imagem)
          .setInteractive();
        var idade = game.add
          .image(200, 445, carta.idade.imagem)
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
          placar = "É SUA VEZ!";
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
  
        habilidade.on(
          "pointerdown",
          function () {
            cartafundo.setVisible(true);
            habilidade.setVisible(true);
            simpatia.setVisible(false);
            conhecimento.setVisible(false);
            altura.setVisible(false);
            idade.setVisible(false);
            carta2fundo.setVisible(true);
            habilidade2.setVisible(true);
            simpatia2.setVisible(false);
            conhecimento2.setVisible(false);
            altura2.setVisible(false);
            idade2.setVisible(false);
            imagembloqueio.setVisible(false);
            newgame.setVisible(true);
  
            if (carta.habilidade.valor > carta2.habilidade.valor) {
              placarTexto1.setVisible(false);
              placarTexto2.setVisible(false);
              vencedor.setVisible(true);
              textven = carta.name + " GANHOU";
              vencedor.setText(textven);
              contadorwin = game.add.image(170, 520, "bolverde").setInteractive();
              if (ganhadorwindireito === 1) {
                ganhadorwindireito = 2;
                perdedorlossesquerdo = +1;
              } else {
                ganhadorwindireito = 1;
                perdedorlossesquerdo = 1;
              }
              contadordepartida1.setVisible(false);
              contadordepartida2.setVisible(false);
              newgame.setVisible(true);
              contadorloss = game.add
                .image(570, 520, "bolverme")
                .setInteractive();
  
              contadorloss.setVisible(true);
              contadorwin.setVisible(true);
              bolicinza.setVisible(false);
            } else if (carta.habilidade.valor < carta2.habilidade.valor) {
              placarTexto1.setVisible(false);
              placarTexto2.setVisible(false);
              vencedor.setVisible(true);
              textven = carta2.name + " GANHOU";
              vencedor.setText(textven);
              contadorwin = game.add.image(570, 520, "bolverde").setInteractive();
              if (ganhadorwinesquerdo === 1) {
                ganhadorwinesquerdo = 2;
              } else {
                ganhadorwinesquerdo = 1;
                perdedorlossdireito = 1;
              }
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
  
        simpatia.on("pointerdown", function () {
          cartafundo.setVisible(true);
          habilidade.setVisible(false);
          simpatia.setVisible(true);
          conhecimento.setVisible(false);
          altura.setVisible(false);
          idade.setVisible(false);
          carta2fundo.setVisible(true);
          habilidade2.setVisible(false);
          simpatia2.setVisible(true);
          conhecimento2.setVisible(false);
          altura2.setVisible(false);
          idade2.setVisible(false);
          imagembloqueio.setVisible(false);
          newgame.setVisible(true);
          if (carta.simpatia.valor > carta2.simpatia.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(true);
            textven = carta.name + " GANHOU";
            vencedor.setText(textven);
            contadorwin = game.add.image(170, 520, "bolverde").setInteractive();
            if (ganhadorwindireito === 1) {
              ganhadorwindireito = 2;
              perdedorlossesquerdo = +1;
            } else {
              ganhadorwindireito = 1;
              perdedorlossesquerdo = +1;
            }
            perdedorlossesquerdo = +1;
            contadordepartida1.setVisible(false);
            contadordepartida2.setVisible(false);
            newgame.setVisible(true);
            contadorloss = game.add.image(570, 520, "bolverme").setInteractive();
            contadorloss.setVisible(true);
            contadorwin.setVisible(true);
            bolicinza.setVisible(false);
          } else if (carta.simpatia.valor < carta2.simpatia.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(true);
            textven = carta2.name + " GANHOU";
            vencedor.setText(textven);
            contadorwin = game.add.image(570, 520, "bolverde").setInteractive();
            if (ganhadorwinesquerdo === 1) {
              ganhadorwinesquerdo = 2;
            } else {
              ganhadorwinesquerdo === 1;
              perdedorlossdireito = +1;
            }
            perdedorlossdireito = +1;
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
  
        conhecimento.on("pointerdown", function () {
          cartafundo.setVisible(true);
          habilidade.setVisible(false);
          simpatia.setVisible(false);
          conhecimento.setVisible(true);
          altura.setVisible(false);
          idade.setVisible(false);
          carta2fundo.setVisible(true);
          habilidade2.setVisible(false);
          simpatia2.setVisible(false);
          conhecimento2.setVisible(true);
          altura2.setVisible(false);
          idade2.setVisible(false);
          imagembloqueio.setVisible(false);
          if (carta.conhecimento.valor > carta2.conhecimento.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(true);
            textven = carta.name + " GANHOU";
            vencedor.setText(textven);
            contadorwin = game.add.image(170, 520, "bolverde").setInteractive();
            if (ganhadorwindireito === 1) {
              ganhadorwindireito = 2;
              perdedorlossesquerdo = +1;
            } else {
              ganhadorwindireito = 1;
              perdedorlossesquerdo = +1;
            }
            perdedorlossesquerdo = +1;
            contadordepartida1.setVisible(false);
            contadordepartida2.setVisible(false);
            newgame.setVisible(true);
            contadorloss = game.add.image(570, 520, "bolverme").setInteractive();
            contadorloss.setVisible(true);
            contadorwin.setVisible(true);
            bolicinza.setVisible(false);
          } else if (carta.conhecimento.valor < carta2.conhecimento.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(true);
            textven = carta2.name + " GANHOU";
            vencedor.setText(textven);
            contadorwin = game.add.image(570, 520, "bolverde").setInteractive();
            if (ganhadorwinesquerdo === 1) {
              ganhadorwinesquerdo = 2;
            } else {
              ganhadorwinesquerdo = 1;
              perdedorlossdireito = +1;
            }
            perdedorlossdireito = +1;
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
  
        altura.on("pointerdown", function () {
          cartafundo.setVisible(true);
          habilidade.setVisible(false);
          simpatia.setVisible(false);
          conhecimento.setVisible(false);
          altura.setVisible(true);
          idade.setVisible(false);
          carta2fundo.setVisible(true);
          habilidade2.setVisible(false);
          simpatia2.setVisible(false);
          conhecimento2.setVisible(false);
          altura2.setVisible(true);
          idade2.setVisible(false);
          imagembloqueio.setVisible(false);
          if (carta.altura.valor > carta2.altura.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(true);
            textven = carta.name + " GANHOU";
            vencedor.setText(textven);
            contadorwin = game.add.image(170, 520, "bolverde").setInteractive();
            if (ganhadorwindireito === 1) {
              ganhadorwindireito = 2;
              perdedorlossesquerdo = +1;
            } else {
              ganhadorwindireito = 1;
              perdedorlossesquerdo = +1;
            }
            perdedorlossesquerdo = +1;
            contadordepartida1.setVisible(false);
            contadordepartida2.setVisible(false);
            newgame.setVisible(true);
            contadorloss = game.add.image(570, 520, "bolverme").setInteractive();
            contadorloss.setVisible(true);
            contadorwin.setVisible(true);
            bolicinza.setVisible(false);
          } else if (carta.altura.valor < carta2.altura.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(true);
            textven = carta2.name + " GANHOU";
            vencedor.setText(textven);
            contadorwin = game.add.image(570, 520, "bolverde").setInteractive();
            if (ganhadorwinesquerdo === 1) {
              ganhadorwinesquerdo = 2;
            } else {
              ganhadorwinesquerdo = 1;
              perdedorlossdireito = +1;
            }
            perdedorlossdireito = +1;
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
  
        idade.on("pointerdown", function () {
          cartafundo.setVisible(true);
          habilidade.setVisible(false);
          simpatia.setVisible(false);
          conhecimento.setVisible(false);
          altura.setVisible(false);
          idade.setVisible(true);
          carta2fundo.setVisible(true);
          habilidade2.setVisible(false);
          simpatia2.setVisible(false);
          conhecimento2.setVisible(false);
          altura2.setVisible(false);
          idade2.setVisible(true);
          imagembloqueio.setVisible(false);
          if (carta.idade.valor > carta2.idade.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(true);
            textven = carta.name + " GANHOU";
            vencedor.setText(textven);
            contadorwin = game.add.image(170, 520, "bolverde").setInteractive();
            if (ganhadorwindireito === 1) {
              ganhadorwindireito = 2;
              perdedorlossesquerdo = +1;
            } else {
              ganhadorwindireito = 1;
              perdedorlossesquerdo = +1;
            }
            perdedorlossesquerdo = +1;
            contadordepartida1.setVisible(false);
            contadordepartida2.setVisible(false);
            newgame.setVisible(true);
            contadorloss = game.add.image(570, 520, "bolverme").setInteractive();
            contadorloss.setVisible(true);
            contadorwin.setVisible(true);
            bolicinza.setVisible(false);
          } else if (carta.idade.valor < carta2.idade.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(true);
            textven = carta2.name + " GANHOU";
            vencedor.setText(textven);
            contadorwin = game.add.image(570, 520, "bolverde").setInteractive();
            if (ganhadorwinesquerdo === 1) {
              ganhadorwinesquerdo = 2;
            } else {
              ganhadorwinesquerdo = 1;
              perdedorlossdireito = +1;
            }
            perdedorlossdireito = +1;
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
            cartafundo.setVisible(true);
            habilidade.setVisible(true);
            simpatia.setVisible(false);
            conhecimento.setVisible(false);
            altura.setVisible(false);
            idade.setVisible(false);
            imagembloqueio.setVisible(false);
            if (carta.habilidade.valor > carta2.habilidade.valor) {
              placarTexto1.setVisible(false);
              placarTexto2.setVisible(false);
              vencedor.setVisible(true);
              textven = carta.name + " GANHOU";
              vencedor.setText(textven);
              contadorwin = game.add.image(170, 520, "bolverde").setInteractive();
              if (ganhadorwindireito === 1) {
                ganhadorwindireito = 2;
                perdedorlossesquerdo = +1;
              } else {
                ganhadorwindireito = 1;
                perdedorlossesquerdo = +1;
              }
              contadordepartida1.setVisible(false);
              contadordepartida2.setVisible(false);
              newgame.setVisible(true);
              contadorloss = game.add
                .image(570, 520, "bolverme")
                .setInteractive();
              contadorloss.setVisible(true);
              contadorwin.setVisible(true);
            } else if (carta.habilidade.valor < carta2.habilidade.valor) {
              placarTexto1.setVisible(false);
              placarTexto2.setVisible(false);
              vencedor.setVisible(true);
              textven = carta2.name + " GANHOU";
              vencedor.setText(textven);
              contadorwin = game.add.image(570, 520, "bolverde").setInteractive();
              if (ganhadorwinesquerdo === 1) {
                ganhadorwinesquerdo = 2;
              } else {
                ganhadorwinesquerdo = 1;
                perdedorlossdireito = +1;
              }
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
          cartafundo.setVisible(true);
          habilidade.setVisible(false);
          simpatia.setVisible(true);
          conhecimento.setVisible(false);
          altura.setVisible(false);
          idade.setVisible(false);
          imagembloqueio.setVisible(false);
          if (carta.simpatia.valor > carta2.simpatia.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(true);
            textven = carta.name + " GANHOU";
            vencedor.setText(textven);
            contadorwin = game.add.image(170, 520, "bolverde").setInteractive();
            if (ganhadorwindireito === 1) {
              ganhadorwindireito = 2;
              perdedorlossesquerdo = +1;
            } else {
              ganhadorwindireito = 1;
              perdedorlossesquerdo = +1;
            }
            perdedorlossesquerdo = +1;
            contadordepartida1.setVisible(false);
            contadordepartida2.setVisible(false);
            newgame.setVisible(true);
            contadorloss = game.add.image(570, 520, "bolverme").setInteractive();
            contadorloss.setVisible(true);
            contadorwin.setVisible(true);
          } else if (carta.simpatia.valor < carta2.simpatia.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(true);
            textven = carta2.name + " GANHOU";
            vencedor.setText(textven);
            contadorwin = game.add.image(570, 520, "bolverde").setInteractive();
            if (ganhadorwinesquerdo === 1) {
              ganhadorwinesquerdo = 2;
            } else {
              ganhadorwinesquerdo = 1;
              perdedorlossdireito = +1;
            }
            perdedorlossdireito = +1;
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
          cartafundo.setVisible(true);
          habilidade.setVisible(false);
          simpatia.setVisible(false);
          conhecimento.setVisible(true);
          altura.setVisible(false);
          idade.setVisible(false);
          imagembloqueio.setVisible(false);
          if (carta.conhecimento.valor > carta2.conhecimento.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(true);
            textven = carta.name + " GANHOU";
            vencedor.setText(textven);
            contadorwin = game.add.image(170, 520, "bolverde").setInteractive();
            if (ganhadorwindireito === 1) {
              ganhadorwindireito = 2;
              perdedorlossesquerdo = +1;
            } else {
              ganhadorwindireito = 1;
              perdedorlossesquerdo = +1;
            }
            perdedorlossesquerdo = +1;
            contadordepartida1.setVisible(false);
            contadordepartida2.setVisible(false);
            newgame.setVisible(true);
            contadorloss = game.add.image(570, 520, "bolverme").setInteractive();
            contadorloss.setVisible(true);
            contadorwin.setVisible(true);
          } else if (carta.conhecimento.valor < carta2.conhecimento.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(true);
            textven = carta2.name + " GANHOU";
            vencedor.setText(textven);
            contadorwin = game.add.image(570, 520, "bolverde").setInteractive();
            if (ganhadorwinesquerdo === 1) {
              ganhadorwinesquerdo = 2;
            } else {
              ganhadorwinesquerdo = 1;
              perdedorlossdireito = +1;
            }
            perdedorlossdireito = +1;
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
          cartafundo.setVisible(true);
          habilidade.setVisible(false);
          simpatia.setVisible(false);
          conhecimento.setVisible(false);
          altura.setVisible(true);
          idade.setVisible(false);
          imagembloqueio.setVisible(false);
          if (carta.altura.valor > carta2.altura.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(true);
            textven = carta.name + " GANHOU";
            vencedor.setText(textven);
            contadorwin = game.add.image(170, 520, "bolverde").setInteractive();
            if (ganhadorwindireito === 1) {
              ganhadorwindireito = 2;
              perdedorlossesquerdo = +1;
            } else {
              ganhadorwindireito = 1;
              perdedorlossesquerdo = +1;
            }
            perdedorlossesquerdo = +1;
            contadordepartida1.setVisible(false);
            contadordepartida2.setVisible(false);
            newgame.setVisible(true);
            contadorloss = game.add.image(570, 520, "bolverme").setInteractive();
            contadorloss.setVisible(true);
            contadorwin.setVisible(true);
          } else if (carta.altura.valor < carta2.altura.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(true);
            textven = carta2.name + " GANHOU";
            vencedor.setText(textven);
            contadorwin = game.add.image(570, 520, "bolverde").setInteractive();
            if (ganhadorwinesquerdo === 1) {
              ganhadorwinesquerdo = 2;
            } else {
              ganhadorwinesquerdo = 1;
              perdedorlossdireito = +1;
            }
            perdedorlossdireito = +1;
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
          cartafundo.setVisible(true);
          habilidade.setVisible(false);
          simpatia.setVisible(false);
          conhecimento.setVisible(false);
          altura.setVisible(false);
          idade.setVisible(true);
          imagembloqueio.setVisible(false);
  
          if (carta.idade.valor > carta2.idade.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(true);
            textven = carta.name + " GANHOU";
            vencedor.setText(textven);
            contadorwin = game.add.image(170, 520, "bolverde").setInteractive();
            if (ganhadorwindireito === 1) {
              ganhadorwindireito = 2;
              perdedorlossesquerdo = +1;
            } else {
              ganhadorwindireito = 1;
              perdedorlossesquerdo = +1;
            }
            perdedorlossesquerdo = +1;
            contadordepartida1.setVisible(false);
            contadordepartida2.setVisible(false);
            newgame.setVisible(true);
            contadorloss = game.add.image(570, 520, "bolverme").setInteractive();
            contadorloss.setVisible(true);
            contadorwin.setVisible(true);
          } else if (carta.idade.valor < carta2.idade.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(true);
            textven = carta2.name + " GANHOU";
            vencedor.setText(textven);
            contadorwin = game.add.image(570, 520, "bolverde").setInteractive();
            if (ganhadorwinesquerdo === 1) {
              ganhadorwinesquerdo = 2;
            } else {
              ganhadorwinesquerdo = 1;
              perdedorlossdireito = +1;
            }
            perdedorlossdireito = +1;
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
        var cartafundo = game.add.image(200, 301, carta.fundo).setInteractive();
        var habilidade = game.add
          .image(200, 321, carta.habilidade.imagem)
          .setInteractive();
        var simpatia = game.add
          .image(200, 355, carta.simpatia.imagem)
          .setInteractive();
        var conhecimento = game.add
          .image(200, 385, carta.conhecimento.imagem)
          .setInteractive();
        var altura = game.add
          .image(200, 416, carta.altura.imagem)
          .setInteractive();
        var idade = game.add
          .image(200, 445, carta.idade.imagem)
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
          placar = "É SUA VEZ!";
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
  
        habilidade.on(
          "pointerdown",
          function () {
            cartafundo.setVisible(true);
            habilidade.setVisible(true);
            simpatia.setVisible(false);
            conhecimento.setVisible(false);
            altura.setVisible(false);
            idade.setVisible(false);
            carta2fundo.setVisible(true);
            habilidade2.setVisible(true);
            simpatia2.setVisible(false);
            conhecimento2.setVisible(false);
            altura2.setVisible(false);
            idade2.setVisible(false);
            imagembloqueio.setVisible(false);
            newgame.setVisible(true);
  
            if (carta.habilidade.valor > carta2.habilidade.valor) {
              placarTexto1.setVisible(false);
              placarTexto2.setVisible(false);
              vencedor.setVisible(true);
              textven = carta.name + " GANHOU";
              vencedor.setText(textven);
              contadorwin = game.add.image(210, 520, "bolverde").setInteractive();
              if (ganhadorwidireito === 1) {
                ganhadorwindireito = 2;
                perdedorlossesquerdo = 3;
              } else if (ganhadorwindireito === 2) {
                ganhadorwindireito = 3;
                perdedorlossesquerdo = 3;
              } else {
                ganhadorwindireito = 1;
              }
              contadordepartida1.setVisible(false);
              contadordepartida2.setVisible(false);
              newgame.setVisible(true);
              contadorloss = game.add
                .image(610, 520, "bolverme")
                .setInteractive();
              contadorloss.setVisible(true);
              contadorwin.setVisible(true);
              bolicinza.setVisible(false);
            } else if (carta.habilidade.valor < carta2.habilidade.valor) {
              placarTexto1.setVisible(false);
              placarTexto2.setVisible(false);
              vencedor.setVisible(true);
              textven = carta2.name + " GANHOU";
              vencedor.setText(textven);
              contadorwin = game.add.image(610, 520, "bolverde").setInteractive();
              if (ganhadorwinesquerdo === 1) {
                ganhadorwinesquerdo = 2;
                perdedorlossdireito = 3;
              } else if (ganhadorwinesquerdo === 2) {
                ganhadorwinesquerdo = 3;
                perdedorlossdireito = 3;
              } else {
                ganhadorwinesquerdo = 0;
              }
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
  
        simpatia.on("pointerdown", function () {
          cartafundo.setVisible(true);
          habilidade.setVisible(false);
          simpatia.setVisible(true);
          conhecimento.setVisible(false);
          altura.setVisible(false);
          idade.setVisible(false);
          carta2fundo.setVisible(true);
          habilidade2.setVisible(false);
          simpatia2.setVisible(true);
          conhecimento2.setVisible(false);
          altura2.setVisible(false);
          idade2.setVisible(false);
          imagembloqueio.setVisible(false);
          newgame.setVisible(true);
          if (carta.simpatia.valor > carta2.simpatia.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(true);
            textven = carta.name + " GANHOU";
            vencedor.setText(textven);
            contadorwin = game.add.image(210, 520, "bolverde").setInteractive();
            if (ganhadorwindireito === 1) {
              ganhadorwindireito = 2;
              perdedorlossesquerdo = +1;
            } else if (ganhadorwindireito === 2) {
              ganhadorwindireito = 3;
              perdedorlossesquerdo = +1;
            } else {
              ganhadorwindireito = 1;
            }
            contadordepartida1.setVisible(false);
            contadordepartida2.setVisible(false);
            newgame.setVisible(true);
            contadorloss = game.add.image(610, 520, "bolverme").setInteractive();
            contadorloss.setVisible(true);
            contadorwin.setVisible(true);
            bolicinza.setVisible(false);
          } else if (carta.simpatia.valor < carta2.simpatia.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(true);
            textven = carta2.name + " GANHOU";
            vencedor.setText(textven);
            contadorwin = game.add.image(610, 520, "bolverde").setInteractive();
            if (ganhadorwinesquerdo === 1) {
              ganhadorwinesquerdo = 2;
              perdedorlossdireito = 3;
            } else if (ganhadorwinesquerdo === 2) {
              ganhadorwinesquerdo = 3;
              perdedorlossdireito = 3;
            } else {
              ganhadorwinesquerdo = 1;
            }
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
  
        conhecimento.on("pointerdown", function () {
          cartafundo.setVisible(true);
          habilidade.setVisible(false);
          simpatia.setVisible(false);
          conhecimento.setVisible(true);
          altura.setVisible(false);
          idade.setVisible(false);
          carta2fundo.setVisible(true);
          habilidade2.setVisible(false);
          simpatia2.setVisible(false);
          conhecimento2.setVisible(true);
          altura2.setVisible(false);
          idade2.setVisible(false);
          imagembloqueio.setVisible(false);
          if (carta.conhecimento.valor > carta2.conhecimento.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(true);
            textven = carta.name + " GANHOU";
            vencedor.setText(textven);
            contadorwin = game.add.image(210, 520, "bolverde").setInteractive();
            if (ganhadorwindireito === 1) {
              ganhadorwindireito = 2;
              perdedorlossesquerdo = +1;
            } else if (ganhadorwindireito === 2) {
              ganhadorwindireito = 3;
              perdedorlossesquerdo = +1;
            } else {
              ganhadorwindireito = 1;
            }
            contadordepartida1.setVisible(false);
            contadordepartida2.setVisible(false);
            newgame.setVisible(true);
            contadorloss = game.add.image(610, 520, "bolverme").setInteractive();
            contadorloss.setVisible(true);
            contadorwin.setVisible(true);
            bolicinza.setVisible(false);
          } else if (carta.conhecimento.valor < carta2.conhecimento.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(true);
            textven = carta2.name + " GANHOU";
            vencedor.setText(textven);
            contadorwin = game.add.image(610, 520, "bolverde").setInteractive();
            if (ganhadorwinesquerdo === 1) {
              ganhadorwinesquerdo = 2;
              perdedorlossdireito = 3;
            } else if (ganhadorwinesquerdo === 2) {
              ganhadorwinesquerdo = 3;
              perdedorlossdireito = 3;
            } else {
              ganhadorwinesquerdo = 1;
            }
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
  
        altura.on("pointerdown", function () {
          cartafundo.setVisible(true);
          habilidade.setVisible(false);
          simpatia.setVisible(false);
          conhecimento.setVisible(false);
          altura.setVisible(true);
          idade.setVisible(false);
          carta2fundo.setVisible(true);
          habilidade2.setVisible(false);
          simpatia2.setVisible(false);
          conhecimento2.setVisible(false);
          altura2.setVisible(true);
          idade2.setVisible(false);
          imagembloqueio.setVisible(false);
          if (carta.altura.valor > carta2.altura.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(true);
            textven = carta.name + " GANHOU";
            vencedor.setText(textven);
            contadorwin = game.add.image(210, 520, "bolverde").setInteractive();
            if (ganhadorwindireito === 1) {
              ganhadorwindireito = 2;
              perdedorlossesquerdo = +1;
            } else if (ganhadorwindireito === 2) {
              ganhadorwindireito = 3;
              perdedorlossesquerdo = +1;
            } else {
              ganhadorwindireito = 1;
            }
            perdedorlossesquerdo = 3;
            contadordepartida1.setVisible(false);
            contadordepartida2.setVisible(false);
            newgame.setVisible(true);
            contadorloss = game.add.image(610, 520, "bolverme").setInteractive();
            contadorloss.setVisible(true);
            contadorwin.setVisible(true);
            bolicinza.setVisible(false);
          } else if (carta.altura.valor < carta2.altura.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(true);
            textven = carta2.name + " GANHOU";
            vencedor.setText(textven);
            contadorwin = game.add.image(610, 520, "bolverde").setInteractive();
            if (ganhadorwinesquerdo === 1) {
              ganhadorwinesquerdo = 2;
              perdedorlossdireito = 3;
            } else if (ganhadorwinesquerdo === 2) {
              ganhadorwinesquerdo = 3;
              perdedorlossdireito = 3;
            } else {
              ganhadorwinesquerdo = 1;
            }
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
  
        idade.on("pointerdown", function () {
          cartafundo.setVisible(true);
          habilidade.setVisible(false);
          simpatia.setVisible(false);
          conhecimento.setVisible(false);
          altura.setVisible(false);
          idade.setVisible(true);
          carta2fundo.setVisible(true);
          habilidade2.setVisible(false);
          simpatia2.setVisible(false);
          conhecimento2.setVisible(false);
          altura2.setVisible(false);
          idade2.setVisible(true);
          imagembloqueio.setVisible(false);
          if (carta.idade.valor > carta2.idade.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(true);
            textven = carta.name + " GANHOU";
            vencedor.setText(textven);
            contadorwin = game.add.image(210, 520, "bolverde").setInteractive();
            if (ganhadorwindireito === 1) {
              ganhadorwindireito = 2;
              perdedorlossesquerdo = +1;
            } else if (ganhadorwindireito === 2) {
              ganhadorwindireito = 3;
              perdedorlossesquerdo = +1;
            } else {
              ganhadorwindireito = 1;
            }
            perdedorlossesquerdo = 3;
            contadordepartida1.setVisible(false);
            contadordepartida2.setVisible(false);
            newgame.setVisible(true);
            contadorloss = game.add.image(610, 520, "bolverme").setInteractive();
            contadorloss.setVisible(true);
            contadorwin.setVisible(true);
            bolicinza.setVisible(false);
          } else if (carta.idade.valor < carta2.idade.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(true);
            textven = carta2.name + " GANHOU";
            vencedor.setText(textven);
            contadorwin = game.add.image(610, 520, "bolverde").setInteractive();
            if (ganhadorwinesquerdo === 1) {
              ganhadorwinesquerdo = 2;
              perdedorlossdireito = 3;
            } else if (ganhadorwinesquerdo === 2) {
              ganhadorwinesquerdo = 3;
              perdedorlossdireito = 3;
            } else {
              ganhadorwinesquerdo = 1;
            }
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
            cartafundo.setVisible(true);
            habilidade.setVisible(true);
            simpatia.setVisible(false);
            conhecimento.setVisible(false);
            altura.setVisible(false);
            idade.setVisible(false);
            imagembloqueio.setVisible(false);
            if (carta.habilidade.valor > carta2.habilidade.valor) {
              placarTexto1.setVisible(false);
              placarTexto2.setVisible(false);
              vencedor.setVisible(true);
              textven = carta.name + " GANHOU";
              vencedor.setText(textven);
              contadorwin = game.add.image(210, 520, "bolverde").setInteractive();
              if (ganhadorwindireito === 1) {
                ganhadorwindireito = 2;
                perdedorlossesquerdo = +1;
              } else if (ganhadorwindireito === 2) {
                ganhadorwindireito = 3;
                perdedorlossesquerdo = +1;
              } else {
                ganhadorwindireito = 1;
              }
              perdedorlossesquerdo = 3;
              contadordepartida1.setVisible(false);
              contadordepartida2.setVisible(false);
              newgame.setVisible(true);
              contadorloss = game.add
                .image(610, 520, "bolverme")
                .setInteractive();
              contadorloss.setVisible(true);
              contadorwin.setVisible(true);
            } else if (carta.habilidade.valor < carta2.habilidade.valor) {
              placarTexto1.setVisible(false);
              placarTexto2.setVisible(false);
              vencedor.setVisible(true);
              textven = carta2.name + " GANHOU";
              vencedor.setText(textven);
              contadorwin = game.add.image(610, 520, "bolverde").setInteractive();
              if (ganhadorwinesquerdo === 1) {
                ganhadorwinesquerdo = 2;
                perdedorlossdireito = 3;
              } else if (ganhadorwinesquerdo === 2) {
                ganhadorwinesquerdo = 3;
                perdedorlossdireito = 3;
              } else {
                ganhadorwinesquerdo = 1;
              }
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
          cartafundo.setVisible(true);
          habilidade.setVisible(false);
          simpatia.setVisible(true);
          conhecimento.setVisible(false);
          altura.setVisible(false);
          idade.setVisible(false);
          imagembloqueio.setVisible(false);
          if (carta.simpatia.valor > carta2.simpatia.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(true);
            textven = carta.name + " GANHOU";
            vencedor.setText(textven);
            contadorwin = game.add.image(210, 520, "bolverde").setInteractive();
            if (ganhadorwindireito === 1) {
              ganhadorwindireito = 2;
              perdedorlossesquerdo = +1;
            } else if (ganhadorwindireito === 2) {
              ganhadorwindireito = 3;
              perdedorlossesquerdo = +1;
            } else {
              ganhadorwindireito = 1;
            }
            contadordepartida1.setVisible(false);
            contadordepartida2.setVisible(false);
            newgame.setVisible(true);
            contadorloss = game.add.image(610, 520, "bolverme").setInteractive();
            contadorloss.setVisible(true);
            contadorwin.setVisible(true);
          } else if (carta.simpatia.valor < carta2.simpatia.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(true);
            textven = carta2.name + " GANHOU";
            vencedor.setText(textven);
            contadorwin = game.add.image(610, 520, "bolverde").setInteractive();
            if (ganhadorwinesquerdo === 1) {
              ganhadorwinesquerdo = 2;
              perdedorlossdireito = 3;
            } else if (ganhadorwinesquerdo === 2) {
              ganhadorwinesquerdo = 3;
              perdedorlossdireito = 3;
            } else {
              ganhadorwinesquerdo = 1;
            }
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
          cartafundo.setVisible(true);
          habilidade.setVisible(false);
          simpatia.setVisible(false);
          conhecimento.setVisible(true);
          altura.setVisible(false);
          idade.setVisible(false);
          imagembloqueio.setVisible(false);
          if (carta.conhecimento.valor > carta2.conhecimento.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(true);
            textven = carta.name + " GANHOU";
            vencedor.setText(textven);
            contadorwin = game.add.image(210, 520, "bolverde").setInteractive();
            if (ganhadorwindireito === 1) {
              ganhadorwindireito = 2;
              perdedorlossesquerdo = +1;
            } else if (ganhadorwindireito === 2) {
              ganhadorwindireito = 3;
              perdedorlossesquerdo = +1;
            } else {
              ganhadorwindireito = 1;
            }
            perdedorlossesquerdo = 3;
            contadordepartida1.setVisible(false);
            contadordepartida2.setVisible(false);
            newgame.setVisible(true);
            contadorloss = game.add.image(610, 520, "bolverme").setInteractive();
            contadorloss.setVisible(true);
            contadorwin.setVisible(true);
          } else if (carta.conhecimento.valor < carta2.conhecimento.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(true);
            textven = carta2.name + " GANHOU";
            vencedor.setText(textven);
            contadorwin = game.add.image(610, 520, "bolverde").setInteractive();
            if (ganhadorwinesquerdo === 1) {
              ganhadorwinesquerdo = 2;
              perdedorlossdireito = 3;
            } else if (ganhadorwinesquerdo === 2) {
              ganhadorwinesquerdo = 3;
              perdedorlossdireito = 3;
            } else {
              ganhadorwinesquerdo = 1;
            }
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
          cartafundo.setVisible(true);
          habilidade.setVisible(false);
          simpatia.setVisible(false);
          conhecimento.setVisible(false);
          altura.setVisible(true);
          idade.setVisible(false);
          imagembloqueio.setVisible(false);
          if (carta.altura.valor > carta2.altura.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(true);
            textven = carta.name + " GANHOU";
            vencedor.setText(textven);
            contadorwin = game.add.image(210, 520, "bolverde").setInteractive();
            if (ganhadorwindireito === 1) {
              ganhadorwindireito = 2;
              perdedorlossesquerdo = +1;
            } else if (ganhadorwindireito === 2) {
              ganhadorwindireito = 3;
              perdedorlossesquerdo = +1;
            } else {
              ganhadorwindireito = 1;
            }
            perdedorlossesquerdo = 3;
            contadordepartida1.setVisible(false);
            contadordepartida2.setVisible(false);
            newgame.setVisible(true);
            contadorloss = game.add.image(610, 520, "bolverme").setInteractive();
            contadorloss.setVisible(true);
            contadorwin.setVisible(true);
          } else if (carta.altura.valor < carta2.altura.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(true);
            textven = carta2.name + " GANHOU";
            vencedor.setText(textven);
            contadorwin = game.add.image(610, 520, "bolverde").setInteractive();
            if (ganhadorwinesquerdo === 1) {
              ganhadorwinesquerdo = 2;
              perdedorlossdireito = 3;
            } else if (ganhadorwinesquerdo === 2) {
              ganhadorwinesquerdo = 3;
              perdedorlossdireito = 3;
            } else {
              ganhadorwinesquerdo = 1;
            }
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
          cartafundo.setVisible(true);
          habilidade.setVisible(false);
          simpatia.setVisible(false);
          conhecimento.setVisible(false);
          altura.setVisible(false);
          idade.setVisible(true);
          imagembloqueio.setVisible(false);
  
          if (carta.idade.valor > carta2.idade.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(true);
            textven = carta.name + " GANHOU";
            vencedor.setText(textven);
            contadorwin = game.add.image(210, 520, "bolverde").setInteractive();
            if (ganhadorwindireito === 1) {
              ganhadorwindireito = 2;
              perdedorlossesquerdo = +1;
            } else if (ganhadorwindireito === 2) {
              ganhadorwindireito = 3;
              perdedorlossesquerdo = +1;
            } else {
              ganhadorwindireito = 1;
            }
            perdedorlossesquerdo = 3;
            contadordepartida1.setVisible(false);
            contadordepartida2.setVisible(false);
            newgame.setVisible(true);
            contadorloss = game.add.image(610, 520, "bolverme").setInteractive();
            contadorloss.setVisible(true);
            contadorwin.setVisible(true);
          } else if (carta.idade.valor < carta2.idade.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(true);
            textven = carta2.name + " GANHOU";
            vencedor.setText(textven);
            contadorwin = game.add.image(610, 520, "bolverde").setInteractive();
            if (ganhadorwinesquerdo === 1) {
              ganhadorwinesquerdo = 2;
              perdedorlossdireito = 3;
            } else if (ganhadorwinesquerdo === 2) {
              ganhadorwinesquerdo = 3;
              perdedorlossdireito = 3;
            } else {
              ganhadorwinesquerdo = 1;
            }
  
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
        var cartafundo = game.add.image(200, 301, carta.fundo).setInteractive();
        var habilidade = game.add
          .image(200, 321, carta.habilidade.imagem)
          .setInteractive();
        var simpatia = game.add
          .image(200, 355, carta.simpatia.imagem)
          .setInteractive();
        var conhecimento = game.add
          .image(200, 385, carta.conhecimento.imagem)
          .setInteractive();
        var altura = game.add
          .image(200, 416, carta.altura.imagem)
          .setInteractive();
        var idade = game.add
          .image(200, 445, carta.idade.imagem)
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
          placar = "É SUA VEZ!";
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
  
        habilidade.on(
          "pointerdown",
          function () {
            cartafundo.setVisible(true);
            habilidade.setVisible(true);
            simpatia.setVisible(false);
            conhecimento.setVisible(false);
            altura.setVisible(false);
            idade.setVisible(false);
            carta2fundo.setVisible(true);
            habilidade2.setVisible(true);
            simpatia2.setVisible(false);
            conhecimento2.setVisible(false);
            altura2.setVisible(false);
            idade2.setVisible(false);
            imagembloqueio.setVisible(false);
            newgame.setVisible(true);
  
            if (carta.habilidade.valor > carta2.habilidade.valor) {
              placarTexto1.setVisible(false);
              placarTexto2.setVisible(false);
              vencedor.setVisible(true);
              textven = carta.name + " GANHOU";
              vencedor.setText(textven);
              contadorwin = game.add.image(250, 520, "bolverde").setInteractive();
              if (ganhadorwindireito === 1) {
                ganhadorwindireito = 2;
              } else if (ganhadorwindireito === 2) {
                ganhadorwindireito = 3;
              } else if (ganhadorwindireito === 0) {
                ganhadorwindireito = 1;
              } else {
                ganhadorwindireito = 4;
              }
              contadordepartida1.setVisible(false);
              contadordepartida2.setVisible(false);
              newgame.setVisible(true);
              contadorloss = game.add
                .image(650, 520, "bolverme")
                .setInteractive();
              contadorloss.setVisible(true);
              contadorwin.setVisible(true);
              bolicinza.setVisible(false);
            } else if (carta.habilidade.valor < carta2.habilidade.valor) {
              placarTexto1.setVisible(false);
              placarTexto2.setVisible(false);
              vencedor.setVisible(true);
              textven = carta2.name + " GANHOU";
              vencedor.setText(textven);
              contadorwin = game.add.image(650, 520, "bolverde").setInteractive();
              if (ganhadorwinesquerdo === 1) {
                ganhadorwinesquerdo = 2;
              } else if (ganhadorwinesquerdo === 2) {
                ganhadorwinesquerdo = 3;
              } else if (ganhadorwinesquerdo === 0) {
                ganhadorwinesquerdo = 1;
              } else {
                ganhadorwinesquerdo = 4;
              }
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
  
        simpatia.on("pointerdown", function () {
          cartafundo.setVisible(true);
          habilidade.setVisible(false);
          simpatia.setVisible(true);
          conhecimento.setVisible(false);
          altura.setVisible(false);
          idade.setVisible(false);
          carta2fundo.setVisible(true);
          habilidade2.setVisible(false);
          simpatia2.setVisible(true);
          conhecimento2.setVisible(false);
          altura2.setVisible(false);
          idade2.setVisible(false);
          imagembloqueio.setVisible(false);
          newgame.setVisible(true);
          if (carta.simpatia.valor > carta2.simpatia.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(true);
            textven = carta.name + " GANHOU";
            vencedor.setText(textven);
            contadorwin = game.add.image(250, 520, "bolverde").setInteractive();
            if (ganhadorwindireito === 1) {
              ganhadorwindireito = 2;
            } else if (ganhadorwindireito === 2) {
              ganhadorwindireito = 3;
            } else if (ganhadorwindireito === 0) {
              ganhadorwindireito = 1;
            } else {
              ganhadorwindireito = 4;
            }
            contadordepartida1.setVisible(false);
            contadordepartida2.setVisible(false);
            newgame.setVisible(true);
            contadorloss = game.add.image(650, 520, "bolverme").setInteractive();
            contadorloss.setVisible(true);
            contadorwin.setVisible(true);
            bolicinza.setVisible(false);
          } else if (carta.simpatia.valor < carta2.simpatia.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(true);
            textven = carta2.name + " GANHOU";
            vencedor.setText(textven);
            contadorwin = game.add.image(650, 520, "bolverde").setInteractive();
            if (ganhadorwinesquerdo === 1) {
              ganhadorwinesquerdo = 2;
            } else if (ganhadorwinesquerdo === 2) {
              ganhadorwinesquerdo = 3;
            } else if (ganhadorwinesquerdo === 0) {
              ganhadorwinesquerdo = 1;
            } else {
              ganhadorwinesquerdo = 4;
            }
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
  
        conhecimento.on("pointerdown", function () {
          cartafundo.setVisible(true);
          habilidade.setVisible(false);
          simpatia.setVisible(false);
          conhecimento.setVisible(true);
          altura.setVisible(false);
          idade.setVisible(false);
          carta2fundo.setVisible(true);
          habilidade2.setVisible(false);
          simpatia2.setVisible(false);
          conhecimento2.setVisible(true);
          altura2.setVisible(false);
          idade2.setVisible(false);
          imagembloqueio.setVisible(false);
          if (carta.conhecimento.valor > carta2.conhecimento.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(true);
            textven = carta.name + " GANHOU";
            vencedor.setText(textven);
            contadorwin = game.add.image(250, 520, "bolverde").setInteractive();
            if (ganhadorwindireito === 1) {
              ganhadorwindireito = 2;
            } else if (ganhadorwindireito === 2) {
              ganhadorwindireito = 3;
            } else if (ganhadorwindireito === 0) {
              ganhadorwindireito = 1;
            } else {
              ganhadorwindireito = 4;
            }
            contadordepartida1.setVisible(false);
            contadordepartida2.setVisible(false);
            newgame.setVisible(true);
            contadorloss = game.add.image(650, 520, "bolverme").setInteractive();
            contadorloss.setVisible(true);
            contadorwin.setVisible(true);
            bolicinza.setVisible(false);
          } else if (carta.conhecimento.valor < carta2.conhecimento.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(true);
            textven = carta2.name + " GANHOU";
            vencedor.setText(textven);
            contadorwin = game.add.image(650, 520, "bolverde").setInteractive();
            if (ganhadorwinesquerdo === 1) {
              ganhadorwinesquerdo = 2;
            } else if (ganhadorwinesquerdo === 2) {
              ganhadorwinesquerdo = 3;
            } else if (ganhadorwinesquerdo === 0) {
              ganhadorwinesquerdo = 1;
            } else {
              ganhadorwinesquerdo = 4;
            }
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
  
        altura.on("pointerdown", function () {
          cartafundo.setVisible(true);
          habilidade.setVisible(false);
          simpatia.setVisible(false);
          conhecimento.setVisible(false);
          altura.setVisible(true);
          idade.setVisible(false);
          carta2fundo.setVisible(true);
          habilidade2.setVisible(false);
          simpatia2.setVisible(false);
          conhecimento2.setVisible(false);
          altura2.setVisible(true);
          idade2.setVisible(false);
          imagembloqueio.setVisible(false);
          if (carta.altura.valor > carta2.altura.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(true);
            textven = carta.name + " GANHOU";
            vencedor.setText(textven);
            contadorwin = game.add.image(250, 520, "bolverde").setInteractive();
            if (ganhadorwindireito === 1) {
              ganhadorwindireito = 2;
            } else if (ganhadorwindireito === 2) {
              ganhadorwindireito = 3;
            } else if (ganhadorwindireito === 0) {
              ganhadorwindireito = 1;
            } else {
              ganhadorwindireito = 4;
            }
            contadordepartida1.setVisible(false);
            contadordepartida2.setVisible(false);
            newgame.setVisible(true);
            contadorloss = game.add.image(650, 520, "bolverme").setInteractive();
            contadorloss.setVisible(true);
            contadorwin.setVisible(true);
            bolicinza.setVisible(false);
          } else if (carta.altura.valor < carta2.altura.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(true);
            textven = carta2.name + " GANHOU";
            vencedor.setText(textven);
            contadorwin = game.add.image(650, 520, "bolverde").setInteractive();
            if (ganhadorwinesquerdo === 1) {
              ganhadorwinesquerdo = 2;
            } else if (ganhadorwinesquerdo === 2) {
              ganhadorwinesquerdo = 3;
            } else if (ganhadorwinesquerdo === 0) {
              ganhadorwinesquerdo = 1;
            } else {
              ganhadorwinesquerdo = 4;
            }
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
  
        idade.on("pointerdown", function () {
          cartafundo.setVisible(true);
          habilidade.setVisible(false);
          simpatia.setVisible(false);
          conhecimento.setVisible(false);
          altura.setVisible(false);
          idade.setVisible(true);
          carta2fundo.setVisible(true);
          habilidade2.setVisible(false);
          simpatia2.setVisible(false);
          conhecimento2.setVisible(false);
          altura2.setVisible(false);
          idade2.setVisible(true);
          imagembloqueio.setVisible(false);
          if (carta.idade.valor > carta2.idade.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(true);
            textven = carta.name + " GANHOU";
            vencedor.setText(textven);
            contadorwin = game.add.image(250, 520, "bolverde").setInteractive();
            if (ganhadorwindireito === 1) {
              ganhadorwindireito = 2;
            } else if (ganhadorwindireito === 2) {
              ganhadorwindireito = 3;
            } else if (ganhadorwindireito === 0) {
              ganhadorwindireito = 1;
            } else {
              ganhadorwindireito = 4;
            }
            contadordepartida1.setVisible(false);
            contadordepartida2.setVisible(false);
            newgame.setVisible(true);
            contadorloss = game.add.image(650, 520, "bolverme").setInteractive();
            contadorloss.setVisible(true);
            contadorwin.setVisible(true);
            bolicinza.setVisible(false);
          } else if (carta.idade.valor < carta2.idade.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(true);
            textven = carta2.name + " GANHOU";
            vencedor.setText(textven);
            contadorwin = game.add.image(650, 520, "bolverde").setInteractive();
            if (ganhadorwinesquerdo === 1) {
              ganhadorwinesquerdo = 2;
            } else if (ganhadorwinesquerdo === 2) {
              ganhadorwinesquerdo = 3;
            } else if (ganhadorwinesquerdo === 0) {
              ganhadorwinesquerdo = 1;
            } else {
              ganhadorwinesquerdo = 4;
            }
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
            cartafundo.setVisible(true);
            habilidade.setVisible(true);
            simpatia.setVisible(false);
            conhecimento.setVisible(false);
            altura.setVisible(false);
            idade.setVisible(false);
            imagembloqueio.setVisible(false);
            if (carta.habilidade.valor > carta2.habilidade.valor) {
              placarTexto1.setVisible(false);
              placarTexto2.setVisible(false);
              vencedor.setVisible(true);
              textven = carta.name + " GANHOU";
              vencedor.setText(textven);
              contadorwin = game.add.image(250, 520, "bolverde").setInteractive();
              if (ganhadorwindireito === 1) {
                ganhadorwindireito = 2;
              } else if (ganhadorwindireito === 2) {
                ganhadorwindireito = 3;
              } else if (ganhadorwindireito === 0) {
                ganhadorwindireito = 1;
              } else {
                ganhadorwindireito = 4;
              }
              contadordepartida1.setVisible(false);
              contadordepartida2.setVisible(false);
              newgame.setVisible(true);
              contadorloss = game.add
                .image(650, 520, "bolverme")
                .setInteractive();
              contadorloss.setVisible(true);
              contadorwin.setVisible(true);
            } else if (carta.habilidade.valor < carta2.habilidade.valor) {
              placarTexto1.setVisible(false);
              placarTexto2.setVisible(false);
              vencedor.setVisible(true);
              textven = carta2.name + " GANHOU";
              vencedor.setText(textven);
              contadorwin = game.add.image(650, 520, "bolverde").setInteractive();
              if (ganhadorwinesquerdo === 1) {
                ganhadorwinesquerdo = 2;
              } else if (ganhadorwinesquerdo === 2) {
                ganhadorwinesquerdo = 3;
              } else if (ganhadorwinesquerdo === 0) {
                ganhadorwinesquerdo = 1;
              } else {
                ganhadorwinesquerdo = 4;
              }
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
          cartafundo.setVisible(true);
          habilidade.setVisible(false);
          simpatia.setVisible(true);
          conhecimento.setVisible(false);
          altura.setVisible(false);
          idade.setVisible(false);
          imagembloqueio.setVisible(false);
          if (carta.simpatia.valor > carta2.simpatia.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(true);
            textven = carta.name + " GANHOU";
            vencedor.setText(textven);
            contadorwin = game.add.image(250, 520, "bolverde").setInteractive();
            if (ganhadorwindireito === 1) {
              ganhadorwindireito = 2;
            } else if (ganhadorwindireito === 2) {
              ganhadorwindireito = 3;
            } else if (ganhadorwindireito === 0) {
              ganhadorwindireito = 1;
            } else {
              ganhadorwindireito = 4;
            }
            contadordepartida1.setVisible(false);
            contadordepartida2.setVisible(false);
            newgame.setVisible(true);
            contadorloss = game.add.image(650, 520, "bolverme").setInteractive();
            contadorloss.setVisible(true);
            contadorwin.setVisible(true);
          } else if (carta.simpatia.valor < carta2.simpatia.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(true);
            textven = carta2.name + " GANHOU";
            vencedor.setText(textven);
            contadorwin = game.add.image(650, 520, "bolverde").setInteractive();
            if (ganhadorwinesquerdo === 1) {
              ganhadorwinesquerdo = 2;
            } else if (ganhadorwinesquerdo === 2) {
              ganhadorwinesquerdo = 3;
            } else if (ganhadorwinesquerdo === 0) {
              ganhadorwinesquerdo = 1;
            } else {
              ganhadorwinesquerdo = 4;
            }
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
          cartafundo.setVisible(true);
          habilidade.setVisible(false);
          simpatia.setVisible(false);
          conhecimento.setVisible(true);
          altura.setVisible(false);
          idade.setVisible(false);
          imagembloqueio.setVisible(false);
          if (carta.conhecimento.valor > carta2.conhecimento.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(true);
            textven = carta.name + " GANHOU";
            vencedor.setText(textven);
            contadorwin = game.add.image(250, 520, "bolverde").setInteractive();
            if (ganhadorwindireito === 1) {
              ganhadorwindireito = 2;
            } else if (ganhadorwindireito === 2) {
              ganhadorwindireito = 3;
            } else if (ganhadorwindireito === 0) {
              ganhadorwindireito = 1;
            } else {
              ganhadorwindireito = 4;
            }
            contadordepartida1.setVisible(false);
            contadordepartida2.setVisible(false);
            newgame.setVisible(true);
            contadorloss = game.add.image(650, 520, "bolverme").setInteractive();
            contadorloss.setVisible(true);
            contadorwin.setVisible(true);
          } else if (carta.conhecimento.valor < carta2.conhecimento.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(true);
            textven = carta2.name + " GANHOU";
            vencedor.setText(textven);
            contadorwin = game.add.image(650, 520, "bolverde").setInteractive();
            if (ganhadorwinesquerdo === 1) {
              ganhadorwinesquerdo = 2;
            } else if (ganhadorwinesquerdo === 2) {
              ganhadorwinesquerdo = 3;
            } else if (ganhadorwinesquerdo === 0) {
              ganhadorwinesquerdo = 1;
            } else {
              ganhadorwinesquerdo = 4;
            }
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
          cartafundo.setVisible(true);
          habilidade.setVisible(false);
          simpatia.setVisible(false);
          conhecimento.setVisible(false);
          altura.setVisible(true);
          idade.setVisible(false);
          imagembloqueio.setVisible(false);
          if (carta.altura.valor > carta2.altura.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(true);
            textven = carta.name + " GANHOU";
            vencedor.setText(textven);
            contadorwin = game.add.image(250, 520, "bolverde").setInteractive();
            if (ganhadorwindireito === 1) {
              ganhadorwindireito = 2;
            } else if (ganhadorwindireito === 2) {
              ganhadorwindireito = 3;
            } else if (ganhadorwindireito === 0) {
              ganhadorwindireito = 1;
            } else {
              ganhadorwindireito = 4;
            }
            contadordepartida1.setVisible(false);
            contadordepartida2.setVisible(false);
            newgame.setVisible(true);
            contadorloss = game.add.image(650, 520, "bolverme").setInteractive();
            contadorloss.setVisible(true);
            contadorwin.setVisible(true);
          } else if (carta.altura.valor < carta2.altura.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(true);
            textven = carta2.name + " GANHOU";
            vencedor.setText(textven);
            contadorwin = game.add.image(650, 520, "bolverde").setInteractive();
            if (ganhadorwinesquerdo === 1) {
              ganhadorwinesquerdo = 2;
            } else if (ganhadorwinesquerdo === 2) {
              ganhadorwinesquerdo = 3;
            } else if (ganhadorwinesquerdo === 0) {
              ganhadorwinesquerdo = 1;
            } else {
              ganhadorwinesquerdo = 4;
            }
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
          cartafundo.setVisible(true);
          habilidade.setVisible(false);
          simpatia.setVisible(false);
          conhecimento.setVisible(false);
          altura.setVisible(false);
          idade.setVisible(true);
          imagembloqueio.setVisible(false);
  
          if (carta.idade.valor > carta2.idade.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(true);
            textven = carta.name + " GANHOU";
            vencedor.setText(textven);
            contadorwin = game.add.image(250, 520, "bolverde").setInteractive();
            if (ganhadorwindireito === 1) {
              ganhadorwindireito = 2;
            } else if (ganhadorwindireito === 2) {
              ganhadorwindireito = 3;
            } else if (ganhadorwindireito === 0) {
              ganhadorwindireito = 1;
            } else {
              ganhadorwindireito = 4;
            }
            contadordepartida1.setVisible(false);
            contadordepartida2.setVisible(false);
            newgame.setVisible(true);
            contadorloss = game.add.image(650, 520, "bolverme").setInteractive();
            contadorloss.setVisible(true);
            contadorwin.setVisible(true);
          } else if (carta.idade.valor < carta2.idade.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(true);
            textven = carta2.name + " GANHOU";
            vencedor.setText(textven);
            contadorwin = game.add.image(650, 520, "bolverde").setInteractive();
            if (ganhadorwinesquerdo === 1) {
              ganhadorwinesquerdo = 2;
            } else if (ganhadorwinesquerdo === 2) {
              ganhadorwinesquerdo = 3;
            } else if (ganhadorwinesquerdo === 0) {
              ganhadorwinesquerdo = 1;
            } else {
              ganhadorwinesquerdo = 4;
            }
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
        var cartafundo = game.add.image(200, 301, carta.fundo).setInteractive();
        var habilidade = game.add
          .image(200, 321, carta.habilidade.imagem)
          .setInteractive();
        var simpatia = game.add
          .image(200, 355, carta.simpatia.imagem)
          .setInteractive();
        var conhecimento = game.add
          .image(200, 385, carta.conhecimento.imagem)
          .setInteractive();
        var altura = game.add
          .image(200, 416, carta.altura.imagem)
          .setInteractive();
        var idade = game.add
          .image(200, 445, carta.idade.imagem)
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
          placar = "É SUA VEZ!";
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
  
        habilidade.on(
          "pointerdown",
          function () {
            cartafundo.setVisible(true);
            habilidade.setVisible(true);
            simpatia.setVisible(false);
            conhecimento.setVisible(false);
            altura.setVisible(false);
            idade.setVisible(false);
            carta2fundo.setVisible(true);
            habilidade2.setVisible(true);
            simpatia2.setVisible(false);
            conhecimento2.setVisible(false);
            altura2.setVisible(false);
            idade2.setVisible(false);
            imagembloqueio.setVisible(false);
            newgame.setVisible(true);
  
            if (carta.habilidade.valor > carta2.habilidade.valor) {
              placarTexto1.setVisible(false);
              placarTexto2.setVisible(false);
              vencedor.setVisible(false);
              textven = carta.name + " GANHOU";
  
              contadorwin = game.add.image(290, 520, "bolverde").setInteractive();
              if (ganhadorwindireito === 0) {
                ganhadorwindireito = 1;
              } else if (ganhadorwindireito === 1) {
                ganhadorwindireito = 2;
              } else if (ganhadorwindireito === 2) {
                ganhadorwindireito = 3;
              } else if (ganhadorwindireito === 3) {
                ganhadorwindireito = 4;
              } else {
                ganhadorwindireito = 5;
              }
  
              contadordepartida1.setVisible(false);
              contadordepartida2.setVisible(false);
              newgame.setVisible(false);
  
              contadorloss = game.add
                .image(690, 520, "bolverme")
                .setInteractive();
              contadorloss.setVisible(true);
              contadorwin.setVisible(true);
              bolicinza.setVisible(false);
              if (ganhadorwindireito > ganhadorwinesquerdo) {
                textofinal = "PARABÉNS VC GANHOU!";
                textofinal2 = "VC PERDEU IDIOTA!";
                placartext.setVisible(true);
                placartext.setText(textofinal);
                placartext2.setVisible(true);
                placartext2.setText(textofinal2);
              } else if (ganhadorwindireito < ganhadorwinesquerdo) {
                textofinal = "VC PERDEU IDIOTA!";
                textofinal2 = "PARABÉNS VC GANHOU!";
                placartext.setVisible(true);
                placartext.setText(textofinal);
                placartext2.setVisible(true);
                placartext2.setText(textofinal2);
              } else {
                textofinal = "EMPATE";
                empate.setVisible(true);
                empate.setText(textofinal);
              }
            } else if (carta.habilidade.valor < carta2.habilidade.valor) {
              placarTexto1.setVisible(false);
              placarTexto2.setVisible(false);
              vencedor.setVisible(false);
              textven = carta2.name + " GANHOU";
              contadorwin = game.add.image(690, 520, "bolverde").setInteractive();
              if (ganhadorwinesquerdo === 0) {
                ganhadorwinesquerdo = 1;
              } else if (ganhadorwinesquerdo === 1) {
                ganhadorwinesquerdo = 2;
              } else if (ganhadorwinesquerdo === 2) {
                ganhadorwinesquerdo = 3;
              } else if (ganhadorwinesquerdo === 3) {
                ganhadorwinesquerdo = 4;
              } else {
                ganhadorwinesquerdo = 5;
              }
  
              contadordepartida1.setVisible(false);
              contadordepartida2.setVisible(false);
              newgame.setVisible(false);
  
              contadorloss = game.add
                .image(290, 520, "bolverme")
                .setInteractive();
              contadorloss.setVisible(true);
              contadorwin.setVisible(true);
              if (ganhadorwindireito > ganhadorwinesquerdo) {
                textofinal = "PARABÉNS VC GANHOU!";
                textofinal2 = "VC PERDEU IDIOTA!";
                placartext.setVisible(true);
                placartext.setText(textofinal);
                placartext2.setVisible(true);
                placartext2.setText(textofinal2);
              } else if (ganhadorwindireito < ganhadorwinesquerdo) {
                textofinal = "VC PERDEUU!";
                textofinal2 = "VC GANHOU";
                placartext.setVisible(true);
                placartext.setText(textofinal);
                placartext2.setVisible(true);
                placartext2.setText(textofinal2);
              } else {
                textofinal = "EMPATE";
                empate.setVisible(true);
                empate.setText(textofinal);
              }
            } else {
              placarTexto1.setVisible(false);
              placarTexto2.setVisible(false);
              vencedor.setVisible(false);
              textven = "EMPATE";
              contadordepartida1.setVisible(true);
              contadordepartida2.setVisible(true);
              newgame.setVisible(false);
              if (ganhadorwindireito > ganhadorwinesquerdo) {
                textofinal = "PARABÉNS VC GANHOU!";
                textofinal2 = "VC PERDEU IDIOTA!";
                placartext.setVisible(true);
                placartext.setText(textofinal);
                placartext2.setVisible(true);
                placartext2.setText(textofinal2);
              } else if (ganhadorwindireito < ganhadorwinesquerdo) {
                textofinal = "VC PERDEU!";
                textofinal2 = "VC GANHOUUUU!";
                placartext.setVisible(true);
                placartext.setText(textofinal);
                placartext2.setVisible(true);
                placartext2.setText(textofinal2);
              } else {
                textofinal = "EMPATE";
                empate.setVisible(true);
                empate.setText(textofinal);
              }
            }
          },
          this
        );
  
        simpatia.on("pointerdown", function () {
          cartafundo.setVisible(true);
          habilidade.setVisible(false);
          simpatia.setVisible(true);
          conhecimento.setVisible(false);
          altura.setVisible(false);
          idade.setVisible(false);
          carta2fundo.setVisible(true);
          habilidade2.setVisible(false);
          simpatia2.setVisible(true);
          conhecimento2.setVisible(false);
          altura2.setVisible(false);
          idade2.setVisible(false);
          imagembloqueio.setVisible(false);
          newgame.setVisible(true);
          if (carta.simpatia.valor > carta2.simpatia.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(false);
            textven = carta.name + " GANHOU";
            contadorwin = game.add.image(290, 520, "bolverde").setInteractive();
            if (ganhadorwindireito === 0) {
              ganhadorwindireito = 1;
            } else if (ganhadorwindireito === 1) {
              ganhadorwindireito = 2;
            } else if (ganhadorwindireito === 2) {
              ganhadorwindireito = 3;
            } else if (ganhadorwindireito === 3) {
              ganhadorwindireito = 4;
            } else {
              ganhadorwindireito = 5;
            }
            contadordepartida1.setVisible(false);
            contadordepartida2.setVisible(false);
            newgame.setVisible(false);
  
            contadorloss = game.add.image(690, 520, "bolverme").setInteractive();
            contadorloss.setVisible(true);
            contadorwin.setVisible(true);
            bolicinza.setVisible(false);
            if (ganhadorwindireito > ganhadorwinesquerdo) {
              textofinal = "PARABÉNS VC GANHOU!";
              textofinal2 = "VC PERDEU IDIOTA!";
              placartext.setVisible(true);
              placartext.setText(textofinal);
              placartext2.setVisible(true);
              placartext2.setText(textofinal2);
            } else if (ganhadorwindireito < ganhadorwinesquerdo) {
              textofinal = "VC PERDEUU!";
              textofinal2 = "VC GANHOU";
              placartext.setVisible(true);
              placartext.setText(textofinal);
              placartext2.setVisible(true);
              placartext2.setText(textofinal2);
            } else {
              textofinal = "EMPATE";
              empate.setVisible(true);
              empate.setText(textofinal);
            }
          } else if (carta.simpatia.valor < carta2.simpatia.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(false);
            textven = carta2.name + " GANHOU";
            contadorwin = game.add.image(690, 520, "bolverde").setInteractive();
            contadordepartida1.setVisible(false);
            contadordepartida2.setVisible(false);
            newgame.setVisible(false);
            if (ganhadorwinesquerdo === 0) {
              ganhadorwinesquerdo = 1;
            } else if (ganhadorwinesquerdo === 1) {
              ganhadorwinesquerdo = 2;
            } else if (ganhadorwinesquerdo === 2) {
              ganhadorwinesquerdo = 3;
            } else if (ganhadorwinesquerdo === 3) {
              ganhadorwinesquerdo = 4;
            } else {
              ganhadorwinesquerdo = 5;
            }
            contadorloss = game.add.image(290, 520, "bolverme").setInteractive();
            contadorloss.setVisible(true);
            contadorwin.setVisible(true);
            if (ganhadorwindireito > ganhadorwinesquerdo) {
              textofinal = "PARABÉNS VC GANHOU!";
              textofinal2 = "VC PERDEU IDIOTA!";
              placartext.setVisible(true);
              placartext.setText(textofinal);
              placartext2.setVisible(true);
              placartext2.setText(textofinal2);
            } else if (ganhadorwindireito < ganhadorwinesquerdo) {
              textofinal = "VC PERDEU!";
              textofinal2 = "VC GANHOUUUU!";
              placartext.setVisible(true);
              placartext.setText(textofinal);
              placartext2.setVisible(true);
              placartext2.setText(textofinal2);
            } else {
              textofinal = "EMPATE";
              empate.setVisible(true);
              empate.setText(textofinal);
            }
          } else {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(false);
            textven = "EMPATE";
            contadordepartida1.setVisible(true);
            contadordepartida2.setVisible(true);
            newgame.setVisible(false);
            if (ganhadorwindireito > ganhadorwinesquerdo) {
              textofinal = "PARABÉNS VC GANHOU!";
              textofinal2 = "VC PERDEU IDIOTA!";
              placartext.setVisible(true);
              placartext.setText(textofinal);
              placartext2.setVisible(true);
              placartext2.setText(textofinal2);
            } else if (ganhadorwindireito < ganhadorwinesquerdo) {
              textofinal = "VC PERDEU!";
              textofinal2 = "VC GANHOUUUU!";
              placartext.setVisible(true);
              placartext.setText(textofinal);
              placartext2.setVisible(true);
              placartext2.setText(textofinal2);
            } else {
              textofinal = "EMPATE";
              empate.setVisible(true);
              empate.setText(textofinal);
            }
          }
        });
  
        conhecimento.on("pointerdown", function () {
          cartafundo.setVisible(true);
          habilidade.setVisible(false);
          simpatia.setVisible(false);
          conhecimento.setVisible(true);
          altura.setVisible(false);
          idade.setVisible(false);
          carta2fundo.setVisible(true);
          habilidade2.setVisible(false);
          simpatia2.setVisible(false);
          conhecimento2.setVisible(true);
          altura2.setVisible(false);
          idade2.setVisible(false);
          imagembloqueio.setVisible(false);
          if (carta.conhecimento.valor > carta2.conhecimento.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(false);
            textven = carta.name + " GANHOU";
            contadorwin = game.add.image(290, 520, "bolverde").setInteractive();
            if (ganhadorwindireito === 0) {
              ganhadorwindireito = 1;
            } else if (ganhadorwindireito === 1) {
              ganhadorwindireito = 2;
            } else if (ganhadorwindireito === 2) {
              ganhadorwindireito = 3;
            } else if (ganhadorwindireito === 3) {
              ganhadorwindireito = 4;
            } else {
              ganhadorwindireito = 5;
            }
            contadordepartida1.setVisible(false);
            contadordepartida2.setVisible(false);
            newgame.setVisible(false);
            contadorloss = game.add.image(690, 520, "bolverme").setInteractive();
            contadorloss.setVisible(true);
            contadorwin.setVisible(true);
            bolicinza.setVisible(false);
            if (ganhadorwindireito > ganhadorwinesquerdo) {
              textofinal = "PARABÉNS VC GANHOU!";
              textofinal2 = "VC PERDEU IDIOTA!";
              placartext.setVisible(true);
              placartext.setText(textofinal);
              placartext2.setVisible(true);
              placartext2.setText(textofinal2);
            } else if (ganhadorwindireito < ganhadorwinesquerdo) {
              textofinal = "VC PERDEUU!";
              textofinal2 = "VC GANHOU";
              placartext.setVisible(true);
              placartext.setText(textofinal);
              placartext2.setVisible(true);
              placartext2.setText(textofinal2);
            } else {
              textofinal = "EMPATE";
              empate.setVisible(true);
              empate.setText(textofinal);
            }
            console.log(ganhadorwindireito);
            console.log(ganhadorwinesquerdo);
          } else if (carta.conhecimento.valor < carta2.conhecimento.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(false);
            textven = carta2.name + " GANHOU";
            contadorwin = game.add.image(690, 520, "bolverde").setInteractive();
            contadordepartida1.setVisible(false);
            contadordepartida2.setVisible(false);
            newgame.setVisible(false);
            if (ganhadorwinesquerdo === 0) {
              ganhadorwinesquerdo = 1;
            } else if (ganhadorwinesquerdo === 1) {
              ganhadorwinesquerdo = 2;
            } else if (ganhadorwinesquerdo === 2) {
              ganhadorwinesquerdo = 3;
            } else if (ganhadorwinesquerdo === 3) {
              ganhadorwinesquerdo = 4;
            } else {
              ganhadorwinesquerdo = 5;
            }
            contadorloss = game.add.image(290, 520, "bolverme").setInteractive();
            contadorloss.setVisible(true);
            contadorwin.setVisible(true);
            if (ganhadorwindireito > ganhadorwinesquerdo) {
              textofinal = "PARABÉNS VC GANHOU!";
              textofinal2 = "VC PERDEU IDIOTA!";
              placartext.setVisible(true);
              placartext.setText(textofinal);
              placartext2.setVisible(true);
              placartext2.setText(textofinal2);
            } else if (ganhadorwindireito < ganhadorwinesquerdo) {
              textofinal = "VC PERDEU!";
              textofinal2 = "VC GANHOUUUU!";
              placartext.setVisible(true);
              placartext.setText(textofinal);
              placartext2.setVisible(true);
              placartext2.setText(textofinal2);
            } else {
              textofinal = "EMPATE";
              empate.setVisible(true);
              empate.setText(textofinal);
            }
            console.log(ganhadorwindireito);
            console.log(ganhadorwinesquerdo);
          } else {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(false);
            textven = "EMPATE";
            contadordepartida1.setVisible(true);
            contadordepartida2.setVisible(true);
            newgame.setVisible(false);
            if (ganhadorwindireito > ganhadorwinesquerdo) {
              textofinal = "PARABÉNS VC GANHOU!";
              textofinal2 = "VC PERDEU IDIOTA!";
              placartext.setVisible(true);
              placartext.setText(textofinal);
              placartext2.setVisible(true);
              placartext2.setText(textofinal2);
            } else if (ganhadorwindireito < ganhadorwinesquerdo) {
              textofinal = "VC PERDEU!";
              textofinal2 = "VC GANHOUUUU!";
              placartext.setVisible(true);
              placartext.setText(textofinal);
              placartext2.setVisible(true);
              placartext2.setText(textofinal2);
            } else {
              textofinal = "EMPATE";
              empate.setVisible(true);
              empate.setText(textofinal);
            }
          }
        });
  
        altura.on("pointerdown", function () {
          cartafundo.setVisible(true);
          habilidade.setVisible(false);
          simpatia.setVisible(false);
          conhecimento.setVisible(false);
          altura.setVisible(true);
          idade.setVisible(false);
          carta2fundo.setVisible(true);
          habilidade2.setVisible(false);
          simpatia2.setVisible(false);
          conhecimento2.setVisible(false);
          altura2.setVisible(true);
          idade2.setVisible(false);
          imagembloqueio.setVisible(false);
          if (carta.altura.valor > carta2.altura.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(false);
            textven = carta.name + " GANHOU";
            contadorwin = game.add.image(290, 520, "bolverde").setInteractive();
            if (ganhadorwindireito === 0) {
              ganhadorwindireito = 1;
            } else if (ganhadorwindireito === 1) {
              ganhadorwindireito = 2;
            } else if (ganhadorwindireito === 2) {
              ganhadorwindireito = 3;
            } else if (ganhadorwindireito === 3) {
              ganhadorwindireito = 4;
            } else {
              ganhadorwindireito = 5;
            }
            contadordepartida1.setVisible(false);
            contadordepartida2.setVisible(false);
            newgame.setVisible(false);
  
            contadorloss = game.add.image(690, 520, "bolverme").setInteractive();
            contadorloss.setVisible(true);
            contadorwin.setVisible(true);
            bolicinza.setVisible(false);
            if (ganhadorwindireito > ganhadorwinesquerdo) {
              textofinal = "PARABÉNS VC GANHOU!";
              textofinal2 = "VC PERDEU IDIOTA!";
              placartext.setVisible(true);
              placartext.setText(textofinal);
              placartext2.setVisible(true);
              placartext2.setText(textofinal2);
            } else if (ganhadorwindireito < ganhadorwinesquerdo) {
              textofinal = "VC PERDEU!";
              textofinal2 = "VC GANHOUUUU!";
              placartext.setVisible(true);
              placartext.setText(textofinal);
              placartext2.setVisible(true);
              placartext2.setText(textofinal2);
            } else {
              textofinal = "EMPATE";
              empate.setVisible(true);
              empate.setText(textofinal);
            }
          } else if (carta.altura.valor < carta2.altura.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(false);
            textven = carta2.name + " GANHOU";
            contadorwin = game.add.image(690, 520, "bolverde").setInteractive();
            ganhadorwinesquerdo = 5;
            contadordepartida1.setVisible(false);
            contadordepartida2.setVisible(false);
            newgame.setVisible(false);
            if (ganhadorwinesquerdo === 0) {
              ganhadorwinesquerdo = 1;
            } else if (ganhadorwinesquerdo === 1) {
              ganhadorwinesquerdo = 2;
            } else if (ganhadorwinesquerdo === 2) {
              ganhadorwinesquerdo = 3;
            } else if (ganhadorwinesquerdo === 3) {
              ganhadorwinesquerdo = 4;
            } else {
              ganhadorwinesquerdo = 5;
            }
            contadorloss = game.add.image(290, 520, "bolverme").setInteractive();
            contadorloss.setVisible(true);
            contadorwin.setVisible(true);
            if (ganhadorwindireito > ganhadorwinesquerdo) {
              textofinal = "PARABÉNS VC GANHOU!";
              textofinal2 = "VC PERDEU IDIOTA!";
              placartext.setVisible(true);
              placartext.setText(textofinal);
              placartext2.setVisible(true);
              placartext2.setText(textofinal2);
            } else if (ganhadorwindireito < ganhadorwinesquerdo) {
              textofinal = "VC PERDEU!";
              textofinal2 = "VC GANHOUUUU!";
              placartext.setVisible(true);
              placartext.setText(textofinal);
              placartext2.setVisible(true);
              placartext2.setText(textofinal2);
            } else {
              textofinal = "EMPATE";
              empate.setVisible(true);
              empate.setText(textofinal);
            }
          } else {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(false);
            textven = "EMPATE";
            contadordepartida1.setVisible(true);
            contadordepartida2.setVisible(true);
            newgame.setVisible(false);
            if (ganhadorwindireito > ganhadorwinesquerdo) {
              textofinal = "PARABÉNS VC GANHOU!";
              textofinal2 = "VC PERDEU IDIOTA!";
              placartext.setVisible(true);
              placartext.setText(textofinal);
              placartext2.setVisible(true);
              placartext2.setText(textofinal2);
            } else if (ganhadorwindireito < ganhadorwinesquerdo) {
              textofinal = "VC PERDEU!";
              textofinal2 = "VC GANHOUUUU!";
              placartext.setVisible(true);
              placartext.setText(textofinal);
              placartext2.setVisible(true);
              placartext2.setText(textofinal2);
            } else {
              textofinal = "EMPATE";
              empate.setVisible(true);
              empate.setText(textofinal);
            }
          }
        });
  
        idade.on("pointerdown", function () {
          cartafundo.setVisible(true);
          habilidade.setVisible(false);
          simpatia.setVisible(false);
          conhecimento.setVisible(false);
          altura.setVisible(false);
          idade.setVisible(true);
          carta2fundo.setVisible(true);
          habilidade2.setVisible(false);
          simpatia2.setVisible(false);
          conhecimento2.setVisible(false);
          altura2.setVisible(false);
          idade2.setVisible(true);
          imagembloqueio.setVisible(false);
          if (carta.idade.valor > carta2.idade.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(false);
            textven = carta.name + " GANHOU";
            contadorwin = game.add.image(290, 520, "bolverde").setInteractive();
            if (ganhadorwindireito === 0) {
              ganhadorwindireito = 1;
            } else if (ganhadorwindireito === 1) {
              ganhadorwindireito = 2;
            } else if (ganhadorwindireito === 2) {
              ganhadorwindireito = 3;
            } else if (ganhadorwindireito === 3) {
              ganhadorwindireito = 4;
            } else {
              ganhadorwindireito = 5;
            }
            contadordepartida1.setVisible(false);
            contadordepartida2.setVisible(false);
            newgame.setVisible(false);
            contadorloss = game.add.image(690, 520, "bolverme").setInteractive();
            contadorloss.setVisible(true);
            contadorwin.setVisible(true);
            bolicinza.setVisible(false);
            if (ganhadorwindireito > ganhadorwinesquerdo) {
              textofinal = "PARABÉNS VC GANHOU!";
              textofinal2 = "VC PERDEU IDIOTA!";
              placartext.setVisible(true);
              placartext.setText(textofinal);
              placartext2.setVisible(true);
              placartext2.setText(textofinal2);
            } else if (ganhadorwindireito < ganhadorwinesquerdo) {
              textofinal = "VC PERDEUU!";
              textofinal2 = "VC GANHOU!";
              placartext.setVisible(true);
              placartext.setText(textofinal);
              placartext2.setVisible(true);
              placartext2.setText(textofinal2);
            } else {
              textofinal = "EMPATE";
              empate.setVisible(true);
              empate.setText(textofinal);
            }
          } else if (carta.idade.valor < carta2.idade.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(false);
            textven = carta2.name + " GANHOU";
            contadorwin = game.add.image(690, 520, "bolverde").setInteractive();
            if (ganhadorwinesquerdo === 0) {
              ganhadorwinesquerdo = 1;
            } else if (ganhadorwinesquerdo === 1) {
              ganhadorwinesquerdo = 2;
            } else if (ganhadorwinesquerdo === 2) {
              ganhadorwinesquerdo = 3;
            } else if (ganhadorwinesquerdo === 3) {
              ganhadorwinesquerdo = 4;
            } else {
              ganhadorwinesquerdo = 5;
            }
            contadordepartida1.setVisible(false);
            contadordepartida2.setVisible(false);
            newgame.setVisible(false);
            contadorloss = game.add.image(290, 520, "bolverme").setInteractive();
            contadorloss.setVisible(true);
            contadorwin.setVisible(true);
            if (ganhadorwindireito > ganhadorwinesquerdo) {
              textofinal = "PARABÉNS VC GANHOU!";
              textofinal2 = "VC PERDEU IDIOTA!";
              placartext.setVisible(true);
              placartext.setText(textofinal);
              placartext2.setVisible(true);
              placartext2.setText(textofinal2);
            } else if (ganhadorwindireito < ganhadorwinesquerdo) {
              textofinal = "VC PERDEUU!";
              textofinal2 = "VC GANHOUU!";
              placartext.setVisible(true);
              placartext.setText(textofinal);
              placartext2.setVisible(true);
              placartext2.setText(textofinal2);
            } else {
              textofinal = "EMPATE";
              empate.setVisible(true);
              empate.setText(textofinal);
            }
            console.log(ganhadorwindireito);
            console.log(ganhadorwinesquerdo);
          } else {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(false);
            textven = "EMPATE";
            contadordepartida1.setVisible(true);
            contadordepartida2.setVisible(true);
            newgame.setVisible(false);
            if (ganhadorwindireito > ganhadorwinesquerdo) {
              textofinal = "PARABÉNS VC GANHOU!";
              textofinal2 = "VC PERDEU IDIOTA!";
              placartext.setVisible(true);
              placartext.setText(textofinal);
              placartext2.setVisible(true);
              placartext2.setText(textofinal2);
            } else if (ganhadorwindireito < ganhadorwinesquerdo) {
              textofinal = "VC PERDEUUU!";
              textofinal2 = "VC GANHOUUU!";
              placartext.setVisible(true);
              placartext.setText(textofinal);
              placartext2.setVisible(true);
              placartext2.setText(textofinal2);
            } else {
              textofinal = "EMPATE";
              empate.setVisible(true);
              empate.setText(textofinal);
            }
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
            cartafundo.setVisible(true);
            habilidade.setVisible(true);
            simpatia.setVisible(false);
            conhecimento.setVisible(false);
            altura.setVisible(false);
            idade.setVisible(false);
            imagembloqueio.setVisible(false);
            if (carta.habilidade.valor > carta2.habilidade.valor) {
              placarTexto1.setVisible(false);
              placarTexto2.setVisible(false);
              vencedor.setVisible(false);
              textven = carta.name + " GANHOU";
              contadorwin = game.add.image(290, 520, "bolverde").setInteractive();
              if (ganhadorwindireito === 0) {
                ganhadorwindireito = 1;
              } else if (ganhadorwindireito === 1) {
                ganhadorwindireito = 2;
              } else if (ganhadorwindireito === 2) {
                ganhadorwindireito = 3;
              } else if (ganhadorwindireito === 3) {
                ganhadorwindireito = 4;
              } else {
                ganhadorwindireito = 5;
              }
              contadordepartida1.setVisible(false);
              contadordepartida2.setVisible(false);
              newgame.setVisible(false);
  
              contadorloss = game.add
                .image(690, 520, "bolverme")
                .setInteractive();
              contadorloss.setVisible(true);
              contadorwin.setVisible(true);
              if (ganhadorwindireito > ganhadorwinesquerdo) {
                textofinal = "PARABÉNS VC GANHOU!";
                textofinal2 = "VC PERDEU IDIOTA!";
                placartext.setVisible(true);
                placartext.setText(textofinal);
                placartext2.setVisible(true);
                placartext2.setText(textofinal2);
              } else if (ganhadorwindireito < ganhadorwinesquerdo) {
                textofinal = "VC PERDEU!";
                textofinal2 = "VC GANHOUUUU!";
                placartext.setVisible(true);
                placartext.setText(textofinal);
                placartext2.setVisible(true);
                placartext2.setText(textofinal2);
              } else {
                textofinal = "EMPATE";
                empate.setVisible(true);
                empate.setText(textofinal);
              }
            } else if (carta.habilidade.valor < carta2.habilidade.valor) {
              placarTexto1.setVisible(false);
              placarTexto2.setVisible(false);
              vencedor.setVisible(false);
              textven = carta2.name + " GANHOU";
              contadorwin = game.add.image(690, 520, "bolverde").setInteractive();
              if (ganhadorwinesquerdo === 0) {
                ganhadorwinesquerdo = 1;
              } else if (ganhadorwinesquerdo === 1) {
                ganhadorwinesquerdo = 2;
              } else if (ganhadorwinesquerdo === 2) {
                ganhadorwinesquerdo = 3;
              } else if (ganhadorwinesquerdo === 3) {
                ganhadorwinesquerdo = 4;
              } else {
                ganhadorwinesquerdo = 5;
              }
              contadordepartida1.setVisible(false);
              contadordepartida2.setVisible(false);
              newgame.setVisible(false);
              contadorloss = game.add
                .image(290, 520, "bolverme")
                .setInteractive();
              contadorloss.setVisible(true);
              contadorwin.setVisible(true);
              if (ganhadorwindireito > ganhadorwinesquerdo) {
                textofinal = "PARABÉNS VC GANHOU!";
                textofinal2 = "VC PERDEU IDIOTA!";
                placartext.setVisible(true);
                placartext.setText(textofinal);
                placartext2.setVisible(true);
                placartext2.setText(textofinal2);
              } else if (ganhadorwindireito < ganhadorwinesquerdo) {
                textofinal = "VC PERDEU!";
                textofinal2 = "VC GANHOUUUU!";
                placartext.setVisible(true);
                placartext.setText(textofinal);
                placartext2.setVisible(true);
                placartext2.setText(textofinal2);
              } else {
                textofinal = "EMPATE";
                empate.setVisible(true);
                empate.setText(textofinal);
              }
            } else {
              placarTexto1.setVisible(false);
              placarTexto2.setVisible(false);
              vencedor.setVisible(false);
              textven = "EMPATE";
              contadordepartida1.setVisible(false);
              contadordepartida2.setVisible(false);
              newgame.setVisible(false);
              if (ganhadorwindireito > ganhadorwinesquerdo) {
                textofinal = "PARABÉNS VC GANHOU!";
                textofinal2 = "VC PERDEU IDIOTA!";
                placartext.setVisible(true);
                placartext.setText(textofinal);
                placartext2.setVisible(true);
                placartext2.setText(textofinal2);
              } else if (ganhadorwindireito < ganhadorwinesquerdo) {
                textofinal = "VC PERDEU!";
                textofinal2 = "VC GANHOUUUU!";
                placartext.setVisible(true);
                placartext.setText(textofinal);
                placartext2.setVisible(true);
                placartext2.setText(textofinal2);
              } else {
                textofinal = "EMPATE";
                empate.setVisible(true);
                empate.setText(textofinal);
              }
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
          cartafundo.setVisible(true);
          habilidade.setVisible(false);
          simpatia.setVisible(true);
          conhecimento.setVisible(false);
          altura.setVisible(false);
          idade.setVisible(false);
          if (carta.simpatia.valor > carta2.simpatia.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(false);
            textven = carta.name + " GANHOU";
            contadorwin = game.add.image(290, 520, "bolverde").setInteractive();
            if (ganhadorwindireito === 0) {
              ganhadorwindireito = 1;
            } else if (ganhadorwindireito === 1) {
              ganhadorwindireito = 2;
            } else if (ganhadorwindireito === 2) {
              ganhadorwindireito = 3;
            } else if (ganhadorwindireito === 3) {
              ganhadorwindireito = 4;
            } else {
              ganhadorwindireito = 5;
            }
            contadordepartida1.setVisible(false);
            contadordepartida2.setVisible(false);
            newgame.setVisible(false);
  
            contadorloss = game.add.image(690, 520, "bolverme").setInteractive();
            contadorloss.setVisible(true);
            contadorwin.setVisible(true);
            if (ganhadorwindireito > ganhadorwinesquerdo) {
              textofinal = "PARABÉNS VC GANHOU!";
              textofinal2 = "VC PERDEU IDIOTA!";
              placartext.setVisible(true);
              placartext.setText(textofinal);
              placartext2.setVisible(true);
              placartext2.setText(textofinal2);
            } else if (ganhadorwindireito < ganhadorwinesquerdo) {
              textofinal = "VC PERDEUU!";
              textofinal2 = "VC GANHOU";
              placartext.setVisible(true);
              placartext.setText(textofinal);
              placartext2.setVisible(true);
              placartext2.setText(textofinal2);
            } else {
              textofinal = "EMPATE";
              empate.setVisible(true);
              empate.setText(textofinal);
            }
          } else if (carta.simpatia.valor < carta2.simpatia.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(false);
            textven = carta2.name + " GANHOU";
            contadorwin = game.add.image(690, 520, "bolverde").setInteractive();
            if (ganhadorwinesquerdo === 0) {
              ganhadorwinesquerdo = 1;
            } else if (ganhadorwinesquerdo === 1) {
              ganhadorwinesquerdo = 2;
            } else if (ganhadorwinesquerdo === 2) {
              ganhadorwinesquerdo = 3;
            } else if (ganhadorwinesquerdo === 3) {
              ganhadorwinesquerdo = 4;
            } else {
              ganhadorwinesquerdo = 5;
            }
            contadordepartida1.setVisible(false);
            contadordepartida2.setVisible(false);
            newgame.setVisible(false);
            contadorloss = game.add.image(290, 520, "bolverme").setInteractive();
            contadorloss.setVisible(true);
            contadorwin.setVisible(true);
            if (ganhadorwindireito > ganhadorwinesquerdo) {
              textofinal = "PARABÉNS VC GANHOU!";
              textofinal2 = "VC PERDEU IDIOTA!";
              placartext.setVisible(true);
              placartext.setText(textofinal);
              placartext2.setVisible(true);
              placartext2.setText(textofinal2);
            } else if (ganhadorwindireito < ganhadorwinesquerdo) {
              textofinal = "VC PERDEU!";
              textofinal2 = "VC GANHOUUUU!";
              placartext.setVisible(true);
              placartext.setText(textofinal);
              placartext2.setVisible(true);
              placartext2.setText(textofinal2);
            } else {
              textofinal = "EMPATE";
              empate.setVisible(true);
              empate.setText(textofinal);
            }
          } else {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(false);
            textven = "EMPATE";
            contadordepartida1.setVisible(true);
            contadordepartida2.setVisible(true);
            newgame.setVisible(false);
            if (ganhadorwindireito > ganhadorwinesquerdo) {
              textofinal = "PARABÉNS VC GANHOU!";
              textofinal2 = "VC PERDEU IDIOTA!";
              placartext.setVisible(true);
              placartext.setText(textofinal);
              placartext2.setVisible(true);
              placartext2.setText(textofinal2);
            } else if (ganhadorwindireito < ganhadorwinesquerdo) {
              textofinal = "VC PERDEU!";
              textofinal2 = "VC GANHOUUUU!";
              placartext.setVisible(true);
              placartext.setText(textofinal);
              placartext2.setVisible(true);
              placartext2.setText(textofinal2);
            } else {
              textofinal = "EMPATE";
              empate.setVisible(true);
              empate.setText(textofinal);
            }
          }
        });
  
        conhecimento2.on("pointerdown", function () {
          carta2fundo.setVisible(true);
          habilidade2.setVisible(false);
          simpatia2.setVisible(false);
          conhecimento2.setVisible(true);
          altura2.setVisible(false);
          idade2.setVisible(false);
          cartafundo.setVisible(true);
          habilidade.setVisible(false);
          simpatia.setVisible(false);
          conhecimento.setVisible(true);
          altura.setVisible(false);
          idade.setVisible(false);
          imagembloqueio.setVisible(false);
          if (carta.conhecimento.valor > carta2.conhecimento.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(false);
            textven = carta.name + " GANHOU";
            contadorwin = game.add.image(290, 520, "bolverde").setInteractive();
            if (ganhadorwindireito === 0) {
              ganhadorwindireito = 1;
            } else if (ganhadorwindireito === 1) {
              ganhadorwindireito = 2;
            } else if (ganhadorwindireito === 2) {
              ganhadorwindireito = 3;
            } else if (ganhadorwindireito === 3) {
              ganhadorwindireito = 4;
            } else {
              ganhadorwindireito = 5;
            }
            contadordepartida1.setVisible(false);
            contadordepartida2.setVisible(false);
            newgame.setVisible(false);
  
            contadorloss = game.add.image(690, 520, "bolverme").setInteractive();
            contadorloss.setVisible(true);
            contadorwin.setVisible(true);
            if (ganhadorwindireito > ganhadorwinesquerdo) {
              textofinal = "PARABÉNS VC GANHOU!";
              textofinal2 = "VC PERDEU IDIOTA!";
              placartext.setVisible(true);
              placartext.setText(textofinal);
              placartext2.setVisible(true);
              placartext2.setText(textofinal2);
            } else if (ganhadorwindireito < ganhadorwinesquerdo) {
              textofinal = "VC PERDEU!";
              textofinal2 = "VC GANHOUUUU!";
              placartext.setVisible(true);
              placartext.setText(textofinal);
              placartext2.setVisible(true);
              placartext2.setText(textofinal2);
            } else {
              textofinal = "EMPATE";
              empate.setVisible(true);
              empate.setText(textofinal);
            }
            console.log(ganhadorwindireito);
            console.log(ganhadorwinesquerdo);
          } else if (carta.conhecimento.valor < carta2.conhecimento.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(false);
            textven = carta2.name + " GANHOU";
            contadorwin = game.add.image(690, 520, "bolverde").setInteractive();
            if (ganhadorwinesquerdo === 0) {
              ganhadorwinesquerdo = 1;
            } else if (ganhadorwinesquerdo === 1) {
              ganhadorwinesquerdo = 2;
            } else if (ganhadorwinesquerdo === 2) {
              ganhadorwinesquerdo = 3;
            } else if (ganhadorwinesquerdo === 3) {
              ganhadorwinesquerdo = 4;
            } else {
              ganhadorwinesquerdo = 5;
            }
            contadordepartida1.setVisible(false);
            contadordepartida2.setVisible(false);
            newgame.setVisible(false);
            contadorloss = game.add.image(290, 520, "bolverme").setInteractive();
            contadorloss.setVisible(true);
            contadorwin.setVisible(true);
            if (ganhadorwindireito > ganhadorwinesquerdo) {
              textofinal = "PARABÉNS VC GANHOU!";
              textofinal2 = "VC PERDEU IDIOTA!";
              placartext.setVisible(true);
              placartext.setText(textofinal);
              placartext2.setVisible(true);
              placartext2.setText(textofinal2);
            } else if (ganhadorwindireito < ganhadorwinesquerdo) {
              textofinal = "VC PERDEU!";
              textofinal2 = "VC GANHOUUUU!";
              placartext.setVisible(true);
              placartext.setText(textofinal);
              placartext2.setVisible(true);
              placartext2.setText(textofinal2);
            } else {
              textofinal = "EMPATE";
              empate.setVisible(true);
              empate.setText(textofinal);
            }
            console.log(ganhadorwindireito);
            console.log(ganhadorwinesquerdo);
          } else {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(false);
            textven = "EMPATE";
            contadordepartida1.setVisible(true);
            contadordepartida2.setVisible(true);
            newgame.setVisible(false);
            if (ganhadorwindireito > ganhadorwinesquerdo) {
              textofinal = "PARABÉNS VC GANHOU!";
              textofinal2 = "VC PERDEU IDIOTA!";
              placartext.setVisible(true);
              placartext.setText(textofinal);
              placartext2.setVisible(true);
              placartext2.setText(textofinal2);
            } else if (ganhadorwindireito < ganhadorwinesquerdo) {
              textofinal = "VC PERDEU!";
              textofinal2 = "VC GANHOUUUU!";
              placartext.setVisible(true);
              placartext.setText(textofinal);
              placartext2.setVisible(true);
              placartext2.setText(textofinal2);
            } else {
              textofinal = "EMPATE";
              empate.setVisible(true);
              empate.setText(textofinal);
            }
          }
        });
  
        altura2.on("pointerdown", function () {
          carta2fundo.setVisible(true);
          habilidade2.setVisible(false);
          simpatia2.setVisible(false);
          conhecimento2.setVisible(false);
          altura2.setVisible(true);
          idade2.setVisible(false);
          cartafundo.setVisible(true);
          habilidade.setVisible(false);
          simpatia.setVisible(false);
          conhecimento.setVisible(false);
          altura.setVisible(true);
          idade.setVisible(false);
          imagembloqueio.setVisible(false);
          if (carta.altura.valor > carta2.altura.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(false);
            textven = carta.name + " GANHOU";
            contadorwin = game.add.image(290, 520, "bolverde").setInteractive();
            if (ganhadorwindireito === 0) {
              ganhadorwindireito = 1;
            } else if (ganhadorwindireito === 1) {
              ganhadorwindireito = 2;
            } else if (ganhadorwindireito === 2) {
              ganhadorwindireito = 3;
            } else if (ganhadorwindireito === 3) {
              ganhadorwindireito = 4;
            } else {
              ganhadorwindireito = 5;
            }
            contadordepartida1.setVisible(false);
            contadordepartida2.setVisible(false);
            newgame.setVisible(false);
  
            contadorloss = game.add.image(690, 520, "bolverme").setInteractive();
            contadorloss.setVisible(true);
            contadorwin.setVisible(true);
            if (ganhadorwindireito > ganhadorwinesquerdo) {
              textofinal = "PARABÉNS VC GANHOU!";
              textofinal2 = "VC PERDEU IDIOTA!";
              placartext.setVisible(true);
              placartext.setText(textofinal);
              placartext2.setVisible(true);
              placartext2.setText(textofinal2);
            } else if (ganhadorwindireito < ganhadorwinesquerdo) {
              textofinal = "VC PERDEU!";
              textofinal2 = "VC GANHOUUUU!";
              placartext.setVisible(true);
              placartext.setText(textofinal);
              placartext2.setVisible(true);
              placartext2.setText(textofinal2);
            } else {
              textofinal = "EMPATE";
              empate.setVisible(true);
              empate.setText(textofinal);
            }
          } else if (carta.altura.valor < carta2.altura.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(false);
            textven = carta2.name + " GANHOU";
            contadorwin = game.add.image(690, 520, "bolverde").setInteractive();
            if (ganhadorwinesquerdo === 0) {
              ganhadorwinesquerdo = 1;
            } else if (ganhadorwinesquerdo === 1) {
              ganhadorwinesquerdo = 2;
            } else if (ganhadorwinesquerdo === 2) {
              ganhadorwinesquerdo = 3;
            } else if (ganhadorwinesquerdo === 3) {
              ganhadorwinesquerdo = 4;
            } else {
              ganhadorwinesquerdo = 5;
            }
            contadordepartida1.setVisible(false);
            contadordepartida2.setVisible(false);
            newgame.setVisible(false);
            contadorloss = game.add.image(290, 520, "bolverme").setInteractive();
            contadorloss.setVisible(true);
            contadorwin.setVisible(true);
            if (ganhadorwindireito > ganhadorwinesquerdo) {
              textofinal = "PARABÉNS VC GANHOU!";
              textofinal2 = "VC PERDEU IDIOTA!";
              placartext.setVisible(true);
              placartext.setText(textofinal);
              placartext2.setVisible(true);
              placartext2.setText(textofinal2);
            } else if (ganhadorwindireito < ganhadorwinesquerdo) {
              textofinal = "VC PERDEU!";
              textofinal2 = "VC GANHOUUUU!";
              placartext.setVisible(true);
              placartext.setText(textofinal);
              placartext2.setVisible(true);
              placartext2.setText(textofinal2);
            } else {
              textofinal = "EMPATE";
              empate.setVisible(true);
              empate.setText(textofinal);
            }
          } else {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(false);
            textven = "EMPATE";
            contadordepartida1.setVisible(true);
            contadordepartida2.setVisible(true);
            newgame.setVisible(false);
            if (ganhadorwindireito > ganhadorwinesquerdo) {
              textofinal = "PARABÉNS VC GANHOU!";
              textofinal2 = "VC PERDEU IDIOTA!";
              placartext.setVisible(true);
              placartext.setText(textofinal);
              placartext2.setVisible(true);
              placartext2.setText(textofinal2);
            } else if (ganhadorwindireito < ganhadorwinesquerdo) {
              textofinal = "VC PERDEU!";
              textofinal2 = "VC GANHOUUUU!";
              placartext.setVisible(true);
              placartext.setText(textofinal);
              placartext2.setVisible(true);
              placartext2.setText(textofinal2);
            } else {
              textofinal = "EMPATE";
              empate.setVisible(true);
              empate.setText(textofinal);
            }
          }
        });
  
        idade2.on("pointerdown", function () {
          carta2fundo.setVisible(true);
          habilidade2.setVisible(false);
          simpatia2.setVisible(false);
          conhecimento2.setVisible(false);
          altura2.setVisible(false);
          idade2.setVisible(true);
          cartafundo.setVisible(true);
          habilidade.setVisible(false);
          simpatia.setVisible(false);
          conhecimento.setVisible(false);
          altura.setVisible(false);
          idade.setVisible(true);
          imagembloqueio.setVisible(false);
          if (carta.idade.valor > carta2.idade.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(false);
            textven = carta.name + " GANHOU";
            contadorwin = game.add.image(290, 520, "bolverde").setInteractive();
            if (ganhadorwindireito === 0) {
              ganhadorwindireito = 1;
            } else if (ganhadorwindireito === 1) {
              ganhadorwindireito = 2;
            } else if (ganhadorwindireito === 2) {
              ganhadorwindireito = 3;
            } else if (ganhadorwindireito === 3) {
              ganhadorwindireito = 4;
            } else {
              ganhadorwindireito = 5;
            }
            contadordepartida1.setVisible(false);
            contadordepartida2.setVisible(false);
            newgame.setVisible(false);
            contadorloss = game.add.image(690, 520, "bolverme").setInteractive();
            contadorloss.setVisible(true);
            contadorwin.setVisible(true);
            if (ganhadorwindireito > ganhadorwinesquerdo) {
              textofinal = "PARABÉNS VC GANHOU!";
              textofinal2 = "VC PERDEU IDIOTA!";
              placartext.setVisible(true);
              placartext.setText(textofinal);
              placartext2.setVisible(true);
              placartext2.setText(textofinal2);
            } else if (ganhadorwindireito < ganhadorwinesquerdo) {
              textofinal = "VC PERDEUUUU!";
              textofinal2 = "VC GANHOUUU!";
              placartext.setVisible(true);
              placartext.setText(textofinal);
              placartext2.setVisible(true);
              placartext2.setText(textofinal2);
            } else {
              textofinal = "EMPATE";
              empate.setVisible(true);
              empate.setText(textofinal);
            }
          } else if (carta.idade.valor < carta2.idade.valor) {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(false);
            textven = carta2.name + " GANHOU";
            contadorwin = game.add.image(690, 520, "bolverde").setInteractive();
            if (ganhadorwinesquerdo === 0) {
              ganhadorwinesquerdo = 1;
            } else if (ganhadorwinesquerdo === 1) {
              ganhadorwinesquerdo = 2;
            } else if (ganhadorwinesquerdo === 2) {
              ganhadorwinesquerdo = 3;
            } else if (ganhadorwinesquerdo === 3) {
              ganhadorwinesquerdo = 4;
            } else {
              ganhadorwinesquerdo = 5;
            }
            contadordepartida1.setVisible(false);
            contadordepartida2.setVisible(false);
            newgame.setVisible(false);
            contadorloss = game.add.image(290, 520, "bolverme").setInteractive();
            contadorloss.setVisible(true);
            contadorwin.setVisible(true);
            if (ganhadorwindireito > ganhadorwinesquerdo) {
              textofinal = "PARABÉNS VC GANHOU!";
              textofinal2 = "VC PERDEU IDIOTA!";
              placartext.setVisible(true);
              placartext.setText(textofinal);
              placartext2.setVisible(true);
              placartext2.setText(textofinal2);
            } else if (ganhadorwindireito < ganhadorwinesquerdo) {
              textofinal = "VC PERDEU!";
              textofinal2 = "VC GANHOU!";
              placartext.setVisible(true);
              placartext.setText(textofinal);
              placartext2.setVisible(true);
              placartext2.setText(textofinal2);
            } else {
              textofinal = "EMPATE";
              empate.setVisible(true);
              empate.setText(textofinal);
            }
            console.log(ganhadorwindireito);
            console.log(ganhadorwinesquerdo);
          } else {
            placarTexto1.setVisible(false);
            placarTexto2.setVisible(false);
            vencedor.setVisible(false);
            textven = "EMPATE";
            contadordepartida1.setVisible(true);
            contadordepartida2.setVisible(true);
            newgame.setVisible(false);
            if (ganhadorwindireito > ganhadorwinesquerdo) {
              textofinal = "PARABÉNS VC GANHOU!";
              textofinal2 = "VC PERDEU IDIOTA!";
              placartext.setVisible(true);
              placartext.setText(textofinal);
              placartext2.setVisible(true);
              placartext2.setText(textofinal2);
            } else if (ganhadorwindireito < ganhadorwinesquerdo) {
              textofinal = "VC PERDEUUU!";
              textofinal2 = "VC GANHOUUU!";
              placartext.setVisible(true);
              placartext.setText(textofinal);
              placartext2.setVisible(true);
              placartext2.setText(textofinal2);
            } else {
              textofinal = "EMPATE";
              empate.setVisible(true);
              empate.setText(textofinal);
            }
          }
        });
        */
cena1.update = function () {};

export { cena1 };
