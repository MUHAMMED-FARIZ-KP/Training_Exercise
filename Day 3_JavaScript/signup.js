function validateUsername() {
    const usernameInput = document.getElementById('username');
    const usernameError = document.getElementById('usernameError');
    const usernamePattern = /^[A-Za-z0-9]+$/; 

    if (usernameInput.value.length < 3) {
        usernameError.style.display = 'block';
        usernameError.textContent = 'Username must be at least 3 characters.';
        usernameInput.style.borderColor = 'red';
        return false;
    } else if (!usernamePattern.test(usernameInput.value)) {
        usernameError.style.display = 'block';
        usernameError.textContent = 'Username can only contain letters and numbers (no spaces or special characters).';
        usernameInput.style.borderColor = 'red';
        return false;
    } else {
        usernameError.style.display = 'none';
        usernameInput.style.borderColor = 'green';
        return true;
    }
}



function validateFirstName() {
    const firstNameInput = document.getElementById('firstName');
    const firstNameError = document.getElementById('firstNameError');
    const namePattern = /^[A-Za-z\s]+$/; 

    if (firstNameInput.value.length < 3) {
        firstNameError.style.display = 'block';
        firstNameError.textContent = 'First name must be at least 3 characters.';
        firstNameInput.style.borderColor = 'red';
        return false;
    } else if (!namePattern.test(firstNameInput.value)) {
        firstNameError.style.display = 'block';
        firstNameError.textContent = 'First name cannot contain numbers or special characters.';
        firstNameInput.style.borderColor = 'red';
        return false;
    } else {
        firstNameError.style.display = 'none';
        firstNameInput.style.borderColor = 'green';
        return true;
    }
}


function validateLastName() {
    const lastNameInput = document.getElementById('lastName');
    const lastNameError = document.getElementById('lastNameError');
    const namePattern = /^[A-Za-z\s]+$/; 

    if (lastNameInput.value.length < 3) {
        lastNameError.style.display = 'block';
        lastNameError.textContent = 'Last name must be at least 3 characters.';
        lastNameInput.style.borderColor = 'red';
        return false;
    } else if (!namePattern.test(lastNameInput.value)) {
        lastNameError.style.display = 'block';
        lastNameError.textContent = 'Last name cannot contain numbers or special characters.';
        lastNameInput.style.borderColor = 'red';
        return false;
    } else {
        lastNameError.style.display = 'none';
        lastNameInput.style.borderColor = 'green';
        return true;
    }
}


function validatePassword() {
    const passwordInput = document.getElementById('password');
    const passwordError = document.getElementById('passwordError');
   
    if (passwordInput.value.length < 8) {
        passwordError.style.display = 'block';
        passwordError.textContent = 'Password must be at least 8 characters.';
        passwordInput.style.borderColor = 'red';
        return false;
    } else {
        passwordError.style.display = 'none';
        passwordInput.style.borderColor = 'green';
        return true;
    }
}
function validateConfirmPassword() {
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const confirmPasswordError = document.getElementById('confirmPasswordError');

    if (confirmPasswordInput.value.length < 8) {
        confirmPasswordError.style.display = 'block';
        confirmPasswordError.textContent = 'Password must be at least 8 characters.';
        confirmPasswordInput.style.borderColor = 'red';
        return false;
    } else if (confirmPasswordInput.value !== passwordInput.value) {
        confirmPasswordError.style.display = 'block';
        confirmPasswordError.textContent = 'Passwords do not match.';
        confirmPasswordInput.style.borderColor = 'red';
        return false;
    } else {
        confirmPasswordError.style.display = 'none';
        confirmPasswordInput.style.borderColor = 'green';
        return true;
    }
}

