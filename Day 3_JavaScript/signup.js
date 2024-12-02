function validateUsername(){
    const usernameInput=document.getElementById('username')
    const usernameError = document.getElementById('usernameError');
    if(usernameInput.value.length<3){
        usernameError.style.display = 'block';
        usernameError.textContent = 'Username must be at least 3 characters.';
        usernameInput.style.borderColor = 'red';

    }
}



function validateFirstName(){
    const firstNameInput=document.getElementById('firstName')
    const firstNameError = document.getElementById('firstNameError');
    if(firstNameInput.value.length<3){
        firstNameError.style.display = 'block';
        firstNameError.textContent = 'First name must be at least 3 characters.';
        firstNameInput.style.borderColor = 'red';

    }
    else {
    firstNameError.style.display = 'none';
    firstNameInput.style.borderColor = 'green';
    }
}

function validateLastName(){
    const lastNameInput=document.getElementById('lastName')
    const lastNameError = document.getElementById('lastNameError');
    if(lastNameInput.value.length<3){
        lastNameError.style.display = 'block';
        lastNameError.textContent = 'Last name must be at least 3 characters.';
        lastNameInput.style.borderColor = 'red';

    }
    else {
        lastNameError.style.display = 'none';
        lastNameInput.style.borderColor = 'green';
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
function validateConfirmPassword() {
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const confirmPasswordError = document.getElementById('confirmPasswordError');

    if (confirmPasswordInput.value.length < 8) {
        confirmPasswordError.style.display = 'block';
        confirmPasswordError.textContent = 'Password must be at least 8 characters.';
        confirmPasswordInput.style.borderColor = 'red';
    } else if (confirmPasswordInput.value !== passwordInput.value) {
        confirmPasswordError.style.display = 'block';
        confirmPasswordError.textContent = 'Passwords do not match.';
        confirmPasswordInput.style.borderColor = 'red';
    } else {
        confirmPasswordError.style.display = 'none';
        confirmPasswordInput.style.borderColor = 'green';
    }
}


document.getElementById("username").addEventListener("input", (e) => {
    e.target.style.borderColor = e.target.value.length >= 3 ? "green" : "red";
});
document.getElementById("firstName").addEventListener("input", (e) => {
    e.target.style.borderColor = e.target.value.length >= 3 ? "green" : "red";
});
document.getElementById("lastName").addEventListener("input", (e) => {
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

