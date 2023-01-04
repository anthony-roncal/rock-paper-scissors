const btnRock = document.querySelector(`#rock`);
btnRock.addEventListener('click', playRound);
const btnPaper = document.querySelector(`#paper`);
btnPaper.addEventListener('click', playRound);
const btnScissors = document.querySelector(`#scissors`);
btnScissors.addEventListener('click', playRound);
const btnReset = document.querySelector(`#reset`)
btnReset.addEventListener(`click`, resetGame);
const divInfo = document.querySelector(`.info`);
const divRounds = document.querySelector(`.rounds`);
const divPlayerWins = document.querySelector(`.player-wins`);
const divComputerWins = document.querySelector(`.computer-wins`);
const divResults = document.querySelector(`.results`);

let getComputerChoice = () => {
    let random = Math.floor(Math.random() * 3);
    switch (random) {
        case 0: return "rock";
        case 1: return "paper";
        default: return "scissors";
    }
}

let rounds = 0;
let playerWins = 0;
let computerWins = 0;
function playRound(e) {
    e.stopPropagation();
    const playerSelection = e.target.id;
    const computerSelection = getComputerChoice();
    console.log("e.target.id: " + e.target);
    if (playerSelection === "rock" && computerSelection === "paper") {
        divResults.textContent = "You lose! Paper beats Rock";
        computerWins++;
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        divResults.textContent = "You win! Rock beats Scissors";
        playerWins++;
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        divResults.textContent = "You win! Paper beats Rock";
        playerWins++;
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        divResults.textContent = "You lose! Scissors beats Paper";
        computerWins++;
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        divResults.textContent = "You lose! Rock beats Scissors";
        computerWins++;
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        divResults.textContent = "You win! Scissors beats Paper";
        playerWins++;
    }
    else if (playerSelection === computerSelection) {
        divResults.textContent = "Tie!";
    }
    if (playerWins === 5){
        divResults.textContent = "Congratulations! You win!";
        disableButtons();
    }

    if (computerWins === 5){
        divResults.textContent = "You lose!";
        disableButtons();
    }
    rounds++;
    updateInfo();
}

function updateInfo() {
    divRounds.textContent = `Rounds played: ${rounds}`;
    divPlayerWins.textContent = `Player wins: ${playerWins}`;
    divComputerWins.textContent = `Computer wins: ${computerWins}`;
}
function resetGame() {
    rounds = 0;
    playerWins = 0;
    computerWins = 0;
    divResults.textContent = ``;
    updateInfo();
    btnRock.disabled = false;
    btnPaper.disabled = false;
    btnScissors.disabled = false;
}

function disableButtons() {
    btnRock.disabled = true;
    btnPaper.disabled = true;
    btnScissors.disabled = true;
}
