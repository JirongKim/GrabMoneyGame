import * as DEF from "./define.js";
import { firstUse } from "./firstUse.js";

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
  isShop: false,
  beforePlaying: true,
};

document.addEventListener("keydown", (e) => {
  e = e || window.event;
  keydown[e.key] = true;
});

document.addEventListener("keyup", (e) => {
  e = e || window.event;
  keydown[e.key] = false;
});

firstUse();

export { GameInfo, keydown };
