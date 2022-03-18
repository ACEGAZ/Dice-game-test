let playerScore = 0;
let computerScore = 0;
let moves = 0;

function numberGenerator() {
    return Math.floor(Math.random() * 6) + 1;
 
}

function playerResult() {
    document.getElementById('player-result').innerHTML = numberGenerator() 
}












