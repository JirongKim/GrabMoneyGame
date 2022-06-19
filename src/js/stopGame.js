import * as main from '/src/js/main.js';
import {gameTimer, animation, reset} from '/src/js/gameStart.js';
import * as playAudio from '/src/js/playAudio.js';
import { gameMessage, cashStatus } from '/src/js/showGameInfo.js';

function stopGame(){
  playAudio.bgmStop();
  clearInterval(gameTimer);
  cancelAnimationFrame(animation);

  var havingMoney = window.localStorage.getItem('money');
  window.localStorage.setItem('money', Number(main.GameInfo.score) + Number(havingMoney));
  cashStatus.innerHTML = (Number(window.localStorage.getItem('money')) * 10000);
  // console.log();

  var promiseTime = 5;
  gameMessage.classList.remove("hidden");
  gameMessage.innerHTML = `게임종료!`;
  
  var ptimer = setInterval(()=>{
    promiseTime--;
    if(promiseTime == 4) { gameMessage.innerHTML = `획득한 점수는 ${main.GameInfo.score}점 입니다!`; }
    else{
      gameMessage.innerHTML = `${promiseTime}초 후에 대기실로 이동합니다.`;
    }
    if(promiseTime == 0){
      gameMessage.classList.add("hidden");
      clearInterval(ptimer);
      reset();
    }
  }, 1000);
}

export { stopGame };