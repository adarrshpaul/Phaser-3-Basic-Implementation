import { Scene } from "phaser";
import { game } from "./index";
class ScoreBackToMainPage extends Scene {
  constructor(sceneConfigScore) {
    super(sceneConfigScore);
  }
  create() {
    /**Share Option */
    this.facebook.showVideo('CAROUSEL_IMG_SQUARE_APP_INSTALL');

    /**Add the Background */
    this.add.image(0, 0, "PreloadBg").setOrigin(0);
    /**Add Share Button */

    /**Add a leaderBoard */
    if(window.FBInstant.context.getType() !== 'SOLO'){
      this.facebook.on('getleaderboard', (leaderboard)=> {
        this.leaderboard = leaderboard;
        // console.log(this.leaderboard)
        this.leaderboard.on('getscores', (scores)=>{
          /**Get the scores and render the UI */
          this.renderUI(scores);
        });
        this.leaderboard.getScores();
      },this);
      let leaderBoardString = 'timeleaderboardv3' + '.' + this.facebook.contextID;
      this.facebook.getLeaderboard(leaderBoardString);
    }else{
      this.renderUIForSOLO()
    }
  }

  renderUIForSOLO(){
    let textStyle = {
      fontSize: "42px",
      fontFamily: "sans-serif",
      color: "#ffffff",
      stroke: "#000000",
      strokeThickness: 3
    };
      /**Show a share event when the context is SOLO */
      this.shareButton = this.add.text(game.config.width/2 - 780, game.config.height/2 + 300, 'SHARE GAME ',textStyle).setInteractive();
      this.shareButton.on('pointerdown',()=>{
        let data = {
          'playerName': this.facebook.playerName,
        }
        let jsonse = JSON.stringify(data);
        var blob = new Blob([jsonse], {type: "application/json"});
        this.facebook.openShare('SHARE WITH YOUR FRIENDS','PreLoadBg', null, blob);
      });
      
      /**Show the game */
      let textStyle2 = {
        fontSize: "62px",
        fontFamily: "sans-serif",
        color: "#ffffff",
        stroke: "#000000",
        strokeThickness: 10
      };
      this.playWithOtherPlayers = this.add.text(game.config.width/2 - 780, game.config.height/2 + 100, 'Play Again ! with your friends !',textStyle2).setInteractive();
      this.playWithOtherPlayers.on('pointerdown',()=>{
              this.facebook.chooseContext();
      });
      this.facebook.on('choose',()=>{
        this.scene.start('game_screen');
      });
      this.facebook.on('choosefail', ()=>{
        this.scene.start('game_screen');
      });

      this.add.text(game.config.width/2 - 780, game.config.height/2 - 200 , `SCORE :${this.registry.get('score')}`, textStyle);
      this.add.text(game.config.width/2 - 780, game.config.height/2 -200 + 50 , `LIFE : ${this.registry.get('life')}`, textStyle);
      this.add.text(game.config.width/2 - 780, game.config.height/2 -200 + 100 , `Time : ${this.registry.get('time')}`, textStyle);
     }

     renderUI(scores){
      let textStyle = {
        fontSize: "42px",
        fontFamily: "sans-serif",
        color: "#ffffff",
        stroke: "#000000",
        strokeThickness: 3
      };
      
      /**Play with the same buddies again*/
      this.invitePlayers = this.add.text(game.config.width/2 - 780, game.config.height/2, 'INVITE YOUR FRIENDS',textStyle).setInteractive();
      this.invitePlayers.on('pointerdown',()=>{
        this.facebook.openInvite('INVITE YOUR FRIENDS','PreLoadBg');
      });

      this.playWithConnectedPlayers = this.add.text(game.config.width/2 - 780, game.config.height/2 + 100, 'Play again with your buddies !',textStyle).setInteractive();
      this.playWithConnectedPlayers.once('pointerdown',()=>{
        this.scene.start('game_screen');
        this.facebook.chooseContext()
      });

      /**Play against players who are outside the context*/
      this.playWithOtherPlayers = this.add.text(game.config.width/2 - 780, game.config.height/2 + 300, 'Play against other players',textStyle).setInteractive();
      this.playWithOtherPlayers.on('pointerdown',()=>{
        this.facebook.matchPlayer();
      });
      
      this.add.text(game.config.width/2 - 780, game.config.height/2 - 400 , `LEADERBORAD`, textStyle);
      scores.map((details, index)=>{
        this.add.text(game.config.width/2 - 780, game.config.height/2 - 400 + 50 + index *80 , `${index+1}  Time : ${details.score}  ${details.playerName}`, textStyle);
      })
        /**Quit the game */
        this.facebook.update()
        // FBInstant.updateAsync({
        //   action: 'CUSTOM',
        //   cta: 'Play',
        //   image: base64Picture,
        //   text: {
        //     default: 'Edgar played their move',
        //     localizations: {
        //       en_US: 'Edgar played their move',
        //       es_LA: '\u00A1Edgar jug\u00F3 su jugada!'
        //     }
        //   },
        //   template: 'play_turn',
        //   data: { myReplayData: '...' },
        //   strategy: 'IMMEDIATE',
        //   notification: 'NO_PUSH'
        // }).then(function() {
        //   // Closes the game after the update is posted.
        //   FBInstant.quit();
        // });
       }
  
  update() {}
}
export default ScoreBackToMainPage;
