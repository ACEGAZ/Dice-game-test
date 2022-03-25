let playerScore = 1;
let computerScore = 1;


function playGame(){
    let playerRoll = Math.floor(Math.random() * 6) + 1;
    let computerRoll = Math.floor(Math.random() * 6) + 1;

   if (playerRoll === 1) {
       document.getElementById('dice-image-one').src = 'assets/images/dice1.png'
   } if (playerRoll === 2) {
    document.getElementById('dice-image-one').src = 'assets/images/dice2.png'
   } if (playerRoll === 3) {
    document.getElementById('dice-image-one').src = 'assets/images/dice3.png'
   } if (playerRoll === 4) {
    document.getElementById('dice-image-one').src = 'assets/images/dice4.png'
   } if (playerRoll === 5) {
    document.getElementById('dice-image-one').src = 'assets/images/dice5.png'
   } if (playerRoll === 6) {
    document.getElementById('dice-image-one').src = 'assets/images/dice6.png'

   } if (computerRoll === 1) {
    document.getElementById('dice-image-two').src = 'assets/images/dice1.png'
} if (computerRoll === 2) {
 document.getElementById('dice-image-two').src = 'assets/images/dice2.png'
} if (computerRoll === 3) {
 document.getElementById('dice-image-two').src = 'assets/images/dice3.png'
} if (computerRoll === 4) {
 document.getElementById('dice-image-two').src = 'assets/images/dice4.png'
} if (computerRoll === 5) {
 document.getElementById('dice-image-two').src = 'assets/images/dice5.png'
} if (computerRoll === 6) {
 document.getElementById('dice-image-two').src = 'assets/images/dice6.png'
}
  
  
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
    document.getElementById('roll-button').remove();
    document.getElementById('player').remove();
    document.getElementById('computer').remove();
    document.getElementById('scores').remove();
    document.getElementById('result-wrapper').remove();;
    document.getElementById('win-lose-draw').remove();
   } 
   
   if (computerScore === 11) {
    document.getElementById('winner-loser').innerHTML = 'You Lose The Game!';
    document.getElementById('roll-button').remove();
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
    
 





     
     
    



















