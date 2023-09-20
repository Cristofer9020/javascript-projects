const container = document.getElementById("container")
const history = document.getElementById("history")
const btnDice = document.getElementById("btnDice")

const diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"]
let numerator = 1

btnDice.addEventListener("click", () => {
    let randNumber = Math.ceil(Math.random() * diceFaces.length)
    let result = ""

    for (let i = 1; i <= diceFaces.length; i++) {
        if (randNumber === i) {
            result = diceFaces[i - 1]
            break
        }
    }

    let element = document.createElement("div")
    element.className = "roll-history-element"

    let numeratorElement = document.createElement("span")
    numeratorElement.id = "numerator"
    numeratorElement.textContent = `Roll ${numerator++}:`

    let diceElement = document.createElement("span")
    diceElement.id = "dice"
    diceElement.textContent = result

    element.appendChild(numeratorElement)
    element.appendChild(diceElement)

    container.textContent = result
    history.appendChild(element)
})