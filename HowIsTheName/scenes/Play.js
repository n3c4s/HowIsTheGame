class Play extends Phaser.Scene{
    constructor(){
        super({key: "Play"});
        this.score = 0;
        this.tiempo = 0;
        this.maxobjects = 2;
        this.ini = false;
    }

    create(){
        this.fondo = this.add.image(640,360, "Background");
        this.fondo.setScale(1.4);
        console.log(window.Imagen1API);
        this.imagen1 = this.physics.add.sprite (0,200, "Naranja");
        this.imagen1.displayWidth = 200;
        this.imagen1.displayHeight = 200;
        this.imagen2 = this.physics.add.sprite(0,650,"Ice");
        this.imagen2.displayWidth = 200;
        this.imagen2.displayHeight = 200;
        this.muerte = this.physics.add.sprite(1270,500, "End");
        this.muerte.body.setImmovable(true);
        this.physics.add.collider(this.imagen1,this.muerte,this.muere, null, this);
        this.physics.add.collider(this.imagen2,this.muerte,this.muere1, null, this);
        this.start = this.add.text(600, 360, 'START', { fontSize: '64px', fill: '#ffffff' });
        this.start.setInteractive();
        this.start.on('pointerdown',() => { this.iniciar();});
      //this.imagen1.body.collideWorldBounds = true;

        this.scoreText = this.add.text(600, 16, 'score: 0', { fontSize: '32px', fill: '#ffffff' });



     // this.imagen1.body.onCollide = true;
        //this.imagen1.setCollideWorldBounds(true);
    }
    update(){

        if(this.maxobjects == 0){
            this.scorefinal = this.score;
            this.GameOverScoreFinal = this.add.text(350, 150, 'Your max score: ' + this.scorefinal, { fontSize: '48px', fill: '#ffffff' });
            this.GameOverText = this.add.text(450, 300, 'GAMEOVER', { fontSize: '64px', fill: '#ffffff' });
            this.GameOverText2 = this.add.text(350, 400, 'Click here For Reload The Game', { fontSize: '32px', fill: '#ffffff' });
            this.GameOverText2.setInteractive();
            this.GameOverText2.on('pointerdown', () => { this.reiniciar(); });
            this.maxobjects = 2;
            this.ini = false;
            this.scoreText.setVisible(false);
            this.time.timeScale = 0;

        }
        //console.log(window.Imagen1API);

    }
    actualizarcontador(){
        this.tiempo++;
        
    }
    reiniciar(){
        this.score = 0;
        this.scene.restart();
    }
    iniciar(){
        this.imagen1.setVelocityX(100);
        this.imagen2.setVelocityX(90);
        this.start.setVisible(false);
        this.ini = true;
        this.input.keyboard.on("keydown_" + window.Nombre1API.charAt(0), () => {
            this.imagen1.destroy();
            this.sumapuntos();
        });
        this.input.keyboard.on("keydown_" + window.Nombre2API.charAt(0), () => {
            this.imagen2.destroy();
            this.sumapuntos();
        });
        this.timedEvent = this.time.addEvent({ delay: 1000, callback: this.actualizarcontador, callbackScope: this,loop: true});

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