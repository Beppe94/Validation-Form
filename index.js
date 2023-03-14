const form = document.getElementById('form');
const submitBtn = document.getElementById('submit');

function emailValidity() {
    const email = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    
    let valid;
    
    if(email.validity.valueMissing) {
        emailError.textContent = 'Missing field'
        email.style.border = '3px solid red';
        email.style.background = 'pink'
        valid = false;
    } else if(!email.validity.valid){
        emailError.textContent = 'Enter a valid email'
        email.style.border = '3px solid red';
        email.style.background = 'pink'
        valid = false;
    } else if(email.validity.valid) {
        emailError.textContent = 'V'
        email.style.border = '3px solid lime';
        email.style.background = 'lightgreen'
        valid = true;
    }
    
    return valid;
}

function passValidity() {
    const password = document.getElementById('password');
    const confirmPass = document.getElementById('confirm-pass');
    const oneNum = document.getElementById('one-num');
    const upCase = document.getElementById('up-case');
    const minChars = document.getElementById('min-char');
    const noMatch = document.getElementById('no-match');

    let valid;

    if(password.value.match(/[0-9]/)){
        oneNum.textContent = '✓ At least one number';
    } else {
        oneNum.textContent = '𐄂 At least one number';
    }

    if(password.value.match(/[A-Z]/)) {
        upCase.textContent = '✓ At least one upper case';
    } else {
        upCase.textContent = '𐄂 At least one upper case';
    }

    if(password.value.length > 8) {
        minChars.textContent = '✓ Minimum 8 characters';
    } else {
        minChars.textContent = '𐄂 Minimum 8 characters';
    }

    if(confirmPass.value !== password.value) {
        noMatch.textContent = '𐄂 Password doesn\'t match';
        valid = false;
    } else {
        noMatch.textContent = '✓ Password matches';
        valid = true;
    }

    return valid;
}

form.addEventListener('input', () => {
    
    emailValidity();
    passValidity();
})

form.addEventListener('submit', (e) => {
    if(!passValidity() || !emailValidity()) {
        e.preventDefault()
    } else {
        form.submit()
    }
})
