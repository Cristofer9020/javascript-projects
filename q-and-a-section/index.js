const buttons = document.querySelectorAll(".btnDisplay")
const answers = document.querySelectorAll(".answer")
const questionTop = document.querySelectorAll(".question-top")

buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        if (answers[index].style.display === "block") {
            answers[index].style.display = "none"
            button.querySelector("i").classList.remove("fas", "fa-minus-square")
            button.querySelector("i").classList.add("far", "fa-plus-square")
            questionTop[index].classList.remove("border-bottom")
        }
        else {
            answers[index].style.display = "block"
            button.querySelector("i").classList.remove("far", "fa-plus-square")
            button.querySelector("i").classList.add("fas", "fa-minus-square")
            console.log(questionTop[index])
            questionTop[index].classList.add("border-bottom")
        }
    })
})