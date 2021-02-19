import "phaser";

import logoImg from "../assets/logo.png";

export class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: "Game", active: false });
  }

  preload() {
    this.facebook.once("startgame", this.startGame, this);
    this.facebook.showLoadProgress(this);
    this.load.image("logo", logoImg);
  }

  startGame() {
    debugger;
    this.scene.start("Game");
  }

  create() {
    const width = this.game.config.width;
    const height = this.game.config.height;
    const logo = this.add.image(Number(width) / 2, Number(height) / 2, "logo");

    this.tweens.add({
      targets: logo,
      y: height,
      //x: width,
      duration: 2000,
      ease: "Power2",
      yoyo: true,
      loop: -1,
    });
    //this.facebook.gameStarted();
  }
}
