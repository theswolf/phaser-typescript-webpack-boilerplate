import "phaser";

import { config } from "./config";

class Game extends Phaser.Game {
  constructor() {
    super(config);
    //this.facebook.gameStarted();
    //this.scene.add("Game", GameScene);
    //this.scene.start("Game");
  }
}

FBInstant.initializeAsync().then(function () {
  new Game();
});
