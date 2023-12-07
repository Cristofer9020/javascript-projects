const loanIpt = document.getElementById("loan")
const interestIpt = document.getElementById("interest")
const monthsIpt = document.getElementById("months")

const monthlyPayment = document.getElementById("monthlyPayment")

const inputs = [loanIpt, interestIpt, monthsIpt]

inputs.forEach(input => {
    input.addEventListener("input", () => {
        let loan = parseFloat(loanIpt.value)
        let interest = parseFloat(interestIpt.value)
        let months = parseFloat(monthsIpt.value)

        let result = (loan + ((loan / 100) * interest)) / months
        monthlyPayment.textContent = `${result.toFixed(2)}$`
    })
})