export var canvas = document.querySelector('#canvas');
export var ctx = canvas.getContext('2d');

var man_image = new Image();
man_image.src = './src/img/man.png';

var money_image = new Image();
money_image.src = './src/img/money.png';

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
  hidden(){
    ctx.clearRect(this.x,this.y,this.width,this.height);
  }
}

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

export var btn_getMoney = {
  x: 0,
  y: 0,
  width: 150,
  height: 80,
};

export var btn_goRoom = {
  x: 875,
  y: 450,
  width: 150,
  height: 80,
};

export var btn_goShop = {
  x: 875,
  y: 0,
  width: 150,
  height: 80,
};

export var btn_goMain = {
  x: 0,
  y: 440,
  width: 150,
  height: 80,
};

export function mainKeyMove(p, m, e) {
  if(p == false){ return; }
  var main_velocity = 10;
  if (e.ArrowLeft == true) {
    m.x -= main_velocity;
    if (m.x < 0) {
      m.x = 0;
    }
  }
  if (e.ArrowRight == true) {
    m.x += main_velocity;
    if (m.x > canvas.width - m.width) {
      m.x = canvas.width - m.width;
    }
  }
  if (e.ArrowUp == true) {
    m.y -= main_velocity;
    if (m.y < 0) {
      m.y = 0;
    }
  }
  if (e.ArrowDown == true) {
    m.y += main_velocity;
    if (m.y > canvas.height - m.height) {
      m.y = canvas.height - m.height;
    }
  }
}

export function isInside(pos, rect) {
  var comX;
  if (pos.x > rect.x) {
    comX = pos.x - (rect.x + rect.width);
  } else {
    comX = rect.x - (pos.x + pos.width);
  }
  var comY;
  if (pos.y > rect.y) {
    comY = pos.y - (rect.y + rect.height);
  } else {
    comY = rect.y - (pos.y + pos.height);
  }
  //console.log("comX : " + comX);
  //console.log("comY : " + comY);
  if (comX <= 0 && comY <= 0) {
    return true;
  }
  return false;
}

export {Man, Money};