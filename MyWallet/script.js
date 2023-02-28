const incomeArea = document.querySelector('.income-area')
const expensesArea = document.querySelector('.expenses-area')
const availableMoney = document.querySelector('.available-money')
const addTransactionBtn = document.querySelector('.add-transaction')
const transactionPanel = document.querySelector('.add-transaction-panel')
const deleteBtn = document.querySelector('.delete')
const deleteAllBtn = document.querySelector('.delete-all')
const lightBtn = document.querySelector('.light')
const darkBtn = document.querySelector('.dark')
const transactionName = document.querySelector('#name')
const transactionAmount = document.querySelector('#amount')
const transactionCategory = document.querySelector('#category')
const saveBtn = document.querySelector('.save')
const cancelBtn = document.querySelector('.cancel')

let root = document.documentElement
let ID = 0
let categoryIcon
let selectedCategory
let moneyArr = [0]

const showPanel = () => {
	transactionPanel.style.display = 'flex'
}

const closePanel = () => {
	transactionPanel.style.display = 'none'
	clearInputs()
}

const checkForm = () => {
	if (transactionName.value !== '' && transactionAmount.value !== '' && transactionCategory.value !== 'none') {
        createNewTransaction()
	} else {
		alert('Uzupełnij wszystkie pola')
	}
}

const clearInputs = () => {
	transactionAmount.value = ''
	transactionName.value = ''
	transactionCategory.selectedIndex = 0
}

const selectCategory = () => {
    selectedCategory = transactionCategory.options[transactionCategory.selectedIndex].text
}

const createNewTransaction = () => {
	const newTransaction = document.createElement('div')
	newTransaction.classList.add('transaction')
	newTransaction.setAttribute('id', ID)

    checkCategory(selectedCategory)

	newTransaction.innerHTML = `
    <p class="transaction-name">${categoryIcon} ${transactionName.value}</p>
    <p class="transaction-amount">${transactionAmount.value}zł<button class="delete" onclick="deleteTransaction(${ID})">
    <i class="fas fa-times"></i></button>
    </p>

    `

	transactionAmount.value > 0
		? incomeArea.append(newTransaction) && newTransaction.classList.add('income')
		: expensesArea.append(newTransaction) && newTransaction.classList.add('expense')

	moneyArr.push(parseFloat(transactionAmount.value))
	countMoney(moneyArr)
	closePanel()
	ID++
	clearInputs()

}

const checkCategory = transaction => {
	switch (transaction) {
		case `[ + ] Przychód`:
			categoryIcon = `<i class="fas fa-money-bill-wave"></i>`
			break
		case `[ - ] Zakupy`:
			categoryIcon = `<i class="fas fa-cart-arrow-down"></i>`
			break
		case `[ - ] Jedzenie`:
			categoryIcon = `<i class="fas fa-hamburger"></i>`
			break
		case `[ - ] Kino`:
			categoryIcon = `<i class="fas fa-film"></i`
			break
	}

}


const countMoney = money => {
	const newMoney = money.reduce((a, b) => a + b)
	availableMoney.textContent = `${newMoney} zł`
	console.log(newMoney);
}

saveBtn.addEventListener('click', checkForm)
cancelBtn.addEventListener('click', closePanel)
addTransactionBtn.addEventListener('click', showPanel)
