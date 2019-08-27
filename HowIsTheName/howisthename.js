import Bootloader  from './bootloader.js';
import Play from './scenes/Play.js';
$(window).on('load', function() {
    //code here

        const config = {
            type: Phaser.AUTO,
            scale: {
                mode: Phaser.Scale.FIT,
                parent: 'contenedor',
                autoCenter: Phaser.Scale.CENTER_BOTH,
                width: 1280,
                height: 720
            },
            physics: {
                default: "arcade",
                arcade:{
                    gravity:{
                        y: 0
                    }
                }
            },
            scene: [
                Bootloader,
                Play
            ],
            render: {
                pixelArt: true
            }
        };
        new Phaser.Game(config);
});