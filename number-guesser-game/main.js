function startGame () {
    console.log('game running');
    var answer = getRandomNumber();
    var turnCounter = 1;
    while(checkGuess(answer)) {
      turnCounter = turnCounter + 1;
    }
    alert('you guessed the number in' + turnCounter + 'turns' );
}

function getRandomNumber (){
  return Math.round(Math.random() * 20);
}
function checkGuess(correctAnswer) {
   var userGuess= prompt('make a guess!');
   if(userGuess == correctAnswer) {
       alert('you won');
       return false;
   } else if (userGuess > correctAnswer){
       alert ('too high');
       return true;
   } else if (userGuess < correctAnswer) {
       alert  ('too low');
       return true;
   }
}