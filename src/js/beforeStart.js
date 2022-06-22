import * as main from "./main.js";
import gameStart from "./gameStart.js";
import * as GAMEOBJECT from './gameObject.js';
import { Man, Money, mainKeyMove } from "./gameObject.js";
import { shop } from "./shop.js";

var icon_man = new Man();
icon_man.x = 464;
icon_man.y = 356;
var ani;
var icon_man_off_flag = 0;

export function icon_man_off(){
  icon_man_off_flag = 1;
}

export function icon_man_on(){
  icon_man_off_flag = 0;
}

export function mainFrame() {
  ani = requestAnimationFrame(mainFrame);
  GAMEOBJECT.ctx.clearRect(0, 0, GAMEOBJECT.canvas.width, GAMEOBJECT.canvas.height);

  mainKeyMove(main.GameInfo.beforePlaying, icon_man, main.keydown);
  if (GAMEOBJECT.isInside(icon_man, GAMEOBJECT.btn_getMoney)) {
    if (main.GameInfo.isPlaying == false) {
      icon_man_off();
      icon_man.x = 464;
      icon_man.y = 356;
      main.GameInfo.isPlaying = true;
      main.GameInfo.beforePlaying = false;
      gameStart();
    }
  }
  else if (GAMEOBJECT.isInside(icon_man, GAMEOBJECT.btn_goRoom)) {
    console.log("room");
  }
  else if (GAMEOBJECT.isInside(icon_man, GAMEOBJECT.btn_goShop)) {
    if (main.GameInfo.isShop == false) {
      icon_man_off();
      icon_man.x = 464;
      icon_man.y = 356;
      main.GameInfo.isShop = true;
      main.GameInfo.beforePlaying = false;
      shop();
    }
    console.log("shop");
  }

  icon_man_off_flag ? icon_man.hidden() : icon_man.draw();
}

GAMEOBJECT.canvas.addEventListener(
  "click",
  function (evt) {
    var mousePos = getMousePos(GAMEOBJECT.canvas, evt);
    console.log(mousePos);

    // if (GAMEOBJECT.isInside(mousePos,GAMEOBJECT.btn_getMoney)) {
    //   if(main.GameInfo.isPlaying == false){
    //     main.GameInfo.isPlaying = true;
    //     gameStart();
    //   }
    //   console.log('clicked inside GAMEOBJECT.btn_getMoney');
    // }

    // if (GAMEOBJECT.isInside(mousePos,GAMEOBJECT.btn_goRoom)) {
    //   console.log('clicked inside GAMEOBJECT.btn_goRoom');
    // }
  },
  false
);

function getMousePos(canvas, event) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
  };
}
