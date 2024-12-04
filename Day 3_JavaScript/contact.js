function validateName() {
    const nameInput = document.getElementById("name");
    const nameError = document.getElementById("nameError");

    if (nameInput.value.trim().length === 0) {
        nameError.style.display = 'block';
        nameError.textContent = 'Name cannot be empty.';
        nameInput.style.borderColor = 'red';
        return false;
    } else if (nameInput.value.trim().length < 3) {
        nameError.style.display = 'block';
        nameError.textContent = 'Name should be 3 or more characters.';
        nameInput.style.borderColor = 'red';
        return false;
    } else {
        nameError.style.display = 'none';
        nameInput.style.borderColor = 'green';
        return true;
    }
}

function validateEmail() {
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailInput.value.trim().length === 0) {
        emailError.style.display = 'block';
        emailError.textContent = 'Email cannot be empty.';
        emailInput.style.borderColor = 'red';
        return false;
    } else if (!emailRegex.test(emailInput.value.trim())) {
        emailError.style.display = 'block';
        emailError.textContent = 'Please enter a valid email address.';
        emailInput.style.borderColor = 'red';
        return false;
    } else {
        emailError.style.display = 'none';
        emailInput.style.borderColor = 'green';
        return true;
    }
}

function validateMessage() {
    const messageInput = document.getElementById('message');
    const messageError = document.getElementById('messageError');

    if (messageInput.value.trim().length === 0) {
        messageError.style.display = 'block';
        messageError.textContent = 'Message cannot be empty.';
        messageInput.style.borderColor = 'red';
        return false;
    } else {
        messageError.style.display = 'none';
        messageInput.style.borderColor = 'green';
        return true;
    }
}


document.getElementById("form-body").addEventListener("submit", function (e) {
    e.preventDefault();


    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isMessageValid = validateMessage();

    if (isNameValid && isEmailValid && isMessageValid) {
        const successMessage = document.getElementById('successMessage');
        successMessage.textContent = 'Form Submitted Successfully.';
        successMessage.style.display = 'block';
        successMessage.style.color = 'green';
    } else {
        alert("Form contains invalid inputs. Please fix them before submitting.");
    }
});



document.getElementById("email").addEventListener("input", (e) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    e.target.style.borderColor = emailRegex.test(e.target.value) ? "green" : "red";
});


document.getElementById("name").addEventListener("input", (e) => {
    e.target.style.borderColor = e.target.value.length >= 3 ? "green" : "red";
});

const form = document.querySelector('.form-body');
form.addEventListener('submit', (e) => {
  
    if (document.querySelector('.error-message:visible')) {
        e.preventDefault();
        alert('Please fix all errors before submitting the form.');
    }
});