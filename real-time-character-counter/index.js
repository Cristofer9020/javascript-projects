const textarea = document.getElementById("textarea")
const total = document.getElementById("total-span")
const remaining = document.getElementById("remaining-span")

textarea.addEventListener("input", event => {
    total.textContent = event.target.value.length
    remaining.textContent = textarea.maxLength - event.target.value.length
})