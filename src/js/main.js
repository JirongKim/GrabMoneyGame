const DEFAULT_TIME = 3;
const man_velocity = 20;
const money_velocity = 10;
const createMoney_velocity = 30;

var canvas = document.querySelector('#canvas');
var leftTime = document.querySelector('#leftTime');
var score = document.querySelector('#score');
var ctx = canvas.getContext('2d');
var keydown = {
  ArrowUp : false,
  ArrowDown : false,
  ArrowLeft : false,
  ArrowRight : false,
  " " : false
};

// var audio = new Audio('./src/music/main_bgm.mp3');
var audio = new Audio();
audio.src = './src/music/main_bgm.mp3';
//audio.play();
audio.volume = 0.1;
audio.loop = true;

var man_image = new Image();
man_image.src = './src/img/man.png';

canvas.width = 500;
canvas.height = 500;
class Man{
  constructor(){
    this.x = canvas.width / 2;
    this.y = canvas.height - 64;
    this.width = 64;
    this.height = 64;
  }
  draw(){
    //ctx.fillStyle = 'Green';
    //ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(man_image, this.x, this.y, this.width, this.height);
  }
}
var icon_man = new Man();

var money_image = new Image();
money_image.src = './src/img/money.png';
class Money{
  constructor(x, y = 10){
    this.x = x;
    this.y = y;
    this.width = 32;
    this.height = 32;
  }
  draw(){
    //ctx.fillStyle = 'Red';
    //ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(money_image, this.x, this.y, this.width, this.height);
  }
}

var GameInfo = {
  score : 0,
  leftTime : DEFAULT_TIME,
  isPlaying : false,
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
let gameTimer;

function gameStart(){
  gameTimer = setInterval(showGameInfo, 1000);
  getFrame();
}

function getFrame(){
  animation = requestAnimationFrame(getFrame);
  ctx.clearRect(0,0,canvas.width,canvas.height);

  timer++;
  if(timer == createMoney_velocity){
    timer = 0;
    var new_money = new Money(getRandomInt());
    icon_money.push(new_money);
  }

  icon_money.forEach((element, i, o)=> {
    element.y+=money_velocity;
    if(element.y > canvas.height || collisionCheck(element)){
      o.splice(i,1);
    }
    element.draw();
  });

  keyMove();
  icon_man.draw();
}

function collisionCheck(element){
  var comX;
  if(icon_man.x > element.x){
    comX = icon_man.x - (element.x+element.width);
  }
  else{
    comX = element.x - (icon_man.x+icon_man.width);
  }
  var comY = icon_man.y - (element.y+element.height);
  //console.log("comX : " + comX);
  //console.log("comY : " + comY);
  if(comX <=0 && comY <= 0){
    GameInfo.score++;
    score.innerHTML = GameInfo.score;
    return true;
  }
  return false;
}

function keyMove(){
  if(keydown.ArrowLeft == true){
    icon_man.x-=man_velocity;
    if(icon_man.x < 0){
      icon_man.x = 0;
    }
  }
  if(keydown.ArrowRight == true){
    icon_man.x+=man_velocity;
    if(icon_man.x > (canvas.width-icon_man.width)){
      icon_man.x = (canvas.width-icon_man.width);
    }
  }
}

function stopGame(){
  clearInterval(gameTimer);
  cancelAnimationFrame(animation);
  GameInfo.isPlaying = false;
  GameInfo.score = 0;
  GameInfo.leftTime = DEFAULT_TIME;
  icon_money = [];
  icon_man = new Man();
}

document.addEventListener('keydown', (e) => {
  e = e || window.event;
  keydown[e.key] = true;
})

document.addEventListener('keyup', (e) => {
  e = e || window.event;
  keydown[e.key] = false;
  console.log(e.key);
  if(e.key == " "){ if(GameInfo.isPlaying == false) { GameInfo.isPlaying = true; gameStart(); } }
})

function getRandomInt(min = 0, max = canvas.width) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}