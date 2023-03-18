const form = document.getElementById('form');
const submitBtn = document.getElementById('submit-btn');
const passEvent = document.getElementById('pass-event');


function emailValidity() {
    const email = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    
    let valid;
    
    if(email.validity.valueMissing) {
        emailError.textContent = '𐄂 Missing field';
        emailError.style.color = 'salmon'
        email.classList.remove('valid');
        email.classList.add('invalid');
        valid = false;
    } else if(!email.validity.valid){
        emailError.textContent = '𐄂 Enter a valid email';
        emailError.style.color = 'salmon'
        email.classList.remove('valid');
        email.classList.add('invalid');
        valid = false;
    } else if(email.validity.valid) {
        emailError.textContent = '✓';
        emailError.style.color = 'lime'
        email.classList.remove('invalid');
        email.classList.add('valid');
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
        oneNum.style.color = 'lime';
    } else {
        oneNum.textContent = '𐄂 At least one number';
        oneNum.style.color = 'salmon';
    }

    if(password.value.match(/[A-Z]/)) {
        upCase.textContent = '✓ At least one upper case';
        upCase.style.color = 'lime';
    } else {
        upCase.textContent = '𐄂 At least one upper case';
        upCase.style.color = 'salmon';
    }

    if(password.value.length > 8) {
        minChars.textContent = '✓ Minimum 8 characters';
        minChars.style.color = 'lime';
    } else {
        minChars.textContent = '𐄂 Minimum 8 characters';
        minChars.style.color = 'salmon';
    }

    if(confirmPass.value !== password.value || password.value == '' || confirmPass.value == '') {
        noMatch.textContent = '𐄂 Password doesn\'t match';
        noMatch.style.color = 'salmon';
        valid = false;
    } else {
        noMatch.textContent = '✓ Password matches';
        noMatch.style.color = 'lime';
        valid = true;
    }

    return valid;
}

form.addEventListener('input' , () => {

    emailValidity();
    passValidity();
})

form.addEventListener('submit', (e) => {
    
    if(passValidity() && emailValidity()) {
        form.submit();
    } else {
        e.preventDefault()
    }
})
