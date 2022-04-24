var cena1 = new Phaser.Scene("Cena 1");
var button1
var button2
var button3
var button4
var button5
cena1.preload = function () {
    this.load.image('fundi', 'assets/fundi.png');
    this.load.image('cartlincoln', 'assets/cartlincoln.png');
    this.load.image('habilidadelincoln', 'assets/habilidadelincoln.png');
    this.load.image('simpatialincoln', 'assets/simpatialincoln.png');
    this.load.image('conhecimentolincoln', 'assets/conhecimentolincoln.png');
    this.load.image('alturalincoln', 'assets/alturalincoln.png');
    this.load.image('idadelincoln', 'assets/idadelincoln.png');
}

cena1.create = function () {
    //  A simple background for our game
    this.add.image(400, 300, 'fundi');
    this.add.image(400, 300, 'cartlincoln');
    this.add.image(400, 300, 'habilidadelincoln');
    this.add.image(400, 290, 'simpatialincoln');
    this.add.image(400, 310, 'conhecimentolincoln');
    this.add.image(400, 330, 'alturalincoln');
    this.add.image(400, 350, 'idadelincoln');

}
cena1.update = function () {

}

export { cena1 };