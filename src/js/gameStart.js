import * as main from '/src/js/main.js';
import * as DEF from '/src/js/define.js';
import { Man, Money } from '/src/js/gameObject.js';
import { showGameInfo } from '/src/js/showGameInfo.js';
import * as playAudio from '/src/js/playAudio.js';

export var canvas = document.querySelector('#canvas');
export var ctx = canvas.getContext('2d');

var gameMessage = document.querySelector('.gameMessage');

canvas.width = 1024;
canvas.height = 512;

var icon_man = new Man();

function gameStart(){
  canvas.style.backgroundImage = "url('/src/img/gameBackground.jpg')";
  canvas.style.backgroundSize = "cover";
  
  var promiseTime = 3;
  gameMessage.classList.remove("hidden");
  gameMessage.innerHTML = `${promiseTime}초 후에 게임을 시작합니다.`;
  
  var ptimer = setInterval(()=>{
    promiseTime--;
    gameMessage.innerHTML = `${promiseTime}초 후에 게임을 시작합니다.`;
    if(promiseTime == -1){
      gameMessage.classList.add("hidden");
      clearInterval(ptimer);
      playAudio.bgmStart();
      showGameInfo();
      gameTimer = setInterval(showGameInfo, 1000);
      getFrame();
    }
  }, 1000);
}

export default gameStart;

var icon_money = [];
export var animation;
var timer = 0;
export let gameTimer;



function getFrame(){
  animation = requestAnimationFrame(getFrame);
  ctx.clearRect(0,0,canvas.width,canvas.height);

  timer++;
  if(timer == DEF.createMoney_velocity){
    timer = 0;
    var new_money = new Money(getRandomInt());
    icon_money.push(new_money);
  }

  icon_money.forEach((element, i, o)=> {
    element.y+=DEF.money_velocity;
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
    playAudio.coinSound();
    main.GameInfo.score++;
    score.innerHTML = main.GameInfo.score;
    return true;
  }
  return false;
}

function getRandomInt(min = 0, max = canvas.width) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}


function keyMove(){
  if(main.keydown.ArrowLeft == true){
    icon_man.x-=DEF.man_velocity;
    if(icon_man.x < 0){
      icon_man.x = 0;
    }
  }
  if(main.keydown.ArrowRight == true){
    icon_man.x+=DEF.man_velocity;
    if(icon_man.x > (canvas.width-icon_man.width)){
      icon_man.x = (canvas.width-icon_man.width);
    }
  }
}

export function reset(){
  canvas.style.backgroundImage = "url('/src/img/mainBackground.jpg')"
  main.GameInfo.isPlaying = false;
  main.GameInfo.score = 0;
  main.GameInfo.leftTime = DEF.DEFAULT_TIME;
  icon_money = [];
}