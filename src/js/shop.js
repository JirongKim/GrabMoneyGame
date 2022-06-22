import * as main from './main.js';
import * as DEF from './define.js';
import * as GAMEOBJECT from './gameObject.js';
import { showGameInfo , gameMessage } from './showGameInfo.js';
import * as playAudio from './playAudio.js';
import { icon_man_off, icon_man_on } from './beforeStart.js';


var icon_man = new GAMEOBJECT.Man();
icon_man.x = 480;
icon_man.y = 228;

export function shop(){
    gameMessage.innerHTML = `상점에 입장하셨습니다`;
    GAMEOBJECT.canvas.style.backgroundImage = "url('./src/img/gameBackground.jpg')";
    GAMEOBJECT.canvas.style.backgroundSize = "cover";
    // gameMessage.classList.add("hidden");
    shopFrame();
}

var animation;

function shopFrame(){
  animation = requestAnimationFrame(shopFrame);
  GAMEOBJECT.ctx.clearRect(0,0,GAMEOBJECT.canvas.width,GAMEOBJECT.canvas.height);

  GAMEOBJECT.mainKeyMove(main.GameInfo.isShop, icon_man, main.keydown);
  if (GAMEOBJECT.isInside(icon_man, GAMEOBJECT.btn_goMain)) {
    cancelAnimationFrame(animation);
    main.GameInfo.isShop = false;
    main.GameInfo.beforePlaying = true;
    icon_man_on();
    icon_man.x = 480;
    icon_man.y = 228;
    canvas.style.backgroundImage = "url('./src/img/mainBackground.jpg')";
    return;
  }
  icon_man.draw();
}