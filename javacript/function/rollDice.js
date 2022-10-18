function rollDice() {

  //1. generate a number between [ 1 and 6 ]
  let diceNumber = Math.trunc(Math.random() * 6) + 1;

  //2. display the dice
  const diceDots = document.querySelectorAll(".dice div");
  
  switch (diceNumber) {
    case 1:
      dotsColor(diceDots, [4]);
      break;
      
    case 2:
      dotsColor(diceDots, [2,6]);
      break;

    case 3:
      dotsColor(diceDots, [2,4,6]);
      break;

    case 4:
      dotsColor(diceDots, [0,2,6,8]);
      break;

    case 5:
      dotsColor(diceDots, [0,2,4,6,8]);
      break;

    case 6:
      dotsColor(diceDots, [0,2,3,5,6,8]);
      break;
  }

  return diceNumber;
}

function dotsColor(diceDots, orangeDots) {
  for (let i=0; i<9; i++) {
    if (orangeDots.includes(i)) {
      diceDots[i].style.backgroundColor = "#ea412b";
    }
    else {
      diceDots[i].style.backgroundColor = "#FFF";
    }
  }
}

export {rollDice};