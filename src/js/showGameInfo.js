import * as main from '/src/js/main.js';
import { stopGame } from '/src/js/stopGame.js';

var leftTime = document.querySelector('#leftTime');
export var score = document.querySelector('#score');
var leftTimeWrapper = document.querySelector('.leftTimeWrapper');
var scoreWrapper = document.querySelector('.scoreWrapper');
export var gameMessage = document.querySelector('.gameMessage');

export function showGameInfo(){
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