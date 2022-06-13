import { man_image, money_image, ctx } from "./gameStart.js";

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

export {Man, Money};