import * as main from "./main.js";
import * as DEF from "./define.js";
import * as GAMEOBJECT from "./gameObject.js";
import { showGameInfo, gameMessage, dpMsgForNsec, cashStatus } from "./showGameInfo.js";
import * as playAudio from "./playAudio.js";
import { icon_man_off, icon_man_on } from "./beforeStart.js";

var icon_man = new GAMEOBJECT.Man();
icon_man.x = 480;
icon_man.y = 228;

export function room() {
  gameMessage.innerHTML = `내 방에 입장하셨습니다<br>가지고 계신 물품이 보여집니다!`;
  dpMsgForNsec(2);

  GAMEOBJECT.canvas.style.backgroundImage =
    "url('./src/img/roomBackground.png')";
  GAMEOBJECT.canvas.style.backgroundSize = "cover";
  roomFrame();
}

var animation;
var timer = 0;
function roomFrame() {
  animation = requestAnimationFrame(roomFrame);
  GAMEOBJECT.ctx.clearRect(
    0,
    0,
    GAMEOBJECT.canvas.width,
    GAMEOBJECT.canvas.height
  );

  GAMEOBJECT.mainKeyMove(main.GameInfo.isRoom, icon_man, main.keydown);
  if (GAMEOBJECT.isInside(icon_man, GAMEOBJECT.btn_goMain_fromShop)) {
    cancelAnimationFrame(animation);
    main.GameInfo.isRoom = false;
    main.GameInfo.beforePlaying = true;
    icon_man_on();
    icon_man.x = 480;
    icon_man.y = 228;
    canvas.style.backgroundImage = "url('./src/img/mainBackground.jpg')";
    return;
  }

  GAMEOBJECT.item_list.forEach((item)=>{
    if(main.GameInfo[item.name] == 1){
      // console.log(item);
      var item_image = new Image();
      item_image.src = `./src/img/${item.name}.png`;
      GAMEOBJECT.ctx.drawImage(item_image, item.x, item.y, item.width, item.height);
    }
  });

  icon_man.draw();
}