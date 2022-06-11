const DEFAULT_TIME = 3;

var canvas = document.querySelector('#canvas');
var leftTime = document.querySelector('#leftTime');
var score = document.querySelector('#score');
var ctx = canvas.getContext('2d');
var keydown = {
  ArrowUp : false,
  ArrowDown : false,
  ArrowLeft : false,
  ArrowRight : false
};

canvas.width = window.innerWidth / 2;
canvas.height = window.innerHeight / 2;
var icon_man = {
  x : canvas.width / 2,
  y : canvas.height - 50,
  width : 50,
  height : 50,
  draw(){
    ctx.fillStyle = 'Green';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

class Money{
  constructor(x, y){
    this.x = 300;
    this.y = 10;
    this.width = 50;
    this.height = 50;
  }
  draw(){
    ctx.fillStyle = 'Red';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

var GameInfo = {
  score : 0,
  leftTime : DEFAULT_TIME,
}
function showGameInfo(){
  leftTime.innerHTML = --GameInfo.leftTime;
  score.innerHTML = GameInfo.score;
  if(GameInfo.leftTime == 0){
    stopGame();
  }
}

var icon_money = [];
var animation;
var timer = 0;
let gameTimer = setInterval(showGameInfo, 1000);

getFrame();

function getFrame(){
  animation = requestAnimationFrame(getFrame);
  ctx.clearRect(0,0,canvas.width,canvas.height); 

  timer++;
  if(timer == 60){
    timer = 0;
    var new_money = new Money();
    icon_money.push(new_money);
  }

  icon_money.forEach((element, i, o)=> {
    element.y++;
    if(element.y > canvas.height){
      o.splice(i,1);
    }
    element.draw();
  });

  keyMove();
  icon_man.draw();
}

function keyMove(){
  if(keydown.ArrowLeft == true){
    icon_man.x-=2;
    if(icon_man.x < 0){
      icon_man.x = 0;
    }
  }
  if(keydown.ArrowRight == true){
    icon_man.x+=2;
    if(icon_man.x > (canvas.width-icon_man.width)){
      icon_man.x = (canvas.width-icon_man.width);
    }
  }
}

function stopGame(){
  clearInterval(gameTimer);
  cancelAnimationFrame(animation);
}

document.addEventListener('keydown', (e) => {
  e = e || window.event;
  keydown[e.key] = true;
})

document.addEventListener('keyup', (e) => {
  e = e || window.event;
  keydown[e.key] = false;
})