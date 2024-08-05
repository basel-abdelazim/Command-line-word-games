const moves = ['rock', 'paper', 'scissors'];
const playerMove = process.argv[2];
if (!moves.includes(playerMove)) {  
    console.log("Invalid move. Please choose rock, paper, or scissors.");  
    process.exit(1); 
}
const computerMove = moves[Math.floor(Math.random() * moves.length)];  
console.log(`You chose ${playerMove}. Computer chose ${computerMove}.`);  
if (playerMove === computerMove) {  
    console.log("It's a draw!");  
} else if (  
    (playerMove === 'rock' && computerMove === 'scissors') ||  
    (playerMove === 'scissors' && computerMove === 'paper') ||  
    (playerMove === 'paper' && computerMove === 'rock')  
) {  
    console.log("You win!");  
} else {  
    console.log("You lose!");  
}  