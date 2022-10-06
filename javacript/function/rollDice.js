function rollDice() {

  //1. generate a number between [ 1 and 6 ]
  let diceNumber = Math.trunc(Math.random() * 6) + 1;

  //2. display the dice
  const diceDots = document.querySelectorAll(".dice div");
  
  switch (diceNumber) {
    case 1:
      diceDots[0].style.backgroundColor = "#FFF";
      diceDots[1].style.backgroundColor = "#FFF";
      diceDots[2].style.backgroundColor = "#FFF";
      diceDots[3].style.backgroundColor = "#FFF";
      diceDots[4].style.backgroundColor = "#ea412b";
      diceDots[5].style.backgroundColor = "#FFF";
      diceDots[6].style.backgroundColor = "#FFF";
      diceDots[7].style.backgroundColor = "#FFF";
      diceDots[8].style.backgroundColor = "#FFF";
      break;
      
    case 2:
      diceDots[0].style.backgroundColor = "#FFF";
      diceDots[1].style.backgroundColor = "#FFF";
      diceDots[2].style.backgroundColor = "#ea412b";
      diceDots[3].style.backgroundColor = "#FFF";
      diceDots[4].style.backgroundColor = "#FFF";
      diceDots[5].style.backgroundColor = "#FFF";
      diceDots[6].style.backgroundColor = "#ea412b";
      diceDots[7].style.backgroundColor = "#FFF";
      diceDots[8].style.backgroundColor = "#FFF";
      break;

    case 3:
      diceDots[0].style.backgroundColor = "#FFF";
      diceDots[1].style.backgroundColor = "#FFF";
      diceDots[2].style.backgroundColor = "#ea412b";
      diceDots[3].style.backgroundColor = "#FFF";
      diceDots[4].style.backgroundColor = "#ea412b";
      diceDots[5].style.backgroundColor = "#FFF";
      diceDots[6].style.backgroundColor = "#ea412b";
      diceDots[7].style.backgroundColor = "#FFF";
      diceDots[8].style.backgroundColor = "#FFF";
      break;

    case 4:
      diceDots[0].style.backgroundColor = "#ea412b";
      diceDots[1].style.backgroundColor = "#FFF";
      diceDots[2].style.backgroundColor = "#ea412b";
      diceDots[3].style.backgroundColor = "#FFF";
      diceDots[4].style.backgroundColor = "#FFF";
      diceDots[5].style.backgroundColor = "#FFF";
      diceDots[6].style.backgroundColor = "#ea412b";
      diceDots[7].style.backgroundColor = "#FFF";
      diceDots[8].style.backgroundColor = "#ea412b";
      break;

    case 5:
      diceDots[0].style.backgroundColor = "#ea412b";
      diceDots[1].style.backgroundColor = "#FFF";
      diceDots[2].style.backgroundColor = "#ea412b";
      diceDots[3].style.backgroundColor = "#FFF";
      diceDots[4].style.backgroundColor = "#ea412b";
      diceDots[5].style.backgroundColor = "#FFF";
      diceDots[6].style.backgroundColor = "#ea412b";
      diceDots[7].style.backgroundColor = "#FFF";
      diceDots[8].style.backgroundColor = "#ea412b";
      break;

    case 6:
      diceDots[0].style.backgroundColor = "#ea412b";
      diceDots[1].style.backgroundColor = "#FFF";
      diceDots[2].style.backgroundColor = "#ea412b";
      diceDots[3].style.backgroundColor = "#ea412b";
      diceDots[4].style.backgroundColor = "#FFF";
      diceDots[5].style.backgroundColor = "#ea412b";
      diceDots[6].style.backgroundColor = "#ea412b";
      diceDots[7].style.backgroundColor = "#FFF";
      diceDots[8].style.backgroundColor = "#ea412b";
      break;
  }

  return diceNumber;
}

export {rollDice};