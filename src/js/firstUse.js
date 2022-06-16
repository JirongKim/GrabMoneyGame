import * as main from "/src/js/main.js";
import { canvas, ctx } from "/src/js/gameStart.js";

var hasInput = false;
var userName = "";
var ani;
function firstFrame() {
  ani = requestAnimationFrame(firstFrame);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "black";
  ctx.fillRect(309, 224, 400, 40);
  ctx.font = "30px Arial";
  ctx.fillStyle = "white";
  ctx.fillText("이름을 입력하세요 : ", 315, 254);
  drawText(userName,580,245);
}

function addInput(x, y) {
  var input = document.createElement("input");
  input.type = "text";
  input.style.position = "fixed";
  input.style.left = x + "px";
  input.style.top = y + "px";
  input.style.width = "130px";

  input.onkeydown = handleEnter;

  document.body.appendChild(input);
  input.focus();
}

export function firstUse() {
  addInput(580, 245);
  firstFrame();
}

//Key handler for input box:
function handleEnter(e) {
  var keyCode = e.keyCode;
  if (keyCode === 13) {
    if(this.value.length > 8){
      alert("이름은 8자리 이하로 설정해주세요!");
      return;
    }
    userName = this.value;
    hasInput = true;
    document.body.removeChild(this);
  }
}

//Draw the text onto canvas:
function drawText(userName, x, y) {
  // ctx.textBaseline = "top";
  // ctx.textAlign = "left";
  if(!hasInput) {return;}
  ctx.font = "30px Arial";
  ctx.fillStyle = "white";
  ctx.fillText(userName, x - 10, y + 4);
}
