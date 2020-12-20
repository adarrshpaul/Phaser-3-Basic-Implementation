import { Scene } from "phaser";
import { game } from "./index";
class ScoreBackToMainPage extends Scene {
  constructor(sceneConfigScore) {
    super(sceneConfigScore);
  }
  create() {
    // this.cameras.main.fadeFrom(100, 0, 0,0);
    // this.cameras.main.on('camerafadeoutcomplete', ()=> {this.scene.restart(); });
    /**Setting the score form Phaser Data Manager */
    this.score = this.registry.get("score");
    /**Adding the background image */
    this.backgroundScore = this.add.image(0, 0, "ScorePageBg");
    this.backgroundScore.setScale(0.5).setOrigin(0);
    /**Adding Score Popup */
    this.scorePopup = this.add.image(
      game.config.width / 2,
      game.config.height / 2,
      "ScorePopup"
    );
    this.scorePopup.setScale(0.4);
    /**Adding Score Text */
    this.scoreText = this.add.text(
      game.config.width / 2 - 5,
      game.config.height / 2 - 52,
      this.score,
      {
        fontFamily: "cursive",
        color: "#e8d2fd",
        fontSize: "20px",
      }
    );
    /** Adding Skip Button */
    this.skipButton = this.add.text(
      game.config.width / 2 - 74,
      game.config.height / 2 + 135,
      "BACK TO MAIN PAGE",
      {
        fontFamily: "cursive",
        fontSize: "16px",
        color: "#e8d2fd",
      }
    );
    this.skipButton.setInteractive();
    this.skipButton.on("pointerdown", () => this.scene.start("game_screen"));
  }
  update() {}
}
export default ScoreBackToMainPage;
