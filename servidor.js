const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server, {
  cors: {
    origins: ["https://cliente.ifsc.cloud", "https://*.gitpod.io"],
  },
});
const PORT = process.env.PORT || 3000;
var jogadores = {
  primeiro: undefined,
  segundo: undefined,
};

// Disparar evento quando jogador entrar na partida
io.on("connection", (socket) => {
  if (jogadores.primeiro === undefined) {
    jogadores.primeiro = socket.id;
  } else if (jogadores.segundo === undefined) {
    jogadores.segundo = socket.id;
  }
  io.emit("jogadores", jogadores);
  console.log("+Lista de jogadores: %s", jogadores);

  // Sorteio de uma carta
  socket.on("carta-escolhida", (carta) => {
    socket.broadcast.emit("carta-escolhida", carta);
  });

  // Escolha de um item da carta
  socket.on("escolha", (escolha) => {
    socket.broadcast.emit("escolha", escolha);
  });

  // Decisão de um item da carta
  socket.on("decisao", (escolha) => {
    socket.broadcast.emit("decisao", escolha);
  });

  // Sinalização de áudio: oferta
  socket.on("offer", (socketId, description) => {
    socket.to(socketId).emit("offer", socket.id, description);
  });

  // Sinalização de áudio: atendimento da oferta
  socket.on("answer", (socketId, description) => {
    socket.to(socketId).emit("answer", description);
  });

  // Sinalização de áudio: envio dos candidatos de caminho
  socket.on("candidate", (socketId, signal) => {
    socket.to(socketId).emit("candidate", signal);
  });

  // Disparar evento quando jogador sair da partida
  socket.on("disconnect", () => {
    if (jogadores.primeiro === socket.id) {
      jogadores.primeiro = undefined;
    }
    if (jogadores.segundo === socket.id) {
      jogadores.segundo = undefined;
    }
    io.emit("jogadores", jogadores);
    console.log("-Lista de jogadores: %s", jogadores);
  });

  socket.on("estadoDoJogador", (estado) => {
    socket.broadcast.emit("desenharOutroJogador", estado);
  });
});

// Abrir porta para HTTPS/WSS
app.use(express.static("./Cliente"));
server.listen(PORT, () => console.log(`Server listening on port ${PORT}!`));
