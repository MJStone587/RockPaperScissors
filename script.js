const winRock = "Computer chose Rock... YOU WIN!";
const loseRock = "Computer chose Rock... YOU LOSE!";
const winPaper = "Computer chose Paper... YOU WIN!";
const losePaper = "Computer chose Paper... YOU LOSE!";
const winScissors = "Computer chose Scissors... YOU WIN!";
const loseScissors = "Computer chose Scissors... YOU LOSE!";

const tie = "You both chose the same thing! It's a Tie";


function computerSelect() {
    let compChoice = "";
    let randomNum = Math.random() * (4 - 1) + 1;
    if (randomNum >= 1 && randomNum < 2) {
        compChoice = "scissor";
    } else if (randomNum >= 2 && randomNum < 3) {
        compChoice = "paper";
    } else if (randomNum >= 3 && randomNum < 4) {
        compChoice = "rock";
    }
    return compChoice;
}

function playRound() {
    let playerSelect = prompt("Choose: Rock, Paper, or Scissor").toLowerCase();
    let compSelect = computerSelect();
    if (playerSelect === "rock" && compSelect === "scissor") {
        return (winScissors);
    } else if (playerSelect === "rock" && compSelect === "rock") {
        return (tie);
    } else if (playerSelect === "rock" && compSelect === "paper") {
        return (losePaper);
    } else if (playerSelect === "paper" && compSelect === "scissor") {
        return (loseScissors);
    } else if (playerSelect === "paper" && compSelect === "rock") {
        return (winRock);
    } else if (playerSelect === "scissor" && compSelect === "scissor") {
        return (tie);
    } else if (playerSelect === "scissor" && compSelect === "rock") {
        return (loseRock);
    } else if (playerSelect === "scissor" && compSelect === "paper") {
        return (winPaper);
    } else if (playerSelect === "paper" && compSelect === "paper") {
        return (tie);
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    while (playerScore != 5 && computerScore != 5) {
        let playOnce = playRound();
        console.log(playOnce);
        if (playOnce === winScissors || playOnce === winRock || playOnce === winPaper) {
            playerScore++;
            console.log("Current Score... Player:  " + playerScore + " Computer: " + computerScore);
        } else if (playOnce === loseScissors || playOnce === loseRock || playOnce === losePaper) {
            computerScore++;
            console.log("Current Score... Player:  " + playerScore + " Computer: " + computerScore);
        } else if (playOnce === tie) {
            console.log("Current Score... Player:  " + playerScore + " Computer: " + computerScore);
        }
    }
    if (playerScore == 5) {
        console.log("Player has reached 5 points, You Win!");
    } else if (computerScore == 5) {
        console.log("Computer has reached 5 points, You Lose!");
    }
}

game();
