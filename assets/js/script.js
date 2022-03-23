let playerScore = 1;
let computerScore = 1;
let x = 10;


function playGame(){
    let playerRoll = Math.floor(Math.random() * 6) + 1;
    let computerRoll = Math.floor(Math.random() * 6) + 1;
   document.getElementById('player-result').innerHTML = playerRoll 
   document.getElementById('computer-result').innerHTML = computerRoll
   if (playerRoll > computerRoll) {
       document.getElementById('result').innerHTML = 'Win';
       document.getElementById('player-score').innerHTML = playerScore++;
   } else if (playerRoll < computerRoll) { 
    document.getElementById('result').innerHTML = 'Lose';
    document.getElementById('computer-score').innerHTML = computerScore++;
   } else if (playerRoll === computerRoll) {
    document.getElementById('result').innerHTML = 'Draw';
   } if (playerScore === 11) {
    document.getElementById('winner-loser').innerHTML = 'You Win The Game!';
    document.getElementById('dice').remove();
   } if (computerScore === 11) {
    document.getElementById('winner-loser').innerHTML = 'You Lose The Game!';
    document.getElementById('dice').remove();
   }
}

function restartGame() { 
     window.location.reload()   
    }


    

 





     
     
    



















