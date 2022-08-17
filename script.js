/*
the computer must choose randomly rock, paper or scissor
one way to accomplish this would to create a random number (that's between 0 and 1) and multiply it for two
it's necessary to add by one to prevent getting number lower than 1
it's also necessary to round the random number
*/

  const computerChoiceNumber = Math.round((Math.random() * 2) + 1);
 
/*
now we must create a input for the user
this input require prompting a message indicating that:
1 = rock
2 = paper
3 = scissor
*/

  let userChoiceNumber = parseInt(prompt('ROCK PAPER & SCISSORS GAME\n Please enter a option:\n 1 for rock, 2 for paper and 3 for scisors'));
  
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

  switch(true) {
    case (userChoiceNumber === 1 && computerChoiceNumber === 3):
      console.log('You win');
      break;
    case (userChoiceNumber === 3  && computerChoiceNumber === 1):
      console.log('You lost');
      break;
    case(userChoiceNumber > computerChoiceNumber):
      console.log('You win!');
      break;
    case(userChoiceNumber < computerChoiceNumber):
      console.log('You lost');
      break;
    case(userChoiceNumber === computerChoiceNumber):
      console.log("It's a tie");
      break;
  }

/* It would be nice to know the choice of the computer & the user */

  switch(userChoiceNumber) {
    case(1):
      console.log('User: Rock');
      break;
    case(2):
      console.log('User: Paper');
      break;
    case(3):
      console.log('User: Scissor');
      break;
}

  switch(computerChoiceNumber) {
    case(1):
      console.log('Computer: Rock');
      break;
    case(2):
      console.log('Computer: Paper');
      break;
    case(3):
      console.log('Computer: Scissor');
      break;
  }


