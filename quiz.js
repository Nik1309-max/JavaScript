document.addEventListener("DOMContentLoaded",() => {
    const quiz_questions = [
        {
            question:"What is the capital of India?",
            options:["Rome","Paris","Delhi","Dhaka"],
            correct:"Delhi"
        },
        {
            question:"What is the color of Sky?",
            options:["Blue","Red","Yellow","White"],
            correct:"Red"
        },
        {
            question:"What is the color of water?",
            options:["White","Colourless","Black","Red"],
            correct:"Colourless"
        },
        {
            question:"What is the odd one out?",
            options:["Keyboard","Mouse","Scanner","Speaker"],
            correct:"Speaker"
        }
    ];


    const startBtn = document.getElementById("start_btn");
    const container = document.getElementById("container");
    const questionContainer = document.getElementById("question-container");
    const optionsContainer = document.getElementById("options");


    startBtn.addEventListener('click',() => {
        startBtn.classList.add("hidden");
        const questionList = []
        while(questionList.length<3){
            const randomIndex = Math.floor(Math.random() * quiz_questions.length)
            const randomQuestion = quiz_questions[randomIndex]
            if(!questionList.some(q => q.question === randomQuestion.question)){
                questionList.push(randomQuestion)
            }
        }
        question(questionList)
    });
    
    function question(questionList){
    
        for(let i=0;i<questionList.length;i++){
            questionContainer.textContent = questionList[i].question
            questionContainer.classList.remove("hidden")
            for(let j=0;j<questionList[i].options.length;j++){
                const li = document.createElement("li")
                li.classList.add("options")
                li.setAttribute("id",`${j+1}`)
                li.textContent = questionList[i].options[j]
                optionsContainer.appendChild(li)
                console.log(li)
            }
            optionsContainer.classList.remove("hidden")
            const option1 = document.getElementById("1")
            const option2 = document.getElementById("2")
            const option3 = document.getElementById("3")
            const option4 = document.getElementById("4")
            const optionsList = [option1,option2,option3,option4]
            optionsList.addEventListener('click',() =>{
                option1.classList.remove("options")
                option1.classList.add("selected")
                const nextBtn = document.createElement("button")
                nextBtn.classList.add("next-btn")
                nextBtn.textContent = "Next"
                container.appendChild(nextBtn)
                nextBtn.addEventListener("click",()=>{
                    question()
                })
            })
            }
    }
});

