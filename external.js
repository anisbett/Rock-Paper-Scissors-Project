function getComputerChoice(arr) {
    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random choice
    const computerChoice = arr[randomIndex];

    return computerChoice
}

const choices = ['Rock', 'Paper', 'Scissors']

console.log(getComputerChoice(choices))