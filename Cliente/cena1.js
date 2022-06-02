var cena1 = new Phaser.Scene("Cena 1");
import { cena2 } from "./cena2.js";
var cartas = [
  {
    name: "lincoln",
    fundo: "assets/cartlincoln.png",
    habilidade: {
      valor: "90",
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
      valor: "99",
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
    name: "lulsonaro",
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

// Descobrir a primeira carta
var carta1 = cartas[Math.floor(Math.random() * 2)];
console.log(carta1);
var carta2 = cartas[Math.floor(Math.random() * 2)];
console.log(carta2);

while (carta1.name === carta2.name) {
  carta2 = cartas[Math.floor(Math.random() * 2)];
  console.log(carta2);
}

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
var novojogo;

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
  this.load.image("capture", "assets/capture.png");
  this.load.image("fundograde", "assets/fundograde.png");
  this.load.image("bolverde", "assets/bolinhaverde.png");
  this.load.image("bolverme", "assets/bolinhavermelha.png");
  this.load.image("bolcinza", "assets/bolinhacinza.png");
  this.load.image("newgame", "assets/gamenew.png");
};

cena1.create = function () {
  this.add.image(400, 300, "fundi");

  // Placar
  placarTexto1 = this.add.text(100, 75, placar, {
    fontSize: "32px",
    fill: "#ffffff",
  });
  placarTexto2 = this.add.text(450, 75, placar, {
    fontSize: "32px",
    fill: "#ffffff",
  });
  vencedor = this.add.text(20, 50, textven, {
    fontSize: "32px",
    fill: "#ffffff",
  });

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
  var contadordepartida1 = this.add.image(130, 520, "bolcinza").setInteractive();
  var contadordepartida2 = this.add.image(530, 520, "bolcinza").setInteractive();
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
        contadordepartida1 = this.add.image(130, 520, "bolverde").setInteractive();
        contadordepartida1.setVisible(true);
        contadordepartida2.setVisible(false);
        newgame = this.add.image(400, 520, "newgame").setInteractive();
        newgame.setVisible(true);
        newgame.on("pointerdown", function () {
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
        });
      }
      else if (carta1.habilidade.valor < carta2.habilidade.valor) {
        placarTexto1.setVisible(false);
        placarTexto2.setVisible(false);
        vencedor.setVisible(true);
        textven = carta2.name + " GANHOU";
        vencedor.setText(textven);
        contadordepartida2 = this.add.image(530, 520, "bolverde").setInteractive();
        contadordepartida1.setVisible(false);
        contadordepartida2.setVisible(true);
        newgame = this.add.image(400, 520, "newgame").setInteractive();
        newgame.setVisible(true);
      } else {
        placarTexto1.setVisible(false);
        placarTexto2.setVisible(false);
        vencedor.setVisible(true);
        textven = "EMPATE";
        vencedor.setText(textven);
        contadordepartida1.setVisible(true);
        contadordepartida2.setVisible(true);
        newgame = this.add.image(400, 520, "newgame").setInteractive();
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

    if (carta1.simpatia.valor > carta2.simpatia.valor) {
      placarTexto1.setVisible(false);
      placarTexto2.setVisible(false);
      vencedor.setVisible(true);
      textven = carta1.name + " GANHOU";
      vencedor.setText(textven);
      contadordepartida1 = this.add.image(130, 520, "bolverde").setInteractive();
      contadordepartida1.setVisible(true);
      contadordepartida2.setVisible(false);
      newgame = this.add.image(400, 520, "newgame").setInteractive();
      newgame.setVisible(true);


    } else if (carta1.simpatia.valor < carta2.simpatia.valor) {
      placarTexto1.setVisible(false);
      placarTexto2.setVisible(false);
      vencedor.setVisible(true);
      textven = carta2.name + " GANHOU";
      vencedor.setText(textven);
      contadordepartida2 = this.add.image(530, 520, "bolverde").setInteractive();
      contadordepartida1.setVisible(false);
      contadordepartida2.setVisible(true);
      newgame = this.add.image(400, 520, "newgame").setInteractive();
      newgame.setVisible(true);
      
    } else {
      placarTexto1.setVisible(false);
      placarTexto2.setVisible(false);
      vencedor.setVisible(true);
      textven = "EMPATE";
      vencedor.setText(textven);
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
      } else if (carta1.habilidade.valor < carta2.habilidade.valor) {
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
