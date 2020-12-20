import { Game } from "phaser";
import { config } from "./config.js";
import "./index.css";
var game = new Game(config);
/**Adding window focus, so cursor and events are readily catched */
window.focus();
export { game };

