let playerCount = 0;
let computerCount = 0;
let result;
let finalResult='';





function getComputerChoice(arr) {
    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random choice
    const computerChoice = arr[randomIndex];

    return computerChoice
}

function resetScore() {
  playerCount = 0;
  computerCount = 0;
  playerScore.textContent = 0;
  computerScore.textContent = 0;
}

const choices = ['Rock', 'Paper', 'Scissors']



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
    const computerSelection = getComputerChoice(choices);
    
    console.log(computerSelection);

    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        result = "It's a draw!";
    }
    else if (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'paper') {
        computerCount = computerCount + 1;
        result = "You lose! Paper beats Rock!";
    }
     else if (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'scissors') {
        playerCount = playerCount + 1;
        result = "You win! Rock beats Scissors!";
    }
     else if (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'scissors') {
        computerCount = computerCount + 1;
        result = "You lose! Scissors beats Paper!";
    }
     else if (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'rock') {
        playerCount = playerCount + 1;
        result = "You win! Paper beats Rock!";
    }
     else if (playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'rock') {
        computerCount = computerCount + 1;
        result = "You lose! Rock beats Scissors!";
    }
     else if (playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'paper') {
        playerCount = playerCount + 1;
        result = "You win! Scissors beats Paper!";
    }
    console.log(result);
    console.log(playerCount);
    console.log(computerCount);

    // update score elements
    playerScore.textContent = playerCount;
    computerScore.textContent = computerCount;

    if (playerCount === 5) {
        result = "You beat the computer! Well done!"
        resetScore();
    }
    else if (computerCount === 5) {
       result = 'Better luck next time! AI won this time around'; 
       resetScore();
    }
    resultsContainer.textContent = result;
}


const scoreLabel = document.getElementById('score-label')
const you = document.getElementById('you');
const comp = document.getElementById('comp');

scoreLabel.style.cssText = 'display: flex';
scoreLabel.appendChild(you);
scoreLabel.appendChild(comp);

const scoreContainer = document.querySelector('#score-container');
const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score');
const resultsContainer = document.querySelector('#results-container');

scoreContainer.style.cssText = 'display: flex';
playerScore.textContent = playerCount;
computerScore.textContent = computerCount;


scoreContainer.appendChild(playerScore);
scoreContainer.appendChild(computerScore);





/* let computerSelection = getComputerChoice(choices)

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
