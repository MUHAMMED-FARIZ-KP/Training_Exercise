function validateForm() {
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isValid = true;

    if (!email.value.trim()) {
        emailError.textContent = "Email is required.";
        emailError.style.display = "block";
        email.style.borderColor = "red";
        isValid = false;
    } else if (!emailRegex.test(email.value.trim())) {
        emailError.textContent = "Please enter a valid email address.";
        emailError.style.display = "block";
        email.style.borderColor = "red";
        isValid = false;
    } else {
        emailError.textContent = "";
        emailError.style.display = "none";
        email.style.borderColor = "green";
    }

    if (!password.value.trim()) {
        passwordError.textContent = "Password is required.";
        passwordError.style.display = "block";
        password.style.borderColor = "red";
        isValid = false;
    } else if (password.value.trim().length < 8) {
        passwordError.textContent = "Password must be at least 8 characters long.";
        passwordError.style.display = "block";
        password.style.borderColor = "red";
        isValid = false;
    } else {
        passwordError.textContent = "";
        passwordError.style.display = "none";
        password.style.borderColor = "green";
    }

    return isValid;
}


document.getElementById("email").addEventListener("input", (e) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    e.target.style.borderColor = emailRegex.test(e.target.value) ? "green" : "red";
});

document.getElementById("password").addEventListener("input", (e) => {
    e.target.style.borderColor = e.target.value.length >= 8 ? "green" : "red";
});
