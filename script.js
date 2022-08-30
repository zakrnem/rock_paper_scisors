let resultDOM = document.createElement('div');
    resultDOM.className = 'game-result';

    
let container = document.querySelector('.container');
    container.insertBefore(resultDOM, container.firstElementChild)

let gameScore = 0;
let roundScore = 0;
let userChoiceButtons = document.getElementById('buttons');
userChoice = userChoiceButtons.addEventListener('click', playRound)

function playRound(e) {
  
  const computerChoiceNumber = Math.round((Math.random() * 2.5) + 0.5);   
  let userChoiceNumber;
  let computerChoiceString;
  let userChoiceString = e.target.id;

  switch (true) {
    case(e.target.id === 'rock'):
      userChoiceNumber = 1;
      break;
    case(e.target.id === 'paper'):
      userChoiceNumber = 2;
      break;
    case(e.target.id === 'scissors'):
      userChoiceNumber = 3;
      break;
  }

  switch (true) {
    case(computerChoiceNumber === 1):
      computerChoiceString = 'rock';
      break;
    case(computerChoiceNumber === 2):
      computerChoiceString = 'paper';
      break;
    case(computerChoiceNumber === 3):
      computerChoiceString = 'scissors';
      break;
  }

  let resultString = document.createElement('div');

  switch(true) {
    case (userChoiceNumber === 1 && computerChoiceNumber === 3):
      resultString.textContent = 'You win, ' + userChoiceString + ' beats ' + computerChoiceString;
      roundScore = ++roundScore;
      break;
    case (userChoiceNumber === 3  && computerChoiceNumber === 1):
      resultString.textContent = 'You lost, ' + computerChoiceString + ' beats ' + userChoiceString;
      roundScore = --roundScore;
      break;
    case(userChoiceNumber > computerChoiceNumber):
      resultString.textContent = 'You win, ' + userChoiceString + ' beats ' + computerChoiceString;
      roundScore = ++roundScore;
      break;
    case(userChoiceNumber < computerChoiceNumber):
      resultString.textContent = 'You lost, ' + computerChoiceString + ' beats ' + userChoiceString;
      roundScore = --roundScore;
      break;
    case(userChoiceNumber === computerChoiceNumber):
      resultString.textContent ="It's a tie";
      break;
    }

    
    resultDOM.appendChild(resultString);

    let computerChoiceDOM = document.createElement('div');
    computerChoiceDOM.textContent = 'The computer chose: ' + computerChoiceString;
    resultDOM.appendChild(computerChoiceDOM);

    let userChoiceDOM = document.createElement('div');
    userChoiceDOM.textContent = 'You chose: ' + userChoiceString;
    resultDOM.appendChild(userChoiceDOM);

    let scoreDOM = document.createElement('div');
    scoreDOM.textContent = 'The current score is: ' + roundScore;
    resultDOM.appendChild(scoreDOM);

    resultDOM.appendChild(document.createElement('p'));

    // return roundScore;
    
}

/*
    


  

  
gameScore = (playRound(userChoiceNumber, computerChoiceNumber)) + gameScore;
  

  console.log('Your score is: ' + gameScore);

}
✊
✋
✌
*/


