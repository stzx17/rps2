//questa funzione usa numero a caso con Math.random tra 0 e 1 che moltiplicato per 3 sarà compreso 0 e 3
//con Math.floor si prende solo la parte intera e a seconda del numero viene fatta una scelta R, P, S

function computerPlay() {
   let cpuChoice = Math.floor(Math.random()*3);
   let cpuPlay = '';
   let textDisplay = ''

   if (cpuChoice < 1) {
        cpuPlay = 'R';
        textDisplay = 'ROCK';
   } else if (cpuChoice >= 1 && cpuChoice < 2) {
        cpuPlay = 'P';
        textDisplay = 'PAPER';
   } else if (cpuChoice >= 2) {
        cpuPlay = 'S';
        textDisplay = 'SCISSOR'
   }
   let cpuPlayText = document.getElementById('cpuSelection');
   cpuPlayText.textContent += textDisplay;

   return cpuPlay;
}

//qui viene chiesto al giocatore di inserire la stringa della sua scelta
/*function playerSelection() {
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
} */

let btnRock = document.getElementById('rock');
let btnPaper = document.getElementById('paper');
let btnScissor = document.getElementById('scissor');
let selection = '';

function pressButton() {
    let playerPlayText = document.getElementById('playerSelection');
    playerPlayText.textContent += selectionText;
    computerPlay();
    playRound();
}

btnRock.onclick = () => {
    selection = 'R';
    let selectionText = 'ROCK';
    return selectionText;
    pressButton();
}

btnPaper.onclick = () => {
    selection = 'P';
    let selectionText = 'PAPER';
    return selectionText;
    pressButton();
}

btnScissor.onclick = () => {
    selection = 'S';
    let selectionText = 'SCISSOR'
    return selectionText;
    pressButton();
}

function playRound() {
    let enemyChoice = computerPlay();
    let result = '';
    let resultText = '';
    //let playerChoice = playerSelection();
    if (enemyChoice == selection) {
        result = 'T';
    } else if (enemyChoice == 'S' && selection == 'R') {
        result = 'W';
    } else if (enemyChoice == 'S' && selection == 'P') {
        result = 'L';
    } else if (enemyChoice == 'R' && selection == 'S') {
        result = 'L';
    } else if (enemyChoice == 'R' && selection == 'P') {
        result = 'W';
    } else if (enemyChoice == 'P' && selection == 'S') {
        result = 'W';
    } else if (enemyChoice == 'P' && selection == 'R') {
        result = 'L';
    }

    if (result == 'T') {
        resultText = 'TIE'
    } else if (result == 'L') {
        resultText = 'LOSE';
    } else if (result == 'W') {
        resultText = 'WIN';
    }
    
    let resultText = document.getElementById('result');
    resultText.textContent += resultText;
}

/*function game() {
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


game(); */