function validatePhone() {
    const phoneInput = document.getElementById('phone');
    const phoneError = document.getElementById('phoneError');
   
    if (phoneInput.value.length < 10) {
        phoneError.style.display = 'block';
        phoneError.textContent = 'phone number must be at least 10 digits.';
        phoneInput.style.borderColor = 'red';
        return false;
    } else {
        phoneError.style.display = 'none';
        phoneInput.style.borderColor = 'green';
        return true;
    }
}
function validateEmail() {
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailInput.value.trim())) {
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
function validateAddress(){
    const addressInput = document.getElementById('address');
    const addressError = document.getElementById('addressError');
    if(addressInput.value.length == 0){

        addressError.style.display = 'block';
        addressError.textContent = 'Address cannot be empty';
        addressInput.style.borderColor = 'red';
        return false;
    } else {
        addressError.style.display = 'none';
        addressInput.style.borderColor = 'green';
        return true;
    
    }

}

document.getElementById("form-body").addEventListener("submit", function (e) {
    e.preventDefault();

 
    const isUsernameValid = validateUsername();
    const isFirstNameValid = validateFirstName();
    const isLastNameValid = validateLastName();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();
    const isPhoneValid = validatePhone();
    const isEmailValid = validateEmail();
    const isAddressValid = validateAddress();


    if (
        isUsernameValid &&
        isFirstNameValid &&
        isLastNameValid &&
        isPasswordValid &&
        isConfirmPasswordValid &&
        isPhoneValid &&
        isEmailValid &&
        isAddressValid
    ) {
        const successMessage = document.getElementById('successMessage');
        successMessage.textContent = 'Form Submitted Successfully.';
        successMessage.style.display = 'block';
        successMessage.style.color = 'green';
    } else {
        alert("Form contains invalid inputs. Please fix them before submitting.");
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const stateDropdown = document.getElementById("state");
    const cityDropdown = document.getElementById("city");

    const citiesByState = {
        kerala: ["Kochi", "Trivandrum", "Calicut"],
        karnataka: ["Bangalore", "Mysore", "Mangalore"],
        tamilnadu: ["Chennai", "Coimbatore", "Madurai"]
    };

    
    stateDropdown.addEventListener("change", () => {
        const selectedState = stateDropdown.value;
        cityDropdown.innerHTML = `<option value="">-- Select City --</option>`; // Clear previous options

        if (selectedState && citiesByState[selectedState]) {
            citiesByState[selectedState].forEach(city => {
                const option = document.createElement("option");
                option.value = city.toLowerCase();
                option.textContent = city;
                cityDropdown.appendChild(option);
            });
        }
    });
});

document.getElementById("firstName").addEventListener("input", (e) => {
    e.target.style.borderColor = e.target.value.length >= 3 ? "green" : "red";
});
document.getElementById("lastName").addEventListener("input", (e) => {
    e.target.style.borderColor = e.target.value.length >= 3 ? "green" : "red";
});
document.getElementById("username").addEventListener("input", (e) => {
    e.target.style.borderColor = e.target.value.length >= 3 ? "green" : "red";
});


document.getElementById("password").addEventListener("input", (e) => {
    e.target.style.borderColor = e.target.value.length >= 8 ? "green" : "red";
});
document.getElementById("confirmPassword").addEventListener("input", (e) => {
    e.target.style.borderColor = e.target.value.length >= 8 ? "green" : "red";
});

document.getElementById('dob').addEventListener('change', function () {
    const dob = new Date(this.value);
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const m = today.getMonth() - dob.getMonth();

    
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    document.getElementById('age').value = age;
});
document.getElementById("phone").addEventListener("input", (e) => {
    e.target.style.borderColor = e.target.value.length == 10 ? "green" : "red";
});
document.getElementById("email").addEventListener("input", (e) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    e.target.style.borderColor = emailRegex.test(e.target.value) ? "green" : "red";
});


const form = document.querySelector('.form-body');
form.addEventListener('submit', (e) => {
  
    if (document.querySelector('.error-message:visible')) {
        e.preventDefault();
        alert('Please fix all errors before submitting the form.');
    }
});