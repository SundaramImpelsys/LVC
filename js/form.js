function validateForm(form) {
    let isValid = true;

    const emailField = form.querySelector('input[type="email"]');
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

    const passwordField = form.querySelector('input[type="password"]');
    if (passwordField) {
        const passwordValue = passwordField.value.trim();
        if (passwordValue.length < 8) { 
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

    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            if (!validateForm(form)) {
                event.preventDefault(); 
                alert('The Information Provided is Invalid');
            }
        });
    });
});
