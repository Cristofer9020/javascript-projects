const navbarBtn = document.getElementById("icon")
const navbarMenu = document.querySelector(".navbar-menu")

let boolean = false

navbarBtn.addEventListener("click", () => {
    boolean = !boolean
    let displayProp = boolean ? "block" : "none"
    navbarMenu.style.display = displayProp
})