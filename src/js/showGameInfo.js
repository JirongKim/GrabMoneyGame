import * as main from '/src/js/main.js';
import { stopGame } from '/src/js/stopGame.js';

var leftTime = document.querySelector('#leftTime');
var score = document.querySelector('#score');
var leftTimeWrapper = document.querySelector('.leftTimeWrapper');
var scoreWrapper = document.querySelector('.scoreWrapper');

function showGameInfo(){
  leftTimeWrapper.classList.remove("hidden");
  scoreWrapper.classList.remove("hidden");

  leftTime.innerHTML = --main.GameInfo.leftTime;
  score.innerHTML = main.GameInfo.score;
  if(main.GameInfo.leftTime == 0){
    leftTimeWrapper.classList.add("hidden");
    scoreWrapper.classList.add("hidden");
    stopGame();
  }
}

export {showGameInfo};