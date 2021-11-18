function game() { 
    let computerChoice = computerPlay()
    let playerChoice = prompt("Choose rock, paper or scissors").toLowerCase().trim()
    let outcome = ""

    function computerPlay() {
        return Math.floor(Math.random() * 3)+ 1
    }
  
    function playRound (computerChoice, playerChoice) {
    
    if (playerChoice === "rock") {
        playerChoice = 1
        console.log("you chose rock")
    } else if (playerChoice === "paper") {
        playerChoice = 2
        console.log("you chose paper")
    } else if (playerChoice === "scissors") {
        playerChoice = 3
        console.log("you chose scissors")
    } else {
        console.log("not a valid choice")
    }
    
    if (computerChoice == 1) {
        console.log("computer chose rock")
    } else if (computerChoice == 2) {
        console.log("computer chose paper")
    } else {
        console.log("computer chose scissors")
    }
    
    if (computerChoice === playerChoice) {
        
        outcome = "you tied"
    } 
    if (
        playerChoice === 1 && computerChoice === 2 ||
        playerChoice === 2 && computerChoice === 3 ||
        playerChoice === 3 && computerChoice === 2
        )
        { outcome = "you lose"} 
    if (
        playerChoice === 1 && computerChoice === 3 ||
        playerChoice === 2 && computerChoice === 1 ||
        playerChoice === 3 && computerChoice === 2
    ) 
    {outcome = "you win"}
return outcome  

}
console.log(playRound(computerChoice,playerChoice))    
  }
for (let i = 1; i <= 5; i++) {
    game()
}
 
