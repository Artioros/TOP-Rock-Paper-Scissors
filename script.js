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

console.log(getHumanChoice());