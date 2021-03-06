import { cena0 } from "./cena0.js";
import { cena1 } from "./cena1.js";
import { cena2 } from "./cena2.js";

var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: "game-container",
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: true,
    },
  },
  scale: {
    mode: Phaser.Scale.FIT,
    parent: "game-container",
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 800,
    height: 600,
  },
  scene: [cena1],
};

const game = new Phaser.Game(config);
