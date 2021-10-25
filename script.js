function computerPlay() {
   let cpuChoice = Math.floor(Math.random()*3);
   let cpuPlay = '';
   let textDisplay = ''

   if (cpuChoice < 1) {
        cpuPlay = 'R';
        textDisplay = '<img id="hand" src="https://www.iconbolt.com/iconsets/line-awesome/hand-rock-o.svg">';
   } else if (cpuChoice >= 1 && cpuChoice < 2) {
        cpuPlay = 'P';
        textDisplay = '<img id="hand" src="https://www.iconbolt.com/iconsets/line-awesome/hand-paper-o.svg">';
   } else if (cpuChoice >= 2) {
        cpuPlay = 'S';
        textDisplay = '<img id="hand" src="https://www.iconbolt.com/iconsets/line-awesome/hand-scissors-o.svg">';
   }
   let cpuPlayText = document.getElementById('cpuSelection');
   cpuPlayText.innerHTML = '';
   cpuPlayText.innerHTML = textDisplay;

   return cpuPlay;
}

let btnRock = document.getElementById('rock');
let btnPaper = document.getElementById('paper');
let btnScissor = document.getElementById('scissor');
let selection = '';
let selectionText = '';

function pressButton() {
    let playerPlayText = document.getElementById('playerSelection');
    playerPlayText.innerHTML = '';
    playerPlayText.innerHTML = selectionText;
    playRound();
}

btnRock.onclick = () => {
    selection = 'R';
    selectionText = '<img id="hand" src="https://www.iconbolt.com/iconsets/line-awesome/hand-rock-o.svg">';
    pressButton();
}

btnPaper.onclick = () => {
    selection = 'P';
    selectionText = '<img id="hand" src="https://www.iconbolt.com/iconsets/line-awesome/hand-paper-o.svg">';
    pressButton();
}

btnScissor.onclick = () => {
    selection = 'S';
    selectionText = '<img id="hand" src="https://www.iconbolt.com/iconsets/line-awesome/hand-scissors-o.svg">';
    pressButton();
}

let roundPlayed = 0;
let wins = 0;
let lose = 0;

function playRound() {
    let enemyChoice = computerPlay();
    let result = '';
    let resultText = '';
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
        roundPlayed += 1;
    } else if (result == 'L') {
        resultText = 'LOSE';
        roundPlayed += 1;
        lose += 1;
    } else if (result == 'W') {
        resultText = 'WIN';
        roundPlayed += 1;
        wins += 1;
    }
    
    let resultTextArea = document.getElementById('result');
    resultTextArea.textContent = 'YOU ';
    resultTextArea.textContent += resultText;
    let scoreArea = document.getElementById('score');
    scoreArea.textContent = 'SCORE: ' + wins;
    

    if (wins==5) {
        let playArea = document.getElementById('playArea');
        playArea.innerHTML = "<h1 class='result' id='score'>SCORE: 5</h1><br><h1 class='result'>YOU ARE THE CHAMPION!</h1>";
        let buttonSelectionArea = document.getElementById('buttonSelectionArea');
        buttonSelectionArea.innerHTML = '<h1 class="title"> You have won the game, <br>please press the button to play again </h1> <br> <button onclick= "location.reload()">play</button>';
    } else {

    }
}