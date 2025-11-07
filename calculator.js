document.addEventListener("DOMContentLoaded",() =>{
    const display = document.getElementById("display")
    
    const one = document.getElementById('one')
    const two = document.getElementById('two')
    const three = document.getElementById('three')
    const four = document.getElementById('four')
    const five = document.getElementById('five')
    const six = document.getElementById('six')
    const seven = document.getElementById('seven')
    const eight = document.getElementById('eight')
    const nine = document.getElementById('nine')
    const zero = document.getElementById('zero')
    const decimal = document.getElementById('decimal')
    const add = document.getElementById('add')
    const multiply = document.getElementById('mul')
    const openBracket = document.getElementById('openBracket')
    const closeBracket = document.getElementById('closeBracket')
    const divide = document.getElementById('divide')
    const subtract = document.getElementById('subtract')
    const equal = document.getElementById('equal')
    const del = document.getElementById('delete')
    const remove = document.getElementById('empty_display')

    display.value = ""

    one.addEventListener('click',() => {
        display.value+= "1"
    })
    two.addEventListener('click',() => {
        display.value+= "2"
    })
    three.addEventListener('click',() => {
        display.value+= "3"
    })
    four.addEventListener('click',() => {
        display.value+= "4"
    })
    five.addEventListener('click',() => {
        display.value+= "5"
    })
    six.addEventListener('click',() => {
        display.value+= "6"
    })
    seven.addEventListener('click',() => {
        display.value+= "7"
    })
    eight.addEventListener('click',() => {
        display.value+= "8"
    })
    nine.addEventListener('click',() => {
        display.value+= "9"
    })
    zero.addEventListener('click',() => {
        display.value+= "0"
    })
    
    remove.addEventListener('click',() => {
        display.value = ""
    })
    "".trim
    add.addEventListener('click',() => {
        console.log(typeof display.value)
    })
    subtract.addEventListener('click',() => {
        display.value += "-"
    })
    decimal.addEventListener('click',() => {
        display.value += "."
    })
    divide.addEventListener('click',() => {
        display.value += "/"
    })
    multiply.addEventListener('click',() => {
        display.value += "*"
    }) 
    openBracket.addEventListener('click',() => {
        display.value += "("
    })
    closeBracket.addEventListener('click',() => {
        display.value +=")"
    })
})