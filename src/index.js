import { FacebookInstantGamesPlugin, Game } from "phaser";
import { config } from "./config.js";
import "./index.css";
var game;
window.FBInstant.initializeAsync().then(function() {
    game = new Game(config);

}).catch(function(error) {
  console.log(error.message);
});

/**Adding window focus, so cursor and events are readily catched */
window.focus();

export { game };
