var cena1 = new Phaser.Scene("Cena 1");
var button1
var button2
var button3
var button4
var button5
cena1.preload = function () {
    this.load.image('fundi', 'assets/fundi.png');
    this.load.image('cartlincoln', 'assets/cartlincoln.png');
}

cena1.create = function () {
    //  A simple background for our game
    this.add.image(400, 300, 'fundi');
    this.add.image(400, 300, 'cartlincoln');

}
cena1.update = function () {

}

export { cena1 };