const priceInput = document.querySelector('#price')
const membersInput = document.querySelector('#members')
const tipSelect = document.querySelector('#tip')
const countButton = document.querySelector('.count')
const priceInfo = document.querySelector('.cost-info')
const error = document.querySelector('.error')


const checkInputs = () => {
    if (priceInput.value == '' || membersInput.value == '' || tipSelect.value == 0) {
        error.style.display = 'block'
        priceInfo.textContent = ''
    } else {
       countBill()
    }
}

const countBill = () => {
    const price = parseInt (priceInput.value)
    const tip = parseInt (tipSelect.value)
    const members = parseInt (membersInput.value)

    const sum = (price + (price * tip)) / members
    sum.toFixed(2)
    priceInfo.textContent = `Złóżcie się po ${sum.toFixed(2)} zł 😊`

    error.style.display = "none"

    
    
}

countButton.addEventListener('click', checkInputs)

