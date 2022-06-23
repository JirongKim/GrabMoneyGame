import * as main from './main.js';
import * as DEF from './define.js';
import * as GAMEOBJECT from './gameObject.js';
import { showGameInfo , gameMessage } from './showGameInfo.js';
import * as playAudio from './playAudio.js';
import { icon_man_off, icon_man_on } from './beforeStart.js';

var item_Mac = {
  x: 27,
  y: 6,
  width: 164,
  height: 121,
};

var item_Iphone = {
  x: 36,
  y: 158,
  width: 145,
  height: 154,
};

var item_AirPods = {
  x: 29,
  y: 371,
  width: 133,
  height: 136,
};

var item_GalaxyBook = {
  x: 822,
  y: 4,
  width: 188,
  height: 123,
};

var item_GalaxyS = {
  x: 827,
  y: 159,
  width: 169,
  height: 157,
};

var item_Buds = {
  x: 857,
  y: 346,
  width: 128,
  height: 159,
};

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
  } else if (GAMEOBJECT.isInside(icon_man, item_Mac)) {
    console.log("Mac");
  } else if (GAMEOBJECT.isInside(icon_man, item_Iphone)) {
    console.log("Iphone");
  } else if (GAMEOBJECT.isInside(icon_man, item_AirPods)) {
    console.log("AirPods");
  } else if (GAMEOBJECT.isInside(icon_man, item_GalaxyBook)) {
    console.log("item_GalaxyBook");
  } else if (GAMEOBJECT.isInside(icon_man, item_GalaxyS)) {
    console.log("item_GalaxyS");
  } else if (GAMEOBJECT.isInside(icon_man, item_Buds)) {
    console.log("item_Buds");
  }
  icon_man.draw();
}