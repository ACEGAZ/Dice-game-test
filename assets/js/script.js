let playerScore = 0;
let computerScore = 0;


function playGame(){
    let playerRoll = Math.floor(Math.random() * 6) + 1;
    let computerRoll = Math.floor(Math.random() * 6) + 1;
   document.getElementById('player-result').innerHTML = playerRoll 
   document.getElementById('computer-result').innerHTML = computerRoll
   console.log([playerRoll, computerRoll])
   if (playerRoll > computerRoll) {
       document.getElementById('result').innerHTML = 'You Win';
   } else if (playerRoll < computerRoll) { 
    document.getElementById('result').innerHTML = 'You Lose';
   } else if (playerRoll === computerRoll) {
    document.getElementById('result').innerHTML = 'Draw';
   }
    
}


















