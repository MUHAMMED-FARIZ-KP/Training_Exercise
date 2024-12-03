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


var successMessage=document.getElementById('successMessage');
document.getElementById("loginForm").addEventListener("submit", function (e) {
    // Prevent form submission
    e.preventDefault();

    // Perform validation
    validateEmail();
    validatePassword();

    // Check if there are any validation errors
    const emailError = document.getElementById("emailError").textContent;
    const passwordError = document.getElementById("passwordError").textContent;

    if (!emailError && !passwordError) {
        successMessage.textContent = 'Form Submitted Successfully.';
        successMessage.style.display = 'block';
        successMessage.style.color="Green"
    } else {
        emailError.textContent = 'Please enter a valid email address.';
        alert("Form contains invalid inputs. Please fix them before submitting.");
    }
});



document.getElementById("email").addEventListener("input", (e) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    e.target.style.borderColor = emailRegex.test(e.target.value) ? "green" : "red";
});

document.getElementById("password").addEventListener("input", (e) => {
    e.target.style.borderColor = e.target.value.length >= 8 ? "green" : "red";
});
