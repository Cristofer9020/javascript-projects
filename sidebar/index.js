const btnOpen = document.getElementById("btnOpen")
const btnClose = document.getElementById("btnClose")
const sidebar = document.querySelector(".sidebar")
let visible = false

btnOpen.addEventListener("click", () => {
    visible = !visible
    let displayProp = visible ? "flex" : "none"
    sidebar.style.display = displayProp
})

btnClose.addEventListener("click", () => {
    sidebar.style.display = "none"
    visible = false
})