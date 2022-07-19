const startBtn = document.getElementById('startBtn')

const screens = document.querySelectorAll('.screen')
const timeBtnList = document.getElementById('timeBtnList')
const board = document.getElementById('board')
const timer = document.getElementById('time')

startBtn.addEventListener('click', (event) => {
    event.preventDefault()
    screens[0].classList.add('up')
})
let time = 0

timeBtnList.addEventListener('click', (event) => {
    if (event.target.classList.contains('time-btn')) {
        time = +event.target.getAttribute('data-time')
        // console.log(event.target.dataset.time)
        screens[1].classList.add('up')
        startGame()
    }
})

let score = 0
board.addEventListener('click', (event) => {
    if (event.target.classList.contains('circle')) {
        score++
        event.target.remove()
        createRandomCircle()
    }
})

function drawCorrectTime() {
    return time >= 10 ? `00:${time--}` : `00:0${time--}`;
}

function startGame() {
    timer.innerHTML = drawCorrectTime()
    createRandomCircle()
    const timerInterval = setInterval(() => {
        if (time === 0) {
            finishGame()
            clearInterval(timerInterval)
        } else {
            timer.innerHTML = drawCorrectTime()
        }
    }, 1000)
}

function finishGame() {
    timer.parentNode.remove()
    board.innerHTML = `<h1>Score: ${score}</h1>`
}

function createRandomCircle() {
    const circle = document.createElement('div')
    circle.classList.add('circle')
    const {width: boardWidth, height: boardHeight} = board.getBoundingClientRect()
    const size = getRandomSize(10, 60)
    const x = getRandomSize(0, boardWidth - size)
    const y = getRandomSize(0, boardHeight - size)
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    board.appendChild(circle)
}

function getRandomSize(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}