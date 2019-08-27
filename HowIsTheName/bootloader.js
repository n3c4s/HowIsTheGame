class Bootloader extends Phaser.Scene{
    constructor(){
        super({key: "BootLoader"});
    }
    preload(){
        this.load.on("complete", () =>{
            this.scene.start("Play");

        });
        this.load.image("Naranja", "./assets/orange.jpg");
        this.load.image("Ice", "./assets/ice.jpg");
        this.load.image("Background", "./assets/background.jpg");
        this.load.image("End","./assets/end.png");
        this.load.image("Start", "./assets/start.png");

    }
}
export default Bootloader;