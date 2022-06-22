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

export function mainKeyMove(p, m, e) {
  if(p == true){ return; }
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

export {Man, Money};