const container = document.querySelector(".container")
const options = document.querySelectorAll(".option")
const sendBtn = document.getElementById("sendBtn")
const response = document.querySelector(".response")
const reviewEle = document.getElementById("review")

let executed = false
let review = ""

options.forEach(option => {
    option.addEventListener("click", select)
})

function select() {
    options.forEach(option => {
        option.classList.remove("active")
    })
    this.classList.add("active")

    review = this.textContent.trim()
    executed = true
    return
}

sendBtn.addEventListener("click", () => {
    if (executed) {
        container.style.display = "none"
        response.style.display = "block"
        reviewEle.textContent = review
    }
    else {
        alert("You didn't choose any option!")
    }
})