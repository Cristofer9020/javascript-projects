const toggle = document.querySelector(".toggle")
const circle = document.querySelector(".circle")
circle.style.transition = "left .7s ease-in-out"

let storage = localStorage.getItem("darkMode")
storage = storage === "true" ? true : false
darkModeFunction(storage)

let darkMode = storage

toggle.addEventListener("click", () => {
    darkMode = !darkMode
    darkModeFunction(darkMode)
})

function darkModeFunction(boolean) {
    let backgroundColor = boolean ? "#000" : "#fff"
    let toggleColor = boolean ? "#fff" : "#aaa"

    document.body.style.backgroundColor = backgroundColor
    toggle.style.backgroundColor = toggleColor
    circle.style.backgroundColor = backgroundColor

    boolean ? circle.style.left = "3.3rem" : circle.style.left = ".2rem"

    localStorage.setItem("darkMode", boolean.toString())
}