let playerScore = 1;
let computerScore = 1;



function showhideD6Game () {
    document.getElementById('d6-game').style.display = 'block';
    document.getElementById('start-menu').style.display = 'none';
} 


function playD6Game(){
    let playerRoll = Math.floor(Math.random() * 6) + 1;
    let computerRoll = Math.floor(Math.random() * 6) + 1;
      
    let diceImageArray = [
                          img1 = 'assets/images/dice1.png', 
                          img2 = 'assets/images/dice2.png', 
                          img3 = 'assets/images/dice3.png', 
                          img4 = 'assets/images/dice4.png',
                          img5 = 'assets/images/dice5.png',
                          img6 = 'assets/images/dice6.png']                    


   if (playerRoll === 1) {
       document.getElementById('d6-dice-image-one').src = diceImageArray[0]
   } if (playerRoll === 2) {
    document.getElementById('d6-dice-image-one').src = diceImageArray[1]
   } if (playerRoll === 3) {
    document.getElementById('d6-dice-image-one').src = diceImageArray[2]
   } if (playerRoll === 4) {
    document.getElementById('d6-dice-image-one').src = diceImageArray[3]
   } if (playerRoll === 5) {
    document.getElementById('d6-dice-image-one').src = diceImageArray[4]
   } if (playerRoll === 6) {
    document.getElementById('d6-dice-image-one').src = diceImageArray[5]

   } if (computerRoll === 1) {
    document.getElementById('d6-dice-image-two').src = diceImageArray[0]
} if (computerRoll === 2) {
 document.getElementById('d6-dice-image-two').src = diceImageArray[1]
} if (computerRoll === 3) {
 document.getElementById('d6-dice-image-two').src = diceImageArray[2]
} if (computerRoll === 4) {
 document.getElementById('d6-dice-image-two').src = diceImageArray[3]
} if (computerRoll === 5) {
 document.getElementById('d6-dice-image-two').src = diceImageArray[4]
} if (computerRoll === 6) {
 document.getElementById('d6-dice-image-two').src = diceImageArray[5]
}
  
  
   if (playerRoll > computerRoll) {
       document.getElementById('d6-win-lose-draw').innerHTML = 'Win';
       document.getElementById('d6-player-score').innerHTML = playerScore++;
   } else if (playerRoll < computerRoll) { 
    document.getElementById('d6-win-lose-draw').innerHTML = 'Lose';
    document.getElementById('d6-computer-score').innerHTML = computerScore++;
   } else if (playerRoll === computerRoll) {
    document.getElementById('d6-win-lose-draw').innerHTML = 'Draw';
   } if (playerScore === 11) {
    document.getElementById('d6-winner-loser').innerHTML = 'You Win The Game!';
    document.getElementById('d6-roll-button').remove();
    document.getElementById('d6-player').remove();
    document.getElementById('d6-computer').remove();
    document.getElementById('d6-scores-wrapper').remove();
    document.getElementById('d6-result-wrapper').remove();;
    document.getElementById('d6-win-lose-draw').remove();
   } 
   
   if (computerScore === 11) {
    document.getElementById('d6-winner-loser').innerHTML = 'You Lose The Game!';
    document.getElementById('d6-roll-button').remove();
    document.getElementById('d6-player').remove();
    document.getElementById('d6-computer').remove();
    document.getElementById('d6-scores-wrapper').remove();
    document.getElementById('d6-result-wrapper').remove();
    document.getElementById('d6-win-lose-draw').remove();
   }
}

