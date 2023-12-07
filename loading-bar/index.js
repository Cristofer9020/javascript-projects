const loading = document.getElementById("loading")
const percentage = document.getElementById("percentage")
const progressBar = document.querySelector(".front")

let progress = 0

setInterval(() => {
    if (progress < 100) {
        progress++
        percentage.textContent = `${progress}%`
        progressBar.style.width = `${progress}%`
    }
    else {
        loading.textContent = "Done!"
        loading.style.color = "#0f0"
        percentage.style.color = "#0f0"
        return
    }
    
}, 20)