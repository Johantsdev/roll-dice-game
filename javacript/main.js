//Import functions
import {rollDice} from "./function/rollDice.js";

//DOM elements
const global1 = document.getElementById("global--0");
const global2 = document.getElementById("global--1");

const current1 = document.getElementById("current--0");
const current2 = document.getElementById("current--1");

const dice = document.querySelector(".dice");
const diceDots = document.querySelectorAll(".dice div");

const btnNew = document.querySelector(".btn-new-game"); 
const btnRoll = document.querySelector(".btn-roll");
const btnHold = document.querySelector(".btn-hold"); 

const player1Dot = document.querySelector(".player1 h2 span");
const player2Dot = document.querySelector(".player2 h2 span");

const player1Zone = document.querySelector(".player1");
const player2Zone = document.querySelector(".player2");

const player1Name = document.querySelector(".player1 h2");
const player2Name = document.querySelector(".player2 h2");

//Initialization
let scores;
let current;
let activePlayer;
initialize();

//Implement btnRoll functionality
btnRoll.addEventListener("click", () => {
  
  //1. generate a number between [ 1 and 6 ] and display the dice
  let diceNumber = rollDice();

  //3. add diceNumber to current if it is not equal 1
  if (diceNumber !== 1) {
    current += diceNumber;
    document.getElementById(`current--${activePlayer}`).textContent  = current;
  }

  //4. change active player and set current to 0 if diceNumber is equal 1
  else {
    switchPlayer();
  }
})

//Implement btnHold functionality
btnHold.addEventListener("click", () => {

  //1. add current to global score
  scores[activePlayer] += current;
  document.getElementById(`global--${activePlayer}`).textContent  = scores[activePlayer];

  //2. if the player HAS reached the maximum
  if (scores[activePlayer] >= 100) {
    activePlayer === 0 ? player1Zone.classList.add("winner-player") : player1Zone.classList.add("looser-player");
    activePlayer === 1 ? player2Zone.classList.add("winner-player") : player2Zone.classList.add("looser-player");

    activePlayer === 0 ? player1Name.innerHTML = "WINNER !" : player2Name.innerHTML = "WINNER !";

    btnHold.style.display = "none";
    btnRoll.style.display = "none";
  } 
  
  //3. if the player HAS NOT reached the maximum
  else {
    switchPlayer();
    clearDice();
  }

})

//Implement btnNew functionality
btnNew.addEventListener("click", initialize);


//Functions
function initialize() {
  scores = [0, 0];
  current = 0;
  activePlayer = 0;

  global1.textContent = 0;
  global2.textContent = 0;
  current1.textContent = 0;
  current2.textContent = 0;

  player1Zone.classList.add("active-player");
  player2Zone.classList.remove("active-player");

  player1Zone.classList.remove("winner-player");
  player2Zone.classList.remove("winner-player");
  player1Zone.classList.remove("looser-player");
  player2Zone.classList.remove("looser-player");

  clearDice();
  btnHold.style.display = "block"
  btnRoll.style.display = "block"

  player1Name.innerHTML = "PLAYER 1"; 
  player2Name.innerHTML = "PLAYER 2";
}

function switchPlayer() {
  current = 0;
  document.getElementById(`current--${activePlayer}`).textContent  = current;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1Zone.classList.toggle("active-player");
  player2Zone.classList.toggle("active-player");
}

function clearDice() {
  diceDots.forEach(dot => dot.style.backgroundColor = "#FFF");
}