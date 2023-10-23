const positionXElement = document.getElementById("positionX")
const positionYElement = document.getElementById("positionY")

document.addEventListener("mousemove", event => {
    positionXElement.textContent = event.clientX
    positionYElement.textContent = event.clientY
})