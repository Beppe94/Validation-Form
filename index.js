const email = document.getElementById('email');
const error = document.getElementById('error')

email.addEventListener('input', (e) => {

    if(email.validity.valid) {
        error.textContent = ''
    } else {
        error.textContent = 'Enter a valid email'
    }
})