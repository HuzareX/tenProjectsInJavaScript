const ballImg = document.querySelector('img')
const questionInput = document.querySelector('input')
const answer = document.querySelector('.answer')
const error = document.querySelector('.error')
const questions = [
	'Tak.',
	'Nie.',
	'Zdecydowanie tak.',
	'Zdecydowanie nie.',
	'Nie chcesz znać odpowiedzi na to pytanie. 😬',
	'No stary domyśl się! 😤',
	'Może. 😏',
]
const errors = ['Musisz zadać jakies pytanie.', 'Pytanie musi zostać zakończone pytajnikiem (?)']

const shake = () => {
	ballImg.classList.add('shake-animation')
}

const shakeRemove = () => {
	ballImg.classList.remove('shake-animation')
}

const eightBall = () => {
	shake()
	setTimeout(shakeRemove, 1000)
    if (questionInput.value === '') {
        error.textContent = errors[0]
        answer.textContent = ''
	} else if (questionInput.value.slice(-1) !== '?') {
        error.textContent = errors[1]
        answer.textContent = ''
	} else {
        const number = Math.floor(Math.random() * questions.length)
		answer.textContent = questions[number]
        error.textContent = ''
	}
}

ballImg.addEventListener('click', eightBall)
