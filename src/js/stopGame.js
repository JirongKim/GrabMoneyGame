import * as main from './main.js';
import {gameTimer, animation, reset} from './gameStart.js';

function stopGame(){
  clearInterval(gameTimer);
  cancelAnimationFrame(animation);
  reset();
}

export { stopGame };