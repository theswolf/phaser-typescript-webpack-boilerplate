import "phaser";
import { GameScene } from "./scenes/GameScene";

export const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: window.innerWidth,
  height: window.innerHeight,
  scene: [GameScene],
};

//export default config;
