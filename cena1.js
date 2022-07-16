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
var cartafundo;

var ice_servers = {
  iceServers: [
    {
      urls: "stun:ifsc.cloud",
    },
    {
      urls: "turns:ifsc.cloud",
      username: "etorresini",
      credential: "matrix",
    },
  ],
};
var sala
var localConnection;
var remoteConnection;
var midias;
const audio = document.querySelector("audio");

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
  this.load.image("vitoria", "assets/victory.png");
  this.load.image("derrota", "assets/defeat.png");;
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

  socket.on("connect", () => {
    sala = 1
    socket.emit("entrar-na-sala", sala);
  })

  socket.on("jogadores", (jogadores) => {
    if (jogadores.primeiro === socket.id) {
      jogador = 1;

      navigator.mediaDevices
        .getUserMedia({ video: false, audio: true })
        .then((stream) => {
          midias = stream;
        })
        .catch((error) => console.log(error));
    } else if (jogadores.segundo === socket.id) {
      jogador = 2;

      navigator.mediaDevices
        .getUserMedia({ video: false, audio: true })
        .then((stream) => {
          midias = stream;
          localConnection = new RTCPeerConnection(ice_servers);
          midias
            .getTracks()
            .forEach((track) => localConnection.addTrack(track, midias));
          localConnection.onicecandidate = ({ candidate }) => {
            candidate && socket.emit("candidate", sala, candidate);
          };
          console.log(midias);
          localConnection.ontrack = ({ streams: [midias] }) => {
            audio.srcObject = midias;
          };
          localConnection
            .createOffer()
            .then((offer) => localConnection.setLocalDescription(offer))
            .then(() => {
              socket.emit("offer", sala, localConnection.localDescription);
            });
        })
        .catch((error) => console.log(error));
    }
    console.log(jogadores);
  });

  socket.on("offer", (socketId, description) => {
    remoteConnection = new RTCPeerConnection(ice_servers);
    midias
      .getTracks()
      .forEach((track) => remoteConnection.addTrack(track, midias));
    remoteConnection.onicecandidate = ({ candidate }) => {
      candidate && socket.emit("candidate", sala, candidate);
    };
    remoteConnection.ontrack = ({ streams: [midias] }) => {
      audio.srcObject = midias;
    };
    remoteConnection
      .setRemoteDescription(description)
      .then(() => remoteConnection.createAnswer())
      .then((answer) => remoteConnection.setLocalDescription(answer))
      .then(() => {
        socket.emit("answer", sala, remoteConnection.localDescription);
      });
  });

  socket.on("answer", (description) => {
    localConnection.setRemoteDescription(description);
  });

  socket.on("candidate", (candidate) => {
    const conn = localConnection || remoteConnection;
    conn.addIceCandidate(new RTCIceCandidate(candidate));
  });

  socket.on("carta-escolhida", (carta) => {
    carta_escolhida = carta.name;
    console.log("Carta recebida:", carta)
  });

  newgame.on("pointerdown", function () {
    // Descobrir a primeira carta
    carta = cartas[Math.floor(Math.random() * cartas.length)];
    console.log("Primeira carta:", carta, cartas)
    if (carta_escolhida) {
      // oponente já escolheu
      while (carta_escolhida === carta.name) {
        carta = cartas[Math.floor(Math.random() * cartas.length)];
        console.log("N carta:", carta)
      }
    } else {
      socket.emit("carta-escolhida", sala, carta);
      console.log("Enviada:", carta)
    }

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
      if (jogador === 2) {
        imagembloqueio = game.add
          .image(400, 301, "fundograde")
          .setInteractive();
      }

      habilidade.on("pointerdown", function () {
        socket.emit("escolha", sala, {
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
        socket.emit("escolha", sala, {
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
        socket.emit("escolha", sala, {
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
        socket.emit("escolha", sala, {
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
        socket.emit("escolha", sala, {
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
        console.log("Escolha:", escolha);
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
            socket.emit("decisao", sala, {
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
            socket.emit("decisao", sala, {
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

            contagem = 0;
            newgame.setVisible(true);
            imagembloqueio.setVisible(false);
            socket.emit("decisao", sala, {
              item: "habilidade",
              valor: "empate",
              carta: carta.nome,
              ganhador: "nenhum",
            });
          }
          //console.log(carta);
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
            socket.emit("decisao", sala, {
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
            socket.emit("decisao", sala, {
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
            contagem = 0;
            newgame.setVisible(true);
            imagembloqueio.setVisible(false);
            socket.emit("decisao", sala, {
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
            socket.emit("decisao", sala, {
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
            socket.emit("decisao", sala, {
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
            contagem = 0;
            newgame.setVisible(true);
            imagembloqueio.setVisible(false);
            socket.emit("decisao", sala, {
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
            socket.emit("decisao", sala, {
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
            socket.emit("decisao", sala, {
              item: "altura",
              valor: "segundo",
              carta: carta.nome,
              ganhador: "player2",
            });
          } else {
            vencedor.setVisible(true);
            textven = "EMPATE";
            vencedor.setText(textven);
            contagem = 0;
            newgame.setVisible(true);
            imagembloqueio.setVisible(false);
            socket.emit("decisao", sala, {
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
            socket.emit("decisao", sala, {
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
            socket.emit("decisao", sala, {
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
            contagem = 0;
            newgame.setVisible(true);
            imagembloqueio.setVisible(false);
            socket.emit("decisao", sala, {
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
              contagem = 0;
              newgame.setVisible(true);
              
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
              contagem = 0;
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
              contagem = 0;
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
              contagem = 0;
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
              contagem = 0;
              newgame.setVisible(true);
        
            }
          }
          contage = decisao.ganhador;
        }
      });
      carta_escolhida = undefined;
    } else if (contagem === 2) {
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
        socket.emit("escolha", sala, {
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
        socket.emit("escolha", sala, {
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
        socket.emit("escolha", sala, {
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
        socket.emit("escolha", sala, {
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
        socket.emit("escolha", sala, {
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

            socket.emit("decisao", sala, {
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
           socket.emit("decisao", sala, {
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
            contagem = 1;
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
           socket.emit("decisao", sala, {
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
           socket.emit("decisao", sala, {
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
            contagem = 1;
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
           socket.emit("decisao", sala, {
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
           socket.emit("decisao", sala, {
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
            contagem = 1;
            newgame.setVisible(true);
           socket.emit("decisao", sala, {
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
           socket.emit("decisao", sala, {
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
           socket.emit("decisao", sala, {
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
            contagem = 1;
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

           socket.emit("decisao", sala, {
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
           socket.emit("decisao", sala, {
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
            contagem = 1;
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
              contagem = 1;
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
              contagem = 1;
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
              contagem = 1;
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
              contagem = 1;
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
              contagem = 1;
              newgame.setVisible(true);
            }
          }
        }
        contage = decisao.ganhador;
      });
      carta_escolhida = undefined;
    } else if (contagem === 3) {
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
        socket.emit("escolha",sala, {
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
        socket.emit("escolha",sala, {
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
        socket.emit("escolha",sala, {
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
        socket.emit("escolha",sala, {
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
        socket.emit("escolha",sala, {
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

           socket.emit("decisao", sala, {
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
              ganhador2 = "onewintwoloss";
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
            } else if (contage === "oneloss2") {
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
           socket.emit("decisao", sala, {
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
            socket.emit("decisao", sala,{
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
           socket.emit("decisao", sala, {
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
              ganhador2 = "onewintwoloss";
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
            } else if (contage === "oneloss2") {
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
           socket.emit("decisao", sala, {
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
           socket.emit("decisao", sala, {
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

           socket.emit("decisao", sala, {
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
              ganhador2 = "onewintwoloss";
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
            } else if (contage === "oneloss2") {
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

           socket.emit("decisao", sala, {
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
            socket.emit("decisao",sala, {
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

           socket.emit("decisao", sala, {
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
              ganhador2 = "onewintwoloss";
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
            } else if (contage === "oneloss2") {
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
           socket.emit("decisao", sala, {
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
            socket.emit("decisao",sala, {
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

           socket.emit("decisao", sala, {
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
              ganhador2 = "onewintwoloss";
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
            } else if (contage === "oneloss2") {
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
           socket.emit("decisao", sala, {
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
            socket.emit("decisao",sala, {
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
      carta_escolhida = undefined;
    } else if (contagem === 4) {
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
        socket.emit("escolha",sala, {
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
        socket.emit("escolha",sala, {
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
        socket.emit("escolha",sala, {
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
        socket.emit("escolha", sala,{
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
        socket.emit("escolha",sala, {
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
              bolicinza3 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza3.setVisible(true);
            }
            newgame.setVisible(true);

           socket.emit("decisao", sala, {
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
           socket.emit("decisao", sala, {
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
            socket.emit("decisao", sala,{
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
              bolicinza3 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza3.setVisible(true);
            }
            newgame.setVisible(true);
           socket.emit("decisao", sala, {
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
           socket.emit("decisao", sala, {
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
            socket.emit("decisao",sala, {
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

           socket.emit("decisao", sala, {
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

           socket.emit("decisao", sala, {
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
            socket.emit("decisao", sala,{
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

           socket.emit("decisao", sala, {
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
           socket.emit("decisao", sala, {
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
            socket.emit("decisao", sala,{
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

           socket.emit("decisao", sala, {
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
           socket.emit("decisao", sala, {
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
            socket.emit("decisao",sala, {
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
    } else if (contagem === 5) {
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
        socket.emit("escolha",sala, {
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
        socket.emit("escolha", sala,{
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
        socket.emit("escolha",sala, {
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
        socket.emit("escolha", sala,{
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
        socket.emit("escolha",sala, {
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
            var placara = game.add.image(400, 100, "derrota").setInteractive();
            placara.setVisible(true);
            if (contage === "onewintwolossonewin") {
              ganhador1 = "onelosstwowinonelossonewin";
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
              bolicinza3 = game.add
                .image(440, 520, "bolverde")
                .setInteractive();
              bolicinza3.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverme")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "treelossonewin") {
              ganhador1 = "treewinonelossonewin";
              contadorloss = game.add
                .image(360, 520, "bolverme")
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
              bolicinza4 = game.add
                .image(480, 520, "bolverme")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "twowinonelossonewin") {
              ganhador1 = "twolossonewinonelossonewin";
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
              bolicinza3 = game.add
                .image(440, 520, "bolverde")
                .setInteractive();
              bolicinza3.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverme")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "onelossonewinonelossonewin") {
              ganhador1 = "onewinonelossonewinonelossonewin";
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
              bolicinza3 = game.add
                .image(440, 520, "bolverde")
                .setInteractive();
              bolicinza3.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverme")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "fourwin") {
              ganhador1 = "fourlossonewin";
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
              bolicinza3 = game.add
                .image(440, 520, "bolverde")
                .setInteractive();
              bolicinza3.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverme")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "onelosstreewin") {
              ganhador1 = "onewintreelossonewin";
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
              bolicinza3 = game.add
                .image(440, 520, "bolverde")
                .setInteractive();
              bolicinza3.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverme")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "twolosstwowin") {
              ganhador1 = "twowintwolossonewin";
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
              bolicinza4 = game.add
                .image(480, 520, "bolverme")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "onewinonelosstwowin") {
              ganhador1 = "onelossonewintwolossonewin";
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
              bolicinza2 = game.add
                .image(440, 520, "bolverde")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverme")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "onelosstwowinoneloss") {
              ganhador1 = "onewintwolosstwowin";
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
              bolicinza2 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverme")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "treewinoneloss") {
              ganhador1 = "treelosstwowin";
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
              bolicinza2 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverme")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "twowintwoloss") {
              ganhador1 = "twolosstreewin";
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
              bolicinza2 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverme")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "onewinonelossonewinoneloss") {
              ganhador1 = "onelossonewinonelosstwowin";
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
              bolicinza2 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverme")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "onewintreeloss") {
              ganhador1 = "onelossfourwin";
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
              bolicinza2 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverme")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "onelossonewintwoloss") {
              ganhador1 = "onewinonelosstreewin";
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
              bolicinza4 = game.add
                .image(480, 520, "bolverme")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "twolossonewinoneloss") {
              ganhador1 = "twowinonelosstwoloss";
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
              bolicinza2 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverme")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "fourloss") {
              ganhador1 = "fivewin";
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
              bolicinza2 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverme")
                .setInteractive();
              bolicinza4.setVisible(true);
            }
            newgame.setVisible(true);

           socket.emit("decisao", sala, {
              item: "habilidade",
              valor: "primeiro",
              carta: carta.nome,
              ganhador: ganhador1,
            }); //         player1     player2
          } else if (escolha.valor < carta.habilidade.valor) {
            var placara = game.add.image(400, 200, "vitoria").setInteractive();
            placara.setVisible(true);
            if (contage === "twowintwoloss") {
              ganhador2 = "twolosstwowinoneloss";
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
              bolicinza4 = game.add
                .image(480, 520, "bolverde")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "onewinonelossonewinoneloss") {
              ganhador2 = "onelossonewinonelossonewinoneloss";
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
              bolicinza3 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza3.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverde")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "treewinoneloss") {
              ganhador2 = "treelossonewinoneloss";
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
              bolicinza3 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza3.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverde")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "twolossonewinoneloss") {
              ganhador2 = "twowinonelossonewinoneloss";
              contadorloss = game.add
                .image(360, 520, "bolverme")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverde")
                .setInteractive();
              bolicinza3 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza3.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverde")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "onewintreeloss") {
              ganhador2 = "onelosstreewinoneloss";
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
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza3.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverde")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "fourloss") {
              ganhador2 = "fourwinoneloss";
              contadorloss = game.add
                .image(360, 520, "bolverme")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverme")
                .setInteractive();
              bolicinza3 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza3.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverde")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "onelossonewintwoloss") {
              ganhador2 = "onewinonelosstwowinoneloss";
              contadorloss = game.add
                .image(360, 520, "bolverde")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverme")
                .setInteractive();
              bolicinza3 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza3.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverde")
                .setInteractive();
              bolicinza4.setVisible(true);

            } else if (contage === "twowinonelossonewin") {
              ganhador2 = "twolossonewintwoloss";
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
              bolicinza4 = game.add
                .image(480, 520, "bolverde")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "onewinonelosstwowin") {
              ganhador2 = "onelossonewintreeloss";
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
              bolicinza4 = game.add
                .image(480, 520, "bolverde")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "onewintwolossonewin") {
              ganhador2 = "onelosstwowintwoloss";
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
              bolicinza4 = game.add
                .image(480, 520, "bolverde")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "onelosstwowinoneloss") {
              ganhador2 = "onewintwolossonewinoneloss";
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
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza3.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverde")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "onelossonewinonelossonewin") {
              ganhador2 = "onewinonelossonewintwoloss";
              contadorloss = game.add
                .image(360, 520, "bolverde")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverme")
                .setInteractive();
              bolicinza3 = game.add
                .image(440, 520, "bolverde")
                .setInteractive();
              bolicinza3.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverde")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "treelosonewin") {
              ganhador2 = "treewintwoloss";
              contadorloss = game.add
                .image(360, 520, "bolverme")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverme")
                .setInteractive();
              bolicinza3 = game.add
                .image(440, 520, "bolverde")
                .setInteractive();
              bolicinza3.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverde")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "twolosstwowin") {
              ganhador2 = "twowintreeloss";
              contadorloss = game.add
                .image(360, 520, "bolverme")
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
              bolicinza4 = game.add
                .image(480, 520, "bolverde")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "onelosstreewin") {
              ganhador2 = "onewinfourloss";
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
              bolicinza4 = game.add
                .image(480, 520, "bolverde")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "fourwin") {
              ganhador2 = "fiveloss";
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
              bolicinza4 = game.add
                .image(480, 520, "bolverde")
                .setInteractive();
              bolicinza4.setVisible(true);
            }
            newgame.setVisible(true);
           socket.emit("decisao", sala, {
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
           socket.emit("decisao", sala, {
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
           var placara = game.add.image(400, 100, "derrota").setInteractive();
           placara.setVisible(true);
            if (contage === "twowintwoloss") {
              ganhador2 = "twolosstwowinoneloss";
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
              bolicinza4 = game.add
                .image(480, 520, "bolverde")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "onewinonelossonewinoneloss") {
              ganhador2 = "onelossonewinonelossonewinoneloss";
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
              bolicinza3 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza3.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverde")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "treewinoneloss") {
              ganhador2 = "treelossonewinoneloss";
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
              bolicinza3 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza3.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverde")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "twolossonewinoneloss") {
              ganhador2 = "twowinonelossonewinoneloss";
              contadorloss = game.add
                .image(360, 520, "bolverme")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverde")
                .setInteractive();
              bolicinza3 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza3.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverde")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "onewintreeloss") {
              ganhador2 = "onelosstreewinoneloss";
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
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza3.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverde")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "fourloss") {
              ganhador2 = "fourwinoneloss";
              contadorloss = game.add
                .image(360, 520, "bolverme")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverme")
                .setInteractive();
              bolicinza3 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza3.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverde")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "onelossonewintwoloss") {
              ganhador2 = "onewinonelosstwowinoneloss";
              contadorloss = game.add
                .image(360, 520, "bolverde")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverme")
                .setInteractive();
              bolicinza3 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza3.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverde")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "twowinonelossonewin") {
              ganhador2 = "twolossonewintwoloss";
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
              bolicinza4 = game.add
                .image(480, 520, "bolverde")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "onewinonelosstwowin") {
              ganhador2 = "onelossonewintreeloss";
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
              bolicinza4 = game.add
                .image(480, 520, "bolverde")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "onewintwolossonewin") {
              ganhador2 = "onelosstwowintwoloss";
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
              bolicinza4 = game.add
                .image(480, 520, "bolverde")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "onelosstwowinoneloss") {
              ganhador2 = "onewintwolossonewinoneloss";
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
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza3.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverde")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "onelossonewinonelossonewin") {
              ganhador2 = "onewinonelossonewintwoloss";
              contadorloss = game.add
                .image(360, 520, "bolverde")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverme")
                .setInteractive();
              bolicinza3 = game.add
                .image(440, 520, "bolverde")
                .setInteractive();
              bolicinza3.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverde")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "treelosonewin") {
              ganhador2 = "treewintwoloss";
              contadorloss = game.add
                .image(360, 520, "bolverme")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverme")
                .setInteractive();
              bolicinza3 = game.add
                .image(440, 520, "bolverde")
                .setInteractive();
              bolicinza3.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverde")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "twolosstwowin") {
              ganhador2 = "twowintreeloss";
              contadorloss = game.add
                .image(360, 520, "bolverme")
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
              bolicinza4 = game.add
                .image(480, 520, "bolverde")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "onelosstreewin") {
              ganhador2 = "onewinfourloss";
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
              bolicinza4 = game.add
                .image(480, 520, "bolverde")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "fourwin") {
              ganhador2 = "fiveloss";
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
              bolicinza4 = game.add
                .image(480, 520, "bolverde")
                .setInteractive();
              bolicinza4.setVisible(true);
            }
            newgame.setVisible(true);
           socket.emit("decisao", sala, {
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
            socket.emit("decisao", sala,{
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
            var placara = game.add.image(400, 100, "derrota").setInteractive();
            placara.setVisible(true);
            if (contage === "onewintwolossonewin") {
              ganhador1 = "onelosstwowinonelossonewin";
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
              bolicinza3 = game.add
                .image(440, 520, "bolverde")
                .setInteractive();
              bolicinza3.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverme")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "treelossonewin") {
              ganhador1 = "treewinonelossonewin";
              contadorloss = game.add
                .image(360, 520, "bolverme")
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
              bolicinza4 = game.add
                .image(480, 520, "bolverme")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "twowinonelossonewin") {
              ganhador1 = "twolossonewinonelossonewin";
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
              bolicinza3 = game.add
                .image(440, 520, "bolverde")
                .setInteractive();
              bolicinza3.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverme")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "onelossonewinonelossonewin") {
              ganhador1 = "onewinonelossonewinonelossonewin";
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
              bolicinza3 = game.add
                .image(440, 520, "bolverde")
                .setInteractive();
              bolicinza3.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverme")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "fourwin") {
              ganhador1 = "fourlossonewin";
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
              bolicinza3 = game.add
                .image(440, 520, "bolverde")
                .setInteractive();
              bolicinza3.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverme")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "onelosstreewin") {
              ganhador1 = "onewintreelossonewin";
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
              bolicinza3 = game.add
                .image(440, 520, "bolverde")
                .setInteractive();
              bolicinza3.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverme")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "twolosstwowin") {
              ganhador1 = "twowintwolossonewin";
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
              bolicinza4 = game.add
                .image(480, 520, "bolverme")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "onewinonelosstwowin") {
              ganhador1 = "onelossonewintwolossonewin";
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
              bolicinza2 = game.add
                .image(440, 520, "bolverde")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverme")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "onelosstwowinoneloss") {
              ganhador1 = "onewintwolosstwowin";
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
              bolicinza2 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverme")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "treewinoneloss") {
              ganhador1 = "treelosstwowin";
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
              bolicinza2 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverme")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "twowintwoloss") {
              ganhador1 = "twolosstreewin";
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
              bolicinza2 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverme")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "onewinonelossonewinoneloss") {
              ganhador1 = "onelossonewinonelosstwowin";
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
              bolicinza2 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverme")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "onewintreeloss") {
              ganhador1 = "onelossfourwin";
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
              bolicinza2 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverme")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "onelossonewintwoloss") {
              ganhador1 = "onewinonelosstreewin";
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
              bolicinza4 = game.add
                .image(480, 520, "bolverme")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "twolossonewinoneloss") {
              ganhador1 = "twowinonelosstwoloss";
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
              bolicinza2 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverme")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "fourloss") {
              ganhador1 = "fivewin";
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
              bolicinza2 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverme")
                .setInteractive();
              bolicinza4.setVisible(true);
            }

            newgame.setVisible(true);

           socket.emit("decisao", sala, {
              item: "conhecimento",
              valor: "primeiro",
              carta: carta.nome,
              ganhador: ganhador1,
            });
          } else if (escolha.valor < carta.conhecimento.valor) {
           var placara = game.add.image(400, 200, "vitoria").setInteractive();
           placara.setVisible(true);
            if (contage === "twowintwoloss") {
              ganhador2 = "twolosstwowinoneloss";
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
              bolicinza4 = game.add
                .image(480, 520, "bolverde")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "onewinonelossonewinoneloss") {
              ganhador2 = "onelossonewinonelossonewinoneloss";
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
              bolicinza3 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza3.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverde")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "treewinoneloss") {
              ganhador2 = "treelossonewinoneloss";
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
              bolicinza3 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza3.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverde")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "twolossonewinoneloss") {
              ganhador2 = "twowinonelossonewinoneloss";
              contadorloss = game.add
                .image(360, 520, "bolverme")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverde")
                .setInteractive();
              bolicinza3 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza3.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverde")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "onewintreeloss") {
              ganhador2 = "onelosstreewinoneloss";
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
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza3.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverde")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "fourloss") {
              ganhador2 = "fourwinoneloss";
              contadorloss = game.add
                .image(360, 520, "bolverme")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverme")
                .setInteractive();
              bolicinza3 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza3.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverde")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "onelossonewintwoloss") {
              ganhador2 = "onewinonelosstwowinoneloss";
              contadorloss = game.add
                .image(360, 520, "bolverde")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverme")
                .setInteractive();
              bolicinza3 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza3.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverde")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "twowinonelossonewin") {
              ganhador2 = "twolossonewintwoloss";
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
              bolicinza4 = game.add
                .image(480, 520, "bolverde")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "onewinonelosstwowin") {
              ganhador2 = "onelossonewintreeloss";
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
              bolicinza4 = game.add
                .image(480, 520, "bolverde")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "onewintwolossonewin") {
              ganhador2 = "onelosstwowintwoloss";
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
              bolicinza4 = game.add
                .image(480, 520, "bolverde")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "onelosstwowinoneloss") {
              ganhador2 = "onewintwolossonewinoneloss";
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
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza3.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverde")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "onelossonewinonelossonewin") {
              ganhador2 = "onewinonelossonewintwoloss";
              contadorloss = game.add
                .image(360, 520, "bolverde")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverme")
                .setInteractive();
              bolicinza3 = game.add
                .image(440, 520, "bolverde")
                .setInteractive();
              bolicinza3.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverde")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "treelosonewin") {
              ganhador2 = "treewintwoloss";
              contadorloss = game.add
                .image(360, 520, "bolverme")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverme")
                .setInteractive();
              bolicinza3 = game.add
                .image(440, 520, "bolverde")
                .setInteractive();
              bolicinza3.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverde")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "twolosstwowin") {
              ganhador2 = "twowintreeloss";
              contadorloss = game.add
                .image(360, 520, "bolverme")
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
              bolicinza4 = game.add
                .image(480, 520, "bolverde")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "onelosstreewin") {
              ganhador2 = "onewinfourloss";
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
              bolicinza4 = game.add
                .image(480, 520, "bolverde")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "fourwin") {
              ganhador2 = "fiveloss";
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
              bolicinza4 = game.add
                .image(480, 520, "bolverde")
                .setInteractive();
              bolicinza4.setVisible(true);
            }
            newgame.setVisible(true);

           socket.emit("decisao", sala, {
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
            socket.emit("decisao", sala,{
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
            var placara = game.add.image(400, 100, "derrota").setInteractive();
            placara.setVisible(true);
            if (contage === "onewintwolossonewin") {
              ganhador1 = "onelosstwowinonelossonewin";
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
              bolicinza3 = game.add
                .image(440, 520, "bolverde")
                .setInteractive();
              bolicinza3.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverme")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "treelossonewin") {
              ganhador1 = "treewinonelossonewin";
              contadorloss = game.add
                .image(360, 520, "bolverme")
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
              bolicinza4 = game.add
                .image(480, 520, "bolverme")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "twowinonelossonewin") {
              ganhador1 = "twolossonewinonelossonewin";
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
              bolicinza3 = game.add
                .image(440, 520, "bolverde")
                .setInteractive();
              bolicinza3.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverme")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "onelossonewinonelossonewin") {
              ganhador1 = "onewinonelossonewinonelossonewin";
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
              bolicinza3 = game.add
                .image(440, 520, "bolverde")
                .setInteractive();
              bolicinza3.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverme")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "fourwin") {
              ganhador1 = "fourlossonewin";
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
              bolicinza3 = game.add
                .image(440, 520, "bolverde")
                .setInteractive();
              bolicinza3.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverme")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "onelosstreewin") {
              ganhador1 = "onewintreelossonewin";
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
              bolicinza3 = game.add
                .image(440, 520, "bolverde")
                .setInteractive();
              bolicinza3.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverme")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "twolosstwowin") {
              ganhador1 = "twowintwolossonewin";
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
              bolicinza4 = game.add
                .image(480, 520, "bolverme")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "onewinonelosstwowin") {
              ganhador1 = "onelossonewintwolossonewin";
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
              bolicinza2 = game.add
                .image(440, 520, "bolverde")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverme")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "onelosstwowinoneloss") {
              ganhador1 = "onewintwolosstwowin";
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
              bolicinza2 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverme")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "treewinoneloss") {
              ganhador1 = "treelosstwowin";
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
              bolicinza2 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverme")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "twowintwoloss") {
              ganhador1 = "twolosstreewin";
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
              bolicinza2 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverme")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "onewinonelossonewinoneloss") {
              ganhador1 = "onelossonewinonelosstwowin";
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
              bolicinza2 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverme")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "onewintreeloss") {
              ganhador1 = "onelossfourwin";
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
              bolicinza2 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverme")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "onelossonewintwoloss") {
              ganhador1 = "onewinonelosstreewin";
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
              bolicinza4 = game.add
                .image(480, 520, "bolverme")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "twolossonewinoneloss") {
              ganhador1 = "twowinonelosstwoloss";
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
              bolicinza2 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverme")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "fourloss") {
              ganhador1 = "fivewin";
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
              bolicinza2 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverme")
                .setInteractive();
              bolicinza4.setVisible(true);
            }
            newgame.setVisible(true);

           socket.emit("decisao", sala, {
              item: "altura",
              valor: "primeiro",
              carta: carta.nome,
              ganhador: ganhador1,
            });
          } else if (escolha.valor < carta.altura.valor) {
            var placara = game.add.image(400, 200, "vitoria").setInteractive();
            placara.setVisible(true);
            if (contage === "twowintwoloss") {
              ganhador2 = "twolosstwowinoneloss";
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
              bolicinza4 = game.add
                .image(480, 520, "bolverde")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "onewinonelossonewinoneloss") {
              ganhador2 = "onelossonewinonelossonewinoneloss";
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
              bolicinza3 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza3.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverde")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "treewinoneloss") {
              ganhador2 = "treelossonewinoneloss";
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
              bolicinza3 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza3.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverde")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "twolossonewinoneloss") {
              ganhador2 = "twowinonelossonewinoneloss";
              contadorloss = game.add
                .image(360, 520, "bolverme")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverde")
                .setInteractive();
              bolicinza3 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza3.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverde")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "onewintreeloss") {
              ganhador2 = "onelosstreewinoneloss";
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
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza3.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverde")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "fourloss") {
              ganhador2 = "fourwinoneloss";
              contadorloss = game.add
                .image(360, 520, "bolverme")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverme")
                .setInteractive();
              bolicinza3 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza3.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverde")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "onelossonewintwoloss") {
              ganhador2 = "onewinonelosstwowinoneloss";
              contadorloss = game.add
                .image(360, 520, "bolverde")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverme")
                .setInteractive();
              bolicinza3 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza3.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverde")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "twowinonelossonewin") {
              ganhador2 = "twolossonewintwoloss";
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
              bolicinza4 = game.add
                .image(480, 520, "bolverde")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "onewinonelosstwowin") {
              ganhador2 = "onelossonewintreeloss";
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
              bolicinza4 = game.add
                .image(480, 520, "bolverde")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "onewintwolossonewin") {
              ganhador2 = "onelosstwowintwoloss";
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
              bolicinza4 = game.add
                .image(480, 520, "bolverde")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "onelosstwowinoneloss") {
              ganhador2 = "onewintwolossonewinoneloss";
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
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza3.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverde")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "onelossonewinonelossonewin") {
              ganhador2 = "onewinonelossonewintwoloss";
              contadorloss = game.add
                .image(360, 520, "bolverde")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverme")
                .setInteractive();
              bolicinza3 = game.add
                .image(440, 520, "bolverde")
                .setInteractive();
              bolicinza3.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverde")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "treelosonewin") {
              ganhador2 = "treewintwoloss";
              contadorloss = game.add
                .image(360, 520, "bolverme")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverme")
                .setInteractive();
              bolicinza3 = game.add
                .image(440, 520, "bolverde")
                .setInteractive();
              bolicinza3.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverde")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "twolosstwowin") {
              ganhador2 = "twowintreeloss";
              contadorloss = game.add
                .image(360, 520, "bolverme")
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
              bolicinza4 = game.add
                .image(480, 520, "bolverde")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "onelosstreewin") {
              ganhador2 = "onewinfourloss";
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
              bolicinza4 = game.add
                .image(480, 520, "bolverde")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "fourwin") {
              ganhador2 = "fiveloss";
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
              bolicinza4 = game.add
                .image(480, 520, "bolverde")
                .setInteractive();
              bolicinza4.setVisible(true);
            }
            newgame.setVisible(true);
           socket.emit("decisao", sala, {
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
            socket.emit("decisao",sala, {
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
           var placara = game.add.image(400, 100, "derrota").setInteractive();
           placara.setVisible(true);
            if (contage === "onewintwolossonewin") {
              ganhador1 = "onelosstwowinonelossonewin";
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
              bolicinza3 = game.add
                .image(440, 520, "bolverde")
                .setInteractive();
              bolicinza3.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverme")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "treelossonewin") {
              ganhador1 = "treewinonelossonewin";
              contadorloss = game.add
                .image(360, 520, "bolverme")
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
              bolicinza4 = game.add
                .image(480, 520, "bolverme")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "twowinonelossonewin") {
              ganhador1 = "twolossonewinonelossonewin";
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
              bolicinza3 = game.add
                .image(440, 520, "bolverde")
                .setInteractive();
              bolicinza3.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverme")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "onelossonewinonelossonewin") {
              ganhador1 = "onewinonelossonewinonelossonewin";
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
              bolicinza3 = game.add
                .image(440, 520, "bolverde")
                .setInteractive();
              bolicinza3.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverme")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "fourwin") {
              ganhador1 = "fourlossonewin";
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
              bolicinza3 = game.add
                .image(440, 520, "bolverde")
                .setInteractive();
              bolicinza3.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverme")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "onelosstreewin") {
              ganhador1 = "onewintreelossonewin";
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
              bolicinza3 = game.add
                .image(440, 520, "bolverde")
                .setInteractive();
              bolicinza3.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverme")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "twolosstwowin") {
              ganhador1 = "twowintwolossonewin";
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
              bolicinza4 = game.add
                .image(480, 520, "bolverme")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "onewinonelosstwowin") {
              ganhador1 = "onelossonewintwolossonewin";
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
              bolicinza2 = game.add
                .image(440, 520, "bolverde")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverme")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "onelosstwowinoneloss") {
              ganhador1 = "onewintwolosstwowin";
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
              bolicinza2 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverme")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "treewinoneloss") {
              ganhador1 = "treelosstwowin";
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
              bolicinza2 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverme")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "twowintwoloss") {
              ganhador1 = "twolosstreewin";
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
              bolicinza2 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverme")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "onewinonelossonewinoneloss") {
              ganhador1 = "onelossonewinonelosstwowin";
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
              bolicinza2 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverme")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "onewintreeloss") {
              ganhador1 = "onelossfourwin";
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
              bolicinza2 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverme")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "onelossonewintwoloss") {
              ganhador1 = "onewinonelosstreewin";
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
              bolicinza4 = game.add
                .image(480, 520, "bolverme")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "twolossonewinoneloss") {
              ganhador1 = "twowinonelosstwoloss";
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
              bolicinza2 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverme")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "fourloss") {
              ganhador1 = "fivewin";
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
              bolicinza2 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza2.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverme")
                .setInteractive();
              bolicinza4.setVisible(true);
            }
            newgame.setVisible(true);

           socket.emit("decisao", sala, {
              item: "idade",
              valor: "primeiro",
              carta: carta.nome,
              ganhador: ganhador1,
            });
          } else if (escolha.valor < carta.idade.valor) {
            var placara = game.add.image(400, 100, "vitoria").setInteractive();
            placara.setVisible(true);
            if (contage === "twowintwoloss") {
              ganhador2 = "twolosstwowinoneloss";
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
              bolicinza4 = game.add
                .image(480, 520, "bolverde")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "onewinonelossonewinoneloss") {
              ganhador2 = "onelossonewinonelossonewinoneloss";
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
              bolicinza3 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza3.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverde")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "treewinoneloss") {
              ganhador2 = "treelossonewinoneloss";
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
              bolicinza3 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza3.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverde")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "twolossonewinoneloss") {
              ganhador2 = "twowinonelossonewinoneloss";
              contadorloss = game.add
                .image(360, 520, "bolverme")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverde")
                .setInteractive();
              bolicinza3 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza3.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverde")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "onewintreeloss") {
              ganhador2 = "onelosstreewinoneloss";
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
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza3.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverde")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "fourloss") {
              ganhador2 = "fourwinoneloss";
              contadorloss = game.add
                .image(360, 520, "bolverme")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverme")
                .setInteractive();
              bolicinza3 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza3.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverde")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "onelossonewintwoloss") {
              ganhador2 = "onewinonelosstwowinoneloss";
              contadorloss = game.add
                .image(360, 520, "bolverde")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverme")
                .setInteractive();
              bolicinza3 = game.add
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza3.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverde")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "twowinonelossonewin") {
              ganhador2 = "twolossonewintwoloss";
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
              bolicinza4 = game.add
                .image(480, 520, "bolverde")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "onewinonelosstwowin") {
              ganhador2 = "onelossonewintreeloss";
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
              bolicinza4 = game.add
                .image(480, 520, "bolverde")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "onewintwolossonewin") {
              ganhador2 = "onelosstwowintwoloss";
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
              bolicinza4 = game.add
                .image(480, 520, "bolverde")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "onelosstwowinoneloss") {
              ganhador2 = "onewintwolossonewinoneloss";
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
                .image(440, 520, "bolverme")
                .setInteractive();
              bolicinza3.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverde")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "onelossonewinonelossonewin") {
              ganhador2 = "onewinonelossonewintwoloss";
              contadorloss = game.add
                .image(360, 520, "bolverde")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverme")
                .setInteractive();
              bolicinza3 = game.add
                .image(440, 520, "bolverde")
                .setInteractive();
              bolicinza3.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverde")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "treelosonewin") {
              ganhador2 = "treewintwoloss";
              contadorloss = game.add
                .image(360, 520, "bolverme")
                .setInteractive();
              contadorloss.setVisible(true);
              bolicinza = game.add.image(320, 520, "bolverme").setInteractive();
              bolicinza.setVisible(true);
              bolicinza2 = game.add
                .image(400, 520, "bolverme")
                .setInteractive();
              bolicinza3 = game.add
                .image(440, 520, "bolverde")
                .setInteractive();
              bolicinza3.setVisible(true);
              bolicinza4 = game.add
                .image(480, 520, "bolverde")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "twolosstwowin") {
              ganhador2 = "twowintreeloss";
              contadorloss = game.add
                .image(360, 520, "bolverme")
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
              bolicinza4 = game.add
                .image(480, 520, "bolverde")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "onelosstreewin") {
              ganhador2 = "onewinfourloss";
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
              bolicinza4 = game.add
                .image(480, 520, "bolverde")
                .setInteractive();
              bolicinza4.setVisible(true);
            } else if (contage === "fourwin") {
              ganhador2 = "fiveloss";
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
              bolicinza4 = game.add
                .image(480, 520, "bolverde")
                .setInteractive();
              bolicinza4.setVisible(true);
            }
            newgame.setVisible(true);
           socket.emit("decisao", sala, {
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
            socket.emit("decisao", sala,{
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
              if (decisao.ganhador === "fivewin") {
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverde")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "twolosstreewin") {
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverde")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "onelossfourwin") {
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverde")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "onewinonelosstreewin") {
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverde")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "treelosstwowin") {
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverde")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "onewintwolosstwowin") {
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverde")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "twowinonelosstwowin") {
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverde")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "onelossonewinonelosstwowin") {
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverde")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "treewinonelossonewin") {
                contadordepartida2 = game.add
                  .image(360, 520, "bolverde")
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
                  .image(440, 520, "bolverme")
                  .setInteractive();
                bolicinza3.setVisible(true);
                bolicinza4 = game.add
                  .image(480, 520, "bolverde")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "onelosstwowinonelossonewin") {
                contadordepartida2 = game.add
                  .image(360, 520, "bolverde")
                  .setInteractive();
                contadordepartida2.setVisible(true);
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverde")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "twolossonewinonelossonewin") {
                contadordepartida2 = game.add
                  .image(360, 520, "bolverme")
                  .setInteractive();
                contadordepartida2.setVisible(true);
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverde")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "fourlossonewin") {
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
                  .image(440, 520, "bolverme")
                  .setInteractive();
                bolicinza3.setVisible(true);
                bolicinza4 = game.add
                  .image(480, 520, "bolverde")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "onewintreelossonewin") {
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
                  .image(440, 520, "bolverme")
                  .setInteractive();
                bolicinza3.setVisible(true);
                bolicinza4 = game.add
                  .image(480, 520, "bolverde")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "onewinonelossonewinonelossonewin") {
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
                  .image(440, 520, "bolverme")
                  .setInteractive();
                bolicinza3.setVisible(true);
                bolicinza4 = game.add
                  .image(480, 520, "bolverde")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "twowintwolossonewin") {
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
                  .image(440, 520, "bolverme")
                  .setInteractive();
                bolicinza3.setVisible(true);
                bolicinza4 = game.add
                  .image(480, 520, "bolverde")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "onelossonewintwolossonewin") {
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
                  .image(440, 520, "bolverme")
                  .setInteractive();
                bolicinza3.setVisible(true);
                bolicinza4 = game.add
                  .image(480, 520, "bolverde")
                  .setInteractive();
                bolicinza4.setVisible(true);
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
              
              if (decisao.ganhador === "fiveloss") {
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverme")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "twowintreeloss") {
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverme")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "onewinfourloss") {
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverme")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "treewintwoloss") {
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverme")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "onewinonelossonewintwoloss") {
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverme")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "twolossonewintwoloss") {
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverme")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "onelosstwowintwoloss") {
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverme")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "onelossonewintreeloss") {
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverme")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "fourwinoneloss") {
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
                  .image(440, 520, "bolverde")
                  .setInteractive();
                bolicinza3.setVisible(true);
                bolicinza4 = game.add
                  .image(480, 520, "bolverme")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "treelossonewinoneloss") {
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
                  .image(440, 520, "bolverde")
                  .setInteractive();
                bolicinza3.setVisible(true);
                bolicinza4 = game.add
                  .image(480, 520, "bolverme")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "onelossonewinonelossonewinoneloss") {
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
                  .image(440, 520, "bolverde")
                  .setInteractive();
                bolicinza3.setVisible(true);
                bolicinza4 = game.add
                  .image(480, 520, "bolverme")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "twolosstwowinoneloss") {
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
                  .image(440, 520, "bolverde")
                  .setInteractive();
                bolicinza3.setVisible(true);
                bolicinza4 = game.add
                  .image(480, 520, "bolverme")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "onelosstreewinoneloss") {
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
                  .image(440, 520, "bolverde")
                  .setInteractive();
                bolicinza3.setVisible(true);
                bolicinza4 = game.add
                  .image(480, 520, "bolverme")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "onewinonelosstwowinoneloss") {
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
                  .image(440, 520, "bolverde")
                  .setInteractive();
                bolicinza3.setVisible(true);
                bolicinza4 = game.add
                  .image(480, 520, "bolverme")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "onewintwolossonewinoneloss") {
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
                  .image(440, 520, "bolverde")
                  .setInteractive();
                bolicinza3.setVisible(true);
                bolicinza4 = game.add
                  .image(480, 520, "bolverme")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "twowinonelossonewinoneloss") {
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
                  .image(440, 520, "bolverde")
                  .setInteractive();
                bolicinza3.setVisible(true);
                bolicinza4 = game.add
                  .image(480, 520, "bolverme")
                  .setInteractive();
                bolicinza4.setVisible(true);
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
              if (decisao.ganhador === "fivewin") {
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverde")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "twolosstreewin") {
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverde")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "onelossfourwin") {
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverde")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "onewinonelosstreewin") {
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverde")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "treelosstwowin") {
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverde")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "onewintwolosstwowin") {
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverde")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "twowinonelosstwowin") {
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverde")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "onelossonewinonelosstwowin") {
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverde")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "treewinonelossonewin") {
                contadordepartida2 = game.add
                  .image(360, 520, "bolverde")
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
                  .image(440, 520, "bolverme")
                  .setInteractive();
                bolicinza3.setVisible(true);
                bolicinza4 = game.add
                  .image(480, 520, "bolverde")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "onelosstwowinonelossonewin") {
                contadordepartida2 = game.add
                  .image(360, 520, "bolverde")
                  .setInteractive();
                contadordepartida2.setVisible(true);
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverde")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "twolossonewinonelossonewin") {
                contadordepartida2 = game.add
                  .image(360, 520, "bolverme")
                  .setInteractive();
                contadordepartida2.setVisible(true);
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverde")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "fourlossonewin") {
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
                  .image(440, 520, "bolverme")
                  .setInteractive();
                bolicinza3.setVisible(true);
                bolicinza4 = game.add
                  .image(480, 520, "bolverde")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "onewintreelossonewin") {
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
                  .image(440, 520, "bolverme")
                  .setInteractive();
                bolicinza3.setVisible(true);
                bolicinza4 = game.add
                  .image(480, 520, "bolverde")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (
                decisao.ganhador === "onewinonelossonewinonelossonewin"
              ) {
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
                  .image(440, 520, "bolverme")
                  .setInteractive();
                bolicinza3.setVisible(true);
                bolicinza4 = game.add
                  .image(480, 520, "bolverde")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "twowintwolossonewin") {
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
                  .image(440, 520, "bolverme")
                  .setInteractive();
                bolicinza3.setVisible(true);
                bolicinza4 = game.add
                  .image(480, 520, "bolverde")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "onelossonewintwolossonewin") {
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
                  .image(440, 520, "bolverme")
                  .setInteractive();
                bolicinza3.setVisible(true);
                bolicinza4 = game.add
                  .image(480, 520, "bolverde")
                  .setInteractive();
                bolicinza4.setVisible(true);
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
              if (decisao.ganhador === "fiveloss") {
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverme")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "twowintreeloss") {
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverme")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "onewinfourloss") {
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverme")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "treewintwoloss") {
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverme")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "onewinonelossonewintwoloss") {
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverme")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "twolossonewintwoloss") {
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverme")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "onelosstwowintwoloss") {
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverme")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "onelossonewintreeloss") {
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverme")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "fourwinoneloss") {
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
                  .image(440, 520, "bolverde")
                  .setInteractive();
                bolicinza3.setVisible(true);
                bolicinza4 = game.add
                  .image(480, 520, "bolverme")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "treelossonewinoneloss") {
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
                  .image(440, 520, "bolverde")
                  .setInteractive();
                bolicinza3.setVisible(true);
                bolicinza4 = game.add
                  .image(480, 520, "bolverme")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (
                decisao.ganhador === "onelossonewinonelossonewinoneloss"
              ) {
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
                  .image(440, 520, "bolverde")
                  .setInteractive();
                bolicinza3.setVisible(true);
                bolicinza4 = game.add
                  .image(480, 520, "bolverme")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "twolosstwowinoneloss") {
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
                  .image(440, 520, "bolverde")
                  .setInteractive();
                bolicinza3.setVisible(true);
                bolicinza4 = game.add
                  .image(480, 520, "bolverme")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "onelosstreewinoneloss") {
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
                  .image(440, 520, "bolverde")
                  .setInteractive();
                bolicinza3.setVisible(true);
                bolicinza4 = game.add
                  .image(480, 520, "bolverme")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "onewinonelosstwowinoneloss") {
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
                  .image(440, 520, "bolverde")
                  .setInteractive();
                bolicinza3.setVisible(true);
                bolicinza4 = game.add
                  .image(480, 520, "bolverme")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "onewintwolossonewinoneloss") {
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
                  .image(440, 520, "bolverde")
                  .setInteractive();
                bolicinza3.setVisible(true);
                bolicinza4 = game.add
                  .image(480, 520, "bolverme")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "twowinonelossonewinoneloss") {
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
                  .image(440, 520, "bolverde")
                  .setInteractive();
                bolicinza3.setVisible(true);
                bolicinza4 = game.add
                  .image(480, 520, "bolverme")
                  .setInteractive();
                bolicinza4.setVisible(true);
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
              if (decisao.ganhador === "fivewin") {
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverde")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "twolosstreewin") {
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverde")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "onelossfourwin") {
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverde")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "onewinonelosstreewin") {
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverde")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "treelosstwowin") {
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverde")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "onewintwolosstwowin") {
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverde")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "twowinonelosstwowin") {
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverde")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "onelossonewinonelosstwowin") {
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverde")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "treewinonelossonewin") {
                contadordepartida2 = game.add
                  .image(360, 520, "bolverde")
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
                  .image(440, 520, "bolverme")
                  .setInteractive();
                bolicinza3.setVisible(true);
                bolicinza4 = game.add
                  .image(480, 520, "bolverde")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "onelosstwowinonelossonewin") {
                contadordepartida2 = game.add
                  .image(360, 520, "bolverde")
                  .setInteractive();
                contadordepartida2.setVisible(true);
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverde")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "twolossonewinonelossonewin") {
                contadordepartida2 = game.add
                  .image(360, 520, "bolverme")
                  .setInteractive();
                contadordepartida2.setVisible(true);
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverde")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "fourlossonewin") {
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
                  .image(440, 520, "bolverme")
                  .setInteractive();
                bolicinza3.setVisible(true);
                bolicinza4 = game.add
                  .image(480, 520, "bolverde")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "onewintreelossonewin") {
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
                  .image(440, 520, "bolverme")
                  .setInteractive();
                bolicinza3.setVisible(true);
                bolicinza4 = game.add
                  .image(480, 520, "bolverde")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (
                decisao.ganhador === "onewinonelossonewinonelossonewin"
              ) {
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
                  .image(440, 520, "bolverme")
                  .setInteractive();
                bolicinza3.setVisible(true);
                bolicinza4 = game.add
                  .image(480, 520, "bolverde")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "twowintwolossonewin") {
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
                  .image(440, 520, "bolverme")
                  .setInteractive();
                bolicinza3.setVisible(true);
                bolicinza4 = game.add
                  .image(480, 520, "bolverde")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "onelossonewintwolossonewin") {
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
                  .image(440, 520, "bolverme")
                  .setInteractive();
                bolicinza3.setVisible(true);
                bolicinza4 = game.add
                  .image(480, 520, "bolverde")
                  .setInteractive();
                bolicinza4.setVisible(true);
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
              if (decisao.ganhador === "fiveloss") {
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverme")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "twowintreeloss") {
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverme")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "onewinfourloss") {
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverme")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "treewintwoloss") {
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverme")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "onewinonelossonewintwoloss") {
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverme")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "twolossonewintwoloss") {
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverme")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "onelosstwowintwoloss") {
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverme")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "onelossonewintreeloss") {
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverme")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "fourwinoneloss") {
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
                  .image(440, 520, "bolverde")
                  .setInteractive();
                bolicinza3.setVisible(true);
                bolicinza4 = game.add
                  .image(480, 520, "bolverme")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "treelossonewinoneloss") {
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
                  .image(440, 520, "bolverde")
                  .setInteractive();
                bolicinza3.setVisible(true);
                bolicinza4 = game.add
                  .image(480, 520, "bolverme")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (
                decisao.ganhador === "onelossonewinonelossonewinoneloss"
              ) {
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
                  .image(440, 520, "bolverde")
                  .setInteractive();
                bolicinza3.setVisible(true);
                bolicinza4 = game.add
                  .image(480, 520, "bolverme")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "twolosstwowinoneloss") {
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
                  .image(440, 520, "bolverde")
                  .setInteractive();
                bolicinza3.setVisible(true);
                bolicinza4 = game.add
                  .image(480, 520, "bolverme")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "onelosstreewinoneloss") {
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
                  .image(440, 520, "bolverde")
                  .setInteractive();
                bolicinza3.setVisible(true);
                bolicinza4 = game.add
                  .image(480, 520, "bolverme")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "onewinonelosstwowinoneloss") {
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
                  .image(440, 520, "bolverde")
                  .setInteractive();
                bolicinza3.setVisible(true);
                bolicinza4 = game.add
                  .image(480, 520, "bolverme")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "onewintwolossonewinoneloss") {
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
                  .image(440, 520, "bolverde")
                  .setInteractive();
                bolicinza3.setVisible(true);
                bolicinza4 = game.add
                  .image(480, 520, "bolverme")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "twowinonelossonewinoneloss") {
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
                  .image(440, 520, "bolverde")
                  .setInteractive();
                bolicinza3.setVisible(true);
                bolicinza4 = game.add
                  .image(480, 520, "bolverme")
                  .setInteractive();
                bolicinza4.setVisible(true);
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
              if (decisao.ganhador === "fivewin") {
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverde")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "twolosstreewin") {
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverde")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "onelossfourwin") {
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverde")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "onewinonelosstreewin") {
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverde")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "treelosstwowin") {
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverde")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "onewintwolosstwowin") {
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverde")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "twowinonelosstwowin") {
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverde")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "onelossonewinonelosstwowin") {
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverde")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "treewinonelossonewin") {
                contadordepartida2 = game.add
                  .image(360, 520, "bolverde")
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
                  .image(440, 520, "bolverme")
                  .setInteractive();
                bolicinza3.setVisible(true);
                bolicinza4 = game.add
                  .image(480, 520, "bolverde")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "onelosstwowinonelossonewin") {
                contadordepartida2 = game.add
                  .image(360, 520, "bolverde")
                  .setInteractive();
                contadordepartida2.setVisible(true);
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverde")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "twolossonewinonelossonewin") {
                contadordepartida2 = game.add
                  .image(360, 520, "bolverme")
                  .setInteractive();
                contadordepartida2.setVisible(true);
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverde")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "fourlossonewin") {
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
                  .image(440, 520, "bolverme")
                  .setInteractive();
                bolicinza3.setVisible(true);
                bolicinza4 = game.add
                  .image(480, 520, "bolverde")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "onewintreelossonewin") {
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
                  .image(440, 520, "bolverme")
                  .setInteractive();
                bolicinza3.setVisible(true);
                bolicinza4 = game.add
                  .image(480, 520, "bolverde")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (
                decisao.ganhador === "onewinonelossonewinonelossonewin"
              ) {
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
                  .image(440, 520, "bolverme")
                  .setInteractive();
                bolicinza3.setVisible(true);
                bolicinza4 = game.add
                  .image(480, 520, "bolverde")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "twowintwolossonewin") {
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
                  .image(440, 520, "bolverme")
                  .setInteractive();
                bolicinza3.setVisible(true);
                bolicinza4 = game.add
                  .image(480, 520, "bolverde")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "onelossonewintwolossonewin") {
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
                  .image(440, 520, "bolverme")
                  .setInteractive();
                bolicinza3.setVisible(true);
                bolicinza4 = game.add
                  .image(480, 520, "bolverde")
                  .setInteractive();
                bolicinza4.setVisible(true);
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

              if (decisao.ganhador === "fiveloss") {
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverme")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "twowintreeloss") {
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverme")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "onewinfourloss") {
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverme")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "treewintwoloss") {
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverme")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "onewinonelossonewintwoloss") {
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverme")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "twolossonewintwoloss") {
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverme")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "onelosstwowintwoloss") {
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverme")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "onelossonewintreeloss") {
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverme")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "fourwinoneloss") {
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
                  .image(440, 520, "bolverde")
                  .setInteractive();
                bolicinza3.setVisible(true);
                bolicinza4 = game.add
                  .image(480, 520, "bolverme")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "treelossonewinoneloss") {
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
                  .image(440, 520, "bolverde")
                  .setInteractive();
                bolicinza3.setVisible(true);
                bolicinza4 = game.add
                  .image(480, 520, "bolverme")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (
                decisao.ganhador === "onelossonewinonelossonewinoneloss"
              ) {
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
                  .image(440, 520, "bolverde")
                  .setInteractive();
                bolicinza3.setVisible(true);
                bolicinza4 = game.add
                  .image(480, 520, "bolverme")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "twolosstwowinoneloss") {
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
                  .image(440, 520, "bolverde")
                  .setInteractive();
                bolicinza3.setVisible(true);
                bolicinza4 = game.add
                  .image(480, 520, "bolverme")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "onelosstreewinoneloss") {
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
                  .image(440, 520, "bolverde")
                  .setInteractive();
                bolicinza3.setVisible(true);
                bolicinza4 = game.add
                  .image(480, 520, "bolverme")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "onewinonelosstwowinoneloss") {
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
                  .image(440, 520, "bolverde")
                  .setInteractive();
                bolicinza3.setVisible(true);
                bolicinza4 = game.add
                  .image(480, 520, "bolverme")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "onewintwolossonewinoneloss") {
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
                  .image(440, 520, "bolverde")
                  .setInteractive();
                bolicinza3.setVisible(true);
                bolicinza4 = game.add
                  .image(480, 520, "bolverme")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "twowinonelossonewinoneloss") {
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
                  .image(440, 520, "bolverde")
                  .setInteractive();
                bolicinza3.setVisible(true);
                bolicinza4 = game.add
                  .image(480, 520, "bolverme")
                  .setInteractive();
                bolicinza4.setVisible(true);
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

              if (decisao.ganhador === "fivewin") {
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverde")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "twolosstreewin") {
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverde")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "onelossfourwin") {
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverde")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "onewinonelosstreewin") {
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverde")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "treelosstwowin") {
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverde")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "onewintwolosstwowin") {
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverde")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "twowinonelosstwowin") {
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverde")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "onelossonewinonelosstwowin") {
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverde")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "treewinonelossonewin") {
                contadordepartida2 = game.add
                  .image(360, 520, "bolverde")
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
                  .image(440, 520, "bolverme")
                  .setInteractive();
                bolicinza3.setVisible(true);
                bolicinza4 = game.add
                  .image(480, 520, "bolverde")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "onelosstwowinonelossonewin") {
                contadordepartida2 = game.add
                  .image(360, 520, "bolverde")
                  .setInteractive();
                contadordepartida2.setVisible(true);
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverde")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "twolossonewinonelossonewin") {
                contadordepartida2 = game.add
                  .image(360, 520, "bolverme")
                  .setInteractive();
                contadordepartida2.setVisible(true);
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverde")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "fourlossonewin") {
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
                  .image(440, 520, "bolverme")
                  .setInteractive();
                bolicinza3.setVisible(true);
                bolicinza4 = game.add
                  .image(480, 520, "bolverde")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "onewintreelossonewin") {
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
                  .image(440, 520, "bolverme")
                  .setInteractive();
                bolicinza3.setVisible(true);
                bolicinza4 = game.add
                  .image(480, 520, "bolverde")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (
                decisao.ganhador === "onewinonelossonewinonelossonewin"
              ) {
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
                  .image(440, 520, "bolverme")
                  .setInteractive();
                bolicinza3.setVisible(true);
                bolicinza4 = game.add
                  .image(480, 520, "bolverde")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "twowintwolossonewin") {
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
                  .image(440, 520, "bolverme")
                  .setInteractive();
                bolicinza3.setVisible(true);
                bolicinza4 = game.add
                  .image(480, 520, "bolverde")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "onelossonewintwolossonewin") {
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
                  .image(440, 520, "bolverme")
                  .setInteractive();
                bolicinza3.setVisible(true);
                bolicinza4 = game.add
                  .image(480, 520, "bolverde")
                  .setInteractive();
                bolicinza4.setVisible(true);
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
              if (decisao.ganhador === "fiveloss") {
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverme")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "twowintreeloss") {
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverme")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "onewinfourloss") {
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverme")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "treewintwoloss") {
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverme")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "onewinonelossonewintwoloss") {
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverme")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "twolossonewintwoloss") {
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverme")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "onelosstwowintwoloss") {
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverme")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "onelossonewintreeloss") {
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
                bolicinza4 = game.add
                  .image(480, 520, "bolverme")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "fourwinoneloss") {
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
                  .image(440, 520, "bolverde")
                  .setInteractive();
                bolicinza3.setVisible(true);
                bolicinza4 = game.add
                  .image(480, 520, "bolverme")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "treelossonewinoneloss") {
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
                  .image(440, 520, "bolverde")
                  .setInteractive();
                bolicinza3.setVisible(true);
                bolicinza4 = game.add
                  .image(480, 520, "bolverme")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (
                decisao.ganhador === "onelossonewinonelossonewinoneloss"
              ) {
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
                  .image(440, 520, "bolverde")
                  .setInteractive();
                bolicinza3.setVisible(true);
                bolicinza4 = game.add
                  .image(480, 520, "bolverme")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "twolosstwowinoneloss") {
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
                  .image(440, 520, "bolverde")
                  .setInteractive();
                bolicinza3.setVisible(true);
                bolicinza4 = game.add
                  .image(480, 520, "bolverme")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "onelosstreewinoneloss") {
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
                  .image(440, 520, "bolverde")
                  .setInteractive();
                bolicinza3.setVisible(true);
                bolicinza4 = game.add
                  .image(480, 520, "bolverme")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "onewinonelosstwowinoneloss") {
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
                  .image(440, 520, "bolverde")
                  .setInteractive();
                bolicinza3.setVisible(true);
                bolicinza4 = game.add
                  .image(480, 520, "bolverme")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "onewintwolossonewinoneloss") {
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
                  .image(440, 520, "bolverde")
                  .setInteractive();
                bolicinza3.setVisible(true);
                bolicinza4 = game.add
                  .image(480, 520, "bolverme")
                  .setInteractive();
                bolicinza4.setVisible(true);
              } else if (decisao.ganhador === "twowinonelossonewinoneloss") {
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
                  .image(440, 520, "bolverde")
                  .setInteractive();
                bolicinza3.setVisible(true);
                bolicinza4 = game.add
                  .image(480, 520, "bolverme")
                  .setInteractive();
                bolicinza4.setVisible(true);
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
        if (
          (contage === "fivewin",
          "treewinonelossonewin",
          "twowinonelosstwowin",
          "onewinonelosstreewin",
          "onelossfourwin",
          "onelosstwowinonelossonewin",
          "onelossonewinonelosstwowin",
          "twolosstreewin",
          "onewinonelossonewinonelossonewin",
          "twowintwolossonewin",
          "onewintwolosstwowin",
          "treewintwoloss",
          "fourwinoneloss",
          "twowinonelossonewinoneloss",
          "onewinonelosstwowinoneloss",
          "onelosstreewinoneloss")
        ) {
          var placara = game.add.image(400, 100, "vitoria").setInteractive();
          placara.setVisible(true);
          vencedor.setVisible(false);
          contagem = 0;
          newgame.setVisible(false);
        } else if (
          (contage === "fiveloss",
          "onewinfourloss",
          "twowintreeloss",
          "onewinonelossonewintwoloss",
          "onewintwolossonewinoneloss",
          "onelosstwowintwoloss",
          "twolosstwowinoneloss",
          "onelossonewinonelossonewinoneloss",
          "treelossonewinoneloss",
          "onelossonewintreeloss",
          "twolossonewintwoloss",
          "twolossonewinonelossonewin",
          "fourlossonewin",
          "treelosstwowin",
          "onewintreelossonewin",
          "onelossonewintwolossonewin")
        ) {
          var placara = game.add.image(400, 100, "derrota").setInteractive();
          placara.setVisible(true);
          vencedor.setVisible(false);
          contagem = 0;
          newgame.setVisible(false);
        }

      });
    }
  });
};

cena1.update = function () { };

export { cena1 };
