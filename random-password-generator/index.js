const input = document.getElementById("input")
const generateBtn = document.getElementById("generateBtn")
const copyBtn = document.querySelector(".fa-copy")
const alertBox = document.querySelector(".alert-box")
const passwordElement = document.getElementById("password")

generateBtn.addEventListener("click", () => {
    const chars = "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let length = 20
    let password = ""

    for (let i = 0; i < length; i++) {
        const randNum = Math.floor(Math.random() * chars.length)
        password += chars.substring(randNum, randNum + 1)
    }

    input.value = password
    passwordElement.textContent = password
})

copyBtn.addEventListener("click", () => {
    input.select()
    input.setSelectionRange(0, 9999)
    navigator.clipboard.writeText(input.value)

    displayAlertBox()
})

function displayAlertBox() {
    if (input.value) {
        alertBox.style.display = "block"
        setTimeout(() => {
            alertBox.style.display = "none"
        }, 2000);
    }
}