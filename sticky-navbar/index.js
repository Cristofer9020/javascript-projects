const navbar = document.getElementById("navbar")
const paragraphsContainer = document.querySelector(".paragraphs-container")

window.addEventListener("scroll", () => {
    if (window.scrollY > paragraphsContainer.offsetTop - navbar.offsetHeight - 50) {
        navbar.classList.add("change")
    }
    else {
        navbar.classList.remove("change")
    }
})