const container = document.querySelector("#container");
const content = document.createElement("div");
const title = document.createElement("p");
const butContainer = document.createElement("div");
const playerScore = document.createElement("div");
const playerName = document.createElement("p");
const compName = document.createElement("p");
const compScore = document.createElement("div");
const scoreBoard =  document.createElement("div");
const playerSide = document.createElement("div");
const compSide = document.createElement("div");

const rockB = document.createElement('button');
const paperB = document.createElement('button');
const scissorsB = document.createElement('button');

butContainer.classList.add("butContainer");
title.classList.add("title");
content.classList.add("content");
rockB.classList.add("cButton");
paperB.classList.add("cButton");
scissorsB.classList.add("cButton");
scoreBoard.classList.add("scoreBoard");
playerSide.classList.add("playerSide");
compSide.classList.add("compSide");
playerName.classList.add("bigName");
compName.classList.add("bigName");
playerScore.classList.add("bigScore");
compScore.classList.add("bigScore");

title.textContent = "ROCK PAPER SCISSORS";
rockB.textContent = "ROCK";
paperB.textContent = "PAPER";
scissorsB.textContent = "SCISSORS";
playerName.textContent = "PLAYER";
compName.textContent = "COMPUTER";
playerScore.textContent = "0";
compScore.textContent = "0";

// playerScore.textContent = `${pScore}`
// compScore.textContent = `${cScore}`

container.appendChild(content);
content.appendChild(title);
content.appendChild(butContainer);
content.appendChild(scoreBoard);
butContainer.appendChild(rockB);
butContainer.appendChild(paperB);
butContainer.appendChild(scissorsB);
scoreBoard.appendChild(playerSide);
scoreBoard.appendChild(compSide);
playerSide.appendChild(playerName);
playerSide.appendChild(playerScore);
compSide.appendChild(compName);
compSide.appendChild(compScore);

function game() { 
    let computerChoice = computerPlay()
    let playerChoice = prompt("Choose rock, paper or scissors").toLowerCase().trim()
    let outcome = ""
    let pScore = 0
    let cScore = 0

    function computerPlay() {
        return Math.floor(Math.random() * 3)+ 1
    }
  
    function playRound (computerChoice, playerChoice) {
    
    if (playerChoice === "rock") {
        playerChoice = "rock"
        console.log("you chose rock")
    } else if (playerChoice === "paper") {
        playerChoice = "paper"
        console.log("you chose paper")
    } else if (playerChoice === "scissors") {
        playerChoice = "scissors"
        console.log("you chose scissors")
    } else {
        console.log("not a valid choice")
    }
    
    if (computerChoice == 1) {
        computerChoice = "rock"
        console.log("computer chose rock")
    } else if (computerChoice == 2) {
        computerChoice = "paper"
        console.log("computer chose paper")
    } else {
        computerChoice = "scissors"
        console.log("computer chose scissors")
    }
    
    if (computerChoice === playerChoice) {
        
        outcome = "you tied"
    } 
    if (
        playerChoice === "rock" && computerChoice === "paper" ||
        playerChoice === "paper" && computerChoice === "scissors" ||
        playerChoice === "scissors" && computerChoice === "paper"
        )
        { outcome = "you lose"; cScore++} 
    if (
        playerChoice === "rock" && computerChoice === "scissors" ||
        playerChoice === "paper" && computerChoice === "rock" ||
        playerChoice === "scissors" && computerChoice === "paper"
    ) 
    {outcome = "you win"; pScore++}
return outcome  

}
console.log(playRound(computerChoice,playerChoice))    
  }
for (let i = 1; i <= 5; i++) {
    game()
}
 
