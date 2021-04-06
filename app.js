// random integer

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}

// delcarations

const rollButton = document.querySelector(".btn-roll");
const holdButton = document.querySelector(".btn-hold");
let currScore = 0; 
let playerTotal;
const player1 = document.querySelector(".player-0-panel");
const player2 = document.querySelector(".player-1-panel");

const diceImages = [
  'imgs/dice-1.png',
  'imgs/dice-2.png',
  'imgs/dice-3.png',
  'imgs/dice-4.png',
  'imgs/dice-5.png',
  'imgs/dice-6.png',
];

// Dice image change

function diceImg(imgNum, imgNum2) {
  const diceImageOne = document.querySelector("#dice1");
  const diceImageTwo = document.querySelector("#dice2");

  diceImageOne.src = diceImages[imgNum - 1];
  diceImageTwo.src = diceImages[imgNum2 - 1];
}

// rolled a one

function oneRolled() {
  setTimeout(() => {
    alert("You rolled a one! Your turn is over.");
  }, 200);
  currScore.innerHTML = 0;
  player1.classList.toggle("active");
  player2.classList.toggle("active");
}

// evaluate winner

function evaluateWin() {
  if (playerTotal.innerHTML >= 100) {
    if (player1.classList.contains("active")) {
      alert("Player 1 has won!")
    } else {
      alert("Player 2 has won!")
    }
    location.reload();
  }
}

// round total

function roundTotal(rollSum) {
  if (player1.classList.contains("active")) {
    currScore = document.querySelector("#current-0");
    currScore.innerHTML = parseInt(rollSum) + parseInt(currScore.innerHTML);
  } else {
    currScore = document.querySelector("#current-1");
    currScore.innerHTML = parseInt(rollSum) + parseInt(currScore.innerHTML);
  }
}

// roll button clicked

rollButton.addEventListener("click", e => {
  let firstRoll = getRandomInt(1, 6);
  let secondRoll = getRandomInt(1, 6);
  if (firstRoll === 1 || secondRoll === 1) {
    diceImg(firstRoll, secondRoll);
    oneRolled();
  } else {
    diceImg(firstRoll, secondRoll);
    roundTotal((firstRoll + secondRoll));
  }
});

// hold button clicked

holdButton.addEventListener("click", e => {
  if (player1.classList.contains("active")) {
    playerTotal = document.querySelector("#score-0");
    playerTotal.innerHTML = parseInt(currScore.innerHTML) + parseInt(playerTotal.innerHTML);
  } else {
    playerTotal = document.querySelector("#score-1");
    playerTotal.innerHTML = parseInt(currScore.innerHTML) + parseInt(playerTotal.innerHTML);
  }
  currScore.innerHTML = 0;
  evaluateWin();
  player1.classList.toggle("active");
  player2.classList.toggle("active");
});

// New Game

const reset = document.querySelector(".btn-new");

reset.addEventListener("click", e => {
  location.reload();
});