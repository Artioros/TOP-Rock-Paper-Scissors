function getComputerChoice () {
   let randomNumber;
   
   randomNumber = Math.floor(Math.random() * 30) + 1;

   let rockPaperScissors;

   if (randomNumber <= 10) {
      rockPaperScissors = "rock";
   } else if (randomNumber > 10 && randomNumber <= 20) {
      rockPaperScissors = "paper";
   } else {
      rockPaperScissors = "scissors";
   }
   return rockPaperScissors;
}

function getHumanChoice () {
   let humanChoice;
   humanChoice = prompt ('Write "r" for rock, "p" for paper and "s" for scissors');

   if (humanChoice === "r") {
      humanChoice = "rock";
   } else if (humanChoice === "p") {
      humanChoice = "paper";
   } else if (humanChoice === "s"){
      humanChoice = "scissors";
   }
   return humanChoice;
}

// Your game will be played round by round. You will write a function that takes the human and computer player choices as arguments, plays a single round, increments the round winner’s score and logs a winner announcement.

//now i need a function that will compare the human and machine's choice. Whoever is the winner of that round will get a point, which will be incremented to one of the two variables: humanScore or computerScore

/*
1. get the computer choice, store it in a variable
2. get the human choice, store it in a variable
3. create a conditional construct to compare the two values
   1. if human choice and computer choice are equal, draw
   2. if human choice is rock:
      1. if computer choice is paper, computer wins
      2. if computer choice is scissors, human wins
   2. if human choice is paper:
      1. if computer choice is rock, human wins
      2. if computer choice is scissors, computer wins
   3. if human choice is scissors:
      1. if computer choice is rock, computer wins
      2. if computer choice is paper, human wins
4. if draw, no one gets a point
5. if human wins, humanScore variable incremented by one
6. if machine wins, machineScore incremented by one
*/

function playGame () {
   let humanScore = 0;
   let computerScore = 0;

   let computerChoice = getComputerChoice();
   let humanChoice = getHumanChoice();
   humanChoice = humanChoice.toLowerCase();

   function playRound (computerChoice, humanChoice) {
      if (computerChoice === humanChoice) {
         console.log("It's a draw!");
      }
      if (humanChoice === "rock") {
         if (computerChoice === "paper") {
            console.log("You lose! Paper beats Rock!");
            computerScore ++;
         } else if (computerChoice === "scissors") {
            console.log("You win! Rock beats Scissors!");
            humanScore ++;
         }
      }
      if (humanChoice === "paper") {
         if (computerChoice === "rock") {
            console.log("You win! Paper beats Rock!");
            humanScore ++;
         } else if (computerChoice === "scissors") {
            console.log("You lose! Scissors beat Paper!");
            computerScore ++;
         }
      }
      if (humanChoice === "scissors") {
         if (computerChoice === "rock") {
            console.log("You lose! Rock beats Scissors!");
            computerScore ++;
         } else if (computerChoice === "paper") {
            console.log("You win! Scissors beat Paper!");
            humanScore ++;
         }
      }
   }

   for (let i = 1; i <= 5; i++) {
      playRound(getComputerChoice(), getHumanChoice());
   }

   if (computerScore == humanScore) {
      return console.log(`It's a draw! You scored ${humanScore}, and the computer got ${computerScore} as well!`);
   } else if (computerScore < humanScore) {
      return console.log(`You are the winner! You got ${humanScore} points, and the machine scored ${computerScore}!`)
   } else {
      return console.log(`Oh no, the machine beat you! You scored ${humanScore} points, and the computer got ${computerScore}!`)
   }
}

console.log(playGame());
