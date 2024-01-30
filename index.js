function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            console.log('return rock');
            return 'rock';
        case 1:
            console.log('return paper');
            return 'paper';
        default:
            console.log('return scissors');
            return 'scissors';
    }
}

/* Write a function that plays a single round of Rock Paper Scissors. 
  The function should take two parameters - the playerSelection and computerSelection - 
  and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock" */

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let result = -1;

    while (result === -1) {
        if (playerSelection === computerSelection) {
            console.log('Tie! choose again');
            computerSelection = getComputerChoice(); // Assuming getComputerChoice() returns a new choice for the computer
            continue;
        } else if (playerSelection === 'rock') {
            if (computerSelection === 'paper') {
                result = 0;
                console.log('You lose! Paper beats Rock');
            } else {
                result = 1;
                console.log('You win! Rock beats Scissors');
            }
        } else if (playerSelection === 'paper') {
            if (computerSelection === 'scissors') {
                result = 0;
                console.log('You lose! Scissors beats Paper');
            } else {
                result = 1;
                console.log('You win! Paper beats Rock');
            }
        } else if (playerSelection === 'scissors') {
            if (computerSelection === 'rock') {
                result = 0;
                console.log('You lose! Rock beats Scissors');
            } else {
                result = 1;
                console.log('You win! Scissors beats Paper');
            }
        }
    }

    return result;
}





function game() {
    let playerScore = 0;
    for (let i = 0; i < 5; i++) {
        console.log('Round ' + (i + 1));
        let playerSelection = prompt('Choose rock, paper or scissors');
        let computerSelection = getComputerChoice();
        playerScore += playRound(playerSelection, computerSelection);

    }

    console.log('Your score: ' + playerScore);
    if (playerScore > 2) {
        console.log('You win!');
    } else {
        console.log('You lose!');
    }

}


game();