const btnRegenerate = document.getElementById("btnRegenerate")
const boxesContainer = document.querySelector(".boxes-container")
const inputElement = document.getElementById("input")
const alertElement = document.getElementById("alert-box")
const colorElement = document.getElementById("hex-color")

const hexDigits = "0123456789abcdef"
let hideBox

btnRegenerate.addEventListener("click", () => {
    boxesContainer.innerHTML = ""
    createBoxElement()
})

function createBoxElement() {
    for (let i = 0; i < 30; i++) {
        const hexColor = createHexValue()
        const boxElement = document.createElement("div")

        boxElement.classList.add("box-color")
        boxElement.style.backgroundColor = hexColor
        boxElement.textContent = hexColor
        boxElement.addEventListener("click", () => {
            copyHexValue(boxElement)
            displayColorCopied(boxElement)
        })

        boxesContainer.appendChild(boxElement)
        hexValue = "#"
    }
}

function createHexValue() {
    let hexValue = "#"

    for (let i = 0; i < 6; i++) {
        const randNumber = Math.floor(Math.random() * hexDigits.length)
        const hexNumber = hexDigits[randNumber]
        hexValue += hexNumber
    }

    return hexValue
}

function copyHexValue(element) {
    inputElement.value = element.textContent
    input.select()
    input.setSelectionRange(0, 9999)
    navigator.clipboard.writeText(input.value)
}

function displayColorCopied(element) {
    alertElement.style.display = "block"
    alertElement.style.backgroundColor = element.textContent
    colorElement.textContent = element.textContent
    clearTimeout(hideBox)
    hideBox = setTimeout(() => {
        alertElement.style.display = "none"
    }, 4000)
}

createBoxElement()