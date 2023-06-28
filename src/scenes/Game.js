import Phaser from "phaser";

class Game extends Phaser.Scene {
  constructor() {
    super({ key: "GameScene" });
  }

  init(data) {}

  preload() {
    this.load.spritesheet("hero-run-sheet", "assets/hero/run.png", {
      frameWidth: 32,
      frameHeight: 64,
    });
  }

  create(data) {
    this.anims.create({
      
    })
    this.add.sprite(400, 300, "hero-run-sheet");
  }

  update(time, delta) {}
}

export default Game;
