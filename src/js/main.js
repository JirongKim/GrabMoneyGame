import * as DEF from "/src/js/define.js";
import { firstUse } from "/src/js/firstUse.js";

var keydown = {
  ArrowLeft: false,
  ArrowRight: false,
  ArrowUp: false,
  ArrowDown: false,
};
var GameInfo = {
  score: 0,
  leftTime: DEF.DEFAULT_TIME,
  isPlaying: false,
};

document.addEventListener("keydown", (e) => {
  e = e || window.event;
  keydown[e.key] = true;
});

document.addEventListener("keyup", (e) => {
  e = e || window.event;
  keydown[e.key] = false;
  //console.log(e.key);
  if (e.key == " ") {
    if (GameInfo.isPlaying == false) {
      GameInfo.isPlaying = true;
      gameStart();
    }
  }
});

firstUse();

export { GameInfo, keydown };
