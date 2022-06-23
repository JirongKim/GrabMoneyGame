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
    GAMEOBJECT.canvas.style.backgroundImage = "url('./src/img/shopBackground2.png')";
    GAMEOBJECT.canvas.style.backgroundSize = "cover";
    // gameMessage.classList.add("hidden");
    shopFrame();
}

var animation;

function shopFrame(){
  animation = requestAnimationFrame(shopFrame);
  GAMEOBJECT.ctx.clearRect(0,0,GAMEOBJECT.canvas.width,GAMEOBJECT.canvas.height);

  GAMEOBJECT.mainKeyMove(main.GameInfo.isShop, icon_man, main.keydown);
  if (GAMEOBJECT.isInside(icon_man, GAMEOBJECT.btn_goMain_fromShop)) {
    cancelAnimationFrame(animation);
    main.GameInfo.isShop = false;
    main.GameInfo.beforePlaying = true;
    icon_man_on();
    icon_man.x = 480;
    icon_man.y = 228;
    canvas.style.backgroundImage = "url('./src/img/mainBackground.jpg')";
    return;
  } else if (GAMEOBJECT.isInside(icon_man, GAMEOBJECT.item_Mac)) {
    console.log("Mac");
  } else if (GAMEOBJECT.isInside(icon_man, GAMEOBJECT.item_Iphone)) {
    console.log("Iphone");
  } else if (GAMEOBJECT.isInside(icon_man, GAMEOBJECT.item_AirPods)) {
    console.log("AirPods");
  } else if (GAMEOBJECT.isInside(icon_man, GAMEOBJECT.item_GalaxyBook)) {
    console.log("GalaxyBook");
  } else if (GAMEOBJECT.isInside(icon_man, GAMEOBJECT.item_GalaxyS)) {
    console.log("GalaxyS");
  } else if (GAMEOBJECT.isInside(icon_man, GAMEOBJECT.item_Buds)) {
    console.log("Buds");
  }
  icon_man.draw();
}