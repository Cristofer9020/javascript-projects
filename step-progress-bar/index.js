const step1Icon = document.getElementById("step1Icon")
const step2Icon = document.getElementById("step2Icon")
const step3Icon = document.getElementById("step3Icon")
const finalStepIcon = document.getElementById("finalStepIcon")

const step1Text = document.getElementById("step1Text")
const step2Text = document.getElementById("step2Text")
const step3Text = document.getElementById("step3Text")
const finalStepText = document.getElementById("finalStepText")

const prevBtn = document.getElementById("prevBtn")
const nextBtn = document.getElementById("nextBtn")

let counter = 0

function changeToCompleted(icon, text, step) {
    icon.classList.remove("fa-times", "i-not-checked")
    icon.classList.add("fa-check", "i-checked")

    text.classList.remove("span-not-checked")
    text.classList.add("span-checked")
    text.textContent = step
}

function changeToNotCompleted(icon, text) {
    icon.classList.remove("fa-check", "i-checked")
    icon.classList.add("fa-times", "i-not-checked")

    text.classList.remove("span-checked")
    text.classList.add("span-not-checked")
    text.textContent = ""
}

function changeButtonClasses() {
    if (counter == 0) {
        prevBtn.disabled = true

        prevBtn.classList.remove("activeBtn")
        prevBtn.classList.add("inactiveBtn")
    }
    else if (counter > 0 && counter < 4) {
        prevBtn.disabled = false
        nextBtn.disabled = false

        prevBtn.classList.remove("inactiveBtn")
        prevBtn.classList.add("activeBtn")

        nextBtn.classList.remove("inactiveBtn")
        nextBtn.classList.add("activeBtn")
    }
    else if (counter == 4) {
        nextBtn.disabled = true

        nextBtn.classList.remove("activeBtn")
        nextBtn.classList.add("inactiveBtn")
    }
}

changeButtonClasses()

prevBtn.addEventListener("click", () => {
    changeButtonClasses()
    switch (counter) {
        case 0:
            changeButtonClasses()
            return
        case 1:
            changeToNotCompleted(step1Icon, step1Text)
            break
        case 2:
            changeToNotCompleted(step2Icon, step2Text)
            break
        case 3:
            changeToNotCompleted(step3Icon, step3Text)
            break
        case 4:
            changeToNotCompleted(finalStepIcon, finalStepText)
            break
    }
    counter--
    changeButtonClasses()
})

nextBtn.addEventListener("click", () => {
    counter++
    changeButtonClasses()

    switch (counter) {
        case 1:
            changeToCompleted(step1Icon, step1Text, "Step 1")
            break
        case 2:
            changeToCompleted(step2Icon, step2Text, "Step 2")
            break
        case 3:
            changeToCompleted(step3Icon, step3Text, "Step 3")
            break
        case 4:
            changeToCompleted(finalStepIcon, finalStepText, "Final Step")
            break
    }
    changeButtonClasses()
})