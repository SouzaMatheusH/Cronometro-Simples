const timerHr  = document.querySelector('#timer-hr')
const timerMin = document.querySelector('#timer-min')
const timerSec = document.querySelector('#timer-sec')
const startBtn = document.querySelector('#start-btn')
const pauseBtn = document.querySelector('#pause-btn')
const resetBtn = document.querySelector('#reset-btn')

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId
let hr = 0;
let min = 0;
let sec = 0;


startBtn.addEventListener("click", () => {
    if (paused) {
        paused = false
        startTime = Date.now() - elapsedTime  // Date.now() puxa a informação de tempo atual em ms
        intervalId = setInterval(updateTime, 100)
    }
})
pauseBtn.addEventListener("click", () => {
    if (!paused) {
        paused = true
        elapsedTime = Date.now() - startTime
        clearInterval(intervalId)
    }
})
resetBtn.addEventListener("click", () => {
        pause = true
        startTime = 0;
        elapsedTime = 0;
        currentTime = 0;
        paused = true;
        hr = 0;
        min = 0;
        sec = 0;
        timerHr.textContent = "00"
        timerMin.textContent = "00"
        timerSec.textContent = "00"
})

function updateTime() {
    elapsedTime = Date.now() - startTime

    sec = Math.floor((elapsedTime / 1000) % 60)  // Math.floor para arredondar, tempo decorrido/1000 transforma ms em s e o resto divide por 60 para voltar a ser ms
    min = Math.floor((elapsedTime / (1000 * 60)) % 60)
    hr = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60)

    sec = pad(sec)
    min = pad(min)
    hr = pad(hr)

    timerHr.textContent = `${hr}`
    timerMin.textContent = `${min}`
    timerSec.textContent = `${sec}`

    function pad(unit) {
        return (("0") + unit).length > 2 ? unit : "0" + unit
    }
}