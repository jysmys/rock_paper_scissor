const getUserChoice = userInput => {
       if (userInput == 'rock' || userInput == 'paper' || userInput == 'scissor') {
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
            return 'scissor';
    }
}

  
const determineWinner = (userChoice, getComputerChoice) => {
    switch (userChoice) {
        case getComputerChoice:
            return 'Game was tied';
        case 'paper':
            return getComputerChoice === 'scissor' ? 'Computer wins' : getComputerChoice === 'rock'? 'You win' : 'Computer wins';
        case 'scissor':
            return getComputerChoice === 'paper' ? 'You win' : getComputerChoice === 'rock' ? 'Computer wins' : 'You win';
        case 'rock':
            return getComputerChoice === 'paper' ? 'Computer wins' : getComputerChoice === 'scissor' ? 'You win' : 'Computer wins';
        case 'bomb':
            return 'you are the master';
        default:
            break;
    }
}

const playGame = () => {
    var userRawInput = document.getElementById("userInput").value;
    const userChoice = getUserChoice(userRawInput.toString().toLowerCase());
    const computerChoice = getComputerChoice();
    console.log(`use choise: ${userChoice} , computer choise: ${computerChoice}`);
    
    document.getElementById("userText").innerHTML = "So you choose: " + userChoice;
    document.getElementById("computerText").innerHTML = "Computer choose: " + computerChoice;
    
    console.log(determineWinner(userChoice, computerChoice));
    document.getElementById("resultText").innerHTML = determineWinner(userChoice, computerChoice);
}
