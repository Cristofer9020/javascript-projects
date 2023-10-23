const scoreCounter = document.getElementById("scoreCounter")
const num1Element = document.getElementById("firstNum")
const num2Element = document.getElementById("secondNum")
const input = document.getElementById("input")
const btnSubmit = document.getElementById("btnSubmit")

let counter = 0
generateQuestion()
input.focus()

input.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        event.preventDefault()
        verify(num1Element, num2Element)
        chooseScoreColor()
        generateQuestion()
    }
})

btnSubmit.addEventListener("click", () => {
    verify(num1Element, num2Element)
    chooseScoreColor()
    generateQuestion()
})

function verify(num1, num2) {
    if (num1.textContent * num2.textContent == input.value) {
        counter++
    }
    else {
        counter--
    }

    scoreCounter.textContent = counter
    input.value = ""
    input.focus()
}

function chooseScoreColor() {
    let color = counter > 0 ? "#0f0" : counter < 0 ? "#f00" : "#fff"
    scoreCounter.style.color = color
}

function generateQuestion() {
    num1Element.textContent = generateNum()
    num2Element.textContent = generateNum()
}

function generateNum() {
    return Math.floor(Math.random() * 10)
}