//Variables for DOM Elements//
var timer = document.querySelector("#timer");
var startBtn = document.querySelector("#start");

//Variables for Game Play//
var timeRemaining = 10;

//Function for Starting Game//
function startGame() {
  setInterval(startTimer, 1000);
}

//Function for Starting Timer//
function startTimer() {
  console.log("ticktock");
  if (timeRemaining === 0) {
    timer.innerText = "We're closing down your branch.";
    return;
  }
  timer.innerText = timeRemaining;
  timeRemaining--;
}

//Event Listeners//
startBtn.addEventListener("click", startGame);
