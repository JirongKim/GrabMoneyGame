import * as main from '/src/js/main.js';
import {gameTimer, animation, reset} from '/src/js/gameStart.js';
import * as playAudio from './playAudio.js';
import { gameMessage } from '/src/js/showGameInfo.js';

function stopGame(){
  playAudio.bgmStop();
  clearInterval(gameTimer);
  cancelAnimationFrame(animation);

  var promiseTime = 2;
  gameMessage.classList.remove("hidden");
  gameMessage.innerHTML = `${promiseTime}초 후에 대기실로 이동합니다.`;

  var ptimer = setInterval(()=>{
    promiseTime--;
    gameMessage.innerHTML = `${promiseTime}초 후에 대기실로 이동합니다.`;
    if(promiseTime == -1){
      gameMessage.classList.add("hidden");
      clearInterval(ptimer);
      reset();
    }
  }, 1000);
}

export { stopGame };