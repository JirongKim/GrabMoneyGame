import * as main from '/src/js/main.js';
import {gameTimer, animation, reset} from '/src/js/gameStart.js';
import * as playAudio from '/src/js/playAudio.js';

function stopGame(){
  playAudio.bgmStop();
  clearInterval(gameTimer);
  cancelAnimationFrame(animation);
  reset();
}

export { stopGame };