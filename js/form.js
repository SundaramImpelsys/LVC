function validateForm(form, nameField, passwordField, emailField) {
    return validateName(nameField) && validateEmail(emailField) && validatePassword(passwordField);
}

function validateName(nameField) {
    let isValid = true;
    if (nameField) {
        const nameLen = nameField.value.trim();
        const namePattern = /^[a-zA-Z._ ]*$/;
        if (nameLen.length < 3 || !namePattern.test(nameLen)) {
            isValid = false;
            nameField.classList.add('error');
        } else {
            nameField.classList.remove('error');
        }
    }
    return isValid;
}

function validateEmail(emailField) {
    let isValid = true;
    if (emailField) {
        const emailValue = emailField.value.trim();
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 
        if (!emailPattern.test(emailValue)) {
            isValid = false;
            emailField.classList.add('error');
        } else {
            emailField.classList.remove('error');
        }
    }
    return isValid;
}

function validatePassword(passwordField) {
    let isValid = true;
    if (passwordField) {
        const passwordLen = passwordField.value.trim();
        if (passwordLen.length < 8) { 
            isValid = false;
            passwordField.classList.add('error');
        } else {
            passwordField.classList.remove('error');
        }
    }
    return isValid;
}

document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('form');
    const emailField = document.querySelector('input[type="email"]');
    const passwordField = document.querySelector('input[type="password"]');
    const nameField = document.querySelector('#username');

    let ignoreBlur = false;

    nameField.addEventListener('blur', () => {
        if (!ignoreBlur) {
            nameCheck();
        }
    });

    passwordField.addEventListener('blur', () => {
        if (!ignoreBlur) {
            passwordCheck();
        }
    });

    emailField.addEventListener('blur', () => {
        if (!ignoreBlur) {
            emailCheck();
        }
    });

    function nameCheck() {
        if (!validateName(nameField)) {
            ignoreBlur = true; 
            alert("Enter a valid Name");
            setTimeout(() => {
                ignoreBlur = false; 
            }, 0);
        }
    }

    function passwordCheck() {
        if (!validatePassword(passwordField)) {
            ignoreBlur = true; 
            alert("Enter a valid Password");
            setTimeout(() => {
                ignoreBlur = false; 
            }, 0);
        }
    }

    function emailCheck() {
        if (!validateEmail(emailField)) {
            ignoreBlur = true; 
            alert("Enter a valid Email");
            setTimeout(() => {
                ignoreBlur = false; 
            }, 0);
        }
    }

    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            if (!validateForm(form, nameField, passwordField, emailField)) {
                event.preventDefault(); 
                alert('The Information Provided is Invalid');
            }
        });
    });
});
