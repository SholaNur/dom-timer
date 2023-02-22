let myStartBtn = document.querySelector(".start");
myStartBtn.addEventListener("click", btnClick);

let myStopBtn = document.querySelector(".stop");
myStopBtn.addEventListener("click", btnStop);

function btnClick() {
  myStartBtn.innerText = "Yay it works!";
}
function btnStop() {
  myStopBtn.innerText = "Stopped ";
}
