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

let humanScore = 0;
let computerScore = 0;

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

let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();

function playRound (computerChoice, humanChoice) {
   humanChoice = humanChoice.toLowerCase();

   if (computerChoice === humanChoice) {
      alert("It's a draw!");
   }

   if (humanChoice === "rock") {
      if (computerChoice === "paper") {
         alert("You lose!");
         computerScore ++;
      } else if (computerChoice === "scissors") {
         alert("You win!");
         humanScore ++;
      }
   }

   if (humanChoice === "paper") {
      if (computerChoice === "rock") {
         alert("You win!");
         humanScore ++;
      } else if (computerChoice === "scissors") {
         alert("You lose!");
         computerScore ++;
      }
   }

   if (humanChoice === "scissors") {
      if (computerChoice === "rock") {
         alert("You lose!");
         computerScore ++;
      } else if (computerChoice === "paper") {
         alert("You win!");
         humanScore ++;
      }
   }
}

