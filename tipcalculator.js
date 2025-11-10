document.addEventListener("DOMContentLoaded",() => {

    const amount = document.getElementById("amount")
    const title = document.getElementById("title")
    const tipPercent = document.getElementById("tip")
    const calculateBtn = document.getElementById("calculate")
    const totalAmount = document.getElementById("total-amt")
    const amt = document.getElementById("amt")
    const container = document.getElementById('cont')
    const mode = document.getElementById("mode")

    mode.addEventListener('click',() => {
        mode.classList.toggle("mode")
        title.classList.toggle("title")
        container.classList.toggle("contaner")
        calculateBtn.classList.toggle("calculate")
        tipPercent.classList.toggle("tip")
        amount.classList.toggle("amount")
        title.classList.toggle("title_d")
        container.classList.toggle("container_d")
        calculateBtn.classList.toggle("calculate_d")
        tipPercent.classList.toggle("tip_d")
        amount.classList.toggle("amount_d")
        mode.classList.toggle("mode_d")
        if(mode.getAttribute("class") === "mode_d"){
            document.body.style.backgroundColor = "#242424"
            document.body.style.animation = "backgrd_animate 1s"
        }else if(mode.getAttribute("class") === "mode"){
            document.body.style.backgroundColor = "#024c61"
            document.body.style.animation = "backgrd_animate2 1s"
        }
    })

    calculateBtn.addEventListener("click",() => {
        const totalAmt = 0.01*parseFloat(amount.value.trim())*parseFloat(tipPercent.value.trim())+parseFloat(amount.value.trim())

        if(amount.value.trim()!="" & tipPercent.value.trim()!=""){
            container.style.height = "500px"
            amt.innerHTML = `${totalAmt.toFixed(2)}`
            totalAmount.classList.remove("hidden")
            amount.value = ""
            tipPercent.value = ""

        }else{
            return;
        }
    })
})