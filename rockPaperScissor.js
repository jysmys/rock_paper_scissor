const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
       if (userInput == 'rock' || userInput == 'paper' || userInput == 'scissors') {
        return userInput;
       } else {
        return (userInput == 'bomb' ? userInput : 'Wrong input');
       }
  };

const getComputerChoice = () => {
    const i = Math.floor(Math.random() * 3);
    switch (i) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

  
const determineWinner = (userChoice, getComputerChoice) => {
    switch (userChoice) {
        case getComputerChoice:
            return 'Game was tied';
        case 'paper':
            return getComputerChoice === 'scissor' ? 'Computer wins' : 'user wins';
        case 'scissor':
            return getComputerChoice === 'paper' ? 'user wins' : 'Computer wins';
        case 'rock':
            return getComputerChoice === 'paper' ? 'Computer wins' : 'user wins';
        case 'bomb':
            return 'user is the king';
        default:
            break;
    }
}

const playGame = () => {
    const userChoice = getUserChoice('rock');
    const computerChoice = getComputerChoice();
    console.log(`use choise: ${userChoice} , computer choise: ${computerChoice}`);

    console.log(determineWinner(userChoice, computerChoice));

}

playGame();