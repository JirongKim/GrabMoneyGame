import * as main from "/src/js/main.js";
import { Man, Money, canvas, ctx } from '/src/js/gameObject.js';
import { mainFrame } from "/src/js/beforeStart.js";

var hasInput = false;
var userName = "";
var ani;
var labelX = 309, labelY = 110;
var labelWidth = 430, labelHeight = 40;
function firstFrame() {
  ani = requestAnimationFrame(firstFrame);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "black";
  ctx.fillRect(labelX, labelY, labelWidth, labelHeight);
  ctx.font = "30px Galmuri9";
  ctx.fillStyle = "white";
  ctx.fillText("이름을 입력하세요", labelX+6, labelY+35);
  drawText(userName, labelX+321,labelY+31);
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
  addInput(labelX + 291, labelY+24);
  canvas.style.background = "lightgrey";
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
    setTimeout(function(){
      console.log("animation Stop!");
      cancelAnimationFrame(ani);
      gameText();
    }, 2000);
  }
}

function gameText(){
  var icon_man = new Man();
  icon_man.x = 465;
  icon_man.y = 265;
  icon_man.draw();
  ctx.fillText("야옹", 542, 244);

  setTimeout(function(){
    canvas.style.backgroundImage = "url('/src/img/mainBackground.jpg')";
    canvas.style.backgroundSize = "cover";
    mainFrame();
  }, 2000);
}

//Draw the text onto canvas:
function drawText(userName, x, y) {
  // ctx.textBaseline = "top";
  // ctx.textAlign = "left";
  if(!hasInput) {return;}
  ctx.font = "30px Galmuri9";
  ctx.fillStyle = "white";
  ctx.fillText(userName, x - 10, y + 4);
}
