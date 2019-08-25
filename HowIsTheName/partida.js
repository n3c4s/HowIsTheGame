class partida extends Phaser.Scenes{
    constructor(){
        super({key: "partida"});
    }
    preload(){
        this.load.image("Naranja", "./assets/ice.jpg");

    }
}
export default partida;