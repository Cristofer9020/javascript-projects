const celsiusElement = document.getElementById("celsius")
const fahrenheitElement = document.getElementById("fahrenheit")
const kelvinElement = document.getElementById("kelvin")

celsiusElement.addEventListener("input", () => {
    const celsius = parseFloat(celsiusElement.value)

    const fahrenheit = celsius * 9 / 5 + 32
    const kelvin = celsius + 273.15

    fahrenheitElement.value = fahrenheit.toFixed(2)
    kelvinElement.value = kelvin.toFixed(2)
})

fahrenheitElement.addEventListener("input", () => {
    const fahrenheit = parseFloat(fahrenheitElement.value)

    const celsius = (fahrenheit - 32) * 5 / 9
    const kelvin = (fahrenheit - 32) * 5 / 9 + 273.15

    celsiusElement.value = celsius.toFixed(2)
    kelvinElement.value = kelvin.toFixed(2)
})

kelvinElement.addEventListener("input", () => {
    const kelvin = parseFloat(kelvinElement.value)

    const celsius = kelvin - 273.15
    const fahrenheit = (kelvin - 273.15) * 9 / 5 + 32

    celsiusElement.value = celsius.toFixed(2)
    fahrenheitElement.value = fahrenheit.toFixed(2)
})