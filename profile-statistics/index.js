const numbers = document.querySelectorAll(".number")

numbers.forEach(number => {
    number.textContent = "0"
    incrementNumber()

    function incrementNumber() {
        let currentNumber = +number.textContent
        const data = number.getAttribute("data")
        const increment = data / 15
        currentNumber = Math.ceil(currentNumber + increment)

        if (currentNumber < data) {
            number.textContent = currentNumber
            setTimeout(incrementNumber, 50)
        }
        else {
            number.textContent = data
        }
    }
})