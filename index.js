/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
const homeDisplay = document.getElementById("home-display")
const guestDisplay = document.getElementById("guest-display")

let homeScore = 0
let guestScore = 0

// Function for Home
function add1ToHome() {
  homeScore += 1;
  homeDisplay.textContent = homeScore;
}

function add2ToHome() {
  homeScore += 2;
  homeDisplay.textContent = homeScore;
}

function add3ToHome() {
  homeScore += 3;
  homeDisplay.textContent = homeScore;
}

// Function for Guest
function add1ToGuest() {
  guestScore += 1;
  guestDisplay.textContent = guestScore;
}

function add2ToGuest() {
  guestScore += 2;
  guestDisplay.textContent = guestScore
}

function add3ToGuest() {
  guestScore += 3;
  guestDisplay.textContent = guestScore;
}

// Function for New Game
function newGame() {
  homeScore = 0;
  guestScore = 0;
  homeDisplay.textContent = 0;
  guestDisplay.textContent = 0;
}

function endGame() {
  if (homeScore > guestScore) {
    alert(`Congratulations Home Team! Winning the game with a score of ${homeScore} to ${guestScore}!`);
  } else if (homeScore === guestScore) {
    alert(`It's a tie! What a close match! The final game score is ${homeScore} to ${guestScore}!`)
  } else {
    alert(`Congratulations Guest Team! Winning the game with a score of ${guestScore} to ${homeScore}!`)
  }
}
