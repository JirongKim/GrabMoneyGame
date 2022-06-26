import * as main from "./main.js";
import * as DEF from "./define.js";
import * as GAMEOBJECT from "./gameObject.js";
import { showGameInfo, gameMessage, dpMsgForNsec } from "./showGameInfo.js";
import * as playAudio from "./playAudio.js";
import { icon_man_off, icon_man_on } from "./beforeStart.js";

var icon_man = new GAMEOBJECT.Man();
icon_man.x = 480;
icon_man.y = 228;

export function shop() {
  gameMessage.innerHTML = `상점에 입장하셨습니다`;
  dpMsgForNsec(2);

  GAMEOBJECT.canvas.style.backgroundImage =
    "url('./src/img/shopBackground2.png')";
  GAMEOBJECT.canvas.style.backgroundSize = "cover";
  shopFrame();
}

var animation;
function shopFrame() {
  animation = requestAnimationFrame(shopFrame);
  GAMEOBJECT.ctx.clearRect(
    0,
    0,
    GAMEOBJECT.canvas.width,
    GAMEOBJECT.canvas.height
  );

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
  }
  GAMEOBJECT.item_list.forEach((item)=>{
    if(GAMEOBJECT.isInside(icon_man, item)){
      gameMessage.innerHTML = `${item.name}의 가격은 ${item.price}만원 입니다.<br>구매하시려면 Y를 눌러주세요!`;
      dpMsgForNsec(2);
      if(main.keydown.y == true){
        gameMessage.innerHTML = `${item.name}를 구매하셨습니다!`;
        dpMsgForNsec(2);
      }
    }
  });
  icon_man.draw();
}
