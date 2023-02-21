const startBtn = document.querySelector('.start')
const stopBtn = document.querySelector('.stop')
const pauseBtn = document.querySelector('.pause')
const resetBtn = document.querySelector('.reset')
const historyBtn = document.querySelector('.history')
const stopWatch = document.querySelector('.stopwatch')
const time = document.querySelector('.time')
const timeList = document.querySelector('.time-list')
const infoBtn = document.querySelector('.info')
const modalShadow = document.querySelector('.modal-shadow')
const closeBtn = document.querySelector('.close')

let countTime
let seconds = 0
let minutes = 0

let times = []

const handleStart = () => {
	clearInterval(countTime)
	countTime = setInterval(() => {
		if (seconds < 9) {
			seconds++
			stopWatch.textContent = `${minutes}:0${seconds}`
		} else if (seconds >= 9 && seconds < 59) {
			seconds++
			stopWatch.textContent = `${minutes}:${seconds}`
		} else {
			minutes++
			seconds = 0
			stopWatch.textContent = `${minutes}:00`
		}
	}, 100)
}

const handlePause = () => {
	clearInterval(countTime)
}

const handleStop = () => {
	time.innerHTML = `Ostatni czas: ${stopWatch.textContent}`

	if (stopWatch.textContent !== '0:00') {
		time.style.visibility = 'visible'
		times.push(stopWatch.textContent)
		console.log(times)
	}

	clearStuff()
}

const clearStuff = () => {
	clearInterval(countTime)
	stopWatch.textContent = '0:00'
	timeList.textContent = ''
	seconds = 0
	minutes = 0
}

const resetHandle = () => {
    times = []
	time.style.visibility = 'hidden'
	clearStuff()
}

const showHistory = () => {
    let number = 1
    timeList.textContent = ''

    times.forEach(time => {
        const newTime = document.createElement('li')
        newTime.innerHTML = `Pomiar numer ${number}: <span>${time}</span>`
        
        timeList.append(newTime)
        number++
    })

}

const showInfo = () => {

    if(!(modalShadow.style.display === 'block')) {
        modalShadow.style.display = 'block';
    } else {
        modalShadow.style.display = 'none';
    }

    modalShadow.classList.toggle('modal-animation')
}


closeBtn.addEventListener('click', showInfo)
infoBtn.addEventListener('click', showInfo)
historyBtn.addEventListener('click', showHistory)
resetBtn.addEventListener('click', resetHandle)
stopBtn.addEventListener('click', handleStop)
startBtn.addEventListener('click', handleStart)
pauseBtn.addEventListener('click', handlePause)
window.addEventListener('click', e => e.target === modalShadow ? showInfo() : false)
