let btn = document.getElementById("changeTextButton").addEventListener("click",function(){
    let para = document.getElementById("para")
    para.textContent = "the para is changed"
})

let btn2 = document.getElementById("highlightFirstCity").addEventListener("click",function(){
    let citiesList = document.getElementById("citiesList");
    citiesList.firstElementChild.classList.add("highlight");
})

let btn3 = document.getElementById("changeOrder").addEventListener("click",function(){
    let coffeetype = document.getElementById("coffeeType")
    coffeetype.textContent = "Espresso"
    coffeetype.style.backgroundColor = "brown"
    coffeetype.style.padding = "5px"
})

let btn4 = document.getElementById("addNewItem").addEventListener("click",function(){
    let newItem = document.createElement("li")
    newItem.textContent = "Eggs"
    document.getElementById("shoppingList").appendChild(newItem)
})

let btn5 = document.getElementById("removeLastTask").addEventListener("click",function(){
    let taskList = document.getElementById("taskList")
    taskList.lastElementChild.remove()
})

document.getElementById("teaList").addEventListener("click",function(event){
    if(event.target && event.target.matches(".teaItem")){
        alert("You selected: "+ event.target.textContent)
    }
})

// document.getElementById("feedback_btn").addEventListener("click",function(){
//     let txt = document.getElementById("feedbackInput").textContent
//     document.getElementById("feedbackDisplay").textContent = txt
// })

document.getElementById("feedbackForm").addEventListener("submit",function(event){
    event.preventDefault()
    let feedback =document.getElementById("feedbackInput").value
    console.log(feedback)
    document.getElementById("feedbackDisplay").textContent = feedback

})

document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("domStatus").textContent = "DOM fully Loaded..."
})

document.getElementById("toggleHighlight").addEventListener("click",function(){
    document.getElementById("descriptionText").classList.toggle("highlight")
})