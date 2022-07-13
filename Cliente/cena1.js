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
      valor: "77",
      imagem: "assets/habilidademaiara.png",
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
      valor: "20",
      imagem: "assets/idadedelfino.png",
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
    name: "BOI",
    fundo: "assets/cartafundoboi.png",
    habilidade: {
      valor: "87",
      imagem: "assets/habilidadeboi.png", // cartas[0].habilidade.imagem
    },
    conhecimento: {
      valor: "98",
      imagem: "assets/conhecimentoboi.png",
    },
    simpatia: {
      valor: "70",
      imagem: "assets/simpatiaboi.png",
    },
    altura: {
      valor: "175",
      imagem: "assets/alturaboi.png",
    },
    idade: {
      valor: "40",
      imagem: "assets/idadeboi.png",
    },
  },
];
// Placar
var placar;
var placarTexto;
var imagembloqueio;
var vencedor;
var textven;
var contadordepartida;
var newgame;
var carta;
var contagem = 0;
var ganhador1 = 0;
var ganhador2 = 0;
var contadorloss;
var textofinal;
var textofinal;
var placartext;
var empate;
var socket;
var jogador;
var imagembloqueio;
var carta_escolhida;
var contage;
var contadordepartida2;
var cartafundo
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

  socket.on("carta-escolhida", (carta) => {
    carta_escolhida = carta.name;
  });

  newgame.on("pointerdown", function () {
    // Descobrir a primeira carta
    carta = cartas[Math.floor(Math.random() * 6)];
    if (carta_escolhida) {
      // oponente já escolheu
      while (carta_escolhida === carta.name) {
        carta = cartas[Math.floor(Math.random() * 6)];
      }
    } else {
      socket.emit("carta-escolhida", carta);
    }

    console.log(carta);

    newgame.setVisible(false);
    contagem = contagem + 1;
    console.log(contagem);

    if (contagem === 1) {
      cartafundo = game.add.image(400, 301, carta.fundo).setInteractive();
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
      if (jogador === 2) {
        imagembloqueio = game.add
          .image(400, 301, "fundograde")
          .setInteractive();
      }

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
        //imagembloqueio.setVisible(false);
        newgame.setVisible(false);
      });

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
        //imagembloqueio.setVisible(false);
        newgame.setVisible(false);
      });

      altura.on("pointerdown", function () {
        socket.emit("escolha", {
          item: "altura",
          valor: carta.altura.valor,
          cartanome: carta.name,
        });
        cartafundo.setVisible(true);
        habilidade.setVisible(false);
        simpatia.setVisible(false);
        conhecimento.setVisible(false);
        altura.setVisible(true);
        idade.setVisible(false);
        //imagembloqueio.setVisible(false);
        newgame.setVisible(false);
      });

      idade.on("pointerdown", function () {
        socket.emit("escolha", {
          item: "idade",
          valor: carta.idade.valor,
          cartanome: carta.name,
        });
        cartafundo.setVisible(true);
        habilidade.setVisible(false);
        simpatia.setVisible(false);
        conhecimento.setVisible(false);
        altura.setVisible(false);
        idade.setVisible(true);
        //imagembloqueio.setVisible(false);
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
          //imagembloqueio.setVisible(false);
          if (escolha.valor > carta.habilidade.valor) {
            placarTexto.setVisible(false);
            vencedor.setVisible(true);
            textven = carta.name + " PERDEU";
            vencedor.setText(textven);
            ganhador1 = "player1";
            contadordepartida.setVisible(false);
            newgame.setVisible(true);
            contadorloss = game.add
              .image(320, 520, "bolverme")
              .setInteractive();
            contadorloss.setVisible(true);
            imagembloqueio.setVisible(false);
            socket.emit("decisao", {
              item: "habilidade",
              valor: "primeiro",
              carta: carta.nome,
              ganhador: "player1",
            });
          } else if (escolha.valor < carta.habilidade.valor) {
            placarTexto.setVisible(false);
            vencedor.setVisible(true);
            textven = carta.name + " GANHOU";
            vencedor.setText(textven);
            ganhador2 = "player2";
            contadordepartida = game.add
              .image(320, 520, "bolverde")
              .setInteractive();
            contadordepartida.setVisible(true);
            newgame.setVisible(true);
            imagembloqueio.setVisible(false);
            socket.emit("decisao", {
              item: "habilidade",
              valor: "segundo",
              carta: carta.nome,
              ganhador: "player2",
            });
          } else {
            placarTexto.setVisible(false);
            vencedor.setVisible(true);
            textven = "EMPATE";
            vencedor.setText(textven);
            contadordepartida.setVisible(true);
            newgame.setVisible(true);
            imagembloqueio.setVisible(false);
            socket.emit("decisao", {
              item: "habilidade",
              valor: "empate",
              carta: carta.nome,
              ganhador: "nenhum",
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
          imagembloqueio.setVisible(false);
          if (escolha.valor > carta.simpatia.valor) {
            placarTexto.setVisible(false);
            vencedor.setVisible(true);
            textven = carta.name + " PERDEU";
            vencedor.setText(textven);
            ganhador1 = "player1";
            contadordepartida.setVisible(false);
            newgame.setVisible(true);
            contadorloss = game.add
              .image(320, 520, "bolverme")
              .setInteractive();
            contadorloss.setVisible(true);
            imagembloqueio.setVisible(false);
            socket.emit("decisao", {
              item: "simpatia",
              valor: "primeiro",
              carta: carta.nome,
              ganhador: "player1",
            });
          } else if (escolha.valor < carta.simpatia.valor) {
            placarTexto.setVisible(false);
            vencedor.setVisible(true);
            textven = carta.name + " GANHOU";
            vencedor.setText(textven);
            ganhador2 = "player2";
            contadordepartida = game.add
              .image(320, 520, "bolverde")
              .setInteractive();
            contadordepartida.setVisible(true);
            newgame.setVisible(true);
            imagembloqueio.setVisible(false);
            socket.emit("decisao", {
              item: "simpatia",
              valor: "segundo",
              carta: carta.nome,
              ganhador: "player2",
            });
          } else {
            placarTexto.setVisible(false);
            vencedor.setVisible(true);
            textven = "EMPATE";
            vencedor.setText(textven);
            contadordepartida.setVisible(true);
            newgame.setVisible(true);
            imagembloqueio.setVisible(false);
            socket.emit("decisao", {
              item: "simpatia",
              valor: "empate",
              carta: carta.nome,
              ganhador: "nenhum",
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
          imagembloqueio.setVisible(false);
          if (escolha.valor > carta.conhecimento.valor) {
            placarTexto.setVisible(false);
            vencedor.setVisible(true);
            textven = carta.name + " PERDEU";
            vencedor.setText(textven);
            ganhador1 = "player1";
            contadordepartida.setVisible(false);
            newgame.setVisible(true);
            contadorloss = game.add
              .image(320, 520, "bolverme")
              .setInteractive();
            contadorloss.setVisible(true);
            imagembloqueio.setVisible(false);
            socket.emit("decisao", {
              item: "conhecimento",
              valor: "primeiro",
              carta: carta.nome,
              ganhador: "player1",
            });
          } else if (escolha.valor < carta.conhecimento.valor) {
            placarTexto.setVisible(false);
            vencedor.setVisible(true);
            textven = carta.name + " GANHOU";
            vencedor.setText(textven);
            ganhador2 = "player2";
            contadordepartida = game.add
              .image(320, 520, "bolverde")
              .setInteractive();
            contadordepartida.setVisible(true);
            newgame.setVisible(true);
            imagembloqueio.setVisible(false);
            socket.emit("decisao", {
              item: "conhecimento",
              valor: "segundo",
              carta: carta.nome,
              ganhador: "player2",
            });
          } else {
            placarTexto.setVisible(false);
            vencedor.setVisible(true);
            textven = "EMPATE";
            vencedor.setText(textven);
            contadordepartida.setVisible(true);
            newgame.setVisible(true);
            imagembloqueio.setVisible(false);
            socket.emit("decisao", {
              item: "conhecimento",
              valor: "empate",
              carta: carta.nome,
              ganhador: "nenhum",
            });
          }
          console.log(carta);
        } else if (escolha.item === "altura") {
          cartafundo.setVisible(true);
          habilidade.setVisible(false);
          simpatia.setVisible(false);
          conhecimento.setVisible(false);
          altura.setVisible(true);
          idade.setVisible(false);
          imagembloqueio.setVisible(false);
          newgame.setVisible(false);
          if (escolha.valor > carta.altura.valor) {
            placarTexto.setVisible(false);
            vencedor.setVisible(true);
            textven = carta.name + " PERDEU";
            vencedor.setText(textven);
            ganhador1 = "player1";
            contadordepartida.setVisible(false);
            newgame.setVisible(true);
            imagembloqueio.setVisible(false);
            contadorloss = game.add
              .image(320, 520, "bolverme")
              .setInteractive();
            contadorloss.setVisible(true);
            socket.emit("decisao", {
              item: "altura",
              valor: "primeiro",
              carta: carta.nome,
              ganhador: "player1",
            });
          } else if (escolha.valor < carta.altura.valor) {
            placarTexto.setVisible(false);
            vencedor.setVisible(true);
            textven = carta.name + " GANHOU";
            vencedor.setText(textven);
            ganhador2 = "player2";
            contadordepartida = game.add
              .image(320, 520, "bolverde")
              .setInteractive();
            contadordepartida.setVisible(true);
            newgame.setVisible(true);
            imagembloqueio.setVisible(false);
            socket.emit("decisao", {
              item: "altura",
              valor: "segundo",
              carta: carta.nome,
              ganhador: "player2",
            });
          } else {
            placarTexto.setVisible(false);
            vencedor.setVisible(true);
            textven = "EMPATE";
            vencedor.setText(textven);
            contadordepartida.setVisible(true);
            newgame.setVisible(true);
            imagembloqueio.setVisible(false);
            socket.emit("decisao", {
              item: "altura",
              valor: "empate",
              carta: carta.nome,
              ganhador: "nenhum",
            });
          }
          console.log(carta);
        } else if (escolha.item === "idade") {
          cartafundo.setVisible(true);
          habilidade.setVisible(false);
          simpatia.setVisible(false);
          conhecimento.setVisible(false);
          altura.setVisible(false);
          idade.setVisible(true);
          imagembloqueio.setVisible(false);
          newgame.setVisible(false);
          if (escolha.valor > carta.idade.valor) {
            placarTexto.setVisible(false);
            vencedor.setVisible(true);
            textven = carta.name + " PERDEU";
            vencedor.setText(textven);
            ganhador1 = "player1";
            contadordepartida.setVisible(false);
            newgame.setVisible(true);
            contadorloss = game.add
              .image(320, 520, "bolverme")
              .setInteractive();
            contadorloss.setVisible(true);
            imagembloqueio.setVisible(false);
            socket.emit("decisao", {
              item: "idade",
              valor: "primeiro",
              carta: carta.nome,
              ganhador: "player1",
            });
          } else if (escolha.valor < carta.idade.valor) {
            placarTexto.setVisible(false);
            vencedor.setVisible(true);
            textven = carta.name + " GANHOU";
            vencedor.setText(textven);
            ganhador2 = "player2";
            contadordepartida = game.add
              .image(320, 520, "bolverde")
              .setInteractive();
            contadordepartida.setVisible(true);
            newgame.setVisible(true);
            imagembloqueio.setVisible(false);
            socket.emit("decisao", {
              item: "idade",
              valor: "segundo",
              carta: carta.nome,
              ganhador: "player2",
            });
          } else {
            placarTexto.setVisible(false);
            vencedor.setVisible(true);
            textven = "EMPATE";
            vencedor.setText(textven);
            contadordepartida.setVisible(true);
            newgame.setVisible(true);
            imagembloqueio.setVisible(false);
            socket.emit("decisao", {
              item: "idade",
              valor: "empate",
              carta: carta.nome,
              ganhador: "nenhum",
            });
          }
          console.log(carta);
        }
      });

      socket.on("decisao", (decisao) => {
        if (jogador === 1) {
          if (decisao.item === "habilidade") {
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
              if (decisao.ganhador === "player1") {
                contadordepartida = game.add
                  .image(320, 520, "bolverde")
                  .setInteractive();
                contadordepartida.setVisible(true);
              }
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

              contadordepartida.setVisible(true);
              newgame.setVisible(true);
              if (decisao.ganhador === "player2") {
                contadorloss = game.add
                  .image(320, 520, "bolverme")
                  .setInteractive();
                contadorloss.setVisible(true);
              } else {
              }
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
              newgame.setVisible(true);
              if (decisao.ganhador === "nenhum") {
                contadordepartida.setVisible(true);
              }
            }
          } else if (decisao.item === "simpatia") {
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
              newgame.setVisible(true);
              if (decisao.ganhador === "player1") {
                contadordepartida = game.add
                  .image(320, 520, "bolverde")
                  .setInteractive();
                contadordepartida.setVisible(true);
                //imagembloqueio.setVisible(false);
              }
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
              contadordepartida.setVisible(false);
              newgame.setVisible(true);
              if (decisao.ganhador === "player2") {
                contadorloss = game.add
                  .image(320, 520, "bolverme")
                  .setInteractive();
                contadorloss.setVisible(true);
              }
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
              newgame.setVisible(true);
              if (decisao.ganhador === "nenhum") {
                contadordepartida.setVisible(true);

                imagembloqueio.setVisible(false);
              }
            }
          } else if (decisao.item === "conhecimento") {
            if (decisao.valor === "primeiro") {
              cartafundo.setVisible(true);
              habilidade.setVisible(false);
              simpatia.setVisible(false);
              conhecimento.setVisible(true);
              altura.setVisible(false);
              idade.setVisible(false);
              placarTexto.setVisible(false);
              vencedor.setVisible(true);
              textven = carta.name + " GANHOU";
              vencedor.setText(textven);
              newgame.setVisible(true);
              if (decisao.ganhador === "player1") {
                contadordepartida = game.add
                  .image(320, 520, "bolverde")
                  .setInteractive();
                contadordepartida.setVisible(true);
                // imagembloqueio.setVisible(false);

                //imagembloqueio.setVisible(false);
              }
            } else if (decisao.valor === "segundo") {
              cartafundo.setVisible(true);
              habilidade.setVisible(false);
              simpatia.setVisible(false);
              conhecimento.setVisible(true);
              altura.setVisible(false);
              idade.setVisible(false);
              placarTexto.setVisible(false);
              vencedor.setVisible(true);
              textven = carta.name + " PERDEU";
              vencedor.setText(textven);
              contadordepartida.setVisible(false);
              newgame.setVisible(true);
              if (decisao.ganhador === "player2") {
                contadorloss = game.add
                  .image(320, 520, "bolverme")
                  .setInteractive();
                contadorloss.setVisible(true);
                //imagembloqueio.setVisible(false);
              }
            } else {
              cartafundo.setVisible(true);
              habilidade.setVisible(false);
              simpatia.setVisible(false);
              conhecimento.setVisible(true);
              altura.setVisible(false);
              idade.setVisible(false);
              placarTexto.setVisible(false);
              vencedor.setVisible(true);
              textven = "EMPATE";
              vencedor.setText(textven);
              newgame.setVisible(true);
              if (decisao.ganhador === "nenhum") {
                contadordepartida.setVisible(true);

                imagembloqueio.setVisible(false);
              }
            }
          } else if (decisao.item === "altura") {
            if (decisao.valor === "primeiro") {
              cartafundo.setVisible(true);
              habilidade.setVisible(false);
              simpatia.setVisible(false);
              conhecimento.setVisible(false);
              altura.setVisible(true);
              idade.setVisible(false);
              placarTexto.setVisible(false);
              vencedor.setVisible(true);
              textven = carta.name + " GANHOU";
              vencedor.setText(textven);
              newgame.setVisible(true);
              if (decisao.ganhador === "player1") {
                contadordepartida = game.add
                  .image(320, 520, "bolverde")
                  .setInteractive();
                contadordepartida.setVisible(true);
                // imagembloqueio.setVisible(false);

                //imagembloqueio.setVisible(false);
              }
            } else if (decisao.valor === "segundo") {
              cartafundo.setVisible(true);
              habilidade.setVisible(false);
              simpatia.setVisible(false);
              conhecimento.setVisible(false);
              altura.setVisible(true);
              idade.setVisible(false);
              placarTexto.setVisible(false);
              vencedor.setVisible(true);
              textven = carta.name + " PERDEU";
              vencedor.setText(textven);
              contadordepartida.setVisible(false);
              newgame.setVisible(true);
              if (decisao.ganhador === "player2") {
                contadorloss = game.add
                  .image(320, 520, "bolverme")
                  .setInteractive();
                contadorloss.setVisible(true);
                //imagembloqueio.setVisible(false);
              }
            } else {
              cartafundo.setVisible(true);
              habilidade.setVisible(false);
              simpatia.setVisible(false);
              conhecimento.setVisible(false);
              altura.setVisible(true);
              idade.setVisible(false);
              placarTexto.setVisible(false);
              vencedor.setVisible(true);
              textven = "EMPATE";
              vencedor.setText(textven);
              newgame.setVisible(true);
              if (decisao.ganhador === "player1") {
                contadordepartida.setVisible(true);
                imagembloqueio.setVisible(false);
              }
            }
          } else if (decisao.item === "idade") {
            if (decisao.valor === "primeiro") {
              cartafundo.setVisible(true);
              habilidade.setVisible(false);
              simpatia.setVisible(false);
              conhecimento.setVisible(false);
              altura.setVisible(false);
              idade.setVisible(true);
              placarTexto.setVisible(false);
              vencedor.setVisible(true);
              textven = carta.name + " GANHOU";
              vencedor.setText(textven);
              newgame.setVisible(true);
              if (decisao.ganhador === "player1") {
                contadordepartida = game.add
                  .image(320, 520, "bolverde")
                  .setInteractive();
                contadordepartida.setVisible(true);
                //imagembloqueio.setVisible(false);
              }
            } else if (decisao.valor === "segundo") {
              cartafundo.setVisible(true);
              habilidade.setVisible(false);
              simpatia.setVisible(false);
              conhecimento.setVisible(false);
              altura.setVisible(false);
              idade.setVisible(true);
              placarTexto.setVisible(false);
              vencedor.setVisible(true);
              textven = carta.name + " PERDEU";
              vencedor.setText(textven);
              contadordepartida.setVisible(false);
              newgame.setVisible(true);
              if (decisao.ganhador === "player2") {
                contadorloss = game.add
                  .image(320, 520, "bolverme")
                  .setInteractive();
                contadorloss.setVisible(true);
                //imagembloqueio.setVisible(false);
              }
            } else {
              cartafundo.setVisible(true);
              habilidade.setVisible(false);
              simpatia.setVisible(false);
              conhecimento.setVisible(false);
              altura.setVisible(false);
              idade.setVisible(true);
              placarTexto.setVisible(false);
              vencedor.setVisible(true);
              textven = "EMPATE";
              vencedor.setText(textven);
              newgame.setVisible(true);
              if (decisao.ganhador === "nenhum") {
                contadordepartida.setVisible(true);

                //imagembloqueio.setVisible(false);
              }
            }
          }
          contage = decisao.ganhador;
        }
      });
    } else if (contagem === 2) {
      cartafundo = game.add.image(400, 301, carta.fundo).setInteractive();
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
      contadordepartida.setVisible(false);
      bolicinza.setVisible(false);
      bolicinza2.setVisible(false);
      bolicinza3.setVisible(false);
      bolicinza4.setVisible(false);

      vencedor.setVisible(false);
      if (jogador === 1) {
        imagembloqueio = game.add
          .image(400, 301, "fundograde")
          .setInteractive();
      }

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
        imagembloqueio.setVisible(false);
        newgame.setVisible(false);
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
        imagembloqueio.setVisible(false);
        newgame.setVisible(false);
      });

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
        imagembloqueio.setVisible(false);
        newgame.setVisible(false);
      });

      altura.on("pointerdown", function () {
        socket.emit("escolha", {
          item: "altura",
          valor: carta.altura.valor,
          cartanome: carta.name,
        });
        cartafundo.setVisible(true);
        habilidade.setVisible(false);
        simpatia.setVisible(false);
        conhecimento.setVisible(false);
        altura.setVisible(true);
        idade.setVisible(false);
        imagembloqueio.setVisible(false);
        newgame.setVisible(false);
      });

      idade.on("pointerdown", function () {
        socket.emit("escolha", {
          item: "idade",
          valor: carta.idade.valor,
          cartanome: carta.name,
        });
        cartafundo.setVisible(true);
        habilidade.setVisible(false);
        simpatia.setVisible(false);
        conhecimento.setVisible(false);
        altura.setVisible(false);
        idade.setVisible(true);
        imagembloqueio.setVisible(false);
        newgame.setVisible(false);
      });

      socket.on("escolha", (escolha) => {
        if (escolha.item === "habilidade") {
          cartafundo.setVisible(true);
          habilidade.setVisible(true);
          simpatia.setVisible(false);
          conhecimento.setVisible(false);
          altura.setVisible(false);
          idade.setVisible(false);
          imagembloqueio.setVisible(false);
          newgame.setVisible(false);
          //   player2         player1
          if (escolha.valor > carta.habilidade.valor) {
            console.log(escolha);
            placarTexto.setVisible(false);
            vencedor.setVisible(true);
            textven = carta.name + " PERDEU";
            vencedor.setText(textven);
            if (contage === "player1") {
              ganhador1 = "oneloss1";
              contadorloss = game.add
                .image(360, 520, "bolverme")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverde").setInteractive();
              bolicinza.setVisible(true);
            } else if (contage === "player2") {
              ganhador1 = "doiswin1";
              contadorloss = game.add
                .image(360, 520, "bolverme")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
            }
            contadordepartida.setVisible(false);
            newgame.setVisible(true);

            socket.emit("decisao", {
              item: "habilidade",
              valor: "primeiro",
              carta: carta.nome,
              ganhador: ganhador1,
            }); //         player2     player1
          } else if (escolha.valor < carta.habilidade.valor) {
            console.log(contage);
            placarTexto.setVisible(false);
            vencedor.setVisible(true);
            textven = carta.name + " GANHOU";
            vencedor.setText(textven);
            if (contage === "player2") {
              ganhador2 = "oneloss2";
              contadordepartida = game.add
                .image(360, 520, "bolverde")
                .setInteractive();
              contadordepartida.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
            } else if (contage === "player1") {
              ganhador2 = "doiswin2";
              contadordepartida = game.add
                .image(360, 520, "bolverde")
                .setInteractive();
              contadordepartida.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverde").setInteractive();
              bolicinza.setVisible(true);
            }
            newgame.setVisible(true);
            socket.emit("decisao", {
              item: "habilidade",
              valor: "segundo",
              carta: carta.nome,
              ganhador: ganhador2,
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
          imagembloqueio.setVisible(false);
          if (escolha.valor > carta.simpatia.valor) {
            console.log(contage);
            placarTexto.setVisible(false);
            vencedor.setVisible(true);
            textven = carta.name + " PERDEU";
            vencedor.setText(textven);
            if (contage === "player1") {
              ganhador1 = "oneloss1";
              contadorloss = game.add
                .image(360, 520, "bolverme")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverde").setInteractive();
              bolicinza.setVisible(true);
            } else if (contage === "player2") {
              ganhador1 = "doiswin1";
              contadorloss = game.add
                .image(360, 520, "bolverme")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
            }
            contadordepartida.setVisible(false);
            newgame.setVisible(true);
            socket.emit("decisao", {
              item: "simpatia",
              valor: "primeiro",
              carta: carta.nome,
              ganhador: ganhador1,
            });
          } else if (escolha.valor < carta.simpatia.valor) {
            console.log(contage);
            placarTexto.setVisible(false);
            vencedor.setVisible(true);
            textven = carta.name + " GANHOU";
            vencedor.setText(textven);
            if (contage === "player2") {
              ganhador2 = "oneloss2";
              contadordepartida = game.add
                .image(360, 520, "bolverde")
                .setInteractive();
              contadordepartida.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
            } else if (contage === "player1") {
              ganhador2 = "doiswin2";
              contadordepartida = game.add
                .image(360, 520, "bolverde")
                .setInteractive();
              contadordepartida.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverde").setInteractive();
              bolicinza.setVisible(true);
            }
            newgame.setVisible(true);
            socket.emit("decisao", {
              item: "simpatia",
              valor: "segundo",
              carta: carta.nome,
              ganhador: ganhador2,
            });
          } else {
            placarTexto.setVisible(false);
            vencedor.setVisible(true);
            textven = "EMPATE";
            vencedor.setText(textven);
            contadordepartida.setVisible(true);
            newgame.setVisible(true);
            bolicinza.setVisible(true);
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
          imagembloqueio.setVisible(false);
          newgame.setVisible(false);
          if (escolha.valor > carta.conhecimento.valor) {
            placarTexto.setVisible(false);
            vencedor.setVisible(true);
            textven = carta.name + " PERDEU";
            vencedor.setText(textven);
            if (contage === "player1") {
              ganhador1 = "oneloss1";
              contadorloss = game.add
                .image(360, 520, "bolverme")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverde").setInteractive();
              bolicinza.setVisible(true);
            } else if (contage === "player2") {
              ganhador1 = "doiswin1";
              contadorloss = game.add
                .image(360, 520, "bolverme")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
            }
            contadordepartida.setVisible(false);
            newgame.setVisible(true);
            socket.emit("decisao", {
              item: "conhecimento",
              valor: "primeiro",
              carta: carta.nome,
              ganhador: ganhador1,
            });
          } else if (escolha.valor < carta.conhecimento.valor) {
            placarTexto.setVisible(false);
            vencedor.setVisible(true);
            textven = carta.name + " GANHOU";
            vencedor.setText(textven);
            if (contage === "player2") {
              ganhador2 = "oneloss2";
              contadordepartida = game.add
                .image(360, 520, "bolverde")
                .setInteractive();
              contadordepartida.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
            } else if (contage === "player1") {
              ganhador2 = "doiswin2";
              contadordepartida = game.add
                .image(360, 520, "bolverde")
                .setInteractive();
              contadordepartida.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverde").setInteractive();
              bolicinza.setVisible(true);
            }
            newgame.setVisible(true);
            socket.emit("decisao", {
              item: "conhecimento",
              valor: "segundo",
              carta: carta.nome,
              ganhador: ganhador2,
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
        } else if (escolha.item === "altura") {
          cartafundo.setVisible(true);
          habilidade.setVisible(false);
          simpatia.setVisible(false);
          conhecimento.setVisible(false);
          altura.setVisible(true);
          idade.setVisible(false);
          imagembloqueio.setVisible(false);
          newgame.setVisible(false);
          if (escolha.valor > carta.altura.valor) {
            placarTexto.setVisible(false);
            vencedor.setVisible(true);
            textven = carta.name + " PERDEU";
            vencedor.setText(textven);
            if (contage === "player1") {
              ganhador1 = "oneloss1";
              contadorloss = game.add
                .image(360, 520, "bolverme")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverde").setInteractive();
              bolicinza.setVisible(true);
            } else if (contage === "player2") {
              ganhador1 = "doiswin1";
              contadorloss = game.add
                .image(360, 520, "bolverme")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
            }
            contadordepartida.setVisible(false);
            newgame.setVisible(true);
            contadorloss = game.add
              .image(360, 520, "bolverme")
              .setInteractive();
            contadorloss.setVisible(true);
            socket.emit("decisao", {
              item: "altura",
              valor: "primeiro",
              carta: carta.nome,
              ganhador: ganhador1,
            });
          } else if (escolha.valor < carta.altura.valor) {
            placarTexto.setVisible(false);
            vencedor.setVisible(true);
            textven = carta.name + " GANHOU";
            vencedor.setText(textven);
            if (contage === "player2") {
              ganhador2 = "oneloss2";
              contadordepartida = game.add
                .image(360, 520, "bolverde")
                .setInteractive();
              contadordepartida.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
            } else if (contage === "player1") {
              ganhador2 = "doiswin2";
              contadordepartida = game.add
                .image(360, 520, "bolverde")
                .setInteractive();
              contadordepartida.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverde").setInteractive();
              bolicinza.setVisible(true);
            }
            newgame.setVisible(true);
            socket.emit("decisao", {
              item: "altura",
              valor: "segundo",
              carta: carta.nome,
              ganhador: ganhador2,
            });
          } else {
            placarTexto.setVisible(false);
            vencedor.setVisible(true);
            textven = "EMPATE";
            vencedor.setText(textven);
            contadordepartida.setVisible(true);
            newgame.setVisible(true);
            socket.emit("decisao", {
              item: "altura",
              valor: "empate",
              carta: carta.nome,
            });
          }
          console.log(carta);
        } else if (escolha.item === "idade") {
          cartafundo.setVisible(true);
          habilidade.setVisible(false);
          simpatia.setVisible(false);
          conhecimento.setVisible(false);
          altura.setVisible(false);
          idade.setVisible(true);
          imagembloqueio.setVisible(false);
          newgame.setVisible(false);
          if (escolha.valor > carta.idade.valor) {
            placarTexto.setVisible(false);
            vencedor.setVisible(true);
            textven = carta.name + " PERDEU";
            vencedor.setText(textven);
            if (contage === "player1") {
              ganhador1 = "oneloss1";
              contadorloss = game.add
                .image(360, 520, "bolverme")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverde").setInteractive();
              bolicinza.setVisible(true);
            } else if (contage === "player2") {
              ganhador1 = "doiswin1";
              contadorloss = game.add
                .image(360, 520, "bolverme")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
            }
            contadordepartida.setVisible(false);
            newgame.setVisible(true);

            socket.emit("decisao", {
              item: "idade",
              valor: "primeiro",
              carta: carta.nome,
              ganhador: ganhador1,
            });
          } else if (escolha.valor < carta.idade.valor) {
            placarTexto.setVisible(false);
            vencedor.setVisible(true);
            textven = carta.name + " GANHOU";
            vencedor.setText(textven);
            if (contage === "player2") {
              ganhador2 = "oneloss2";
              contadordepartida = game.add
                .image(360, 520, "bolverde")
                .setInteractive();
              contadordepartida.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
            } else if (contage === "player1") {
              ganhador2 = "doiswin2";
              contadordepartida = game.add
                .image(360, 520, "bolverde")
                .setInteractive();
              contadordepartida.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverde").setInteractive();
              bolicinza.setVisible(true);
            }
            newgame.setVisible(true);
            socket.emit("decisao", {
              item: "idade",
              valor: "segundo",
              carta: carta.nome,
              ganhador: ganhador2,
            });
          } else {
            placarTexto.setVisible(false);
            vencedor.setVisible(true);
            textven = "EMPATE";
            vencedor.setText(textven);
            contadordepartida.setVisible(true);
            newgame.setVisible(true);
            socket.emit("decisao", {
              item: "idade",
              valor: "empate",
              carta: carta.nome,
              ganhador: "nenhum",
            });
          }
          console.log(carta);
        }
      });

      socket.on("decisao", (decisao) => {
        if (jogador === 2) {
          if (decisao.item === "habilidade") {
            if (decisao.valor === "primeiro") {
              console.log(decisao.ganhador);
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
              if (decisao.ganhador === "doiswin1") {
                contadordepartida = game.add
                  .image(360, 520, "bolverde")
                  .setInteractive();
                contadordepartida.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverde")
                  .setInteractive();
                bolicinza.setVisible(true);
              } else if (decisao.ganhador === "oneloss1") {
                contadordepartida = game.add
                  .image(360, 520, "bolverde")
                  .setInteractive();
                contadordepartida.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverme")
                  .setInteractive();
                bolicinza.setVisible(true);
              }
              imagembloqueio.setVisible(false);
              newgame.setVisible(true);
            } else if (decisao.valor === "segundo") {
              console.log(decisao.ganhador);
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
              if (decisao.ganhador === "doiswin2") {
                contadorloss = game.add
                  .image(360, 520, "bolverme")
                  .setInteractive();
                contadorloss.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverme")
                  .setInteractive();
                bolicinza.setVisible(true);
              } else if (decisao.ganhador === "oneloss2") {
                contadorloss = game.add
                  .image(360, 520, "bolverme")
                  .setInteractive();
                contadorloss.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverde")
                  .setInteractive();
                bolicinza.setVisible(true);
              }
              contadordepartida.setVisible(false);
              newgame.setVisible(true);
            } else {
              console.log(decisao.ganhador);
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
          } else if (decisao.item === "simpatia") {
            if (decisao.valor === "primeiro") {
              console.log(decisao.ganhador);
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
              if (decisao.ganhador === "doiswin1") {
                contadordepartida = game.add
                  .image(360, 520, "bolverde")
                  .setInteractive();
                contadordepartida.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverde")
                  .setInteractive();
                bolicinza.setVisible(true);
              } else if (decisao.ganhador === "oneloss1") {
                contadordepartida = game.add
                  .image(360, 520, "bolverde")
                  .setInteractive();
                contadordepartida.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverme")
                  .setInteractive();
                bolicinza.setVisible(true);
              }
              imagembloqueio.setVisible(false);
              newgame.setVisible(true);
            } else if (decisao.valor === "segundo") {
              console.log(decisao.ganhador);
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
              if (decisao.ganhador === "doiswin2") {
                contadorloss = game.add
                  .image(360, 520, "bolverme")
                  .setInteractive();
                contadorloss.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverme")
                  .setInteractive();
                bolicinza.setVisible(true);
              } else if (decisao.ganhador === "oneloss2") {
                contadorloss = game.add
                  .image(360, 520, "bolverme")
                  .setInteractive();
                contadorloss.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverde")
                  .setInteractive();
                bolicinza.setVisible(true);
              }
              contadordepartida.setVisible(false);
              newgame.setVisible(true);
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
          } else if (decisao.item === "conhecimento") {
            if (decisao.valor === "primeiro") {
              cartafundo.setVisible(true);
              habilidade.setVisible(false);
              simpatia.setVisible(false);
              conhecimento.setVisible(true);
              altura.setVisible(false);
              idade.setVisible(false);
              placarTexto.setVisible(false);
              vencedor.setVisible(true);
              textven = carta.name + " GANHOU";
              vencedor.setText(textven);
              if (decisao.ganhador === "doiswin1") {
                contadordepartida = game.add
                  .image(360, 520, "bolverde")
                  .setInteractive();
                contadordepartida.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverde")
                  .setInteractive();
                bolicinza.setVisible(true);
              } else if (decisao.ganhador === "oneloss1") {
                contadordepartida = game.add
                  .image(360, 520, "bolverde")
                  .setInteractive();
                contadordepartida.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverme")
                  .setInteractive();
                bolicinza.setVisible(true);
              }
              imagembloqueio.setVisible(false);
              newgame.setVisible(true);
            } else if (decisao.valor === "segundo") {
              cartafundo.setVisible(true);
              habilidade.setVisible(false);
              simpatia.setVisible(false);
              conhecimento.setVisible(true);
              altura.setVisible(false);
              idade.setVisible(false);
              placarTexto.setVisible(false);
              vencedor.setVisible(true);
              textven = carta.name + " PERDEU";
              vencedor.setText(textven);
              if (decisao.ganhador === "doiswin2") {
                contadorloss = game.add
                  .image(360, 520, "bolverme")
                  .setInteractive();
                contadorloss.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverme")
                  .setInteractive();
                bolicinza.setVisible(true);
              } else if (decisao.ganhador === "oneloss2") {
                contadorloss = game.add
                  .image(360, 520, "bolverme")
                  .setInteractive();
                contadorloss.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverde")
                  .setInteractive();
                bolicinza.setVisible(true);
              }
              contadordepartida.setVisible(false);
              newgame.setVisible(true);
            } else {
              cartafundo.setVisible(true);
              habilidade.setVisible(false);
              simpatia.setVisible(false);
              conhecimento.setVisible(true);
              altura.setVisible(false);
              idade.setVisible(false);
              placarTexto.setVisible(false);
              vencedor.setVisible(true);
              textven = "EMPATE";
              vencedor.setText(textven);
              contadordepartida.setVisible(true);
              newgame.setVisible(true);
            }
          } else if (decisao.item === "altura") {
            if (decisao.valor === "primeiro") {
              cartafundo.setVisible(true);
              habilidade.setVisible(false);
              simpatia.setVisible(false);
              conhecimento.setVisible(false);
              altura.setVisible(true);
              idade.setVisible(false);
              placarTexto.setVisible(false);
              vencedor.setVisible(true);
              textven = carta.name + " GANHOU";
              vencedor.setText(textven);
              if (decisao.ganhador === "doiswin1") {
                contadordepartida = game.add
                  .image(360, 520, "bolverde")
                  .setInteractive();
                contadordepartida.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverde")
                  .setInteractive();
                bolicinza.setVisible(true);
              } else if (decisao.ganhador === "oneloss1") {
                contadordepartida = game.add
                  .image(360, 520, "bolverde")
                  .setInteractive();
                contadordepartida.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverme")
                  .setInteractive();
                bolicinza.setVisible(true);
              }
              imagembloqueio.setVisible(false);
              newgame.setVisible(true);
            } else if (decisao.valor === "segundo") {
              cartafundo.setVisible(true);
              habilidade.setVisible(false);
              simpatia.setVisible(false);
              conhecimento.setVisible(false);
              altura.setVisible(true);
              idade.setVisible(false);
              placarTexto.setVisible(false);
              vencedor.setVisible(true);
              textven = carta.name + " PERDEU";
              vencedor.setText(textven);
              if (decisao.ganhador === "doiswin2") {
                contadorloss = game.add
                  .image(360, 520, "bolverme")
                  .setInteractive();
                contadorloss.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverme")
                  .setInteractive();
                bolicinza.setVisible(true);
              } else if (decisao.ganhador === "oneloss2") {
                contadorloss = game.add
                  .image(360, 520, "bolverme")
                  .setInteractive();
                contadorloss.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverde")
                  .setInteractive();
                bolicinza.setVisible(true);
              }
              contadordepartida.setVisible(false);
              newgame.setVisible(true);
            } else {
              cartafundo.setVisible(true);
              habilidade.setVisible(false);
              simpatia.setVisible(false);
              conhecimento.setVisible(false);
              altura.setVisible(true);
              idade.setVisible(false);
              placarTexto.setVisible(false);
              vencedor.setVisible(true);
              textven = "EMPATE";
              vencedor.setText(textven);
              contadordepartida.setVisible(true);
              newgame.setVisible(true);
            }
          } else if (decisao.item === "idade") {
            if (decisao.valor === "primeiro") {
              cartafundo.setVisible(true);
              habilidade.setVisible(false);
              simpatia.setVisible(false);
              conhecimento.setVisible(false);
              altura.setVisible(false);
              idade.setVisible(true);
              placarTexto.setVisible(false);
              vencedor.setVisible(true);
              textven = carta.name + " GANHOU";
              vencedor.setText(textven);
              if (decisao.ganhador === "doiswin1") {
                contadordepartida = game.add
                  .image(360, 520, "bolverde")
                  .setInteractive();
                contadordepartida.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverde")
                  .setInteractive();
                bolicinza.setVisible(true);
              } else if (decisao.ganhador === "oneloss1") {
                contadordepartida = game.add
                  .image(360, 520, "bolverde")
                  .setInteractive();
                contadordepartida.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverme")
                  .setInteractive();
                bolicinza.setVisible(true);
              }
              imagembloqueio.setVisible(false);
              newgame.setVisible(true);
            } else if (decisao.valor === "segundo") {
              cartafundo.setVisible(true);
              habilidade.setVisible(false);
              simpatia.setVisible(false);
              conhecimento.setVisible(false);
              altura.setVisible(false);
              idade.setVisible(true);
              placarTexto.setVisible(false);
              vencedor.setVisible(true);
              textven = carta.name + " PERDEU";
              vencedor.setText(textven);
              if (decisao.ganhador === "doiswin2") {
                contadorloss = game.add
                  .image(360, 520, "bolverme")
                  .setInteractive();
                contadorloss.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverme")
                  .setInteractive();
                bolicinza.setVisible(true);
              } else if (decisao.ganhador === "oneloss2") {
                contadorloss = game.add
                  .image(360, 520, "bolverme")
                  .setInteractive();
                contadorloss.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverde")
                  .setInteractive();
                bolicinza.setVisible(true);
              }
              contadordepartida.setVisible(false);
              newgame.setVisible(true);
            } else {
              cartafundo.setVisible(true);
              habilidade.setVisible(false);
              simpatia.setVisible(false);
              conhecimento.setVisible(false);
              altura.setVisible(false);
              idade.setVisible(true);
              placarTexto.setVisible(false);
              vencedor.setVisible(true);
              textven = "EMPATE";
              vencedor.setText(textven);
              contadordepartida.setVisible(true);
              newgame.setVisible(true);
            }
          }
        }
        contage = decisao.ganhador;
      });
    } else if (contagem === 3) {
      cartafundo = game.add.image(400, 301, carta.fundo).setInteractive();
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
      contadordepartida.setVisible(false);
      bolicinza.setVisible(false);
      bolicinza2.setVisible(false);
      bolicinza3.setVisible(false);
      bolicinza4.setVisible(false);

      vencedor.setVisible(false);
      if (jogador === 2) {
        imagembloqueio = game.add
          .image(400, 301, "fundograde")
          .setInteractive();
      }

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
        imagembloqueio.setVisible(false);
        newgame.setVisible(false);
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
        imagembloqueio.setVisible(false);
        newgame.setVisible(false);
      });

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
        imagembloqueio.setVisible(false);
        newgame.setVisible(false);
      });

      altura.on("pointerdown", function () {
        socket.emit("escolha", {
          item: "altura",
          valor: carta.altura.valor,
          cartanome: carta.name,
        });
        cartafundo.setVisible(true);
        habilidade.setVisible(false);
        simpatia.setVisible(false);
        conhecimento.setVisible(false);
        altura.setVisible(true);
        idade.setVisible(false);
        imagembloqueio.setVisible(false);
        newgame.setVisible(false);
      });

      idade.on("pointerdown", function () {
        socket.emit("escolha", {
          item: "idade",
          valor: carta.idade.valor,
          cartanome: carta.name,
        });
        cartafundo.setVisible(true);
        habilidade.setVisible(false);
        simpatia.setVisible(false);
        conhecimento.setVisible(false);
        altura.setVisible(false);
        idade.setVisible(true);
        imagembloqueio.setVisible(false);
        newgame.setVisible(false);
      });

      socket.on("escolha", (escolha) => {
        if (escolha.item === "habilidade") {
          cartafundo.setVisible(true);
          habilidade.setVisible(true);
          simpatia.setVisible(false);
          conhecimento.setVisible(false);
          altura.setVisible(false);
          idade.setVisible(false);
          imagembloqueio.setVisible(false);
          newgame.setVisible(false);
          //   player1         player2
          if (escolha.valor > carta.habilidade.valor) {
            console.log(escolha);
            placarTexto.setVisible(false);
            vencedor.setVisible(true);
            textven = carta.name + " PERDEU";
            vencedor.setText(textven);
            if (contage === "oneloss2") {
              ganhador1 = "onelosstwowin";
              contadorloss = game.add
                .image(360, 520, "bolverme")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverde").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverme")
                .setInteractive();
              bolicinza2.setVisible(true);
            } else if (contage === "doiswin2") {
              ganhador1 = "treewin";
              contadorloss = game.add
                .image(360, 520, "bolverme")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverme")
                .setInteractive();
            } else if (contage === "doiswin1") {
              ganhador1 = "twolossonewin";
              contadordepartida2 = game.add
                .image(320, 520, "bolverde")
                .setInteractive();
              contadordepartida2.setVisible(true);
              bolicinza = game.add.image(360, 520, "bolverde").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverme")
                .setInteractive();
              bolicinza2.setVisible(true);
            } else if (contage === "oneloss1") {
              ganhador1 = "onewinonelossonewin";
              contadordepartida = game.add
                .image(360, 520, "bolverde")
                .setInteractive();
              contadordepartida.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverme")
                .setInteractive();
              bolicinza2.setVisible(true);
            }
            newgame.setVisible(true);

            socket.emit("decisao", {
              item: "habilidade",
              valor: "primeiro",
              carta: carta.nome,
              ganhador: ganhador1,
            }); //         player2     player1
          } else if (escolha.valor < carta.habilidade.valor) {
            console.log(contage);
            placarTexto.setVisible(false);
            vencedor.setVisible(true);
            textven = carta.name + " GANHOU";
            vencedor.setText(textven);
            if (contage === "oneloss1") {
              ganhador2 = "twolossonewin";
              contadordepartida = game.add
                .image(360, 520, "bolverde")
                .setInteractive();
              contadordepartida.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverde")
                .setInteractive();
              bolicinza2.setVisible(true);
            }
            if (contage === "oneloss2") {
              ganhador2 = "onelossonewinoneloss";
              contadorloss = game.add
                .image(360, 520, "bolverme")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverde").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverde")
                .setInteractive();
              bolicinza2.setVisible(true);
            } else if (contage === "doiswin1") {
              ganhador2 = "treeloss";
              contadordepartida = game.add
                .image(360, 520, "bolverde")
                .setInteractive();
              contadordepartida.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverde").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverde")
                .setInteractive();
              bolicinza2.setVisible(true);
            } else if (contage === "doiswin2") {
              ganhador2 = "twowinoneloss";
              contadorloss = game.add
                .image(360, 520, "bolverme")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverde")
                .setInteractive();
            }
            newgame.setVisible(true);
            socket.emit("decisao", {
              item: "habilidade",
              valor: "segundo",
              carta: carta.nome,
              ganhador: ganhador2,
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
          imagembloqueio.setVisible(false);
          if (escolha.valor > carta.simpatia.valor) {
            console.log(contage);
            placarTexto.setVisible(false);
            vencedor.setVisible(true);
            textven = carta.name + " PERDEU";
            vencedor.setText(textven);
            if (contage === "oneloss2") {
              ganhador1 = "onelosstwowin";
              contadorloss = game.add
                .image(360, 520, "bolverme")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverde").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverme")
                .setInteractive();
              bolicinza2.setVisible(true);
            } else if (contage === "doiswin2") {
              ganhador1 = "treewin";
              contadorloss = game.add
                .image(360, 520, "bolverme")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverme")
                .setInteractive();
            } else if (contage === "doiswin1") {
              ganhador1 = "twolossonewin";
              contadordepartida2 = game.add
                .image(320, 520, "bolverde")
                .setInteractive();
              contadordepartida2.setVisible(true);
              bolicinza = game.add.image(360, 520, "bolverde").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverme")
                .setInteractive();
              bolicinza2.setVisible(true);
            } else if (contage === "oneloss1") {
              ganhador1 = "onewinonelossonewin";
              contadordepartida = game.add
                .image(360, 520, "bolverde")
                .setInteractive();
              contadordepartida.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverme")
                .setInteractive();
              bolicinza2.setVisible(true);
            }
            newgame.setVisible(true);
            socket.emit("decisao", {
              item: "simpatia",
              valor: "primeiro",
              carta: carta.nome,
              ganhador: ganhador1,
            });
          } else if (escolha.valor < carta.simpatia.valor) {
            console.log(contage);
            placarTexto.setVisible(false);
            vencedor.setVisible(true);
            textven = carta.name + " GANHOU";
            vencedor.setText(textven);
            if (contage === "oneloss1") {
              ganhador2 = "";
              contadordepartida = game.add
                .image(360, 520, "bolverde")
                .setInteractive();
              contadordepartida.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverme")
                .setInteractive();
              bolicinza2.setVisible(true);
            }
            if (contage === "oneloss1") {
              ganhador2 = "twolossonewin";
              contadordepartida = game.add
                .image(360, 520, "bolverde")
                .setInteractive();
              contadordepartida.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverde")
                .setInteractive();
              bolicinza2.setVisible(true);
            }
            if (contage === "oneloss2") {
              ganhador2 = "onelossonewinoneloss";
              contadorloss = game.add
                .image(360, 520, "bolverme")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverde").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverde")
                .setInteractive();
              bolicinza2.setVisible(true);
            } else if (contage === "doiswin1") {
              ganhador2 = "treeloss";
              contadordepartida = game.add
                .image(360, 520, "bolverde")
                .setInteractive();
              contadordepartida.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverde").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverde")
                .setInteractive();
              bolicinza2.setVisible(true);
            } else if (contage === "doiswin2") {
              ganhador2 = "twowinoneloss";
              contadorloss = game.add
                .image(360, 520, "bolverme")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverde")
                .setInteractive();
            }
            newgame.setVisible(true);
            socket.emit("decisao", {
              item: "simpatia",
              valor: "segundo",
              carta: carta.nome,
              ganhador: ganhador2,
            });
          } else {
            placarTexto.setVisible(false);
            vencedor.setVisible(true);
            textven = "EMPATE";
            vencedor.setText(textven);
            contadordepartida.setVisible(true);
            newgame.setVisible(true);
            bolicinza.setVisible(true);
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
          imagembloqueio.setVisible(false);
          newgame.setVisible(false);
          //      player1       player2
          if (escolha.valor > carta.conhecimento.valor) {
            console.log(contage);
            placarTexto.setVisible(false);
            vencedor.setVisible(true);
            textven = carta.name + " PERDEU";
            vencedor.setText(textven);
            if (contage === "oneloss2") {
              ganhador1 = "onelosstwowin";
              contadorloss = game.add
                .image(360, 520, "bolverme")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverde").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverme")
                .setInteractive();
              bolicinza2.setVisible(true);
            } else if (contage === "doiswin2") {
              ganhador1 = "treewin";
              contadorloss = game.add
                .image(360, 520, "bolverme")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverme")
                .setInteractive();
            } else if (contage === "doiswin1") {
              ganhador1 = "twolossonewin";
              contadordepartida2 = game.add
                .image(320, 520, "bolverde")
                .setInteractive();
              contadordepartida2.setVisible(true);
              bolicinza = game.add.image(360, 520, "bolverde").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverme")
                .setInteractive();
              bolicinza2.setVisible(true);
            } else if (contage === "oneloss1") {
              ganhador1 = "onewinonelossonewin";
              contadordepartida = game.add
                .image(360, 520, "bolverde")
                .setInteractive();
              contadordepartida.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverme")
                .setInteractive();
              bolicinza2.setVisible(true);
            }

            newgame.setVisible(true);

            socket.emit("decisao", {
              item: "conhecimento",
              valor: "primeiro",
              carta: carta.nome,
              ganhador: ganhador1,
            });
          } else if (escolha.valor < carta.conhecimento.valor) {
            console.log(contage);
            placarTexto.setVisible(false);
            vencedor.setVisible(true);
            textven = carta.name + " GANHOU";
            vencedor.setText(textven);
            if (contage === "oneloss1") {
              ganhador2 = "twolossonewin";
              contadordepartida = game.add
                .image(360, 520, "bolverde")
                .setInteractive();
              contadordepartida.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverde")
                .setInteractive();
              bolicinza2.setVisible(true);
            }
            if (contage === "oneloss2") {
              ganhador2 = "onelossonewinoneloss";
              contadorloss = game.add
                .image(360, 520, "bolverme")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverde").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverde")
                .setInteractive();
              bolicinza2.setVisible(true);
            } else if (contage === "doiswin1") {
              ganhador2 = "treeloss";
              contadordepartida = game.add
                .image(360, 520, "bolverde")
                .setInteractive();
              contadordepartida.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverde").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverde")
                .setInteractive();
              bolicinza2.setVisible(true);
            } else if (contage === "doiswin2") {
              ganhador2 = "twowinoneloss";
              contadorloss = game.add
                .image(360, 520, "bolverme")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverde")
                .setInteractive();
            }
            newgame.setVisible(true);

            socket.emit("decisao", {
              item: "conhecimento",
              valor: "segundo",
              carta: carta.nome,
              ganhador: ganhador2,
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
        } else if (escolha.item === "altura") {
          cartafundo.setVisible(true);
          habilidade.setVisible(false);
          simpatia.setVisible(false);
          conhecimento.setVisible(false);
          altura.setVisible(true);
          idade.setVisible(false);
          imagembloqueio.setVisible(false);
          newgame.setVisible(false);
          if (escolha.valor > carta.altura.valor) {
            placarTexto.setVisible(false);
            vencedor.setVisible(true);
            textven = carta.name + " PERDEU";
            vencedor.setText(textven);
            if (contage === "oneloss2") {
              ganhador1 = "onelosstwowin";
              contadorloss = game.add
                .image(360, 520, "bolverme")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverde").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverme")
                .setInteractive();
              bolicinza2.setVisible(true);
            } else if (contage === "doiswin2") {
              ganhador1 = "treewin";
              contadorloss = game.add
                .image(360, 520, "bolverme")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverme")
                .setInteractive();
            } else if (contage === "doiswin1") {
              ganhador1 = "twolossonewin";
              contadordepartida2 = game.add
                .image(320, 520, "bolverde")
                .setInteractive();
              contadordepartida2.setVisible(true);
              bolicinza = game.add.image(360, 520, "bolverde").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverme")
                .setInteractive();
              bolicinza2.setVisible(true);
            } else if (contage === "oneloss1") {
              ganhador1 = "onewinonelossonewin";
              contadordepartida = game.add
                .image(360, 520, "bolverde")
                .setInteractive();
              contadordepartida.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverme")
                .setInteractive();
              bolicinza2.setVisible(true);
            }
            newgame.setVisible(true);

            socket.emit("decisao", {
              item: "altura",
              valor: "primeiro",
              carta: carta.nome,
              ganhador: ganhador1,
            });
          } else if (escolha.valor < carta.altura.valor) {
            placarTexto.setVisible(false);
            vencedor.setVisible(true);
            textven = carta.name + " GANHOU";
            vencedor.setText(textven);
            if (contage === "oneloss1") {
              ganhador2 = "twolossonewin";
              contadordepartida = game.add
                .image(360, 520, "bolverde")
                .setInteractive();
              contadordepartida.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverde")
                .setInteractive();
              bolicinza2.setVisible(true);
            }
            if (contage === "oneloss2") {
              ganhador2 = "onelossonewinoneloss";
              contadorloss = game.add
                .image(360, 520, "bolverme")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverde").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverde")
                .setInteractive();
              bolicinza2.setVisible(true);
            } else if (contage === "doiswin1") {
              ganhador2 = "treeloss";
              contadordepartida = game.add
                .image(360, 520, "bolverde")
                .setInteractive();
              contadordepartida.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverde").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverde")
                .setInteractive();
              bolicinza2.setVisible(true);
            } else if (contage === "doiswin2") {
              ganhador2 = "twowinoneloss";
              contadorloss = game.add
                .image(360, 520, "bolverme")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverde")
                .setInteractive();
            }
            newgame.setVisible(true);
            socket.emit("decisao", {
              item: "altura",
              valor: "segundo",
              carta: carta.nome,
              ganhador: ganhador2,
            });
          } else {
            placarTexto.setVisible(false);
            vencedor.setVisible(true);
            textven = "EMPATE";
            vencedor.setText(textven);
            contadordepartida.setVisible(true);
            newgame.setVisible(true);
            socket.emit("decisao", {
              item: "altura",
              valor: "empate",
              carta: carta.nome,
            });
          }
          console.log(carta);
        } else if (escolha.item === "idade") {
          cartafundo.setVisible(true);
          habilidade.setVisible(false);
          simpatia.setVisible(false);
          conhecimento.setVisible(false);
          altura.setVisible(false);
          idade.setVisible(true);
          imagembloqueio.setVisible(false);
          newgame.setVisible(false);
          if (escolha.valor > carta.idade.valor) {
            placarTexto.setVisible(false);
            vencedor.setVisible(true);
            textven = carta.name + " PERDEU";
            vencedor.setText(textven);
            if (contage === "oneloss2") {
              ganhador1 = "onelosstwowin";
              contadorloss = game.add
                .image(360, 520, "bolverme")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverde").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverme")
                .setInteractive();
              bolicinza2.setVisible(true);
            } else if (contage === "doiswin2") {
              ganhador1 = "treewin";
              contadorloss = game.add
                .image(360, 520, "bolverme")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverme")
                .setInteractive();
            } else if (contage === "doiswin1") {
              ganhador1 = "twolossonewin";
              contadordepartida2 = game.add
                .image(320, 520, "bolverde")
                .setInteractive();
              contadordepartida2.setVisible(true);
              bolicinza = game.add.image(360, 520, "bolverde").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverme")
                .setInteractive();
              bolicinza2.setVisible(true);
            } else if (contage === "oneloss1") {
              ganhador1 = "onewinonelossonewin";
              contadordepartida = game.add
                .image(360, 520, "bolverde")
                .setInteractive();
              contadordepartida.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverme")
                .setInteractive();
              bolicinza2.setVisible(true);
            }
            newgame.setVisible(true);

            socket.emit("decisao", {
              item: "idade",
              valor: "primeiro",
              carta: carta.nome,
              ganhador: ganhador1,
            });
          } else if (escolha.valor < carta.idade.valor) {
            placarTexto.setVisible(false);
            vencedor.setVisible(true);
            textven = carta.name + " GANHOU";
            vencedor.setText(textven);
            if (contage === "oneloss1") {
              ganhador2 = "twolossonewin";
              contadordepartida = game.add
                .image(360, 520, "bolverde")
                .setInteractive();
              contadordepartida.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverde")
                .setInteractive();
              bolicinza2.setVisible(true);
            }
            if (contage === "oneloss2") {
              ganhador2 = "onelossonewinoneloss";
              contadorloss = game.add
                .image(360, 520, "bolverme")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverde").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverde")
                .setInteractive();
              bolicinza2.setVisible(true);
            } else if (contage === "doiswin1") {
              ganhador2 = "treeloss";
              contadordepartida = game.add
                .image(360, 520, "bolverde")
                .setInteractive();
              contadordepartida.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverde").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverde")
                .setInteractive();
              bolicinza2.setVisible(true);
            } else if (contage === "doiswin2") {
              ganhador2 = "twowinoneloss";
              contadorloss = game.add
                .image(360, 520, "bolverme")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverde")
                .setInteractive();
            }
            newgame.setVisible(true);
            socket.emit("decisao", {
              item: "idade",
              valor: "segundo",
              carta: carta.nome,
              ganhador: ganhador2,
            });
          } else {
            placarTexto.setVisible(false);
            vencedor.setVisible(true);
            textven = "EMPATE";
            vencedor.setText(textven);
            contadordepartida.setVisible(true);
            newgame.setVisible(true);
            socket.emit("decisao", {
              item: "idade",
              valor: "empate",
              carta: carta.nome,
              ganhador: "nenhum",
            });
          }
          console.log(carta);
        }
      });

      socket.on("decisao", (decisao) => {
        if (jogador === 1) {
          if (decisao.item === "habilidade") {
            if (decisao.valor === "primeiro") {
              console.log(decisao.ganhador);
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
              if (decisao.ganhador === "treewin") {
                contadordepartida = game.add
                  .image(360, 520, "bolverde")
                  .setInteractive();
                contadordepartida.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverde")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverde")
                  .setInteractive();
                bolicinza2.setVisible(true);
              } else if (decisao.ganhador === "twolossonewin") {
                contadordepartida = game.add
                  .image(360, 520, "bolverme")
                  .setInteractive();
                contadordepartida.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverme")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverde")
                  .setInteractive();
                bolicinza2.setVisible(true);
              } else if (decisao.ganhador === "onelosstwowin") {
                contadordepartida = game.add
                  .image(360, 520, "bolverde")
                  .setInteractive();
                contadordepartida.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverme")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverde")
                  .setInteractive();
                bolicinza2.setVisible(true);
              } else if (decisao.ganhador === "onewinonelossonewin") {
                contadordepartida2 = game.add
                  .image(360, 520, "bolverme")
                  .setInteractive();
                contadordepartida2.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverde")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverde")
                  .setInteractive();
                bolicinza2.setVisible(true);
              }
              imagembloqueio.setVisible(false);
              newgame.setVisible(true);
            } else if (decisao.valor === "segundo") {
              console.log(decisao.ganhador);
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
              if (decisao.ganhador === "treeloss") {
                contadorloss = game.add
                  .image(360, 520, "bolverme")
                  .setInteractive();
                contadorloss.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverme")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverme")
                  .setInteractive();
                bolicinza2.setVisible(true);
              } else if (decisao.ganhador === "twowinoneloss") {
                contadorloss = game.add
                  .image(360, 520, "bolverde")
                  .setInteractive();
                contadorloss.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverde")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverme")
                  .setInteractive();
                bolicinza2.setVisible(true);
              } else if (decisao.ganhador === "onewintwoloss") {
                contadorloss = game.add
                  .image(360, 520, "bolverme")
                  .setInteractive();
                contadorloss.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverde")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverme")
                  .setInteractive();
                bolicinza2.setVisible(true);
              } else if (decisao.ganhador === "onelossonewinoneloss") {
                contadorloss = game.add
                  .image(360, 520, "bolverde")
                  .setInteractive();
                contadorloss.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverme")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverme")
                  .setInteractive();
                bolicinza2.setVisible(true);
              }
              newgame.setVisible(true);
            } else {
              console.log(decisao.ganhador);
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
          } else if (decisao.item === "simpatia") {
            if (decisao.valor === "primeiro") {
              console.log(decisao.ganhador);
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
              if (decisao.ganhador === "treewin") {
                contadordepartida = game.add
                  .image(360, 520, "bolverde")
                  .setInteractive();
                contadordepartida.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverde")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverde")
                  .setInteractive();
                bolicinza2.setVisible(true);
              } else if (decisao.ganhador === "twolossonewin") {
                contadordepartida = game.add
                  .image(360, 520, "bolverme")
                  .setInteractive();
                contadordepartida.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverme")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverde")
                  .setInteractive();
                bolicinza2.setVisible(true);
              } else if (decisao.ganhador === "onelosstwowin") {
                contadordepartida = game.add
                  .image(360, 520, "bolverde")
                  .setInteractive();
                contadordepartida.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverme")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverde")
                  .setInteractive();
                bolicinza2.setVisible(true);
              } else if (decisao.ganhador === "onewinonelossonewin") {
                contadordepartida2 = game.add
                  .image(360, 520, "bolverme")
                  .setInteractive();
                contadordepartida2.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverde")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverde")
                  .setInteractive();
                bolicinza2.setVisible(true);
              }
              imagembloqueio.setVisible(false);
              newgame.setVisible(true);
            } else if (decisao.valor === "segundo") {
              console.log(decisao.ganhador);
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
              if (decisao.ganhador === "treeloss") {
                contadorloss = game.add
                  .image(360, 520, "bolverme")
                  .setInteractive();
                contadorloss.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverme")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverme")
                  .setInteractive();
                bolicinza2.setVisible(true);
              } else if (decisao.ganhador === "twowinoneloss") {
                contadorloss = game.add
                  .image(360, 520, "bolverde")
                  .setInteractive();
                contadorloss.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverde")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverme")
                  .setInteractive();
                bolicinza2.setVisible(true);
              } else if (decisao.ganhador === "onewintwoloss") {
                bolicinza = game.add
                  .image(320, 520, "bolverde")
                  .setInteractive();
                bolicinza.setVisible(true);
                contadorloss = game.add
                  .image(360, 520, "bolverme")
                  .setInteractive();
                contadorloss.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverme")
                  .setInteractive();
                bolicinza2.setVisible(true);
              } else if (decisao.ganhador === "onelossonewinoneloss") {
                contadorloss = game.add
                  .image(360, 520, "bolverde")
                  .setInteractive();
                contadorloss.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverme")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverme")
                  .setInteractive();
                bolicinza2.setVisible(true);
              }
              newgame.setVisible(true);
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
          } else if (decisao.item === "conhecimento") {
            if (decisao.valor === "primeiro") {
              console.log(decisao.ganhador);
              cartafundo.setVisible(true);
              habilidade.setVisible(false);
              simpatia.setVisible(false);
              conhecimento.setVisible(true);
              altura.setVisible(false);
              idade.setVisible(false);
              placarTexto.setVisible(false);
              vencedor.setVisible(true);
              textven = carta.name + " GANHOU";
              vencedor.setText(textven);
              if (decisao.ganhador === "treewin") {
                contadordepartida = game.add
                  .image(360, 520, "bolverde")
                  .setInteractive();
                contadordepartida.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverde")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverde")
                  .setInteractive();
                bolicinza2.setVisible(true);
              } else if (decisao.ganhador === "twolossonewin") {
                contadordepartida = game.add
                  .image(360, 520, "bolverme")
                  .setInteractive();
                contadordepartida.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverme")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverde")
                  .setInteractive();
                bolicinza2.setVisible(true);
              } else if (decisao.ganhador === "onelosstwowin") {
                contadordepartida = game.add
                  .image(360, 520, "bolverde")
                  .setInteractive();
                contadordepartida.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverme")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverde")
                  .setInteractive();
                bolicinza2.setVisible(true);
              } else if (decisao.ganhador === "onewinonelossonewin") {
                contadordepartida2 = game.add
                  .image(360, 520, "bolverme")
                  .setInteractive();
                contadordepartida2.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverde")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverde")
                  .setInteractive();
                bolicinza2.setVisible(true);
              }
              imagembloqueio.setVisible(false);
              newgame.setVisible(true);
            } else if (decisao.valor === "segundo") {
              console.log(decisao.ganhador);
              cartafundo.setVisible(true);
              habilidade.setVisible(false);
              simpatia.setVisible(false);
              conhecimento.setVisible(true);
              altura.setVisible(false);
              idade.setVisible(false);
              placarTexto.setVisible(false);
              vencedor.setVisible(true);
              textven = carta.name + " PERDEU";
              vencedor.setText(textven);
              if (decisao.ganhador === "treeloss") {
                contadorloss = game.add
                  .image(360, 520, "bolverme")
                  .setInteractive();
                contadorloss.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverme")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverme")
                  .setInteractive();
                bolicinza2.setVisible(true);
              } else if (decisao.ganhador === "twowinoneloss") {
                contadorloss = game.add
                  .image(360, 520, "bolverde")
                  .setInteractive();
                contadorloss.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverde")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverme")
                  .setInteractive();
                bolicinza2.setVisible(true);
              } else if (decisao.ganhador === "onewintwoloss") {
                contadorloss = game.add
                  .image(360, 520, "bolverme")
                  .setInteractive();
                contadorloss.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverde")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverme")
                  .setInteractive();
                bolicinza2.setVisible(true);
              } else if (decisao.ganhador === "onelossonewinoneloss") {
                contadorloss = game.add
                  .image(360, 520, "bolverde")
                  .setInteractive();
                contadorloss.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverme")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverme")
                  .setInteractive();
                bolicinza2.setVisible(true);
              }

              newgame.setVisible(true);
            } else {
              cartafundo.setVisible(true);
              habilidade.setVisible(false);
              simpatia.setVisible(false);
              conhecimento.setVisible(true);
              altura.setVisible(false);
              idade.setVisible(false);
              placarTexto.setVisible(false);
              vencedor.setVisible(true);
              textven = "EMPATE";
              vencedor.setText(textven);
              contadordepartida.setVisible(true);
              newgame.setVisible(true);
            }
          } else if (decisao.item === "altura") {
            if (decisao.valor === "primeiro") {
              cartafundo.setVisible(true);
              habilidade.setVisible(false);
              simpatia.setVisible(false);
              conhecimento.setVisible(false);
              altura.setVisible(true);
              idade.setVisible(false);
              placarTexto.setVisible(false);
              vencedor.setVisible(true);
              textven = carta.name + " GANHOU";
              vencedor.setText(textven);
              if (decisao.ganhador === "treewin") {
                contadordepartida = game.add
                  .image(360, 520, "bolverde")
                  .setInteractive();
                contadordepartida.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverde")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverde")
                  .setInteractive();
                bolicinza2.setVisible(true);
              } else if (decisao.ganhador === "twolossonewin") {
                contadordepartida = game.add
                  .image(360, 520, "bolverme")
                  .setInteractive();
                contadordepartida.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverme")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverde")
                  .setInteractive();
                bolicinza2.setVisible(true);
              } else if (decisao.ganhador === "onelosstwowin") {
                contadordepartida = game.add
                  .image(360, 520, "bolverde")
                  .setInteractive();
                contadordepartida.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverme")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverde")
                  .setInteractive();
                bolicinza2.setVisible(true);
              } else if (decisao.ganhador === "onewinonelossonewin") {
                contadordepartida2 = game.add
                  .image(360, 520, "bolverme")
                  .setInteractive();
                contadordepartida2.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverde")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverde")
                  .setInteractive();
                bolicinza2.setVisible(true);
              }
              imagembloqueio.setVisible(false);
              newgame.setVisible(true);
            } else if (decisao.valor === "segundo") {
              cartafundo.setVisible(true);
              habilidade.setVisible(false);
              simpatia.setVisible(false);
              conhecimento.setVisible(false);
              altura.setVisible(true);
              idade.setVisible(false);
              placarTexto.setVisible(false);
              vencedor.setVisible(true);
              textven = carta.name + " PERDEU";
              vencedor.setText(textven);
              if (decisao.ganhador === "treeloss") {
                contadorloss = game.add
                  .image(360, 520, "bolverme")
                  .setInteractive();
                contadorloss.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverme")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverme")
                  .setInteractive();
                bolicinza2.setVisible(true);
              } else if (decisao.ganhador === "twowinoneloss") {
                contadorloss = game.add
                  .image(360, 520, "bolverde")
                  .setInteractive();
                contadorloss.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverde")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverme")
                  .setInteractive();
                bolicinza2.setVisible(true);
              } else if (decisao.ganhador === "onewintwoloss") {
                contadorloss = game.add
                  .image(360, 520, "bolverme")
                  .setInteractive();
                contadorloss.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverde")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverme")
                  .setInteractive();
                bolicinza2.setVisible(true);
              } else if (decisao.ganhador === "onelossonewinoneloss") {
                contadorloss = game.add
                  .image(360, 520, "bolverde")
                  .setInteractive();
                contadorloss.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverme")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverme")
                  .setInteractive();
                bolicinza2.setVisible(true);
              }
              newgame.setVisible(true);
            } else {
              cartafundo.setVisible(true);
              habilidade.setVisible(false);
              simpatia.setVisible(false);
              conhecimento.setVisible(false);
              altura.setVisible(true);
              idade.setVisible(false);
              placarTexto.setVisible(false);
              vencedor.setVisible(true);
              textven = "EMPATE";
              vencedor.setText(textven);
              contadordepartida.setVisible(true);
              newgame.setVisible(true);
            }
          } else if (decisao.item === "idade") {
            if (decisao.valor === "primeiro") {
              cartafundo.setVisible(true);
              habilidade.setVisible(false);
              simpatia.setVisible(false);
              conhecimento.setVisible(false);
              altura.setVisible(false);
              idade.setVisible(true);
              placarTexto.setVisible(false);
              vencedor.setVisible(true);
              textven = carta.name + " GANHOU";
              vencedor.setText(textven);
              if (decisao.ganhador === "treewin") {
                contadordepartida = game.add
                  .image(360, 520, "bolverde")
                  .setInteractive();
                contadordepartida.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverde")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverde")
                  .setInteractive();
                bolicinza2.setVisible(true);
              } else if (decisao.ganhador === "twolossonewin") {
                contadordepartida = game.add
                  .image(360, 520, "bolverme")
                  .setInteractive();
                contadordepartida.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverme")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverde")
                  .setInteractive();
                bolicinza2.setVisible(true);
              } else if (decisao.ganhador === "onelosstwowin") {
                contadordepartida = game.add
                  .image(360, 520, "bolverde")
                  .setInteractive();
                contadordepartida.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverme")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverde")
                  .setInteractive();
                bolicinza2.setVisible(true);
              } else if (decisao.ganhador === "onewinonelossonewin") {
                contadordepartida2 = game.add
                  .image(360, 520, "bolverme")
                  .setInteractive();
                contadordepartida2.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverde")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverde")
                  .setInteractive();
                bolicinza2.setVisible(true);
              }
              imagembloqueio.setVisible(false);
              newgame.setVisible(true);
            } else if (decisao.valor === "segundo") {
              cartafundo.setVisible(true);
              habilidade.setVisible(false);
              simpatia.setVisible(false);
              conhecimento.setVisible(false);
              altura.setVisible(false);
              idade.setVisible(true);
              placarTexto.setVisible(false);
              vencedor.setVisible(true);
              textven = carta.name + " PERDEU";
              vencedor.setText(textven);
              if (decisao.ganhador === "treeloss") {
                contadorloss = game.add
                  .image(360, 520, "bolverme")
                  .setInteractive();
                contadorloss.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverme")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverme")
                  .setInteractive();
                bolicinza2.setVisible(true);
              } else if (decisao.ganhador === "twowinoneloss") {
                contadorloss = game.add
                  .image(360, 520, "bolverde")
                  .setInteractive();
                contadorloss.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverde")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverme")
                  .setInteractive();
                bolicinza2.setVisible(true);
              } else if (decisao.ganhador === "onewintwoloss") {
                contadorloss = game.add
                  .image(360, 520, "bolverme")
                  .setInteractive();
                contadorloss.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverde")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverme")
                  .setInteractive();
                bolicinza2.setVisible(true);
              } else if (decisao.ganhador === "onelossonewinoneloss") {
                contadorloss = game.add
                  .image(360, 520, "bolverde")
                  .setInteractive();
                contadorloss.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverme")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverme")
                  .setInteractive();
                bolicinza2.setVisible(true);
              }
              newgame.setVisible(true);
            } else {
              cartafundo.setVisible(true);
              habilidade.setVisible(false);
              simpatia.setVisible(false);
              conhecimento.setVisible(false);
              altura.setVisible(false);
              idade.setVisible(true);
              placarTexto.setVisible(false);
              vencedor.setVisible(true);
              textven = "EMPATE";
              vencedor.setText(textven);
              contadordepartida.setVisible(true);
              newgame.setVisible(true);
            }
          }
        }
        contage = decisao.ganhador;
      });
    } else if (contagem === 4) {
      cartafundo = game.add.image(400, 301, carta.fundo).setInteractive();
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
      contadordepartida.setVisible(false);
      bolicinza.setVisible(false);
      bolicinza2.setVisible(false);
      bolicinza3.setVisible(false);
      bolicinza4.setVisible(false);

      vencedor.setVisible(false);
      if (jogador === 1) {
        imagembloqueio = game.add
          .image(400, 301, "fundograde")
          .setInteractive();
      }

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
        imagembloqueio.setVisible(false);
        newgame.setVisible(false);
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
        imagembloqueio.setVisible(false);
        newgame.setVisible(false);
      });

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
        imagembloqueio.setVisible(false);
        newgame.setVisible(false);
      });

      altura.on("pointerdown", function () {
        socket.emit("escolha", {
          item: "altura",
          valor: carta.altura.valor,
          cartanome: carta.name,
        });
        cartafundo.setVisible(true);
        habilidade.setVisible(false);
        simpatia.setVisible(false);
        conhecimento.setVisible(false);
        altura.setVisible(true);
        idade.setVisible(false);
        imagembloqueio.setVisible(false);
        newgame.setVisible(false);
      });

      idade.on("pointerdown", function () {
        socket.emit("escolha", {
          item: "idade",
          valor: carta.idade.valor,
          cartanome: carta.name,
        });
        cartafundo.setVisible(true);
        habilidade.setVisible(false);
        simpatia.setVisible(false);
        conhecimento.setVisible(false);
        altura.setVisible(false);
        idade.setVisible(true);
        imagembloqueio.setVisible(false);
        newgame.setVisible(false);
      });

      socket.on("escolha", (escolha) => {
        if (escolha.item === "habilidade") {
          cartafundo.setVisible(true);
          habilidade.setVisible(true);
          simpatia.setVisible(false);
          conhecimento.setVisible(false);
          altura.setVisible(false);
          idade.setVisible(false);
          imagembloqueio.setVisible(false);
          newgame.setVisible(false);
          //   player2         player1
          if (escolha.valor > carta.habilidade.valor) {
            console.log(escolha);
            placarTexto.setVisible(false);
            vencedor.setVisible(true);
            textven = carta.name + " PERDEU";
            vencedor.setText(textven);
            if (contage === "onelosstwowin") {
              ganhador1 = "onewintwolossonewin";
              contadorloss = game.add
                .image(360, 520, "bolverde")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverde")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza3 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza3.setVisible(true);
            } else if (contage === "treewin") {
              ganhador1 = "treelossonewin";
              contadorloss = game.add
                .image(360, 520, "bolverde")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverde").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverde")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza3 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza3.setVisible(true);
            } else if (contage === "twolossonewin") {
              ganhador1 = "twowinonelossonewin";
              contadordepartida2 = game.add
                .image(320, 520, "bolverme")
                .setInteractive();
              contadordepartida2.setVisible(true);
              bolicinza = game.add.image(360, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverde")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza3 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza3.setVisible(true);
            } else if (contage === "onewinonelossonewin") {
              ganhador1 = "onelossonewinonelossonewin";
              contadordepartida = game.add
                .image(360, 520, "bolverme")
                .setInteractive();
              contadordepartida.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverde").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverde")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza3 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza3.setVisible(true);
            } else if (contage === "treeloss") {
              ganhador1 = "fourwin";
              contadordepartida = game.add
                .image(360, 520, "bolverme")
                .setInteractive();
              contadordepartida.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverme")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza3 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza3.setVisible(true);
            } else if (contage === "onewintwoloss") {
              ganhador1 = "onelosstreewin";
              contadordepartida = game.add
                .image(360, 520, "bolverme")
                .setInteractive();
              contadordepartida.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverde").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverme")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza3 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza3.setVisible(true);
            } else if (contage === "twowinoneloss") {
              ganhador1 = "twolosstwowin";
              contadordepartida = game.add
                .image(360, 520, "bolverde")
                .setInteractive();
              contadordepartida.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverde").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverme")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza3 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza3.setVisible(true);
            } else if (contage === "onelossonewinoneloss") {
              ganhador1 = "onewinonelosstwowin";
              contadordepartida = game.add
                .image(360, 520, "bolverde")
                .setInteractive();
              contadordepartida.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverme")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza2 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza2.setVisible(true);
            }
            newgame.setVisible(true);

            socket.emit("decisao", {
              item: "habilidade",
              valor: "primeiro",
              carta: carta.nome,
              ganhador: ganhador1,
            }); //         player2     player1
          } else if (escolha.valor < carta.habilidade.valor) {
            console.log(contage);
            placarTexto.setVisible(false);
            vencedor.setVisible(true);
            textven = carta.name + " GANHOU";
            vencedor.setText(textven);
            if (contage === "twolossonewin") {
              ganhador2 = "twowintwoloss";
              contadordepartida = game.add
                .image(360, 520, "bolverme")
                .setInteractive();
              contadordepartida.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverde")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza3 = game.add
                .image(440, 520, "bolverde")
                .setInteractive();
              bolicinza3.setVisible(true);
            } else if (contage === "onelossonewinoneloss") {
              ganhador2 = "onewinonelossonewinoneloss";
              contadorloss = game.add
                .image(360, 520, "bolverde")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverme")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza3 = game.add
                .image(440, 520, "bolverde")
                .setInteractive();
              bolicinza3.setVisible(true);
            } else if (contage === "treeloss") {
              ganhador2 = "treewinoneloss";
              contadordepartida = game.add
                .image(360, 520, "bolverme")
                .setInteractive();
              contadordepartida.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverme")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza3 = game.add
                .image(440, 520, "bolverde")
                .setInteractive();
              bolicinza3.setVisible(true);
            } else if (contage === "twowinoneloss") {
              ganhador2 = "twolossonewinoneloss";
              contadorloss = game.add
                .image(360, 520, "bolverde")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverde").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverme")
                .setInteractive();
              bolicinza3 = game.add
                .image(440, 520, "bolverde")
                .setInteractive();
              bolicinza3.setVisible(true);
            } else if (contage === "onelosstwowin") {
              ganhador2 = "onewintreeloss";
              contadorloss = game.add
                .image(360, 520, "bolverde")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverde")
                .setInteractive();
              bolicinza3 = game.add
                .image(440, 520, "bolverde")
                .setInteractive();
              bolicinza3.setVisible(true);
            } else if (contage === "treewin") {
              ganhador2 = "fourloss";
              contadorloss = game.add
                .image(360, 520, "bolverde")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverde").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverde")
                .setInteractive();
              bolicinza3 = game.add
                .image(440, 520, "bolverde")
                .setInteractive();
              bolicinza3.setVisible(true);
            } else if (contage === "onewinonelossonewin") {
              ganhador2 = "onelossonewintwoloss";
              contadorloss = game.add
                .image(360, 520, "bolverme")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverde").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverde")
                .setInteractive();
              bolicinza3 = game.add
                .image(440, 520, "bolverde")
                .setInteractive();
              bolicinza3.setVisible(true);
            } else if (contage === "onewintwoloss") {
              ganhador2 = "onelosstwowinoneloss";
              contadorloss = game.add
                .image(360, 520, "bolverme")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverde").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverme")
                .setInteractive();
              bolicinza3 = game.add
                .image(440, 520, "bolverde")
                .setInteractive();
              bolicinza3.setVisible(true);
            }
            newgame.setVisible(true);
            socket.emit("decisao", {
              item: "habilidade",
              valor: "segundo",
              carta: carta.nome,
              ganhador: ganhador2,
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
          imagembloqueio.setVisible(false);
          if (escolha.valor > carta.simpatia.valor) {
            console.log(contage);
            placarTexto.setVisible(false);
            vencedor.setVisible(true);
            textven = carta.name + " PERDEU";
            vencedor.setText(textven);
            if (contage === "onelosstwowin") {
              ganhador1 = "onewintwolossonewin";
              contadorloss = game.add
                .image(360, 520, "bolverde")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverde")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza3 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza3.setVisible(true);
            } else if (contage === "treewin") {
              ganhador1 = "treelossonewin";
              contadorloss = game.add
                .image(360, 520, "bolverde")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverde").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverde")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza3 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza3.setVisible(true);
            } else if (contage === "twolossonewin") {
              ganhador1 = "twowinonelossonewin";
              contadordepartida2 = game.add
                .image(320, 520, "bolverme")
                .setInteractive();
              contadordepartida2.setVisible(true);
              bolicinza = game.add.image(360, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverde")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza3 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza3.setVisible(true);
            } else if (contage === "onewinonelossonewin") {
              ganhador1 = "onelossonewinonelossonewin";
              contadordepartida = game.add
                .image(360, 520, "bolverme")
                .setInteractive();
              contadordepartida.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverde").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverde")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza3 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza3.setVisible(true);
            } else if (contage === "treeloss") {
              ganhador1 = "fourwin";
              contadordepartida = game.add
                .image(360, 520, "bolverme")
                .setInteractive();
              contadordepartida.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverme")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza3 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza3.setVisible(true);
            } else if (contage === "onewintwoloss") {
              ganhador1 = "onelosstreewin";
              contadordepartida = game.add
                .image(360, 520, "bolverme")
                .setInteractive();
              contadordepartida.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverde").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverme")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza3 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza3.setVisible(true);
            } else if (contage === "twowinoneloss") {
              ganhador1 = "twolosstwowin";
              contadordepartida = game.add
                .image(360, 520, "bolverde")
                .setInteractive();
              contadordepartida.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverde").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverme")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza3 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza3.setVisible(true);
            } else if (contage === "onelossonewinoneloss") {
              ganhador1 = "onewinonelosstwowin";
              contadordepartida = game.add
                .image(360, 520, "bolverde")
                .setInteractive();
              contadordepartida.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverme")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza2 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza2.setVisible(true);
            }
            newgame.setVisible(true);
            socket.emit("decisao", {
              item: "simpatia",
              valor: "primeiro",
              carta: carta.nome,
              ganhador: ganhador1,
            });
          } else if (escolha.valor < carta.simpatia.valor) {
            console.log(contage);
            placarTexto.setVisible(false);
            vencedor.setVisible(true);
            textven = carta.name + " GANHOU";
            vencedor.setText(textven);
            if (contage === "twolossonewin") {
              ganhador2 = "twowintwoloss";
              contadordepartida = game.add
                .image(360, 520, "bolverme")
                .setInteractive();
              contadordepartida.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverde")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza3 = game.add
                .image(440, 520, "bolverde")
                .setInteractive();
              bolicinza3.setVisible(true);
            } else if (contage === "onelossonewinoneloss") {
              ganhador2 = "onewinonelossonewinoneloss";
              contadorloss = game.add
                .image(360, 520, "bolverde")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverme")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza3 = game.add
                .image(440, 520, "bolverde")
                .setInteractive();
              bolicinza3.setVisible(true);
            } else if (contage === "treeloss") {
              ganhador2 = "treewinoneloss";
              contadordepartida = game.add
                .image(360, 520, "bolverme")
                .setInteractive();
              contadordepartida.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverme")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza3 = game.add
                .image(440, 520, "bolverde")
                .setInteractive();
              bolicinza3.setVisible(true);
            } else if (contage === "twowinoneloss") {
              ganhador2 = "twolossonewinoneloss";
              contadorloss = game.add
                .image(360, 520, "bolverde")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverde").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverme")
                .setInteractive();
              bolicinza3 = game.add
                .image(440, 520, "bolverde")
                .setInteractive();
              bolicinza3.setVisible(true);
            } else if (contage === "onelosstwowin") {
              ganhador2 = "onewintreeloss";
              contadorloss = game.add
                .image(360, 520, "bolverde")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverde")
                .setInteractive();
              bolicinza3 = game.add
                .image(440, 520, "bolverde")
                .setInteractive();
              bolicinza3.setVisible(true);
            } else if (contage === "treewin") {
              ganhador2 = "fourloss";
              contadorloss = game.add
                .image(360, 520, "bolverde")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverde").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverde")
                .setInteractive();
              bolicinza3 = game.add
                .image(440, 520, "bolverde")
                .setInteractive();
              bolicinza3.setVisible(true);
            } else if (contage === "onewinonelossonewin") {
              ganhador2 = "onelossonewintwoloss";
              contadorloss = game.add
                .image(360, 520, "bolverme")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverde").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverde")
                .setInteractive();
              bolicinza3 = game.add
                .image(440, 520, "bolverde")
                .setInteractive();
              bolicinza3.setVisible(true);
            } else if (contage === "onewintwoloss") {
              ganhador2 = "onelosstwowinoneloss";
              contadorloss = game.add
                .image(360, 520, "bolverme")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverde").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverme")
                .setInteractive();
              bolicinza3 = game.add
                .image(440, 520, "bolverde")
                .setInteractive();
              bolicinza3.setVisible(true);
            }
            newgame.setVisible(true);
            socket.emit("decisao", {
              item: "simpatia",
              valor: "segundo",
              carta: carta.nome,
              ganhador: ganhador2,
            });
          } else {
            placarTexto.setVisible(false);
            vencedor.setVisible(true);
            textven = "EMPATE";
            vencedor.setText(textven);
            contadordepartida.setVisible(true);
            newgame.setVisible(true);
            bolicinza.setVisible(true);
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
          imagembloqueio.setVisible(false);
          newgame.setVisible(false);
          //      player1       player2
          if (escolha.valor > carta.conhecimento.valor) {
            console.log(contage);
            placarTexto.setVisible(false);
            vencedor.setVisible(true);
            textven = carta.name + " PERDEU";
            vencedor.setText(textven);
            if (contage === "onelosstwowin") {
              ganhador1 = "onewintwolossonewin";
              contadorloss = game.add
                .image(360, 520, "bolverde")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverde")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza3 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza3.setVisible(true);
            } else if (contage === "treewin") {
              ganhador1 = "treelossonewin";
              contadorloss = game.add
                .image(360, 520, "bolverde")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverde").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverde")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza3 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza3.setVisible(true);
            } else if (contage === "twolossonewin") {
              ganhador1 = "twowinonelossonewin";
              contadordepartida2 = game.add
                .image(320, 520, "bolverme")
                .setInteractive();
              contadordepartida2.setVisible(true);
              bolicinza = game.add.image(360, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverde")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza3 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza3.setVisible(true);
            } else if (contage === "onewinonelossonewin") {
              ganhador1 = "onelossonewinonelossonewin";
              contadordepartida = game.add
                .image(360, 520, "bolverme")
                .setInteractive();
              contadordepartida.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverde").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverde")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza3 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza3.setVisible(true);
            } else if (contage === "treeloss") {
              ganhador1 = "fourwin";
              contadordepartida = game.add
                .image(360, 520, "bolverme")
                .setInteractive();
              contadordepartida.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverme")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza3 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza3.setVisible(true);
            } else if (contage === "onewintwoloss") {
              ganhador1 = "onelosstreewin";
              contadordepartida = game.add
                .image(360, 520, "bolverme")
                .setInteractive();
              contadordepartida.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverde").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverme")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza3 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza3.setVisible(true);
            } else if (contage === "twowinoneloss") {
              ganhador1 = "twolosstwowin";
              contadordepartida = game.add
                .image(360, 520, "bolverde")
                .setInteractive();
              contadordepartida.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverde").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverme")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza3 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza3.setVisible(true);
            } else if (contage === "onelossonewinoneloss") {
              ganhador1 = "onewinonelosstwowin";
              contadordepartida = game.add
                .image(360, 520, "bolverde")
                .setInteractive();
              contadordepartida.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverme")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza2 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza2.setVisible(true);
            }

            newgame.setVisible(true);

            socket.emit("decisao", {
              item: "conhecimento",
              valor: "primeiro",
              carta: carta.nome,
              ganhador: ganhador1,
            });
          } else if (escolha.valor < carta.conhecimento.valor) {
            console.log(contage);
            placarTexto.setVisible(false);
            vencedor.setVisible(true);
            textven = carta.name + " GANHOU";
            vencedor.setText(textven);
            if (contage === "twolossonewin") {
              ganhador2 = "twowintwoloss";
              contadordepartida = game.add
                .image(360, 520, "bolverme")
                .setInteractive();
              contadordepartida.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverde")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza3 = game.add
                .image(440, 520, "bolverde")
                .setInteractive();
              bolicinza3.setVisible(true);
            } else if (contage === "onelossonewinoneloss") {
              ganhador2 = "onewinonelossonewinoneloss";
              contadorloss = game.add
                .image(360, 520, "bolverde")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverme")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza3 = game.add
                .image(440, 520, "bolverde")
                .setInteractive();
              bolicinza3.setVisible(true);
            } else if (contage === "treeloss") {
              ganhador2 = "treewinoneloss";
              contadordepartida = game.add
                .image(360, 520, "bolverme")
                .setInteractive();
              contadordepartida.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverme")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza3 = game.add
                .image(440, 520, "bolverde")
                .setInteractive();
              bolicinza3.setVisible(true);
            } else if (contage === "twowinoneloss") {
              ganhador2 = "twolossonewinoneloss";
              contadorloss = game.add
                .image(360, 520, "bolverde")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverde").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverme")
                .setInteractive();
              bolicinza3 = game.add
                .image(440, 520, "bolverde")
                .setInteractive();
              bolicinza3.setVisible(true);
            } else if (contage === "onelosstwowin") {
              ganhador2 = "onewintreeloss";
              contadorloss = game.add
                .image(360, 520, "bolverde")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverde")
                .setInteractive();
              bolicinza3 = game.add
                .image(440, 520, "bolverde")
                .setInteractive();
              bolicinza3.setVisible(true);
            } else if (contage === "treewin") {
              ganhador2 = "fourloss";
              contadorloss = game.add
                .image(360, 520, "bolverde")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverde").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverde")
                .setInteractive();
              bolicinza3 = game.add
                .image(440, 520, "bolverde")
                .setInteractive();
              bolicinza3.setVisible(true);
            } else if (contage === "onewinonelossonewin") {
              ganhador2 = "onelossonewintwoloss";
              contadorloss = game.add
                .image(360, 520, "bolverme")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverde").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverde")
                .setInteractive();
              bolicinza3 = game.add
                .image(440, 520, "bolverde")
                .setInteractive();
              bolicinza3.setVisible(true);
            } else if (contage === "onewintwoloss") {
              ganhador2 = "onelosstwowinoneloss";
              contadorloss = game.add
                .image(360, 520, "bolverme")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverde").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverme")
                .setInteractive();
              bolicinza3 = game.add
                .image(440, 520, "bolverde")
                .setInteractive();
              bolicinza3.setVisible(true);
            }
            newgame.setVisible(true);

            socket.emit("decisao", {
              item: "conhecimento",
              valor: "segundo",
              carta: carta.nome,
              ganhador: ganhador2,
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
        } else if (escolha.item === "altura") {
          cartafundo.setVisible(true);
          habilidade.setVisible(false);
          simpatia.setVisible(false);
          conhecimento.setVisible(false);
          altura.setVisible(true);
          idade.setVisible(false);
          imagembloqueio.setVisible(false);
          newgame.setVisible(false);
          if (escolha.valor > carta.altura.valor) {
            placarTexto.setVisible(false);
            vencedor.setVisible(true);
            textven = carta.name + " PERDEU";
            vencedor.setText(textven);
            if (contage === "onelosstwowin") {
              ganhador1 = "onewintwolossonewin";
              contadorloss = game.add
                .image(360, 520, "bolverde")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverde")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza3 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza3.setVisible(true);
            } else if (contage === "treewin") {
              ganhador1 = "treelossonewin";
              contadorloss = game.add
                .image(360, 520, "bolverde")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverde").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverde")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza3 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza3.setVisible(true);
            } else if (contage === "twolossonewin") {
              ganhador1 = "twowinonelossonewin";
              contadordepartida2 = game.add
                .image(320, 520, "bolverme")
                .setInteractive();
              contadordepartida2.setVisible(true);
              bolicinza = game.add.image(360, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverde")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza3 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza3.setVisible(true);
            } else if (contage === "onewinonelossonewin") {
              ganhador1 = "onelossonewinonelossonewin";
              contadordepartida = game.add
                .image(360, 520, "bolverme")
                .setInteractive();
              contadordepartida.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverde").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverde")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza3 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza3.setVisible(true);
            } else if (contage === "treeloss") {
              ganhador1 = "fourwin";
              contadordepartida = game.add
                .image(360, 520, "bolverme")
                .setInteractive();
              contadordepartida.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverme")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza3 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza3.setVisible(true);
            } else if (contage === "onewintwoloss") {
              ganhador1 = "onelosstreewin";
              contadordepartida = game.add
                .image(360, 520, "bolverme")
                .setInteractive();
              contadordepartida.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverde").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverme")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza3 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza3.setVisible(true);
            } else if (contage === "twowinoneloss") {
              ganhador1 = "twolosstwowin";
              contadordepartida = game.add
                .image(360, 520, "bolverde")
                .setInteractive();
              contadordepartida.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverde").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverme")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza3 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza3.setVisible(true);
            } else if (contage === "onelossonewinoneloss") {
              ganhador1 = "onewinonelosstwowin";
              contadordepartida = game.add
                .image(360, 520, "bolverde")
                .setInteractive();
              contadordepartida.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverme")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza2 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza2.setVisible(true);
            }
            newgame.setVisible(true);

            socket.emit("decisao", {
              item: "altura",
              valor: "primeiro",
              carta: carta.nome,
              ganhador: ganhador1,
            });
          } else if (escolha.valor < carta.altura.valor) {
            placarTexto.setVisible(false);
            vencedor.setVisible(true);
            textven = carta.name + " GANHOU";
            vencedor.setText(textven);
            if (contage === "twolossonewin") {
              ganhador2 = "twowintwoloss";
              contadordepartida = game.add
                .image(360, 520, "bolverme")
                .setInteractive();
              contadordepartida.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverde")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza3 = game.add
                .image(440, 520, "bolverde")
                .setInteractive();
              bolicinza3.setVisible(true);
            } else if (contage === "onelossonewinoneloss") {
              ganhador2 = "onewinonelossonewinoneloss";
              contadorloss = game.add
                .image(360, 520, "bolverde")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverme")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza3 = game.add
                .image(440, 520, "bolverde")
                .setInteractive();
              bolicinza3.setVisible(true);
            } else if (contage === "treeloss") {
              ganhador2 = "treewinoneloss";
              contadordepartida = game.add
                .image(360, 520, "bolverme")
                .setInteractive();
              contadordepartida.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverme")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza3 = game.add
                .image(440, 520, "bolverde")
                .setInteractive();
              bolicinza3.setVisible(true);
            } else if (contage === "twowinoneloss") {
              ganhador2 = "twolossonewinoneloss";
              contadorloss = game.add
                .image(360, 520, "bolverde")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverde").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverme")
                .setInteractive();
              bolicinza3 = game.add
                .image(440, 520, "bolverde")
                .setInteractive();
              bolicinza3.setVisible(true);
            } else if (contage === "onelosstwowin") {
              ganhador2 = "onewintreeloss";
              contadorloss = game.add
                .image(360, 520, "bolverde")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverde")
                .setInteractive();
              bolicinza3 = game.add
                .image(440, 520, "bolverde")
                .setInteractive();
              bolicinza3.setVisible(true);
            } else if (contage === "treewin") {
              ganhador2 = "fourloss";
              contadorloss = game.add
                .image(360, 520, "bolverde")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverde").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverde")
                .setInteractive();
              bolicinza3 = game.add
                .image(440, 520, "bolverde")
                .setInteractive();
              bolicinza3.setVisible(true);
            } else if (contage === "onewinonelossonewin") {
              ganhador2 = "onelossonewintwoloss";
              contadorloss = game.add
                .image(360, 520, "bolverme")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverde").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverde")
                .setInteractive();
              bolicinza3 = game.add
                .image(440, 520, "bolverde")
                .setInteractive();
              bolicinza3.setVisible(true);
            } else if (contage === "onewintwoloss") {
              ganhador2 = "onelosstwowinoneloss";
              contadorloss = game.add
                .image(360, 520, "bolverme")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverde").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverme")
                .setInteractive();
              bolicinza3 = game.add
                .image(440, 520, "bolverde")
                .setInteractive();
              bolicinza3.setVisible(true);
            }
            newgame.setVisible(true);
            socket.emit("decisao", {
              item: "altura",
              valor: "segundo",
              carta: carta.nome,
              ganhador: ganhador2,
            });
          } else {
            placarTexto.setVisible(false);
            vencedor.setVisible(true);
            textven = "EMPATE";
            vencedor.setText(textven);
            contadordepartida.setVisible(true);
            newgame.setVisible(true);
            socket.emit("decisao", {
              item: "altura",
              valor: "empate",
              carta: carta.nome,
            });
          }
          console.log(carta);
        } else if (escolha.item === "idade") {
          cartafundo.setVisible(true);
          habilidade.setVisible(false);
          simpatia.setVisible(false);
          conhecimento.setVisible(false);
          altura.setVisible(false);
          idade.setVisible(true);
          imagembloqueio.setVisible(false);
          newgame.setVisible(false);
          if (escolha.valor > carta.idade.valor) {
            placarTexto.setVisible(false);
            vencedor.setVisible(true);
            textven = carta.name + " PERDEU";
            vencedor.setText(textven);
            if (contage === "onelosstwowin") {
              ganhador1 = "onewintwolossonewin";
              contadorloss = game.add
                .image(360, 520, "bolverde")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverde")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza3 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza3.setVisible(true);
            } else if (contage === "treewin") {
              ganhador1 = "treelossonewin";
              contadorloss = game.add
                .image(360, 520, "bolverde")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverde").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverde")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza3 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza3.setVisible(true);
            } else if (contage === "twolossonewin") {
              ganhador1 = "twowinonelossonewin";
              contadordepartida2 = game.add
                .image(320, 520, "bolverme")
                .setInteractive();
              contadordepartida2.setVisible(true);
              bolicinza = game.add.image(360, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverde")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza3 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza3.setVisible(true);
            } else if (contage === "onewinonelossonewin") {
              ganhador1 = "onelossonewinonelossonewin";
              contadordepartida = game.add
                .image(360, 520, "bolverme")
                .setInteractive();
              contadordepartida.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverde").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverde")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza3 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza3.setVisible(true);
            } else if (contage === "treeloss") {
              ganhador1 = "fourwin";
              contadordepartida = game.add
                .image(360, 520, "bolverme")
                .setInteractive();
              contadordepartida.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverme")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza3 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza3.setVisible(true);
            } else if (contage === "onewintwoloss") {
              ganhador1 = "onelosstreewin";
              contadordepartida = game.add
                .image(360, 520, "bolverme")
                .setInteractive();
              contadordepartida.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverde").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverme")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza3 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza3.setVisible(true);
            } else if (contage === "twowinoneloss") {
              ganhador1 = "twolosstwowin";
              contadordepartida = game.add
                .image(360, 520, "bolverde")
                .setInteractive();
              contadordepartida.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverde").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverme")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza3 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza3.setVisible(true);
            } else if (contage === "onelossonewinoneloss") {
              ganhador1 = "onewinonelosstwowin";
              contadordepartida = game.add
                .image(360, 520, "bolverde")
                .setInteractive();
              contadordepartida.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverme")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza2 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza2.setVisible(true);
            }
            newgame.setVisible(true);

            socket.emit("decisao", {
              item: "idade",
              valor: "primeiro",
              carta: carta.nome,
              ganhador: ganhador1,
            });
          } else if (escolha.valor < carta.idade.valor) {
            placarTexto.setVisible(false);
            vencedor.setVisible(true);
            textven = carta.name + " GANHOU";
            vencedor.setText(textven);
            if (contage === "twolossonewin") {
              ganhador2 = "twowintwoloss";
              contadordepartida = game.add
                .image(360, 520, "bolverme")
                .setInteractive();
              contadordepartida.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverde")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza3 = game.add
                .image(440, 520, "bolverde")
                .setInteractive();
              bolicinza3.setVisible(true);
            } else if (contage === "onelossonewinoneloss") {
              ganhador2 = "onewinonelossonewinoneloss";
              contadorloss = game.add
                .image(360, 520, "bolverde")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverme")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza3 = game.add
                .image(440, 520, "bolverde")
                .setInteractive();
              bolicinza3.setVisible(true);
            } else if (contage === "treeloss") {
              ganhador2 = "treewinoneloss";
              contadordepartida = game.add
                .image(360, 520, "bolverme")
                .setInteractive();
              contadordepartida.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverme")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza3 = game.add
                .image(440, 520, "bolverde")
                .setInteractive();
              bolicinza3.setVisible(true);
            } else if (contage === "twowinoneloss") {
              ganhador2 = "twolossonewinoneloss";
              contadorloss = game.add
                .image(360, 520, "bolverde")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverde").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverme")
                .setInteractive();
              bolicinza3 = game.add
                .image(440, 520, "bolverde")
                .setInteractive();
              bolicinza3.setVisible(true);
            } else if (contage === "onelosstwowin") {
              ganhador2 = "onewintreeloss";
              contadorloss = game.add
                .image(360, 520, "bolverde")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverde")
                .setInteractive();
              bolicinza3 = game.add
                .image(440, 520, "bolverde")
                .setInteractive();
              bolicinza3.setVisible(true);
            } else if (contage === "treewin") {
              ganhador2 = "fourloss";
              contadorloss = game.add
                .image(360, 520, "bolverde")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverde").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverde")
                .setInteractive();
              bolicinza3 = game.add
                .image(440, 520, "bolverde")
                .setInteractive();
              bolicinza3.setVisible(true);
            } else if (contage === "onewinonelossonewin") {
              ganhador2 = "onelossonewintwoloss";
              contadorloss = game.add
                .image(360, 520, "bolverme")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverde").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverde")
                .setInteractive();
              bolicinza3 = game.add
                .image(440, 520, "bolverde")
                .setInteractive();
              bolicinza3.setVisible(true);
            } else if (contage === "onewintwoloss") {
              ganhador2 = "onelosstwowinoneloss";
              contadorloss = game.add
                .image(360, 520, "bolverme")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverde").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverme")
                .setInteractive();
              bolicinza3 = game.add
                .image(440, 520, "bolverde")
                .setInteractive();
              bolicinza3.setVisible(true);
            }
            newgame.setVisible(true);
            socket.emit("decisao", {
              item: "idade",
              valor: "segundo",
              carta: carta.nome,
              ganhador: ganhador2,
            });
          } else {
            placarTexto.setVisible(false);
            vencedor.setVisible(true);
            textven = "EMPATE";
            vencedor.setText(textven);
            contadordepartida.setVisible(true);
            newgame.setVisible(true);
            socket.emit("decisao", {
              item: "idade",
              valor: "empate",
              carta: carta.nome,
              ganhador: "nenhum",
            });
          }
          console.log(carta);
        }
      });

      socket.on("decisao", (decisao) => {
        if (jogador === 2) {
          if (decisao.item === "habilidade") {
            if (decisao.valor === "primeiro") {
              console.log(decisao.ganhador);
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
              if (decisao.ganhador === "fourwin") {
                contadordepartida = game.add
                  .image(360, 520, "bolverde")
                  .setInteractive();
                contadordepartida.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverde")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverde")
                  .setInteractive();
                bolicinza2.setVisible(true);
                bolicinza3 = game.add
                  .image(440, 520, "bolverde")
                  .setInteractive();
                bolicinza3.setVisible(true);
              } else if (decisao.ganhador === "twolosstwowin") {
                contadordepartida = game.add
                  .image(360, 520, "bolverme")
                  .setInteractive();
                contadordepartida.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverme")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverde")
                  .setInteractive();
                bolicinza2.setVisible(true);
                bolicinza3 = game.add
                  .image(440, 520, "bolverde")
                  .setInteractive();
                bolicinza3.setVisible(true);
              } else if (decisao.ganhador === "onelosstreewin") {
                contadordepartida = game.add
                  .image(360, 520, "bolverde")
                  .setInteractive();
                contadordepartida.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverme")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverde")
                  .setInteractive();
                bolicinza2.setVisible(true);
                bolicinza3 = game.add
                  .image(440, 520, "bolverde")
                  .setInteractive();
                bolicinza3.setVisible(true);
              } else if (decisao.ganhador === "onewinonelosstwowin") {
                contadordepartida2 = game.add
                  .image(360, 520, "bolverme")
                  .setInteractive();
                contadordepartida2.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverde")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverde")
                  .setInteractive();
                bolicinza2.setVisible(true);
                bolicinza3 = game.add
                  .image(440, 520, "bolverde")
                  .setInteractive();
                bolicinza3.setVisible(true);
              } else if (decisao.ganhador === "treelossonewin") {
                contadordepartida2 = game.add
                  .image(360, 520, "bolverme")
                  .setInteractive();
                contadordepartida2.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverme")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverme")
                  .setInteractive();
                bolicinza2.setVisible(true);
                bolicinza3 = game.add
                  .image(440, 520, "bolverde")
                  .setInteractive();
                bolicinza3.setVisible(true);
              } else if (decisao.ganhador === "onewintwolossonewin") {
                contadordepartida2 = game.add
                  .image(360, 520, "bolverme")
                  .setInteractive();
                contadordepartida2.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverde")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverme")
                  .setInteractive();
                bolicinza2.setVisible(true);
                bolicinza3 = game.add
                  .image(440, 520, "bolverde")
                  .setInteractive();
                bolicinza3.setVisible(true);
              } else if (decisao.ganhador === "twowinonelossonewin") {
                contadordepartida2 = game.add
                  .image(360, 520, "bolverde")
                  .setInteractive();
                contadordepartida2.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverde")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverme")
                  .setInteractive();
                bolicinza2.setVisible(true);
                bolicinza3 = game.add
                  .image(440, 520, "bolverde")
                  .setInteractive();
                bolicinza3.setVisible(true);
              } else if (decisao.ganhador === "onelossonewinonelossonewin") {
                contadordepartida2 = game.add
                  .image(360, 520, "bolverde")
                  .setInteractive();
                contadordepartida2.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverme")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverme")
                  .setInteractive();
                bolicinza2.setVisible(true);
                bolicinza3 = game.add
                  .image(440, 520, "bolverde")
                  .setInteractive();
                bolicinza3.setVisible(true);
              }
              imagembloqueio.setVisible(false);
              newgame.setVisible(true);
            } else if (decisao.valor === "segundo") {
              console.log(decisao.ganhador);
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
              if (decisao.ganhador === "fourloss") {
                contadorloss = game.add
                  .image(360, 520, "bolverme")
                  .setInteractive();
                contadorloss.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverme")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverme")
                  .setInteractive();
                bolicinza2.setVisible(true);
                bolicinza3 = game.add
                  .image(440, 520, "bolverme")
                  .setInteractive();
                bolicinza3.setVisible(true);
              } else if (decisao.ganhador === "twowintwoloss") {
                contadorloss = game.add
                  .image(360, 520, "bolverde")
                  .setInteractive();
                contadorloss.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverde")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverme")
                  .setInteractive();
                bolicinza2.setVisible(true);
                bolicinza3 = game.add
                  .image(440, 520, "bolverme")
                  .setInteractive();
                bolicinza3.setVisible(true);
              } else if (decisao.ganhador === "onewintreeloss") {
                contadorloss = game.add
                  .image(360, 520, "bolverme")
                  .setInteractive();
                contadorloss.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverde")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverme")
                  .setInteractive();
                bolicinza2.setVisible(true);
                bolicinza3 = game.add
                  .image(440, 520, "bolverme")
                  .setInteractive();
                bolicinza3.setVisible(true);
              } else if (decisao.ganhador === "treewinoneloss") {
                contadorloss = game.add
                  .image(360, 520, "bolverde")
                  .setInteractive();
                contadorloss.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverde")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverde")
                  .setInteractive();
                bolicinza2.setVisible(true);
                bolicinza3 = game.add
                  .image(440, 520, "bolverme")
                  .setInteractive();
                bolicinza3.setVisible(true);
              } else if (decisao.ganhador === "onewinonelossonewinoneloss") {
                contadorloss = game.add
                  .image(360, 520, "bolverme")
                  .setInteractive();
                contadorloss.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverde")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverde")
                  .setInteractive();
                bolicinza2.setVisible(true);
                bolicinza3 = game.add
                  .image(440, 520, "bolverme")
                  .setInteractive();
                bolicinza3.setVisible(true);
              } else if (decisao.ganhador === "twolossonewinoneloss") {
                contadorloss = game.add
                  .image(360, 520, "bolverme")
                  .setInteractive();
                contadorloss.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverme")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverde")
                  .setInteractive();
                bolicinza2.setVisible(true);
                bolicinza3 = game.add
                  .image(440, 520, "bolverme")
                  .setInteractive();
                bolicinza3.setVisible(true);
              } else if (decisao.ganhador === "onelosstwowinoneloss") {
                contadorloss = game.add
                  .image(360, 520, "bolverde")
                  .setInteractive();
                contadorloss.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverme")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverde")
                  .setInteractive();
                bolicinza2.setVisible(true);
                bolicinza3 = game.add
                  .image(440, 520, "bolverme")
                  .setInteractive();
                bolicinza3.setVisible(true);
              } else if (decisao.ganhador === "onelossonewintwoloss") {
                contadorloss = game.add
                  .image(360, 520, "bolverde")
                  .setInteractive();
                contadorloss.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverme")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverme")
                  .setInteractive();
                bolicinza2.setVisible(true);
                bolicinza3 = game.add
                  .image(440, 520, "bolverme")
                  .setInteractive();
                bolicinza3.setVisible(true);
              }
              newgame.setVisible(true);
            } else {
              console.log(decisao.ganhador);
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
          } else if (decisao.item === "simpatia") {
            if (decisao.valor === "primeiro") {
              console.log(decisao.ganhador);
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
              if (decisao.ganhador === "fourwin") {
                contadordepartida = game.add
                  .image(360, 520, "bolverde")
                  .setInteractive();
                contadordepartida.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverde")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverde")
                  .setInteractive();
                bolicinza2.setVisible(true);
                bolicinza3 = game.add
                  .image(440, 520, "bolverde")
                  .setInteractive();
                bolicinza3.setVisible(true);
              } else if (decisao.ganhador === "twolosstwowin") {
                contadordepartida = game.add
                  .image(360, 520, "bolverme")
                  .setInteractive();
                contadordepartida.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverme")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverde")
                  .setInteractive();
                bolicinza2.setVisible(true);
                bolicinza3 = game.add
                  .image(440, 520, "bolverde")
                  .setInteractive();
                bolicinza3.setVisible(true);
              } else if (decisao.ganhador === "onelosstreewin") {
                contadordepartida = game.add
                  .image(360, 520, "bolverde")
                  .setInteractive();
                contadordepartida.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverme")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverde")
                  .setInteractive();
                bolicinza2.setVisible(true);
                bolicinza3 = game.add
                  .image(440, 520, "bolverde")
                  .setInteractive();
                bolicinza3.setVisible(true);
              } else if (decisao.ganhador === "onewinonelosstwowin") {
                contadordepartida2 = game.add
                  .image(360, 520, "bolverme")
                  .setInteractive();
                contadordepartida2.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverde")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverde")
                  .setInteractive();
                bolicinza2.setVisible(true);
                bolicinza3 = game.add
                  .image(440, 520, "bolverde")
                  .setInteractive();
                bolicinza3.setVisible(true);
              } else if (decisao.ganhador === "treelossonewin") {
                contadordepartida2 = game.add
                  .image(360, 520, "bolverme")
                  .setInteractive();
                contadordepartida2.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverme")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverme")
                  .setInteractive();
                bolicinza2.setVisible(true);
                bolicinza3 = game.add
                  .image(440, 520, "bolverde")
                  .setInteractive();
                bolicinza3.setVisible(true);
              } else if (decisao.ganhador === "onewintwolossonewin") {
                contadordepartida2 = game.add
                  .image(360, 520, "bolverme")
                  .setInteractive();
                contadordepartida2.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverde")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverme")
                  .setInteractive();
                bolicinza2.setVisible(true);
                bolicinza3 = game.add
                  .image(440, 520, "bolverde")
                  .setInteractive();
                bolicinza3.setVisible(true);
              } else if (decisao.ganhador === "twowinonelossonewin") {
                contadordepartida2 = game.add
                  .image(360, 520, "bolverde")
                  .setInteractive();
                contadordepartida2.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverde")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverme")
                  .setInteractive();
                bolicinza2.setVisible(true);
                bolicinza3 = game.add
                  .image(440, 520, "bolverde")
                  .setInteractive();
                bolicinza3.setVisible(true);
              } else if (decisao.ganhador === "onelossonewinonelossonewin") {
                contadordepartida2 = game.add
                  .image(360, 520, "bolverde")
                  .setInteractive();
                contadordepartida2.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverme")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverme")
                  .setInteractive();
                bolicinza2.setVisible(true);
                bolicinza3 = game.add
                  .image(440, 520, "bolverde")
                  .setInteractive();
                bolicinza3.setVisible(true);
              }
              imagembloqueio.setVisible(false);
              newgame.setVisible(true);
            } else if (decisao.valor === "segundo") {
              console.log(decisao.ganhador);
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
              if (decisao.ganhador === "fourloss") {
                contadorloss = game.add
                  .image(360, 520, "bolverme")
                  .setInteractive();
                contadorloss.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverme")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverme")
                  .setInteractive();
                bolicinza2.setVisible(true);
                bolicinza3 = game.add
                  .image(440, 520, "bolverme")
                  .setInteractive();
                bolicinza3.setVisible(true);
              } else if (decisao.ganhador === "twowintwoloss") {
                contadorloss = game.add
                  .image(360, 520, "bolverde")
                  .setInteractive();
                contadorloss.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverde")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverme")
                  .setInteractive();
                bolicinza2.setVisible(true);
                bolicinza3 = game.add
                  .image(440, 520, "bolverme")
                  .setInteractive();
                bolicinza3.setVisible(true);
              } else if (decisao.ganhador === "onewintreeloss") {
                contadorloss = game.add
                  .image(360, 520, "bolverme")
                  .setInteractive();
                contadorloss.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverde")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverme")
                  .setInteractive();
                bolicinza2.setVisible(true);
                bolicinza3 = game.add
                  .image(440, 520, "bolverme")
                  .setInteractive();
                bolicinza3.setVisible(true);
              } else if (decisao.ganhador === "treewinoneloss") {
                contadorloss = game.add
                  .image(360, 520, "bolverde")
                  .setInteractive();
                contadorloss.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverde")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverde")
                  .setInteractive();
                bolicinza2.setVisible(true);
                bolicinza3 = game.add
                  .image(440, 520, "bolverme")
                  .setInteractive();
                bolicinza3.setVisible(true);
              } else if (decisao.ganhador === "onewinonelossonewinoneloss") {
                contadorloss = game.add
                  .image(360, 520, "bolverme")
                  .setInteractive();
                contadorloss.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverde")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverde")
                  .setInteractive();
                bolicinza2.setVisible(true);
                bolicinza3 = game.add
                  .image(440, 520, "bolverme")
                  .setInteractive();
                bolicinza3.setVisible(true);
              } else if (decisao.ganhador === "twolossonewinoneloss") {
                contadorloss = game.add
                  .image(360, 520, "bolverme")
                  .setInteractive();
                contadorloss.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverme")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverde")
                  .setInteractive();
                bolicinza2.setVisible(true);
                bolicinza3 = game.add
                  .image(440, 520, "bolverme")
                  .setInteractive();
                bolicinza3.setVisible(true);
              } else if (decisao.ganhador === "onelosstwowinoneloss") {
                contadorloss = game.add
                  .image(360, 520, "bolverde")
                  .setInteractive();
                contadorloss.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverme")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverde")
                  .setInteractive();
                bolicinza2.setVisible(true);
                bolicinza3 = game.add
                  .image(440, 520, "bolverme")
                  .setInteractive();
                bolicinza3.setVisible(true);
              } else if (decisao.ganhador === "onelossonewintwoloss") {
                contadorloss = game.add
                  .image(360, 520, "bolverde")
                  .setInteractive();
                contadorloss.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverme")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverme")
                  .setInteractive();
                bolicinza2.setVisible(true);
                bolicinza3 = game.add
                  .image(440, 520, "bolverme")
                  .setInteractive();
                bolicinza3.setVisible(true);
              }
              newgame.setVisible(true);
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
          } else if (decisao.item === "conhecimento") {
            if (decisao.valor === "primeiro") {
              console.log(decisao.ganhador);
              cartafundo.setVisible(true);
              habilidade.setVisible(false);
              simpatia.setVisible(false);
              conhecimento.setVisible(true);
              altura.setVisible(false);
              idade.setVisible(false);
              placarTexto.setVisible(false);
              vencedor.setVisible(true);
              textven = carta.name + " GANHOU";
              vencedor.setText(textven);
              if (decisao.ganhador === "fourwin") {
                contadordepartida = game.add
                  .image(360, 520, "bolverde")
                  .setInteractive();
                contadordepartida.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverde")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverde")
                  .setInteractive();
                bolicinza2.setVisible(true);
                bolicinza3 = game.add
                  .image(440, 520, "bolverde")
                  .setInteractive();
                bolicinza3.setVisible(true);
              } else if (decisao.ganhador === "twolosstwowin") {
                contadordepartida = game.add
                  .image(360, 520, "bolverme")
                  .setInteractive();
                contadordepartida.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverme")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverde")
                  .setInteractive();
                bolicinza2.setVisible(true);
                bolicinza3 = game.add
                  .image(440, 520, "bolverde")
                  .setInteractive();
                bolicinza3.setVisible(true);
              } else if (decisao.ganhador === "onelosstreewin") {
                contadordepartida = game.add
                  .image(360, 520, "bolverde")
                  .setInteractive();
                contadordepartida.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverme")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverde")
                  .setInteractive();
                bolicinza2.setVisible(true);
                bolicinza3 = game.add
                  .image(440, 520, "bolverde")
                  .setInteractive();
                bolicinza3.setVisible(true);
              } else if (decisao.ganhador === "onewinonelosstwowin") {
                contadordepartida2 = game.add
                  .image(360, 520, "bolverme")
                  .setInteractive();
                contadordepartida2.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverde")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverde")
                  .setInteractive();
                bolicinza2.setVisible(true);
                bolicinza3 = game.add
                  .image(440, 520, "bolverde")
                  .setInteractive();
                bolicinza3.setVisible(true);
              } else if (decisao.ganhador === "treelossonewin") {
                contadordepartida2 = game.add
                  .image(360, 520, "bolverme")
                  .setInteractive();
                contadordepartida2.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverme")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverme")
                  .setInteractive();
                bolicinza2.setVisible(true);
                bolicinza3 = game.add
                  .image(440, 520, "bolverde")
                  .setInteractive();
                bolicinza3.setVisible(true);
              } else if (decisao.ganhador === "onewintwolossonewin") {
                contadordepartida2 = game.add
                  .image(360, 520, "bolverme")
                  .setInteractive();
                contadordepartida2.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverde")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverme")
                  .setInteractive();
                bolicinza2.setVisible(true);
                bolicinza3 = game.add
                  .image(440, 520, "bolverde")
                  .setInteractive();
                bolicinza3.setVisible(true);
              } else if (decisao.ganhador === "twowinonelossonewin") {
                contadordepartida2 = game.add
                  .image(360, 520, "bolverde")
                  .setInteractive();
                contadordepartida2.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverde")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverme")
                  .setInteractive();
                bolicinza2.setVisible(true);
                bolicinza3 = game.add
                  .image(440, 520, "bolverde")
                  .setInteractive();
                bolicinza3.setVisible(true);
              } else if (decisao.ganhador === "onelossonewinonelossonewin") {
                contadordepartida2 = game.add
                  .image(360, 520, "bolverde")
                  .setInteractive();
                contadordepartida2.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverme")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverme")
                  .setInteractive();
                bolicinza2.setVisible(true);
                bolicinza3 = game.add
                  .image(440, 520, "bolverde")
                  .setInteractive();
                bolicinza3.setVisible(true);
              }
              imagembloqueio.setVisible(false);
              newgame.setVisible(true);
            } else if (decisao.valor === "segundo") {
              console.log(decisao.ganhador);
              cartafundo.setVisible(true);
              habilidade.setVisible(false);
              simpatia.setVisible(false);
              conhecimento.setVisible(true);
              altura.setVisible(false);
              idade.setVisible(false);
              placarTexto.setVisible(false);
              vencedor.setVisible(true);
              textven = carta.name + " PERDEU";
              vencedor.setText(textven);
              if (decisao.ganhador === "fourloss") {
                contadorloss = game.add
                  .image(360, 520, "bolverme")
                  .setInteractive();
                contadorloss.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverme")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverme")
                  .setInteractive();
                bolicinza2.setVisible(true);
                bolicinza3 = game.add
                  .image(440, 520, "bolverme")
                  .setInteractive();
                bolicinza3.setVisible(true);
              } else if (decisao.ganhador === "twowintwoloss") {
                contadorloss = game.add
                  .image(360, 520, "bolverde")
                  .setInteractive();
                contadorloss.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverde")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverme")
                  .setInteractive();
                bolicinza2.setVisible(true);
                bolicinza3 = game.add
                  .image(440, 520, "bolverme")
                  .setInteractive();
                bolicinza3.setVisible(true);
              } else if (decisao.ganhador === "onewintreeloss") {
                contadorloss = game.add
                  .image(360, 520, "bolverme")
                  .setInteractive();
                contadorloss.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverde")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverme")
                  .setInteractive();
                bolicinza2.setVisible(true);
                bolicinza3 = game.add
                  .image(440, 520, "bolverme")
                  .setInteractive();
                bolicinza3.setVisible(true);
              } else if (decisao.ganhador === "treewinoneloss") {
                contadorloss = game.add
                  .image(360, 520, "bolverde")
                  .setInteractive();
                contadorloss.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverde")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverde")
                  .setInteractive();
                bolicinza2.setVisible(true);
                bolicinza3 = game.add
                  .image(440, 520, "bolverme")
                  .setInteractive();
                bolicinza3.setVisible(true);
              } else if (decisao.ganhador === "onewinonelossonewinoneloss") {
                contadorloss = game.add
                  .image(360, 520, "bolverme")
                  .setInteractive();
                contadorloss.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverde")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverde")
                  .setInteractive();
                bolicinza2.setVisible(true);
                bolicinza3 = game.add
                  .image(440, 520, "bolverme")
                  .setInteractive();
                bolicinza3.setVisible(true);
              } else if (decisao.ganhador === "twolossonewinoneloss") {
                contadorloss = game.add
                  .image(360, 520, "bolverme")
                  .setInteractive();
                contadorloss.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverme")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverde")
                  .setInteractive();
                bolicinza2.setVisible(true);
                bolicinza3 = game.add
                  .image(440, 520, "bolverme")
                  .setInteractive();
                bolicinza3.setVisible(true);
              } else if (decisao.ganhador === "onelosstwowinoneloss") {
                contadorloss = game.add
                  .image(360, 520, "bolverde")
                  .setInteractive();
                contadorloss.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverme")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverde")
                  .setInteractive();
                bolicinza2.setVisible(true);
                bolicinza3 = game.add
                  .image(440, 520, "bolverme")
                  .setInteractive();
                bolicinza3.setVisible(true);
              } else if (decisao.ganhador === "onelossonewintwoloss") {
                contadorloss = game.add
                  .image(360, 520, "bolverde")
                  .setInteractive();
                contadorloss.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverme")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverme")
                  .setInteractive();
                bolicinza2.setVisible(true);
                bolicinza3 = game.add
                  .image(440, 520, "bolverme")
                  .setInteractive();
                bolicinza3.setVisible(true);
              }

              newgame.setVisible(true);
            } else {
              cartafundo.setVisible(true);
              habilidade.setVisible(false);
              simpatia.setVisible(false);
              conhecimento.setVisible(true);
              altura.setVisible(false);
              idade.setVisible(false);
              placarTexto.setVisible(false);
              vencedor.setVisible(true);
              textven = "EMPATE";
              vencedor.setText(textven);
              contadordepartida.setVisible(true);
              newgame.setVisible(true);
            }
          } else if (decisao.item === "altura") {
            if (decisao.valor === "primeiro") {
              cartafundo.setVisible(true);
              habilidade.setVisible(false);
              simpatia.setVisible(false);
              conhecimento.setVisible(false);
              altura.setVisible(true);
              idade.setVisible(false);
              placarTexto.setVisible(false);
              vencedor.setVisible(true);
              textven = carta.name + " GANHOU";
              vencedor.setText(textven);
              if (decisao.ganhador === "fourwin") {
                contadordepartida = game.add
                  .image(360, 520, "bolverde")
                  .setInteractive();
                contadordepartida.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverde")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverde")
                  .setInteractive();
                bolicinza2.setVisible(true);
                bolicinza3 = game.add
                  .image(440, 520, "bolverde")
                  .setInteractive();
                bolicinza3.setVisible(true);
              } else if (decisao.ganhador === "twolosstwowin") {
                contadordepartida = game.add
                  .image(360, 520, "bolverme")
                  .setInteractive();
                contadordepartida.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverme")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverde")
                  .setInteractive();
                bolicinza2.setVisible(true);
                bolicinza3 = game.add
                  .image(440, 520, "bolverde")
                  .setInteractive();
                bolicinza3.setVisible(true);
              } else if (decisao.ganhador === "onelosstreewin") {
                contadordepartida = game.add
                  .image(360, 520, "bolverde")
                  .setInteractive();
                contadordepartida.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverme")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverde")
                  .setInteractive();
                bolicinza2.setVisible(true);
                bolicinza3 = game.add
                  .image(440, 520, "bolverde")
                  .setInteractive();
                bolicinza3.setVisible(true);
              } else if (decisao.ganhador === "onewinonelosstwowin") {
                contadordepartida2 = game.add
                  .image(360, 520, "bolverme")
                  .setInteractive();
                contadordepartida2.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverde")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverde")
                  .setInteractive();
                bolicinza2.setVisible(true);
                bolicinza3 = game.add
                  .image(440, 520, "bolverde")
                  .setInteractive();
                bolicinza3.setVisible(true);
              } else if (decisao.ganhador === "treelossonewin") {
                contadordepartida2 = game.add
                  .image(360, 520, "bolverme")
                  .setInteractive();
                contadordepartida2.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverme")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverme")
                  .setInteractive();
                bolicinza2.setVisible(true);
                bolicinza3 = game.add
                  .image(440, 520, "bolverde")
                  .setInteractive();
                bolicinza3.setVisible(true);
              } else if (decisao.ganhador === "onewintwolossonewin") {
                contadordepartida2 = game.add
                  .image(360, 520, "bolverme")
                  .setInteractive();
                contadordepartida2.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverde")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverme")
                  .setInteractive();
                bolicinza2.setVisible(true);
                bolicinza3 = game.add
                  .image(440, 520, "bolverde")
                  .setInteractive();
                bolicinza3.setVisible(true);
              } else if (decisao.ganhador === "twowinonelossonewin") {
                contadordepartida2 = game.add
                  .image(360, 520, "bolverde")
                  .setInteractive();
                contadordepartida2.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverde")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverme")
                  .setInteractive();
                bolicinza2.setVisible(true);
                bolicinza3 = game.add
                  .image(440, 520, "bolverde")
                  .setInteractive();
                bolicinza3.setVisible(true);
              } else if (decisao.ganhador === "onelossonewinonelossonewin") {
                contadordepartida2 = game.add
                  .image(360, 520, "bolverde")
                  .setInteractive();
                contadordepartida2.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverme")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverme")
                  .setInteractive();
                bolicinza2.setVisible(true);
                bolicinza3 = game.add
                  .image(440, 520, "bolverde")
                  .setInteractive();
                bolicinza3.setVisible(true);
              }
              imagembloqueio.setVisible(false);
              newgame.setVisible(true);
            } else if (decisao.valor === "segundo") {
              cartafundo.setVisible(true);
              habilidade.setVisible(false);
              simpatia.setVisible(false);
              conhecimento.setVisible(false);
              altura.setVisible(true);
              idade.setVisible(false);
              placarTexto.setVisible(false);
              vencedor.setVisible(true);
              textven = carta.name + " PERDEU";
              vencedor.setText(textven);
              if (decisao.ganhador === "fourloss") {
                contadorloss = game.add
                  .image(360, 520, "bolverme")
                  .setInteractive();
                contadorloss.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverme")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverme")
                  .setInteractive();
                bolicinza2.setVisible(true);
                bolicinza3 = game.add
                  .image(440, 520, "bolverme")
                  .setInteractive();
                bolicinza3.setVisible(true);
              } else if (decisao.ganhador === "twowintwoloss") {
                contadorloss = game.add
                  .image(360, 520, "bolverde")
                  .setInteractive();
                contadorloss.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverde")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverme")
                  .setInteractive();
                bolicinza2.setVisible(true);
                bolicinza3 = game.add
                  .image(440, 520, "bolverme")
                  .setInteractive();
                bolicinza3.setVisible(true);
              } else if (decisao.ganhador === "onewintreeloss") {
                contadorloss = game.add
                  .image(360, 520, "bolverme")
                  .setInteractive();
                contadorloss.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverde")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverme")
                  .setInteractive();
                bolicinza2.setVisible(true);
                bolicinza3 = game.add
                  .image(440, 520, "bolverme")
                  .setInteractive();
                bolicinza3.setVisible(true);
              } else if (decisao.ganhador === "treewinoneloss") {
                contadorloss = game.add
                  .image(360, 520, "bolverde")
                  .setInteractive();
                contadorloss.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverde")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverde")
                  .setInteractive();
                bolicinza2.setVisible(true);
                bolicinza3 = game.add
                  .image(440, 520, "bolverme")
                  .setInteractive();
                bolicinza3.setVisible(true);
              } else if (decisao.ganhador === "onewinonelossonewinoneloss") {
                contadorloss = game.add
                  .image(360, 520, "bolverme")
                  .setInteractive();
                contadorloss.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverde")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverde")
                  .setInteractive();
                bolicinza2.setVisible(true);
                bolicinza3 = game.add
                  .image(440, 520, "bolverme")
                  .setInteractive();
                bolicinza3.setVisible(true);
              } else if (decisao.ganhador === "twolossonewinoneloss") {
                contadorloss = game.add
                  .image(360, 520, "bolverme")
                  .setInteractive();
                contadorloss.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverme")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverde")
                  .setInteractive();
                bolicinza2.setVisible(true);
                bolicinza3 = game.add
                  .image(440, 520, "bolverme")
                  .setInteractive();
                bolicinza3.setVisible(true);
              } else if (decisao.ganhador === "onelosstwowinoneloss") {
                contadorloss = game.add
                  .image(360, 520, "bolverde")
                  .setInteractive();
                contadorloss.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverme")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverde")
                  .setInteractive();
                bolicinza2.setVisible(true);
                bolicinza3 = game.add
                  .image(440, 520, "bolverme")
                  .setInteractive();
                bolicinza3.setVisible(true);
              } else if (decisao.ganhador === "onelossonewintwoloss") {
                contadorloss = game.add
                  .image(360, 520, "bolverde")
                  .setInteractive();
                contadorloss.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverme")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverme")
                  .setInteractive();
                bolicinza2.setVisible(true);
                bolicinza3 = game.add
                  .image(440, 520, "bolverme")
                  .setInteractive();
                bolicinza3.setVisible(true);
              }
              newgame.setVisible(true);
            } else {
              cartafundo.setVisible(true);
              habilidade.setVisible(false);
              simpatia.setVisible(false);
              conhecimento.setVisible(false);
              altura.setVisible(true);
              idade.setVisible(false);
              placarTexto.setVisible(false);
              vencedor.setVisible(true);
              textven = "EMPATE";
              vencedor.setText(textven);
              contadordepartida.setVisible(true);
              newgame.setVisible(true);
            }
          } else if (decisao.item === "idade") {
            if (decisao.valor === "primeiro") {
              cartafundo.setVisible(true);
              habilidade.setVisible(false);
              simpatia.setVisible(false);
              conhecimento.setVisible(false);
              altura.setVisible(false);
              idade.setVisible(true);
              placarTexto.setVisible(false);
              vencedor.setVisible(true);
              textven = carta.name + " GANHOU";
              vencedor.setText(textven);
              if (decisao.ganhador === "fourwin") {
                contadordepartida = game.add
                  .image(360, 520, "bolverde")
                  .setInteractive();
                contadordepartida.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverde")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverde")
                  .setInteractive();
                bolicinza2.setVisible(true);
                bolicinza3 = game.add
                  .image(440, 520, "bolverde")
                  .setInteractive();
                bolicinza3.setVisible(true);
              } else if (decisao.ganhador === "twolosstwowin") {
                contadordepartida = game.add
                  .image(360, 520, "bolverme")
                  .setInteractive();
                contadordepartida.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverme")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverde")
                  .setInteractive();
                bolicinza2.setVisible(true);
                bolicinza3 = game.add
                  .image(440, 520, "bolverde")
                  .setInteractive();
                bolicinza3.setVisible(true);
              } else if (decisao.ganhador === "onelosstreewin") {
                contadordepartida = game.add
                  .image(360, 520, "bolverde")
                  .setInteractive();
                contadordepartida.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverme")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverde")
                  .setInteractive();
                bolicinza2.setVisible(true);
                bolicinza3 = game.add
                  .image(440, 520, "bolverde")
                  .setInteractive();
                bolicinza3.setVisible(true);
              } else if (decisao.ganhador === "onewinonelosstwowin") {
                contadordepartida2 = game.add
                  .image(360, 520, "bolverme")
                  .setInteractive();
                contadordepartida2.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverde")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverde")
                  .setInteractive();
                bolicinza2.setVisible(true);
                bolicinza3 = game.add
                  .image(440, 520, "bolverde")
                  .setInteractive();
                bolicinza3.setVisible(true);
              } else if (decisao.ganhador === "treelossonewin") {
                contadordepartida2 = game.add
                  .image(360, 520, "bolverme")
                  .setInteractive();
                contadordepartida2.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverme")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverme")
                  .setInteractive();
                bolicinza2.setVisible(true);
                bolicinza3 = game.add
                  .image(440, 520, "bolverde")
                  .setInteractive();
                bolicinza3.setVisible(true);
              } else if (decisao.ganhador === "onewintwolossonewin") {
                contadordepartida2 = game.add
                  .image(360, 520, "bolverme")
                  .setInteractive();
                contadordepartida2.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverde")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverme")
                  .setInteractive();
                bolicinza2.setVisible(true);
                bolicinza3 = game.add
                  .image(440, 520, "bolverde")
                  .setInteractive();
                bolicinza3.setVisible(true);
              } else if (decisao.ganhador === "twowinonelossonewin") {
                contadordepartida2 = game.add
                  .image(360, 520, "bolverde")
                  .setInteractive();
                contadordepartida2.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverde")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverme")
                  .setInteractive();
                bolicinza2.setVisible(true);
                bolicinza3 = game.add
                  .image(440, 520, "bolverde")
                  .setInteractive();
                bolicinza3.setVisible(true);
              } else if (decisao.ganhador === "onelossonewinonelossonewin") {
                contadordepartida2 = game.add
                  .image(360, 520, "bolverde")
                  .setInteractive();
                contadordepartida2.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverme")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverme")
                  .setInteractive();
                bolicinza2.setVisible(true);
                bolicinza3 = game.add
                  .image(440, 520, "bolverde")
                  .setInteractive();
                bolicinza3.setVisible(true);
              }
              imagembloqueio.setVisible(false);
              newgame.setVisible(true);
            } else if (decisao.valor === "segundo") {
              cartafundo.setVisible(true);
              habilidade.setVisible(false);
              simpatia.setVisible(false);
              conhecimento.setVisible(false);
              altura.setVisible(false);
              idade.setVisible(true);
              placarTexto.setVisible(false);
              vencedor.setVisible(true);
              textven = carta.name + " PERDEU";
              vencedor.setText(textven);
              if (decisao.ganhador === "fourloss") {
                contadorloss = game.add
                  .image(360, 520, "bolverme")
                  .setInteractive();
                contadorloss.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverme")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverme")
                  .setInteractive();
                bolicinza2.setVisible(true);
                bolicinza3 = game.add
                  .image(440, 520, "bolverme")
                  .setInteractive();
                bolicinza3.setVisible(true);
              } else if (decisao.ganhador === "twowintwoloss") {
                contadorloss = game.add
                  .image(360, 520, "bolverde")
                  .setInteractive();
                contadorloss.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverde")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverme")
                  .setInteractive();
                bolicinza2.setVisible(true);
                bolicinza3 = game.add
                  .image(440, 520, "bolverme")
                  .setInteractive();
                bolicinza3.setVisible(true);
              } else if (decisao.ganhador === "onewintreeloss") {
                contadorloss = game.add
                  .image(360, 520, "bolverme")
                  .setInteractive();
                contadorloss.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverde")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverme")
                  .setInteractive();
                bolicinza2.setVisible(true);
                bolicinza3 = game.add
                  .image(440, 520, "bolverme")
                  .setInteractive();
                bolicinza3.setVisible(true);
              } else if (decisao.ganhador === "treewinoneloss") {
                contadorloss = game.add
                  .image(360, 520, "bolverde")
                  .setInteractive();
                contadorloss.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverde")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverde")
                  .setInteractive();
                bolicinza2.setVisible(true);
                bolicinza3 = game.add
                  .image(440, 520, "bolverme")
                  .setInteractive();
                bolicinza3.setVisible(true);
              } else if (decisao.ganhador === "onewinonelossonewinoneloss") {
                contadorloss = game.add
                  .image(360, 520, "bolverme")
                  .setInteractive();
                contadorloss.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverde")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverde")
                  .setInteractive();
                bolicinza2.setVisible(true);
                bolicinza3 = game.add
                  .image(440, 520, "bolverme")
                  .setInteractive();
                bolicinza3.setVisible(true);
              } else if (decisao.ganhador === "twolossonewinoneloss") {
                contadorloss = game.add
                  .image(360, 520, "bolverme")
                  .setInteractive();
                contadorloss.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverme")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverde")
                  .setInteractive();
                bolicinza2.setVisible(true);
                bolicinza3 = game.add
                  .image(440, 520, "bolverme")
                  .setInteractive();
                bolicinza3.setVisible(true);
              } else if (decisao.ganhador === "onelosstwowinoneloss") {
                contadorloss = game.add
                  .image(360, 520, "bolverde")
                  .setInteractive();
                contadorloss.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverme")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverde")
                  .setInteractive();
                bolicinza2.setVisible(true);
                bolicinza3 = game.add
                  .image(440, 520, "bolverme")
                  .setInteractive();
                bolicinza3.setVisible(true);
              } else if (decisao.ganhador === "onelossonewintwoloss") {
                contadorloss = game.add
                  .image(360, 520, "bolverde")
                  .setInteractive();
                contadorloss.setVisible(true);
                bolicinza = game.add
                  .image(320, 520, "bolverme")
                  .setInteractive();
                bolicinza.setVisible(true);
                bolicinza2 = game.add
                  .image(400, 520, "bolverme")
                  .setInteractive();
                bolicinza2.setVisible(true);
                bolicinza3 = game.add
                  .image(440, 520, "bolverme")
                  .setInteractive();
                bolicinza3.setVisible(true);
              }
              newgame.setVisible(true);
            } else {
              cartafundo.setVisible(true);
              habilidade.setVisible(false);
              simpatia.setVisible(false);
              conhecimento.setVisible(false);
              altura.setVisible(false);
              idade.setVisible(true);
              placarTexto.setVisible(false);
              vencedor.setVisible(true);
              textven = "EMPATE";
              vencedor.setText(textven);
              contadordepartida.setVisible(true);
              newgame.setVisible(true);
            }
          }
        }
        contage = decisao.ganhador;
      });
    }
  });
};

cena1.update = function () {};

export { cena1 };
