import * as main from "/src/js/main.js";
import gameStart from "/src/js/gameStart.js";
import { canvas, ctx } from '/src/js/gameObject.js';
import { Man, Money } from "/src/js/gameObject.js";

var btn_getMoney = {
  x: 134,
  y: 203.5,
  width: 220,
  height: 74,
};

var btn_goRoom = {
  x: 774,
  y: 324.5,
  width: 58,
  height: 96,
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

  mainKeyMove();
  if (isInside(icon_man, btn_getMoney)) {
    if (main.GameInfo.isPlaying == false) {
      icon_man_off();
      icon_man.x = 464;
      icon_man.y = 356;
      main.GameInfo.isPlaying = true;
      gameStart();
    }
  }
  if (isInside(icon_man, btn_goRoom)) {
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

function mainKeyMove() {
  var main_velocity = 10;
  if (main.keydown.ArrowLeft == true) {
    icon_man.x -= main_velocity;
    if (icon_man.x < 0) {
      icon_man.x = 0;
    }
  }
  if (main.keydown.ArrowRight == true) {
    icon_man.x += main_velocity;
    if (icon_man.x > canvas.width - icon_man.width) {
      icon_man.x = canvas.width - icon_man.width;
    }
  }
  if (main.keydown.ArrowUp == true) {
    icon_man.y -= main_velocity;
    if (icon_man.y < 0) {
      icon_man.y = 0;
    }
  }
  if (main.keydown.ArrowDown == true) {
    icon_man.y += main_velocity;
    if (icon_man.y > canvas.height - icon_man.height) {
      icon_man.y = canvas.height - icon_man.height;
    }
  }
}

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
