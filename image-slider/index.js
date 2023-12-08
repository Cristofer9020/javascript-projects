import data from "./data.js"
const img = document.getElementById("img")
const prevBtn = document.querySelector(".prev")
const nextBtn = document.querySelector(".next")

let counter = 1

function updateImg() {
    img.src = `./img/img${counter}.jpg`
}

prevBtn.addEventListener("click", () => {
    if (counter == 1) {
        counter = data.length
        updateImg()
    }
    else {
        counter--
        updateImg()
    }
})

nextBtn.addEventListener("click", () => {
    if (counter < data.length) {
        counter++
        updateImg()
    }
    else {
        counter = 1
        updateImg()
    }
})