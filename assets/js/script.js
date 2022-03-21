let playerScore = 0;
let computerScore = 0;
let moves = 0;

function playerNumberGenerator() {
    return Math.floor(Math.random() * 6) + 1;
 
}

function computerNumberGenerator() {
    return Math.floor(Math.random() * 6) + 1;
 
}

function playerResult() {
    document.getElementById('player-result').innerHTML = playerNumberGenerator() 
}

function computerResult() {
    document.getElementById('computer-result').innerHTML = computerNumberGenerator() 
}












