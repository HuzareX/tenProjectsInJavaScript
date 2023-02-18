const userInput = document.querySelector('#username')
const passInput = document.querySelector('#password')
const pass2Input = document.querySelector('#password2')
const emailInput = document.querySelector('#e-mail')
const clearBtn = document.querySelector('.clear')
const sendBtn = document.querySelector('.send')
const closeBtn = document.querySelector('.close')
const popup = document.querySelector('.popup')


const showError = (input, msg) => {

    const formBox = input.parentElement;
    const errorMsg = formBox.querySelector('.error-text');

    formBox.classList.add('error');
    errorMsg.style.visibility = 'visible'
    errorMsg.textContent = msg;
}

const clearError = input => {
    const formBox = input.parentElement
    const errorMsg = formBox.querySelector('.error-text');
    formBox.classList.remove('error')
    errorMsg.style.visibility = 'hidden'
}


const checkForm = input => {
    input.forEach(el => {
        if(el.value === '') {
            showError(el, el.placeholder)
        } else {
            clearError(el)
        }
    })
}

const checkLength = (input, min) => {
    if(input.value.length < min) {
        showError(input, `${input.previousElementSibling.innerText.slice(0, -1)} musi się składać z conajmniej ${min} znaków.`)
    }
}

const checkPass = (input, input2) => {
    if (input.value !== input2.value) {
        showError(input2, 'Hasła nie są takie same.')
    }
}

const checkMail = email => {
    const regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;

    if (regExp.test(email.value)) {
        clearError(email)
    } else {
        showError(email, 'E-mail jest nie poprawny.')
    }
}

const checkErrors = () => {

    const allInputs = document.querySelectorAll('.form-box')
    let errorCount = 0;

    allInputs.forEach(el => {
        if (el.classList.contains('error')) {
            errorCount ++;
        }
    })

    console.log(errorCount);
    if (errorCount === 0) {
        popup.classList.add ('show-popup')
    }
}

const closePopup = () => {
    popup.classList.add ('hide-popup')
}

closeBtn.addEventListener('click', e => {
    e.preventDefault();

    closePopup()
})


sendBtn.addEventListener('click', e => {
    e.preventDefault();
    
    checkForm([userInput, pass2Input, passInput, emailInput]);
    checkLength(userInput, 3);
    checkLength(passInput, 8);
    checkPass(passInput, pass2Input);
    checkMail(emailInput);
    checkErrors();
})



clearBtn.addEventListener('click', e => {
    e.preventDefault();

    [userInput, pass2Input, passInput, emailInput].forEach(el => {
        el.value = '';
        clearError(el)
    })
})