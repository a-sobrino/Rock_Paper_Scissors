// Randomly select a choice for the computer
function getComputerChoice() {
    const computerHand = ["rock", "paper", "scissors"];
    const randomFloat = Math.random() * 3;
    const randomIndex = Math.floor(randomFloat);
    return computerHand[randomIndex];
}

// Determine the result of a single round
function playRound(playerChoice, computerChoice) {
    if (playerChoice === "rock" && computerChoice === "rock") {
        return "It's a tie.";
    } else if (playerChoice === "rock" && computerChoice === "paper") {
        return "You lose! Paper beats Rock";
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
        return "You win! Rock beats Scissors";
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        return "You win! Paper beates Rock";
    } else if (playerChoice === "paper" && computerChoice === "paper") {
        return "It's a tie.";
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
        return "You lose! Scissors beats Paper";
    } else if (playerChoice === "scissors" && computerChoice === "scissors") {
        return "It's a tie.";
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
        return "You lose! Rock beats Scissors";
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        return "You win! Scissors beats Paper";
    }
}

// Manage the game state to declare a winner after 5 rounds
function game(result) {
    if (playerWins < 5 || computerWins < 5) {
        roundWinner.textContent = result; 
        if (result.includes("win!")) {
            playerWins += 1;
            playerScore.textContent = playerWins.toString();
        } else if (result.includes("lose!")) {
            computerWins += 1;
            computerScore.textContent = computerWins.toString();
        } else {
            playerScore.textContent = playerWins.toString();
            computerScore.textContent = computerWins.toString();
        }
    } 

    if (playerWins === 5) {
        roundWinner.textContent = "Congratulations! You win this round!";
        playerWins = 0;
        computerWins = 0;
        playerScore.textContent = "5";
        computerScore.textContent = computerWins.toString();
    } else if (computerWins === 5) {
        roundWinner.textContent = "You lost this round. Better luck next time.";
        playerWins = 0;
        computerWins = 0;
        playerScore.textContent = playerWins.toString();
        computerScore.textContent = "5";
    }
}

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const playerScore = document.querySelector(".playerScore");
const computerScore = document.querySelector(".computerScore");
const roundWinner = document.querySelector(".roundWinner");

let playerWins = 0;
let computerWins = 0;


rock.addEventListener("click", () => {
    const playerSelection = "rock";
    let result = playRound(playerSelection, getComputerChoice());
    game(result);
});

paper.addEventListener("click", () => {
    const playerSelection = "paper";
    let result = playRound(playerSelection, getComputerChoice());
    game(result);
});

scissors.addEventListener("click", () => {
    const playerSelection = "scissors";
    let result = playRound(playerSelection, getComputerChoice());
    game(result);
});

