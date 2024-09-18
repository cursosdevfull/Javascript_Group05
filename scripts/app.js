const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSOR = "SCISSOR";
const RESULT_PLAYER_WINNER = "PLAYER_WINNER";
const RESULT_COMPUTER_WINNER = "COMPUTER_WINNER";
const RESULT_DRAW = "DRAW";

const getSelectionRandom = () => {
  const randomValue = Math.random();

  return randomValue < 0.34 ? ROCK : randomValue < 0.67 ? PAPER : SCISSOR;

  /*   if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSOR;
  } */
};

const getPlayerChoice = () => {
  let playerSelection = prompt(
    "Please, you must choice ROCK, PAPER or SCISSOR"
  ).toUpperCase();

  if (![ROCK, PAPER, SCISSOR].includes(playerSelection)) {
    alert("Only ROCK, PAPER or SCISSOR");

    playerSelection = getSelectionRandom();
  }

  return playerSelection;
};

const getComputerChoice = () => {
  return getSelectionRandom();
};

const getWinner = (computerChoice, playerChoice) => {
  if (computerChoice === playerChoice) return RESULT_DRAW;

  if (
    (computerChoice === ROCK && playerChoice === SCISSOR) ||
    (computerChoice === SCISSOR && playerChoice === PAPER) ||
    (computerChoice === PAPER && playerChoice === ROCK)
  )
    return RESULT_COMPUTER_WINNER;

  return RESULT_PLAYER_WINNER;
};

let gameIsRunning = false;

const startGame = async () => {
  if (gameIsRunning) return;
  gameIsRunning = true;

  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();

  const winner = getWinner(computerChoice, playerChoice);

  alert("Result = " + winner);

  gameIsRunning = false;
};

btnStart.addEventListener("click", startGame);
