const timer = document.getElementById("timer")
const start = document.getElementById("start")
const stop = document.getElementById("stop")
const reset = document.getElementById("reset")

let centisecond = 0, second = 0, minute = 0, hour = 0, startTimer

function formatTime(unit) {
    const zero = 0
    return unit < 10 ? `${zero}${unit}` : unit
}

function updateTime() {
    timer.textContent = `${formatTime(hour)}:${formatTime(minute)}:${formatTime(second)}:${formatTime(centisecond)}`
}

start.addEventListener("click", (() => {
    start.disabled = true
    stop.disabled = false

    startTimer = setInterval(() => {
        centisecond++

        if (centisecond === 100) {
            centisecond = 0
            second++

            if (second === 60) {
                second = 0
                minute++

                if (minute === 60) {
                    minute = 0
                    hour++
                }
            }
        }

        updateTime()
    }, 10)
}))

stop.addEventListener("click", (() => {
    start.disabled = false
    stop.disabled = true
    clearInterval(startTimer)
}))

reset.addEventListener("click", (() => {
    start.disabled = false
    stop.disabled = true
    clearInterval(startTimer)
    centisecond = 0, second = 0, minute = 0, hour = 0
    updateTime()
}))