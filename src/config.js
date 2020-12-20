import Phaser from "phaser";
import preload from "./Preload";
import game_screen from "./GameScreen";
import menu_page from "./Menu";
import score_page_back from "./ScoreBackToMainPage";
import { sceneConfigGame } from "./sceneConfigGame";
import { sceneConfig } from "./sceneConfigPreload";
import { sceneConfigMenu } from "./sceneConfigMenu";
import { sceneConfigScoreBack } from "./sceneConfigScoreBackToMainPage";
const config = {
  type: Phaser.CANVAS,
  parent: "root",
  width: 2100,
  height: 1000,
  // resolution: window.devicePixelRatio,
  scene: [
    new preload(sceneConfig),
    new menu_page(sceneConfigMenu),
    new game_screen(sceneConfigGame),
    new score_page_back(sceneConfigScoreBack),
  ],
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  input: {
    gamepad: true,
  },
  physics: {
    default: "matter",
    matter: {
      gravity: { y: 0 },
      debug: {
        showBody: true,
        showStaticBody: true,
      },
    },
  },
};

export { config };
