import { cena1 } from "./cena1.js";

var cena0 = new Phaser.Scene("Cena 0");
cena0.preload = function() {
    
    this.load.image('fundi', 'assets/fundi.jpg');
    this.load.image('start', 'assets/start.png');
    this.load.image("astro", "assets/astroinicio.png");
    this.load.image("astro2", "assets/astroinicio2.png");
}

cena0.create = function() {
    //  A simple background for our game
    this.add.image(400, 300, 'fundi');
    this.add.image(280, 250, "astro");
    this.add.image(560, 350, "astro2");

    var button = this.add.image(400, 450, "start", 0).setInteractive();

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