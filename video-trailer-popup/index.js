const btnOpenTrailer = document.getElementById("btnOpenTrailer")
const btnCloseTrailer = document.querySelector(".close-icon")
const trailer = document.querySelector(".trailer-container")

btnOpenTrailer.addEventListener("click", (() => {
    trailer.style.display = "flex"
}))

btnCloseTrailer.addEventListener("click", (() => {
    trailer.style.display = "none"
}))