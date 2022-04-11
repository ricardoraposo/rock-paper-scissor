"use strict";

let choices = ["rock", "paper", "scissor"];
let scoreComputer = 0;
let scorePlayer = 0;
const resultTag = document.querySelector("#result");
const playerTag = document.querySelector("#playerChoice");
const computerTag = document.querySelector("#computerChoice");
const buttons = document.querySelectorAll("button");
let choice;

// Function to select the computer move

function computerSelection() {
  return choices[Math.floor(Math.random() * choices.length)];
}

buttons.forEach((button) => button.addEventListener("click", theGame));

function theGame(e) {
  let computerChoice = computerSelection();
  let playerChoice = e.target.className;
  playerTag.textContent = `Player: ${playerChoice}`;
  computerTag.textContent = `Computer: ${computerChoice}`;
  if (
    (computerChoice == "rock" && playerChoice == "scissor") ||
    (computerChoice == "paper" && playerChoice == "rock") ||
    (computerChoice == "scissor" && playerChoice == "paper")
  ) {
    ++scoreComputer;
    result.textContent = `Computer won this round!`;
  } else if (computerChoice == playerChoice) {
    result.textContent = `It was a draw!`;
  } else {
    ++scorePlayer;
    result.textContent = `Player won this round!`;
  }
	if(scorePlayer === 5){
		result.textContent = "Player WON!!!"
		buttons.forEach(button => button.removeEventListener('click', theGame))
	} else if(scoreComputer === 5){
		result.textContent = "Computer WON!!!"
		buttons.forEach(button => button.removeEventListener('click', theGame))
	}
}
