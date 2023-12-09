import data from "./data.js"
const emoji = document.querySelector(".emoji")
const stars = document.querySelectorAll(".fas")

stars.forEach(star => {
    star.addEventListener("click", () => {
        select(star)
    })
})

let currentPunctuation

function select(star) {
    clean()
    currentPunctuation = parseFloat(star.getAttribute("index"))
    let i = 1
    stars.forEach(star => {
        if (i <= currentPunctuation) {
            i++
            star.classList.add("active")
            selectEmoji()
        }
        else {
            return
        }
    })
}

function clean() {
    stars.forEach(star => {
        star.classList.remove("active")
    })
}

function selectEmoji() {
    const newEmoji = data[currentPunctuation - 1]
    const lastClassIndex = emoji.classList.length - 1
    const lastClass = emoji.classList[lastClassIndex]

    emoji.classList.remove(lastClass)
    emoji.classList.add(`fa-${newEmoji.class}`)
    emoji.style.color = `#${newEmoji.color}`
}