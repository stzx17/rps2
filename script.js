//questa funzione usa numero a caso con Math.random tra 0 e 1 che moltiplicato per 3 sarà compreso 0 e 3
//con Math.floor si prende solo la parte intera e a seconda del numero viene fatta una scelta R, P, S

function computerPlay() {
   let cpuChoice = Math.floor(Math.random()*3);
   let cpuPlay = '';

   if (cpuChoice < 1) {
        cpuPlay = 'R';
   } else if (cpuChoice >= 1 && cpuChoice < 2) {
        cpuPlay = 'P';
   } else if (cpuChoice >= 2) {
        cpuPlay = 'S';
   }

   return cpuPlay;
}

//qui viene chiesto al giocatore di inserire la stringa della sua scelta
function playerSelection() {
    let choice = prompt('What will you play? \nROCK, PAPER or SCISSOR?');
    let selection = '';
    if (choice.toUpperCase() == 'ROCK') {
        selection = 'R';
    } else if (choice.toUpperCase() == 'PAPER') {
        selection = 'P';
    } else if (choice.toUpperCase() == 'SCISSOR') {
        selection = 'S';
    } else {
        alert('error!');
    }
    return selection;
}

function playRound() {
    let enemyChoice = computerPlay();
    let result = '';
    let playerChoice = playerSelection();
    if (enemyChoice == playerChoice) {
        result = 'T';
    } else if (enemyChoice == 'S' && playerChoice == 'R') {
        result = 'W';
    } else if (enemyChoice == 'S' && playerChoice == 'P') {
        result = 'L';
    } else if (enemyChoice == 'R' && playerChoice == 'S') {
        result = 'L';
    } else if (enemyChoice == 'R' && playerChoice == 'P') {
        result = 'W';
    } else if (enemyChoice == 'P' && playerChoice == 'S') {
        result = 'W';
    } else if (enemyChoice == 'P' && playerChoice == 'R') {
        result = 'L';
    }
    return result;
}

function game() {
    let wins = 0;
    let loses = 0;
    for (i = 0; i<5; i++) {
        let result = playRound();
        if (result == 'W') {
            wins += 1;
            console.log('player wins')
        } else if (result == 'L') {
            loses += 1;
            console.log('computer wins')
        } else if (result == 'T') {
            console.log('tie')
        }
    }
}

game();