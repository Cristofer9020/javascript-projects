const btnCalculate = document.getElementById("btnCalculate")
const ageElement = document.getElementById("ageElement")

btnCalculate.addEventListener("click", () => {
    let currentDate = new Date()

    let currentDateArray =[currentDate.getFullYear(), currentDate.getMonth() + 1, currentDate.getDate()]
    let [currentYear, currentMonth, currentDay] = currentDateArray

    let birthdateElement = document.getElementById("birthday").value
    let birthdateArray = birthdateElement.split("-")
    let birthdate = birthdateArray.map(number => {
        return parseFloat(number)
    })
    let [birthYear, birthMonth, birthDay] = birthdate

    
    if (birthYear > currentYear || birthYear < currentYear - 130) {
        alert(`Invalid year.`)
    }
    else {
        let age
        if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
            age = currentYear - birthYear - 1
        }
        else {
            age = currentYear - birthYear
        }

        ageElement.textContent = `Your age is ${age} years old`
    }
})