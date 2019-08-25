class Play extends Phaser.Scene{
    constructor(){
        super({key: "Play"});
        this.score = 0;
        this.tiempo = 0;
        this.maxobjects = 2;
    }

    create(){
        this.fondo = this.add.image(960,540, "Background");
        this.fondo.setScale(2.2);
        this.imagen1 = this.physics.add.sprite (0,200, "Naranja");
        this.imagen1.displayWidth = 300;
        this.imagen1.displayHeight = 300;
        this.imagen2 = this.physics.add.sprite(0,650,"Ice");
        this.imagen2.displayWidth = 300;
        this.imagen2.displayHeight = 300;
        this.muerte = this.physics.add.sprite(1910,500, "End");
        this.muerte.body.setImmovable(true);
        this.physics.add.collider(this.imagen1,this.muerte,this.muere, null, this);
        this.physics.add.collider(this.imagen2,this.muerte,this.muere1, null, this);
      //this.imagen1.body.collideWorldBounds = true;
        this.imagen1.setVelocityX(100);
        this.imagen2.setVelocityX(90);
        this.scoreText = this.add.text(860, 16, 'score: 0', { fontSize: '32px', fill: '#ffffff' });
        this.timedEvent = this.time.addEvent({ delay: 1000, callback: this.actualizarcontador, callbackScope: this,loop: true});
        this.input.keyboard.on("keydown_N", () => {
            this.imagen1.destroy();
            this.sumapuntos();
        });
        this.input.keyboard.on("keydown_M", () => {
            this.imagen2.destroy();
            this.sumapuntos();
        });

     // this.imagen1.body.onCollide = true;
        //this.imagen1.setCollideWorldBounds(true);
    }
    update(time,delta){
        if(this.maxobjects == 0){
            this.GameOverText = this.add.text(860, 540, 'GAMEOVER', { fontSize: '64px', fill: '#ffffff' });
            this.GameOverText2 = this.add.text(860, 690, 'Click here For Reload The Game', { fontSize: '32px', fill: '#ffffff' });
            this.GameOverText2.setInteractive();
            this.GameOverText2.on('pointerdown', () => { this.scene.restart(); });
            this.maxobjects = 2;

        }
    }
    actualizarcontador(){
        this.tiempo++;
    }
    muere(){
        this.imagen1.destroy();
        this.maxobjects--;
    }
    muere1(){
        this.imagen2.destroy();
        this.maxobjects--;

    }
    sumapuntos(){
        this.score += 10 - this.tiempo;
        this.scoreText.setText('Score: ' + this.score);
        this.tiempo = 0;
        this.maxobjects--;


    }
    render(){
        this.game.debug.text(score);
    }
}
export default Play;