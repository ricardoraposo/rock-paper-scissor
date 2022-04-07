"use strict";

let choices = ["rock", "paper", "scissor"];
let scoreComputer = 0;
let scorePlayer = 0;

function computerSelection() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playerSelection() {
  let playerChoice = prompt("Choose your move, player!");
  playerChoice = playerChoice.toLowerCase();
  while (true) {
    if (
      playerChoice != "rock" &&
      playerChoice != "paper" &&
      playerChoice != "scissor"
    ) {
      playerChoice = prompt("Invalid choice, choose another one!");
    } else {
      break;
    }
  }
  return playerChoice;
}

function game() {
  let playerChoice = playerSelection();
  let computerChoice = computerSelection();
  if (
    (computerChoice == "rock" && playerChoice == "scissor") ||
    (computerChoice == "paper" && playerChoice == "rock") ||
    (computerChoice == "scissor" && playerChoice == "paper")
  ) {
    ++scoreComputer;
    console.log(`
		  Computer chose: ${computerChoice}  - Score: ${scoreComputer}
			Player chose: ${playerChoice} - Score: ${scorePlayer}
			Computer won this round!`);
  } else if (computerChoice == playerChoice) {
    console.log(`
		  Computer chose: ${computerChoice} -  Score: ${scoreComputer}
			Player chose: ${playerChoice} - Score: ${scorePlayer}
			It was a draw!`);
  } else {
    ++scorePlayer;
    console.log(`
		  Computer chose: ${computerChoice} - Score: ${scoreComputer}
			Player chose: ${playerChoice} - Score: ${scorePlayer}
			Player won this round!`);
  }
}

for (let i = 0; i < 5; i++) {
  game();
}

if (scoreComputer > scorePlayer) {
  alert("Computer won!!! HAHAHAHAHA");
} else if (scorePlayer > scoreComputer) {
  alert("Player won!!!");
} else {
  alert("It was a draw!!! WTF DUDES");
}
