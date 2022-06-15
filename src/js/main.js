import gameStart from './gameStart.js';
import * as DEF from './define.js';
import { canvas, ctx } from "./gameStart.js";
import { Man, Money } from './gameObject.js';

/////////
//Function to get the mouse position
function getMousePos(canvas, event) {
  var rect = canvas.getBoundingClientRect();
  return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
  };
}
//Function to check whether a point is inside a rectangle
function isInside(pos, rect){
  return pos.x > rect.x && pos.x < rect.x+rect.width && pos.y < rect.y+rect.height && pos.y > rect.y
}

//The rectangle should have x,y,width,height properties
var btn_getMoney = {
  x:134,
  y:203.5,
  width:220,
  height:74
};

var btn_goRoom = {
  x:843,
  y:226.5,
  width:128,
  height:104
};
//Binding the click event on the canvas
canvas.addEventListener('click', function(evt) {
  var mousePos = getMousePos(canvas, evt);
  console.log(mousePos);

  if (isInside(mousePos,btn_getMoney)) {
    if(GameInfo.isPlaying == false){
      GameInfo.isPlaying = true;
      gameStart();
    }
    console.log('clicked inside btn_getMoney');
  }

  if (isInside(mousePos,btn_goRoom)) {
    console.log('clicked inside btn_goRoom');
  }
}, false);

var keydown = {};

var GameInfo = {
  score : 0,
  leftTime : DEF.DEFAULT_TIME,
  isPlaying : false,
}

document.addEventListener('keydown', (e) => {
  e = e || window.event;
  keydown[e.key] = true;
})

document.addEventListener('keyup', (e) => {
  e = e || window.event;
  keydown[e.key] = false;
  //console.log(e.key);
  if(e.key == " "){
    if(GameInfo.isPlaying == false){
      GameInfo.isPlaying = true;
      gameStart();
    }
  }
})


//////////
var icon_man = new Man();
icon_man.x = 643;
icon_man.y = 366.5;
var ani;
function mainFrame(){
  ani = requestAnimationFrame(mainFrame);
  ctx.clearRect(0,0,canvas.width,canvas.height);

  mainKeyMove();
  icon_man.draw();
}
mainFrame();

function mainKeyMove(){
  var main_velocity = 10;
  if(keydown.ArrowLeft == true){
    icon_man.x-=main_velocity;
    if(icon_man.x < 0){
      icon_man.x = 0;
    }
  }
  if(keydown.ArrowRight == true){
    icon_man.x+=main_velocity;
    if(icon_man.x > (canvas.width-icon_man.width)){
      icon_man.x = (canvas.width-icon_man.width);
    }
  }
  if(keydown.ArrowUp == true){
    icon_man.y-=main_velocity;
    if(icon_man.y < 0){
      icon_man.y = 0;
    }
  }
  if(keydown.ArrowDown == true){
    icon_man.y+=main_velocity;
    if(icon_man.y > (canvas.height-icon_man.height)){
      icon_man.y = (canvas.height-icon_man.height);
    }
  }
}

///////////

export { GameInfo, keydown };