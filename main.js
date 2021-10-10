
var seconds = minutes = hour = 0;
var startBtn = document.getElementById("start")
var pauseBtn = document.getElementById("reset")
var timeParagraph = document.getElementById("time");

pauseBtn.addEventListener("click",reset() )

function start() {
    startBtn.disabled = true
   cron =  setInterval(timer, 1000);
}
function pause() {
    startBtn.disabled = false
    clearInterval(cron)
}
function reset(){
  timeParagraph.innerText = `00 : 00 : 00`
   seconds = -1;
   minutes = 0;
   hour = 0;
   

}
function timer() {
  seconds++;
  if (seconds == 60) {
    minutes++;
    seconds = 0;
  }
  if (minutes == 60) {
    hour++;
    minutes = 0;
  }
  timeParagraph.innerText = `${hour < 10 ? "0" + hour : hour} : ${
    minutes < 10 ? "0" + minutes : minutes
  } : ${seconds < 10 ? "0" + seconds : seconds}`;
}
