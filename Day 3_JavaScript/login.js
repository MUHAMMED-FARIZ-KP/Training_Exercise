function validateEmail() {
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailInput.value.trim())) {
        emailError.style.display = 'block';
        emailError.textContent = 'Please enter a valid email address.';
        emailInput.style.borderColor = 'red';
    } else {
        emailError.style.display = 'none';
        emailInput.style.borderColor = 'green';
    }
}

function validatePassword() {
    const passwordInput = document.getElementById('password');
    const passwordError = document.getElementById('passwordError');
   
    if (passwordInput.value.length < 8) {
        passwordError.style.display = 'block';
        passwordError.textContent = 'Password must be at least 8 characters.';
        passwordInput.style.borderColor = 'red';
    } else {
        passwordError.style.display = 'none';
        passwordInput.style.borderColor = 'green';
    }
}



document.getElementById("email").addEventListener("input", (e) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    e.target.style.borderColor = emailRegex.test(e.target.value) ? "green" : "red";
});

document.getElementById("password").addEventListener("input", (e) => {
    e.target.style.borderColor = e.target.value.length >= 8 ? "green" : "red";
});
