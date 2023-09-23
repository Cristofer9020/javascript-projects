const weightInput = document.getElementById("weightInput")
const resultElement = document.getElementById("result")
let timer

weightInput.addEventListener("input", () => {
    const pounds = parseFloat(weightInput.value)

    if (isNaN(pounds) || pounds <= 0) {
        weightInput.value = ""
        resultElement.textContent = ""
        alert("Please enter a valid number.")
    }
    else {
        const kilograms = pounds / 2.2
        resultElement.textContent = kilograms.toFixed(2)

        clearTimeout(timer)
        timer = setTimeout(() => {
            weightInput.value = ""
            resultElement.textContent = ""
        }, 10000)
    }
})