import { cena1 } from "./cena1.js";

var cena0 = new Phaser.Scene("Cena 0");
cena0.preload = function() {
    
    this.load.image('fundi', 'assets/fundi.png');
    this.load.image('start', 'assets/start.png');
}

cena0.create = function() {
    //  A simple background for our game
    this.add.image(400, 300, 'fundi');
    var button = this.add.image(400, 300, "start", 0).setInteractive();

    // Ao clicar no botão, inicia a cena 1
    button.on(
        "pointerdown",
        function () {
            this.scene.start(cena1);
        },
        this
    );
};

cena0.update = function () {
}
export { cena0 };