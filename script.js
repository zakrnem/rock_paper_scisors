/*
the computer must choose randomly rock, paper or scissor
one way to accomplish this would to create a random number (that's between 0 and 1) and multiply it for two
it's necessary to add by one to prevent getting number lower than 1
it's also necessary to round the random number
*/
let gameScore = 0;

  for (let i = 0; i < 5; i++) {
          
  const computerChoiceNumber = Math.round((Math.random() * 2.5) + 0.5);
  let userChoiceNumber = parseInt(prompt('ROCK PAPER & SCISSORS GAME\n Please enter a option:\n 1 for rock, 2 for paper and 3 for scisors'));
  
  
  
  gameScore = (playRound(userChoiceNumber, computerChoiceNumber)) + gameScore;
  
    function playRound(userChoiceNumber, computerChoiceNumber) {
      let roundScore = 0;

      
  
/*
now we must create a input for the user
this input require prompting a message indicating that:
1 = rock
2 = paper
3 = scissor
*/
/*
  
  */
/*
next we must create an algorithm for the rules of the game
Rule #1: Paper(2) kills Rock(1)
Rule #2: Scissors(3) kills Paper (2)
Rule #3: Rock(1) kills Scissors(3)
Rule #4: if both player throw the same object no one wins

There is a general rule scissor(3) > paper(2) > rock (1).
So we need to compare the variable and the constant with an greater than - less than operator.
There is one exception to the rule: Rock (1) kills Scissors (3) so we must make an especial rule for this condition.
This exception must be fist in the "switch" code.
There other rule if the user choice & the computer choice are equal it's a tie.
*/

let userChoiceString;
let computerChoiceString;
let consoleAnswer;

switch(userChoiceNumber) {
  case(1):
    userChoiceString = 'Rock';
    break;
  case(2):
    userChoiceString = 'Paper';
    break;
  case(3):
    userChoiceString = 'Scissors';
    break;
}

switch(computerChoiceNumber) {
  case(1):
    computerChoiceString = 'Rock';
    break;
  case(2):
    computerChoiceString = 'Paper';
    break;
  case(3):
    computerChoiceString = 'Scissors';
    break;
}

  switch(true) {
    case(userChoiceNumber > 3 || userChoiceNumber < 1):
      console.log('Please enter a number between 1 and 3');
      break;
    case (userChoiceNumber === 1 && computerChoiceNumber === 3):
      consoleAnswer = 'You win, ' + userChoiceString + ' beats ' + computerChoiceString;
      roundScore = ++roundScore;
      console.log(consoleAnswer);
      break;
    case (userChoiceNumber === 3  && computerChoiceNumber === 1):
      consoleAnswer = 'You lost, ' + computerChoiceString + ' beats ' + userChoiceString;
      roundScore = --roundScore;
      console.log(consoleAnswer);
      break;
    case(userChoiceNumber > computerChoiceNumber):
      consoleAnswer = 'You win, ' + userChoiceString + ' beats ' + computerChoiceString;
      console.log(consoleAnswer);
      roundScore = ++roundScore;
      break;
    case(userChoiceNumber < computerChoiceNumber):
      consoleAnswer = 'You lost, ' + computerChoiceString + ' beats ' + userChoiceString;
      roundScore = --roundScore;
      console.log(consoleAnswer);
      break;
    case(userChoiceNumber === computerChoiceNumber):
      console.log("It's a tie");
      break;
    }

  return roundScore;
}

/*
We need a function that checks who was the winner a adds a number to variable that will be the gamescore.
*/

  }

  console.log('Your score is: ' + gameScore);
