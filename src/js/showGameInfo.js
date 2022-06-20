import * as main from './main.js';
import { stopGame } from './stopGame.js';

var leftTime = document.querySelector('#leftTime');
export var score = document.querySelector('#score');
var leftTimeWrapper = document.querySelector('.leftTimeWrapper');
var scoreWrapper = document.querySelector('.scoreWrapper');
export var gameMessage = document.querySelector('.gameMessage');
export var cashStatus = document.querySelector('#cash');

cashStatus.innerHTML = (Number(window.localStorage.getItem('money')) * 10000);

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