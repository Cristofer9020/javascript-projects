const container = document.querySelector(".container")
const kits = ["crash", "kick", "snare", "tom"]

kits.forEach(kit => {
    const button = document.createElement("button")
    button.textContent = kit
    button.style.backgroundImage = `url(./img/${kit}.png)`
    button.classList.add("button")
    container.appendChild(button)

    const audio = document.createElement("audio")
    audio.src = `./media/${kit}.mp3`
    container.appendChild(audio)

    button.addEventListener("click", () => {
        audio.play()
    })
})