function showhideD10Game() {
    document.getElementById('d10-game').style.display = 'block';
    document.getElementById('start-menu').style.display = 'none';
  } 


  function playD10Game(){
    let playerRoll = Math.floor(Math.random() * 10) + 1;
    let computerRoll = Math.floor(Math.random() * 10) + 1;
      
    let diceImageArray = [
                          img1 = 'assets/images/d10diceface1.png', 
                          img2 = 'assets/images/d10diceface2.png', 
                          img3 = 'assets/images/d10diceface3.png', 
                          img4 = 'assets/images/d10diceface4.png',
                          img5 = 'assets/images/d10diceface5.png',
                          img6 = 'assets/images/d10diceface6.png', 
                          img7 = 'assets/images/d10diceface7.png',
                          img8 = 'assets/images/d10diceface8.png',
                          img9 = 'assets/images/d10diceface9.png',
                          img10 = 'assets/images/d10diceface10.png']                  


   if (playerRoll === 1) {
       document.getElementById('d10-dice-image-one').src = diceImageArray[0]
   } if (playerRoll === 2) {
    document.getElementById('d10-dice-image-one').src = diceImageArray[1]
   } if (playerRoll === 3) {
    document.getElementById('d10-dice-image-one').src = diceImageArray[2]
   } if (playerRoll === 4) {
    document.getElementById('d10-dice-image-one').src = diceImageArray[3]
   } if (playerRoll === 5) {
    document.getElementById('d10-dice-image-one').src = diceImageArray[4]
   } if (playerRoll === 6) {
    document.getElementById('d10-dice-image-one').src = diceImageArray[5]
   } if (playerRoll === 7) {
    document.getElementById('d10-dice-image-one').src = diceImageArray[6]
   } if (playerRoll === 8) {
    document.getElementById('d10-dice-image-one').src = diceImageArray[7]
   } if (playerRoll === 9) {
    document.getElementById('d10-dice-image-one').src = diceImageArray[8]
   } if (playerRoll === 10) {
    document.getElementById('d10-dice-image-one').src = diceImageArray[9]
   


   } if (computerRoll === 1) {
    document.getElementById('d10-dice-image-two').src = diceImageArray[0]
} if (computerRoll === 2) {
 document.getElementById('d10-dice-image-two').src = diceImageArray[1]
} if (computerRoll === 3) {
 document.getElementById('d10-dice-image-two').src = diceImageArray[2]
} if (computerRoll === 4) {
 document.getElementById('d10-dice-image-two').src = diceImageArray[3]
} if (computerRoll === 5) {
 document.getElementById('d10-dice-image-two').src = diceImageArray[4]
} if (computerRoll === 6) {
 document.getElementById('d10-dice-image-two').src = diceImageArray[5]
} if (computerRoll === 7) {
    document.getElementById('d10-dice-image-two').src = diceImageArray[6]
   } if (computerRoll === 8) {
    document.getElementById('d10-dice-image-two').src = diceImageArray[7]
   } if (computerRoll === 9) {
    document.getElementById('d10-dice-image-two').src = diceImageArray[8]
   }if (computerRoll === 10) {
    document.getElementById('d10-dice-image-two').src = diceImageArray[9]
   }
  
  
   if (playerRoll > computerRoll) {
       document.getElementById('d10-win-lose-draw').innerHTML = 'Win';
       document.getElementById('d10-player-score').innerHTML = playerScore++;
   } else if (playerRoll < computerRoll) { 
    document.getElementById('d10-win-lose-draw').innerHTML = 'Lose';
    document.getElementById('d10-computer-score').innerHTML = computerScore++;
   } else if (playerRoll === computerRoll) {
    document.getElementById('d10-win-lose-draw').innerHTML = 'Draw';
   } if (playerScore === 11) {
    document.getElementById('d10-winner-loser').innerHTML = 'You Win The Game!';
    document.getElementById('d10-roll-button').remove();
    document.getElementById('d10-player').remove();
    document.getElementById('d10-computer').remove();
    document.getElementById('d10-scores-wrapper').remove();
    document.getElementById('d10-result-wrapper').remove();;
    document.getElementById('d10-win-lose-draw').remove();
   } 
   
   if (computerScore === 11) {
    document.getElementById('d10-winner-loser').innerHTML = 'You Lose The Game!';
    document.getElementById('d10-roll-button').remove();
    document.getElementById('d10-player').remove();
    document.getElementById('d10-computer').remove();
    document.getElementById('d10-scores-wrapper').remove();
    document.getElementById('d10-result-wrapper').remove();
    document.getElementById('d10-win-lose-draw').remove();
   }
}




  function showhideD20Game() {
    document.getElementById('d20-game').style.display = 'block';
    document.getElementById('start-menu').style.display = 'none';
  } 

function restartGame() { 
     window.location.reload()   
    }
    
 





     
     
    



















