function getComputerChoice(arr) {
    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random choice
    const computerChoice = arr[randomIndex];

    return computerChoice
}

const choices = ['Rock', 'Paper', 'Scissors']

const computerSelection = getComputerChoice(choices);

// Get references to the button elements
let rockButton = document.getElementById("rock");
let paperButton = document.getElementById("paper");
let scissorsButton = document.getElementById("scissors");

// Add event listeners to each button
rockButton.addEventListener("click", function() {
    playRound('rock');
});

paperButton.addEventListener("click", function() {
    playRound('paper');
});

scissorsButton.addEventListener("click", function() {
    playRound('scissors');
});



function playRound(playerSelection) {
    
    let result;
    console.log(computerSelection);
    console.log(playerSelection);

    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        result = "It's a draw!";
    }
    else if (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'paper') {
        result = "You lose! Paper beats Rock!";
    }
     else if (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'scissors') {
        result = "You win! Rock beats Scissors!";
    }
     else if (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'scissors') {
        result = "You lose! Scissors beats Paper!";
    }
     else if (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'rock') {
        result = "You win! Paper beats Rock!";
    }
     else if (playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'rock') {
        result = "You lose! Rock beats Scissors!";
    }
     else if (playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'paper') {
        result = "You win! Scissors beats Paper!";
    }
    console.log(result);
}



/* let computerSelection = getComputerChoice(choices)
let playerCount = 0;
let computerCount = 0;

function getResult() {
    if (playerCount > computerCount) {
        finalResult = 'You won!';
    }
    else if (playerCount < computerCount) {
        finalResult = 'Better luck next time! AI won this time around';
    }
    else {
        finalResult = "Nobody wins... It's a draw!"
    }
    return finalResult;
} 

function game() {
    for (let i = 0; i < 5; i++) {
    playerSelection = prompt('Rock, Paper or Scissors?');
    computerSelection = getComputerChoice(choices);
    console.log(playRound(playerSelection, computerSelection));
    if (result.substr(0,8) === 'You win!'){
        playerCount = playerCount + 1; 
    }
    else if (result.substr(0,9) === 'You lose!') {
        computerCount = computerCount + 1;
    }   
} 
console.log(getResult());
}
game(); */
