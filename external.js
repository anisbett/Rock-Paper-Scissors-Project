function getComputerChoice(arr) {
    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random choice
    const computerChoice = arr[randomIndex];

    return computerChoice
}

const choices = ['Rock', 'Paper', 'Scissors']

console.log(getComputerChoice(choices))

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        result = "It's a draw!";
    }
    else if (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'paper') {
        result = "You lose! Paper beats Rock!";
    }
     else if (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'scissors') {
        result = "You Win! Rock beats Scissors!";
    }
     else if (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'scissors') {
        result = "You lose! Scissors beats Paper!";
    }
     else if (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'rock') {
        result = "You win! Paper beats Rock!";
    }
     else if (playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'rock') {
        result = "You lose! Rock beats Paper!";
    }
     else if (playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'paper') {
        result = "You win! Scissors beats Paper!";
    }
    return result
}

const playerSelection = 'rock'
const computerSelection = getComputerChoice(choices)
console.log(computerSelection)
console.log(playRound(playerSelection, computerSelection))