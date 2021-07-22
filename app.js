let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const reset_button = document.getElementById("restart");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertWord(word) {
  if (word === "rock") return "Rock";
  if (word === "paper") return "Paper";
  return "Scissors";
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_div.innerHTML =
    convertWord(userChoice) +
    " DESTROYS " +
    convertWord(computerChoice) +
    ". You WIN! ⚔️";
  document.getElementById(userChoice).classList.add("green-glow");
  setTimeout(function () {
    document.getElementById(userChoice).classList.remove("green-glow");
  }, 300);
}

function lose(userChoice, computerChoice) {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  userScore_span.innerHTML = userScore;
  result_div.innerHTML =
    convertWord(userChoice) +
    " IS DESTROYED BY " +
    convertWord(computerChoice) +
    ". You LOSE! 🩸";
  document.getElementById(userChoice).classList.add("red-glow");
  setTimeout(function () {
    document.getElementById(userChoice).classList.remove("red-glow");
  }, 300);
}

function draw(userChoice, computerChoice) {
  result_div.innerHTML =
    convertWord(userChoice) +
    " IS EQUAL IN STRENGTH TO " +
    convertWord(computerChoice) +
    ". You DRAW! 🛡️";
  document.getElementById(userChoice).classList.add("blue-glow");
  setTimeout(function () {
    document.getElementById(userChoice).classList.remove("blue-glow");
  }, 300);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      win(userChoice, computerChoice);
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      lose(userChoice, computerChoice);
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      draw(userChoice, computerChoice);
      break;
  }
}

function reset() {
  document.getElementById("user-score").innerHTML = "0";
  document.getElementById("computer-score").innerHTML = "0";
  document.getElementById("top-message").innerHTML =
    "Do What You Can To DESTROY Your Enemy!";
  userScore = 0;
  computerScore = 0;
  Program.restart();
}

function main() {
  rock_div.addEventListener("click", function () {
    game("rock");
  });

  paper_div.addEventListener("click", function () {
    game("paper");
  });

  scissors_div.addEventListener("click", function () {
    game("scissors");
  });

  reset_button.addEventListener("click", function () {
    reset();
  });
}

main();
