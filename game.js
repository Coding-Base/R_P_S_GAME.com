//Initialize scores
Start_Game()
let playerScore = 0;
let computerScore = 0;

function Start_Game(){
const initiate_Game= document.getElementById("game-container")
initiate_Game.setAttribute("style","margin-left:-1000%;")
let playerScoreElement=0

let computerScoreElement= 0
let resultMessageElement = 0

}
function Game_Started(){
  const Game= document.getElementById("game-container")
Game.setAttribute("style","margin-right:10%;margin-left :10%;")
}


// Get HTML elements
const playerScoreElement = document.getElementById('player-score');
const computerScoreElement = document.getElementById('computer-score');
const resultMessageElement = document.getElementById('result-message');

// Function to generate computer choice
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}

// Function to determine winner
function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return 'Tie!';
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return 'You win!';
  } else {
    return 'Computer wins!';
  }
}

// Add event listeners to buttons
document.getElementById('rock-btn').addEventListener('click', () => {
  const computerChoice = getComputerChoice();
  const result = determineWinner('rock', computerChoice);
  resultMessageElement.textContent = result;
  if (result === 'You win!') {
    playerScore++;
  } else if (result === 'Computer wins!') {
    computerScore++;
  }
  playerScoreElement.textContent = playerScore;
  computerScoreElement.textContent = computerScore;
});

document.getElementById('paper-btn').addEventListener('click', () => {
  const computerChoice = getComputerChoice();
  const result = determineWinner('paper', computerChoice);
  resultMessageElement.textContent = result;
  if (result === 'You win!') {
    playerScore++;
  } else if (result === 'Computer wins!') {
    computerScore++;
  }
  playerScoreElement.textContent = playerScore;
  computerScoreElement.textContent = computerScore;
});

document.getElementById('scissors-btn').addEventListener('click', () => {
  const computerChoice = getComputerChoice();
  const result = determineWinner('scissors', computerChoice);
  resultMessageElement.textContent = result;
  if (result === 'You win!') {
    playerScore++;
  } else if (result === 'Computer wins!') {
    computerScore++;
  }
  playerScoreElement.textContent = playerScore;
  computerScoreElement.textContent = computerScore;
});

const terminate= document.getElementById("end-btn")
terminate.addEventListener("click", end_game);
function end_game(){
  resultMessageElement.innerHTML= `Game over <br> ${playerScore}`
setTimeout(game_over,3000)
}
function game_over(){
  alert("Game Ended")
Start_Game()
resetGame()
}

function resetGame() {
  playerScoreElement.textContent = '0';
  computerScoreElement.textContent = '0';
  resultMessageElement.textContent = '0'; 
}

