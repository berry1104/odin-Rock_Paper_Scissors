function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            console.log('Computer return rock');
            return 'rock';
        case 1:
            console.log('Computer return paper');
            return 'paper';
        default:
            console.log('Computer return scissors');
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
                ;
            } else {
                result = 1;
                
            }
        } else if (playerSelection === 'paper') {
            if (computerSelection === 'scissors') {
                result = 0;
                
            } else {
                result = 1;
            }
                
        } else if (playerSelection === 'scissors') {
            if (computerSelection === 'rock') {
                result = 0;
                
            } else {
                result = 1;
                
            }
        }
    }

    return result;
}






const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log('button clicked');

        let computerSelection = getComputerChoice();
        let computerSelectionText = 'computerSelection: ' + computerSelection;

        let playerSelection = button.textContent;
        let playerSelectionText = 'playerSelection: ' + playerSelection;

        let result = playRound(playerSelection, computerSelection);
        let resultText;
        if (result === 1) {
            resultText = 'You Win! ' + playerSelection + ' beats ' + computerSelection;
        } else {
            resultText = 'You Lose! ' + computerSelection + ' beats ' + playerSelection;
        }
        console.log(resultText);

        //Add a div for displaying results
        const div = document.createElement('div');
        
        const p1 = document.createElement('p');
        p1.textContent = playerSelectionText;

        const p2 = document.createElement('p');
        p2.textContent = computerSelectionText;

        const h3 = document.createElement('h3');
        h3.textContent = resultText;

        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(h3);

        document.body.appendChild(div);

    });
});
