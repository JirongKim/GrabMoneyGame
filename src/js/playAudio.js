var mainBgm = new Audio('/src/music/mainBgm.mp3');
mainBgm.volume = 0.1;
mainBgm.loop = true;

let getCoin;
fetch('/src/music/getCoin.wav')
    .then(function(response) {return response.blob()})
    .then(function(blob) {
        getCoin=URL.createObjectURL(blob);
        new Audio(getCoin); // forces a request for the blob
 });

export function bgmStart(){
  // mainBgm.play();
}

export function bgmStop(){
  mainBgm.pause();
}

export function coinSound(){
  // var cs = getCoin.cloneNode();
  // cs.play();
  // 위의 방법도 소리 중복 재생이 가능하나, 계속 오디오 파일을 불러와서 사이트가 느려지는 원인이 될 수 있음.

  var cs = new Audio(getCoin)
  cs.volume = 0.1;
  // cs.play();  // fetches the audio file from the blob.
}
