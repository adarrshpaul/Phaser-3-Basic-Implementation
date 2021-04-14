import { Scene } from "phaser";
import { game } from "./index";
class MenuPage extends Scene {
  constructor(sceneConfigMenu) {
    super(sceneConfigMenu);
  }
  create() {
    this.add.image(0, 0, "PreloadBg").setOrigin(0);
    this.loadingText = this.add.image(
      game.config.width / 2 - 550,
      game.config.height / 2 - 200,
      "playButton"
    );

    this.loadingText.setScale(1);
    this.loadingText.setInteractive();
    this.loadingText.on('pointerdown', ()=>this.scene.start('game_screen'));

    /**Adding the player name */
    this.playerName =  this.add.text(game.config.width/2 - 480, game.config.height/2 + 48,
    `Hi, ${this.facebook.playerName}`,{
      fontSize: "42px",
      fontFamily: "sans-serif",
      color: "#ffffff",
      stroke: "#000000",
      strokeThickness: 3
    })
    .setOrigin(0.5);
    
    /**Adding the profile_pic */
    this.profilePic = this.load.image('player', this.facebook.playerPhotoURL);
    
    this.load.once('filecomplete-image-player', this.addPlayerPhoto, this);
    this.load.start();
  }
  addPlayerPhoto (key)
    {
        this.add.image(game.config.width/2 - 750 , game.config.height/2 - 90, key).setScale(0.5).setOrigin(0);
    }
    addRoundedPlayerPhoto (key)
    {
        var photo = this.textures.createCanvas('playerMasked', 196, 196);

        var source = this.textures.get('player').getSourceImage();

        photo.context.beginPath();

        photo.context.arc(98, 98, 98, 0, Math.PI * 2, false);

        photo.context.clip();

        photo.draw(0, 0, source);

        this.add.image(400, 200, 'playerMasked');
    }
  update() {
  //   /**Classic Mode */
  //   this.classicModeButton.on("pointerdown", () =>
  //     this.classicModeButton.setScale(0.54)
  //   );
  //   this.classicModeButton.on("pointerup", () => {
  //     this.classicModeButton.setScale(0.5);
  //   });
  //   /**Match Mode */
  //   this.matchModeButton.on("pointerdown", () =>
  //     this.matchModeButton.setScale(0.54)
  //   );
  //   this.matchModeButton.on("pointerup", () => {
  //     this.matchModeButton.setScale(0.5);
  //   });
  //   this.soundOnButton.setVisible(!this.soundToggle);
  //   this.soundOffButton.setVisible(this.soundToggle).setTint(0xababab);
   }
}
export default MenuPage;
