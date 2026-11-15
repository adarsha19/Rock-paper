let humanScore = 0;
let computerScore = 0;
const choices = ["rock", "paper", "scissor"];

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

// 1. Create and append a score display div to the page once
const resultDiv = document.createElement("div");
document.body.appendChild(resultDiv);
// 2. Create a paragraph for the final message (hidden initially)
const finalPara = document.createElement("p");
const scoreRecord = document.createElement("p");
const perGameWinner=document.createElement("p");
scoreRecord.textContent = `Score -> You: ${humanScore} | Computer: ${computerScore}`;
resultDiv.appendChild(perGameWinner);
resultDiv.appendChild(scoreRecord);
resultDiv.appendChild(finalPara);



function playRound(humanChoice, computerChoice) {
  // Stop the game if someone already reached 5 points
  if (humanScore >= 5 || computerScore >= 5) return;

  if (humanChoice === computerChoice) {
  perGameWinner.textContent=`It is a draw! Both chose ${humanChoice}`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissor") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissor" && computerChoice === "paper")
  ) {
    humanScore += 1;
    perGameWinner.textContent=`You Win! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore += 1;
    perGameWinner.textContent=`Computer Wins! ${computerChoice} beats ${humanChoice}`;
  }

  // Update the score display text node dynamically on every click
  scoreRecord.textContent = `Score -> You: ${humanScore} | Computer: ${computerScore}`;

  // Check if someone won the game (first to 5)
  if (humanScore === 5 || computerScore === 5) {
    if (humanScore > computerScore) {
      finalPara.textContent = "YOU WIN THE GAME!";
    } else {
      finalPara.textContent = "YOU LOSE! COMPUTER WINS THE GAME!";
    }
  }
}

// 3. Event Listeners
const rock_btn = document.querySelector("#rock");
const paper_btn = document.querySelector("#paper");
const scissor_btn = document.querySelector("#scissor");

rock_btn.addEventListener('click', () => {
  playRound('rock', getComputerChoice());
});

paper_btn.addEventListener('click', () => {
  playRound('paper', getComputerChoice());
});

scissor_btn.addEventListener('click', () => {
  playRound('scissor', getComputerChoice());
});