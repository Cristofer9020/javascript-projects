const timer = document.getElementById("timer")
const btnStart = document.getElementById("btnStart")
const btnStop = document.getElementById("btnStop")
const btnReset = document.getElementById("btnReset")

let minute = 25, second = 0
let lastMinute, lastSecond, decrease

function formatSecond(second) {
    const zero = 0;
    return second < 10 ? zero + "" + second : second;
}

function updateTime() {
    timer.textContent = `${minute}:${formatSecond(second)}`;
}

btnStart.addEventListener("click", () => {
    clearInterval(decrease)
    decrease = setInterval(() => {
        if (minute == 0 && second == 0) {
            return
        }
        else if (second == 0) {
            minute--
            second = 59
            updateTime()
        }
        else {
            second--
            updateTime()
        }
    },
        1000)
})

btnStop.addEventListener("click", () => {
    clearInterval(decrease)
})

btnReset.addEventListener("click", () => {
    clearInterval(decrease)
    minute = 25, second = 0
    updateTime()
})