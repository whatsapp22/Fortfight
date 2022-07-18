import { cena0 } from "./cena0.js";
import { cena1 } from "./cena1.js";

var config = {
  type: Phaser.AUTO,
  width: 1280,
  height: 720,
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
  scene: [cena1,cena0],
};

const game = new Phaser.Game(config);
