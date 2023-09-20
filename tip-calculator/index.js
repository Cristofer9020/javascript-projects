let btnCalculate = document.getElementById("btnCalculate")
let billElement = document.getElementById("bill")
let percentageElement = document.getElementById("percentage")
let totalElement = document.getElementById("total")

btnCalculate.addEventListener("click", () => {    
    bill = parseFloat(billElement.value)
    percentage = parseFloat(percentageElement.value)

    if (!isNaN(bill) && !isNaN(percentage) && percentage >= 0 && percentage <= 100) {
        let tip = (bill / 100) * percentage
        let total = bill + tip
        totalElement.textContent = `${total.toFixed(2)} $`
    }
    else {
        alert("The percentage must be greater than or equal to zero and less than or equal to 100.")
    }
})