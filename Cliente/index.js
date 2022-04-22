import { cena0 } from "./cena0.js";
import { cena1 } from "./cena1.js";

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: "game-container",
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: true
        }
    },
    scene: [cena0, cena1]
};

const game = new Phaser.Game(config);
