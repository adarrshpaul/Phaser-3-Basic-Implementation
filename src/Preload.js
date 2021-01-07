import { Scene, Phaser } from "phaser";
import { game } from "./index";
class Preload extends Scene {
  constructor(sceneConfig) {
    super(sceneConfig);
  }
  init() {
    console.log("Preload");
  }
  preload() {
    for(let i =0; i < 10; i++){
      this.load.image("ball", "src/assets/GraphicsGame/GamePlay/redball.png");
    }


    this.load.image(
      "gamePad",
      "src/assets/GraphicsGame/GamePlay/Controller.png"
    );
    this.load.image(
      "leftArrow",
      "src/assets/GraphicsGame/GamePlay/leftArrow.png"
    );
    this.load.image(
      "rightArrow",
      "src/assets/GraphicsGame/GamePlay/rightArrow.png"
    );
    this.load.image(
      "upperArrow",
      "src/assets/GraphicsGame/GamePlay/upperArrow.png"
    );
    this.load.image(
      "downArrow",
      "src/assets/GraphicsGame/GamePlay/downArrow.png"
    );
    this.load.image(
      "downArrow",
      "src/assets/GraphicsGame/GamePlay/coinGold.png"
    );

    /**Assets for game resume, and pause */
    this.load.image("pause", "src/assets/GraphicsGame/MenuPage/PAUSE.png");
    this.load.image("resume", "src/assets/GraphicsGame/MenuPage/RESUME.png");
    this.load.image("pauseBg", "src/assets/GraphicsGame/MenuPage/PauseBg.png");
    // map made with Tiled in JSON format
    this.load.tilemapTiledJSON("map", "src/assets/GraphicsGame/GamePlay/map.json");
    // tiles in spritesheet
    this.load.spritesheet("tiles", "src/assets/GraphicsGame/GamePlay/tiles.png", {
      frameWidth: 70,
      frameHeight: 70,
    });
    // simple coin image
    this.load.spritesheet("coin", "src/assets/GraphicsGame/GamePlay/coinGold.png",{
      frameWidth: 70,
      frameHeight: 70,
    });
    this.load.image("clouds", "src/assets/GraphicsGame/GamePlay/CloudsV2.png");
    this.load.image("blue", "src/assets/GraphicsGame/GamePlay/blue.png");
    this.load.spritesheet("fire", "src/assets/GraphicsGame/GamePlay/fire1.png",
    {
      frameWidth: 40,
      frameHeight: 70,
    });
    /**Load Audio files */
    this.load.audio('up',"src/assets/AudioGame/upSound.mp3");
    this.load.audio('out',"src/assets/AudioGame/out.mp3");
    this.load.audio('score',"src/assets/AudioGame/coins_collect.mp3");
    this.load.audio('collision',"src/assets/AudioGame/collision.mp3");
    this.load.audio('wave',"src/assets/AudioGame/wave.mp3");
    this.load.audio('bg',"src/assets/AudioGame/untitled.mp3");
    this.load.on("progress", this.updateBar, {
      scene: this,
    });
  }
  /** This function is called everytime, any asset is loaded.
   */
  updateBar(percentage) {
    //Adding Backgorund Color
    this.scene.add.image(0, 0, "PreloadBg").setOrigin(0);
    //Adding Title
    //Adding Loading Text
    var loadingText = this.scene.add.image(
      game.config.width / 2 - 340,
      game.config.height / 2,
      "Loading"
    );
    loadingText.setScale(0.2);

    //Adding Loading Bar.
    this.loadingBarBgX = game.config.width / 2 - 600;
    this.loadingBarBgY = game.config.height / 2 + 100;
    this.loadingBar = this.scene.add
      .image(this.loadingBarBgX - 122, this.loadingBarBgY, "LoadingBar")
      .setScale(0.14, 0.23)
      .setOrigin(0, 0);
    //  this.loadingBar.scaleX=percentage;
    this.loadingBar.setCrop(0, 0, 11700 * percentage, 200);
    percentage = percentage * 100;
    
    console.log(this.loadingBar)
    //Adding Loading Bar Bg
    var loadingBarBg = this.scene.add
      .image(this.loadingBarBgX - 136, this.loadingBarBgY - 17, "LoadingBarBg")
      .setScale(0.14, 0.2)
      .setOrigin(0, 0);

    console.log("Loading..." + percentage);
  }
  /** This function is called when the game is loaded
   @see Refer this resource https://photonstorm.github.io/phaser3-docs/Phaser.Loader.Events.html
  */
  complete() {
    this.scene.start("game_screen"); //After all the preload functionality is loaded then only, call the start the  next scene.
  }
  create() {}
  update() {
    this.complete();
  }
}
export default Preload;
