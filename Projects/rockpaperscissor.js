document.addEventListener('DOMContentLoaded',() => {
    const rock = document.querySelector('#rock');
    const scissor = document.querySelector('#scissor');
    const paper = document.querySelector('#paper');
    const player = document.getElementById('user');
    const computer = document.querySelector("#computer");
    const playerChoice = document.querySelector("#player-choice");
    const computerChoice = document.querySelector("#computer-choice");
    const winMessage = document.querySelector('.win-message');
    const arr = [rock,scissor,paper];
    
    
    arr.forEach(e => {
        e.addEventListener('click',() => {
            computer.style.animation = "";
            player.style.animation = "";

            let playerScore = parseInt(player.innerText.slice(-1));
            let computerScore = parseInt(computer.innerText.slice(-1));
            const randomIndex = Math.floor(Math.random()*arr.length);
            const randomChoice = arr[randomIndex];
            
            playerChoice.classList.remove('hidden');
            computerChoice.classList.remove('hidden');

            if(e === scissor){
                playerChoice.innerText = "Player: Scissor";
            }else if(e === rock){
                playerChoice.innerHTML = "Player: Rock";
            }else{
                playerChoice.innerHTML = "Player: Paper";
            };

            if(randomChoice === scissor){
                computerChoice.innerText = "Thinking...";
                setTimeout(() => {
                    computerChoice.innerText = "Computer: Scissor";
                }, 1000);
            }else if(randomChoice === rock){
                computerChoice.innerText = "Thinking...";
                setTimeout(() => {
                    computerChoice.innerHTML = "Computer: Rock";
                }, 2000);
            }else{
                computerChoice.innerText = "Thinking...";
                setTimeout(() => {
                    computerChoice.innerHTML = "Computer: Paper"
                }, 1200);
            };

            setTimeout(() => {
                winMessage.classList.remove('hidden');
                if(randomChoice === e){
                    winMessage.innerText = "Draw";
                }else if((randomChoice === rock && e === paper) || (randomChoice === paper && e === scissor) || (randomChoice === scissor && e === rock)){
                    player.innerText = `Player: ${playerScore+=1}`;
                    player.style.animation = "win 0.4s 1";
                    winMessage.innerText = "You won";
                }else{
                    computer.innerText = `Computer: ${computerScore+=1}`;
                    computer.style.animation = "win 0.4s 1";
                    winMessage.innerText = "Computer won";
                }
            }, 1300);
        });
    });
});