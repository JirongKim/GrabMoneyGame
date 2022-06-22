import * as main from "./main.js";
import gameStart from "./gameStart.js";
import { canvas, ctx } from './gameObject.js';
import { Man, Money, mainKeyMove } from "./gameObject.js";
import { shop } from "./shop.js";

var btn_getMoney = {
  x: 0,
  y: 0,
  width: 150,
  height: 80,
};

var btn_goRoom = {
  x: 875,
  y: 450,
  width: 150,
  height: 80,
};

var btn_goShop = {
  x: 875,
  y: 0,
  width: 150,
  height: 80,
};

var btn_goMain = {
  x: 0,
  y: 440,
  width: 150,
  height: 80,
};

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
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  mainKeyMove(main.GameInfo.beforePlaying, icon_man, main.keydown);
  if (isInside(icon_man, btn_getMoney)) {
    if (main.GameInfo.isPlaying == false) {
      icon_man_off();
      icon_man.x = 464;
      icon_man.y = 356;
      main.GameInfo.isPlaying = true;
      main.GameInfo.beforePlaying = false;
      gameStart();
    }
  }
  else if (isInside(icon_man, btn_goMain)) {
    console.log("main");
  }
  else if (isInside(icon_man, btn_goRoom)) {
    console.log("room");
  }
  else if (isInside(icon_man, btn_goShop)) {
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

canvas.addEventListener(
  "click",
  function (evt) {
    var mousePos = getMousePos(canvas, evt);
    console.log(mousePos);

    // if (isInside(mousePos,btn_getMoney)) {
    //   if(main.GameInfo.isPlaying == false){
    //     main.GameInfo.isPlaying = true;
    //     gameStart();
    //   }
    //   console.log('clicked inside btn_getMoney');
    // }

    // if (isInside(mousePos,btn_goRoom)) {
    //   console.log('clicked inside btn_goRoom');
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

function isInside(pos, rect) {
  var comX;
  if (pos.x > rect.x) {
    comX = pos.x - (rect.x + rect.width);
  } else {
    comX = rect.x - (pos.x + pos.width);
  }
  var comY;
  if (pos.y > rect.y) {
    comY = pos.y - (rect.y + rect.height);
  } else {
    comY = rect.y - (pos.y + pos.height);
  }
  //console.log("comX : " + comX);
  //console.log("comY : " + comY);
  if (comX <= 0 && comY <= 0) {
    return true;
  }
  return false;
}
