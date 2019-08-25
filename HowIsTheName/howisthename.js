import Bootloader  from './bootloader.js';
import Play from './scenes/Play.js';
const config = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    parent: "contenedor",
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
    ]
};
new Phaser.Game(config);