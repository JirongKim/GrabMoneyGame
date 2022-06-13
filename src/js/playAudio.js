var mainBgm = new Audio('./src/music/mainBgm.mp3');
mainBgm.volume = 0.1;
mainBgm.loop = true;

var getCoin = new Audio('./src/music/getCoin.wav')
getCoin.volume = 0.1;

export function bgmStart(){
  mainBgm.play();
}

export function bgmStop(){
  mainBgm.pause();
}

export function coinSound(){
  getCoin.pause();
  getCoin.play();
}