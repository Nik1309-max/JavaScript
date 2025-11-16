document.addEventListener('DOMContentLoaded',() => {
    const boxes = document.querySelectorAll('.boxes');
    const resetBtn = document.getElementById('reset');
    const startBtn  = document.getElementById('startgame');
    const container = document.querySelector('.container');
    const newGameBtn = document.getElementById('newgame');
    const user1Score = document.getElementById('user1');
    const user2Score = document.getElementById('user2');

    let turn0 = true;
    
    const winPatterns = [
        [0,1,2],
        [0,3,6],
        [0,4,8],
        [1,4,7],
        [2,5,8],
        [2,4,6],
        [3,4,5],
        [6,7,8]
    ];
    
    function checkWinner(){
        for(let pattern of winPatterns){
            const pos1Val = boxes[pattern[0]].innerText;
            const pos2Val = boxes[pattern[1]].innerText;
            const pos3Val = boxes[pattern[2]].innerText;
            if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
                let draw = false
                if(pos1Val === pos2Val && pos2Val === pos3Val){
                    turn0=true;
                    boxes.forEach(box => {
                        box.disabled = true;
                    })
                    setTimeout(() => {boxes.forEach(box => {
                        box.innerText = "";
                        box.disabled = false;
                    })},2000)
                    
                    if(pos1Val==="0"){
                        user1Score.style.animation = "win 1s 1"
                        let score1 = parseInt(user1Score.innerText.slice(-1));
                        user1Score.innerText = `Player 0: ${score1+1}`
                    }else{
                        user2Score.style.animation = "win 1s 1"
                        let score2 = parseInt(user2Score.innerText.slice(-1));
                        user2Score.innerText = `Player X: ${score2+1}`
                    };
                };
            
            };
                // if(!draw){
                //     boxes.forEach(box => {
                //         turn0 = true
                //         box.innerText = ""
                //         box.disabled = false
                //     })
                    
            
        };
    };

    startBtn.addEventListener('click',() => {
        user1Score.classList.remove('hidden');
        user2Score.classList.remove('hidden');
        container.classList.remove('hidden');
        startBtn.classList.add('hidden');
        resetBtn.classList.remove('hidden');
        // newGameBtn.classList.remove('hidden');
        boxes.forEach((box) => {
            box.addEventListener('click',() => {
                if(turn0){
                    box.innerText='0'
                    turn0=false
                }else{
                    box.innerText='X'
                    turn0=true
                };
                box.disabled = true;
                checkWinner();
            });
        });


        resetBtn.addEventListener('click',() => {
            boxes.forEach(box=>{
                box.innerText = "";
                box.disabled = false;
                turn0=true;
                user1Score.innerText = `Player 0: 0`
                user2Score.innerText = `Player X: 0`
            });
        });
    });
});