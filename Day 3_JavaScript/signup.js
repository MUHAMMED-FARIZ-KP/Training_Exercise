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

document.getElementById("username").addEventListener("input", (e) => {
    e.target.style.borderColor = e.target.value.length >= 3 ? "green" : "red";
});
document.getElementById("firstName").addEventListener("input", (e) => {
    e.target.style.borderColor = e.target.value.length >= 3 ? "green" : "red";
});
document.getElementById("lastName").addEventListener("input", (e) => {
    e.target.style.borderColor = e.target.value.length >= 3 ? "green" : "red";
});
