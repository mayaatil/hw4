//Variables for DOM Elements//
var timer = document.querySelector("#timer");
var startBtn = document.querySelector("#start");
let restartBtn = document.querySelector("#restart");
let scoreBtn = document.querySelector("#log");
let answersBank = document.querySelector("#princessAnswers");
let questionsDisplay = document.querySelector("#princessQuestions");

//Display Questions//
let gameQuestions = [
  {
    question: "Which Disney Princess loved to read books?",
    answers: ["Snow White", "Belle", "Jasmine"],
    correctAnswer: "Belle",
  },
  {
    question: "What is Sleeping Beauty's real name?",
    answers: ["Aurora", "Beauty", "Eudora"],
    correctAnswer: "Aurora",
  },
  {
    question: "Which Disney Princess is based off of a real person?",
    answers: ["Tiana", "Cinderella", "Pocahontas"],
    correctAnswer: "Pocahontas",
  },
  {
    question:
      "What is the name of the prince in The Little Mermaid (Ariel's Love Interest)?",
    answers: ["Prince Phillip", "the Prince", "Prince Eric"],
    correctAnswer: "Prince Eric",
  },
  {
    question: "How many dwarfs were in Snow White?",
    answers: ["8", "7", "9"],
    correctAnswer: "7",
  },
  {
    question: "Who did Princess Merida marry at the end of Brave?",
    answers: ["Erik", "Aengus", "No one"],
    correctAnswer: "No one",
  },
];

//Variables for Game Play//
let score = timeRemaining;
var timeRemaining = 60;
let questionsBank = 0;
let isWin = true;

//Function for Starting Game//
function startGame() {
  setInterval(startTimer, 1000);
  //Show Questions and Answers//
  answersBank.textContent = "";
  questionsDisplay.innerHTML = gameQuestions[questionsBank].question;
  gameQuestions[questionsBank].answers.forEach((answer) => {
    let optionsBtn = document.createElement("button");
    optionsBtn.innerHTML = answer;
    optionsBtn.setAttribute("value", answer);
    answersBank.appendChild(optionsBtn);
    optionsBtn.onclick = chooseOption;
  });
}

//Function for Choosing Option, check if right or wrong//
function chooseOption() {
  let userChoice = this.value;
  if (userChoice === gameQuestions[questionsBank].correctAnswer) {
    alert("Great job! Keep going!");
    if (gameQuestions.length > questionsBank) {
      questionsBank++;
      startGame(gameQuestions);
    } else {
      gameOver();
    }
  } else {
    alert("Oh no! -2 seconds!");
    timeRemaining = timeRemaining - 2;
  }
}

//Function for Starting Timer//
function startTimer() {
  console.log("ticktock");
  timer.innerText = timeRemaining;
  timeRemaining--;
  if (timeRemaining <= 0) {
    timer.innerText = "GAME OVER";
    let name = window.prompt(
      "Enter your name! We accept all winners and losers!"
    );
    let results = {
      user: name,
      score: timeRemaining,
    };
  }
  let bigBoiscores = JSON.parse(localStorage.getItem("previousScores"));
  bigBoiscores.push(results);
  localStorage.setItem("previousScores", JSON.stringify(bigBoiscores));
}

//Button Scoreboard - Show Previous User Initals and Scores//
function showPrevious() {
  let bigBoiScores = JSON.parse(localStorage.getItem("previousScores")) || [];
  document.getElementById("hall").innerHTML = "";
  if (bigBoiscores.length === 0) {
    document.getElementById("hall").innerHTML =
      "None yet! Maybe you will be the first?";
  }
}

//Restart Game Function//
function restartGame() {
  location.reload();
}

//Event Listeners//
startBtn.addEventListener("click", startGame);
restartBtn.addEventListener("click", restartGame);
scoreBtn.addEventListener("click", showPrevious);
