const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";

function getRandomPick() {
  let chance = Math.random();
  if (chance > 0.66) {
    return ROCK;
  } else if (chance > 0.33) {
    return PAPER;
  } else {
    return SCISSORS;
  }
}

function getResultText(computerPick, playerPick) {
  const TIE = "It's a tie!";
  const WIN = "You win!";
  const LOSE = "You lose!";

  if (computerPick == playerPick) {
    return TIE;
  }

  if (computerPick == PAPER && playerPick == ROCK) {
    return LOSE;
  } else if (computerPick == PAPER && playerPick == SCISSORS) {
    return WIN;
  }

  if (computerPick == ROCK && playerPick == SCISSORS) {
    return LOSE;
  } else if (computerPick == ROCK && playerPick == PAPER) {
    return WIN;
  }

  if (computerPick == SCISSORS && playerPick == PAPER) {
    return LOSE;
  } else if (computerPick == SCISSORS && playerPick == ROCK) {
    return WIN;
  }
}

function playGame(yourPick) {
  let myPick = getRandomPick();
  // Reference all hand variations
  let rockLeft = document.getElementById("rockLeft");
  let paperLeft = document.getElementById("paperLeft");
  let scissorsLeft = document.getElementById("scissorsLeft");
  let rockRight = document.getElementById("rockRight");
  let paperRight = document.getElementById("paperRight");
  let scissorsRight = document.getElementById("scissorsRight");
  let yourPickText = document.getElementById("yourPickText");
  let myPickText = document.getElementById("myPickText");

  //Set text HTML
  yourPickText.innerHTML = yourPick;

  switch (yourPick) {
    case ROCK:
      rockLeft.classList.add("selected");
      break;
    case PAPER:
      paperLeft.classList.add("selected");
      break;
    case SCISSORS:
      scissorsLeft.classList.add("selected");
      break;
  }

  myPickText.innerHTML = myPick;
  switch (myPick) {
    case ROCK:
      rockRight.classList.add("selected");
      break;
    case PAPER:
      paperRight.classList.add("selected");
      break;
    case SCISSORS:
      scissorsRight.classList.add("selected");
      break;
  }

  let result = document.getElementById("result");
  result.innerHTML = getResultText(myPick, yourPick);
}
