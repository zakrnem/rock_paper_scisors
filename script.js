/*
the computer must choose randomly rock, paper or scissor
one way to accomplish this would to create a random number (that's between 0 and 1) and multiply it for two
it's necessary to add by one to prevent getting number lower than 1
it's also necessary to round the random number
*/

  /*const computerChoiceNumber = Math.round((Math.random() * 2) + 1);*/
  const computerChoiceNumber = 3;
  
/*
now we must create a input for the user
this input require prompting a message indicating that:
1 = rock
2 = paper
3 = scisor
*/

  let userChoiceNumber = parseInt(prompt('ROCK PAPER & SCISORS GAME\n Please enter a option:\n 1 for rock, 2 for paper and 3 for scisors'));
  
/*
next we must create an algorithm for the rules of the game
Rule #1: Paper(2) kills Rock(1)
Rule #2: Scisors(3) kills Paper (2)
Rule #3: Rock(1) kills Scisors(3)
Rule #4: if both player throw the same object no one wins

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


