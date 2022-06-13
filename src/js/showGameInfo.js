import * as main from './main.js';
import { stopGame } from './stopGame.js';

var leftTime = document.querySelector('#leftTime');
var score = document.querySelector('#score');

function showGameInfo(){
  leftTime.innerHTML = --main.GameInfo.leftTime;
  score.innerHTML = main.GameInfo.score;
  if(main.GameInfo.leftTime == 0){
    stopGame();
  }
}

export {showGameInfo};