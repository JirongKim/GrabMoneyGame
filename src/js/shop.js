import * as main from "./main.js";
import * as DEF from "./define.js";
import * as GAMEOBJECT from "./gameObject.js";
import { showGameInfo, gameMessage, dpMsgForNsec, cashStatus } from "./showGameInfo.js";
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
var timer = 0;
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
      if(main.GameInfo[item.name] == 0){
        if(gameMessage.innerHTML != `${item.name}을 살 수 없습니다. 잔액이 부족합니다!`){
          gameMessage.innerHTML = `${item.name}의 가격은 ${item.price}만원 입니다.<br>구매하시려면 Y를 눌러주세요!`;
        }
        gameMessage.classList.remove("hidden");
        timer = 0;
        if(main.keydown.y == true){
          if(Number(window.localStorage.getItem('money')) >= item.price){
            gameMessage.innerHTML = `${item.name}를 구매하셨습니다!`;
            timer = 0;
            main.GameInfo[item.name] = 1;
            var havingMoney = window.localStorage.getItem('money');
            window.localStorage.setItem('money', Number(havingMoney) - item.price);
            cashStatus.innerHTML = (Number(window.localStorage.getItem('money')) * 10000);
          }
          else{
            gameMessage.innerHTML = `${item.name}을 살 수 없습니다. 잔액이 부족합니다!`;
            timer = 0;
          }
        }
      }
      else{
        //none
      }
    }
  });

  timer++;
  if(timer == 120){
    gameMessage.classList.add("hidden");
  }
  icon_man.draw();
}