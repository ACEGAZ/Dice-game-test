let playerScore = 1;
let computerScore = 1;
let removeElements = document.getElementsByClassName('end-game')



function playGame(){
    let playerRoll = Math.floor(Math.random() * 6) + 1;
    let computerRoll = Math.floor(Math.random() * 6) + 1;
   document.getElementById('player-result').innerHTML = playerRoll 
   document.getElementById('computer-result').innerHTML = computerRoll
   if (playerRoll > computerRoll) {
       document.getElementById('win-lose-draw').innerHTML = 'Win';
       document.getElementById('player-score').innerHTML = playerScore++;
   } else if (playerRoll < computerRoll) { 
    document.getElementById('win-lose-draw').innerHTML = 'Lose';
    document.getElementById('computer-score').innerHTML = computerScore++;
   } else if (playerRoll === computerRoll) {
    document.getElementById('win-lose-draw').innerHTML = 'Draw';
   } if (playerScore === 11) {
    document.getElementById('winner-loser').innerHTML = 'You Win The Game!';
    document.getElementById('dice').remove();
    document.getElementById('player').remove();
    document.getElementById('computer').remove();
    document.getElementById('scores').remove();
    document.getElementById('result-wrapper').remove();;
    document.getElementById('win-lose-draw').remove();
   } if (computerScore === 11) {
    document.getElementById('winner-loser').innerHTML = 'You Lose The Game!';
    document.getElementById('dice').remove();
    document.getElementById('player').remove();
    document.getElementById('computer').remove();
    document.getElementById('scores').remove();
    document.getElementById('result-wrapper').remove();
    document.getElementById('win-lose-draw').remove();
   }
}

function restartGame() { 
     window.location.reload()   
    }


    

 





     
     
    



















