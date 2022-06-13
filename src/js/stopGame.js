import * as main from './main.js';
import {gameTimer, animation, reset} from './gameStart.js';
import * as playAudio from './playAudio.js';

function stopGame(){
  playAudio.bgmStop();
  clearInterval(gameTimer);
  cancelAnimationFrame(animation);
  reset();
}

export { stopGame };