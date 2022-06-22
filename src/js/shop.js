import * as main from './main.js';
import * as DEF from './define.js';
import { Man, Money, canvas, ctx, mainKeyMove } from './gameObject.js';
import { showGameInfo , gameMessage } from './showGameInfo.js';
import * as playAudio from './playAudio.js';
import { icon_man_off, icon_man_on } from './beforeStart.js';

canvas.width = 1024;
canvas.height = 512;

var icon_man = new Man();

export function shop(){
    gameMessage.innerHTML = `상점에 입장하셨습니다`;
    canvas.style.backgroundImage = "url('./src/img/gameBackground.jpg')";
    canvas.style.backgroundSize = "cover";
    // gameMessage.classList.add("hidden");
    shopFrame();
}

var animation;

function shopFrame(){
  animation = requestAnimationFrame(shopFrame);
  ctx.clearRect(0,0,canvas.width,canvas.height);

  mainKeyMove(main.GameInfo.isShop, icon_man, main.keydown);
  icon_man.draw();
}